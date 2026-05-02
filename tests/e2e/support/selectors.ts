/**
 * Shared selectors for PiClaw web UI.
 * Use data-testid where available; fall back to stable CSS selectors.
 * Update this file when the UI structure changes.
 */

export const sel = {
  // Compose
  composeBox: '[data-testid="compose-box"], .compose-editor',
  composeInput: '[data-testid="compose-input"], .compose-editor [contenteditable]',
  sendButton: '[data-testid="send-button"], .compose-send',
  stopButton: '[data-testid="stop-button"], .compose-stop',
  typeaheadPopup: '[data-testid="typeahead"], .typeahead-popup',
  queueItem: '[data-testid="queue-item"], .queue-item',

  // Timeline
  timeline: '[data-testid="timeline"], .timeline',
  post: '[data-testid="post"], .post',
  postContent: '.post-content',
  codeBlock: '.post-content pre code',
  codeCopyBtn: '.code-copy-btn',
  outcomePill: '.outcome-pill',
  timestamp: '.post-timestamp',

  // Sessions
  sessionPopup: '[data-testid="session-popup"], .session-popup',
  sessionItem: '.session-item',
  sessionActive: '.session-item.active',
  sessionArchived: '.session-item.archived',

  // Settings
  settingsDialog: '[data-testid="settings-dialog"], .settings-dialog',
  settingsNav: '.settings-nav',
  settingsPane: '.settings-pane',
  settingsSpinner: '.settings-loading',
  stepperInput: 'input[type="number"]',

  // Editor
  editorPane: '[data-testid="editor-pane"], .editor-pane',
  editorTab: '.tab-strip .tab',
  editorTabActive: '.tab-strip .tab.active',
  editorDirtyIndicator: '.tab.dirty',
  editorPreview: '.markdown-preview',

  // Workspace
  workspaceExplorer: '[data-testid="workspace"], .workspace-explorer',
  workspaceRow: '.workspace-row',
  workspaceActions: '.workspace-actions',

  // Panes
  popoutButton: '.pane-popout-btn',
  paneHost: '.pane-host',
  vncCanvas: 'canvas.vnc-canvas',
  terminalContainer: '.terminal-container',

  // Status
  agentStatus: '[data-testid="agent-status"], .agent-status',
  reconnectHint: '.reconnect-hint',
  recoveryChip: '.recovery-chip',

  // Hamburger
  hamburgerMenu: '[data-testid="hamburger"], .hamburger-menu, .timeline-menu-btn',

  // Favicon (for assertion)
  favicon: 'link[rel="icon"]',
} as const;
