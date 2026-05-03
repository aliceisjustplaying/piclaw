import { resolveApprovalResponse } from "./codex-app-server/notifications.js";
import type { JsonObject } from "./codex-app-server/types.js";

export type {
  CodexAppServerClientLike,
  CodexContextUsage,
  CodexModelOption,
  CodexProviderUsageSnapshot,
  CodexProviderUsageWindow,
  CodexThinkingLevel,
  PiclawBridgeSession,
} from "./codex-app-server/types.js";

export {
  isCodexBridgeToolAllowed,
  isCodexExternalDataToolForTests,
  listCodexBridgeDynamicToolsForTests,
} from "./codex-app-server/bridge-tools.js";
export {
  resolveCodexAppServerRequestForTests,
  setCodexAppServerClientFactoryForTests,
  stopCodexAppServerBackend,
} from "./codex-app-server/client.js";
export {
  cycleCodexAppServerThinkingLevel,
  getCodexAppServerDisplayModelLabel,
  getCodexAppServerFastMode,
  getCodexAppServerModelLabel,
  getCodexAppServerThinkingLevel,
  listCodexAppServerModels,
  peekCodexAppServerProviderUsage,
  resolveCodexAppServerModel,
  setCodexAppServerFastMode,
  setCodexAppServerModel,
  setCodexAppServerThinkingLevel,
  setResolvedCodexAppServerModel,
  warmCodexAppServerProviderUsage,
} from "./codex-app-server/models.js";
export {
  abortCodexAppServerChat,
  compactCodexAppServerChat,
  getCodexAppServerContextUsage,
  hasCodexAppServerThread,
  isCodexAppServerThreadUntrustedForTests,
  markCodexAppServerThreadUntrustedForTests,
  runCodexAppServerPrompt,
  willCodexAppServerStartNewThread,
} from "./codex-app-server/thread-runner.js";

export function resolveCodexAppServerApprovalForTests(method: string, params: JsonObject, threadIsUntrusted: boolean): unknown | null {
  return resolveApprovalResponse(method, params, threadIsUntrusted);
}
