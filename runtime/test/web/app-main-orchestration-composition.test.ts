import { expect, test } from 'bun:test';

import {
  buildMainAppOrchestrationResult,
  isComposeBoxAgentActiveState,
} from '../../web/src/ui/app-main-orchestration-composition.js';

test('isComposeBoxAgentActiveState stays active for either in-flight turn or live agent status', () => {
  expect(isComposeBoxAgentActiveState(true, null)).toBe(true);
  expect(isComposeBoxAgentActiveState(false, { type: 'active' })).toBe(true);
  expect(isComposeBoxAgentActiveState(false, null)).toBe(false);
});

test('buildMainAppOrchestrationResult merges lifecycle/action bundles with timeline actions', () => {
  const result = buildMainAppOrchestrationResult({
    agentStatusLifecycleBundle: {
      agentStatusLifecycle: { refreshQueueState: () => {} },
      chatRefreshLifecycle: { applyModelState: () => {} },
      viewRefreshLifecycle: { refreshCurrentView: () => {} },
    },
    actionBundle: {
      followupActions: { handleMessageResponse: () => {} },
      sidepanelActions: { handleExtensionPanelAction: () => {} },
      branchPaneActions: { toggleWorkspace: () => {} },
    },
    timelineViewActions: { handleSearch: () => {} },
    isComposeBoxAgentActive: true,
  });

  expect(typeof result.agentStatusLifecycle.refreshQueueState).toBe('function');
  expect(typeof result.chatRefreshLifecycle.applyModelState).toBe('function');
  expect(typeof result.followupActions.handleMessageResponse).toBe('function');
  expect(typeof result.timelineViewActions.handleSearch).toBe('function');
  expect(result.isComposeBoxAgentActive).toBe(true);
});
