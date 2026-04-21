---
id: plan-and-sequence-pi-0.68.0-follow-up-rollout
title: Plan and sequence the Pi 0.68.0 follow-up rollout
status: doing
priority: medium
created: 2026-04-21
updated: 2026-04-21
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - planning
  - rollout
  - upstream
owner: smith
blocked-by: []
---

# Plan and sequence the Pi 0.68.0 follow-up rollout

## Summary

The follow-up list from the 0.68.0 audit is already clear. This ticket turns it into a delivery sequence with explicit P1/P2/P3 boundaries so we can land useful product improvements without mixing architecture, extension upgrades, and regression work into one oversized batch.

## Input priority list

### P1 — should do
1. implement web support for `setWorkingIndicator()`
2. adopt it in `smart-compaction`
3. adopt `session_shutdown.reason` in `ssh-core`
4. adopt `session_shutdown.reason` in `azure-openai`
5. add progress indicator support to `proxmox` / `portainer` workflow polling

### P2 — good product improvements
6. add progress indicators to `image-processing`
7. add progress indicators to `office_read` / `office_write`
8. add progress indicators to `autoresearch-supervisor`
9. optionally show structured indicator state in the status panel widget area

### P3 — cleanup / polish
10. selectively adopt `systemPromptOptions` where it reduces brittle prompt logic
11. consider exposing richer fork semantics (`before` vs `at`) in our web/session UX
12. review whether any web export/share surfaces should mirror upstream shortcut/indentation fixes

## Acceptance Criteria

- [ ] Produce a recommended delivery order with explicit dependencies.
- [ ] Separate must-have implementation work from audit-only and polish work.
- [ ] Identify which tickets can be parallelized.
- [ ] Identify which tickets should be gated on the web indicator plumbing.
- [ ] Record a minimal ship path and a fuller product-improvement path.

## Recommended sequencing

### Phase 1
- core audit ticket
- web working-indicator plumbing
- web progress/status model spec

### Phase 2
- built-in extension first adopters:
  - `smart-compaction`
  - `ssh-core`

### Phase 3
- packaged integrations first adopters:
  - `proxmox`
  - `portainer`
  - Azure lifecycle improvements

### Phase 4
- second-wave adopters:
  - `image-processing`
  - `office-tools`
  - `autoresearch-supervisor`

### Phase 5
- optional polish:
  - `systemPromptOptions`
  - richer web fork semantics
  - export/share follow-ups

## Deliverables

- ordered checklist with dependency notes
- recommended grouping into reviewable PRs/commits
- links to the concrete workitems in each phase

## Test Plan

- No special test execution required for the planning artifact itself.
- Validation is board hygiene and dependency clarity.

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Docs and notes updated with links to ticket
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Links

- Parent: `workitems/20-doing/adopt-pi-coding-agent-0.68.0-followups-and-web-progress-mapping.md`
