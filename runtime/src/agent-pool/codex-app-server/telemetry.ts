import type { AgentSessionEvent } from "@mariozechner/pi-coding-agent";

import { createLogger } from "../../utils/logger.js";
import type { RunAgentOptions } from "../contracts.js";

export const log = createLogger("agent-pool.codex-app-server");

export function emit(onEvent: RunAgentOptions["onEvent"], event: Record<string, unknown>): void {
  onEvent?.(event as AgentSessionEvent);
}
