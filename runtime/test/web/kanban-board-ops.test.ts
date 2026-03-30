import { expect, test } from 'bun:test';

import { moveCardInBoard, moveLaneInBoard, type KanbanBoardData } from '../../web/src/vendor/kanban-board-ops.js';

function createBoard(): KanbanBoardData {
  return {
    lanes: [
      {
        id: 'lane-a',
        title: 'A',
        cards: [
          { id: 'card-1', title: 'One', checked: false, checkChar: ' ' },
          { id: 'card-2', title: 'Two', checked: false, checkChar: ' ' },
        ],
      },
      {
        id: 'lane-b',
        title: 'B',
        cards: [
          { id: 'card-3', title: 'Three', checked: false, checkChar: ' ' },
        ],
      },
    ],
    archive: [],
    settings: {},
  };
}

test('moveCardInBoard reorders cards within the same lane', () => {
  const board = createBoard();
  const next = moveCardInBoard(board, {
    cardId: 'card-1',
    fromLaneId: 'lane-a',
    toLaneId: 'lane-a',
    toIndex: 2,
  });

  expect(next).not.toBe(board);
  expect(next.lanes[0].cards.map((card) => card.id)).toEqual(['card-2', 'card-1']);
});

test('moveCardInBoard moves a card across lanes without duplication', () => {
  const board = createBoard();
  const next = moveCardInBoard(board, {
    cardId: 'card-2',
    fromLaneId: 'lane-a',
    toLaneId: 'lane-b',
    toIndex: 0,
  });

  expect(next).not.toBe(board);
  expect(next.lanes[0].cards.map((card) => card.id)).toEqual(['card-1']);
  expect(next.lanes[1].cards.map((card) => card.id)).toEqual(['card-2', 'card-3']);
});

test('moveCardInBoard ignores missing lanes, missing cards, and no-op reorder targets', () => {
  const board = createBoard();
  expect(moveCardInBoard(board, { cardId: 'missing', fromLaneId: 'lane-a', toLaneId: 'lane-b' })).toBe(board);
  expect(moveCardInBoard(board, { cardId: 'card-1', fromLaneId: 'missing', toLaneId: 'lane-b' })).toBe(board);
  expect(moveCardInBoard(board, { cardId: 'card-1', fromLaneId: 'lane-a', toLaneId: 'missing' })).toBe(board);
  expect(moveCardInBoard(board, { cardId: 'card-1', fromLaneId: 'lane-a', toLaneId: 'lane-a', toIndex: 0 })).toBe(board);
});

test('moveLaneInBoard reorders lanes and preserves same-lane no-op', () => {
  const board = createBoard();
  expect(moveLaneInBoard(board, { fromLaneId: 'lane-a', toLaneId: 'lane-a' })).toBe(board);

  const next = moveLaneInBoard(board, { fromLaneId: 'lane-b', toLaneId: 'lane-a' });
  expect(next.lanes.map((lane) => lane.id)).toEqual(['lane-b', 'lane-a']);
});
