import { createUuid } from "../../utils/ids.js";

export interface GeneratedWidgetBlock extends Record<string, unknown> {
  type: "generated_widget";
  widget_id: string;
  title: string;
  subtitle: string;
  description: string;
  open_label: string;
  capabilities: string[];
  artifact: {
    kind: "html";
    html: string;
  };
}

export interface GeneratedWidgetBlockOptions {
  html: string;
  widgetId?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  openLabel?: string;
  interactive?: boolean;
}

export interface DashboardWidgetPostOptions {
  chatJid?: string;
  threadId?: number | null;
  text?: string;
  widgetId?: string;
  html?: string;
  title?: string;
  openLabel?: string;
  interactive?: boolean;
}

interface DashboardMessageSender {
  sendMessage(
    chatJid: string,
    text: string,
    options?: {
      threadId?: number | null;
      contentBlocks?: Array<Record<string, unknown>>;
      forceRoot?: boolean;
    }
  ): Promise<void>;
}

const DEFAULT_MESSAGE = "Widget ready. Open to interact.";

/**
 * Create a generated_widget content block from agent-authored HTML.
 * Set `interactive: true` (default) to enable script execution and the piclawWidget bridge.
 */
export function createGeneratedWidgetBlock(options: GeneratedWidgetBlockOptions): GeneratedWidgetBlock {
  const interactive = options.interactive !== false;
  return {
    type: "generated_widget",
    widget_id: options.widgetId || createUuid("widget"),
    title: options.title || "Generated widget",
    subtitle: options.subtitle || "",
    description: options.description || "",
    open_label: options.openLabel || "Open widget",
    capabilities: interactive ? ["interactive"] : [],
    artifact: {
      kind: "html",
      html: options.html,
    },
  };
}

/** @deprecated Use createGeneratedWidgetBlock directly. */
export function createDashboardWidgetBlock(widgetId?: string): GeneratedWidgetBlock {
  return createGeneratedWidgetBlock({
    html: "<p style='padding:24px;color:#94a3b8;'>No widget content provided.</p>",
    widgetId,
    title: "Dashboard widget",
    openLabel: "Open dashboard",
  });
}

export async function postDashboardWidget(sender: DashboardMessageSender, options: DashboardWidgetPostOptions = {}): Promise<void> {
  const chatJid = options.chatJid;
  if (!chatJid) {
    throw new Error("postDashboardWidget requires an explicit chatJid — never post to a synthetic default.");
  }
  const block = options.html
    ? createGeneratedWidgetBlock({
        html: options.html,
        widgetId: options.widgetId,
        title: options.title,
        openLabel: options.openLabel,
        interactive: options.interactive,
      })
    : createDashboardWidgetBlock(options.widgetId);
  await sender.sendMessage(chatJid, options.text || DEFAULT_MESSAGE, {
    ...(options.threadId !== undefined ? { threadId: options.threadId } : {}),
    contentBlocks: [block as Record<string, unknown>],
  });
}
