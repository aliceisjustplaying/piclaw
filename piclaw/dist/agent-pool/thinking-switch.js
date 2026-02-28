import { Type } from "@sinclair/typebox";
import { THINKING_LEVELS } from "../agent-control-helpers.js";
const SwitchThinkingSchema = Type.Object({
    level: Type.Optional(Type.String({
        description: "Thinking level (off/minimal/low/medium/high/xhigh). If omitted, returns current settings.",
    })),
});
function normalizeLevel(level) {
    return (level ?? "").trim().toLowerCase();
}
export function createThinkingSwitchTool(getSession) {
    return {
        name: "switch_thinking",
        label: "switch_thinking",
        description: "Switch the thinking level for the current session.",
        parameters: SwitchThinkingSchema,
        execute: async (_toolCallId, params, _signal, _onUpdate, _ctx) => {
            const session = getSession();
            if (!session) {
                return {
                    content: [{ type: "text", text: "Session not ready for thinking changes." }],
                    details: {},
                };
            }
            if (!session.model) {
                return {
                    content: [{ type: "text", text: "No model selected yet. Switch models first." }],
                    details: { supports_thinking: false },
                };
            }
            const available = session.getAvailableThinkingLevels();
            const supportsThinking = session.supportsThinking();
            const requestedRaw = normalizeLevel(params.level);
            if (!requestedRaw) {
                const details = {
                    current_level: session.thinkingLevel,
                    available_levels: available,
                    supports_thinking: supportsThinking,
                };
                const modelLabel = `${session.model.provider}/${session.model.id}`;
                const note = supportsThinking ? "" : " Thinking is off for this model.";
                const message = [
                    `Current model: ${modelLabel}.`,
                    `Current thinking level: ${session.thinkingLevel}.`,
                    `Available thinking levels: ${available.join(", ")}.`,
                ].join("\n") + note;
                return { content: [{ type: "text", text: message }], details };
            }
            if (!THINKING_LEVELS.includes(requestedRaw)) {
                return {
                    content: [
                        {
                            type: "text",
                            text: `Unknown thinking level: ${params.level}. Available: ${available.join(", ")}.`,
                        },
                    ],
                    details: { available_levels: available, supports_thinking: supportsThinking },
                };
            }
            const previousLevel = session.thinkingLevel;
            session.setThinkingLevel(requestedRaw);
            const applied = session.thinkingLevel;
            if (!supportsThinking) {
                const message = requestedRaw === "off"
                    ? "Thinking is off for this model."
                    : "Current model does not support thinking levels. Thinking is off.";
                return {
                    content: [{ type: "text", text: message }],
                    details: {
                        previous_level: previousLevel,
                        current_level: applied,
                        available_levels: available,
                        supports_thinking: supportsThinking,
                    },
                };
            }
            const details = {
                previous_level: previousLevel,
                current_level: applied,
                available_levels: available,
                supports_thinking: supportsThinking,
            };
            const note = applied !== requestedRaw ? ` (requested ${requestedRaw})` : "";
            return {
                content: [{ type: "text", text: `Thinking level set to ${applied}${note}.` }],
                details,
            };
        },
    };
}
