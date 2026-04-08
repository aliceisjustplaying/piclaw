import { expect, test } from 'bun:test';

import { canTabCompareToSaved } from '../../web/src/ui/tab-compare-saved.js';

test('canTabCompareToSaved is available for generic editor tabs', () => {
  expect(canTabCompareToSaved('/workspace/file.ts', 'editor')).toBe(true);
  expect(canTabCompareToSaved('/workspace/file.ts', null, () => ({ id: 'editor' }))).toBe(true);
});

test('canTabCompareToSaved is unavailable for specialized panes or missing paths', () => {
  expect(canTabCompareToSaved('/workspace/board.kanban.md', 'kanban-editor')).toBe(false);
  expect(canTabCompareToSaved('/workspace/board.kanban.md', null, () => ({ id: 'kanban-editor' }))).toBe(false);
  expect(canTabCompareToSaved('', 'editor')).toBe(false);
});
