import { expect, test } from "bun:test";
import { mkdtempSync, mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { runVmLifecycleScript } from "../../skills/operator/proxmox-management/proxmox-vm-lifecycle-lib.ts";

test("runVmLifecycleScript delegates vm.inspect through the shared workflow client", async () => {
  let seenConfig: Record<string, unknown> | null = null;
  let seenInput: Record<string, unknown> | null = null;
  const stdout: string[] = [];
  const stderr: string[] = [];

  const exitCode = await runVmLifecycleScript("vm.inspect", {
    PVE_VMID: "117",
    PVE_BASE: "https://pve.example.com:8006/api2/json",
    PICLAW_PROXMOX_TOKEN_KEYCHAIN: "proxmox/custom",
    PVE_TIMEOUT_SEC: "7",
  } as NodeJS.ProcessEnv, {
    runWorkflow: async (config, input) => {
      seenConfig = config as Record<string, unknown>;
      seenInput = input as Record<string, unknown>;
      return {
        workflow: "vm.inspect",
        vmid: 117,
        node: "pve",
        result: {
          status: { status: "running" },
          config: { name: "vm117" },
        },
      } as any;
    },
    writeStdout: (text) => stdout.push(text),
    writeStderr: (text) => stderr.push(text),
  });

  expect(exitCode).toBe(0);
  expect(seenConfig).toEqual({
    base_url: "https://pve.example.com:8006/api2/json",
    api_token_keychain: "proxmox/custom",
    allow_insecure_tls: true,
  });
  expect(seenInput).toEqual({
    workflow: "vm.inspect",
    vmid: 117,
    timeout_ms: 7000,
  });
  expect(stdout.join("")).toContain('"name": "vm117"');
  expect(stderr).toHaveLength(0);
});

test("runVmLifecycleScript forwards stop force and explicit TLS preference", async () => {
  let seenConfig: Record<string, unknown> | null = null;
  let seenInput: Record<string, unknown> | null = null;

  const exitCode = await runVmLifecycleScript("vm.stop", {
    PVE_VMID: "204",
    PVE_FORCE: "1",
    PVE_ALLOW_INSECURE_TLS: "0",
  } as NodeJS.ProcessEnv, {
    runWorkflow: async (config, input) => {
      seenConfig = config as Record<string, unknown>;
      seenInput = input as Record<string, unknown>;
      return {
        workflow: "vm.stop",
        vmid: 204,
        node: "pve",
        result: { status: "stopped" },
      } as any;
    },
    writeStdout: () => {},
  });

  expect(exitCode).toBe(0);
  expect(seenConfig).toEqual({
    base_url: "https://proxmox.example.com:8006/api2/json",
    api_token_keychain: "proxmox/piclaw-management-token",
    allow_insecure_tls: false,
  });
  expect(seenInput).toEqual({
    workflow: "vm.stop",
    vmid: 204,
    force: true,
  });
});

test("runVmLifecycleScript rejects missing vmid before invoking the workflow client", async () => {
  let called = false;
  const stderr: string[] = [];

  const exitCode = await runVmLifecycleScript("vm.start", {} as NodeJS.ProcessEnv, {
    runWorkflow: async () => {
      called = true;
      throw new Error("should not be reached");
    },
    writeStderr: (text) => stderr.push(text),
  });

  expect(exitCode).toBe(2);
  expect(called).toBe(false);
  expect(stderr.join("")).toContain("Missing required env var: PVE_VMID");
});

test("vm lifecycle wrappers load and fail through the shared workflow path instead of a missing helper", () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-proxmox-wrapper-"));
  const store = join(base, "store");
  const data = join(base, "data");
  mkdirSync(store, { recursive: true });
  mkdirSync(data, { recursive: true });

  try {
    for (const script of [
      "proxmox-vm-status.ts",
      "proxmox-start-vm.ts",
      "proxmox-stop-vm.ts",
      "proxmox-resume-vm.ts",
    ]) {
      const proc = Bun.spawnSync(
        ["bun", `runtime/skills/operator/proxmox-management/${script}`],
        {
          cwd: "/workspace/.tmp/piclaw-skl-01",
          env: {
            ...process.env,
            PICLAW_WORKSPACE: base,
            PICLAW_STORE: store,
            PICLAW_DATA: data,
            PICLAW_DB_IN_MEMORY: "1",
            PICLAW_KEYCHAIN_KEY: "test-key",
            PVE_VMID: "117",
            PICLAW_PROXMOX_TOKEN_KEYCHAIN: "proxmox/missing",
          },
        },
      );

      const stderr = proc.stderr.toString();
      expect(proc.exitCode).toBe(1);
      expect(stderr).not.toContain("scripts/proxmox.ts");
      expect(stderr).not.toContain("Cannot find module");
    }
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});
