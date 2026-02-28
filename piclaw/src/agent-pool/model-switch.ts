import { Type, type Static } from "@sinclair/typebox";
import type {
  AgentSession,
  AgentToolResult,
  AgentToolUpdateCallback,
  ModelRegistry,
  ToolDefinition,
} from "@mariozechner/pi-coding-agent";
import type { Model } from "@mariozechner/pi-ai";

import { normalizeModelMatch } from "../agent-control-helpers.js";

const SwitchModelSchema = Type.Object({
  model: Type.String({ description: "Model identifier (provider/modelId or modelId)." }),
});

type SwitchModelParams = Static<typeof SwitchModelSchema>;

type SessionProvider = () => AgentSession | undefined;

type SwitchResultDetails = {
  previous_model?: string | null;
  current_model?: string | null;
};

function parseModelInput(input: string): { provider?: string; modelId: string } {
  const trimmed = input.trim();
  if (!trimmed) return { modelId: "" };
  const slashIndex = trimmed.indexOf("/");
  if (slashIndex > 0) {
    return {
      provider: trimmed.slice(0, slashIndex),
      modelId: trimmed.slice(slashIndex + 1),
    };
  }
  return { modelId: trimmed };
}

function formatModelLabel(model: Model<any> | null | undefined): string | null {
  if (!model) return null;
  return `${model.provider}/${model.id}`;
}

export function createModelSwitchTool(
  getSession: SessionProvider,
  modelRegistry: ModelRegistry
): ToolDefinition<typeof SwitchModelSchema, SwitchResultDetails> {
  return {
    name: "switch_model",
    label: "switch_model",
    description: "Switch the active model for the current session.",
    parameters: SwitchModelSchema,
    execute: async (
      _toolCallId: string,
      params: SwitchModelParams,
      _signal?: AbortSignal,
      _onUpdate?: AgentToolUpdateCallback<SwitchResultDetails>
    ): Promise<AgentToolResult<SwitchResultDetails>> => {
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
      let selected: Model<any> | undefined;

      if (provider) {
        selected = normalizeModelMatch(models, provider, modelId);
        if (!selected) {
          return {
            content: [{ type: "text", text: `Model not found: ${provider}/${modelId}.` }],
            details: {},
          };
        }
      } else {
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
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return {
          content: [{ type: "text", text: message }],
          details: { previous_model: formatModelLabel(previous) },
        };
      }

      const details: SwitchResultDetails = {
        previous_model: formatModelLabel(previous),
        current_model: formatModelLabel(selected),
      };

      const modelChanged =
        !previous ||
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
