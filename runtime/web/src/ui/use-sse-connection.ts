// @ts-nocheck
import { useEffect, useRef } from '../vendor/preact-htm.js';
import { SSEClient } from '../api.js';
import { isIOSDevice } from './app-helpers.js';
import { watchReturnToApp } from './app-resume.js';

export function bindSseWakeLifecycle({ sse, onWake }, runtime = {}) {
  const win = runtime.window ?? (typeof window !== 'undefined' ? window : null);
  const doc = runtime.document ?? (typeof document !== 'undefined' ? document : null);
  if (!win || !doc || !sse) {
    return () => {};
  }

  const stopWatchingReturn = watchReturnToApp(() => {
    sse.reconnectIfNeeded();
    onWake?.();
  }, {
    window: win,
    document: doc,
    ...(typeof runtime.now === 'function' ? { now: runtime.now } : {}),
    ...(Number.isFinite(runtime.minHiddenMs) ? { minHiddenMs: runtime.minHiddenMs } : {}),
    ...(Number.isFinite(runtime.dedupeMs) ? { dedupeMs: runtime.dedupeMs } : {}),
  });

  const shouldUseFocusReconnect = typeof runtime.useFocusReconnect === 'boolean'
    ? runtime.useFocusReconnect
    : !isIOSDevice();

  const handleWindowFocus = () => {
    if (!shouldUseFocusReconnect) return;
    sse.reconnectIfNeeded();
  };

  if (shouldUseFocusReconnect) {
    win.addEventListener('focus', handleWindowFocus);
  }

  return () => {
    if (shouldUseFocusReconnect) {
      win.removeEventListener('focus', handleWindowFocus);
    }
    stopWatchingReturn();
  };
}

/**
 * Manages the SSE connection lifecycle.
 *
 * All callbacks are accessed via refs so the EventSource is created exactly
 * once and never torn down due to callback identity changes in the parent
 * component.  This breaks the re-render cascade that previously caused an
 * infinite SSE reconnect loop when queue/filter state changed.
 */
export function useSseConnection({ handleSseEvent, handleConnectionStatusChange, loadPosts, onWake, chatJid }) {
  const sseEventRef = useRef(handleSseEvent);
  sseEventRef.current = handleSseEvent;

  const statusChangeRef = useRef(handleConnectionStatusChange);
  statusChangeRef.current = handleConnectionStatusChange;

  const loadPostsRef = useRef(loadPosts);
  loadPostsRef.current = loadPosts;

  const onWakeRef = useRef(onWake);
  onWakeRef.current = onWake;

  useEffect(() => {
    const sse = new SSEClient(
      (type, data) => sseEventRef.current(type, data),
      (status) => statusChangeRef.current(status),
      { chatJid },
    );
    sse.connect();

    const disposeWakeLifecycle = bindSseWakeLifecycle({
      sse,
      onWake: () => onWakeRef.current?.(),
    });

    return () => {
      disposeWakeLifecycle();
      sse.disconnect();
    };
  }, [chatJid]);
}
