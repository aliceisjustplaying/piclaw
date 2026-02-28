import { Type } from "@sinclair/typebox";
import { normalizeModelMatch } from "../agent-control-helpers.js";
const SwitchModelSchema = Type.Object({
    model: Type.String({ description: "Model identifier (provider/modelId or modelId)." }),
});
function parseModelInput(input) {
    const trimmed = input.trim();
    if (!trimmed)
        return { modelId: "" };
    const slashIndex = trimmed.indexOf("/");
    if (slashIndex > 0) {
        return {
            provider: trimmed.slice(0, slashIndex),
            modelId: trimmed.slice(slashIndex + 1),
        };
    }
    return { modelId: trimmed };
}
function formatModelLabel(model) {
    if (!model)
        return null;
    return `${model.provider}/${model.id}`;
}
export function createModelSwitchTool(getSession, modelRegistry) {
    return {
        name: "switch_model",
        label: "switch_model",
        description: "Switch the active model for the current session.",
        parameters: SwitchModelSchema,
        execute: async (_toolCallId, params, _signal, _onUpdate) => {
            const session = getSession();
            if (!session) {
                return {
                    content: [{ type: "text", text: "Session not ready for model switching." }],
                    details: {},
                };
            }
            const { provider, modelId } = parseModelInput(params.model);
            if (!modelId) {
                return {
                    content: [{ type: "text", text: "Provide a model identifier." }],
                    details: {},
                };
            }
            modelRegistry.refresh();
            const models = modelRegistry.getAll();
            let selected;
            if (provider) {
                selected = normalizeModelMatch(models, provider, modelId);
                if (!selected) {
                    return {
                        content: [{ type: "text", text: `Model not found: ${provider}/${modelId}.` }],
                        details: {},
                    };
                }
            }
            else {
                const matches = models.filter((model) => model.id.toLowerCase() === modelId.toLowerCase());
                if (matches.length === 0) {
                    return {
                        content: [{ type: "text", text: `Model not found: ${modelId}.` }],
                        details: {},
                    };
                }
                if (matches.length > 1) {
                    const providers = matches.map((model) => `${model.provider}/${model.id}`).join(", ");
                    return {
                        content: [
                            {
                                type: "text",
                                text: `Model "${modelId}" matches multiple providers: ${providers}. Use provider/modelId.`,
                            },
                        ],
                        details: {},
                    };
                }
                selected = matches[0];
            }
            const previous = session.model;
            try {
                await session.setModel(selected);
            }
            catch (err) {
                const message = err instanceof Error ? err.message : String(err);
                return {
                    content: [{ type: "text", text: message }],
                    details: { previous_model: formatModelLabel(previous) },
                };
            }
            const details = {
                previous_model: formatModelLabel(previous),
                current_model: formatModelLabel(selected),
            };
            const modelChanged = !previous ||
                previous.provider !== selected.provider ||
                previous.id !== selected.id;
            const thinkingNote = session.supportsThinking()
                ? ` Thinking level: ${session.thinkingLevel}.`
                : " Thinking is off for this model.";
            const message = modelChanged
                ? `Model set to ${selected.provider}/${selected.id}.${thinkingNote}`
                : `Model already set to ${selected.provider}/${selected.id}.${thinkingNote}`;
            return {
                content: [{ type: "text", text: message }],
                details,
            };
        },
    };
}
