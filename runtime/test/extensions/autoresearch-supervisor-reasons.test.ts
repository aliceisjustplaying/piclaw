import { expect, test } from "bun:test";

import { importFresh } from "../helpers.js";

test("describeAutoresearchTerminalReason humanizes known supervisor reasons", async () => {
  const mod = await importFresh<typeof import("../src/extensions/autoresearch-supervisor.js")>("../src/extensions/autoresearch-supervisor.js");

  expect(mod.describeAutoresearchTerminalReason("process_exited")).toContain("process exited");
  expect(mod.describeAutoresearchTerminalReason("max_iterations_idle")).toContain("max-iteration budget");
  expect(mod.describeAutoresearchTerminalReason("general_idle")).toContain("30 minutes");
  expect(mod.describeAutoresearchTerminalReason("user_stopped")).toBe("Stopped by user request.");
  expect(mod.describeAutoresearchTerminalReason("")).toBeNull();
});

test("resolveAutoresearchIdleOutcome distinguishes complete-vs-stalled idle endings", async () => {
  const mod = await importFresh<typeof import("../src/extensions/autoresearch-supervisor.js")>("../src/extensions/autoresearch-supervisor.js");

  expect(mod.resolveAutoresearchIdleOutcome(true)).toEqual({
    state: "completed",
    reason: "max_iterations_idle",
  });
  expect(mod.resolveAutoresearchIdleOutcome(false)).toEqual({
    state: "failed",
    reason: "general_idle",
  });
});

test("resolveAutoresearchProcessExitState only treats process exit as complete when max iterations were reached", async () => {
  const mod = await importFresh<typeof import("../src/extensions/autoresearch-supervisor.js")>("../src/extensions/autoresearch-supervisor.js");

  expect(mod.resolveAutoresearchProcessExitState({ totalRuns: 0 }, null)).toBe("failed");
  expect(mod.resolveAutoresearchProcessExitState({ totalRuns: 2 }, null)).toBe("failed");
  expect(mod.resolveAutoresearchProcessExitState({ totalRuns: 2 }, 3)).toBe("failed");
  expect(mod.resolveAutoresearchProcessExitState({ totalRuns: 3 }, 3)).toBe("completed");
});
