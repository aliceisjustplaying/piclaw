---
id: specify-web-progress-and-extension-status-model
title: Specify the web progress and extension status model
status: doing
priority: medium
created: 2026-04-21
updated: 2026-04-21
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - status
  - progress
  - spec
owner: smith
blocked-by: []
---

# Specify the web progress and extension status model

## Summary

Piclaw currently transports several extension UI concepts independently:

- `setStatus`
- `setWorkingMessage`
- `setWidget`
- `notify`
- browser `custom` requests

Pi 0.68.0 adds pressure to formalize this model because `setWorkingIndicator()` is now part of the upstream extension UI contract.

This ticket defines the **spec** for a coherent web-side extension status model, whether or not we implement the entire model in the first pass.

## Problem Statement

Today we have transport, but not a clear product model:
- some extension UI events are rendered
- some are just forwarded as browser events
- some are no-ops
- state ownership across chat switches and turn lifecycle is implicit

## Acceptance Criteria

- [ ] Define the authoritative event/state model for extension UI status in web.
- [ ] Specify minimal vs unified implementations.
- [ ] Define lifecycle semantics for chat switch, turn end, error, and reconnect.
- [ ] Define how indicators, status text, working messages, and widgets coexist.
- [ ] Provide an adoption checklist for extensions.

## Spec to produce

### Minimal version
- add SSE/browser event for working-indicator state
- support:
  - default spinner
  - hidden
  - static single-frame glyph
  - animated custom frames

### Better version
Unify:
- `setStatus`
- `setWorkingMessage`
- `setWorkingIndicator`
- `setWidget`

into one extension status model per chat/turn.

### State ownership questions to answer
- is status owned per chat, per active turn, or both?
- when do long-running extension states persist across turns?
- how should reconnect/replay restore status?
- which surfaces are ephemeral toast-only vs durable status?

### Rendering questions to answer
- primary render location
- compact vs expanded mode
- precedence when status, working message, and widget all exist
- accessibility / motion-reduction handling for animated indicators

## Core surfaces to include in the spec
- `runtime/src/channels/web/theming/ui-bridge.ts`
- `runtime/src/channels/web/sse/sse.ts`
- `runtime/web/src/ui/extension-ui-events.ts`
- `runtime/web/src/ui/app-sse-events.ts`
- any state orchestration or sidepanel/status-panel reducer involved

## Extensions to use as design drivers
- `smart-compaction`
- `ssh-core`
- `proxmox`
- `portainer`
- `image-processing`
- `autoresearch-supervisor`
- `office-tools`

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [x] Interaction scenario test
  - [x] Pane / viewer contract test
  - [ ] Real-browser smoke test

### Deliverables
- spec markdown in this ticket and/or linked design note
- implementation checklist
- test checklist for the runtime and web layers

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Docs and notes updated with links to ticket
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Links

- Parent: `workitems/20-doing/adopt-pi-coding-agent-0.68.0-followups-and-web-progress-mapping.md`
- Related: `workitems/20-doing/map-extension-working-indicator-to-web-ui.md`
