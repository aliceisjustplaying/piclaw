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

test('kanban editor source surfaces undo state in the toolbar', () => {
  const source = readFileSync(
    join(process.cwd(), 'runtime', 'web', 'src', 'vendor', 'kanban-editor-source.ts'),
    'utf8',
  );

  expect(source).toContain('Last change: ${latestUndoEntry.label}');
  expect(source).toContain('title=${latestUndoEntry ? `Undo: ${latestUndoEntry.label} (Ctrl+Z)` : \'Undo (Ctrl+Z)\'}');
});

test('kanban editor source supports intra-lane card reordering drop targets', () => {
  const source = readFileSync(
    join(process.cwd(), 'runtime', 'web', 'src', 'vendor', 'kanban-editor-source.ts'),
    'utf8',
  );

  expect(source).toContain("const [dropPosition, setDropPosition] = useState<'before' | 'after' | null>(null);");
  expect(source).toContain("onMoveCard(draggedCard.card, draggedCard.fromLaneId, laneId, cardIndex + (insertAfter ? 1 : 0));");
  expect(source).toContain('class="kanban-plugin__item-wrapper ${dropPosition ? `is-drop-${dropPosition}` : \'\'}"');
});
