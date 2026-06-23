---
title: Paper Entry
description: Paper-based quiz grading workflow for Moodle 5.0+
---

**Paper Entry** is a Moodle quiz report plugin that bridges the gap between paper exams and Moodle's gradebook. Students sit a regular paper exam. Afterwards, a manager (or assigned graders) exports a grading sheet, fills it in with the students' answers from the collected papers, and imports it to automatically create graded quiz attempts.

👉 [Get Started](/getting-started/introduction/) — [Quick Start](/getting-started/quick-start/)

---

## Two workflows

Paper Entry supports two distinct import workflows. Choose the one that fits your context.

### Workflow A — Direct import

The manager grades the papers and imports the results without involving other teachers.

| Step | Who | Action |
|---|---|---|
| 1 | Manager | Export grading sheet |
| 2 | Manager | Fill in student answers |
| 3 | Manager | Upload via **Direct Import** → committed to gradebook immediately |

Best for: small classes, single-teacher setups, emergency re-grades.

---

### Workflow B — Multi-grader with comparison *(recommended for formal exams)*

Two or more teachers grade independently. Every disagreement is highlighted before anything is committed.

| Step | Who | Action |
|---|---|---|
| 1 | Manager | Configure export columns, assign graders |
| 2 | Students | Sit their regular paper exam |
| 3 | Each grader | Download grading sheet, fill in student answers from papers, upload via **Submit Your Answers** |
| 4 | Each grader | See their own conflict status (without seeing other graders' answers) — re-upload until all cells are green |
| 5 | Manager | Monitor the full comparison table (all graders' answers side-by-side) — submit to gradebook once all agree |

Best for: formal exams, quality-assurance double-marking, moderated assessments.

---

## Key features

- **Two import workflows** — direct manager import or independent multi-grader comparison
- **Colour-coded comparison table** — instantly spot every disagreement between graders
- **Two-pass validation** — invalid answers abort the entire import cleanly; nothing is half-written
- **Value substitutions** — let graders use shorthand (`T`, `F`, `1`, `2`, `3`) instead of full answer text
- **Edit Answer** — correct a single student's answer in-place without re-uploading
- **GDPR compliant** — full Moodle Privacy API support for students and graders
- **Cross-DB compatible** — all queries use the Moodle DBAL; no vendor-specific SQL
- **CSP compatible** — all JavaScript via AMD modules, all HTML via Mustache templates

---

## Requirements

| Requirement | Version |
|---|---|
| Moodle | **5.0 or later** |
| Questions | `multichoice` and `truefalse` only |
