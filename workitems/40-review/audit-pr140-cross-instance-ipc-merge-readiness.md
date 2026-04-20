---
id: audit-pr140-cross-instance-ipc-merge-readiness
title: Audit PR #140 cross-instance IPC merge readiness
author: pi
status: review
priority: critical
created: 2026-04-20
updated: 2026-04-20
target_release: next
estimate: M
risk: high
tags:
  - work-item
  - kanban
  - audit
  - review
  - remote
  - ipc
  - security
  - docs
  - testing
owner: pi
---

# Audit PR #140 cross-instance IPC merge readiness

## Summary

PR `#140` (`feat: cross-instance IPC — pairing, proposals, and remote execution`) introduces a large, security-sensitive remote interop surface spanning pairing, signed HTTP requests, mediated proposals, short-circuit execution, result callbacks, persistence, command UX, and a packaged `remote-peer` skill.

The branch is **not merge-ready as audited on 2026-04-20**.

The audit found three independent merge blockers:

1. the branch fails the canonical local merge gate (`make ci-fast`)
2. the branch's own remote interop test suite is not green
3. multiple guarantees in `docs/cross-instance-ipc.md` do not match the implementation

The review focused on both **implementation correctness** and **documentation contract fidelity**. For this feature, the docs are part of the acceptance surface because they define the operator-facing trust and security model.

## Acceptance Criteria

- [ ] `make ci-fast` passes on the PR branch
- [ ] `runtime/test/remote/remote-interop.test.ts` passes
- [ ] `runtime/test/remote/remote-pair-commands.test.ts` passes
- [ ] unrelated churn is removed from the PR (`package-lock.json`, unrelated `.gitignore` changes) unless explicitly justified
- [ ] docs and code agree on the `read-only`, `restricted`, `full`, and `custom` permission profiles
- [ ] docs and code agree on remote execution timeout limits
- [ ] pair-review UX actually shows the fields promised by the docs
- [ ] `/pair history` matches its documented semantics or the docs are narrowed to the implemented scope
- [ ] identifier safety rules are consistent across docs, command UX, and the `remote-peer` skill
- [ ] deployment requirements are documented, including `PICLAW_WEB_EXTERNAL_URL`
- [ ] remote interop configuration variables work as documented, including `.env` support where claimed
- [ ] the final PR reply documents the blocking issues clearly and politely

## Implementation Paths

### Path A — Narrow the implementation to the documented contract (preferred)

Treat `docs/cross-instance-ipc.md` as authoritative and change the implementation to match it.

This path would require at minimum:

1. making `read-only` truly mean `ping/status only`
2. implementing the documented per-profile timeout behavior (`60s` restricted, `180s` full) or otherwise narrowing the feature scope explicitly
3. surfacing the documented pair-review metadata (full callback URL, source address, immutable ID, full fingerprint, and any requested mode/permissions if that concept remains)
4. making `/pair history` actually reflect all requests and outcomes claimed by the docs
5. removing or deferring user-facing `custom` profile UX until explicit allowlists really exist
6. tightening any identifier-routing shortcuts that undermine the anti-spoof guidance

**Why preferred:** the docs define a safer and clearer operator contract than the current implementation.

### Path B — Re-baseline the docs to the current implementation

Treat the branch implementation as the intended behavior and rewrite the docs, skill docs, and command help to match the code exactly.

This path would require at minimum:

1. documenting that `read-only` currently means all read-only tools, not only ping/status
2. documenting that `custom` is deferred and currently falls back to `restricted`
3. documenting the actual timeout behavior if all profiles currently use `60s`
4. removing or softening pair-review claims about fields that are not shown today
5. narrowing `/pair history` claims to what is really queryable today
6. documenting display-name and prefix routing as convenience behavior rather than identity-safe behavior

**Trade-off:** faster editorial convergence, but risks ratifying a broader or less operator-safe contract than intended.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [x] Existing tests rerun during audit:
  - [x] `CI=1 make ci-fast` in `/workspace/tmp/review-pr140`
  - [x] `PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 test/remote/remote-interop.test.ts test/remote/remote-pair-commands.test.ts` in `/workspace/tmp/review-pr140/runtime`
- [x] Audit included direct source/doc comparison across:
  - [x] `docs/cross-instance-ipc.md`
  - [x] `docs/architecture.md`
  - [x] `docs/configuration.md`
  - [x] `docs/tools-and-skills.md`
  - [x] `runtime/src/extensions/remote-pair.ts`
  - [x] `runtime/src/remote/*.ts`
  - [x] `runtime/src/db/remote-interop.ts`
  - [x] `runtime/skills/builtin/remote-peer/*`
- [ ] New regression coverage to add is listed in the review checklist below
- [ ] Real-browser smoke pass required? Not for this audit ticket, but manual pair/proposal/revoke smoke validation should happen before merge

## Definition of Done

- [x] Blocking issues are captured with file-level evidence
- [x] repo-level merge gate status is recorded
- [x] dedicated remote interop test status is recorded
- [x] doc/code mismatches are captured
- [x] deployment/config gaps are captured
- [ ] follow-up fixes are implemented on the PR branch
- [ ] follow-up tests are added or updated and pass locally
- [ ] docs and skills are aligned to the final behavior
- [ ] PR receives a reviewer-facing blocking comment set
- [ ] Update history complete with evidence
- [x] Ticket front matter updated

## Blocking Issues

### 1. Canonical CI gate fails on the branch

Local `make ci-fast` on the PR checkout fails.

This is a merge blocker by itself.

Specific regressions include newly introduced silent-catch / best-effort patterns that violate current repository policy, including:

- `runtime/src/agent-pool/run-agent-orchestrator.ts`
- `runtime/src/remote/service.ts`
- `runtime/src/extensions/remote-pair.ts`

### 2. The feature's own remote test suite is not green

Audit run result for the dedicated remote tests:

- `49` passing
- `19` failing
- `2` unhandled errors

Observed failure clusters include:

- pair accept flow timeouts
- pair confirm expectations returning `404`
- signed ping / proposal / execute flows returning `401`
- revoke / trust-epoch expectations failing
- success-message assertions not matching implementation state transitions

This means the feature lacks a stable verification baseline even before broader CI concerns.

### 3. `read-only` profile docs do not match code

`docs/cross-instance-ipc.md` says:

- `read-only` = `ping/status only`

`runtime/src/remote/policy.ts` actually allows all tools whose capability kind is `read-only`.

That is broader than the documented operator contract.

### 4. `custom` profile is exposed as a real option but deferred in code

The docs describe `custom` as an explicit allowlist profile, but later note that it is deferred and currently falls back to `restricted`.

The runtime confirms that fallback behavior in `runtime/src/remote/policy.ts`, while `/pair permissions` still exposes `custom` as a first-class value in `runtime/src/extensions/remote-pair.ts`.

### 5. Timeout docs do not match implementation

`docs/cross-instance-ipc.md` documents:

- `60s` restricted
- `180s` full

But `runtime/src/remote/service-operations.ts` currently uses `60_000` for both mediated execution and short-circuit execution paths.

### 6. Pair-review docs promise fields the runtime does not actually surface

`docs/cross-instance-ipc.md` says the receiver review step shows:

- full URL
- source address
- instance ID
- full fingerprint
- requested mode/permissions

Current runtime behavior does not fully provide this review surface:

- `runtime/src/remote/service-pairing.ts` inbound notification is much narrower
- `runtime/src/extensions/remote-pair.ts` list/review output does not show all promised fields
- requested mode/permissions are not clearly transmitted in Step A at all

### 7. `/pair history` does not match the documented "all requests with mode, status and outcome" contract

The current history path in `runtime/src/extensions/remote-pair.ts` reads from `remote_requests`, which captures inbound mediated proposals.

It does **not** appear to assemble a unified history including:

- short-circuit execute requests
- requester-side result callback records from `remote_result_callbacks`
- all outcomes across both mediated and direct flows

### 8. Identifier safety guidance conflicts with command/skill UX

The docs correctly state that display names are not security identifiers and that sensitive actions should use immutable identifiers.

However, the command surface and shipped `peer.ts` helper still permit routing by:

- display name
- instance ID prefix
- fingerprint

This is convenient, but weakens the consistency of the anti-spoof story, especially when documented alongside strict identity guidance.

### 9. External URL requirement is not documented where operators will look for it

Pair initiation derives the callback base URL from `PICLAW_WEB_EXTERNAL_URL` and otherwise falls back to `http://localhost:<port>`.

That environment variable was not found in `docs/configuration.md` during the audit, despite being practically required for real deployments.

### 10. `.env` support for `PICLAW_REMOTE_INTEROP_ALLOW_PRIVATE_NETWORK` looks incomplete

The variable is documented and read later in config resolution, but was not present in the initial `.env` loader allowlist in `runtime/src/core/config.ts`.

This creates risk that a documented configuration knob does not work from `.env` as expected.

### 11. Private-network dev mode appears broader than the docs imply

The docs describe `PICLAW_REMOTE_INTEROP_ALLOW_PRIVATE_NETWORK=1` as skipping private/loopback IP checks.

In `runtime/src/remote/ssrf.ts`, that mode returns early before blocked-hostname checks, which broadens the escape hatch to include things like `localhost` / `.localhost` / `.local` handling.

### 12. The PR includes unrelated churn

Audit of the PR diff found unrelated or suspicious changes that should be dropped or justified:

- `package-lock.json` huge addition at a stale version (`1.7.13` while `package.json` is `1.8.3`)
- unrelated `.gitignore` additions (`workspace/*`, `home*`)

### 13. Canonical docs remain incomplete outside the feature doc

The feature-specific design doc was updated, but the repo-level canonical docs still appear incomplete for this feature area:

- no meaningful remote interop coverage found in `docs/architecture.md`
- no meaningful remote interop / `remote-peer` skill coverage found in `docs/tools-and-skills.md`

## Full Checklist

### Merge gate

- [ ] Rebase/repair until `make ci-fast` passes
- [ ] Make `runtime/test/remote/remote-interop.test.ts` pass
- [ ] Make `runtime/test/remote/remote-pair-commands.test.ts` pass
- [ ] Remove unrelated churn from the PR (`package-lock.json`, `.gitignore`) unless explicitly justified

### Security contract alignment

- [ ] Decide whether `read-only` means `ping/status only` or broader read-only tools
- [ ] Make docs, code, tests, and help text agree on `read-only`
- [ ] Implement real `custom` allowlist support or remove/defer user-facing `custom`
- [ ] Make timeout behavior match docs or update docs to the actual intended limit
- [ ] Align identifier-safety guidance across docs, commands, and skill docs

### Pairing / review UX

- [ ] Make Step B review show the fields promised by the docs
- [ ] Decide whether requested mode/permissions are actually transmitted during pairing
- [ ] Align `/pair accept` semantics across docs, notifications, and parser/help text
- [ ] Add tests for operator-facing pair-review content

### History / auditability

- [ ] Decide what `/pair history` is supposed to include
- [ ] If docs are right, include short-circuit and result-callback records in history
- [ ] If code is right, narrow docs accordingly
- [ ] Ensure final outcomes are queryable and user-visible where promised

### Config / deployment

- [ ] Document `PICLAW_WEB_EXTERNAL_URL`
- [ ] Add a guard or warning when remote interop is enabled without a real external callback URL
- [ ] Ensure `PICLAW_REMOTE_INTEROP_ALLOW_PRIVATE_NETWORK` works from `.env` if documented that way
- [ ] Clarify whether allow-private-network also relaxes hostname protections

### SSRF / safety boundaries

- [ ] Decide whether dev mode should permit `localhost` / `.localhost` / `.local`
- [ ] Tighten `runtime/src/remote/ssrf.ts` or document the broader behavior explicitly
- [ ] Add tests for default vs allow-private-network SSRF behavior

### Branch hygiene

- [ ] Remove silent catches / best-effort patterns that violate repository policy
- [ ] Classify every failing remote test as code bug, test drift, or contract change
- [ ] Do not merge until the classification is resolved in green tests and docs

### Missing tests to add or repair

- [ ] config tests for remote interop variables and precedence
- [ ] policy tests for `read-only`, `restricted`, `full`, and `custom`
- [ ] pairing tests for review-state contents, accept/deny/block/revoke, trust epoch, and base URL persistence
- [ ] auth/signature tests for ping, proposal, execute, nonce replay, and trust-epoch mismatch
- [ ] history tests for mediated proposals, short-circuit execution, callbacks, and pagination
- [ ] user-facing tests for `/pair list`, `/pair inbox`, `/pair history`, and `peer.ts` identifier resolution

## Updates

### 2026-04-20
- Created review-lane audit ticket for PR `#140` after a documentation-vs-implementation review of the branch at `/workspace/tmp/review-pr140`.
- Recorded repo-level merge-gate failure (`make ci-fast`) and the dedicated remote suite result (`49` pass / `19` fail / `2` errors).
- Captured the main doc/code mismatches: permission profile semantics, timeout semantics, pair-review UX, history semantics, identifier safety, deployment/config drift, and SSRF/dev-mode wording.
- Recorded unrelated PR churn in `package-lock.json` and `.gitignore` as a separate cleanup item.

## Notes

### Audit conclusion

Do **not** merge PR `#140` as-is.

The feature includes meaningful and substantial work, including signed request handling, pairing, callback proof validation, mediated proposals, and short-circuit gating. However, the branch is not yet safe to merge because its verification story is red and the published operator contract does not consistently match the code.

### Positive implementation notes

The audit did confirm real progress in the branch:

- feature-gated remote interop
- Ed25519 identity and signed request flow
- nonce replay protection
- trust epoch support
- URL-control proof callback path
- mediated proposal queueing
- result callback endpoint
- explicit short-circuit gating
- conservative default accepted peer state (`mediated` + `restricted`)

These strengths do not offset the current blockers, but they do mean the branch is a serious implementation effort rather than speculative scaffolding.

## Links

- PR: `https://github.com/rcarmo/piclaw/pull/140`
- Audit branch checkout: `/workspace/tmp/review-pr140`
- Feature doc: `docs/cross-instance-ipc.md`
- Builtin skill: `runtime/skills/builtin/remote-peer/SKILL.md`
- Helper CLI: `runtime/skills/builtin/remote-peer/peer.ts`
