"""Validate the content files in data/.

Checks that each file parses, follows the schema, and that every question has
4 distinct options with a valid answer index. Run from the project root:

    python tools/validate.py
"""
import json
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SUBJECTS = ["reasoning", "gk", "quant", "english"]
ALLOWED_TAGS = {"b", "i", "u", "sup", "sub", "br"}


def load(subject):
    text = (ROOT / "data" / f"{subject}.js").read_text(encoding="utf-8")
    prefix = f"window.CGL_DATA.{subject} = "
    start = text.index(prefix) + len(prefix)
    body = text[start:].rstrip().rstrip(";")
    return json.loads(body)


def check_html(where, s, errors):
    # "<" followed directly by a letter starts a tag in HTML; "a < b" is plain text.
    for tag in re.findall(r"</?([a-zA-Z][a-zA-Z0-9]*)", s):
        if tag.lower() not in ALLOWED_TAGS:
            errors.append(f"{where}: disallowed tag <{tag}>")


def main():
    errors = []
    grand = Counter()
    for subject in SUBJECTS:
        try:
            data = load(subject)
        except Exception as e:  # noqa: BLE001
            errors.append(f"{subject}: failed to load ({e})")
            continue
        if data.get("id") != subject:
            errors.append(f"{subject}: id mismatch ({data.get('id')})")
        topic_ids = [t.get("id") for t in data.get("topics", [])]
        for tid, n in Counter(topic_ids).items():
            if n > 1:
                errors.append(f"{subject}: duplicate topic id {tid}")
        positions = Counter()
        counts = Counter()
        for t in data.get("topics", []):
            where = f"{subject}/{t.get('id')}"
            for key in ("id", "name", "notes", "flashcards", "questions"):
                if key not in t:
                    errors.append(f"{where}: missing '{key}'")
            for n in t.get("notes", []):
                check_html(where + " note", n.get("heading", ""), errors)
                for p in n.get("points", []):
                    check_html(where + " note", p, errors)
            for c in t.get("flashcards", []):
                if not c.get("front") or not c.get("back"):
                    errors.append(f"{where}: empty flashcard")
                check_html(where + " card", c.get("front", "") + c.get("back", ""), errors)
            for i, q in enumerate(t.get("questions", [])):
                qw = f"{where}#{i}"
                opts = q.get("options", [])
                if len(opts) != 4:
                    errors.append(f"{qw}: {len(opts)} options")
                if len(set(o.strip().lower() for o in opts)) != len(opts):
                    errors.append(f"{qw}: duplicate options")
                ans = q.get("answer")
                if not isinstance(ans, int) or not 0 <= ans < len(opts):
                    errors.append(f"{qw}: bad answer index {ans}")
                else:
                    positions[ans] += 1
                if not q.get("q") or not q.get("explanation"):
                    errors.append(f"{qw}: missing question text or explanation")
                check_html(qw, q.get("q", "") + " ".join(opts) + q.get("explanation", ""), errors)
            counts["topics"] += 1
            counts["flashcards"] += len(t.get("flashcards", []))
            counts["questions"] += len(t.get("questions", []))
        grand.update(counts)
        spread = " ".join(f"{'ABCD'[k]}={positions[k]}" for k in range(4))
        print(f"{subject:10} topics={counts['topics']:3} cards={counts['flashcards']:4} "
              f"questions={counts['questions']:4}  answers: {spread}")
    print(f"{'TOTAL':10} topics={grand['topics']:3} cards={grand['flashcards']:4} questions={grand['questions']:4}")
    if errors:
        print(f"\n{len(errors)} problem(s):")
        for e in errors:
            print("  -", e)
        sys.exit(1)
    print("\nAll content valid.")


if __name__ == "__main__":
    main()
