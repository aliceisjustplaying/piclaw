import { expect, test } from 'bun:test';

import {
  bindComposeReferenceRemoval,
  composeMainInteractionResult,
} from '../../web/src/ui/app-main-interaction-composition.js';

test('bindComposeReferenceRemoval exposes compose removeFileRef through the mutable ref bridge', () => {
  const removeFileRefRef = { current: null };
  const removeFileRef = () => {};

  bindComposeReferenceRemoval({
    removeFileRefRef,
    composeReferenceActions: { removeFileRef },
  });

  expect(removeFileRefRef.current).toBe(removeFileRef);
});

test('composeMainInteractionResult preserves grouped interaction outputs', () => {
  const applyBranding = () => {};
  const result = composeMainInteractionResult({
    applyBranding,
    composeReferenceActions: { addFileRef: () => {} },
    agentActivity: { clearAgentRunState: () => {} },
    chatPaneRuntime: { setActiveTurn: () => {} },
    recoveryCallbacks: { removeStalledPost: () => {} },
  });

  expect(result.applyBranding).toBe(applyBranding);
  expect(typeof result.composeReferenceActions.addFileRef).toBe('function');
  expect(typeof result.clearAgentRunState).toBe('function');
  expect(typeof result.setActiveTurn).toBe('function');
  expect(typeof result.recoveryCallbacks.removeStalledPost).toBe('function');
});
