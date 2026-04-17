import { expect, test } from "bun:test";
import { chmodSync, existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
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
      "-c",
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

test("restart-piclaw keeps the supervisor lock until the child starts and treats SIGTERM exits as graceful", () => {
  const tempDir = mkdtempSync(join(tmpdir(), "piclaw-reload-sigterm-test-"));
  const releasedPath = join(tempDir, "lock-released");
  const attemptsPath = join(tempDir, "attempts.log");
  const pidfilePath = join(tempDir, "piclaw.pid");
  const supervisorPidfilePath = join(tempDir, "piclaw-supervisor.pid");
  const childScriptPath = join(tempDir, "self-term.sh");

  try {
    writeFileSync(
      childScriptPath,
      `#!/usr/bin/env bash
set -euo pipefail
if [ -f "$1" ]; then
  exit 44
fi
echo attempt >> "$2"
kill -TERM "$BASHPID"
`,
      "utf8",
    );
    chmodSync(childScriptPath, 0o755);

    const probe = Bun.spawnSync([
      "bash",
      "-c",
      `
        set -euo pipefail
        export PICLAW_RESTART_TEST_MODE=1
        export PICLAW_RELOAD_ASYNC=0
        source ${JSON.stringify(SCRIPT_PATH)}
        PIDFILE=${JSON.stringify(pidfilePath)}
        SUPERVISOR_PIDFILE=${JSON.stringify(supervisorPidfilePath)}
        tidy_lock() { printf 'released\\n' >> ${JSON.stringify(releasedPath)}; }
        kill_pid() { :; }
        find_port_pid() { return 0; }
        notify_ready() { :; }
        restart_manual bash ${JSON.stringify(childScriptPath)} ${JSON.stringify(releasedPath)} ${JSON.stringify(attemptsPath)}
      `,
    ], {
      stdout: "pipe",
      stderr: "pipe",
    });

    expect(probe.exitCode).toBe(0);
    expect(probe.stdout.toString()).toContain("received SIGTERM/SIGINT");
    expect(readFileSync(attemptsPath, "utf8").trim().split("\n")).toHaveLength(1);
    expect(readFileSync(releasedPath, "utf8")).toContain("released");
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
});

test("restart-piclaw IPC helper writes unique atomic JSON files", () => {
  const tempDir = mkdtempSync(join(tmpdir(), "piclaw-reload-ipc-test-"));
  const dataDir = join(tempDir, "data");
  const messagesDir = join(dataDir, "ipc", "messages");

  try {
    const probe = Bun.spawnSync([
      "bash",
      "-c",
      `
        set -euo pipefail
        export PICLAW_RESTART_TEST_MODE=1
        export PICLAW_DATA=${JSON.stringify(dataDir)}
        export PICLAW_RELOAD_ASYNC=0
        source ${JSON.stringify(SCRIPT_PATH)}
        write_ipc_json_file "$IPC_MESSAGES_DIR" "reload" '{"type":"message","text":"one"}' >/dev/null
        write_ipc_json_file "$IPC_MESSAGES_DIR" "reload" '{"type":"message","text":"two"}' >/dev/null
      `,
    ], {
      stdout: "pipe",
      stderr: "pipe",
    });

    expect(probe.exitCode).toBe(0);

    const files = readdirSync(messagesDir);
    const jsonFiles = files.filter((file) => file.endsWith(".json"));
    expect(jsonFiles).toHaveLength(2);
    expect(files.some((file) => file.startsWith(".tmp."))).toBe(false);
    const payloads = jsonFiles.map((file) => JSON.parse(readFileSync(join(messagesDir, file), "utf8")));
    expect(payloads).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ text: "one" }),
        expect.objectContaining({ text: "two" }),
      ]),
    );
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
});
