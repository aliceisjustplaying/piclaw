---
id: overhaul-and-simplify-ci-process
title: Overhaul and simplify the CI process
status: doing
priority: high
created: 2026-03-30
updated: 2026-03-30
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - ci
  - github-actions
  - quality
  - tooling
owner: pi
blocked-by: []
---

# Overhaul and simplify the CI process

## Summary

Piclaw’s current validation surface has grown into a broad mix of Bun scripts,
Make targets, audit flows, and GitHub workflow behavior. That makes CI harder
to reason about than it should be, increases the chance that local success does
not match CI success, and slows down maintenance whenever new checks are added
or refactored.

This ticket tracks a deliberate simplification pass over the CI process so that:

- the canonical validation entry points are explicit
- local developer workflows and CI workflows use the same commands where practical
- flaky or duplicated checks are reduced
- packaging / install validation remains aligned with the authoritative container runtime

This is broader than a single workflow-file cleanup: it should produce a
clearer, smaller, and more deterministic validation contract for the repo.

## Acceptance Criteria

- [ ] The repo has a clearly documented canonical CI command set (for example: fast checks, full quality, release/publish validation).
- [ ] GitHub Actions workflow steps are simplified to use those canonical commands instead of ad-hoc duplicated shell logic where practical.
- [ ] Redundant or overlapping CI checks are identified and either removed or intentionally justified.
- [ ] The resulting CI flow is easier to understand from the workflow files and README/docs.
- [ ] Local developer validation and CI validation are materially closer after the change.
- [ ] Any follow-up work that is too large for this tranche is split into explicit linked tickets.

## Implementation Paths

### Path A — Collapse onto a small canonical command surface (recommended)
- Define a small set of repo-owned commands that represent the supported validation tiers.
- Update GitHub Actions to call those commands directly.
- Remove duplicated per-workflow shell logic unless a workflow truly needs special behavior.

### Path B — Keep current commands but document the mapping better
- Leave most workflow structure intact.
- Improve docs and comments so the current complexity is at least explainable.

Why Path B is weaker:
- it preserves accidental complexity
- it does less to prevent future drift between local and CI behavior

## Test Plan

- [ ] Inventory the current GitHub workflows and note which commands they run.
- [ ] Identify overlap between CI commands, local `make` targets, and `package.json` scripts.
- [ ] Propose or implement a smaller canonical command surface.
- [ ] Validate the resulting commands locally.
- [ ] If workflows change, verify the YAML remains syntactically valid and references real commands.

## Definition of Done

- [ ] CI entry points are smaller and clearer than before.
- [ ] Workflow logic and local validation commands are aligned.
- [ ] Documentation reflects the real supported CI contract.
- [ ] Follow-up complexity is tracked explicitly instead of left implicit.

## Updates

### 2026-03-30
- Created directly in `20-doing` per explicit user instruction to add a doing ticket for CI simplification.
- Scope is intentionally broad enough to cover workflow simplification and command-surface cleanup, but still constrained to CI contract clarity rather than unrelated runtime refactors.
- Note: this temporarily exceeds the preferred doing-lane WIP limit because the user explicitly requested immediate tracking plus implementation work elsewhere in the same session.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

## Notes

- Likely related surfaces:
  - `.github/workflows/*.yml`
  - `package.json`
  - `Makefile`
  - `README.md`
- Keep container/runtime install assumptions explicit:
  - Supervisor-managed runtime in the container
  - global Bun root under `/usr/local/lib/bun`

## Links

- `.github/workflows/publish.yml`
- `package.json`
- `Makefile`
- `README.md`
