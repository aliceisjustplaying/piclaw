/**
 * test/utils/task-validation.test.ts – Validation tests for scheduled shell tasks.
 */
import { describe, expect, test, beforeAll, afterAll } from "bun:test";
import { getTestWorkspace, setEnv } from "../helpers.js";
import { validateShellCommand, validateShellCwd } from "../../src/utils/task-validation.js";

let restoreEnv: (() => void) | null = null;

beforeAll(() => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({
    PICLAW_WORKSPACE: ws.workspace,
  });
});

afterAll(() => {
  restoreEnv?.();
});

describe("validateShellCommand", () => {
  test("rejects empty command", () => {
    const res = validateShellCommand("   ");
    expect(res.ok).toBe(false);
  });

  test("rejects newlines", () => {
    const res = validateShellCommand("echo hi\nls");
    expect(res.ok).toBe(false);
  });

  test("rejects destructive commands", () => {
    const res = validateShellCommand("rm -rf /");
    expect(res.ok).toBe(false);
    expect(res.error).toContain("destructive");
  });

  test("accepts normal commands", () => {
    const res = validateShellCommand("echo hi");
    expect(res.ok).toBe(true);
    expect(res.command).toBe("echo hi");
  });
});

describe("validateShellCwd", () => {
  test("defaults to workspace", () => {
    const res = validateShellCwd(undefined);
    expect(res.ok).toBe(true);
    expect(res.cwd).toContain("/workspace");
  });

  test("rejects outside workspace", () => {
    const res = validateShellCwd("/etc");
    expect(res.ok).toBe(false);
  });
});
