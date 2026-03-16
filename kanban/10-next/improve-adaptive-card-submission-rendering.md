---
id: improve-adaptive-card-submission-rendering
title: Improve rendering of Adaptive Card submissions in the web timeline
status: next
priority: medium
created: 2026-03-16
updated: 2026-03-16
tags:
  - work-item
  - kanban
  - web
  - adaptive-cards
  - timeline
  - ux
owner: pi
---

# Improve rendering of Adaptive Card submissions in the web timeline

## Summary

Adaptive Card submissions currently work functionally, but the resulting timeline
rendering is not as readable or polished as it should be.

This ticket is to improve how submitted card actions appear after a user presses
an `Action.Submit` button, so the timeline preserves the important decision/data
clearly without exposing awkward raw payload structure or low-signal boilerplate.

## Problem Statement

Current card submissions can surface as a plain submission message with dense or
mechanical details such as:

- raw-ish key/value payload echoes
- repetitive card/action metadata
- weak visual distinction between:
  - the original card
  - the user’s submitted response
  - the resulting agent/system follow-up
- poor summarization of the actual chosen action

That makes structured card interactions feel less polished than the rest of the
web timeline, even when the underlying workflow behaves correctly.

## Goals

- Make card submissions easy to scan in the timeline
- Emphasize the user’s actual choice or entered values
- De-emphasize internal transport details
- Preserve enough structure for debugging/auditability
- Keep the result consistent with the existing PiClaw web visual language

## Possible Improvements

- Render a compact, human-readable submission summary instead of dumping raw
  submission details
- Show button/action title prominently (for example: “Submitted: Move to done”)
- Render selected fields as a small fact list or badge set
- Hide or collapse low-level metadata like card ids / internal action type by default
- Visually connect a submission to its source card when possible
- Distinguish completed/cancelled/failed card outcomes more clearly
- Improve spacing, borders, icons, and typography for submission blocks

## Acceptance Criteria

- [ ] Adaptive Card submissions are rendered in a more human-readable form than the current baseline
- [ ] The main user decision/selection is visible at a glance
- [ ] Low-value metadata is reduced, hidden, or visually deprioritized
- [ ] Rendering remains compatible with the existing persisted submission payloads
- [ ] Failed/invalid card submissions still surface enough detail for troubleshooting
- [ ] Regression coverage or fixture coverage exists for the chosen rendering behavior

## Investigation Notes

Areas likely involved:

- `web/src/ui/adaptive-card-renderer.ts`
- timeline/post rendering pipeline for `content_blocks`
- message/submission persistence shape for adaptive card submissions
- any submission-specific host config or rendering helpers

## Updates

### 2026-03-16
- Created from user request after using the kanban triage card and noticing that submission rendering should be improved.

## Notes

- This is a rendering/UX ticket, not a request to redesign Adaptive Card action semantics.
- Prefer improving the existing submission display path before introducing a new parallel submission message type.
- Keep markdown fallback quality in mind if summary text is also reused outside the web-only card surface.

## Links

- `kanban/50-done/adaptive-cards-and-btw-side-conversations.md`
- `piclaw/web/src/ui/adaptive-card-renderer.ts`
- `piclaw/src/channels/web/adaptive-card-actions.ts`
