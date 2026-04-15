---
id: align-prompt-and-doc-guidance-with-staged-tool-discovery
title: Align prompt and docs guidance with staged internal-tool discovery
status: done
created: 2026-04-12
updated: 2026-04-15
completed: 2026-04-15
priority: low
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - tools
  - discovery
  - docs
  - prompts
owner: pi
parent: adopt-mcp-style-discovery-for-internal-tools
---

# Align prompt and docs guidance with staged internal-tool discovery

## Summary

Finish the prompt/docs alignment pass for staged internal-tool discovery now
that parts of the model have already landed in `README.md`, tool descriptions,
and runtime docs.

The remaining work is to close the gap between **partial wording already in the
repo** and a **consistently taught default flow**:

`discover/recommend` → `capabilities/summary` → `details/help` → `activate/use`

## Desired Outcome

Agents and maintainers stop treating tool discovery as "list everything first"
and instead follow the compact staged flow by default.

This ticket is no longer about inventing the model — it is about finishing the
alignment pass and removing the remaining wording drift.

## Acceptance Criteria

- [x] Prompt/docs guidance reflects the staged internal-tool discovery order.
- [x] Guidance clearly distinguishes discovery from activation.
- [x] Guidance references the compact recommendation/capability surfaces that now exist.
- [x] Existing wording that encourages bulk detail output is revised where needed.
- [x] A short audit note records which files were checked and what wording was changed.
- [x] Any remaining docs/prompt surfaces intentionally left unchanged are called out explicitly.

## Current known partial landing

Already present in repo:

- `README.md` describes:
  - small always-active tool baseline
  - lazy activation
  - compact capability introspection
  - opt-in higher-detail help
- `docs/runtime-flows.md` documents the staged infra flow:
  - `discover → capabilities/recommend → workflow_help → workflow`
- recent docs/tool wording improved `list_internal_tools` capability framing

So the remaining work is an **alignment/cleanup pass**, not a fresh design task.

## Actionable next steps

1. **Audit the currently authoritative guidance surfaces**
   - `README.md`
   - `docs/runtime-flows.md`
   - any tool-facing docs that still describe `list_internal_tools`
   - runtime/system prompt guidance that teaches tool discovery order
2. **Find stale wording**
   - anything that implies “list everything first”
   - anything that blurs discovery vs activation
   - anything that omits the compact-summary / on-demand-detail pattern
3. **Update wording to the preferred sequence**
   - `discover/recommend`
   - `capabilities/summary`
   - `details/help`
   - `activate/use`
4. **Add one compact example where helpful**
   - show the staged flow without dumping full schemas by default
5. **Record a closeout audit note**
   - list files checked
   - list files changed
   - list any intentionally deferred surfaces

## Test Plan

- [x] Manual doc/prompt audit completed
- [x] Follow-up references are correct and consistent
- [x] Any changed examples/tool names match current runtime surfaces

## Definition of Done

- [x] Acceptance criteria satisfied
- [x] Relevant docs/prompts updated
- [x] Update history complete
- [x] Ticket front matter updated

## Updates

### 2026-04-15 (closeout)
- Completed the finish-the-alignment pass for staged internal-tool discovery.
- Checked surfaces:
  - `README.md`
  - `docs/runtime-flows.md`
  - `docs/tools-and-skills.md`
  - `runtime/src/extensions/internal-tools.ts`
  - `runtime/src/extensions/tool-activation.ts`
  - `docs/architecture.md` (checked, no wording change needed)
- Changed wording in:
  - `README.md`
    - clarified the top-level product guidance as staged internal-tool discovery (`filtered discovery → compact summary → on-demand detail → activate/use`)
  - `docs/runtime-flows.md`
    - added the internal-tool parallel staged flow next to the existing infra discovery flow
  - `docs/tools-and-skills.md`
    - added an explicit preferred staged internal-tool flow section
    - added a compact concrete example of the staged flow
    - clarified that discovery is separate from activation and full parameter schemas are on-demand
  - `runtime/src/extensions/internal-tools.ts`
    - updated the injected prompt hint and tool wording to teach query-filtered discovery, compact summaries first, and on-demand schema detail
  - `runtime/src/extensions/tool-activation.ts`
    - updated the injected prompt hint to teach discover-first, activate-only-when-needed behavior
- Intentionally left unchanged:
  - the existing infrastructure discovery wording in `docs/runtime-flows.md` (already aligned before this ticket)
  - `docs/architecture.md` tool registration map (descriptive inventory only; no staged-discovery wording drift)
  - `list_internal_tools` runtime response shape itself (this ticket was completed as a prompt/docs alignment pass without requiring behavioral redesign)
- Validation:
  - `bun test runtime/test/extensions/extensions-internal-tools.test.ts runtime/test/extensions/extensions-tool-activation.test.ts`
- Closeout note: the ticket stayed scoped to alignment/cleanup and did not require additional runtime surface changes beyond prompt wording.

### 2026-04-15
- Promoted from `10-next` to `20-doing` as the easiest remaining staged-discovery slice after confirming the repo already contains a partial landing in recent docs/tool wording.
- Reframed the ticket as a finish-the-alignment pass rather than a fresh design task.
- Added explicit actionable next steps so this can be closed with a short audit/edit pass instead of lingering as vague cleanup.

### 2026-04-12
- Split from `adopt-mcp-style-discovery-for-internal-tools` as the docs/prompt alignment slice.

## Links

- `workitems/10-next/adopt-mcp-style-discovery-for-internal-tools.md`
- `README.md`
- `docs/runtime-flows.md`
