import { expect, test } from 'bun:test';

import {
  DISPLAY_MODE_MEDIA_QUERIES,
  RETURN_TO_APP_DEDUPE_MS,
  RETURN_TO_APP_MIN_HIDDEN_MS,
  watchReturnToApp,
  watchStandaloneWebAppMode,
} from '../../web/src/ui/app-resume.js';

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

test('watchStandaloneWebAppMode calls back immediately and reacts to resume events', () => {
  const win = createEventTarget() as any;
  let standalone = false;
  const mediaTargets = new Map<string, any>();

  win.matchMedia = (query: string) => {
    if (!mediaTargets.has(query)) {
      const target = createEventTarget() as any;
      Object.defineProperty(target, 'matches', {
        get() {
          return query === '(display-mode: standalone)' ? standalone : false;
        },
      });
      mediaTargets.set(query, target);
    }
    return mediaTargets.get(query);
  };

  const values: boolean[] = [];
  const dispose = watchStandaloneWebAppMode((value: boolean) => values.push(value), {
    window: win,
    navigator: { standalone: false },
  });

  expect(DISPLAY_MODE_MEDIA_QUERIES.length).toBe(3);
  expect(values).toEqual([false]);

  standalone = true;
  win.dispatch('focus');
  mediaTargets.get('(display-mode: standalone)')?.dispatch('change');
  win.dispatch('pageshow');
  expect(values).toEqual([false, true, true, true]);

  dispose();
  expect(win.count('focus')).toBe(0);
  expect(win.count('pageshow')).toBe(0);
});

test('watchReturnToApp ignores visible-only focus/pageshow churn', () => {
  const win = createEventTarget() as any;
  const doc = createEventTarget() as any;
  doc.visibilityState = 'visible';

  let calls = 0;
  const dispose = watchReturnToApp(() => {
    calls += 1;
  }, {
    window: win,
    document: doc,
  });

  win.dispatch('focus');
  win.dispatch('pageshow');
  doc.dispatch('visibilitychange');
  expect(calls).toBe(0);

  dispose();
  expect(win.count('focus')).toBe(0);
  expect(win.count('pageshow')).toBe(0);
  expect(doc.count('visibilitychange')).toBe(0);
});

test('watchReturnToApp fires once after a real hidden-to-visible return and dedupes the burst', () => {
  const win = createEventTarget() as any;
  const doc = createEventTarget() as any;
  doc.visibilityState = 'visible';

  let currentTime = 1000;
  let calls = 0;
  const dispose = watchReturnToApp(() => {
    calls += 1;
  }, {
    window: win,
    document: doc,
    now: () => currentTime,
  });

  doc.visibilityState = 'hidden';
  doc.dispatch('visibilitychange');
  currentTime += RETURN_TO_APP_MIN_HIDDEN_MS - 1;
  doc.visibilityState = 'visible';
  doc.dispatch('visibilitychange');
  expect(calls).toBe(0);

  doc.visibilityState = 'hidden';
  doc.dispatch('visibilitychange');
  currentTime += RETURN_TO_APP_MIN_HIDDEN_MS + 25;
  doc.visibilityState = 'visible';
  win.dispatch('focus');
  win.dispatch('pageshow');
  doc.dispatch('visibilitychange');
  expect(calls).toBe(1);

  currentTime += RETURN_TO_APP_DEDUPE_MS - 1;
  win.dispatch('pageshow');
  doc.dispatch('visibilitychange');
  expect(calls).toBe(1);

  currentTime += 2;
  doc.visibilityState = 'hidden';
  doc.dispatch('visibilitychange');
  currentTime += RETURN_TO_APP_MIN_HIDDEN_MS + 25;
  doc.visibilityState = 'visible';
  doc.dispatch('visibilitychange');
  expect(calls).toBe(2);

  dispose();
  expect(win.count('focus')).toBe(0);
  expect(win.count('pageshow')).toBe(0);
  expect(doc.count('visibilitychange')).toBe(0);
});
