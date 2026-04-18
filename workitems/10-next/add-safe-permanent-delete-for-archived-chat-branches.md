---
id: add-safe-permanent-delete-for-archived-chat-branches
title: Add safe permanent delete for archived chat branches
status: next
created: 2026-04-18
updated: 2026-04-18
tags:
  - work-item
  - web
  - sessions
  - agents
  - cleanup
  - data-integrity
owner: pi
origin: "User request"
---

# Add safe permanent delete for archived chat branches

## Summary

PiClaw already supports pruning a branch from the active agent picker by setting
`chat_branches.archived_at` and disposing the live runtime. That is a soft
archive only: chat history, cursor state, token usage rows, and persisted
session directories remain in place, and the branch can still be restored.

Add a separate, explicit **permanent delete** path for **already archived**
branches only. It should remove the archived branch's durable state safely,
leave active/root branches untouched, and clean up now-orphaned media/session
artifacts.

## Current behaviour

- UI prune action archives the branch and hides it from the picker.
- `archiveChatBranch()` only sets `archived_at`.
- `BranchManager.pruneChatBranch()` disposes live runtimes but does **not**
  remove DB history or session directories.
- Root branches cannot be pruned.
- Archived branches can be restored later.

Relevant surfaces:
- `runtime/src/db/chat-branches.ts`
- `runtime/src/agent-pool/branch-manager.ts`
- `runtime/web/src/ui/app-branch-actions.ts`
- `/workspace/.piclaw/store/messages.db`
- `/workspace/.piclaw/data/sessions/<sanitised-chat-jid>*`

## Acceptance Criteria

- [ ] A distinct permanent-delete action exists for archived branches only.
- [ ] Active branches and root branches cannot be permanently deleted.
- [ ] Permanent delete removes the archived branch from `chat_branches`.
- [ ] Permanent delete removes the branch chat row from `chats`.
- [ ] Permanent delete removes branch rows from `messages`, `message_media`,
      `chat_cursors`, and `token_usage` keyed by that `chat_jid`.
- [ ] Unreferenced media created only for deleted messages is cleaned up.
- [ ] Persisted session directories for that archived branch are removed.
- [ ] Search/timeline/root-scope flows no longer surface the deleted branch.
- [ ] The action is irreversible and clearly warned in the UI.
- [ ] The operation is transactional or otherwise leaves the DB in a coherent
      state if cleanup fails midway.

## Non-goals

- [ ] Deleting root chats.
- [ ] Deleting non-archived branches in one step.
- [ ] Bulk deletion of all archived branches in the first pass.
- [ ] Rewriting general timeline cleanup semantics.

## Implementation Notes

### Data surfaces to inspect carefully

At minimum, permanent delete likely needs to cover:

- `chat_branches.chat_jid`
- `chats.jid`
- `messages.chat_jid`
- `message_media.message_rowid` for deleted messages
- `chat_cursors.chat_jid`
- `token_usage.chat_jid`
- session directories under `SESSIONS_DIR` for the archived `chat_jid`

Follow-up check:
- ensure `deleteUnreferencedMedia()` or equivalent cleanup runs after message
  deletion so media blobs do not accumulate.

### Suggested flow

1. verify target branch exists and `archived_at IS NOT NULL`
2. reject root branch and any currently active/runtime-backed branch
3. delete branch-owned rows inside one DB transaction
4. run unreferenced-media cleanup
5. remove session directories for the archived `chat_jid`
6. refresh branch/timeline UI state
7. show a clear success/failure result

### UI/UX

Use a stronger confirmation than normal prune, e.g.:

> Permanently delete archived branch `@name`?
>
> This removes its chat history, token usage, cursor state, and persisted
> session files. This cannot be undone.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Interaction scenario test
  - [ ] Data lifecycle / cleanup test
- [ ] Unit test: cannot permanently delete root branch
- [ ] Unit test: cannot permanently delete non-archived branch
- [ ] Unit test: deleting archived branch removes `chat_branches`, `chats`,
      `messages`, `chat_cursors`, and `token_usage` rows for that `chat_jid`
- [ ] Unit test: unreferenced media linked only to deleted messages is removed
- [ ] Unit test: session directory cleanup is attempted for the archived branch
- [ ] UI test: archived branch disappears after permanent delete
- [ ] UI test: confirmation copy makes irreversibility explicit

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs and notes updated if user-facing behaviour changes
- [ ] Operational impact assessed
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-18
- Created after confirming that current branch prune is archive-only.
- Initial inspection showed soft-prune touches `chat_branches.archived_at` and
  disposes live runtimes, but leaves DB history and session directories in
  place.

## Links

- `runtime/src/db/chat-branches.ts`
- `runtime/src/agent-pool/branch-manager.ts`
- `runtime/web/src/ui/app-branch-actions.ts`
- `runtime/src/channels/web/timeline-service.ts`
