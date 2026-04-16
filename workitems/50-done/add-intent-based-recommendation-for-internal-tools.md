---
id: add-intent-based-recommendation-for-internal-tools
title: Add intent-based recommendation for internal tools
status: done
created: 2026-04-12
updated: 2026-04-15
completed: 2026-04-15
priority: medium
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - tools
  - discovery
  - recommendation
  - ux
owner: pi
parent: adopt-mcp-style-discovery-for-internal-tools
---

# Add intent-based recommendation for internal tools

## Summary

Add a lightweight recommendation surface for internal tools so an agent can ask
"what tool fits this intent?" before activating or inspecting everything.

This should be the internal-tool counterpart to the compact `recommend` flows
already used by infra integrations.

## Desired Outcome

Given a short intent like:

- search notes
- inspect recent messages
- attach a file
- schedule something
- inspect SQL tables

Piclaw can return a short ranked shortlist of likely tools instead of forcing a
full inventory scan.

## Acceptance Criteria

- [x] A recommendation surface exists for internal tools.
- [x] The result is compact and shortlist-oriented.
- [x] Results explain why each tool is a fit at a high level.
- [x] Results distinguish between already-active tools and tools that require activation.
- [x] The recommendation surface does not return full schema/details by default.
- [x] Focused regression coverage exists for representative intents.

## Implementation Path

1. Choose whether this lands as an extension of `list_internal_tools` or a new
   helper surface.
2. Define a small intent-to-tool matching strategy.
3. Return ranked compact recommendations with short reasons.
4. Add tests for representative intents and fallback behavior.

## Test Plan

- [x] Existing tests to rerun are listed
- [x] New regression coverage to add is listed
  - [x] search-oriented intent
  - [x] file/workspace intent
  - [x] scheduling intent
  - [x] message/history intent
  - [x] unknown intent fallback

## Definition of Done

- [x] Acceptance criteria satisfied
- [x] Tests passing locally
- [x] Update history complete
- [x] Ticket front matter updated

## Updates

### 2026-04-15
- Implemented intent-based recommendation directly inside `list_internal_tools` rather than creating a new tool surface.
- Added optional `intent` input and kept `query` / `include_parameters` behavior intact.
- Recommendation matching now uses existing tool metadata first:
  - `name`
  - `description`
  - `promptSnippet`
  - `toolsets`
- Added supplemental recommendation metadata in `runtime/src/extensions/tool-capabilities.ts` for builtins and ambiguous tools, while still allowing extension tools to be discovered from their own descriptions/snippets.
- Added reviewable recommendation details so matches can be audited as the tool catalog grows:
  - `matched_terms`
  - `matched_sources`
  - `reason_summary`
  - `recommendation_profile`
- Kept MCP bounded as a single recommendable internal tool; no server-specific MCP capability expansion was added to `list_internal_tools`.
- Updated `docs/tools-and-skills.md` to document `intent`-based recommendation mode and the staged recommendation → detail → activate/use flow.
- Validation:
  - `bun test runtime/test/extensions/extensions-internal-tools.test.ts`
  - `bun test runtime/test/extensions/extensions-tool-activation.test.ts runtime/test/extensions/extensions-internal-tools.test.ts`
  - `bun run typecheck`

### 2026-04-12
- Split from `adopt-mcp-style-discovery-for-internal-tools` as the compact recommendation slice.

## Links

- `workitems/10-next/adopt-mcp-style-discovery-for-internal-tools.md`
- `README.md`
- `docs/runtime-flows.md`
