import { useEffect } from '../vendor/preact-htm.js';
import { watchDockToggleShortcut, watchZenModeShortcuts } from './app-browser-events.js';

export function shouldWatchDockShortcut(options: {
  hasDockPanes: boolean;
  chatOnlyMode: boolean;
}): boolean {
  const { hasDockPanes, chatOnlyMode } = options;
  return Boolean(hasDockPanes && !chatOnlyMode);
}

export function shouldWatchZenShortcuts(chatOnlyMode: boolean): boolean {
  return !chatOnlyMode;
}

export function useAppShellShortcuts(options: {
  hasDockPanes: boolean;
  chatOnlyMode: boolean;
  toggleDock: () => void;
  toggleZenMode: () => void;
  exitZenMode: () => void;
  zenMode: boolean;
}): void {
  const {
    hasDockPanes,
    chatOnlyMode,
    toggleDock,
    toggleZenMode,
    exitZenMode,
    zenMode,
  } = options;

  useEffect(() => {
    if (!shouldWatchDockShortcut({ hasDockPanes, chatOnlyMode })) return;
    return watchDockToggleShortcut(toggleDock);
  }, [chatOnlyMode, hasDockPanes, toggleDock]);

  useEffect(() => {
    if (!shouldWatchZenShortcuts(chatOnlyMode)) return;
    return watchZenModeShortcuts({
      toggleZenMode,
      exitZenMode,
      zenMode,
      isZenModeActive: () => zenMode,
    });
  }, [chatOnlyMode, exitZenMode, toggleZenMode, zenMode]);
}
