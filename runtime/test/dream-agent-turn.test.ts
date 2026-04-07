import { afterEach, expect, test } from "bun:test";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "fs";
import { join } from "path";

import { importFresh } from "./helpers.js";

afterEach(() => {
  // no-op: test uses whichever workspace path the current config module has cached
});

test("runDreamAgentTurn reaps a stale dream lock and materializes memory files after the model pass", async () => {
  const config = await import("../src/core/config.js");
  rmSync(join(config.WORKSPACE_DIR, "notes"), { recursive: true, force: true });
  rmSync(join(config.DATA_DIR, "dream-backups"), { recursive: true, force: true });
  rmSync(join(config.DATA_DIR, "workspace-search"), { recursive: true, force: true });
  mkdirSync(join(config.WORKSPACE_DIR, "notes", "memory"), { recursive: true });
  writeFileSync(join(config.WORKSPACE_DIR, "notes", "memory", ".dream.lock"), "999999\n", "utf8");

  const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
  db.initDatabase();
  const dream = await importFresh<typeof import("../src/dream.js")>("../src/dream.js");
  const result = await dream.runDreamAgentTurn({
    chatJid: "web:default",
    days: 2,
    mode: "auto",
    agentPool: {
      runAgent: async () => ({ status: "success", result: "AutoDream complete." }),
      disposeChatSession: async () => {},
    } as any,
  });

  expect(result.skipped).toBe(false);
  expect(existsSync(join(config.WORKSPACE_DIR, "notes", "memory", "MEMORY.md"))).toBe(true);
  expect(existsSync(join(config.WORKSPACE_DIR, "notes", "memory", "current-state.md"))).toBe(true);
  expect(existsSync(join(config.WORKSPACE_DIR, "notes", "memory", "recent-context.md"))).toBe(true);
  expect(result.result).toContain("Memory refreshed after Dream: yes");
});
