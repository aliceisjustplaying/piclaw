import { expect, test } from "bun:test";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const SCRIPT_PATH = "/workspace/.tmp/piclaw-skl-03/runtime/skills/builtin/reload/restart-piclaw.sh";

test("restart-piclaw rejects invalid ready ports without executing shell payloads", () => {
  const tempDir = mkdtempSync(join(tmpdir(), "piclaw-reload-port-test-"));
  const markerPath = join(tempDir, "injected");
  const reloadLog = join(tempDir, "reload.log");
  const dataDir = join(tempDir, "data");

  try {
    const probe = Bun.spawnSync([
      "bash",
      "-lc",
      `
        set -euo pipefail
        export PICLAW_RESTART_TEST_MODE=1
        export PICLAW_RELOAD_ASYNC=0
        export PICLAW_RELOAD_LOG=${JSON.stringify(reloadLog)}
        export PICLAW_DATA=${JSON.stringify(dataDir)}
        source ${JSON.stringify(SCRIPT_PATH)}
        notify_ready ${JSON.stringify(`8080; touch ${markerPath}`)}
      `,
    ], {
      stdout: "pipe",
      stderr: "pipe",
    });

    expect(probe.exitCode).toBe(0);
    expect(probe.stdout.toString()).toContain("Invalid ready port");
    expect(existsSync(markerPath)).toBe(false);
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
});
