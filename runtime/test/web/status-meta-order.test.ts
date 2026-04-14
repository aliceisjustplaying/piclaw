import { expect, test } from 'bun:test';

import { orderAgentStatusHints } from '../../web/src/components/status.ts';

test('orderAgentStatusHints prioritizes ssh hints ahead of other status hints', () => {
  const ordered = orderAgentStatusHints([
    { key: 'bash', label: '/workspace', iconSvg: '<svg></svg>' },
    { key: 'read', label: 'notes/plan.md', iconSvg: '<svg></svg>' },
    { key: 'ssh', label: 'agent@example.com', iconSvg: '<svg></svg>' },
  ]);

  expect(ordered.map((hint) => hint.key)).toEqual(['ssh', 'bash', 'read']);
});
