import { createUuid } from "../../utils/ids.js";
const DEFAULT_MESSAGE = "Widget ready. Open to interact.";
/**
 * Create a generated_widget content block from agent-authored HTML.
 * Set `interactive: true` (default) to enable script execution and the piclawWidget bridge.
 */
export function createGeneratedWidgetBlock(options) {
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
export function createDashboardWidgetBlock(widgetId) {
    return createGeneratedWidgetBlock({
        html: "<p style='padding:24px;color:#94a3b8;'>No widget content provided.</p>",
        widgetId,
        title: "Dashboard widget",
        openLabel: "Open dashboard",
    });
}
export async function postDashboardWidget(sender, options = {}) {
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
        contentBlocks: [block],
    });
}
