import { expect, test } from 'bun:test';

import { composeMainAppShellOptions } from '../../web/src/ui/app-main-shell-composition.js';

test('composeMainAppShellOptions composes pane-popout and main-shell payloads from grouped state', () => {
  const result = composeMainAppShellOptions({
    routing: {
      branchLoaderMode: false,
      panePopoutMode: true,
      branchLoaderState: { status: 'idle' },
    },
    paneRuntime: {
      hidePanePopoutControls: false,
      panePopoutHasMenuActions: true,
      panePopoutTitle: 'Terminal',
      editorContainerRef: { current: null },
      editorInstanceRef: { current: { getContent: () => 'abc' } },
      hasDockPanes: true,
      dockVisible: true,
      toggleDock: () => {},
      showEditorPaneContainer: true,
      zenMode: false,
      toggleZenMode: () => {},
      dockContainerRef: { current: null },
    },
    splitters: {
      handleSplitterMouseDown: () => {},
    },
    branchPaneActions: {
      closeRenameCurrentBranchForm: () => {},
      handleRenameCurrentBranch: () => {},
      handleBranchPickerChange: () => {},
      toggleWorkspace: () => {},
    },
    timelineViewActions: {
      handleHashtagClick: () => {},
      isMainTimelineView: true,
    },
    composeReferenceActions: {
      addFileRef: () => {},
      removeFileRef: () => {},
    },
    sidepanelActions: {
      handleExtensionPanelAction: () => {},
    },
    shellState: {
      appShellRef: { current: null },
      workspaceOpen: true,
      editorOpen: true,
      chatOnlyMode: false,
      isRenameBranchFormOpen: false,
      renameBranchNameDraft: '',
      renameBranchNameInputRef: { current: null },
      setRenameBranchNameDraft: () => {},
      renameBranchDraftState: { canSubmit: true },
      isRenamingBranch: false,
      isWebAppMode: false,
      TERMINAL_TAB_PATH: '/terminal',
      isIOSDevice: () => false,
      currentBranchRecord: null,
      currentChatJid: 'web:default',
      currentChatBranches: [],
      formatBranchPickerLabel: () => 'label',
      activeSearchScopeLabel: 'Current branch',
      posts: [],
      hasMore: false,
      loadMore: () => {},
      timelineRef: { current: null },
      agents: {},
      userProfile: { name: 'You' },
      removingPostIds: new Set(),
      extensionStatusPanels: new Map(),
      pendingExtensionPanelActions: new Set(),
      searchOpen: false,
      followupQueueItems: [],
      viewStateRef: { current: {} },
      loadPosts: () => {},
      scrollToBottom: () => {},
      searchScope: 'current',
      tabStripTabs: [],
      tabStripActiveId: null,
      handleTabActivate: () => {},
      previewTabs: new Set(),
      handleTabTogglePreview: () => {},
      panePopoutPath: '/terminal',
    },
    agentState: {
      pendingRequest: null,
      setPendingRequest: () => {},
      pendingRequestRef: { current: null },
    },
    composeState: {
      fileRefs: [],
      messageRefs: [],
      followupQueueCount: 0,
    },
    modelState: {
      activeChatAgents: [],
      connectionStatus: 'connected',
      activeModel: null,
      activeModelUsage: null,
      activeThinkingLevel: null,
      supportsThinking: false,
      contextUsage: null,
      notificationsEnabled: false,
      notificationPermission: 'default',
      setActiveModel: () => {},
      applyModelState: () => {},
    },
  });

  expect(result.branchLoaderMode).toBe(false);
  expect(result.panePopoutMode).toBe(true);
  expect(result.panePopoutOptions.panePopoutTitle).toBe('Terminal');
  expect(result.mainShellOptions.workspaceOpen).toBe(true);
  expect(result.mainShellOptions.connectionStatus).toBe('connected');
  expect(typeof result.mainShellOptions.toggleWorkspace).toBe('function');
});
