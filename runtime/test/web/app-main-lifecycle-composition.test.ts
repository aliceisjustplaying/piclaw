import { expect, test } from 'bun:test';

import {
  composeAgentStatusLifecycleOptions,
  composeChatRefreshLifecycleOptions,
  composeViewRefreshLifecycleOptions,
  composeRealtimeLifecycleOptions,
} from '../../web/src/ui/app-main-lifecycle-composition.js';

test('composeAgentStatusLifecycleOptions preserves status lifecycle payload and connection aliasing', () => {
  const setPendingRequest = () => {};
  const serverVersionContext = {
    currentAppAssetVersion: 'web-1',
    staleUiVersionRef: { current: null },
    staleUiReloadScheduledRef: { current: false },
    tabStoreHasUnsaved: () => true,
    isAgentRunningRef: { current: false },
    pendingRequestRef: { current: null },
    showIntentToast: () => {},
  };

  const result = composeAgentStatusLifecycleOptions({
    currentChatJid: 'chat-1',
    activeChatJidRef: { current: 'chat-1' },
    queueRefreshGenRef: { current: 0 },
    dismissedQueueRowIdsRef: { current: new Set() },
    getAgentQueueState: async () => [],
    setFollowupQueueItems: () => {},
    clearQueuedSteerStateIfStale: () => {},
    getAgentContext: async () => null,
    setContextUsage: () => {},
    getAutoresearchStatus: async () => null,
    setExtensionStatusPanels: () => {},
    setPendingExtensionPanelActions: () => {},
    getAgentStatus: async () => null,
    wasAgentActiveRef: { current: false },
    viewStateRef: { current: {} },
    refreshTimeline: async () => {},
    clearAgentRunState: () => {},
    agentStatusRef: { current: null },
    pendingRequestRef: { current: null },
    thoughtBufferRef: { current: '' },
    draftBufferRef: { current: '' },
    setAgentStatus: () => {},
    setAgentDraft: () => {},
    setAgentPlan: () => {},
    setAgentThought: () => {},
    setPendingRequest,
    setActiveTurn: () => {},
    noteAgentActivity: () => {},
    clearLastActivityFlag: () => {},
    isAgentRunningRef: { current: false },
    currentTurnIdRef: { current: null },
    silentRecoveryRef: { current: { inFlight: false, lastAttemptAt: 0, turnId: null } },
    silenceRefreshMs: 2500,
    lastAgentEventRef: { current: 0 },
    lastSilenceNoticeRef: { current: 0 },
    silenceWarningMs: 5000,
    silenceFinalizeMs: 10000,
    isCompactionStatus: () => false,
    serverVersionContext,
    setConnectionStatus: () => {},
    hasConnectedOnceRef: { current: true },
  });

  expect(result.currentChatJid).toBe('chat-1');
  expect(result.serverVersionContext).toBe(serverVersionContext);
  expect(result.setPendingRequest).toBe(setPendingRequest);
  expect(result.setPendingRequestForConnection).toBe(setPendingRequest);
  expect(result.silenceWarningMs).toBe(5000);
});

test('composeChatRefreshLifecycleOptions preserves bootstrap/model refresh dependencies', () => {
  const applyBranding = () => {};
  const result = composeChatRefreshLifecycleOptions({
    getAgents: async () => ({}),
    setAgents: () => {},
    setUserProfile: () => {},
    applyBranding,
    readStoredNumber: () => 320,
    sidebarWidthRef: { current: 0 },
    appShellRef: { current: null },
    currentChatJid: 'chat-1',
    currentRootChatJid: 'root-1',
    getAgentModels: async () => null,
    getActiveChatAgents: async () => [],
    getChatBranches: async () => [],
    activeChatJidRef: { current: 'chat-1' },
    setActiveChatAgents: () => {},
    setCurrentChatBranches: () => {},
    setActiveModel: () => {},
    setActiveThinkingLevel: () => {},
    setSupportsThinking: () => {},
    setActiveModelUsage: () => {},
    agentsRef: { current: {} },
    refreshQueueState: async () => {},
    refreshContextUsage: async () => {},
    refreshAutoresearchStatus: async () => {},
  });

  expect(result.applyBranding).toBe(applyBranding);
  expect(result.currentRootChatJid).toBe('root-1');
  expect(typeof result.readStoredNumber).toBe('function');
  expect(typeof result.refreshQueueState).toBe('function');
});

test('composeViewRefreshLifecycleOptions and composeRealtimeLifecycleOptions retain shell routing callbacks', () => {
  const scrollToMessage = async () => {};
  const refreshCurrentView = () => {};
  const updateAgentProfile = () => {};
  const updateUserProfile = () => {};
  const applyLiveGeneratedWidgetUpdate = () => {};
  const refreshActiveEditorFromWorkspace = async () => {};
  const preserveTimelineScrollTop = () => {};

  const viewResult = composeViewRefreshLifecycleOptions({
    currentChatJid: 'chat-1',
    currentRootChatJid: 'root-1',
    currentHashtag: '#tag',
    searchQuery: 'hello',
    searchScope: 'current',
    loadPosts: async () => {},
    searchPosts: async () => ({ results: [] }),
    setPosts: () => {},
    setHasMore: () => {},
    scrollToBottom: () => {},
    setExtensionStatusPanels: () => {},
    setPendingExtensionPanelActions: () => {},
    paneStateOwnerChatJidRef: { current: 'chat-1' },
    chatPaneStateByChatRef: { current: new Map() },
    snapshotCurrentChatPaneState: () => ({}) ,
    restoreChatPaneState: () => {},
    dismissedQueueRowIdsRef: { current: new Set() },
    refreshQueueState: async () => {},
    refreshAgentStatus: async () => null,
    refreshContextUsage: async () => {},
    viewStateRef: { current: {} },
    refreshTimeline: async () => {},
    refreshModelAndQueueState: () => {},
    setFloatingWidget: () => {},
    dismissedLiveWidgetKeysRef: { current: new Set() },
  });

  const realtimeResult = composeRealtimeLifecycleOptions({
    currentChatJid: 'chat-1',
    posts: [],
    scrollToMessage,
    handleConnectionStatusChange: () => {},
    loadPosts: async () => {},
    refreshCurrentView,
    updateAgentProfile,
    updateUserProfile,
    currentTurnIdRef: { current: null },
    activeChatJidRef: { current: 'chat-1' },
    pendingRequestRef: { current: null },
    draftBufferRef: { current: '' },
    thoughtBufferRef: { current: '' },
    steerQueuedTurnIdRef: { current: null },
    thoughtExpandedRef: { current: false },
    draftExpandedRef: { current: false },
    draftThrottleRef: { current: null },
    thoughtThrottleRef: { current: null },
    viewStateRef: { current: {} },
    followupQueueItemsRef: { current: [] },
    dismissedQueueRowIdsRef: { current: new Set() },
    scrollToBottomRef: { current: null },
    hasMoreRef: { current: false },
    loadMoreRef: { current: null },
    lastAgentResponseRef: { current: null },
    wasAgentActiveRef: { current: false },
    setActiveTurn: () => {},
    applyLiveGeneratedWidgetUpdate,
    setFloatingWidget: () => {},
    clearLastActivityFlag: () => {},
    handleUiVersionDrift: () => {},
    setAgentStatus: () => {},
    setAgentDraft: () => {},
    setAgentPlan: () => {},
    setAgentThought: () => {},
    setPendingRequest: () => {},
    clearAgentRunState: () => {},
    getAgentStatus: async () => null,
    noteAgentActivity: () => {},
    showLastActivity: () => {},
    refreshTimeline: async () => {},
    refreshModelAndQueueState: () => {},
    refreshActiveChatAgents: () => {},
    refreshCurrentChatBranches: () => {},
    notifyForFinalResponse: () => {},
    setContextUsage: () => {},
    refreshContextUsage: async () => {},
    refreshQueueState: async () => {},
    setFollowupQueueItems: () => {},
    clearQueuedSteerStateIfStale: () => {},
    setSteerQueuedTurnId: () => {},
    applyModelState: () => {},
    getAgentContext: async () => null,
    setExtensionStatusPanels: () => {},
    setPendingExtensionPanelActions: () => {},
    refreshActiveEditorFromWorkspace,
    showIntentToast: () => {},
    removeStalledPost: () => {},
    setPosts: () => {},
    preserveTimelineScrollTop,
    finalizeStalledResponse: () => {},
    connectionStatus: 'connected',
    agentStatus: null,
    refreshAgentStatus: async () => null,
    refreshAutoresearchStatus: async () => {},
  });

  expect(viewResult.currentHashtag).toBe('#tag');
  expect(realtimeResult.scrollToMessage).toBe(scrollToMessage);
  expect(realtimeResult.refreshCurrentView).toBe(refreshCurrentView);
  expect(realtimeResult.updateAgentProfile).toBe(updateAgentProfile);
  expect(realtimeResult.updateUserProfile).toBe(updateUserProfile);
  expect(realtimeResult.applyLiveGeneratedWidgetUpdate).toBe(applyLiveGeneratedWidgetUpdate);
  expect(realtimeResult.refreshActiveEditorFromWorkspace).toBe(refreshActiveEditorFromWorkspace);
  expect(realtimeResult.preserveTimelineScrollTop).toBe(preserveTimelineScrollTop);
});
