import { Type, type Static } from "@sinclair/typebox";
import type {
  AgentSession,
  AgentToolResult,
  AgentToolUpdateCallback,
  ExtensionContext,
  ToolDefinition,
} from "@mariozechner/pi-coding-agent";
import type { ThinkingLevel } from "@mariozechner/pi-agent-core";

import { THINKING_LEVELS } from "../agent-control-helpers.js";

const SwitchThinkingSchema = Type.Object({
  level: Type.Optional(
    Type.String({
      description: "Thinking level (off/minimal/low/medium/high/xhigh). If omitted, returns current settings.",
    })
  ),
});

type SwitchThinkingParams = Static<typeof SwitchThinkingSchema>;

type SessionProvider = () => AgentSession | undefined;

type ThinkingSwitchDetails = {
  previous_level?: ThinkingLevel;
  current_level?: ThinkingLevel;
  available_levels?: ThinkingLevel[];
  supports_thinking?: boolean;
};

function normalizeLevel(level: string | undefined): string {
  return (level ?? "").trim().toLowerCase();
}

export function createThinkingSwitchTool(
  getSession: SessionProvider
): ToolDefinition<typeof SwitchThinkingSchema, ThinkingSwitchDetails> {
  return {
    name: "switch_thinking",
    label: "switch_thinking",
    description: "Switch the thinking level for the current session.",
    parameters: SwitchThinkingSchema,
    execute: async (
      _toolCallId: string,
      params: SwitchThinkingParams,
      _signal?: AbortSignal,
      _onUpdate?: AgentToolUpdateCallback<ThinkingSwitchDetails>,
      _ctx?: ExtensionContext
    ): Promise<AgentToolResult<ThinkingSwitchDetails>> => {
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
        const details: ThinkingSwitchDetails = {
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

      if (!THINKING_LEVELS.includes(requestedRaw as ThinkingLevel)) {
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
      session.setThinkingLevel(requestedRaw as ThinkingLevel);
      const applied = session.thinkingLevel;

      if (!supportsThinking) {
        const message =
          requestedRaw === "off"
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

      const details: ThinkingSwitchDetails = {
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
