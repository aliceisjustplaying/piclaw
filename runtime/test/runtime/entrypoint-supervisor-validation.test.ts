import { expect, test } from "bun:test";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const TEST_SHELL = process.env.SHELL || "bash";
const ENTRYPOINT_PATH = resolve(import.meta.dir, "../../..", "entrypoint.sh");

test("validate_supervisor_config does not pass -n to supervisord", () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-entrypoint-validate-"));
  const fakeSupervisord = join(base, "fake-supervisord.sh");
  const fakeConf = join(base, "supervisord.conf");
  const argsFile = join(base, "supervisord-args.log");

  writeFileSync(fakeConf, "[supervisord]\nnodaemon=true\n", "utf8");
  writeFileSync(
    fakeSupervisord,
    `#!/usr/bin/env bash
set -euo pipefail
printf '%s\n' "$@" > ${JSON.stringify(argsFile)}
for arg in "$@"; do
  if [ "$arg" = "-n" ]; then
    echo 'unexpected -n during validation' >&2
    exit 99
  fi
done
exit 0
`,
    "utf8",
  );
  Bun.spawnSync(["chmod", "+x", fakeSupervisord]);

  try {
    const proc = Bun.spawnSync(
      [
        TEST_SHELL,
        "-lc",
        `set -euo pipefail
source <(awk '/^apply_puid_pgid_remap$/{exit} {print}' ${JSON.stringify(ENTRYPOINT_PATH)})
SUPERVISORD_BIN=${JSON.stringify(fakeSupervisord)}
validate_supervisor_config ${JSON.stringify(fakeConf)}
`,
      ],
      {
        cwd: base,
        stdout: "pipe",
        stderr: "pipe",
      },
    );

    expect(proc.exitCode, proc.stderr.toString() || proc.stdout.toString()).toBe(0);
    const args = readFileSync(argsFile, "utf8");
    expect(args).toContain("-c");
    expect(args).toContain(fakeConf);
    expect(args).toContain("-t");
    expect(args).not.toContain("-n");
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});
