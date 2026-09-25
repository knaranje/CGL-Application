"""Export all content to spreadsheets for a human reviewer.

Creates two CSV files (open them in Excel or Google Sheets):
  review/questions-review.csv  one row per question, with the keyed answer
  review/notes-review.csv      one row per note point and flashcard

Each row has empty "Reviewer OK (Y/N)" and "Reviewer comment" columns to fill in.
Run from the project root:

    python tools/export_review.py
"""
import csv
import html
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from validate import ROOT, SUBJECTS, load  # noqa: E402


def plain(s):
    """Turn the small inline-HTML subset into readable plain text."""
    s = re.sub(r"<br\s*/?>", " / ", s)
    s = re.sub(r"<sup>(.*?)</sup>", r"^\1", s)
    s = re.sub(r"<sub>(.*?)</sub>", r"\1", s)
    s = re.sub(r"<[^>]+>", "", s)
    return html.unescape(s).strip()


def main():
    out_dir = ROOT / "review"
    out_dir.mkdir(exist_ok=True)
    q_rows, n_rows = [], []
    for subject in SUBJECTS:
        try:
            data = load(subject)
        except FileNotFoundError:
            print(f"skipping {subject}: file not found")
            continue
        for t in data["topics"]:
            for i, q in enumerate(t.get("questions", [])):
                opts = [plain(o) for o in q["options"]]
                q_rows.append([
                    data["name"], t["name"], i + 1, plain(q["q"]), *opts,
                    "ABCD"[q["answer"]], opts[q["answer"]], plain(q.get("explanation", "")), "", "",
                ])
            for n in t.get("notes", []):
                for p in n.get("points", []):
                    n_rows.append([data["name"], t["name"], "Note", plain(n["heading"]), plain(p), "", ""])
            for c in t.get("flashcards", []):
                n_rows.append([data["name"], t["name"], "Flashcard", plain(c["front"]), plain(c["back"]), "", ""])

    # utf-8-sig so Excel shows symbols like √, π and ₹ correctly.
    with open(out_dir / "questions-review.csv", "w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f)
        w.writerow(["Subject", "Topic", "Q#", "Question", "A", "B", "C", "D",
                    "Keyed answer", "Answer text", "Explanation", "Reviewer OK (Y/N)", "Reviewer comment"])
        w.writerows(q_rows)
    with open(out_dir / "notes-review.csv", "w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f)
        w.writerow(["Subject", "Topic", "Type", "Heading / Front", "Point / Back", "Reviewer OK (Y/N)", "Reviewer comment"])
        w.writerows(n_rows)
    print(f"Wrote {len(q_rows)} questions and {len(n_rows)} notes/flashcards to {out_dir}")


if __name__ == "__main__":
    main()
