import { expect, test } from "bun:test";
import { mkdtempSync, rmSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const TEST_SHELL = process.env.SHELL || "bash";
const ENTRYPOINT_PATH = resolve(import.meta.dir, "../../..", "entrypoint.sh");

// Extract all function definitions from entrypoint up to (not including)
// the top-level `apply_puid_pgid_remap` call so we can source them in tests.
function sourceEntrypointFunctions(): string {
  return `set -euo pipefail
source <(awk '/^apply_puid_pgid_remap$/{exit} {print}' ${JSON.stringify(ENTRYPOINT_PATH)})`;
}

test("validate_supervisor_config passes for a valid minimal config", () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-validate-"));
  try {
    const fakeConf = join(base, "supervisord.conf");
    writeFileSync(fakeConf, "[supervisord]\nnodaemon=true\n", "utf8");

    const proc = Bun.spawnSync(
      [
        TEST_SHELL,
        "-lc",
        `${sourceEntrypointFunctions()}
validate_supervisor_config ${JSON.stringify(fakeConf)}`,
      ],
      { cwd: base, stdout: "pipe", stderr: "pipe" },
    );

    expect(proc.exitCode, proc.stderr.toString() || proc.stdout.toString()).toBe(0);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("validate_supervisor_config fails when [supervisord] section is missing", () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-validate-"));
  try {
    const fakeConf = join(base, "supervisord.conf");
    writeFileSync(fakeConf, "[program:piclaw]\ncommand=/usr/bin/true\n", "utf8");

    const proc = Bun.spawnSync(
      [
        TEST_SHELL,
        "-lc",
        `${sourceEntrypointFunctions()}
validate_supervisor_config ${JSON.stringify(fakeConf)}`,
      ],
      { cwd: base, stdout: "pipe", stderr: "pipe" },
    );

    expect(proc.exitCode).not.toBe(0);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("validate_supervisor_config fails for a nonexistent file", () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-validate-"));
  try {
    const proc = Bun.spawnSync(
      [
        TEST_SHELL,
        "-lc",
        `${sourceEntrypointFunctions()}
validate_supervisor_config /nonexistent/supervisord.conf`,
      ],
      { cwd: base, stdout: "pipe", stderr: "pipe" },
    );

    expect(proc.exitCode).not.toBe(0);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("validate_supervisor_config follows [include] files and fails on bad syntax", () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-validate-"));
  try {
    const confDir = join(base, "conf.d");
    mkdirSync(confDir);
    const fakeConf = join(base, "supervisord.conf");
    const badInclude = join(confDir, "bad.conf");

    // Main config is fine; included file has a syntax error (unbalanced bracket)
    writeFileSync(
      fakeConf,
      `[supervisord]\nnodaemon=true\n\n[include]\nfiles = ${confDir}/*.conf\n`,
      "utf8",
    );
    writeFileSync(badInclude, "[broken\nno_closing_bracket\n", "utf8");

    const proc = Bun.spawnSync(
      [
        TEST_SHELL,
        "-lc",
        `${sourceEntrypointFunctions()}
validate_supervisor_config ${JSON.stringify(fakeConf)}`,
      ],
      { cwd: base, stdout: "pipe", stderr: "pipe" },
    );

    expect(proc.exitCode).not.toBe(0);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("validate_supervisor_config does NOT invoke the supervisord binary", () => {
  // supervisor 4.x -t is --strip_ansi, not --test-config.
  // With nodaemon=true in shipped configs, any supervisord invocation
  // during validation would block the container entrypoint.
  // Validation must be purely config-file parsing — no supervisord exec.
  const base = mkdtempSync(join(tmpdir(), "piclaw-validate-"));
  const fakeSupervisord = join(base, "fake-supervisord.sh");
  const fakeConf = join(base, "supervisord.conf");

  writeFileSync(fakeConf, "[supervisord]\nnodaemon=true\n", "utf8");
  writeFileSync(
    fakeSupervisord,
    `#!/usr/bin/env bash
echo "supervisord invoked unexpectedly by validate_supervisor_config" >&2
exit 99
`,
    "utf8",
  );
  Bun.spawnSync(["chmod", "+x", fakeSupervisord]);

  try {
    const proc = Bun.spawnSync(
      [
        TEST_SHELL,
        "-lc",
        `${sourceEntrypointFunctions()}
SUPERVISORD_BIN=${JSON.stringify(fakeSupervisord)} validate_supervisor_config ${JSON.stringify(fakeConf)}`,
      ],
      { cwd: base, stdout: "pipe", stderr: "pipe" },
    );

    expect(
      proc.exitCode,
      `supervisord binary should not be invoked during validation: ${proc.stderr.toString()}`,
    ).toBe(0);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});
