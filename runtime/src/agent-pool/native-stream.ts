import type { AgentSessionEvent } from "@mariozechner/pi-coding-agent";

import { getAttachmentRegistry } from "./attachments.js";
import type { AgentOutput, RunAgentOptions } from "./contracts.js";

export type NativeStreamState = {
  textStarted: boolean;
  text: string;
  thinkingStarted: boolean;
  thinking: string;
};

export function createNativeStreamState(): NativeStreamState {
  return { textStarted: false, text: "", thinkingStarted: false, thinking: "" };
}

export function emitNativeEvent(onEvent: RunAgentOptions["onEvent"], event: AgentSessionEvent): void {
  onEvent?.(event);
}

export function emitNativeTextDelta(runOptions: RunAgentOptions, delta: string, state: NativeStreamState): void {
  if (!delta) return;
  if (!state.textStarted) {
    emitNativeEvent(runOptions.onEvent, {
      type: "message_update",
      assistantMessageEvent: { type: "text_start", contentIndex: 0, partial: { type: "text", text: "" } },
    } as unknown as AgentSessionEvent);
    state.textStarted = true;
  }
  state.text += delta;
  emitNativeEvent(runOptions.onEvent, {
    type: "message_update",
    assistantMessageEvent: { type: "text_delta", delta, contentIndex: 0, partial: { type: "text", text: state.text } },
  } as unknown as AgentSessionEvent);
}

export function emitNativeThinkingDelta(runOptions: RunAgentOptions, delta: string, state: NativeStreamState): void {
  if (!delta) return;
  if (!state.thinkingStarted) {
    emitNativeEvent(runOptions.onEvent, {
      type: "message_update",
      assistantMessageEvent: { type: "thinking_start", contentIndex: 0, partial: { type: "thinking", thinking: "" } },
    } as unknown as AgentSessionEvent);
    state.thinkingStarted = true;
  }
  state.thinking += delta;
  emitNativeEvent(runOptions.onEvent, {
    type: "message_update",
    assistantMessageEvent: { type: "thinking_delta", delta, contentIndex: 0, partial: { type: "thinking", thinking: state.thinking } },
  } as unknown as AgentSessionEvent);
}

export function finishNativeStreams(runOptions: RunAgentOptions, state: NativeStreamState): void {
  if (state.textStarted) {
    emitNativeEvent(runOptions.onEvent, {
      type: "message_update",
      assistantMessageEvent: { type: "text_end", contentIndex: 0, partial: { type: "text", text: state.text } },
    } as unknown as AgentSessionEvent);
  }
  if (state.thinkingStarted) {
    emitNativeEvent(runOptions.onEvent, {
      type: "message_update",
      assistantMessageEvent: { type: "thinking_end", contentIndex: 0, content: state.thinking },
    } as unknown as AgentSessionEvent);
  }
}

export function emitNativeMessageEnd(runOptions: RunAgentOptions, text: string, errorMessage?: string | null): void {
  emitNativeEvent(runOptions.onEvent, {
    type: "message_end",
    message: {
      role: "assistant",
      content: text ? [{ type: "text", text }] : [],
      stopReason: errorMessage ? "error" : "stop",
      ...(errorMessage ? { errorMessage } : {}),
    },
  } as unknown as AgentSessionEvent);
}

export function nativeOutputWithAttachments(
  chatJid: string,
  status: "success" | "error",
  result: string | null,
  error?: string | null,
): AgentOutput {
  const attachments = getAttachmentRegistry().take(chatJid);
  return {
    status,
    result,
    ...(error ? { error } : {}),
    ...(attachments.length ? { attachments } : {}),
  };
}
