// @ts-nocheck
// Main authenticated web UI entry point.
import { html, render, useState, useEffect, useRef, useMemo } from './vendor/preact-htm.js';
import { paneRegistry, TERMINAL_TAB_PATH, VNC_TAB_PREFIX, tabStore } from './panes/index.js';
import { getLocalStorageBoolean, getLocalStorageNumber } from './utils/storage.js';
import { useNotifications } from './ui/use-notifications.js';
import { useTimeline } from './ui/use-timeline.js';
import { dedupePosts } from './ui/timeline-utils.js';
import { useAgentState } from './ui/use-agent-state.js';
import { useSplitters } from './ui/use-splitters.js';
import { useEditorState } from './ui/use-editor-state.js';
import {
    LAST_ACTIVITY_TTL_MS,
    SILENCE_FINALIZE_MS,
    SILENCE_REFRESH_MS,
    SILENCE_WARNING_MS,
    isIOSDevice,
} from './ui/app-helpers.js';
import {
    isStandaloneWebAppMode,
} from './ui/chat-window.js';
import { isCompactionStatus } from './ui/status-duration.js';
import {
    useChatRefreshLifecycle,
} from './ui/app-chat-refresh-lifecycle.js';
import {
    useSidepanelOrchestration,
} from './ui/app-sidepanel-orchestration.js';
import {
    useComposeReferenceOrchestration,
} from './ui/app-compose-reference-orchestration.js';
import {
    useViewRefreshLifecycle,
} from './ui/app-view-refresh-lifecycle.js';
import {
    useRealtimeLifecycleOrchestration,
} from './ui/app-realtime-lifecycle-orchestration.js';
import {
    useAgentStatusLifecycle,
} from './ui/app-agent-status-lifecycle.js';
import {
    useTimelineViewActions,
} from './ui/app-timeline-view-actions.js';
import {
    useAgentActivityOrchestration,
} from './ui/app-agent-activity-orchestration.js';
import {
    useTimelineScrollOrchestration,
} from './ui/app-timeline-scroll-orchestration.js';
import {
    useAppLocationNavigation,
} from './ui/app-location-navigation.js';
import {
    renderResolvedAppShell,
} from './ui/app-shell-render-router.js';
import { formatBranchPickerLabel, getBranchHandleDraftState } from './ui/branch-lifecycle.js';
import {
    getCurrentAppAssetVersion,
    getRenameBranchFormLock,
    describeSearchScope,
    loadStoredBtwSession,
    readAppLocationModes,
} from './ui/app-shell-state.js';
import {
    useBranchPaneLifecycle,
} from './ui/app-branch-pane-lifecycle-actions.js';
import {
    useChatPaneRuntimeOrchestration,
} from './ui/app-chat-pane-runtime-orchestration.js';
import {
    appApi,
    initializeAppShellRuntime,
} from './ui/app-shell-bootstrap.js';
import {
    usePaneRuntimeOrchestration,
} from './ui/app-pane-runtime-orchestration.js';
import {
    useAppShellEnvironmentEffects,
} from './ui/app-shell-environment-effects.js';
import {
    composeMainAppShellOptions,
} from './ui/app-main-shell-composition.js';
import {
    useFollowupActionsOrchestration,
} from './ui/app-followup-actions-orchestration.js';
import {
    useAgentRecoveryCallbacks,
    useViewStateRefSync,
} from './ui/app-runtime-callbacks.js';
import {
    useAppShellShortcuts,
} from './ui/app-shell-shortcuts.js';

const CURRENT_APP_ASSET_VERSION = getCurrentAppAssetVersion();

initializeAppShellRuntime();

const {
    searchPosts,
    deletePost,
    getAgents,
    getAgentThought,
    setAgentThoughtVisibility,
    getAgentStatus,
    getAgentContext,
    getAutoresearchStatus,
    stopAutoresearch,
    dismissAutoresearch,
    getAgentModels,
    getActiveChatAgents,
    getChatBranches,
    renameChatBranch,
    pruneChatBranch,
    restoreChatBranch,
    getAgentQueueState,
    steerAgentQueueItem,
    removeAgentQueueItem,
    streamSidePrompt,
    getWorkspaceFile,
    getThread,
    getTimeline,
    sendAgentMessage,
    forkChatBranch,
} = appApi;

function MainApp({ locationParams, navigate }) {
    const {
        currentChatJid,
        chatOnlyMode,
        panePopoutMode,
        panePopoutPath,
        panePopoutLabel,
        branchLoaderMode,
        branchLoaderSourceChatJid,
    } = useMemo(() => readAppLocationModes(locationParams), [locationParams]);

    const [connectionStatus, setConnectionStatus] = useState('disconnected');
    const [isWebAppMode, setIsWebAppMode] = useState(() => isStandaloneWebAppMode());
    const [currentHashtag, setCurrentHashtag] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchScope, setSearchScope] = useState('current');
    const [fileRefs, setFileRefs] = useState([]);
    const [messageRefs, setMessageRefs] = useState([]);
    const [intentToast, setIntentToast] = useState(null);
    const {
        agentStatus,
        setAgentStatus,
        agentDraft,
        setAgentDraft,
        agentPlan,
        setAgentPlan,
        agentThought,
        setAgentThought,
        pendingRequest,
        setPendingRequest,
        currentTurnId,
        setCurrentTurnId,
        steerQueuedTurnId,
        setSteerQueuedTurnId,
        lastAgentEventRef,
        lastSilenceNoticeRef,
        isAgentRunningRef,
        draftBufferRef,
        thoughtBufferRef,
        pendingRequestRef,
        stalledPostIdRef,
        currentTurnIdRef,
        steerQueuedTurnIdRef,
        thoughtExpandedRef,
        draftExpandedRef,
    } = useAgentState();
    const [agents, setAgents] = useState({});
    const [activeModel, setActiveModel] = useState(null);
    const [activeThinkingLevel, setActiveThinkingLevel] = useState(null);
    const [supportsThinking, setSupportsThinking] = useState(false);
    const [activeModelUsage, setActiveModelUsage] = useState(null);
    const [activeChatAgents, setActiveChatAgents] = useState([]);
    const [currentChatBranches, setCurrentChatBranches] = useState([]);
    const [contextUsage, setContextUsage] = useState(null);
    const [extensionStatusPanels, setExtensionStatusPanels] = useState(() => new Map());
    const [pendingExtensionPanelActions, setPendingExtensionPanelActions] = useState(() => new Set());
    const [followupQueueItems, setFollowupQueueItems] = useState([]);
    const [isAgentTurnActive, setIsAgentTurnActive] = useState(false);
    const [btwSession, setBtwSession] = useState(() => loadStoredBtwSession());
    const [floatingWidget, setFloatingWidget] = useState(null);
    const dismissedLiveWidgetKeysRef = useRef(new Set());
    const currentBranchRecord = useMemo(() => {
        const currentBranch = currentChatBranches.find((chat) => chat?.chat_jid === currentChatJid);
        if (currentBranch) return currentBranch;
        return activeChatAgents.find((chat) => chat?.chat_jid === currentChatJid) || null;
    }, [activeChatAgents, currentChatBranches, currentChatJid]);
    const currentRootChatJid = currentBranchRecord?.root_chat_jid || currentChatJid;
    const activeSearchScopeLabel = describeSearchScope(searchScope);
    const [branchLoaderState, setBranchLoaderState] = useState(() => ({
        status: branchLoaderMode ? 'running' : 'idle',
        message: branchLoaderMode ? 'Preparing a new chat branch…' : '',
    }));
    const followupQueueCount = followupQueueItems.length;
    const followupQueueRowIdsRef = useRef(new Set());
    const followupQueueItemsRef = useRef([]);
    // Row IDs that were locally dismissed (e.g. injected as steering).
    const dismissedQueueRowIdsRef = useRef(new Set());
    const queueRefreshGenRef = useRef(0);
    const silentRecoveryRef = useRef({ inFlight: false, lastAttemptAt: 0, turnId: null });
    // Keep refs in sync during render for immediate access in stable callbacks
    followupQueueRowIdsRef.current = new Set(followupQueueItems.map((item) => item.row_id));
    followupQueueItemsRef.current = followupQueueItems;
    const {
        notificationsEnabled,
        notificationPermission,
        toggleNotifications: handleToggleNotifications,
        notify,
    } = useNotifications();
    const [removingPostIds, setRemovingPostIds] = useState(() => new Set());
    const [workspaceOpen, setWorkspaceOpen] = useState(() => getLocalStorageBoolean('workspaceOpen', true));

    const removeFileRefRef = useRef(null);

    // Editor state hook (file load/save, tabs, dirty, view state, SSE sync)
    const {
        editorOpen, tabStripTabs, tabStripActiveId, previewTabs, tabPaneOverrides,
        openEditor, closeEditor, handleTabClose, handleTabActivate,
        handleTabCloseOthers, handleTabCloseAll, handleTabTogglePin,
        handleTabTogglePreview, handleTabEditSource,
    } = useEditorState({ onTabClosed: (path) => removeFileRefRef.current?.(path) });

    const paneRuntime = usePaneRuntimeOrchestration({
        panePopoutMode,
        panePopoutPath,
        panePopoutLabel,
        chatOnlyMode,
        editorOpen,
        tabStripTabs,
        tabStripActiveId,
        previewTabs,
        tabPaneOverrides,
        terminalTabPath: TERMINAL_TAB_PATH,
        vncTabPrefix: VNC_TAB_PREFIX,
        openEditor,
        closeEditor,
        getWorkspaceFile,
    });

    const [userProfile, setUserProfile] = useState({ name: 'You', avatar_url: null, avatar_background: null });
    const staleUiVersionRef = useRef(null);
    const staleUiReloadScheduledRef = useRef(false);
    const hasConnectedOnceRef = useRef(false);
    const wasAgentActiveRef = useRef(false); // tracks active→idle transition for timeline refresh
    const agentStatusRef = useRef(null);
    const activeChatJidRef = useRef(currentChatJid);
    const chatPaneStateByChatRef = useRef(new Map());
    const paneStateOwnerChatJidRef = useRef(currentChatJid);
    const draftThrottleRef = useRef(0);
    const thoughtThrottleRef = useRef(0);
    const agentsRef = useRef({});
    const userProfileRef = useRef({ name: null, avatar_url: null });
    const viewStateRef = useRef({ currentHashtag: null, searchQuery: null, searchOpen: false });
    const timelineRef = useRef(null);
    const appShellRef = useRef(null);
    const sidebarWidthRef = useRef(0);
    const editorWidthRef = useRef(0);
    const dockHeightRef = useRef(0);
    const lastNotifiedIdRef = useRef(null);
    const lastAgentResponseRef = useRef(null);
    const btwAbortRef = useRef(null);
    const lastActivityTimerRef = useRef(null);
    const lastActivityTokenRef = useRef(0);
    const brandingRef = useRef({ title: null, avatarBase: null });
    const intentToastTimerRef = useRef(null);
    const renameBranchInFlightRef = useRef(false);
    const [isRenamingBranch, setIsRenamingBranch] = useState(false);
    const renameBranchLockUntilRef = useRef(0);
    const [isRenameBranchFormOpen, setIsRenameBranchFormOpen] = useState(false);
    const [renameBranchNameDraft, setRenameBranchNameDraft] = useState('');
    const renameBranchDraftState = useMemo(
        () => getBranchHandleDraftState(renameBranchNameDraft, currentBranchRecord?.agent_name || ''),
        [currentBranchRecord?.agent_name, renameBranchNameDraft],
    );
    const renameBranchNameInputRef = useRef(null);

    const { applyBranding } = useAppShellEnvironmentEffects({
        isRenameBranchFormOpen,
        renameBranchNameInputRef,
        setIsWebAppMode,
        workspaceOpen,
        btwSession,
        agents,
        agentsRef,
        currentChatJid,
        activeChatJidRef,
        userProfile,
        userProfileRef,
        brandingRef,
    });

    const composeReferenceActions = useComposeReferenceOrchestration({
        setIntentToast,
        intentToastTimerRef,
        editorOpen,
        openEditor,
        resolvePane: (context) => paneRegistry.resolve(context),
        tabStripActiveId,
        setFileRefs,
        setMessageRefs,
        currentChatJid,
        getThread,
        setPosts,
    });

    removeFileRefRef.current = composeReferenceActions.removeFileRef;

    const {
        noteAgentActivity,
        clearLastActivityTimer,
        clearLastActivityFlag,
        showLastActivity,
        clearAgentRunState,
        handlePanelToggle,
    } = useAgentActivityOrchestration({
        lastActivityTtlMs: LAST_ACTIVITY_TTL_MS,
        lastActivityTimerRef,
        lastActivityTokenRef,
        lastAgentEventRef,
        lastSilenceNoticeRef,
        isAgentRunningRef,
        setIsAgentTurnActive,
        setAgentStatus,
        draftBufferRef,
        thoughtBufferRef,
        pendingRequestRef,
        lastAgentResponseRef,
        currentTurnIdRef,
        steerQueuedTurnIdRef,
        agentStatusRef,
        silentRecoveryRef,
        thoughtExpandedRef,
        draftExpandedRef,
        setCurrentTurnId,
        setSteerQueuedTurnId,
        currentTurnIdRefForPanel: currentTurnIdRef,
        setAgentThoughtVisibility,
        getAgentThought,
        setAgentThought,
        setAgentDraft,
    });

    const {
        clearQueuedSteerStateIfStale,
        snapshotCurrentChatPaneState,
        restoreChatPaneState,
        setActiveTurn,
        notifyForFinalResponse,
    } = useChatPaneRuntimeOrchestration({
        isAgentTurnActive,
        steerQueuedTurnId,
        currentTurnId,
        steerQueuedTurnIdRef,
        setSteerQueuedTurnId,
        agentStatus,
        agentDraft,
        agentPlan,
        agentThought,
        pendingRequest,
        pendingRequestRef,
        followupQueueItems,
        activeModel,
        activeThinkingLevel,
        supportsThinking,
        activeModelUsage,
        contextUsage,
        isAgentRunningRef,
        wasAgentActiveRef,
        draftBufferRef,
        thoughtBufferRef,
        lastAgentEventRef,
        lastSilenceNoticeRef,
        lastAgentResponseRef,
        currentTurnIdRef,
        thoughtExpandedRef,
        draftExpandedRef,
        agentStatusRef,
        silentRecoveryRef,
        clearLastActivityTimer,
        setIsAgentTurnActive,
        setAgentStatus,
        setAgentDraft,
        setAgentPlan,
        setAgentThought,
        setPendingRequest,
        setCurrentTurnId,
        setFollowupQueueItems,
        setActiveModel,
        setActiveThinkingLevel,
        setSupportsThinking,
        setActiveModelUsage,
        setContextUsage,
        lastNotifiedIdRef,
        agentsRef,
        notify,
    });

    // Scroll to bottom of timeline (column-reverse: bottom is scrollTop=0)
    // Only auto-scroll if user is already near the bottom (within 150px).
    const scrollToBottomRef = useRef(null);
    const {
        scrollToBottom,
        preserveTimelineScroll,
        preserveTimelineScrollTop,
        filterQueuedPosts,
    } = useTimelineScrollOrchestration({
        timelineRef,
        viewStateRef,
        followupQueueRowIdsRef,
    });
    scrollToBottomRef.current = scrollToBottom;

    const {
        posts: rawPosts,
        setPosts,
        hasMore,
        setHasMore,
        hasMoreRef,
        loadPosts,
        refreshTimeline,
        loadMore,
        loadMoreRef,
    } = useTimeline({ preserveTimelineScroll, preserveTimelineScrollTop, chatJid: currentChatJid });

    // Derive filtered posts with queued placeholders hidden.
    const posts = useMemo(() => filterQueuedPosts(rawPosts), [rawPosts, followupQueueItems, filterQueuedPosts]);

    const recoveryCallbacks = useAgentRecoveryCallbacks({
        isAgentRunningRef,
        lastSilenceNoticeRef,
        lastAgentEventRef,
        currentTurnIdRef,
        thoughtExpandedRef,
        draftExpandedRef,
        draftBufferRef,
        thoughtBufferRef,
        pendingRequestRef,
        lastAgentResponseRef,
        stalledPostIdRef,
        scrollToBottomRef,
        setCurrentTurnId,
        setAgentDraft,
        setAgentPlan,
        setAgentThought,
        setPendingRequest,
        setAgentStatus,
        setPosts,
        dedupePosts,
    });

    useViewStateRefSync({
        viewStateRef,
        currentHashtag,
        searchQuery,
        searchOpen,
    });

    const splitterHandlers = useSplitters({ appShellRef, sidebarWidthRef, editorWidthRef, dockHeightRef });

    const agentStatusLifecycle = useAgentStatusLifecycle({
        currentChatJid,
        activeChatJidRef,
        queueRefreshGenRef,
        dismissedQueueRowIdsRef,
        getAgentQueueState,
        setFollowupQueueItems,
        clearQueuedSteerStateIfStale,
        getAgentContext,
        setContextUsage,
        getAutoresearchStatus,
        setExtensionStatusPanels,
        setPendingExtensionPanelActions,
        getAgentStatus,
        wasAgentActiveRef,
        viewStateRef,
        refreshTimeline,
        clearAgentRunState,
        agentStatusRef,
        pendingRequestRef,
        thoughtBufferRef,
        draftBufferRef,
        setAgentStatus,
        setAgentDraft,
        setAgentPlan,
        setAgentThought,
        setPendingRequest,
        setActiveTurn,
        noteAgentActivity,
        clearLastActivityFlag,
        isAgentRunningRef,
        currentTurnIdRef,
        silentRecoveryRef,
        silenceRefreshMs: SILENCE_REFRESH_MS,
        lastAgentEventRef,
        lastSilenceNoticeRef,
        silenceWarningMs: SILENCE_WARNING_MS,
        silenceFinalizeMs: SILENCE_FINALIZE_MS,
        isCompactionStatus,
        serverVersionContext: {
            currentAppAssetVersion: CURRENT_APP_ASSET_VERSION,
            staleUiVersionRef,
            staleUiReloadScheduledRef,
            tabStoreHasUnsaved: () => tabStore.hasUnsaved(),
            isAgentRunningRef,
            pendingRequestRef,
            showIntentToast: composeReferenceActions.showIntentToast,
        },
        setConnectionStatus,
        setPendingRequestForConnection: setPendingRequest,
        hasConnectedOnceRef,
    });

    const timelineViewActions = useTimelineViewActions({
        currentHashtag,
        searchQuery,
        searchOpen,
        searchScope,
        currentChatJid,
        currentRootChatJid,
        posts,
        loadPosts,
        searchPosts,
        setCurrentHashtag,
        setSearchQuery,
        setSearchOpen,
        setSearchScope,
        setPosts,
        setHasMore,
        preserveTimelineScrollTop,
        setRemovingPostIds,
        deletePost,
        hasMoreRef,
        loadMoreRef,
    });

    const chatRefreshLifecycle = useChatRefreshLifecycle({
        getAgents,
        setAgents,
        setUserProfile,
        applyBranding,
        readStoredNumber: getLocalStorageNumber,
        sidebarWidthRef,
        appShellRef,
        currentChatJid,
        currentRootChatJid,
        getAgentModels,
        getActiveChatAgents,
        getChatBranches,
        activeChatJidRef,
        setActiveChatAgents,
        setCurrentChatBranches,
        setActiveModel,
        setActiveThinkingLevel,
        setSupportsThinking,
        setActiveModelUsage,
        agentsRef,
        refreshQueueState: agentStatusLifecycle.refreshQueueState,
        refreshContextUsage: agentStatusLifecycle.refreshContextUsage,
        refreshAutoresearchStatus: agentStatusLifecycle.refreshAutoresearchStatus,
    });

    const isComposeBoxAgentActive = isAgentTurnActive || agentStatus !== null;

    const followupActions = useFollowupActionsOrchestration({
        currentChatJid,
        followupQueueItemsRef,
        dismissedQueueRowIdsRef,
        refreshQueueState: agentStatusLifecycle.refreshQueueState,
        setFollowupQueueItems,
        showIntentToast: composeReferenceActions.showIntentToast,
        clearQueuedSteerStateIfStale,
        steerAgentQueueItem,
        removeAgentQueueItem,
        refreshActiveChatAgents: chatRefreshLifecycle.refreshActiveChatAgents,
        refreshCurrentChatBranches: chatRefreshLifecycle.refreshCurrentChatBranches,
        refreshContextUsage: agentStatusLifecycle.refreshContextUsage,
        refreshAutoresearchStatus: agentStatusLifecycle.refreshAutoresearchStatus,
    });

    const sidepanelActions = useSidepanelOrchestration({
        currentChatJid,
        currentRootChatJid,
        isComposeBoxAgentActive,
        showIntentToast: composeReferenceActions.showIntentToast,
        setPendingExtensionPanelActions,
        refreshAutoresearchStatus: agentStatusLifecycle.refreshAutoresearchStatus,
        stopAutoresearch,
        dismissAutoresearch,
        streamSidePrompt,
        btwAbortRef,
        btwSession,
        setBtwSession,
        sendAgentMessage,
        handleMessageResponse: followupActions.handleMessageResponse,
        dismissedLiveWidgetKeysRef,
        setFloatingWidget,
        getAgentStatus,
        getAgentContext,
        getAgentQueueState,
        getAgentModels,
        getActiveChatAgents,
        getChatBranches,
        getTimeline,
        rawPosts,
        activeChatAgents,
        currentChatBranches,
        contextUsage,
        followupQueueItemsRef,
        activeModel,
        activeThinkingLevel,
        supportsThinking,
        isAgentTurnActive,
    });

    const viewRefreshLifecycle = useViewRefreshLifecycle({
        currentChatJid,
        currentRootChatJid,
        currentHashtag,
        searchQuery,
        searchScope,
        loadPosts,
        searchPosts,
        setPosts,
        setHasMore,
        scrollToBottom,
        setExtensionStatusPanels,
        setPendingExtensionPanelActions,
        paneStateOwnerChatJidRef,
        chatPaneStateByChatRef,
        snapshotCurrentChatPaneState,
        restoreChatPaneState,
        dismissedQueueRowIdsRef,
        refreshQueueState: agentStatusLifecycle.refreshQueueState,
        refreshAgentStatus: agentStatusLifecycle.refreshAgentStatus,
        refreshContextUsage: agentStatusLifecycle.refreshContextUsage,
        viewStateRef,
        refreshTimeline,
        refreshModelAndQueueState: chatRefreshLifecycle.refreshModelAndQueueState,
        setFloatingWidget,
        dismissedLiveWidgetKeysRef,
    });

    useRealtimeLifecycleOrchestration({
        currentChatJid,
        posts,
        scrollToMessage: composeReferenceActions.scrollToMessage,
        handleConnectionStatusChange: agentStatusLifecycle.handleConnectionStatusChange,
        loadPosts,
        refreshCurrentView: viewRefreshLifecycle.refreshCurrentView,
        updateAgentProfile: chatRefreshLifecycle.updateAgentProfile,
        updateUserProfile: chatRefreshLifecycle.updateUserProfile,
        currentTurnIdRef,
        activeChatJidRef,
        pendingRequestRef,
        draftBufferRef,
        thoughtBufferRef,
        steerQueuedTurnIdRef,
        thoughtExpandedRef,
        draftExpandedRef,
        draftThrottleRef,
        thoughtThrottleRef,
        viewStateRef,
        followupQueueItemsRef,
        dismissedQueueRowIdsRef,
        scrollToBottomRef,
        hasMoreRef,
        loadMoreRef,
        lastAgentResponseRef,
        wasAgentActiveRef,
        setActiveTurn,
        applyLiveGeneratedWidgetUpdate: viewRefreshLifecycle.applyLiveGeneratedWidgetUpdate,
        setFloatingWidget,
        clearLastActivityFlag,
        handleUiVersionDrift: agentStatusLifecycle.handleUiVersionDrift,
        setAgentStatus,
        setAgentDraft,
        setAgentPlan,
        setAgentThought,
        setPendingRequest,
        clearAgentRunState,
        getAgentStatus,
        noteAgentActivity,
        showLastActivity,
        refreshTimeline,
        refreshModelAndQueueState: chatRefreshLifecycle.refreshModelAndQueueState,
        refreshActiveChatAgents: chatRefreshLifecycle.refreshActiveChatAgents,
        refreshCurrentChatBranches: chatRefreshLifecycle.refreshCurrentChatBranches,
        notifyForFinalResponse,
        setContextUsage,
        refreshContextUsage: agentStatusLifecycle.refreshContextUsage,
        refreshQueueState: agentStatusLifecycle.refreshQueueState,
        setFollowupQueueItems,
        clearQueuedSteerStateIfStale,
        setSteerQueuedTurnId,
        applyModelState: chatRefreshLifecycle.applyModelState,
        getAgentContext,
        setExtensionStatusPanels,
        setPendingExtensionPanelActions,
        refreshActiveEditorFromWorkspace: paneRuntime.refreshActiveEditorFromWorkspace,
        showIntentToast: composeReferenceActions.showIntentToast,
        removeStalledPost: recoveryCallbacks.removeStalledPost,
        setPosts,
        preserveTimelineScrollTop,
        finalizeStalledResponse: recoveryCallbacks.finalizeStalledResponse,
        connectionStatus,
        agentStatus,
        refreshAgentStatus: agentStatusLifecycle.refreshAgentStatus,
        refreshAutoresearchStatus: agentStatusLifecycle.refreshAutoresearchStatus,
    });

    const branchPaneActions = useBranchPaneLifecycle({
        setWorkspaceOpen,
        currentChatJid,
        chatOnlyMode,
        navigate,
        currentBranchRecord,
        renameBranchInFlightRef,
        renameBranchLockUntilRef,
        getFormLock: getRenameBranchFormLock,
        setRenameBranchNameDraft,
        setIsRenameBranchFormOpen,
        setIsRenamingBranch,
        renameChatBranch,
        refreshActiveChatAgents: chatRefreshLifecycle.refreshActiveChatAgents,
        refreshCurrentChatBranches: chatRefreshLifecycle.refreshCurrentChatBranches,
        showIntentToast: composeReferenceActions.showIntentToast,
        currentChatBranches,
        activeChatAgents,
        pruneChatBranch,
        restoreChatBranch,
        branchLoaderMode,
        branchLoaderSourceChatJid,
        forkChatBranch,
        setBranchLoaderState,
        currentRootChatJid,
        isWebAppMode,
        getActiveChatAgents,
        getChatBranches,
        setActiveChatAgents,
        setCurrentChatBranches,
        openEditor,
        tabStripActiveId,
        editorInstanceRef: paneRuntime.editorInstanceRef,
        dockInstanceRef: paneRuntime.dockInstanceRef,
        terminalTabPath: TERMINAL_TAB_PATH,
        dockVisible: paneRuntime.dockVisible,
        resolveTab: (value) => tabStore.get(value),
        closeTab: handleTabClose,
        setDockVisible: paneRuntime.setDockVisible,
        editorOpen,
        shellElement: appShellRef.current,
        editorWidthRef,
        dockHeightRef,
        sidebarWidthRef,
        readStoredNumber: getLocalStorageNumber,
    });

    useAppShellShortcuts({
        hasDockPanes: paneRuntime.hasDockPanes,
        chatOnlyMode,
        toggleDock: paneRuntime.toggleDock,
        toggleZenMode: paneRuntime.toggleZenMode,
        exitZenMode: paneRuntime.exitZenMode,
        zenMode: paneRuntime.zenMode,
    });

    const steerQueued = Boolean(steerQueuedTurnId && (steerQueuedTurnId === (agentStatus?.turn_id || currentTurnId)));

    return renderResolvedAppShell(composeMainAppShellOptions({
        routing: {
            branchLoaderMode,
            panePopoutMode,
            branchLoaderState,
        },
        paneRuntime,
        splitters: splitterHandlers,
        branchPaneActions,
        timelineViewActions,
        composeReferenceActions,
        sidepanelActions,
        shellState: {
            appShellRef,
            workspaceOpen,
            editorOpen,
            chatOnlyMode,
            isRenameBranchFormOpen,
            renameBranchNameDraft,
            renameBranchNameInputRef,
            setRenameBranchNameDraft,
            renameBranchDraftState,
            isRenamingBranch,
            isWebAppMode,
            TERMINAL_TAB_PATH,
            isIOSDevice,
            currentBranchRecord,
            currentChatJid,
            currentChatBranches,
            formatBranchPickerLabel,
            activeSearchScopeLabel,
            posts,
            hasMore,
            loadMore,
            timelineRef,
            agents,
            userProfile,
            removingPostIds,
            extensionStatusPanels,
            pendingExtensionPanelActions,
            searchOpen,
            followupQueueItems,
            viewStateRef,
            loadPosts,
            scrollToBottom,
            searchScope,
            tabStripTabs,
            tabStripActiveId,
            handleTabActivate,
            previewTabs,
            handleTabTogglePreview,
            panePopoutPath,
            tabPaneOverrides,
            handleTabClose,
            handleTabCloseOthers,
            handleTabCloseAll,
            handleTabTogglePin,
            handleTabEditSource,
            openEditor,
            openTerminalTab: paneRuntime.openTerminalTab,
            openVncTab: paneRuntime.openVncTab,
        },
        agentState: {
            agentStatus,
            isCompactionStatus,
            agentDraft,
            agentPlan,
            agentThought,
            pendingRequest,
            intentToast,
            currentTurnId,
            steerQueued,
            handlePanelToggle,
            setPendingRequest,
            pendingRequestRef,
            handleInjectQueuedFollowup: followupActions.handleInjectQueuedFollowup,
            handleRemoveQueuedFollowup: followupActions.handleRemoveQueuedFollowup,
        },
        composeState: {
            btwSession,
            floatingWidget,
            fileRefs,
            messageRefs,
            followupQueueCount,
            handleMessageResponse: followupActions.handleMessageResponse,
            isComposeBoxAgentActive,
        },
        modelState: {
            activeChatAgents,
            connectionStatus,
            activeModel,
            activeModelUsage,
            activeThinkingLevel,
            supportsThinking,
            contextUsage,
            notificationsEnabled,
            notificationPermission,
            handleToggleNotifications,
            setActiveModel,
            applyModelState: chatRefreshLifecycle.applyModelState,
        },
    }));
}

function App() {
    const { locationParams, navigate } = useAppLocationNavigation();
    return html`<${MainApp} locationParams=${locationParams} navigate=${navigate} />`;
}

// Mount the app
render(html`<${App} />`, document.getElementById('app'));
