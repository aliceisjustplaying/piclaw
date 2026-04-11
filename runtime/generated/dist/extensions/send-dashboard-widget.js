/**
 * send-dashboard-widget – post agent-generated widget HTML to the web timeline.
 *
 * The agent always provides the HTML. The widget runs in a sandboxed iframe.
 * Interactive widgets get `window.piclawWidget` with bridge methods.
 */
import { Type } from "@sinclair/typebox";
import { getChatJid } from "../core/chat-context.js";
import { createGeneratedWidgetBlock } from "../channels/web/dashboard-widget.js";
import { postMessagesToolMessage } from "./messages-crud.js";
const SendDashboardWidgetSchema = Type.Object({
    html: Type.String({ description: "Self-contained widget HTML (inline CSS/JS). Rendered in a sandboxed iframe." }),
    content: Type.Optional(Type.String({ description: "Fallback timeline text (shown before the widget is opened)." })),
    title: Type.Optional(Type.String({ description: "Card title in the timeline." })),
    open_label: Type.Optional(Type.String({ description: "Button label (default 'Open widget')." })),
    interactive: Type.Optional(Type.Boolean({ description: "Enable scripts + piclawWidget bridge (default true)." })),
    chat_jid: Type.Optional(Type.String({ description: "Target chat JID (defaults to current chat)." })),
    widget_id: Type.Optional(Type.String({ description: "Stable widget identifier." })),
});
const HINT = `## Dashboard widget posting
Use send_dashboard_widget to post an interactive widget to the PiClaw web timeline.
You must provide \`html\` — a self-contained HTML document fragment with inline CSS and JS.

The widget opens in a floating pane (sandboxed iframe). Interactive widgets (default) get a bridge:

\`\`\`js
// Available as window.piclawWidget inside the widget
piclawWidget.submit({ text: "message" })   // Send text back into the chat
piclawWidget.close({ reason: "done" })      // Dismiss the widget pane
piclawWidget.requestRefresh({ key: "val" }) // Ask host for data (advanced)

// Listen for host responses:
window.addEventListener('piclaw:widget-message', (e) => {
  const payload = e.detail?.payload;  // host state
});
\`\`\`

The \`submit({ text })\` call is the main way to get output from the widget back into the conversation.`;
function isRecord(v) {
    return !!v && typeof v === "object" && !Array.isArray(v);
}
function err(message) {
    return { content: [{ type: "text", text: message }], details: { posted: 0, error: message } };
}
export const sendDashboardWidget = (pi) => {
    pi.on("before_agent_start", async (event) => ({
        systemPrompt: `${event.systemPrompt}\n\n${HINT}`,
    }));
    pi.registerTool({
        name: "send_dashboard_widget",
        label: "send_dashboard_widget",
        description: "Post an interactive widget with agent-authored HTML to the web timeline.",
        promptSnippet: "send_dashboard_widget: post an interactive widget (HTML/CSS/JS) to the floating pane. Use piclawWidget.submit({text}) to return output.",
        parameters: SendDashboardWidgetSchema,
        async execute(_toolCallId, params) {
            const html = typeof params.html === "string" ? params.html.trim() : "";
            if (!html)
                return err("Provide html with the widget content.");
            const ambientChat = getChatJid("");
            const chatJid = params.chat_jid?.trim() || ambientChat || "";
            if (!chatJid)
                return err("Cannot determine the active web chat. Provide chat_jid explicitly.");
            if (!chatJid.startsWith("web:"))
                return err("Generated widgets are only available in the web UI.");
            const block = createGeneratedWidgetBlock({
                html,
                widgetId: params.widget_id?.trim() || undefined,
                title: params.title?.trim(),
                openLabel: params.open_label?.trim(),
                interactive: params.interactive !== false,
            });
            const content = params.content?.trim() || "Widget ready — open to interact.";
            const result = postMessagesToolMessage({ action: "post", type: "agent", chat_jid: chatJid, content, content_blocks: [block] }, chatJid);
            return {
                ...result,
                details: { ...(isRecord(result.details) ? result.details : {}), tool: "send_dashboard_widget", widget_id: block.widget_id, chat_jid: chatJid },
            };
        },
    });
};
