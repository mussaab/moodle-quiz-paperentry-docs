---
title: Changelog
description: Version history and release notes for Paper Entry.
---

All notable changes to this project are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.0.0] — 2026-06-16

Initial public release.

### Features

- **Blank CSV export** with configurable student profile columns (email, ID number,
  custom profile fields) selected via a tag-picker UI.
- **Multi-grader workflow** — managers assign independent graders; each grader
  uploads their own filled sheet.
- **Grader comparison table** — colour-coded per-student, per-question view
  highlighting every disagreement between graders.
- **Gated gradebook import** — the Submit button is enabled only when all graders
  have uploaded and every answer agrees.
- **Two-pass import validation** — all rows are validated before anything is written
  to the database; a single bad answer aborts the entire import cleanly.
- **Inline valid-options in error messages** — invalid answer errors list all valid
  options directly in the message.
- **Value substitutions** — managers define shorthand mappings (e.g. `T → True`,
  `1 → Paris`) so graders can use any notation they prefer.
- **Edit Answer** — managers correct a single student's answer in-place without
  re-uploading a full CSV.
- **Shuffle-answer detection** — the export button is disabled if any question has
  "Shuffle answers" turned on.
- **Direct Import override** — managers can bypass the grader workflow and import a
  CSV immediately (collapsed by default).
- **Moodle Component Library compliance** — all JavaScript via AMD modules; all HTML
  via Mustache templates; fully CSP-compatible.
- **File API storage** — grader CSV submissions stored via the Moodle File API
  (not raw database text).
- **Privacy API** — full GDPR support: metadata declaration, data export, and
  deletion for both students and graders.
- **Capability system** — three capabilities (`view`, `submit`, `manage`) with a
  dedicated `paperentry_grader` role scoped to the module context.
- **Database integrity** — foreign keys and indexes on all plugin tables.
- **PHPUnit test suite** — 15 tests covering import, export, and privacy logic.
- **Supported Moodle versions** — 5.0 and 5.1.
