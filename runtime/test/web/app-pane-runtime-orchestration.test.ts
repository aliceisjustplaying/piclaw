import { expect, test } from 'bun:test';

import {
  invokePaneAfterAttachToHost,
  isWorkspaceUpdateRelevantForPath,
} from '../../web/src/ui/app-pane-runtime-orchestration.js';

test('invokePaneAfterAttachToHost calls the pane attach lifecycle hook when present', async () => {
  const calls: Array<{ path?: string; hostMode: 'main' | 'popout'; transferState?: Record<string, unknown> | null }> = [];
  await invokePaneAfterAttachToHost({
    afterAttachToHost: async (context) => {
      calls.push(context);
    },
  }, {
    path: '/workspace/notes.md',
    hostMode: 'popout',
    transferState: { kind: 'editor', dirty: true },
  });

  expect(calls).toEqual([
    {
      path: '/workspace/notes.md',
      hostMode: 'popout',
      transferState: { kind: 'editor', dirty: true },
    },
  ]);
});

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
