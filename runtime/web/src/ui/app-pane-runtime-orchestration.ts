import { useCallback, useEffect, useMemo, useRef, useState } from '../vendor/preact-htm.js';
import { paneRegistry, tabStore } from '../panes/index.js';
import {
  getPanePopoutTitle,
  hasPanePopoutMenuActions,
  isVncPanePopoutPath,
  resolveActivePaneOverrideId,
  resolveActivePaneTab,
  shouldHidePanePopoutControls,
  shouldShowEditorPaneContainer,
} from './app-pane-state.js';

interface UsePaneRuntimeOrchestrationOptions {
  panePopoutMode: boolean;
  panePopoutPath: string;
  panePopoutLabel: string;
  chatOnlyMode: boolean;
  editorOpen: boolean;
  tabStripTabs: any[];
  tabStripActiveId: string | null;
  previewTabs: Set<string>;
  tabPaneOverrides: Map<string, string> | Record<string, string>;
  terminalTabPath: string;
  vncTabPrefix: string;
  openEditor: (path: string, options?: Record<string, unknown>) => void;
  closeEditor: () => void;
  getWorkspaceFile: (path: string, maxBytes: number, mode: string) => Promise<any>;
}

function normalizeChangedPaths(update: any): string[] {
  const changedPaths = Array.isArray(update?.changed_paths)
    ? update.changed_paths
      .map((value: unknown) => (typeof value === 'string' ? value.trim() : ''))
      .filter(Boolean)
    : [];

  if (changedPaths.length > 0) {
    return changedPaths;
  }

  const fallbackPath = typeof update?.path === 'string' ? update.path.trim() : '';
  return fallbackPath ? [fallbackPath] : ['.'];
}

export function isWorkspaceUpdateRelevantForPath(activePath: string, updates: unknown): boolean {
  if (!activePath) return false;
  if (!Array.isArray(updates) || updates.length === 0) return true;

  return updates.some((update) => {
    const changedPaths = normalizeChangedPaths(update);
    return changedPaths.some((changedPath) => changedPath === '.' || changedPath === activePath);
  });
}

export function usePaneRuntimeOrchestration(options: UsePaneRuntimeOrchestrationOptions) {
  const {
    panePopoutMode,
    panePopoutPath,
    panePopoutLabel,
    chatOnlyMode,
    editorOpen,
    tabStripTabs,
    tabStripActiveId,
    previewTabs,
    tabPaneOverrides,
    terminalTabPath,
    vncTabPrefix,
    openEditor,
    closeEditor,
    getWorkspaceFile,
  } = options;

  const editorContainerRef = useRef<any>(null);
  const editorInstanceRef = useRef<any>(null);
  const dockContainerRef = useRef<any>(null);
  const dockInstanceRef = useRef<any>(null);

  const hasDockPanes = paneRegistry.getDockPanes().length > 0;
  const [dockVisible, setDockVisible] = useState(false);
  const toggleDock = useCallback(() => setDockVisible((visible) => !visible), []);

  const openTerminalTab = useCallback(() => {
    openEditor(terminalTabPath, { label: 'Terminal' });
  }, [openEditor, terminalTabPath]);

  const openVncTab = useCallback(() => {
    openEditor(vncTabPrefix, { label: 'VNC' });
  }, [openEditor, vncTabPrefix]);

  const activePaneTab = useMemo(
    () => resolveActivePaneTab(tabStripTabs, tabStripActiveId),
    [tabStripActiveId, tabStripTabs],
  );

  const activePaneOverrideId = useMemo(
    () => resolveActivePaneOverrideId(tabPaneOverrides, tabStripActiveId),
    [tabPaneOverrides, tabStripActiveId],
  );

  const panePopoutTitle = useMemo(
    () => getPanePopoutTitle(panePopoutLabel, activePaneTab, panePopoutPath),
    [activePaneTab, panePopoutLabel, panePopoutPath],
  );

  const panePopoutHasMenuActions = useMemo(
    () => hasPanePopoutMenuActions(tabStripTabs, previewTabs, tabStripActiveId),
    [previewTabs, tabStripActiveId, tabStripTabs],
  );

  const isVncPanePopout = useMemo(
    () => isVncPanePopoutPath(panePopoutPath, vncTabPrefix),
    [panePopoutPath, vncTabPrefix],
  );

  const hidePanePopoutControls = useMemo(
    () => shouldHidePanePopoutControls(panePopoutPath, terminalTabPath, panePopoutHasMenuActions, isVncPanePopout),
    [isVncPanePopout, panePopoutHasMenuActions, panePopoutPath, terminalTabPath],
  );

  const showEditorPaneContainer = shouldShowEditorPaneContainer(
    panePopoutMode,
    chatOnlyMode,
    editorOpen,
    hasDockPanes,
    dockVisible,
  );

  const [zenMode, setZenMode] = useState(false);
  const zenDockWasVisibleRef = useRef(false);

  const enterZenMode = useCallback(() => {
    if (!editorOpen || chatOnlyMode) return;
    zenDockWasVisibleRef.current = dockVisible;
    if (dockVisible) setDockVisible(false);
    setZenMode(true);
  }, [chatOnlyMode, dockVisible, editorOpen]);

  const exitZenMode = useCallback(() => {
    if (!zenMode) return;
    setZenMode(false);
    if (zenDockWasVisibleRef.current) {
      setDockVisible(true);
      zenDockWasVisibleRef.current = false;
    }
  }, [zenMode]);

  const toggleZenMode = useCallback(() => {
    if (zenMode) {
      exitZenMode();
      return;
    }
    enterZenMode();
  }, [enterZenMode, exitZenMode, zenMode]);

  useEffect(() => {
    if (zenMode && !editorOpen) {
      exitZenMode();
    }
  }, [editorOpen, exitZenMode, zenMode]);

  useEffect(() => {
    if (!panePopoutMode || !panePopoutPath) return;
    const activeId = tabStore.getActiveId();
    if (activeId === panePopoutPath) return;
    openEditor(panePopoutPath, panePopoutLabel ? { label: panePopoutLabel } : undefined);
  }, [openEditor, panePopoutLabel, panePopoutMode, panePopoutPath]);

  useEffect(() => {
    const container = editorContainerRef.current;
    if (!container) return;

    if (editorInstanceRef.current) {
      editorInstanceRef.current.dispose();
      editorInstanceRef.current = null;
    }

    const activeId = tabStripActiveId;
    if (!activeId) return;

    const context = { path: activeId, mode: 'edit' };
    const ext = (activePaneOverrideId ? paneRegistry.get(activePaneOverrideId) : null)
      || paneRegistry.resolve(context)
      || paneRegistry.get('editor');

    if (!ext) {
      container.innerHTML = '<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';
      return;
    }

    const instance = ext.mount(container, context);
    editorInstanceRef.current = instance;

    instance.onDirtyChange?.((dirty: boolean) => {
      tabStore.setDirty(activeId, dirty);
    });

    instance.onSaveRequest?.(() => {
      // Save is handled internally by pane extensions.
    });

    instance.onClose?.(() => {
      closeEditor();
    });

    const viewState = tabStore.getViewState(activeId);
    if (viewState && typeof instance.restoreViewState === 'function') {
      requestAnimationFrame(() => instance.restoreViewState(viewState));
    }

    if (typeof instance.onViewStateChange === 'function') {
      instance.onViewStateChange((state: unknown) => {
        tabStore.saveViewState(activeId, state);
      });
    }

    requestAnimationFrame(() => instance.focus?.());

    return () => {
      if (editorInstanceRef.current === instance) {
        instance.dispose();
        editorInstanceRef.current = null;
      }
    };
  }, [activePaneOverrideId, closeEditor, tabStripActiveId]);

  const refreshActiveEditorFromWorkspace = useCallback(async (updates: unknown) => {
    const activePath = typeof tabStripActiveId === 'string' ? tabStripActiveId.trim() : '';
    const instance = editorInstanceRef.current;
    if (!activePath || !instance?.setContent) return;
    if (typeof instance.isDirty === 'function' && instance.isDirty()) return;
    if (!isWorkspaceUpdateRelevantForPath(activePath, updates)) return;

    try {
      const payload = await getWorkspaceFile(activePath, 1_000_000, 'edit');
      const nextText = typeof payload?.text === 'string' ? payload.text : '';
      const nextMtime = typeof payload?.mtime === 'string' && payload.mtime.trim()
        ? payload.mtime.trim()
        : new Date().toISOString();
      instance.setContent(nextText, nextMtime);
    } catch (error) {
      console.warn('[workspace_update] Failed to refresh active pane:', error);
    }
  }, [getWorkspaceFile, tabStripActiveId]);

  useEffect(() => {
    const container = dockContainerRef.current;

    if (dockInstanceRef.current) {
      dockInstanceRef.current.dispose();
      dockInstanceRef.current = null;
    }

    if (!container || !hasDockPanes || !dockVisible) return;

    const ext = paneRegistry.getDockPanes()[0];
    if (!ext) {
      container.innerHTML = '<div class="terminal-placeholder">No dock pane available.</div>';
      return;
    }

    const instance = ext.mount(container, { mode: 'view' });
    dockInstanceRef.current = instance;
    requestAnimationFrame(() => instance.focus?.());

    return () => {
      if (dockInstanceRef.current === instance) {
        instance.dispose();
        dockInstanceRef.current = null;
      }
    };
  }, [dockVisible, hasDockPanes]);

  return {
    editorContainerRef,
    editorInstanceRef,
    dockContainerRef,
    dockInstanceRef,
    hasDockPanes,
    dockVisible,
    setDockVisible,
    toggleDock,
    openTerminalTab,
    openVncTab,
    panePopoutTitle,
    panePopoutHasMenuActions,
    hidePanePopoutControls,
    showEditorPaneContainer,
    zenMode,
    exitZenMode,
    toggleZenMode,
    refreshActiveEditorFromWorkspace,
  };
}
