import { expect, test } from 'bun:test';
import { readFileSync } from 'fs';
import { join } from 'path';

test('kanban editor source defines html escaping for card markdown rendering', () => {
  const source = readFileSync(
    join(process.cwd(), 'runtime', 'web', 'src', 'vendor', 'kanban-editor-source.ts'),
    'utf8',
  );

  expect(source).toContain('function escapeHtml');
  expect(source).toContain('const escaped = escapeHtml(source);');
});
