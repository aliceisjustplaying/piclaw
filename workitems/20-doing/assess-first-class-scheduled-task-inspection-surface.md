---
id: assess-first-class-scheduled-task-inspection-surface
title: Assess a first-class scheduled-task inspection surface for agents
status: doing
created: 2026-04-12
updated: 2026-04-12
tags:
  - work-item
  - kanban
  - scheduling
  - agent-tools
  - ux
owner: 
---

# Assess a first-class scheduled-task inspection surface for agents

## Summary

Assess and design a proper agent-facing way to inspect scheduled tasks without falling back to direct database queries, ad-hoc Python, or low-level implementation details.

The goal is to give the agent a stable, supported surface for answering questions like:

- what tasks are scheduled?
- when do they run next?
- what did they last do?
- which tasks are active, paused, failed, or completed?
- how should task details be surfaced in chat and web UI flows?

## Acceptance Criteria

- [ ] Current scheduled-task inspection paths are documented, including DB and shell/python fallbacks currently used.
- [ ] Desired agent-facing inspection scenarios are listed and prioritized.
- [ ] At least one recommended supported surface is proposed, such as:
  - a native tool
  - a slash command / control command
  - a web/API endpoint
  - a shared service used by both tool and UI layers
- [ ] The proposal explains how to avoid direct DB poking for routine task inspection.
- [ ] The proposal identifies what metadata should be exposed for each task.
- [ ] Security, privacy, and channel-appropriate output concerns are covered.
- [ ] Follow-up implementation tickets are created if the work is split.

## Implementation Paths

### Path A — Native tool first
- Add a dedicated internal tool for task inspection
- Return structured task records plus summary formatting guidance
- Prefer this for agent autonomy and reuse

### Path B — Shared service + thin surfaces
- Extract a canonical scheduled-task query service
- Use it from:
  - agent tool
  - slash command
  - web/API views
- Keep formatting separate from retrieval

### Path C — Control command/UI-first
- Add or expand a `/tasks` / `/scheduled` inspection surface
- Ensure the same underlying service can be used by agent tools later

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed
- [ ] New regression coverage to add is listed
- [ ] Real-browser smoke pass required? If yes, record the surface

### Existing tests to rerun
- task scheduler unit/integration tests touching task listing and execution
- any `/tasks` or `/scheduled` command tests
- `bun run typecheck`

### New regression coverage to add
- [ ] structured task-inspection service tests
- [ ] tool/command contract tests for scheduled-task inspection
- [ ] channel-formatting tests for task summaries where applicable
- [ ] permission/visibility tests if sensitive command/task data is exposed

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-12 — concrete pain point from live scheduling flow
- During a real user request, I scheduled a one-shot agent task to check for new GHCR images and upgrade `relay` and `sandbox` later.
- When the user asked `did the scheduled task run already?`, I did **not** have a first-class inspection surface available.
- To answer, I had to query `/workspace/.piclaw/store/messages.db` directly with ad-hoc Python and inspect `scheduled_tasks` fields such as:
  - `id`
  - `status`
  - `schedule_type`
  - `schedule_value`
  - `next_run`
  - `last_run`
  - `last_result`
- When the user then asked to delay the task by another 5 minutes, I again lacked a first-class reschedule/update tool.
- I had to fall back to the IPC implementation detail by writing an `update_task` JSON payload into `/workspace/.piclaw/data/ipc/tasks/`, then re-query the DB to confirm the new `schedule_value` / `next_run`.
- This is exactly the unsupported workflow we want to eliminate: routine inspection and simple changes required a mix of SQLite poking, Python, and low-level IPC knowledge.
- The minimum first-class surface should cover:
  - list/find scheduled tasks by chat, prompt, status, or recency
  - inspect one task's current schedule and latest execution metadata
  - delay/reschedule a task without writing raw IPC files
  - show whether a task has run yet, when it will run next, and the last result summary
- This incident is a strong argument for either:
  - a native scheduled-task inspection/update tool, or
  - a shared scheduled-task service used by both a tool and a `/tasks`-style command.

### 2026-04-12
- Created from user request to stop relying on database inspection and ad-hoc Python for scheduled-task checks.
- Marked as `doing` to drive an assessment of the right first-class surface for agent use.

## Notes

- Prefer a supported runtime/service surface over SQLite introspection for routine checks.
- Avoid coupling the agent to raw DB schema details.
- Keep the resulting interface useful for both agent reasoning and human-facing summaries.
- The live reschedule example on 2026-04-12 showed two separate missing capabilities:
  - inspection (`did it run? what is next_run?`)
  - mutation (`delay this task by 5 minutes`)
- Even if this ticket remains inspection-first, the eventual tool shape should likely be designed so simple task updates can share the same canonical task lookup surface instead of forcing IPC fallbacks.

## Links

- `runtime/src/task-scheduler.ts`
- `runtime/src/ipc.ts`
- `runtime/src/agent-control/handlers/info.ts`
- `runtime/src/extensions/messages-crud.ts`
