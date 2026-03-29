import { expect, test } from 'bun:test';

import {
  shouldWatchDockShortcut,
  shouldWatchZenShortcuts,
} from '../../web/src/ui/app-shell-shortcuts.js';

test('shouldWatchDockShortcut only enables dock shortcut outside chat-only mode', () => {
  expect(shouldWatchDockShortcut({ hasDockPanes: true, chatOnlyMode: false })).toBe(true);
  expect(shouldWatchDockShortcut({ hasDockPanes: false, chatOnlyMode: false })).toBe(false);
  expect(shouldWatchDockShortcut({ hasDockPanes: true, chatOnlyMode: true })).toBe(false);
});

test('shouldWatchZenShortcuts disables zen shortcuts in chat-only mode', () => {
  expect(shouldWatchZenShortcuts(false)).toBe(true);
  expect(shouldWatchZenShortcuts(true)).toBe(false);
});
