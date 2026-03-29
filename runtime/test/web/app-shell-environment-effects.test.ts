import { afterEach, expect, test } from 'bun:test';

import { persistBtwSession } from '../../web/src/ui/app-shell-environment-effects.js';
import { BTW_SESSION_KEY } from '../../web/src/ui/app-shell-state.js';

const originalWindow = (globalThis as any).window;

afterEach(() => {
  (globalThis as any).window = originalWindow;
});

test('persistBtwSession stores normalized side-session payload', () => {
  const writes = new Map<string, string>();
  (globalThis as any).window = {
    localStorage: {
      setItem: (key: string, value: string) => {
        writes.set(key, value);
      },
    },
  };

  persistBtwSession({
    question: 'Q',
    answer: 'A',
    thinking: 'T',
    error: null,
    status: 'running',
  });

  expect(writes.has(BTW_SESSION_KEY)).toBe(true);
  const parsed = JSON.parse(writes.get(BTW_SESSION_KEY) || '{}');
  expect(parsed).toEqual({
    question: 'Q',
    answer: 'A',
    thinking: 'T',
    error: null,
    status: 'running',
  });
});

test('persistBtwSession clears storage when no session exists', () => {
  const writes = new Map<string, string>();
  (globalThis as any).window = {
    localStorage: {
      setItem: (key: string, value: string) => {
        writes.set(key, value);
      },
    },
  };

  persistBtwSession(null);
  expect(writes.get(BTW_SESSION_KEY)).toBe('');
});
