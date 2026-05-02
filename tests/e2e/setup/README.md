# E2E Test Environment Setup

## Prerequisites

1. A running PiClaw instance (local or microvm)
2. The instance's internal secret (for E2E auth bootstrap)
3. (Optional) An OpenCode API key — free-tier models work without one

## Quick Start

### 1. Configure the test instance

```bash
cd tests/e2e

# No API key needed for free-tier models:
bun run setup/configure-test-instance.ts

# Or with a key for paid models:
OPENCODE_API_KEY=oc-your-key bun run setup/configure-test-instance.ts
```

This will:
- Write provider credentials to `~/.pi/agent/auth.json`
- Configure the active model in `~/.pi/agent/models.json`
- Validate API connectivity (model list)
- Run a test completion against `hy3-preview-free`

### 2. Validate the full test environment

```bash
PICLAW_E2E_URL=http://localhost:3000 \
PICLAW_INTERNAL_SECRET=your-secret \
bun run setup/validate-test-config.ts
```

This checks:
- Instance reachability
- E2E auth bootstrap endpoint
- Model availability
- Agent can complete a turn

### 3. Run the tests

```bash
PICLAW_E2E_URL=http://localhost:3000 \
PICLAW_INTERNAL_SECRET=your-secret \
bun run test
```

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `OPENCODE_API_KEY` | No | — | OpenCode API key (free models work without) |
| `OPENCODE_BASE_URL` | No | `https://opencode.ai/zen/v1` | OpenCode ZEN API endpoint |
| `OPENCODE_MODEL` | No | `hy3-preview-free` | Model to use for tests |
| `PICLAW_E2E_URL` | Yes (tests) | `http://localhost:3000` | PiClaw instance URL |
| `PICLAW_INTERNAL_SECRET` | Yes (tests) | — | Instance internal secret for auth |

## OpenCode Free Tier Models

These models require **no API key** and are accessible at `https://opencode.ai/zen/v1`:

| Model | Type | Best for |
|-------|------|----------|
| `minimax-m2.5-free` | Fast, minimal reasoning | **Recommended for E2E** — 38 tokens for simple replies |
| `hy3-preview-free` | Heavy reasoning + content | Alternative — needs ~1000 tokens to finish reasoning |

Note: Free models return both `reasoning` and `content` fields. PiClaw handles this via the standard openai-completions adapter.

## CI Integration

For CI/CD pipelines, set these as secrets:

```yaml
env:
  OPENCODE_API_KEY: ${{ secrets.OPENCODE_API_KEY }}
  PICLAW_E2E_URL: http://localhost:3000
  PICLAW_INTERNAL_SECRET: ${{ secrets.PICLAW_INTERNAL_SECRET }}
```

## Microvm Target

For running against the microvm-ui-test instance:

```bash
PICLAW_E2E_URL=http://microvm-test:3000 \
PICLAW_INTERNAL_SECRET=$(cat /path/to/secret) \
bun run test
```

See the `microvm-ui-test` skill for provisioning a test instance.
