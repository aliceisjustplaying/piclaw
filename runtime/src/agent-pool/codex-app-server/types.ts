import type { ContextUsageSnapshot } from "../context-usage.js";

export type JsonRpcId = string | number;
export type JsonObject = Record<string, unknown>;

export interface PendingRequest {
  resolve: (value: unknown) => void;
  reject: (error: Error) => void;
}

export type NotificationHandler = (message: JsonObject) => void;
export type CodexThinkingLevel = "off" | "minimal" | "low" | "medium" | "high" | "xhigh";

export type CodexAppServerClientLike = {
  ready(): Promise<void>;
  request(method: string, params: unknown): Promise<unknown>;
  onNotification(handler: NotificationHandler): () => void;
  stop(): void;
};

export interface CodexThreadState {
  threadId: string;
  dynamicToolSignature: string;
}

export type CodexContextUsage = ContextUsageSnapshot;

export interface CodexProviderUsageWindow {
  label: string;
  used_percent: number | null;
  remaining_percent: number | null;
  window_minutes: number | null;
  resets_at: string | null;
  reset_description: string | null;
}

export interface CodexProviderUsageSnapshot {
  provider: "openai-codex";
  source: string;
  plan: string | null;
  fetched_at: string;
  primary: CodexProviderUsageWindow | null;
  secondary: CodexProviderUsageWindow | null;
  credits_remaining: number | null;
  credits_unlimited: boolean;
  extra_usage: null;
  hint_short: string;
}

export interface CodexModelOption {
  id: string;
  label: string;
  name: string | null;
  description?: string | null;
  reasoningEfforts: CodexThinkingLevel[];
  defaultReasoningEffort: CodexThinkingLevel | null;
  contextWindow: number | null;
  isDefault: boolean;
}

export type PiclawBridgeTool = {
  name?: unknown;
  description?: unknown;
  promptSnippet?: unknown;
  parameters?: unknown;
  execute?: unknown;
};

export type PiclawBridgeSession = {
  _toolRegistry?: Map<string, PiclawBridgeTool>;
  getAllTools?: () => PiclawBridgeTool[];
  extensionRunner?: {
    createContext?: () => unknown;
    getAllRegisteredTools?: () => Array<{
      definition?: PiclawBridgeTool;
    }>;
  };
};
