import { expect, test } from 'bun:test';

import {
  persistContextUsage,
  normalizeContextUsage,
  refreshAutoresearchStatusForChat,
  refreshContextUsageForChat,
  refreshCurrentView,
  refreshModelAndQueueState,
  refreshQueueStateForChat,
  restoreContextUsage,
} from '../../web/src/ui/app-status-refresh-orchestration.js';

type QueueRow = { row_id: string | number; content?: string };

function contextSnapshot(overrides: Record<string, unknown> = {}) {
  return {
    backend: 'claude-agent-sdk',
    source: 'claude-native-context',
    tokens: 8000,
    contextWindow: 128000,
    percent: 6.25,
    model: 'claude-opus-4-6[1m]',
    updatedAt: '2026-05-03T00:00:00.000Z',
    sessionId: 'session-1',
    ...overrides,
  };
}

test('normalizeContextUsage rejects impossible cached context snapshots', () => {
  expect(normalizeContextUsage(contextSnapshot({ tokens: 1_211_529, contextWindow: 1_000_000, percent: 121.1529 }))).toBeNull();
  expect(normalizeContextUsage({ tokens: 72, contextWindow: 1_000_000, percent: 0.0072 })).toBeNull();
});

test('restoreContextUsage clears legacy untyped browser cache entries', () => {
  const storage = new Map<string, string>();
  (globalThis as any).window = {
    localStorage: {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => { storage.set(key, value); },
      removeItem: (key: string) => { storage.delete(key); },
    },
  };

  storage.set('piclaw:ctx:chat:alpha', JSON.stringify({ tokens: 72, contextWindow: 1_000_000, percent: 0.0072 }));

  expect(restoreContextUsage('chat:alpha')).toBeNull();
  expect(storage.has('piclaw:ctx:chat:alpha')).toBe(false);

  persistContextUsage('chat:alpha', contextSnapshot());
  expect(restoreContextUsage('chat:alpha')).toEqual(contextSnapshot());
  delete (globalThis as any).window;
});

test('refreshQueueStateForChat keeps only newest non-dismissed queue rows', async () => {
  const queueRefreshGenRef = { current: 0 };
  const activeChatJidRef = { current: 'chat:alpha' };
  const dismissedQueueRowIdsRef = { current: new Set<string | number>(['row-dismissed']) };
  const clearCounts: number[] = [];

  let queueRows: QueueRow[] = [{ row_id: 'row-old' }];
  refreshQueueStateForChat<QueueRow>({
    currentChatJid: 'chat:alpha',
    queueRefreshGenRef,
    activeChatJidRef,
    dismissedQueueRowIdsRef,
    getAgentQueueState: async () => ({
      items: [
        { row_id: 'row-dismissed', content: 'hidden' },
        { row_id: 'row-visible', content: 'keep' },
      ],
    }),
    setFollowupQueueItems: (next) => {
      queueRows = typeof next === 'function' ? next(queueRows) : next;
    },
    clearQueuedSteerStateIfStale: (remainingQueueCount) => {
      clearCounts.push(remainingQueueCount);
    },
  });

  await Promise.resolve();

  expect(queueRows).toEqual([{ row_id: 'row-visible', content: 'keep' }]);
  expect(clearCounts).toEqual([]);
});

test('refreshQueueStateForChat drops stale refresh generations and clears queue on empty payload', async () => {
  const queueRefreshGenRef = { current: 0 };
  const activeChatJidRef = { current: 'chat:alpha' };
  const dismissedQueueRowIdsRef = { current: new Set<string | number>(['row-dismissed']) };
  const clearCounts: number[] = [];

  let resolvePayload: ((value: { items: QueueRow[] }) => void) | null = null;
  let queueRows: QueueRow[] = [{ row_id: 'row-old' }];

  refreshQueueStateForChat<QueueRow>({
    currentChatJid: 'chat:alpha',
    queueRefreshGenRef,
    activeChatJidRef,
    dismissedQueueRowIdsRef,
    getAgentQueueState: () => new Promise((resolve) => {
      resolvePayload = resolve;
    }),
    setFollowupQueueItems: (next) => {
      queueRows = typeof next === 'function' ? next(queueRows) : next;
    },
    clearQueuedSteerStateIfStale: (remainingQueueCount) => {
      clearCounts.push(remainingQueueCount);
    },
  });

  // Simulate a newer refresh issued before this request resolves.
  queueRefreshGenRef.current += 1;
  resolvePayload?.({ items: [{ row_id: 'row-new' }] });
  await Promise.resolve();
  expect(queueRows).toEqual([{ row_id: 'row-old' }]);

  // Now run a non-stale refresh with no rows.
  refreshQueueStateForChat<QueueRow>({
    currentChatJid: 'chat:alpha',
    queueRefreshGenRef,
    activeChatJidRef,
    dismissedQueueRowIdsRef,
    getAgentQueueState: async () => ({ items: [] }),
    setFollowupQueueItems: (next) => {
      queueRows = typeof next === 'function' ? next(queueRows) : next;
    },
    clearQueuedSteerStateIfStale: (remainingQueueCount) => {
      clearCounts.push(remainingQueueCount);
    },
  });

  await Promise.resolve();

  expect(queueRows).toEqual([]);
  expect(dismissedQueueRowIdsRef.current.size).toBe(0);
  expect(clearCounts[clearCounts.length - 1]).toBe(0);
});

test('refreshQueueStateForChat preserves optimistic rows when the backend only returns dismissed ids', async () => {
  const queueRefreshGenRef = { current: 0 };
  const activeChatJidRef = { current: 'chat:alpha' };
  const dismissedQueueRowIdsRef = { current: new Set<string | number>([-1]) };
  const clearCounts: number[] = [];
  let queueRows: QueueRow[] = [{ row_id: -1, content: 'queued now' }];

  refreshQueueStateForChat<any>({
    currentChatJid: 'chat:alpha',
    queueRefreshGenRef,
    activeChatJidRef,
    dismissedQueueRowIdsRef,
    getAgentQueueState: async () => ({ items: [{ row_id: -1, content: 'queued now' }] }),
    setFollowupQueueItems: (next) => {
      queueRows = typeof next === 'function' ? next(queueRows) : next;
    },
    clearQueuedSteerStateIfStale: (remainingQueueCount) => {
      clearCounts.push(remainingQueueCount);
    },
  });

  await Promise.resolve();

  expect(queueRows).toEqual([{ row_id: -1, content: 'queued now' }]);
  expect(Array.from(dismissedQueueRowIdsRef.current)).toEqual([-1]);
  expect(clearCounts).toEqual([]);
});

test('refreshContextUsageForChat ignores stale chat responses', async () => {
  const activeChatJidRef = { current: 'chat:alpha' };
  let contextState: any = null;

  const pending = refreshContextUsageForChat({
    currentChatJid: 'chat:alpha',
    activeChatJidRef,
    getAgentContext: async () => ({ usage: 42 }),
    setContextUsage: (next) => {
      contextState = typeof next === 'function' ? next(contextState) : next;
    },
  });

  activeChatJidRef.current = 'chat:beta';
  await pending;

  expect(contextState).toBeNull();
});

test('refreshContextUsageForChat clears cached state with null-percent API response', async () => {
  const activeChatJidRef = { current: 'chat:alpha' };
  let contextState: any = contextSnapshot({ tokens: 5000, percent: 3.9 });

  await refreshContextUsageForChat({
    currentChatJid: 'chat:alpha',
    activeChatJidRef,
    getAgentContext: async () => ({ tokens: null, contextWindow: null, percent: null }),
    setContextUsage: (next) => {
      contextState = typeof next === 'function' ? next(contextState) : next;
    },
  });

  expect(contextState).toBeNull();
});

test('refreshContextUsageForChat updates state when API returns real data', async () => {
  const activeChatJidRef = { current: 'chat:alpha' };
  let contextState: any = null;

  await refreshContextUsageForChat({
    currentChatJid: 'chat:alpha',
    activeChatJidRef,
    getAgentContext: async () => contextSnapshot(),
    setContextUsage: (next) => {
      contextState = typeof next === 'function' ? next(contextState) : next;
    },
  });

  expect(contextState).toEqual(contextSnapshot());
});

test('refreshAutoresearchStatusForChat updates panels and clears autoresearch pending actions', async () => {
  const activeChatJidRef = { current: 'chat:alpha' };
  let panelState = new Map<string, any>();
  let pendingActions = new Set<string>(['autoresearch:stop', 'custom:keep']);

  await refreshAutoresearchStatusForChat({
    currentChatJid: 'chat:alpha',
    activeChatJidRef,
    getAutoresearchStatus: async () => ({
      key: 'autoresearch',
      content: [{ type: 'status_panel', panel: { state: 'running', title: 'Auto' } }],
    }),
    setExtensionStatusPanels: (next) => {
      panelState = typeof next === 'function' ? next(panelState) : next;
    },
    setPendingExtensionPanelActions: (next) => {
      pendingActions = typeof next === 'function' ? next(pendingActions) : next;
    },
  });

  expect(panelState.get('autoresearch')).toEqual({ state: 'running', title: 'Auto' });
  expect(Array.from(pendingActions)).toEqual(['custom:keep']);
});

test('refreshCurrentView refreshes timeline only on main view and always refreshes model/queue bundle', () => {
  let timelineCalls = 0;
  let bundleCalls = 0;

  refreshCurrentView({
    viewStateRef: { current: { currentHashtag: null, searchQuery: null, searchOpen: false } },
    refreshTimeline: () => { timelineCalls += 1; },
    refreshModelAndQueueState: () => { bundleCalls += 1; },
  });

  refreshCurrentView({
    viewStateRef: { current: { currentHashtag: 'tag', searchQuery: null, searchOpen: false } },
    refreshTimeline: () => { timelineCalls += 1; },
    refreshModelAndQueueState: () => { bundleCalls += 1; },
  });

  expect(timelineCalls).toBe(1);
  expect(bundleCalls).toBe(2);

  const calls: string[] = [];
  refreshModelAndQueueState({
    refreshModelState: () => calls.push('model'),
    refreshActiveChatAgents: () => calls.push('active'),
    refreshCurrentChatBranches: () => calls.push('branches'),
    refreshQueueState: () => calls.push('queue'),
    refreshContextUsage: () => calls.push('context'),
    refreshAutoresearchStatus: () => calls.push('autoresearch'),
  });
  expect(calls).toEqual(['model', 'active', 'branches', 'queue', 'context', 'autoresearch']);
});
