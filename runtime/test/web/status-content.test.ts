import { expect, test } from 'bun:test';

import { resolveAgentStatusContent } from '../../web/src/components/status.ts';

test('resolveAgentStatusContent preserves the last visible tool activity label', () => {
  expect(resolveAgentStatusContent({ type: 'tool_call', title: 'bash', last_activity: true })).toBe('Recent activity: Running: bash');
  expect(resolveAgentStatusContent({ type: 'tool_status', title: 'bash', status: 'Working...', last_activity: true })).toBe('Recent activity: bash: Working...');
});

test('resolveAgentStatusContent falls back to generic last-activity copy when no prior status is available', () => {
  expect(resolveAgentStatusContent({ type: 'active', last_activity: true })).toBe('Last activity just now');
});
