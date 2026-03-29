import { expect, test } from 'bun:test';

import {
  createBranchLoaderState,
  resolveCurrentBranchRecord,
} from '../../web/src/ui/app-main-surface-state.js';

test('resolveCurrentBranchRecord prefers current branch records over active chat fallbacks', () => {
  expect(resolveCurrentBranchRecord({
    activeChatAgents: [{ chat_jid: 'chat-1', source: 'active' }],
    currentChatBranches: [{ chat_jid: 'chat-1', source: 'branch' }],
    currentChatJid: 'chat-1',
  })).toEqual({ chat_jid: 'chat-1', source: 'branch' });
});

test('resolveCurrentBranchRecord falls back to active chat records or null', () => {
  expect(resolveCurrentBranchRecord({
    activeChatAgents: [{ chat_jid: 'chat-2', source: 'active' }],
    currentChatBranches: [],
    currentChatJid: 'chat-2',
  })).toEqual({ chat_jid: 'chat-2', source: 'active' });

  expect(resolveCurrentBranchRecord({
    activeChatAgents: [],
    currentChatBranches: [],
    currentChatJid: 'missing',
  })).toBeNull();
});

test('createBranchLoaderState preserves running and idle defaults', () => {
  expect(createBranchLoaderState(true)).toEqual({
    status: 'running',
    message: 'Preparing a new chat branch…',
  });
  expect(createBranchLoaderState(false)).toEqual({
    status: 'idle',
    message: '',
  });
});
