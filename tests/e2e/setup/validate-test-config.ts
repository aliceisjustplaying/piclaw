/**
 * Validate that the E2E test environment is correctly configured.
 * Checks:
 * 1. PiClaw instance is reachable
 * 2. Auth bootstrap endpoint works
 * 3. Provider is configured and responding
 * 4. Agent can process a simple turn
 *
 * Usage:
 *   PICLAW_E2E_URL=http://localhost:3000 PICLAW_INTERNAL_SECRET=... bun run tests/e2e/setup/validate-test-config.ts
 */

const BASE_URL = process.env.PICLAW_E2E_URL || "http://localhost:3000";
const INTERNAL_SECRET = process.env.PICLAW_INTERNAL_SECRET || process.env.PICLAW_WEB_INTERNAL_SECRET || "";

interface CheckResult {
  name: string;
  pass: boolean;
  detail: string;
}

const results: CheckResult[] = [];

function check(name: string, pass: boolean, detail: string) {
  results.push({ name, pass, detail });
  const icon = pass ? "✓" : "✗";
  console.log(`${icon} ${name}: ${detail}`);
}

// --- 1. Instance reachable ---

try {
  const resp = await fetch(BASE_URL, { redirect: "manual" });
  check("Instance reachable", resp.status < 500, `HTTP ${resp.status}`);
} catch (err) {
  check("Instance reachable", false, (err as Error).message);
}

// --- 2. E2E auth bootstrap ---

if (!INTERNAL_SECRET) {
  check("Internal secret", false, "PICLAW_INTERNAL_SECRET not set");
} else {
  try {
    const resp = await fetch(`${BASE_URL}/auth/e2e/bootstrap`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-piclaw-internal-secret": INTERNAL_SECRET,
      },
      body: JSON.stringify({ secret: INTERNAL_SECRET }),
    });
    const setCookie = resp.headers.get("set-cookie");
    check("E2E auth bootstrap", resp.ok && !!setCookie, resp.ok ? "Session cookie received" : `HTTP ${resp.status}`);

    // --- 3. Authenticated API access ---
    if (setCookie) {
      const [nameValue] = setCookie.split(";");
      const eq = nameValue.indexOf("=");
      const cookieName = nameValue.slice(0, eq).trim();
      const cookieValue = nameValue.slice(eq + 1).trim();
      const cookie = `${cookieName}=${cookieValue}`;

      // Check agent status
      try {
        const statusResp = await fetch(`${BASE_URL}/agent/status`, {
          headers: { Cookie: cookie },
        });
        if (statusResp.ok) {
          const status = (await statusResp.json()) as Record<string, unknown>;
          check("Agent status", true, `Model: ${status.model || status.activeModel || "unknown"}`);
        } else {
          check("Agent status", false, `HTTP ${statusResp.status}`);
        }
      } catch (err) {
        check("Agent status", false, (err as Error).message);
      }

      // Check model list
      try {
        const modelsResp = await fetch(`${BASE_URL}/agent/models`, {
          headers: { Cookie: cookie },
        });
        if (modelsResp.ok) {
          const data = (await modelsResp.json()) as { models?: unknown[] };
          const count = Array.isArray(data.models) ? data.models.length : Array.isArray(data) ? data.length : 0;
          check("Models available", count > 0, `${count} models registered`);
        } else {
          check("Models available", false, `HTTP ${modelsResp.status}`);
        }
      } catch (err) {
        check("Models available", false, (err as Error).message);
      }

      // --- 4. Simple agent turn ---
      try {
        const chatResp = await fetch(`${BASE_URL}/agent/chat`, {
          method: "POST",
          headers: {
            Cookie: cookie,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: "Reply with exactly one word: PING",
          }),
        });

        if (chatResp.ok || chatResp.status === 202) {
          check("Agent turn", true, "Message accepted for processing");

          // Wait briefly and check for response via SSE or poll
          await new Promise((r) => setTimeout(r, 10000));

          // Poll timeline for response
          const timelineResp = await fetch(`${BASE_URL}/agent/timeline?limit=5`, {
            headers: { Cookie: cookie },
          });
          if (timelineResp.ok) {
            const timeline = (await timelineResp.json()) as Array<{ role?: string; content?: string }>;
            const agentMessages = timeline.filter((m) => m.role === "assistant" || m.role === "agent");
            check("Agent response", agentMessages.length > 0, agentMessages.length > 0
              ? `Got ${agentMessages.length} response(s)`
              : "No agent response in 10s (may need longer or model config is broken)");
          }
        } else {
          const text = await chatResp.text();
          check("Agent turn", false, `HTTP ${chatResp.status}: ${text.slice(0, 100)}`);
        }
      } catch (err) {
        check("Agent turn", false, (err as Error).message);
      }
    }
  } catch (err) {
    check("E2E auth bootstrap", false, (err as Error).message);
  }
}

// --- Summary ---

console.log("\n--- Summary ---");
const passed = results.filter((r) => r.pass).length;
const total = results.length;
console.log(`${passed}/${total} checks passed`);

if (passed < total) {
  console.log("\nFailing checks:");
  for (const r of results.filter((r) => !r.pass)) {
    console.log(`  ✗ ${r.name}: ${r.detail}`);
  }
  process.exit(1);
}

console.log("\n✓ E2E test environment is ready.");
