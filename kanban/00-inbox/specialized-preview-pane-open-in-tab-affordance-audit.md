---
id: specialized-preview-pane-open-in-tab-affordance-audit
title: Audit and normalize open-in-tab affordances across specialized preview panes
status: inbox
priority: medium
created: 2026-03-16
updated: 2026-03-16
target_release: next
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web-ui
  - preview
  - viewer
  - editor
owner: pi
---

# Audit and normalize open-in-tab affordances across specialized preview panes

## Summary

Several specialized preview/viewer panes now expose their own explicit actions
for opening content in a fuller tab/viewer context.

This ticket is the sibling follow-up to the generic workspace preview button
work: instead of changing the main workspace preview surface, it focuses on
whether the specialized viewer panes present a consistent and intentional
"open in tab" / "open elsewhere" affordance model.

## Why

The generic workspace preview pane should stay narrowly focused on the simple
"promote this preview into an editor tab" affordance.

Separately, specialized panes such as draw.io, office, CSV, PDF, and image
viewers may already have related actions, but the UX contract may now be
fragmented across labels, placement, behavior, and target destination.

## Acceptance Criteria

- [ ] Inventory the existing explicit open/promote actions across specialized preview/viewer panes.
- [ ] Decide which panes should offer:
  - open in editor tab
  - open in viewer tab
  - open in new browser tab
  - or no additional action at all
- [ ] Normalize labels/iconography/placement where appropriate.
- [ ] Ensure the intended target behavior is consistent with existing tab/open routing.
- [ ] Create narrower implementation follow-ups if the audit finds real UX mismatches.

## Relevant Areas

- `piclaw/piclaw/web/src/panes/drawio-pane.ts`
- `piclaw/piclaw/web/src/panes/office-viewer-pane.ts`
- `piclaw/piclaw/web/src/panes/csv-viewer-pane.ts`
- `piclaw/piclaw/web/src/panes/pdf-viewer-pane.ts`
- `piclaw/piclaw/web/src/panes/image-viewer-pane.ts`
- `piclaw/piclaw/web/src/panes/workspace-preview-pane.ts`
- `piclaw/piclaw/web/src/components/tab-strip.ts`

## Notes

- This is intentionally separate from the generic workspace preview button ticket.
- Prefer to reuse existing open/focus behavior rather than invent new routes.

## Links

- `kanban/00-inbox/workspace-preview-pop-into-editor-tab-button.md`
