# CGL Recap

Application designed for revision for CGL 2026 aspirants.

A free revision app for **SSC CGL Tier 1**: short notes, flashcards, topic-wise practice and timed mock tests for all four sections:

- General Intelligence & Reasoning
- General Awareness
- Quantitative Aptitude
- English Comprehension

It is a static site (plain HTML/CSS/JS, no build step, no server, no sign-up). Progress is stored in the student's own browser, and it works offline once it has been opened.

## Features

- **Notes → Flashcards → Practice** for every topic, with a "revised" tracker
- **Instant-feedback practice** with explanations; keyboard shortcuts (1–4 / A–D, Enter)
- **Mock tests** following the Tier 1 pattern (25 Q per section, 60 min, +2 / −0.5), plus a 40-question mini mock, with a question palette, mark-for-review, auto-submit and a full answer review
- **Quick revision** modes: daily mix, retry mistakes, weak topics, unseen questions, flashcard sprint
- **Printable revision sheets** per subject
- **Quick reference**: squares 1–50, cubes 1–30, powers of 2/3/5, square roots, fraction→percent, trig values, Pythagorean triplets, primes, plus a one-page sheet of every Quant formula (the number tables are computed, not typed)
- **Saved questions** and **My notes** (for current affairs, which the app does not cover)
- Exam countdown, progress dashboard, dark mode, backup export/import, installable on phones

## Syllabus coverage

Topics are mapped to the official SSC CGL Tier 1 syllabus: 73 topics, 655 flashcards and 474 practice questions.

| Section | Topics |
|---|---|
| Reasoning (19) | Analogy, classification, number and letter series, coding-decoding, blood relations, direction, order and ranking, seating, syllogism, Venn diagrams, mathematical operations, calendar and clock, word arrangement, non-verbal tips, statement and conclusion, emotional and social intelligence, indexing and address matching, cubes, dice and counting figures |
| General Awareness (18) | Ancient, medieval and modern history, polity, Indian and world geography, economy, physics, chemistry, biology, art and culture, static GK, environment and ecology, computer awareness, sports and awards, government schemes, space, defence and technology, India's neighbours, population, agriculture and transport |
| Quant (20) | Number system, HCF-LCM, simplification, percentage, profit and loss, ratio and partnership, averages, interest, time and work, time and distance, algebra, geometry, mensuration, trigonometry, DI and statistics, linear equations and graphs, congruence, similarity and tangents, prism, pyramid and frustum, degree–radian and complementary angles, histogram and frequency polygon |
| English (16) | Error spotting and subject-verb agreement, tenses, articles, prepositions, voice, narration, synonyms, antonyms, idioms, one-word substitution, spelling, sentence improvement, cloze and RC, sentence rearrangement, homonyms, pronoun/adjective/adverb/conjunction errors |

**Not covered:** current affairs, which students should track in *My notes*. Picture-based non-verbal questions (figure series, mirror images, paper folding) are explained with rules and tips only, because the app is text-based.

## Run locally

```bash
python -m http.server 8080
```

Then open http://localhost:8080. (Opening `index.html` directly also works, but offline mode needs http.)

## Deploy for free (GitHub Pages)

1. Create a new public repository on GitHub, e.g. `cgl-recap`.
2. Push this folder to it:
   ```bash
   git remote add origin https://github.com/<your-username>/cgl-recap.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / root → Save**.
4. After a minute the site is live at `https://<your-username>.github.io/cgl-recap/`.

Netlify or Cloudflare Pages also work: just drag and drop the folder, with no build command.

## Editing content

All study material is in `data/<subject>.js`. After the first line, each file is one strict JSON object:

```json
{ "id": "quant", "name": "...", "icon": "➗", "topics": [
  { "id": "percentage", "name": "Percentage",
    "notes": [{ "heading": "...", "points": ["..."] }],
    "flashcards": [{ "front": "...", "back": "..." }],
    "questions": [{ "q": "...", "options": ["A", "B", "C", "D"], "answer": 0, "explanation": "..." }] }
]}
```

`answer` is the 0-based index of the correct option. After editing, run the validator:

```bash
python tools/validate.py
```

When you change the list of files, bump `CACHE` in `sw.js` so returning visitors get the update.

> Progress is keyed by question position within a topic, so prefer **appending** new questions to the end of a topic rather than inserting them in the middle.

## Human review before sharing

The content was written and cross-checked by AI, but **it has not yet been reviewed by a person**. Have a subject teacher (or a strong student) spot-check it before sharing it widely:

```bash
python tools/export_review.py
```

This creates `review/questions-review.csv` (every question with its keyed answer and explanation) and `review/notes-review.csv` (every note point and flashcard), each with columns for the reviewer's Y/N and comments. Open them in Excel or Google Sheets, fix anything flagged in `data/<subject>.js`, then run `python tools/validate.py`.

## Disclaimer

Not affiliated with the Staff Selection Commission. Content is a study aid. Always check the official notice at [ssc.gov.in](https://ssc.gov.in) for the exam date, pattern and syllabus.
