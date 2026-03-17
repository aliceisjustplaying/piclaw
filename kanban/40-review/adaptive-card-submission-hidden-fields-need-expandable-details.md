---
id: adaptive-card-submission-hidden-fields-need-expandable-details
title: Adaptive Card submission receipts need expandable details for hidden fields
status: review
priority: medium
created: 2026-03-17
updated: 2026-03-17
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web
  - adaptive-cards
  - timeline
  - ux
owner: pi
---

# Adaptive Card submission receipts need expandable details for hidden fields

## Summary

Adaptive Card submission receipts in the web timeline currently collapse excess
fields behind text like `+2 more`, but there is no way to reveal what those
hidden fields are.

That makes the compact receipt harder to trust and limits auditability: the UI
signals that additional submitted values exist, but does not let the user inspect
those values on demand.

## Acceptance Criteria

- Submission receipts that show `+N more` provide an explicit way to inspect the
  hidden fields.
- The expanded view keeps the compact default presentation for readability.
- Hidden fields remain filtered/sanitized consistently with the current receipt
  rules (do not leak internal-only metadata that is intentionally suppressed).
- The interaction is accessible by mouse and keyboard.
- Regression coverage exists for compact vs expanded receipt rendering.

## Updates

### 2026-03-17 (implementation)
- Lane change: `00-inbox` → `40-review` after implementing inline expand/collapse for hidden submission fields.
- Adaptive card submission receipts now keep the compact default view but expose a `Show N more` / `Hide N more` disclosure when fields were hidden behind the previous `+N more` badge.
- Hidden fields are rendered using the same sanitized key/value formatting as visible fields; internal `__*` metadata remains suppressed.
- Files changed:
  - `piclaw/web/src/ui/adaptive-card-submission.ts`
  - `piclaw/web/src/components/post.ts`
  - `piclaw/web/static/css/styles.css`
  - `piclaw/test/web/adaptive-card-submission.test.ts`
- Validation:
  - `bun test piclaw/test/web/adaptive-card-submission.test.ts`
  - `make build-web`
  - `make lint`

### 2026-03-17
- Ticket created from user report: adaptive card response records show `+N more`
  but do not expose the hidden values anywhere.
- This is a follow-up to the compact submission rendering work rather than a
  rejection of that work: the summary is useful, but it now needs an inspection
  path.

## Notes

Likely implementation options:
- inline expand/collapse disclosure inside the receipt,
- lightweight details drawer,
- or a small modal/popover if inline expansion proves too noisy.

Keep the default compact summary, but make the hidden fields inspectable.

## Links

- `kanban/50-done/improve-adaptive-card-submission-rendering.md`
- `piclaw/web/src/ui/adaptive-card-submission.ts`
- `piclaw/web/src/components/post.ts`
- `piclaw/web/static/css/styles.css`
- `piclaw/test/web/adaptive-card-submission.test.ts`
