import { afterAll, describe, expect, test } from "bun:test";
import "../helpers.js";

import { closeDatabase, getDb, initDatabase } from "../../src/db.js";
import { formatBackendLabel, getChatAgentBackend, setChatAgentBackend } from "../../src/agent-pool/backend-state.js";

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
});
