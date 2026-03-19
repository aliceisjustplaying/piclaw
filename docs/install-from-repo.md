# Install PiClaw directly from the GitHub repository

PiClaw can be installed directly from the repository with Bun:

```bash
bun add -g github:rcarmo/piclaw
```

This is the intended **Docker-free** install path for people who want the
packaged PiClaw CLI and web assets without building from source manually.

## Current scope

This path is intended for:

- Bun users
- Linux and macOS
- direct GitHub-repository installs

It is **not** the same as a development/source install flow.

## What you should get

After install, the goal is that:

- `piclaw` is available in PATH
- the CLI runs without a manual build
- bundled web assets are already present
- bundled extensions/viewers required by normal runtime behavior are included

## Notes

- This path is Bun-first. npm parity is not part of the initial scope.
- The published GHCR image remains the main documented production runtime.
- If repo-install behavior differs slightly from the published package layout, those differences should stay small and documented.
