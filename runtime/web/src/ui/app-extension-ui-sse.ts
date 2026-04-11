export interface ExtensionUiToastLike {
  title: string;
  detail: string | null;
  kind: string;
  durationMs?: number;
}

export interface StatusPanelWidgetEventContext {
  isStatusPanelWidgetEvent: boolean;
  eventChatJid: string;
  panelKey: string;
}

export function resolveStatusPanelEventChatJid(
  payload: Record<string, unknown> | null | undefined,
  currentChatJid: string,
): string {
  return typeof payload?.chat_jid === 'string' && payload.chat_jid.trim()
    ? payload.chat_jid.trim()
    : currentChatJid;
}

export function resolveStatusPanelWidgetEventContext(
  eventType: string | null | undefined,
  payload: Record<string, unknown> | null | undefined,
  currentChatJid: string,
): StatusPanelWidgetEventContext {
  return {
    isStatusPanelWidgetEvent: eventType === 'extension_ui_widget' && payload?.options?.surface === 'status-panel',
    eventChatJid: resolveStatusPanelEventChatJid(payload, currentChatJid),
    panelKey: typeof payload?.key === 'string' ? payload.key : '',
  };
}

export function resolveExtensionUiToast(
  eventType: string | null | undefined,
  payload: Record<string, unknown> | null | undefined,
): ExtensionUiToastLike | null {
  if (eventType === 'extension_ui_notify' && typeof payload?.message === 'string') {
    return {
      title: payload.message,
      detail: null,
      kind: typeof payload?.type === 'string' && payload.type.trim() ? payload.type : 'info',
    };
  }

  if (eventType === 'extension_ui_error') {
    const errorValue = payload?.error;
    const errorText = typeof errorValue === 'string'
      ? errorValue
      : (errorValue && typeof errorValue === 'object' && typeof (errorValue as Record<string, unknown>).error === 'string')
        ? (errorValue as Record<string, unknown>).error as string
        : (errorValue ? String(errorValue) : 'Unknown extension error');
    return {
      title: 'Extension UI error',
      detail: errorText,
      kind: 'error',
      durationMs: 5000,
    };
  }

  return null;
}
