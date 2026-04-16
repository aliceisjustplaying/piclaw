import { expect, test } from 'bun:test';

import { bindSseWakeLifecycle } from '../../web/src/ui/use-sse-connection.js';

function createEventTarget() {
  const listeners = new Map<string, Set<(...args: any[]) => void>>();
  return {
    addEventListener(type: string, listener: (...args: any[]) => void) {
      if (!listeners.has(type)) listeners.set(type, new Set());
      listeners.get(type)!.add(listener);
    },
    removeEventListener(type: string, listener: (...args: any[]) => void) {
      listeners.get(type)?.delete(listener);
    },
    dispatch(type: string) {
      for (const listener of listeners.get(type) || []) {
        listener({ type });
      }
    },
    count(type: string) {
      return listeners.get(type)?.size || 0;
    },
  };
}

test('bindSseWakeLifecycle reconnects on focus but does not wake on visible-only churn when focus reconnect is enabled', () => {
  const win = createEventTarget() as any;
  const doc = createEventTarget() as any;
  doc.visibilityState = 'visible';

  let reconnects = 0;
  let wakes = 0;
  const dispose = bindSseWakeLifecycle({
    sse: {
      reconnectIfNeeded() {
        reconnects += 1;
      },
    },
    onWake() {
      wakes += 1;
    },
  }, {
    window: win,
    document: doc,
    useFocusReconnect: true,
  });

  win.dispatch('focus');
  win.dispatch('pageshow');
  doc.dispatch('visibilitychange');

  expect(reconnects).toBe(1);
  expect(wakes).toBe(0);

  dispose();
  expect(win.count('focus')).toBe(0);
  expect(win.count('pageshow')).toBe(0);
  expect(doc.count('visibilitychange')).toBe(0);
});

test('bindSseWakeLifecycle reconnects and wakes once after a real return without raw focus reconnect on iOS-style paths', () => {
  const win = createEventTarget() as any;
  const doc = createEventTarget() as any;
  doc.visibilityState = 'visible';

  let now = 1000;
  let reconnects = 0;
  let wakes = 0;
  const dispose = bindSseWakeLifecycle({
    sse: {
      reconnectIfNeeded() {
        reconnects += 1;
      },
    },
    onWake() {
      wakes += 1;
    },
  }, {
    window: win,
    document: doc,
    now: () => now,
    minHiddenMs: 150,
    dedupeMs: 1000,
    useFocusReconnect: false,
  });

  doc.visibilityState = 'hidden';
  doc.dispatch('visibilitychange');
  now += 175;
  doc.visibilityState = 'visible';
  win.dispatch('pageshow');
  doc.dispatch('visibilitychange');

  expect(reconnects).toBe(1);
  expect(wakes).toBe(1);

  dispose();
});
