import { afterAll, describe, expect, test } from "bun:test";
import "../helpers.js";

import { closeDatabase, getDb, initDatabase } from "../../src/db.js";
import {
  formatBackendLabel,
  getChatAgentBackend,
  getPendingBackendHandoff,
  markBackendHandoffUsed,
  setBackendHandoff,
  setChatAgentBackend,
} from "../../src/agent-pool/backend-state.js";

describe("chat backend state", () => {
  initDatabase();

  afterAll(() => {
    try {
      closeDatabase();
    } catch {
      try {
        getDb().close();
      } catch {
        // best effort cleanup for shared in-memory test DB
      }
    }
  });

  test("persists a per-chat backend choice", () => {
    setChatAgentBackend("web:backend-state-test", "claude");

    expect(getChatAgentBackend("web:backend-state-test")).toBe("claude-agent-sdk");
    expect(formatBackendLabel(getChatAgentBackend("web:backend-state-test"))).toBe("claude");
  });

  test("rejects unknown backend names", () => {
    expect(() => setChatAgentBackend("web:backend-state-test", "wat")).toThrow("Unknown backend");
  });

  test("stores one pending handoff for the target backend", () => {
    setBackendHandoff("web:handoff-state-test", {
      from: "claude-agent-sdk",
      to: "codex-app-server",
      summary: "continue with the current repo work",
    });

    expect(getPendingBackendHandoff("web:handoff-state-test", "claude-agent-sdk")).toBeNull();
    expect(getPendingBackendHandoff("web:handoff-state-test", "codex-app-server")?.summary).toBe("continue with the current repo work");

    markBackendHandoffUsed("web:handoff-state-test");
    expect(getPendingBackendHandoff("web:handoff-state-test", "codex-app-server")).toBeNull();
  });
});
