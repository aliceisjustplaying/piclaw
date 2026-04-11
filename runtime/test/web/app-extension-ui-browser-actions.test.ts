import { expect, test } from 'bun:test';

import {
  MIN_EDITOR_POPOUT_VIEWPORT_HEIGHT,
  MIN_EDITOR_POPOUT_VIEWPORT_WIDTH,
  handleOpenWorkspaceFileBrowserRequest,
  hasEnoughViewportForEditorPopout,
  normalizeOpenWorkspaceFileRequest,
} from '../../web/src/ui/app-extension-ui-browser-actions.js';

test('normalizeOpenWorkspaceFileRequest accepts typed custom browser actions only', () => {
  expect(normalizeOpenWorkspaceFileRequest(null)).toBeNull();
  expect(normalizeOpenWorkspaceFileRequest({ kind: 'input' })).toBeNull();
  expect(normalizeOpenWorkspaceFileRequest({
    kind: 'custom',
    request_id: 'ui-1',
    chat_jid: 'web:test',
    options: { action: 'open_workspace_file', path: 'notes/index.md', target: 'popout', label: 'Notes' },
  })).toEqual({
    requestId: 'ui-1',
    chatJid: 'web:test',
    path: 'notes/index.md',
    label: 'Notes',
    target: 'popout',
  });
  expect(normalizeOpenWorkspaceFileRequest({
    kind: 'custom',
    request_id: 'ui-2',
    options: { action: 'open_workspace_file', path: '../etc/passwd' },
  })).toBeNull();
});

test('hasEnoughViewportForEditorPopout requires desktop-sized viewport', () => {
  expect(hasEnoughViewportForEditorPopout({
    windowWidth: MIN_EDITOR_POPOUT_VIEWPORT_WIDTH,
    windowHeight: MIN_EDITOR_POPOUT_VIEWPORT_HEIGHT,
    screenWidth: MIN_EDITOR_POPOUT_VIEWPORT_WIDTH,
    screenHeight: MIN_EDITOR_POPOUT_VIEWPORT_HEIGHT,
    isMobile: false,
  })).toBe(true);
  expect(hasEnoughViewportForEditorPopout({
    windowWidth: MIN_EDITOR_POPOUT_VIEWPORT_WIDTH - 1,
    windowHeight: MIN_EDITOR_POPOUT_VIEWPORT_HEIGHT,
    screenWidth: MIN_EDITOR_POPOUT_VIEWPORT_WIDTH,
    screenHeight: MIN_EDITOR_POPOUT_VIEWPORT_HEIGHT,
    isMobile: false,
  })).toBe(false);
  expect(hasEnoughViewportForEditorPopout({
    windowWidth: MIN_EDITOR_POPOUT_VIEWPORT_WIDTH,
    windowHeight: MIN_EDITOR_POPOUT_VIEWPORT_HEIGHT,
    isMobile: true,
  })).toBe(false);
});

test('handleOpenWorkspaceFileBrowserRequest blocks popouts when the viewport is too small', async () => {
  const responses: any[] = [];
  const toasts: any[] = [];
  const handled = await handleOpenWorkspaceFileBrowserRequest({
    detail: {
      payload: {
        kind: 'custom',
        request_id: 'ui-3',
        chat_jid: 'web:test',
        options: { action: 'open_workspace_file', path: 'notes/index.md', target: 'popout' },
      },
    },
  } as any, {
    currentChatJid: 'web:test',
    openEditor: () => {
      throw new Error('should not open editor');
    },
    popOutPane: async () => {
      throw new Error('should not pop out');
    },
    showIntentToast: (...args) => { toasts.push(args); },
    windowObject: {
      innerWidth: MIN_EDITOR_POPOUT_VIEWPORT_WIDTH - 100,
      innerHeight: MIN_EDITOR_POPOUT_VIEWPORT_HEIGHT,
      screen: { availWidth: 1920, availHeight: 1080 },
      navigator: { userAgent: 'Desktop', maxTouchPoints: 0 },
      matchMedia: () => ({ matches: false }),
    },
    respond: async (requestId, outcome, chatJid) => {
      responses.push({ requestId, outcome, chatJid });
    },
  });

  expect(handled).toBe(true);
  expect(toasts.length).toBe(1);
  expect(responses).toEqual([
    {
      requestId: 'ui-3',
      chatJid: 'web:test',
      outcome: expect.objectContaining({
        ok: false,
        opened: false,
        reason: 'insufficient_screen_space',
      }),
    },
  ]);
});

test('handleOpenWorkspaceFileBrowserRequest opens tabs and acknowledges success', async () => {
  const opened: string[] = [];
  const responses: any[] = [];
  const handled = await handleOpenWorkspaceFileBrowserRequest({
    detail: {
      payload: {
        kind: 'custom',
        request_id: 'ui-4',
        chat_jid: 'web:test',
        options: { action: 'open_workspace_file', path: 'notes/index.md', target: 'tab' },
      },
    },
  } as any, {
    currentChatJid: 'web:test',
    openEditor: (path) => { opened.push(path); },
    popOutPane: async () => false,
    respond: async (requestId, outcome, chatJid) => {
      responses.push({ requestId, outcome, chatJid });
    },
  });

  expect(handled).toBe(true);
  expect(opened).toEqual(['notes/index.md']);
  expect(responses).toEqual([
    {
      requestId: 'ui-4',
      chatJid: 'web:test',
      outcome: {
        ok: true,
        opened: true,
        target: 'tab',
        path: 'notes/index.md',
      },
    },
  ]);
});
