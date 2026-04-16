// @ts-nocheck

import { isStandaloneWebAppMode } from './chat-window.js';

export const DISPLAY_MODE_MEDIA_QUERIES = [
  '(display-mode: standalone)',
  '(display-mode: minimal-ui)',
  '(display-mode: fullscreen)',
];

export const RETURN_TO_APP_MIN_HIDDEN_MS = 150;
export const RETURN_TO_APP_DEDUPE_MS = 1000;

/**
 * Watch standalone webapp mode changes and call back immediately plus on relevant resume/window events.
 */
export function watchStandaloneWebAppMode(onChange, runtime = {}) {
  const win = runtime.window ?? (typeof window !== 'undefined' ? window : null);
  const nav = runtime.navigator ?? (typeof navigator !== 'undefined' ? navigator : null);
  if (!win || typeof onChange !== 'function') {
    return () => {};
  }

  const refresh = () => {
    onChange(isStandaloneWebAppMode({ window: win, navigator: nav }));
  };

  refresh();

  const mediaQueries = DISPLAY_MODE_MEDIA_QUERIES
    .map((query) => {
      try {
        return win.matchMedia?.(query) ?? null;
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  const removers = mediaQueries.map((mql) => {
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', refresh);
      return () => mql.removeEventListener('change', refresh);
    }
    if (typeof mql.addListener === 'function') {
      mql.addListener(refresh);
      return () => mql.removeListener(refresh);
    }
    return () => {};
  });

  win.addEventListener?.('focus', refresh);
  win.addEventListener?.('pageshow', refresh);

  return () => {
    for (const remove of removers) remove();
    win.removeEventListener?.('focus', refresh);
    win.removeEventListener?.('pageshow', refresh);
  };
}

/**
 * Watch for return-to-app events and invoke the callback only after a real hidden→visible transition.
 *
 * iOS Safari's share sheet can emit focus/pageshow churn while the tab never truly backgrounds.
 * Requiring a prior hidden interval and deduping the visible burst avoids spurious full-view refreshes.
 */
export function watchReturnToApp(onReturn, runtime = {}) {
  const win = runtime.window ?? (typeof window !== 'undefined' ? window : null);
  const doc = runtime.document ?? (typeof document !== 'undefined' ? document : null);
  const now = typeof runtime.now === 'function' ? runtime.now : () => Date.now();
  const minHiddenMs = Number.isFinite(runtime.minHiddenMs)
    ? Math.max(0, Number(runtime.minHiddenMs))
    : RETURN_TO_APP_MIN_HIDDEN_MS;
  const dedupeMs = Number.isFinite(runtime.dedupeMs)
    ? Math.max(0, Number(runtime.dedupeMs))
    : RETURN_TO_APP_DEDUPE_MS;
  if (!win || !doc || typeof onReturn !== 'function') {
    return () => {};
  }

  let hiddenSince = doc.visibilityState && doc.visibilityState !== 'visible'
    ? now()
    : null;
  let pendingReturn = hiddenSince !== null;
  let lastReturnAt = -Infinity;

  const markHidden = () => {
    pendingReturn = true;
    if (hiddenSince === null) {
      hiddenSince = now();
    }
  };

  const maybeReturnToApp = () => {
    if (doc.visibilityState && doc.visibilityState !== 'visible') {
      markHidden();
      return;
    }
    if (!pendingReturn) return;

    const currentTime = now();
    const hiddenDuration = hiddenSince === null ? minHiddenMs : Math.max(0, currentTime - hiddenSince);
    hiddenSince = null;
    pendingReturn = false;

    if (hiddenDuration < minHiddenMs) return;
    if (currentTime - lastReturnAt < dedupeMs) return;

    lastReturnAt = currentTime;
    onReturn();
  };

  const handleVisibilityChange = () => {
    if (doc.visibilityState && doc.visibilityState !== 'visible') {
      markHidden();
      return;
    }
    maybeReturnToApp();
  };

  win.addEventListener?.('focus', maybeReturnToApp);
  win.addEventListener?.('pageshow', maybeReturnToApp);
  doc.addEventListener?.('visibilitychange', handleVisibilityChange);

  return () => {
    win.removeEventListener?.('focus', maybeReturnToApp);
    win.removeEventListener?.('pageshow', maybeReturnToApp);
    doc.removeEventListener?.('visibilitychange', handleVisibilityChange);
  };
}
