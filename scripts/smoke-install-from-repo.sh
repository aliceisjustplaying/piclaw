#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

cd "$TMP_DIR"
printf '{"name":"piclaw-repo-install-smoke","version":"0.0.0"}\n' > package.json

echo "[smoke] temp dir: $TMP_DIR"
echo "[smoke] installing from: $ROOT_DIR"

bun add "file:$ROOT_DIR"

echo "[smoke] running piclaw --help"
./node_modules/.bin/piclaw --help >/dev/null

echo "[smoke] ok"
