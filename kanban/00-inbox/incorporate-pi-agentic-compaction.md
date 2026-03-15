---
id: incorporate-pi-agentic-compaction
title: Incorporate / port pi-agentic-compaction into PiClaw
status: inbox
priority: high
created: 2026-03-15
updated: 2026-03-15
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - compaction
  - context
  - upstream
  - pi
owner: pi
---

# Incorporate / port pi-agentic-compaction into PiClaw

## Summary

Investigate how `pi-agentic-compaction` should be incorporated into PiClaw and
then port or adapt the relevant pieces so context compaction becomes more
capable, less brittle, and better aligned with upstream Pi behaviour.

This should not be a blind vendor/import exercise. The work needs to establish
what `pi-agentic-compaction` actually does, which pieces belong in core PiClaw,
which pieces should stay upstream-shaped, and how it interacts with PiClaw's
existing web turn loop, queue/defer semantics, recovery, Adaptive Cards, `/btw`,
and session rotation.

## Goals

- Evaluate the upstream `pi-agentic-compaction` implementation and document the
  exact capabilities it introduces.
- Decide whether PiClaw should:
  - vendor it directly,
  - port selected logic into current PiClaw abstractions, or
  - depend on an upstream API surface once it stabilises.
- Preserve PiClaw's current guarantees around:
  - exactly-once terminal turn outcomes,
  - non-blocking compose/input,
  - queue/follow-up ordering,
  - restart/recovery correctness,
  - branch/session fork behaviour.
- Ensure any new compaction path works with the current web UX, including
  compaction affordances and branch-aware chat state.

## Why

PiClaw already has several compaction-related mechanisms and UX surfaces, but
those have evolved independently around the needs of the web runtime.
`pi-agentic-compaction` may offer a cleaner or more capable agentic compaction
model upstream, and it would be better to align with that deliberately than to
continue accreting PiClaw-specific compaction behaviour in isolation.

At the same time, PiClaw has additional constraints that upstream compaction may
not have to deal with directly:

- queued follow-ups and steering
- live web streaming and status visibility
- restart/recovery and rollback of partial turns
- session rotation and archived session continuity
- side-prompt / BTW flows
- branch-aware parallel chat sessions

So the real task is not merely “add it”, but “incorporate it safely”.

## Investigation

- Read the upstream `pi-agentic-compaction` source and docs completely.
- Identify the abstraction boundary:
  - prompt construction
  - summary generation
  - retention/window policy
  - metadata format
  - branch/tree interactions
  - failure handling
- Compare it to PiClaw's current compaction path and note mismatches.
- Determine whether PiClaw's current compaction affordance UX needs updating to
  match the upstream model.
- Check how the upstream approach behaves with:
  - active retries
  - compaction during queued follow-up handling
  - side prompts / BTW
  - branch forks from stable turns
  - session auto-rotation

## Implementation Notes

- Prefer a narrow, reversible first slice.
- Do not regress existing web turn/recovery guarantees.
- Avoid depending on unstable private upstream internals unless there is no
  safer boundary.
- If vendoring is needed, follow the established provenance/update workflow.
- Add focused regression coverage for any changed compaction semantics.

## Definition of Done

- [ ] Upstream `pi-agentic-compaction` behaviour inspected and summarised
- [ ] Integration strategy chosen and documented
- [ ] PiClaw implementation updated or follow-up execution split out clearly
- [ ] Relevant queue/recovery/session/branch regressions covered by tests
- [ ] README/docs updated if user-visible compaction behaviour changes
- [ ] `cd /workspace/piclaw/piclaw && bun run quality` passes

## Updates

### 2026-03-15
- Ticket created from user request to incorporate / port `pi-agentic-compaction` into PiClaw.
- Treat this as compaction-architecture work, not just dependency plumbing.
- Keep the outcome compatible with PiClaw's existing web runtime guarantees.

## Links

- `piclaw/piclaw/src/agent-pool.ts`
- `piclaw/piclaw/src/session-rotation.ts`
- `piclaw/piclaw/src/channels/web/recovery.ts`
- `piclaw/piclaw/src/channels/web/handlers/agent.ts`
- `piclaw/piclaw/docs/runtime-flows.md`
