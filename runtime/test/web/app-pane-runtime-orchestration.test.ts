import { expect, test } from 'bun:test';

import { isWorkspaceUpdateRelevantForPath } from '../../web/src/ui/app-pane-runtime-orchestration.js';

test('isWorkspaceUpdateRelevantForPath treats empty update list as relevant', () => {
  expect(isWorkspaceUpdateRelevantForPath('notes/todo.md', [])).toBe(true);
  expect(isWorkspaceUpdateRelevantForPath('notes/todo.md', null)).toBe(true);
});

test('isWorkspaceUpdateRelevantForPath matches direct and wildcard paths', () => {
  expect(isWorkspaceUpdateRelevantForPath('notes/todo.md', [{ changed_paths: ['notes/todo.md'] }])).toBe(true);
  expect(isWorkspaceUpdateRelevantForPath('notes/todo.md', [{ changed_paths: ['.'] }])).toBe(true);
  expect(isWorkspaceUpdateRelevantForPath('notes/todo.md', [{ path: '.' }])).toBe(true);
});

test('isWorkspaceUpdateRelevantForPath ignores unrelated updates', () => {
  expect(isWorkspaceUpdateRelevantForPath('notes/todo.md', [{ changed_paths: ['notes/other.md'] }])).toBe(false);
  expect(isWorkspaceUpdateRelevantForPath('notes/todo.md', [{ path: 'notes/other.md' }])).toBe(false);
});
