import { expect, test } from 'bun:test';

import { configureMarked, resolveAppApiSurface } from '../../web/src/ui/app-shell-bootstrap.js';

test('configureMarked sets markdown defaults when marked instance is present', () => {
  let captured: Record<string, unknown> | null = null;
  configureMarked({
    setOptions: (options) => {
      captured = options;
    },
  });

  expect(captured).toEqual({
    breaks: true,
    gfm: true,
  });
});

test('resolveAppApiSurface applies optional fallbacks', async () => {
  const surface = resolveAppApiSurface({
    searchPosts: () => 'search',
    deletePost: () => 'delete',
    getAgents: () => 'agents',
    getAgentThought: () => 'thought',
    setAgentThoughtVisibility: () => 'set-thought',
    getAgentStatus: () => 'status',
    getWorkspaceFile: () => 'workspace',
    getThread: () => 'thread',
    getTimeline: () => 'timeline',
    sendAgentMessage: () => 'send',
    forkChatBranch: () => 'fork',
  });

  expect(typeof surface.getAgentContext).toBe('function');
  expect(typeof surface.getAutoresearchStatus).toBe('function');
  expect(typeof surface.getActiveChatAgents).toBe('function');
  await expect(surface.getAgentQueueState()).resolves.toEqual({ count: 0 });
  await expect(surface.stopAutoresearch()).resolves.toEqual({ status: 'ok' });
});
