---
id: advance-floating-widget-runtime-beyond-v1
title: Advance floating widget runtime beyond the v1 overlay
status: inbox
priority: P2
owner: agent
created: 2026-04-11
updated: 2026-04-11
tags:
  - web
  - widgets
  - ui
  - follow-up
summary: Follow the shipped v1 floating-widget overlay with deeper runtime hardening and richer shell integration for multi-chat, reconnect, and pane-management scenarios.
---

## Problem

The current floating widget surface is good enough for a single active live/timeline widget, but it is intentionally conservative. Richer shell behavior and runtime hardening were deferred so the first slice could ship.

## Deferred follow-ups

- support multiple concurrent widgets or a clearer queue/replace policy
- improve reconnect behavior for long-lived live widget sessions
- review cross-chat/session adoption rules for edge cases beyond the current chat-scoped SSE routing
- consider richer shell actions such as dock/undock, resize presets, or promote-to-pane behavior
- tighten the widget host contract and telemetry around postMessage failures
- expand browser-level regression coverage for live widget runtime flows

## Acceptance criteria

- [ ] Deferred runtime scenarios are broken into concrete, testable sub-slices.
- [ ] One chosen follow-up lands with automated regression coverage.
- [ ] The widget runtime contract remains documented in the relevant code/comments and work items.

## Links

- Parent review item: `workitems/20-doing/timeline-launched-floating-generative-widget-pane.md`
- Initial implementation review item should reference this ticket when moved to review.
