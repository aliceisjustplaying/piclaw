---
title: Unify timeline widget launch paths
status: inbox
priority: medium
owner: agent
created: 2026-04-11
updated: 2026-04-11
labels:
  - web
  - widgets
  - cleanup
  - rendering
---

## Summary

The web chat currently has parallel timeline launch plumbing for `generated_widget` and `dashboard_widget` content blocks. Both paths render a launch affordance, resolve origin metadata, and open the floating widget pane, but they do so through separate branches and slightly different helpers.

This is not dead code—each block type has a different widget source—but the launch UX and state wiring are redundant enough to justify consolidation behind a shared launcher abstraction.

## Why this matters

- reduces duplicated timeline widget-open logic
- makes launch behavior consistent across widget sources
- lowers risk of future bugs where one launch path gains fixes the other does not
- provides a clean place to add analytics, accessibility polish, and viewport gating once

## Scope

- identify the overlapping launch/render branches in `runtime/web/src/chat/rendering/post.ts`
- extract a shared launcher/button abstraction for timeline widget open actions
- keep source-specific resolution separate:
  - `generated_widget` provides the widget payload directly
  - `dashboard_widget` resolves a staged widget by id
- preserve current floating-pane state/origin semantics

## Acceptance criteria

- [ ] widget launch affordance rendering is shared where practical
- [ ] floating-pane open logic is not duplicated across timeline widget block types
- [ ] source-specific widget resolution remains explicit and readable
- [ ] existing widget launch behavior and tests still pass

## Links

- runtime/web/src/chat/rendering/post.ts
- runtime/web/src/ui/generated-widget-launch.tsx
- runtime/web/src/ui/app-floating-widget.ts
