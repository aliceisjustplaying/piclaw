import { expect, test } from "bun:test";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { waitFor } from "../helpers.js";

const RUN_SCRIPT = "/workspace/.tmp/piclaw-ops-01/supervisor/run-piclaw.sh";
const SUPERVISOR_CONF = "/workspace/.tmp/piclaw-ops-01/supervisor/conf.d/piclaw.conf";

function processExists(pid: number): boolean {
  const probe = Bun.spawnSync(["bash", "-lc", `kill -0 ${pid}`], { stdout: "pipe", stderr: "pipe" });
  return probe.exitCode === 0;
}

test("supervisor idle wrapper terminates its tail child on SIGTERM", async () => {
  const tempHome = mkdtempSync(join(tmpdir(), "piclaw-supervisor-home-"));
  const proc = Bun.spawn(["bash", RUN_SCRIPT], {
    cwd: "/workspace/.tmp/piclaw-ops-01",
    env: {
      ...process.env,
      HOME: tempHome,
      PICLAW_AUTOSTART: "0",
    },
    stdout: "pipe",
    stderr: "pipe",
  });

  let childPid = 0;

  try {
    await waitFor(() => {
      const result = Bun.spawnSync(["bash", "-lc", `ps -o pid= --ppid ${proc.pid} | head -n 1`], {
        stdout: "pipe",
        stderr: "pipe",
      });
      const value = result.stdout.toString().trim();
      childPid = value ? Number(value) : 0;
      return childPid > 0;
    }, 5000, 100);

    expect(processExists(childPid)).toBe(true);

    proc.kill("SIGTERM");
    const exitCode = await proc.exited;
    expect(exitCode).toBe(0);

    await Bun.sleep(150);
    expect(processExists(childPid)).toBe(false);
  } finally {
    if (!proc.killed) {
      proc.kill("SIGKILL");
      await proc.exited.catch(() => {});
    }
    rmSync(tempHome, { recursive: true, force: true });
  }
});

test("supervisor config stops and kills the full process group", () => {
  const conf = readFileSync(SUPERVISOR_CONF, "utf8");
  expect(conf).toContain("stopasgroup=true");
  expect(conf).toContain("killasgroup=true");
});
