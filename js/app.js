/* CGL Recap — SSC CGL Tier 1 revision app.
 * Plain JS, no build step. Content lives in data/*.js (window.CGL_DATA),
 * progress is stored in localStorage. Hash-based routing so it works on
 * GitHub Pages and when opened directly from disk.
 */
(function () {
  "use strict";

  // ================= Content =================
  const RAW = window.CGL_DATA || {};
  // Order follows the Tier 1 paper.
  const SUBJECT_ORDER = ["reasoning", "gk", "quant", "english"];
  const SUBJECTS = SUBJECT_ORDER.filter((id) => RAW[id]).map((id) => RAW[id]);
  const ACCENT = { reasoning: "#7c3aed", gk: "#0891b2", quant: "#ea580c", english: "#db2777" };
  const SHORT = { reasoning: "Reasoning", gk: "General Awareness", quant: "Quant", english: "English" };

  const QUESTIONS = [];
  const QMAP = {};
  SUBJECTS.forEach((s) =>
    s.topics.forEach((t) =>
      (t.questions || []).forEach((q, i) => {
        const item = Object.assign({}, q, {
          ref: `${s.id}/${t.id}/${i}`,
          subjectId: s.id,
          topicId: t.id,
          topicName: t.name,
        });
        QUESTIONS.push(item);
        QMAP[item.ref] = item;
      })
    )
  );

  const getSubject = (id) => SUBJECTS.find((s) => s.id === id);
  const getTopic = (sid, tid) => {
    const s = getSubject(sid);
    return s ? s.topics.find((t) => t.id === tid) : null;
  };

  // Exam marking scheme (Tier 1).
  const MARK_RIGHT = 2;
  const MARK_WRONG = 0.5;
  const MOCK_TYPES = {
    full: { name: "Full mock", perSection: 25, minutes: 60, desc: "100 questions · 60 minutes · exactly like Tier 1" },
    mini: { name: "Mini mock", perSection: 10, minutes: 24, desc: "40 questions · 24 minutes · same pace, less time" },
  };

  // ================= Storage =================
  const STORE_KEY = "cglRecap.v1";
  const defaultState = () => ({
    examDate: "",
    theme: "",
    qs: {},        // ref -> { c, w, last, at }
    cards: {},     // flashcard ref -> 1 (known)
    revised: {},   // "subject/topic" -> timestamp
    bookmarks: {}, // question ref -> timestamp
    mocks: [],     // newest first
    myNotes: [],
    activeMock: null,
  });

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY));
      return Object.assign(defaultState(), saved || {});
    } catch (e) {
      return defaultState();
    }
  }
  let state = load();
  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch (e) {
      toast("Could not save progress (storage full or blocked).");
    }
  }

  // ================= Utilities =================
  const $app = document.getElementById("app");
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const LETTERS = "ABCD";

  // "Report a mistake" links open a pre-filled GitHub issue. To collect reports
  // with a Google Form instead (no GitHub account needed), fill in REPORT_FORM:
  // see "Collecting mistake reports" in README.md.
  const REPORT_ISSUES_URL = "https://github.com/knaranje/CGL-Application/issues/new";
  const REPORT_FORM = { url: "", field: "" }; // e.g. { url: "https://docs.google.com/forms/d/e/…/viewform", field: "entry.123456789" }

  function plainText(html) {
    const div = document.createElement("div");
    div.innerHTML = String(html).replace(/<br\s*\/?>/gi, " / ").replace(/<sup>/gi, "^");
    return div.textContent.trim();
  }
  function reportLink(title, details) {
    const body = `${details}\n\nWhat is wrong (and the correct answer, if you know it):\n`;
    const href = REPORT_FORM.url && REPORT_FORM.field
      ? `${REPORT_FORM.url}?usp=pp_url&${REPORT_FORM.field}=${encodeURIComponent(`${title}\n\n${body}`)}`
      : `${REPORT_ISSUES_URL}?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    return `<div class="report-row"><a class="report-link" href="${esc(href)}" target="_blank" rel="noopener">⚑ Report a mistake</a></div>`;
  }
  function questionReport(q) {
    const where = `${SHORT[q.subjectId]} › ${q.topicName}, Q${Number(q.ref.split("/")[2]) + 1}`;
    const opts = q.options.map((o, k) => `${LETTERS[k]}. ${plainText(o)}`).join("\n");
    return reportLink(`Mistake: ${where}`,
      `Question [${q.ref}]\n${plainText(q.q)}\n${opts}\nKeyed answer: ${LETTERS[q.answer]}\nExplanation: ${plainText(q.explanation || "")}`);
  }
  function cardReport(c) {
    const [sid, tid] = c.ref.split("/");
    const t = getTopic(sid, tid);
    return reportLink(`Mistake: ${SHORT[sid]} › ${t ? t.name : tid}, flashcard`,
      `Flashcard [${c.ref}]\nFront: ${plainText(c.front)}\nBack: ${plainText(c.back)}`);
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function fmtClock(sec) {
    sec = Math.max(0, Math.floor(sec));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  function fmtDuration(ms) {
    const min = Math.floor(ms / 60000);
    const sec = Math.round((ms % 60000) / 1000);
    return min ? `${min} min ${sec} s` : `${sec} s`;
  }
  const fmtDate = (d) =>
    new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  const fmtScore = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

  const progressBar = (p, cls = "") => `<div class="progress ${cls}"><div style="width:${p}%"></div></div>`;

  let toastTimer = null;
  function toast(msg) {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
  }

  // Per-page cleanup (timers, key handlers).
  let keyHandler = null;
  let intervals = [];
  function resetPage() {
    keyHandler = null;
    intervals.forEach(clearInterval);
    intervals = [];
  }
  document.addEventListener("keydown", (e) => {
    if (!keyHandler) return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    keyHandler(e);
  });

  // ================= Progress =================
  function recordAnswer(ref, correct) {
    const r = state.qs[ref] || { c: 0, w: 0, last: 0 };
    if (correct) r.c++;
    else r.w++;
    r.last = correct ? 1 : 0;
    r.at = Date.now();
    state.qs[ref] = r;
  }

  function topicStats(s, t) {
    let seen = 0, attempted = 0, correct = 0;
    const total = (t.questions || []).length;
    for (let i = 0; i < total; i++) {
      const r = state.qs[`${s.id}/${t.id}/${i}`];
      if (!r) continue;
      seen++;
      attempted += r.c + r.w;
      correct += r.c;
    }
    return { total, seen, attempted, correct, acc: pct(correct, attempted), revised: !!state.revised[`${s.id}/${t.id}`] };
  }

  function subjectStats(s) {
    const agg = { topics: s.topics.length, revised: 0, total: 0, seen: 0, attempted: 0, correct: 0 };
    s.topics.forEach((t) => {
      const st = topicStats(s, t);
      agg.revised += st.revised ? 1 : 0;
      agg.total += st.total;
      agg.seen += st.seen;
      agg.attempted += st.attempted;
      agg.correct += st.correct;
    });
    agg.acc = pct(agg.correct, agg.attempted);
    return agg;
  }

  function weakTopics(limit = 5, subjectId = null) {
    const list = [];
    SUBJECTS.forEach((s) => {
      if (subjectId && s.id !== subjectId) return;
      s.topics.forEach((t) => {
        const st = topicStats(s, t);
        if (st.attempted >= 3 && st.acc < 60) list.push({ s, t, st });
      });
    });
    return list.sort((a, b) => a.st.acc - b.st.acc).slice(0, limit);
  }

  function daysLeft() {
    if (!state.examDate) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const exam = new Date(state.examDate + "T00:00:00");
    return Math.round((exam - today) / 86400000);
  }

  // Questions not yet seen or last answered wrong come first.
  function prioritised(pool) {
    const rank = (q) => {
      const r = state.qs[q.ref];
      if (!r) return 1;
      return r.last === 0 ? 0 : 2;
    };
    return shuffle(pool).sort((a, b) => rank(a) - rank(b));
  }

  // ================= Router =================
  function route() {
    resetPage();
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
    const [page, a, b, c] = parts;

    if (!SUBJECTS.length) {
      $app.innerHTML = `<div class="card empty"><div class="big">⚠️</div><p>Study content could not be loaded. Make sure the <code>data</code> folder is next to <code>index.html</code>.</p></div>`;
      return;
    }

    switch (page) {
      case undefined: renderHome(); break;
      case "subject": renderSubject(a); break;
      case "topic": renderTopic(a, b, c || "notes"); break;
      case "sheet": renderSheet(a); break;
      case "revise": a ? renderReviseRun(a, b || "all") : renderRevise(); break;
      case "mock":
        if (a === "run") renderMockRun();
        else if (a === "result") renderMockResult(Number(b) || 0);
        else renderMockHome();
        break;
      case "reference": renderReference(); break;
      case "saved": renderSaved(); break;
      case "notes": renderMyNotes(); break;
      default: renderNotFound();
    }

    const navKey = { subject: "home", topic: "home", sheet: "home" }[page] || page || "home";
    document.querySelectorAll(".nav a").forEach((el) => el.classList.toggle("active", el.dataset.nav === navKey));
    window.scrollTo(0, 0);
    $app.focus({ preventScroll: true });
  }

  function renderNotFound() {
    $app.innerHTML = `<div class="card empty"><div class="big">🤔</div><p>That page doesn't exist.</p><a class="btn primary" href="#/">Go home</a></div>`;
  }

  // ================= Home =================
  function renderHome() {
    let attempted = 0, correct = 0, revised = 0, topics = 0, seen = 0;
    SUBJECTS.forEach((s) => {
      const st = subjectStats(s);
      attempted += st.attempted;
      correct += st.correct;
      revised += st.revised;
      topics += st.topics;
      seen += st.seen;
    });
    const lastMock = state.mocks[0];
    const weak = weakTopics(5);

    $app.innerHTML = `
      ${state.activeMock ? `<div class="callout" style="margin-bottom:1rem">⏱️ You have a mock test in progress. <a href="#/mock/run"><b>Resume it</b></a></div>` : ""}
      <section class="card hero">
        <div>
          <h1>SSC CGL Tier 1: Revise &amp; Recap</h1>
          <p class="muted">Short notes, flashcards, topic-wise practice and full-length timed mocks for all four sections, built for last-month revision.</p>
          <div class="btn-row">
            <a class="btn primary" href="#/mock">⏱️ Take a mock test</a>
            <a class="btn" href="#/revise">⚡ Quick revision</a>
          </div>
        </div>
        <div class="countdown" id="countdown">${countdownHTML()}</div>
      </section>

      <section class="stats">
        <div class="card stat"><div class="stat-num">${revised}/${topics}</div><div class="stat-label">Topics revised</div></div>
        <div class="card stat"><div class="stat-num">${seen}/${QUESTIONS.length}</div><div class="stat-label">Questions practised</div></div>
        <div class="card stat"><div class="stat-num">${attempted ? pct(correct, attempted) + "%" : "–"}</div><div class="stat-label">Overall accuracy</div></div>
        <div class="card stat"><div class="stat-num">${lastMock ? `${fmtScore(lastMock.score)}<span class="muted small">/${lastMock.max}</span>` : "–"}</div><div class="stat-label">Last mock score</div></div>
      </section>

      <h2 class="section-title">Subjects</h2>
      <section class="grid subjects">${SUBJECTS.map(subjectCard).join("")}</section>

      <section class="grid two" style="margin-top:1rem">
        <div class="card">
          <h3>🎯 Focus areas</h3>
          ${weak.length
            ? `<ul class="list">${weak.map(({ s, t, st }) => `
                <li class="weak-item">
                  <div><a href="#/topic/${s.id}/${t.id}/notes"><b>${esc(t.name)}</b></a><div class="small muted">${esc(SHORT[s.id] || s.name)}</div></div>
                  <span class="badge bad">${st.acc}%</span>
                </li>`).join("")}</ul>
               <a class="btn sm" style="margin-top:.5rem" href="#/revise/weak/all">Practise weak topics</a>`
            : `<p class="muted small">Topics where your accuracy is below 60% will appear here. Practise a few topics to get started.</p>`}
        </div>
        <div class="card">
          <h3>📋 Tier 1 exam pattern</h3>
          <div class="table-wrap"><table class="pattern-table">
            <thead><tr><th>Section</th><th class="num">Qs</th><th class="num">Marks</th></tr></thead>
            <tbody>
              ${SUBJECTS.map((s) => `<tr><td>${esc(s.name)}</td><td class="num">25</td><td class="num">50</td></tr>`).join("")}
              <tr><td><b>Total</b></td><td class="num"><b>100</b></td><td class="num"><b>200</b></td></tr>
            </tbody>
          </table></div>
          <p class="small muted" style="margin-top:.6rem">60 minutes · +${MARK_RIGHT} for a correct answer · −${MARK_WRONG} for a wrong one. Check the latest official notice for any changes.</p>
        </div>
      </section>

      <section class="card" style="margin-top:1rem">
        <h3>💾 Your data</h3>
        <p class="small muted">Progress is saved in this browser only. Export a backup to move it to another device.</p>
        <div class="btn-row">
          <button class="btn sm" id="exportBtn" type="button">Export backup</button>
          <label class="btn sm" for="importFile">Import backup</label>
          <input type="file" id="importFile" accept="application/json,.json" class="hidden">
          <button class="btn sm danger" id="resetBtn" type="button">Reset progress</button>
        </div>
      </section>`;

    bindCountdown();
    document.getElementById("exportBtn").onclick = exportData;
    document.getElementById("importFile").onchange = importData;
    document.getElementById("resetBtn").onclick = () => {
      if (!confirm("Delete all progress, mock results and notes on this device? This cannot be undone.")) return;
      const theme = state.theme;
      state = defaultState();
      state.theme = theme;
      save();
      toast("Progress reset");
      route();
    };
  }

  function countdownHTML(editing = false) {
    const days = daysLeft();
    if (days === null || editing) {
      return `
        <div class="count-label">📅 Your exam date</div>
        <form class="exam-form" id="examForm">
          <input type="date" id="examDate" required aria-label="Exam date" value="${esc(state.examDate)}">
          <button class="btn primary sm" type="submit">Set</button>
        </form>
        <div class="small muted">Check your admit card or ssc.gov.in</div>`;
    }
    let num = Math.abs(days), label;
    if (days > 1) label = "days to go";
    else if (days === 1) label = "day to go";
    else if (days === 0) { num = "🎯"; label = "Exam day. All the best!"; }
    else label = days === -1 ? "day since exam" : "days since exam";
    return `
      <div class="count-num">${num}</div>
      <div class="count-label">${label}</div>
      <div class="small muted">${fmtDate(state.examDate + "T00:00:00")}</div>
      <button class="link-btn" id="changeDate" type="button">Change date</button>`;
  }

  function bindCountdown() {
    const box = document.getElementById("countdown");
    const form = document.getElementById("examForm");
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        state.examDate = document.getElementById("examDate").value;
        save();
        box.innerHTML = countdownHTML();
        bindCountdown();
      };
    }
    const change = document.getElementById("changeDate");
    if (change) {
      change.onclick = () => {
        box.innerHTML = countdownHTML(true);
        bindCountdown();
      };
    }
  }

  function subjectCard(s) {
    const st = subjectStats(s);
    return `
      <a class="card subject-card" href="#/subject/${s.id}" style="--accent:${ACCENT[s.id] || "var(--primary)"}">
        <div class="subject-icon">${s.icon || "📘"}</div>
        <div>
          <h3>${esc(s.name)}</h3>
          <div class="small muted">${s.topics.length} topics · ${st.total} questions</div>
        </div>
        ${progressBar(pct(st.revised, st.topics))}
        <div class="small meta"><span>${st.revised}/${st.topics} revised</span><span>${st.attempted ? st.acc + "% accuracy" : "Not started"}</span></div>
      </a>`;
  }

  // ================= Subject =================
  function renderSubject(sid) {
    const s = getSubject(sid);
    if (!s) return renderNotFound();
    const st = subjectStats(s);
    $app.innerHTML = `
      <div class="page-head" style="--accent:${ACCENT[s.id]}">
        <div class="crumbs"><a href="#/">Home</a><span>›</span>${esc(s.name)}</div>
        <h1>${s.icon || ""} ${esc(s.name)}</h1>
        <p class="muted">${st.revised} of ${st.topics} topics revised · ${st.seen}/${st.total} questions practised${st.attempted ? ` · ${st.acc}% accuracy` : ""}</p>
        ${progressBar(pct(st.revised, st.topics))}
        <div class="btn-row">
          <a class="btn primary" href="#/revise/mix/${s.id}">⚡ Mixed practice (20 Q)</a>
          <a class="btn" href="#/revise/cards/${s.id}">🃏 Flashcard sprint</a>
          <a class="btn" href="#/sheet/${s.id}">📄 Full revision sheet</a>
          ${s.id === "quant" ? `<a class="btn" href="#/reference">📐 Tables &amp; formula sheet</a>` : ""}
        </div>
      </div>
      <div>
        ${s.topics.map((t) => {
          const ts = topicStats(s, t);
          return `
          <div class="card topic-row">
            <div>
              <h3><a href="#/topic/${s.id}/${t.id}/notes">${esc(t.name)}</a> ${ts.revised ? `<span class="badge ok">✓ Revised</span>` : ""}</h3>
              <div class="small muted">
                ${(t.flashcards || []).length} flashcards · ${ts.seen}/${ts.total} questions practised
                ${ts.attempted ? ` · <span class="badge ${ts.acc >= 75 ? "ok" : ts.acc >= 60 ? "warn" : "bad"}">${ts.acc}%</span>` : ""}
              </div>
            </div>
            <div class="topic-actions">
              <a class="btn sm" href="#/topic/${s.id}/${t.id}/notes">📖 Notes</a>
              <a class="btn sm" href="#/topic/${s.id}/${t.id}/cards">🃏 Cards</a>
              <a class="btn sm primary" href="#/topic/${s.id}/${t.id}/quiz">✍️ Practice</a>
            </div>
          </div>`;
        }).join("")}
      </div>`;
  }

  // ================= Topic =================
  const notesHTML = (t) =>
    (t.notes || [])
      .map((n) => `<div class="note-block"><h3>${n.heading}</h3><ul>${(n.points || []).map((p) => `<li>${p}</li>`).join("")}</ul></div>`)
      .join("") || `<p class="muted">No notes for this topic yet.</p>`;

  function renderTopic(sid, tid, tab) {
    const s = getSubject(sid);
    const t = getTopic(sid, tid);
    if (!t) return renderNotFound();
    const key = `${sid}/${tid}`;
    const idx = s.topics.indexOf(t);
    const prev = s.topics[idx - 1];
    const next = s.topics[idx + 1];
    const base = `#/topic/${sid}/${tid}`;
    const tabs = [["notes", "📖 Notes"], ["cards", "🃏 Flashcards"], ["quiz", "✍️ Practice"]];
    if (!tabs.some(([k]) => k === tab)) tab = "notes";

    $app.innerHTML = `
      <div class="page-head">
        <div class="crumbs"><a href="#/">Home</a><span>›</span><a href="#/subject/${sid}">${esc(s.name)}</a><span>›</span>${esc(t.name)}</div>
        <div class="btn-row" style="justify-content:space-between;margin-top:0">
          <h1 style="margin:0">${esc(t.name)}</h1>
          <button class="btn sm ${state.revised[key] ? "success" : ""}" id="revisedBtn" type="button">${state.revised[key] ? "✓ Revised" : "Mark as revised"}</button>
        </div>
      </div>
      <nav class="tabs">${tabs.map(([k, label]) => `<a href="${base}/${k}" class="${k === tab ? "active" : ""}">${label}</a>`).join("")}</nav>
      <div id="tabBody"></div>
      <div class="topic-nav no-print">
        ${prev ? `<a class="btn" href="#/topic/${sid}/${prev.id}/${tab}">← ${esc(prev.name)}</a>` : "<span></span>"}
        ${next ? `<a class="btn" href="#/topic/${sid}/${next.id}/${tab}">${esc(next.name)} →</a>` : `<a class="btn" href="#/subject/${sid}">Back to ${esc(SHORT[sid] || s.name)}</a>`}
      </div>`;

    document.getElementById("revisedBtn").onclick = (e) => {
      if (state.revised[key]) delete state.revised[key];
      else state.revised[key] = Date.now();
      save();
      e.currentTarget.classList.toggle("success", !!state.revised[key]);
      e.currentTarget.textContent = state.revised[key] ? "✓ Revised" : "Mark as revised";
    };

    const body = document.getElementById("tabBody");
    if (tab === "notes") {
      body.innerHTML = `<div class="card">${notesHTML(t)}${reportLink(`Mistake: ${SHORT[sid]} › ${t.name}, notes`, `Notes [${key}]
Which point (copy the text):`)}</div>
        <div class="btn-row" style="margin-top:1rem">
          <a class="btn primary" href="${base}/cards">Next: flashcards →</a>
          <a class="btn" href="${base}/quiz">Skip to practice</a>
        </div>`;
    } else if (tab === "cards") {
      const cards = (t.flashcards || []).map((c, i) => ({ ref: `${key}/c${i}`, front: c.front, back: c.back }));
      mountFlashcards(body, cards, { doneHref: `${base}/quiz`, doneLabel: "Practise questions →" });
    } else {
      const qs = (t.questions || []).map((_, i) => QMAP[`${key}/${i}`]);
      mountPractice(body, qs, {
        onFinish: () => {
          if (!state.revised[key]) {
            state.revised[key] = Date.now();
            save();
            const btn = document.getElementById("revisedBtn");
            if (btn) { btn.classList.add("success"); btn.textContent = "✓ Revised"; }
          }
        },
        nextHref: next ? `#/topic/${sid}/${next.id}/notes` : `#/subject/${sid}`,
        nextLabel: next ? `Next topic: ${next.name} →` : "Back to subject",
      });
    }
  }

  // ================= Revision sheet =================
  function renderSheet(sid) {
    const s = getSubject(sid);
    if (!s) return renderNotFound();
    $app.innerHTML = `
      <div class="page-head">
        <div class="crumbs no-print"><a href="#/">Home</a><span>›</span><a href="#/subject/${sid}">${esc(s.name)}</a><span>›</span>Revision sheet</div>
        <h1>${esc(s.name)}: revision sheet</h1>
        <p class="muted">All ${s.topics.length} topics on one page, handy for a final read-through.</p>
        <div class="btn-row no-print"><button class="btn" type="button" onclick="window.print()">🖨️ Print / Save as PDF</button></div>
      </div>
      ${s.topics.map((t) => `<section class="card sheet-topic"><h2>${esc(t.name)}</h2>${notesHTML(t)}</section>`).join("")}`;
  }

  // ================= Flashcards =================
  function mountFlashcards(container, allCards, opts = {}) {
    if (!allCards.length) {
      container.innerHTML = `<div class="card empty"><p>No flashcards here yet.</p></div>`;
      return;
    }
    let deck = allCards.slice();
    let i = 0;
    let flipped = false;

    function draw() {
      const c = deck[i];
      const known = !!state.cards[c.ref];
      const knownCount = allCards.filter((x) => state.cards[x.ref]).length;
      container.innerHTML = `
        <div class="fc-toolbar">
          <span class="small muted">Card ${i + 1} of ${deck.length} · ${knownCount}/${allCards.length} known</span>
          <button class="btn sm" data-act="shuffle" type="button">🔀 Shuffle</button>
        </div>
        <div class="flashcard ${flipped ? "flipped" : ""}" data-act="flip" role="button" tabindex="0" aria-label="Flashcard, press to flip">
          <div class="fc-inner">
            <div class="fc-face fc-front">${c.label ? `<span class="fc-label">${esc(c.label)}</span>` : ""}<div>${c.front}</div><span class="fc-hint">Tap or press Space to reveal</span></div>
            <div class="fc-face fc-back"><div>${c.back}</div></div>
          </div>
        </div>
        <div class="fc-actions">
          <button class="btn" data-act="prev" type="button" ${i === 0 ? "disabled" : ""}>← Prev</button>
          <button class="btn ${known ? "success" : ""}" data-act="known" type="button">${known ? "✓ Known" : "Mark as known"}</button>
          <button class="btn primary" data-act="next" type="button">${i === deck.length - 1 ? "Finish" : "Next →"}</button>
        </div>
        ${cardReport(c)}`;
    }

    function drawDone() {
      const unknown = allCards.filter((x) => !state.cards[x.ref]);
      container.innerHTML = `
        <div class="card empty">
          <div class="big">🎉</div>
          <h3>Deck complete</h3>
          <p>${allCards.length - unknown.length} of ${allCards.length} cards marked as known.</p>
          <div class="btn-row" style="justify-content:center">
            ${unknown.length && unknown.length < allCards.length ? `<button class="btn" data-act="unknown" type="button">Review ${unknown.length} not-known</button>` : ""}
            <button class="btn" data-act="restart" type="button">Start again</button>
            ${opts.doneHref ? `<a class="btn primary" href="${opts.doneHref}">${esc(opts.doneLabel || "Continue")}</a>` : ""}
          </div>
        </div>`;
      container.onclick = (e) => {
        const b = e.target.closest("[data-act]");
        if (!b) return;
        deck = b.dataset.act === "unknown" ? unknown : allCards.slice();
        i = 0;
        flipped = false;
        bind();
        draw();
      };
      keyHandler = null;
    }

    function act(name) {
      if (name === "flip") {
        flipped = !flipped;
        const el = container.querySelector(".flashcard");
        if (el) el.classList.toggle("flipped", flipped);
        return;
      }
      if (name === "known") {
        // Update in place so the card stays flipped.
        const c = deck[i];
        if (state.cards[c.ref]) delete state.cards[c.ref];
        else state.cards[c.ref] = 1;
        save();
        const known = !!state.cards[c.ref];
        const btn = container.querySelector('[data-act="known"]');
        btn.classList.toggle("success", known);
        btn.textContent = known ? "✓ Known" : "Mark as known";
        const knownCount = allCards.filter((x) => state.cards[x.ref]).length;
        container.querySelector(".fc-toolbar .muted").textContent =
          `Card ${i + 1} of ${deck.length} · ${knownCount}/${allCards.length} known`;
        return;
      }
      if (name === "shuffle") {
        deck = shuffle(deck);
        i = 0;
        toast("Shuffled");
      } else if (name === "prev" && i > 0) {
        i--;
      } else if (name === "next") {
        if (i === deck.length - 1) return drawDone();
        i++;
      } else {
        return;
      }
      flipped = false;
      draw();
    }

    function bind() {
      container.onclick = (e) => {
        const b = e.target.closest("[data-act]");
        if (b) act(b.dataset.act);
      };
      keyHandler = (e) => {
        if (e.key === " " || e.key === "Enter") { e.preventDefault(); act("flip"); }
        else if (e.key === "ArrowRight") act("next");
        else if (e.key === "ArrowLeft") act("prev");
        else if (e.key.toLowerCase() === "k") act("known");
      };
    }

    bind();
    draw();
  }

  // ================= Practice (instant feedback) =================
  function mountPractice(container, questions, opts = {}) {
    questions = questions.filter(Boolean);
    if (!questions.length) {
      container.innerHTML = `<div class="card empty"><div class="big">📭</div><p>${esc(opts.emptyText || "No questions here yet.")}</p></div>`;
      return;
    }
    let i = 0;
    let chosen = null;
    const results = [];

    function drawQuestion() {
      const q = questions[i];
      const bm = !!state.bookmarks[q.ref];
      const right = results.filter((r) => r.ok).length;
      container.innerHTML = `
        <div class="card practice">
          <div class="practice-top">
            <span class="small muted">Question ${i + 1} of ${questions.length}${opts.showTopic ? ` · ${esc(SHORT[q.subjectId])} › ${esc(q.topicName)}` : ""}</span>
            <button class="icon-btn bm ${bm ? "on" : ""}" data-act="bm" type="button" title="${bm ? "Remove from saved" : "Save for later"}" aria-label="Save question">${bm ? "★" : "☆"}</button>
          </div>
          ${progressBar(pct(i, questions.length), "thin")}
          <div class="q-text">${q.q}</div>
          <div class="options">
            ${q.options.map((o, k) => `<button class="option" data-opt="${k}" type="button"><span class="opt-key">${LETTERS[k]}</span><span>${o}</span></button>`).join("")}
          </div>
          <div class="feedback"></div>
          <div class="practice-actions">
            <span class="small muted">Score: ${right}/${results.length} · keys 1–4 to answer</span>
            <button class="btn primary hidden" data-act="next" type="button">${i === questions.length - 1 ? "See results" : "Next →"}</button>
          </div>
        </div>`;
    }

    function choose(k) {
      if (chosen !== null) return;
      const q = questions[i];
      chosen = k;
      const ok = k === q.answer;
      recordAnswer(q.ref, ok);
      save();
      results.push({ q, chosen: k, ok });

      container.querySelectorAll(".option").forEach((btn) => {
        const idx = Number(btn.dataset.opt);
        btn.disabled = true;
        if (idx === q.answer) btn.classList.add("correct");
        else if (idx === k) btn.classList.add("wrong");
        else btn.classList.add("dim");
      });
      container.querySelector(".feedback").innerHTML = `
        <div class="fb ${ok ? "ok" : "bad"}">${ok ? "✓ Correct!" : `✗ Not quite. The answer is ${LETTERS[q.answer]}.`}</div>
        ${q.explanation ? `<div class="explanation">${q.explanation}</div>` : ""}
        ${questionReport(q)}`;
      const right = results.filter((r) => r.ok).length;
      container.querySelector(".practice-actions .muted").textContent = `Score: ${right}/${results.length}`;
      const nextBtn = container.querySelector('[data-act="next"]');
      nextBtn.classList.remove("hidden");
      nextBtn.focus({ preventScroll: true });
    }

    function next() {
      if (chosen === null) return;
      i++;
      chosen = null;
      if (i >= questions.length) drawSummary();
      else {
        drawQuestion();
        container.scrollIntoView({ block: "nearest" });
      }
    }

    function drawSummary() {
      keyHandler = null;
      const right = results.filter((r) => r.ok).length;
      const wrong = results.filter((r) => !r.ok);
      if (opts.onFinish) opts.onFinish(results);
      container.innerHTML = `
        <div class="card">
          <div class="center">
            <div class="summary-score">${right}/${results.length}</div>
            <p class="muted">${pct(right, results.length)}% correct · ${right >= results.length * 0.8 ? "Excellent work! 🎉" : right >= results.length * 0.6 ? "Good, now review the mistakes below." : "Revise the notes and try again."}</p>
            <div class="btn-row" style="justify-content:center">
              ${wrong.length ? `<button class="btn" data-act="retry" type="button">Retry ${wrong.length} wrong</button>` : ""}
              <button class="btn" data-act="again" type="button">Practise again</button>
              ${opts.nextHref ? `<a class="btn primary" href="${opts.nextHref}">${esc(opts.nextLabel || "Continue")}</a>` : ""}
            </div>
          </div>
          ${wrong.length ? `<h3 style="margin-top:1.5rem">Review mistakes</h3>${wrong.map((r) => reviewItemHTML(r.q, r.chosen)).join("")}` : ""}
        </div>`;
      container.onclick = (e) => {
        const b = e.target.closest("[data-act]");
        if (!b) return;
        if (b.dataset.act === "retry") mountPractice(container, wrong.map((r) => r.q), opts);
        if (b.dataset.act === "again") mountPractice(container, shuffle(questions), opts);
      };
    }

    container.onclick = (e) => {
      const opt = e.target.closest("[data-opt]");
      if (opt) return choose(Number(opt.dataset.opt));
      const b = e.target.closest("[data-act]");
      if (!b) return;
      if (b.dataset.act === "next") next();
      if (b.dataset.act === "bm") {
        const ref = questions[i].ref;
        const on = toggleBookmark(ref);
        b.classList.toggle("on", on);
        b.textContent = on ? "★" : "☆";
      }
    };
    keyHandler = (e) => {
      const n = "1234".indexOf(e.key) >= 0 ? Number(e.key) - 1 : "abcd".indexOf(e.key.toLowerCase());
      if (n >= 0 && n < questions[i].options.length && chosen === null) choose(n);
      else if (e.key === "Enter" && chosen !== null) { e.preventDefault(); next(); }
    };
    drawQuestion();
  }

  function toggleBookmark(ref) {
    if (state.bookmarks[ref]) {
      delete state.bookmarks[ref];
      toast("Removed from saved");
    } else {
      state.bookmarks[ref] = Date.now();
      toast("Saved for later ★");
    }
    save();
    return !!state.bookmarks[ref];
  }

  // Read-only view of a question with the right answer (and the user's choice) highlighted.
  function reviewItemHTML(q, chosen, extraBadge = "") {
    return `
      <div class="review-item">
        <div class="review-meta">
          <span class="badge info">${esc(SHORT[q.subjectId])} › ${esc(q.topicName)}</span>
          ${extraBadge}
        </div>
        <div class="q-text">${q.q}</div>
        <div class="options">
          ${q.options.map((o, k) => {
            const cls = k === q.answer ? "correct" : k === chosen ? "wrong" : "dim";
            return `<div class="option ${cls}"><span class="opt-key">${LETTERS[k]}</span><span>${o}</span></div>`;
          }).join("")}
        </div>
        ${q.explanation ? `<div class="explanation">${q.explanation}</div>` : ""}
        ${questionReport(q)}
      </div>`;
  }

  // ================= Quick revise =================
  function renderRevise() {
    const mistakes = QUESTIONS.filter((q) => state.qs[q.ref] && state.qs[q.ref].last === 0).length;
    const unseen = QUESTIONS.filter((q) => !state.qs[q.ref]).length;
    const weak = weakTopics(50).length;
    const modes = [
      ["mix", "⚡", "Daily mix", "20 questions across all sections, favouring ones you haven't seen or got wrong.", "Start"],
      ["mistakes", "🔁", "Retry mistakes", `${mistakes} question${mistakes === 1 ? "" : "s"} you last answered wrong.`, "Retry"],
      ["weak", "🎯", "Weak topics", weak ? `${weak} topic${weak === 1 ? "" : "s"} below 60% accuracy.` : "Nothing yet. Practise more topics first.", "Practise"],
      ["new", "🆕", "Unseen questions", `${unseen} question${unseen === 1 ? "" : "s"} you haven't attempted yet.`, "Start"],
      ["cards", "🃏", "Flashcard sprint", "20 random flashcards for quick recall of formulas, words and facts.", "Flip"],
    ];
    $app.innerHTML = `
      <div class="page-head">
        <h1>⚡ Quick revision</h1>
        <p class="muted">Short, focused sessions. Choose a mode, or pick a subject from its revision sheet.</p>
      </div>
      <section class="grid modes">
        ${modes.map(([id, ic, title, desc, cta]) => `
          <div class="card mode-card">
            <div class="mode-ic">${ic}</div>
            <h3>${title}</h3>
            <p>${desc}</p>
            <a class="btn primary" href="#/revise/${id}/all">${cta}</a>
          </div>`).join("")}
      </section>
      <h2 class="section-title">📄 Revision sheets</h2>
      <section class="grid subjects">
        ${SUBJECTS.map((s) => `
          <a class="card subject-card" href="#/sheet/${s.id}" style="--accent:${ACCENT[s.id]}">
            <div class="subject-icon">${s.icon}</div>
            <h3>${esc(s.name)}</h3>
            <div class="small muted">All notes on one printable page</div>
          </a>`).join("")}
      </section>`;
  }

  function renderReviseRun(mode, subjectId) {
    const titles = {
      mix: ["⚡", "Daily mix"],
      mistakes: ["🔁", "Retry mistakes"],
      weak: ["🎯", "Weak topics"],
      new: ["🆕", "Unseen questions"],
      cards: ["🃏", "Flashcard sprint"],
    };
    if (!titles[mode]) return renderNotFound();
    const [icon, title] = titles[mode];
    const subj = subjectId === "all" ? null : getSubject(subjectId);
    if (subjectId !== "all" && !subj) return renderNotFound();
    const inScope = (sid) => !subj || sid === subj.id;

    $app.innerHTML = `
      <div class="page-head">
        <div class="crumbs"><a href="#/revise">Quick revision</a><span>›</span>${title}</div>
        <h1>${icon} ${title}</h1>
        <div class="filter-row">
          <a class="chip ${!subj ? "active" : ""}" href="#/revise/${mode}/all">All sections</a>
          ${SUBJECTS.map((s) => `<a class="chip ${subj && subj.id === s.id ? "active" : ""}" href="#/revise/${mode}/${s.id}">${esc(SHORT[s.id])}</a>`).join("")}
        </div>
      </div>
      <div id="runBody"></div>`;
    const body = document.getElementById("runBody");

    if (mode === "cards") {
      const cards = [];
      SUBJECTS.forEach((s) => {
        if (!inScope(s.id)) return;
        s.topics.forEach((t) =>
          (t.flashcards || []).forEach((c, i) => cards.push({ ref: `${s.id}/${t.id}/c${i}`, front: c.front, back: c.back, label: t.name }))
        );
      });
      mountFlashcards(body, shuffle(cards).slice(0, 20), { doneHref: "#/revise", doneLabel: "Back to revision" });
      return;
    }

    const pool = QUESTIONS.filter((q) => inScope(q.subjectId));
    let qs = [];
    let emptyText = "No questions here yet.";
    if (mode === "mix") {
      if (subj) qs = prioritised(pool).slice(0, 20);
      else {
        SUBJECTS.forEach((s) => (qs = qs.concat(prioritised(pool.filter((q) => q.subjectId === s.id)).slice(0, 5))));
        qs = shuffle(qs);
      }
    } else if (mode === "mistakes") {
      qs = shuffle(pool.filter((q) => state.qs[q.ref] && state.qs[q.ref].last === 0)).slice(0, 30);
      emptyText = "No mistakes to retry. Nice! Practise more questions and any you get wrong will show up here.";
    } else if (mode === "weak") {
      const weakKeys = weakTopics(50, subj && subj.id).map(({ s, t }) => `${s.id}/${t.id}`);
      qs = prioritised(pool.filter((q) => weakKeys.includes(`${q.subjectId}/${q.topicId}`))).slice(0, 20);
      emptyText = "No weak topics yet. A topic shows up here once you've answered 3+ questions with under 60% accuracy.";
    } else if (mode === "new") {
      qs = shuffle(pool.filter((q) => !state.qs[q.ref])).slice(0, 20);
      emptyText = "You've attempted every question here. Try the daily mix or a mock test.";
    }
    mountPractice(body, qs, { showTopic: true, emptyText, nextHref: "#/revise", nextLabel: "Back to revision" });
  }

  // ================= Quick reference =================
  // Number tables are computed rather than typed, so they can't contain typos.
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const SUP = { 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
  const sup = (n) => String(n).split("").map((d) => SUP[d]).join("");
  const fmtNum = (n) => n.toLocaleString("en-IN");

  function fractionPercent(n) {
    // 100/n as a mixed number, e.g. 1/7 → 14 2/7
    const whole = Math.floor(100 / n);
    let r = 100 % n;
    if (!r) return `${whole}%`;
    const g = gcd(r, n);
    return `${whole} ${r / g}/${n / g}%`;
  }

  function primesUpTo(max) {
    const out = [];
    for (let n = 2; n <= max; n++) if (out.every((p) => n % p)) out.push(n);
    return out;
  }

  function pythagoreanTriplets(maxC) {
    const out = [];
    for (let c = 5; c <= maxC; c++)
      for (let a = 3; a < c; a++) {
        const b = Math.sqrt(c * c - a * a);
        if (Number.isInteger(b) && a < b && gcd(a, b) === 1) out.push([a, b, c]);
      }
    return out.sort((x, y) => x[2] - y[2] || x[0] - y[0]);
  }

  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const refCells = (items) => `<div class="ref-grid">${items.map(([k, v]) => `<div class="ref-cell"><span>${k}</span><b>${v}</b></div>`).join("")}</div>`;

  function renderReference() {
    const sections = [
      ["squares", "Squares 1–50", refCells(range(1, 50).map((n) => [`${n}${sup(2)}`, fmtNum(n * n)]))],
      ["cubes", "Cubes 1–30", refCells(range(1, 30).map((n) => [`${n}${sup(3)}`, fmtNum(n ** 3)]))],
      ["powers", "Powers of 2, 3 and 5", `
        <h4>Powers of 2</h4>${refCells(range(1, 15).map((n) => [`2${sup(n)}`, fmtNum(2 ** n)]))}
        <h4>Powers of 3</h4>${refCells(range(1, 10).map((n) => [`3${sup(n)}`, fmtNum(3 ** n)]))}
        <h4>Powers of 5</h4>${refCells(range(1, 8).map((n) => [`5${sup(n)}`, fmtNum(5 ** n)]))}`],
      ["roots", "Square roots", refCells([2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 15, 17].map((n) => [`√${n}`, `≈ ${Math.sqrt(n).toFixed(3)}`]))],
      ["fractions", "Fractions as percentages", refCells(range(2, 20).map((n) => [`1/${n}`, fractionPercent(n)]))],
      ["trig", "Trigonometric values", `
        <div class="table-wrap"><table class="pattern-table ref-table">
          <thead><tr><th>θ</th><th class="num">0°</th><th class="num">30°</th><th class="num">45°</th><th class="num">60°</th><th class="num">90°</th></tr></thead>
          <tbody>
            <tr><td>sin θ</td><td class="num">0</td><td class="num">1/2</td><td class="num">1/√2</td><td class="num">√3/2</td><td class="num">1</td></tr>
            <tr><td>cos θ</td><td class="num">1</td><td class="num">√3/2</td><td class="num">1/√2</td><td class="num">1/2</td><td class="num">0</td></tr>
            <tr><td>tan θ</td><td class="num">0</td><td class="num">1/√3</td><td class="num">1</td><td class="num">√3</td><td class="num">not defined</td></tr>
            <tr><td>cot θ</td><td class="num">not defined</td><td class="num">√3</td><td class="num">1</td><td class="num">1/√3</td><td class="num">0</td></tr>
            <tr><td>sec θ</td><td class="num">1</td><td class="num">2/√3</td><td class="num">√2</td><td class="num">2</td><td class="num">not defined</td></tr>
            <tr><td>cosec θ</td><td class="num">not defined</td><td class="num">2</td><td class="num">√2</td><td class="num">2/√3</td><td class="num">1</td></tr>
          </tbody>
        </table></div>
        <p class="small muted">sin²θ + cos²θ = 1 · sec²θ − tan²θ = 1 · cosec²θ − cot²θ = 1</p>`],
      ["triplets", "Pythagorean triplets", `
        ${refCells(pythagoreanTriplets(100).map(([a, b, c]) => [`${a}, ${b}`, c]))}
        <p class="small muted">Primitive triplets with hypotenuse up to 100. Multiples also work, e.g. (6, 8, 10), (9, 12, 15).</p>`],
      ["primes", "Prime numbers up to 100", `
        <p class="ref-primes">${primesUpTo(100).join(", ")}</p>
        <p class="small muted">There are 25 primes up to 100. 2 is the only even prime; 1 is neither prime nor composite.</p>`],
    ];
    const quant = getSubject("quant");
    if (quant) {
      const count = quant.topics.reduce((n, t) => n + (t.flashcards || []).length, 0);
      sections.push(["formulas", `Formula sheet (${count} formulas)`,
        quant.topics.map((t) => (t.flashcards || []).length ? `
          <div class="formula-topic">
            <h4>${esc(t.name)}</h4>
            <dl class="formula-list">${t.flashcards.map((c) => `<div><dt>${c.front}</dt><dd>${c.back}</dd></div>`).join("")}</dl>
          </div>` : "").join("")]);
    }

    $app.innerHTML = `
      <div class="page-head">
        <h1>📐 Quick reference</h1>
        <p class="muted">Number tables and every Quant formula on one page for last-minute revision. Print it or save it as a PDF to carry with you.</p>
        <div class="filter-row no-print" id="refJump">
          ${sections.map(([id, title]) => `<button class="chip" data-jump="${id}" type="button">${title.replace(/ \(.*\)$/, "")}</button>`).join("")}
          <button class="chip" type="button" onclick="window.print()">🖨️ Print</button>
        </div>
      </div>
      ${sections.map(([id, title, body]) => `<section class="card sheet-topic" id="ref-${id}"><h2>${title}</h2>${body}</section>`).join("")}`;

    document.getElementById("refJump").onclick = (e) => {
      const b = e.target.closest("[data-jump]");
      if (b) document.getElementById(`ref-${b.dataset.jump}`).scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }

  // ================= Saved questions =================
  function renderSaved() {
    const saved = Object.keys(state.bookmarks)
      .sort((a, b) => state.bookmarks[b] - state.bookmarks[a])
      .map((ref) => QMAP[ref])
      .filter(Boolean);
    $app.innerHTML = `
      <div class="page-head">
        <h1>★ Saved questions</h1>
        <p class="muted">Tap ☆ on any practice question to save it here for last-minute revision.</p>
        ${saved.length ? `<div class="btn-row"><button class="btn primary" id="practiseSaved" type="button">Practise all ${saved.length}</button></div>` : ""}
      </div>
      <div id="savedBody">
        ${saved.length
          ? `<div class="card">${saved.map((q) => `
              <div data-ref="${esc(q.ref)}">
                ${reviewItemHTML(q, null, `<button class="link-btn" data-unsave="${esc(q.ref)}" type="button">Remove</button>`)}
              </div>`).join("")}</div>`
          : `<div class="card empty"><div class="big">☆</div><p>No saved questions yet.</p><a class="btn" href="#/revise/mix/all">Start a daily mix</a></div>`}
      </div>`;
    const body = document.getElementById("savedBody");
    body.onclick = (e) => {
      const b = e.target.closest("[data-unsave]");
      if (!b) return;
      toggleBookmark(b.dataset.unsave);
      renderSaved();
    };
    const btn = document.getElementById("practiseSaved");
    if (btn) btn.onclick = () => mountPractice(body, shuffle(saved), { showTopic: true, nextHref: "#/saved", nextLabel: "Back to saved" });
  }

  // ================= My notes =================
  const NOTE_TAGS = ["Current affairs", "Formula", "Vocabulary", "GK fact", "Other"];
  let notesFilter = "All";
  let notesQuery = "";

  function renderMyNotes() {
    $app.innerHTML = `
      <div class="page-head">
        <h1>📝 My notes</h1>
        <p class="muted">Your own revision notes, saved on this device.</p>
        <div class="callout">📰 <b>Current affairs:</b> General Awareness usually includes current events from the months before the exam. This app only covers static GK, so jot down key current-affairs facts here as you read the news (schemes, appointments, awards, sports, summits, etc.).</div>
      </div>
      <form class="card note-form" id="noteForm">
        <label for="noteText" class="small muted">New note</label>
        <textarea id="noteText" placeholder="e.g. 'Summit X was held in city Y in month Z…'" required maxlength="2000"></textarea>
        <div class="btn-row">
          <select id="noteTag" class="input" aria-label="Category">${NOTE_TAGS.map((t) => `<option>${t}</option>`).join("")}</select>
          <button class="btn primary" type="submit">Add note</button>
        </div>
      </form>
      <div style="margin-top:1rem">
        <input type="search" id="noteSearch" class="input search" placeholder="Search notes…" value="${esc(notesQuery)}" aria-label="Search notes">
        <div class="filter-row" id="noteFilters">
          ${["All"].concat(NOTE_TAGS).map((t) => `<button class="chip ${t === notesFilter ? "active" : ""}" data-tag="${esc(t)}" type="button">${esc(t)}</button>`).join("")}
        </div>
        <div id="noteList"></div>
      </div>`;

    const list = document.getElementById("noteList");
    function drawList() {
      const q = notesQuery.trim().toLowerCase();
      const notes = state.myNotes.filter(
        (n) => (notesFilter === "All" || n.tag === notesFilter) && (!q || n.text.toLowerCase().includes(q))
      );
      list.innerHTML = notes.length
        ? notes.map((n) => `
            <div class="card my-note">
              <div class="text">${esc(n.text)}</div>
              <div class="meta small">
                <span><span class="badge info">${esc(n.tag)}</span> ${fmtDate(n.at)}</span>
                <button class="link-btn" data-del="${esc(n.id)}" type="button">Delete</button>
              </div>
            </div>`).join("")
        : `<div class="empty">${state.myNotes.length ? "No notes match." : "No notes yet. Add your first one above."}</div>`;
    }
    drawList();

    document.getElementById("noteForm").onsubmit = (e) => {
      e.preventDefault();
      const text = document.getElementById("noteText").value.trim();
      if (!text) return;
      state.myNotes.unshift({
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        text,
        tag: document.getElementById("noteTag").value,
        at: Date.now(),
      });
      save();
      document.getElementById("noteText").value = "";
      toast("Note added");
      drawList();
    };
    document.getElementById("noteSearch").oninput = (e) => {
      notesQuery = e.target.value;
      drawList();
    };
    document.getElementById("noteFilters").onclick = (e) => {
      const b = e.target.closest("[data-tag]");
      if (!b) return;
      notesFilter = b.dataset.tag;
      document.querySelectorAll("#noteFilters .chip").forEach((c) => c.classList.toggle("active", c === b));
      drawList();
    };
    list.onclick = (e) => {
      const b = e.target.closest("[data-del]");
      if (!b || !confirm("Delete this note?")) return;
      state.myNotes = state.myNotes.filter((n) => n.id !== b.dataset.del);
      save();
      drawList();
    };
  }

  // ================= Mock test =================
  function renderMockHome() {
    const m = state.activeMock;
    $app.innerHTML = `
      <div class="page-head">
        <h1>⏱️ Mock test</h1>
        <p class="muted">Timed, exam-style tests with the Tier 1 marking scheme (+${MARK_RIGHT} / −${MARK_WRONG}). Questions are drawn at random from the question bank.</p>
      </div>
      ${m ? `
        <div class="callout" style="margin-bottom:1rem">
          You have a <b>${MOCK_TYPES[m.type].name.toLowerCase()}</b> in progress with ${fmtClock((m.endsAt - Date.now()) / 1000)} left.
          <div class="btn-row" style="margin-top:.5rem">
            <a class="btn primary sm" href="#/mock/run">Resume</a>
            <button class="btn sm danger" id="discardMock" type="button">Discard</button>
          </div>
        </div>` : ""}
      <section class="grid two">
        ${Object.entries(MOCK_TYPES).map(([id, cfg]) => `
          <div class="card mode-card">
            <div class="mode-ic">${id === "full" ? "📝" : "⚡"}</div>
            <h3>${cfg.name}</h3>
            <p>${cfg.desc}</p>
            <button class="btn primary" data-start="${id}" type="button" ${m ? "disabled" : ""}>Start ${cfg.name.toLowerCase()}</button>
          </div>`).join("")}
      </section>
      <section class="card" style="margin-top:1rem">
        <h3>Instructions</h3>
        <ul class="small">
          <li>All four sections are available. Switch between them any time using the section tabs, as in the real exam.</li>
          <li>Selecting an option saves your answer. Use <b>Clear</b> to remove it and <b>Mark for review</b> to flag a question.</li>
          <li>Answered questions that are marked for review are still evaluated.</li>
          <li>The test submits automatically when the timer ends. If you close the tab, you can resume later from here, but the timer keeps running.</li>
        </ul>
      </section>
      ${state.mocks.length ? `
        <section class="card" style="margin-top:1rem">
          <h3>Previous attempts</h3>
          <div class="table-wrap"><table class="pattern-table">
            <thead><tr><th>Date</th><th>Type</th>${SUBJECTS.map((s) => `<th class="num">${esc(SHORT[s.id])}</th>`).join("")}<th class="num">Score</th><th></th></tr></thead>
            <tbody>${state.mocks.map((r, i) => `
              <tr>
                <td>${fmtDate(r.at)}</td>
                <td>${MOCK_TYPES[r.type] ? MOCK_TYPES[r.type].name : r.type}</td>
                ${SUBJECTS.map((s) => {
                  const sec = r.sections.find((x) => x.id === s.id);
                  return `<td class="num">${sec ? fmtScore(sec.score) : "–"}</td>`;
                }).join("")}
                <td class="num"><b>${fmtScore(r.score)}</b>/${r.max}</td>
                <td class="num"><a href="#/mock/result/${i}">Review</a></td>
              </tr>`).join("")}
            </tbody>
          </table></div>
        </section>` : ""}`;

    $app.querySelectorAll("[data-start]").forEach((b) => (b.onclick = () => startMock(b.dataset.start)));
    const discard = document.getElementById("discardMock");
    if (discard) {
      discard.onclick = () => {
        if (!confirm("Discard the test in progress? Your answers will be lost.")) return;
        state.activeMock = null;
        save();
        renderMockHome();
      };
    }
  }

  function startMock(type) {
    const cfg = MOCK_TYPES[type];
    const sections = SUBJECTS.map((s) => ({
      id: s.id,
      refs: prioritised(QUESTIONS.filter((q) => q.subjectId === s.id)).slice(0, cfg.perSection).map((q) => q.ref),
    }));
    const now = Date.now();
    state.activeMock = {
      type,
      startedAt: now,
      endsAt: now + cfg.minutes * 60000,
      sections,
      answers: {},
      marked: {},
      visited: {},
      cur: { s: 0, q: 0 },
    };
    save();
    location.hash = "#/mock/run";
  }

  function renderMockRun() {
    const m = state.activeMock;
    if (!m) {
      location.replace("#/mock");
      return;
    }
    if (Date.now() >= m.endsAt) return submitMock(true);

    // Drop any refs whose question no longer exists (content updated mid-test).
    m.sections.forEach((sec) => (sec.refs = sec.refs.filter((r) => QMAP[r])));
    const cfg = MOCK_TYPES[m.type];

    $app.innerHTML = `
      <div class="card mock-bar">
        <span class="title">${cfg.name}</span>
        <span class="timer" id="timer" aria-label="Time left">--:--</span>
        <button class="btn sm danger" id="submitMock" type="button">Submit</button>
      </div>
      <div class="mock-tabs" id="mockTabs"></div>
      <div class="mock-layout">
        <div class="card" id="mockQ"></div>
        <aside class="card palette" id="palette"></aside>
      </div>`;

    const timerEl = document.getElementById("timer");
    function tick() {
      const left = (m.endsAt - Date.now()) / 1000;
      timerEl.textContent = fmtClock(left);
      timerEl.classList.toggle("low", left <= 300);
      if (left <= 0) submitMock(true);
    }
    tick();
    intervals.push(setInterval(tick, 1000));

    const cur = () => m.sections[m.cur.s].refs[m.cur.q];
    function status(ref) {
      const answered = m.answers[ref] !== undefined;
      if (m.marked[ref]) return answered ? "marked answered" : "marked";
      if (answered) return "answered";
      return m.visited[ref] ? "visited" : "";
    }

    function draw() {
      const sec = m.sections[m.cur.s];
      const ref = cur();
      m.visited[ref] = 1;
      save();
      const q = QMAP[ref];
      const s = getSubject(sec.id);
      const chosen = m.answers[ref];

      document.getElementById("mockTabs").innerHTML = m.sections.map((x, i) => {
        const done = x.refs.filter((r) => m.answers[r] !== undefined).length;
        return `<button class="btn sm ${i === m.cur.s ? "primary" : ""}" data-sec="${i}" type="button">${esc(SHORT[x.id])} <span class="small">(${done}/${x.refs.length})</span></button>`;
      }).join("");

      document.getElementById("mockQ").innerHTML = `
        <div class="small muted">${esc(s.name)} · Question ${m.cur.q + 1} of ${sec.refs.length} · +${MARK_RIGHT} / −${MARK_WRONG}</div>
        ${progressBar(pct(m.cur.q + 1, sec.refs.length), "thin")}
        <div class="q-text">${q.q}</div>
        <div class="options">
          ${q.options.map((o, k) => `<button class="option ${chosen === k ? "selected" : ""}" data-opt="${k}" type="button"><span class="opt-key">${LETTERS[k]}</span><span>${o}</span></button>`).join("")}
        </div>
        <div class="mock-actions">
          <div class="grp">
            <button class="btn" data-act="prev" type="button" ${m.cur.s === 0 && m.cur.q === 0 ? "disabled" : ""}>← Prev</button>
            <button class="btn" data-act="clear" type="button" ${chosen === undefined ? "disabled" : ""}>Clear</button>
          </div>
          <div class="grp">
            <button class="btn warn" data-act="mark" type="button">${m.marked[ref] ? "Unmark" : "Mark for review"} &amp; next</button>
            <button class="btn primary" data-act="next" type="button">Save &amp; next →</button>
          </div>
        </div>`;

      const counts = { answered: 0, marked: 0, visited: 0, fresh: 0 };
      sec.refs.forEach((r) => {
        const st = status(r);
        if (st.includes("answered")) counts.answered++;
        if (st.includes("marked")) counts.marked++;
        if (st === "visited") counts.visited++;
        if (st === "") counts.fresh++;
      });
      document.getElementById("palette").innerHTML = `
        <h3>${esc(SHORT[sec.id])}</h3>
        <div class="legend">
          <span><i class="answered"></i>Answered (${counts.answered})</span>
          <span><i class="visited"></i>Not answered (${counts.visited})</span>
          <span><i class="marked"></i>Marked (${counts.marked})</span>
          <span><i></i>Not visited (${counts.fresh})</span>
        </div>
        <div class="palette-grid">
          ${sec.refs.map((r, i) => `<button class="pal ${status(r)} ${i === m.cur.q ? "current" : ""}" data-jump="${i}" type="button" aria-label="Question ${i + 1}">${i + 1}</button>`).join("")}
        </div>`;
    }

    function move(delta) {
      let { s, q } = m.cur;
      q += delta;
      if (q >= m.sections[s].refs.length) {
        if (s < m.sections.length - 1) { s++; q = 0; }
        else { q = m.sections[s].refs.length - 1; toast("Last question. Review or submit."); }
      } else if (q < 0) {
        if (s > 0) { s--; q = m.sections[s].refs.length - 1; }
        else q = 0;
      }
      m.cur = { s, q };
      draw();
    }

    $app.onclick = (e) => {
      const t = e.target;
      const opt = t.closest("[data-opt]");
      if (opt) {
        m.answers[cur()] = Number(opt.dataset.opt);
        save();
        return draw();
      }
      const secBtn = t.closest("[data-sec]");
      if (secBtn) { m.cur = { s: Number(secBtn.dataset.sec), q: 0 }; return draw(); }
      const jump = t.closest("[data-jump]");
      if (jump) { m.cur.q = Number(jump.dataset.jump); return draw(); }
      const b = t.closest("[data-act]");
      if (!b) return;
      const ref = cur();
      if (b.dataset.act === "next") move(1);
      else if (b.dataset.act === "prev") move(-1);
      else if (b.dataset.act === "clear") { delete m.answers[ref]; save(); draw(); }
      else if (b.dataset.act === "mark") {
        if (m.marked[ref]) delete m.marked[ref];
        else m.marked[ref] = 1;
        move(1);
      }
    };
    document.getElementById("submitMock").onclick = () => {
      const total = m.sections.reduce((n, x) => n + x.refs.length, 0);
      const answered = Object.keys(m.answers).length;
      if (confirm(`You have answered ${answered} of ${total} questions.\n\nSubmit the test now?`)) submitMock(false);
    };
    keyHandler = (e) => {
      const n = "1234".indexOf(e.key);
      if (n >= 0) { m.answers[cur()] = n; save(); draw(); }
      else if (e.key === "ArrowRight") move(1);
      else if (e.key === "ArrowLeft") move(-1);
    };
    draw();
  }

  function submitMock(auto) {
    const m = state.activeMock;
    if (!m) return;
    resetPage();
    $app.onclick = null;
    const result = {
      type: m.type,
      at: Date.now(),
      timeTaken: Math.min(Date.now(), m.endsAt) - m.startedAt,
      auto: !!auto,
      sections: [],
      score: 0,
      max: 0,
    };
    m.sections.forEach((sec) => {
      let c = 0, w = 0;
      const items = sec.refs.filter((r) => QMAP[r]).map((ref) => {
        const a = m.answers[ref];
        if (a !== undefined) {
          const ok = a === QMAP[ref].answer;
          if (ok) c++; else w++;
          recordAnswer(ref, ok);
        }
        return { ref, a: a === undefined ? null : a };
      });
      const score = c * MARK_RIGHT - w * MARK_WRONG;
      result.sections.push({ id: sec.id, items, c, w, total: items.length, score });
      result.score += score;
      result.max += items.length * MARK_RIGHT;
    });
    state.mocks.unshift(result);
    state.mocks = state.mocks.slice(0, 20);
    state.activeMock = null;
    save();
    if (auto) toast("Time's up! Your test was submitted.");
    location.hash = "#/mock/result/0";
  }

  function renderMockResult(index) {
    const r = state.mocks[index];
    if (!r) return renderNotFound();
    const cfg = MOCK_TYPES[r.type] || { name: "Mock" };
    const totalQ = r.sections.reduce((n, s) => n + s.total, 0);
    const c = r.sections.reduce((n, s) => n + s.c, 0);
    const w = r.sections.reduce((n, s) => n + s.w, 0);
    const scorePct = Math.max(0, pct(r.score, r.max));
    const weakest = r.sections.slice().sort((a, b) => a.score / (a.total || 1) - b.score / (b.total || 1))[0];
    let filter = "wrong";

    $app.innerHTML = `
      <div class="page-head">
        <div class="crumbs"><a href="#/mock">Mock test</a><span>›</span>Result</div>
        <h1>${cfg.name} result</h1>
        <p class="muted">${fmtDate(r.at)} · time taken ${fmtDuration(r.timeTaken)}${r.auto ? " · auto-submitted" : ""}</p>
      </div>
      <section class="card result-hero">
        <div class="score-ring" style="--p:${scorePct}"><div><b>${fmtScore(r.score)}</b><span class="small muted">out of ${r.max}</span></div></div>
        <div>
          <div class="stats" style="margin-top:0">
            <div class="stat"><div class="stat-num" style="color:var(--success)">${c}</div><div class="stat-label">Correct</div></div>
            <div class="stat"><div class="stat-num" style="color:var(--danger)">${w}</div><div class="stat-label">Wrong (−${fmtScore(w * MARK_WRONG)})</div></div>
            <div class="stat"><div class="stat-num">${totalQ - c - w}</div><div class="stat-label">Unattempted</div></div>
            <div class="stat"><div class="stat-num">${pct(c, c + w)}%</div><div class="stat-label">Accuracy</div></div>
          </div>
          ${weakest && weakest.total ? `<p class="small" style="margin-top:.75rem">📌 Lowest-scoring section: <b>${esc(SHORT[weakest.id])}</b>. <a href="#/revise/weak/${weakest.id}">Practise its weak topics</a> or <a href="#/sheet/${weakest.id}">read the revision sheet</a>.</p>` : ""}
        </div>
      </section>
      <section class="card" style="margin-top:1rem">
        <div class="table-wrap"><table class="pattern-table">
          <thead><tr><th>Section</th><th class="num">Attempted</th><th class="num">Correct</th><th class="num">Wrong</th><th class="num">Score</th></tr></thead>
          <tbody>
            ${r.sections.map((s) => `<tr><td>${esc((getSubject(s.id) || {}).name || s.id)}</td><td class="num">${s.c + s.w}/${s.total}</td><td class="num">${s.c}</td><td class="num">${s.w}</td><td class="num"><b>${fmtScore(s.score)}</b>/${s.total * MARK_RIGHT}</td></tr>`).join("")}
          </tbody>
        </table></div>
        <div class="btn-row" style="margin-top:1rem">
          <a class="btn primary" href="#/mock">Take another mock</a>
          <a class="btn" href="#/revise/mistakes/all">Retry mistakes</a>
        </div>
      </section>
      <h2 class="section-title">Review answers</h2>
      <div class="filter-row" id="reviewFilters">
        <button class="chip" data-f="wrong" type="button">Wrong (${w})</button>
        <button class="chip" data-f="skipped" type="button">Unattempted (${totalQ - c - w})</button>
        <button class="chip" data-f="correct" type="button">Correct (${c})</button>
        <button class="chip" data-f="all" type="button">All (${totalQ})</button>
      </div>
      <div class="card" id="reviewList"></div>`;

    function drawReview() {
      document.querySelectorAll("#reviewFilters .chip").forEach((ch) => ch.classList.toggle("active", ch.dataset.f === filter));
      const items = [];
      r.sections.forEach((s) =>
        s.items.forEach((it, i) => {
          const q = QMAP[it.ref];
          if (!q) return;
          const kind = it.a === null ? "skipped" : it.a === q.answer ? "correct" : "wrong";
          if (filter === "all" || filter === kind) items.push({ q, it, kind, n: i + 1 });
        })
      );
      const badge = { correct: `<span class="badge ok">+${MARK_RIGHT}</span>`, wrong: `<span class="badge bad">−${MARK_WRONG}</span>`, skipped: `<span class="badge">Skipped</span>` };
      document.getElementById("reviewList").innerHTML = items.length
        ? items.map(({ q, it, kind, n }) => reviewItemHTML(q, it.a, `<span class="small muted">Q${n}</span> ${badge[kind]}`)).join("")
        : `<div class="empty">Nothing in this list.</div>`;
    }
    document.getElementById("reviewFilters").onclick = (e) => {
      const b = e.target.closest("[data-f]");
      if (!b) return;
      filter = b.dataset.f;
      drawReview();
    };
    drawReview();
  }

  // ================= Backup =================
  function exportData() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `cgl-recap-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  function importData(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!data || typeof data !== "object" || !("qs" in data)) throw new Error("bad file");
        if (!confirm("Replace your current progress with this backup?")) return;
        state = Object.assign(defaultState(), data);
        save();
        applyTheme();
        toast("Backup restored");
        route();
      } catch (err) {
        toast("That file isn't a valid CGL Recap backup.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  // ================= Theme =================
  const themeBtn = document.getElementById("themeToggle");
  function currentTheme() {
    return state.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  function applyTheme() {
    const t = currentTheme();
    document.documentElement.dataset.theme = t;
    themeBtn.textContent = t === "dark" ? "☀️" : "🌙";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = t === "dark" ? "#171b2e" : "#4f46e5";
  }
  themeBtn.onclick = () => {
    state.theme = currentTheme() === "dark" ? "light" : "dark";
    save();
    applyTheme();
  };

  // ================= Boot =================
  applyTheme();
  window.addEventListener("hashchange", () => {
    $app.onclick = null;
    route();
  });
  route();

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
