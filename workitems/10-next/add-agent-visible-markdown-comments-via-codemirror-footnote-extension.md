---
id: add-agent-visible-markdown-comments-via-codemirror-footnote-extension
title: Add agent-visible markdown comments via CodeMirror footnote-style extension
status: next
priority: medium
created: 2026-04-18
updated: 2026-04-18
target_release: next
tags:
  - work-item
  - kanban
  - web
  - editor
  - markdown
  - ux
owner: pi
---

# Add agent-visible markdown comments via CodeMirror footnote-style extension

## Summary

Add a markdown-native way to store agent-visible comments inside ordinary
`.md` documents using a dedicated footnote-style syntax managed by the
standalone CodeMirror editor extension.

The goal is to keep comments:

- visible to agents because they live in the markdown source itself
- manageable for humans through editor affordances rather than raw footnote
  editing
- plain-text and portable, with no sidecar metadata or hidden storage
- clearly distinct from normal human-facing footnotes

Proposed persisted syntax:

- inline reference: `[^@comment-id]`
- definition: `[^@comment-id]: comment text`

Example:

```md
This section needs a source refresh.[^@todo-source]

[^@todo-source]: Agent note — verify whether the benchmark still uses the
  archived `web:default` session or the rotated one.
```

This keeps the feature markdown-safe while giving the editor a stable token
shape to decorate, fold, insert, rename, and navigate.

## Acceptance Criteria

- [ ] Agent-visible comments serialize directly into markdown source using an
      `@`-prefixed footnote-style syntax such as `[^@id]` / `[^@id]: ...`.
- [ ] The syntax is managed entirely in the editor surface; no sidecar JSON,
      hidden DB state, or browser-only metadata is required.
- [ ] The CodeMirror editor distinguishes agent comments from normal footnotes
      visually and behaviorally.
- [ ] The editor supports comment creation from the current cursor/selection
      without forcing users to hand-author the reference/definition pair.
- [ ] The editor supports navigation between comment reference and definition.
- [ ] The editor detects and surfaces unresolved, orphaned, or duplicate
      agent-comment IDs.
- [ ] Existing normal footnotes continue to work unchanged.
- [ ] Markdown round-trip stays stable: opening, saving, reloading, and
      previewing the file does not corrupt comment syntax.
- [ ] Agent comments remain readable in raw file contents so tools/agents that
      only see markdown text can still use them.

## Implementation Paths

### Path A — layer an agent-comment extension on top of existing footnote support (recommended)

Build a dedicated markdown/editor layer that treats `[^@...]` as a special
subset of footnotes while leaving ordinary `[^ref]` behavior untouched.

1. Extend the markdown live-preview/decorator pipeline with an
   agent-comment-specific parser/decorator.
2. Reuse the existing footnote navigation model where possible, but add
   distinct styling and validation for `@`-prefixed refs.
3. Add editor commands/UI affordances for:
   - insert agent comment
   - jump to comment definition
   - rename comment ID safely
   - list unresolved/orphaned comments
4. Keep persisted text fully markdown-native.

**Why recommended:** it minimizes regression risk for existing footnotes and
keeps the new behavior narrow and explicit.

### Path B — broaden the existing footnote extension to understand comment subtypes

Teach the current footnote extension to treat `@`-prefixed refs as a first-class
variant.

1. Update parser/decoration logic in the existing footnote module.
2. Branch rendering and validation when the ref begins with `@`.
3. Add higher-level editor actions in the standalone editor extension.

**Trade-off:** less duplication, but higher risk of coupling normal footnotes
and comment behavior too tightly.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [x] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [x] Existing tests to rerun are listed
- [x] New regression coverage to add is listed
- [ ] Real-browser smoke pass required? If yes, record the surface

### Existing tests to rerun

- `runtime/test/web/editor-extension.test.ts`
- `runtime/test/web/tab-source-editor.test.ts`
- `runtime/test/web/editor-popout-transfer.test.ts`
- `runtime/test/web/editor-safety.test.ts`
- any markdown preview/editor tests covering source round-trip

### New regression coverage to add

- [ ] markdown parser/decorator test for `[^@id]` references and definitions
- [ ] editor interaction test for inserting a new agent comment from cursor or selection
- [ ] validation test for unresolved / duplicate / orphaned agent-comment refs
- [ ] round-trip test proving normal footnotes and agent comments coexist
- [ ] preview/render test for the chosen display policy (plain, muted, folded, or hidden)

### Regression classes this ticket risks

- normal footnote behavior in the editor
- markdown save/load round-trip stability
- editor live-preview decorations and cursor behavior
- preview rendering policy for comment definitions

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

### 2026-04-18
- Created from direct product request for markdown-native agent comments that
  stay visible to agents while being editor-managed for humans.
- Scoped the initial concept around `@`-prefixed footnote-style references so
  the feature can remain plain-text and compatible with existing markdown
  editing flows.

## Notes

- The current standalone editor already has markdown-specific extensions under:
  - `runtime/extensions/viewers/editor/markdown/`
- Existing footnote support lives in:
  - `runtime/extensions/viewers/editor/markdown/footnote.ts`
- The new feature should prefer building on that editor-local markdown layer
  rather than introducing a generic server-side markdown transform.
- An open design choice is the preview policy for agent comments:
  - show inline as normal footnotes
  - show with muted “agent comment” styling
  - fold/hide by default in human preview while preserving raw source text

## Links

- `runtime/extensions/viewers/editor/editor-extension.ts`
- `runtime/extensions/viewers/editor/markdown/footnote.ts`
- `runtime/web/src/ui/tab-source-editor.ts`
- `runtime/web/src/components/markdown-preview.ts`
