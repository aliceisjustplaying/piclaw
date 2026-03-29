import { expect, test } from 'bun:test';

import { buildMainAppPaneCompositionResult } from '../../web/src/ui/app-main-pane-composition.js';

test('buildMainAppPaneCompositionResult preserves grouped editor/pane composition outputs', () => {
  const removeFileRefRef = { current: null };
  const editorState = { openEditor: () => {}, handleTabClose: () => {} };
  const paneRuntime = { openTerminalTab: () => {}, dockVisible: true };

  const result = buildMainAppPaneCompositionResult({
    removeFileRefRef,
    editorState,
    paneRuntime,
  });

  expect(result.removeFileRefRef).toBe(removeFileRefRef);
  expect(result.editorState).toBe(editorState);
  expect(result.paneRuntime).toBe(paneRuntime);
});
