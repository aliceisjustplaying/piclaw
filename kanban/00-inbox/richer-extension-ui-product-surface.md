---
id: richer-extension-ui-product-surface
title: Decide whether extension UI browser-event bridging should become a richer first-class product surface
status: inbox
priority: medium
created: 2026-03-16
updated: 2026-03-16
target_release: next
tags:
  - work-item
  - kanban
  - web
  - extensions
  - ui
  - sse
  - product
owner: pi
---

# Decide whether extension UI browser-event bridging should become a richer first-class product surface

## Summary

PiClaw now bridges the `extension_ui_*` SSE family into browser events and shows lightweight intent toasts for selected events.

That closes the original client-contract gap, but it leaves a product question open:

Should extension UI remain a thin browser-event compatibility layer, or should PiClaw expose a more explicit first-class extension UI surface in the web app?

## Problem Statement

The current state is technically functional:

- server emits `extension_ui_*`
- client subscribes to them
- app bridges them into browser events
- some notifications surface in lightweight UI

However, the long-term product model is still undecided.

Open questions include:

- Is browser-event bridging the intended permanent API for extension UI?
- Should extensions get a more structured UI host surface?
- Which event types deserve built-in rendering or routing?
- How should extension UI state be represented in the timeline vs ephemeral shell UI?
- What should the supported contract be for third-party/workspace extensions?

## Acceptance Criteria

- [ ] Decide whether browser-event bridging is sufficient as the intended product surface
- [ ] If not, define the minimal richer extension-UI surface PiClaw should support
- [ ] Identify which `extension_ui_*` events should stay internal, stay bridged, or gain first-class rendering
- [ ] Document the intended extension-UI product contract clearly
- [ ] Create implementation follow-ups only after the product surface is decided

## Notes

- This is intentionally a follow-up to the now-closed client-contract gap ticket.
- Treat this as product/architecture clarification, not just transport wiring.

## Links

- `kanban/50-done/extension-ui-sse-client-contract-gap.md`
- `piclaw/piclaw/src/channels/web/ui-bridge.ts`
- `piclaw/piclaw/web/src/api.ts`
- `piclaw/piclaw/web/src/app.ts`
