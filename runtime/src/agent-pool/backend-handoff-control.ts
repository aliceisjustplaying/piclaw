import { type AgentBackend } from "../core/config.js";
import { formatBackendLabel, setBackendHandoff, type BackendHandoffState } from "./backend-state.js";
import { type AgentOutput, type RunAgentOptions } from "./contracts.js";

export const BACKEND_HANDOFF_PROMPT = [
  "Create a concise backend handoff state for continuing this Piclaw chat in another native agent backend.",
  "Include: current goals, latest user intent, important decisions, files/commands touched, open tasks, constraints, tool/data caveats, and anything the next backend must preserve.",
  "Do not include secrets. Keep it under 1200 words. Return only the handoff state.",
].join("\n");

export function applyPendingBackendHandoff(
  prompt: string,
  options: RunAgentOptions,
  pendingHandoff: BackendHandoffState | null,
): { effectivePrompt: string; runOptions: RunAgentOptions } {
  if (!pendingHandoff) return { effectivePrompt: prompt, runOptions: options };
  const handoffPrompt = [
    "Backend handoff state from the previous native agent backend.",
    `From: ${formatBackendLabel(pendingHandoff.from)}. To: ${formatBackendLabel(pendingHandoff.to)}. Created: ${pendingHandoff.createdAt}.`,
    "Use this as working continuity for the current turn. Piclaw transcript/search tools remain available if details are missing.",
    "",
    pendingHandoff.summary,
  ].join("\n");
  return {
    effectivePrompt: `${handoffPrompt}\n\n${prompt}`,
    runOptions: {
      ...options,
      codexReplayPrompt: options.codexReplayPrompt ? `${handoffPrompt}\n\n${options.codexReplayPrompt}` : undefined,
    },
  };
}

export async function captureBackendHandoffSummary(
  chatJid: string,
  from: AgentBackend,
  to: AgentBackend,
  runAgent: (prompt: string, chatJid: string, options?: RunAgentOptions) => Promise<AgentOutput>,
  onWarn: (message: string, details?: Record<string, unknown>) => void,
): Promise<boolean> {
  if (from === to) return false;
  try {
    const output = await runAgent(BACKEND_HANDOFF_PROMPT, chatJid, {
      timeoutMs: 120_000,
      skipPrePromptCompaction: true,
      skipBackendHandoff: true,
      scheduleIdleAutoCompaction: false,
    });
    const summary = output.status === "success" ? output.result?.trim() : "";
    if (!summary) return false;
    setBackendHandoff(chatJid, { from, to, summary });
    return true;
  } catch (error) {
    onWarn("Failed to capture backend handoff", {
      operation: "agent_backend.capture_handoff_failed",
      chatJid,
      from,
      to,
      err: error,
    });
    return false;
  }
}
