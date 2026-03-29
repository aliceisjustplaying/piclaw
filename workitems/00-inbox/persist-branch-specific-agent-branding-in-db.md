---
id: persist-branch-specific-agent-branding-in-db
title: Persist avatar images and agent names in the database with per-branch overrides
status: inbox
priority: medium
created: 2026-03-29
updated: 2026-03-29
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - identity
  - branches
  - database
owner: pi
---

# Persist avatar images and agent names in the database with per-branch overrides

## Summary

Agent branding currently depends too heavily on config/runtime state.

We want avatar images and agent names to be persisted in the database and to be
customizable per branch, so that different branches/chats/agent branches can
carry distinct identity/branding without relying on mutable global config.

This should cover both:
- durable persistence of avatar/name state in the DB
- branch-scoped overrides so a branch can opt into a custom avatar/name without
  affecting every other branch

## Acceptance Criteria

- Agent name and avatar data are persisted in the database rather than relying
  only on `.piclaw/config.json` or process-local state.
- Branch records can define agent-branding overrides at least for:
  - agent display name
  - agent avatar image / avatar URL / avatar media reference
- A branch with no override falls back cleanly to the default/global agent
  identity.
- Switching branches updates the web UI to show the correct branding for that
  branch without a full reload.
- Branch-specific branding survives restart/reload and is restored from the DB.
- The data model supports future extension to user/branch branding if we want
  parity later.
- Tests cover persistence, branch fallback behavior, and web-surface refresh.

## Scope

- Define the DB shape for durable agent branding
- Decide whether avatar persistence should store:
  - URL only
  - uploaded media reference
  - both
- Define precedence rules between:
  - branch override
  - default persisted identity
  - config fallback
- Wire branch-aware branding resolution into the web channel/bootstrap payloads
- Update branch switching / branch metadata refresh flows
- Add regression coverage so branch-local branding cannot leak across branches

## Updates

### 2026-03-29
- Ticket created from a user request after debugging avatar regressions caused
  by config mutation during audit runs.
- Current pain point: global config-backed identity is too fragile for durable
  per-branch branding and too easy to clobber.

## Notes

Open design questions:
- Should avatar images be stored as media rows with references from branch/chat
  tables, instead of raw URLs in config or branch metadata?
- Should branch branding live on `chat_branches`, a dedicated branding table, or
  a more general branch metadata payload?
- Do we want slash commands like `/agent-name` and `/agent-avatar` to target:
  - global identity by default
  - current branch by default
  - or support explicit scopes?
- Should default/global branding also migrate into the DB as part of this work,
  with config only acting as bootstrap fallback?

Likely touchpoints:
- `runtime/src/db.ts`
- `runtime/src/db/chat-branches.ts`
- `runtime/src/core/config.ts`
- `runtime/src/agent-control/`
- `runtime/src/channels/web/agent/`
- `runtime/src/channels/web/cards/interaction-service.ts`
- `runtime/web/src/ui/app-profile-events.ts`
- `runtime/web/src/components/post.ts`

## Links

- `workitems/50-done/branch-handle-lifecycle-and-tests.md`
- `workitems/50-done/editor-branch-affordance.md`
