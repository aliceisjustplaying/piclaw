import { beforeEach, describe, expect, mock, test } from "bun:test";
import { clearProviderUsageCache, getProviderUsage, peekProviderUsage, warmProviderUsage } from "../../src/agent-pool/provider-usage.js";

function createAuthStorage(credentials: Record<string, unknown>) {
  return {
    get: (provider: string) => credentials[provider],
    refreshOAuthTokenWithLock: async (_provider: string) => null,
  } as any;
}

describe("provider usage", () => {
  beforeEach(() => {
    clearProviderUsageCache();
  });

  test("fetches Codex usage from ChatGPT usage API", async () => {
    const fetchMock = mock(async () => new Response(JSON.stringify({
      plan_type: "pro",
      rate_limit: {
        primary_window: {
          used_percent: 38,
          reset_at: Math.floor(Date.now() / 1000) + 3600,
          limit_window_seconds: 18000,
        },
        secondary_window: {
          used_percent: 59,
          reset_at: Math.floor(Date.now() / 1000) + 86400,
          limit_window_seconds: 604800,
        },
      },
      credits: {
        balance: 123,
        unlimited: false,
      },
    })));
    const previousFetch = globalThis.fetch;
    globalThis.fetch = fetchMock as any;

    try {
      const usage = await getProviderUsage(
        createAuthStorage({
          "openai-codex": {
            type: "oauth",
            access: "token",
            accountId: "acct_123",
            expires: Date.now() + 60_000,
          },
        }),
        "openai-codex"
      );

      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(usage?.provider).toBe("openai-codex");
      expect(usage?.plan).toBe("pro");
      expect(usage?.primary?.label).toBe("5h");
      expect(usage?.primary?.used_percent).toBe(38);
      expect(usage?.primary?.remaining_percent).toBe(62);
      expect(usage?.secondary?.label).toBe("week");
      expect(usage?.credits_remaining).toBe(123);
      expect(usage?.hint_short).toContain("5h 62%");
      expect(usage?.hint_short).toContain("wk 41%");
    } finally {
      globalThis.fetch = previousFetch;
    }
  });

  test("fetches GitHub Copilot usage from internal usage API", async () => {
    const fetchMock = mock(async () => new Response(JSON.stringify({
      copilot_plan: "individual",
      quota_reset_date: new Date(Date.now() + 86400_000).toISOString(),
      quota_snapshots: {
        premium_interactions: {
          entitlement: 100,
          remaining: 70,
          percent_remaining: 70,
          quota_id: "premium",
        },
        chat: {
          entitlement: 500,
          remaining: 400,
          percent_remaining: 80,
          quota_id: "chat",
        },
      },
    })));
    const previousFetch = globalThis.fetch;
    globalThis.fetch = fetchMock as any;

    try {
      const usage = await getProviderUsage(
        createAuthStorage({
          "github-copilot": {
            type: "oauth",
            access: "copilot_access_token",
            refresh: "github_oauth_token",
            expires: Date.now() + 60_000,
          },
        }),
        "github-copilot"
      );

      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(usage?.provider).toBe("github-copilot");
      expect(usage?.plan).toBe("individual");
      expect(usage?.primary?.label).toBe("premium");
      expect(usage?.primary?.remaining_percent).toBe(70);
      expect(usage?.secondary?.label).toBe("chat");
      expect(usage?.secondary?.remaining_percent).toBe(80);
      expect(usage?.hint_short).toContain("premium 70%");
      expect(usage?.hint_short).toContain("chat 80%");
    } finally {
      globalThis.fetch = previousFetch;
    }
  });

  test("warms provider usage in the background and reuses the same in-flight refresh", async () => {
    let release!: () => void;
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });
    const fetchMock = mock(async () => {
      await gate;
      return new Response(JSON.stringify({
        plan_type: "pro",
        rate_limit: {
          primary_window: {
            used_percent: 10,
            reset_at: Math.floor(Date.now() / 1000) + 3600,
            limit_window_seconds: 18000,
          },
        },
        credits: {
          balance: 50,
          unlimited: false,
        },
      }));
    });
    const previousFetch = globalThis.fetch;
    globalThis.fetch = fetchMock as any;

    try {
      const first = warmProviderUsage(
        createAuthStorage({
          "openai-codex": {
            type: "oauth",
            access: "token",
            accountId: "acct_123",
            expires: Date.now() + 60_000,
          },
        }),
        "openai-codex"
      );
      const second = warmProviderUsage(
        createAuthStorage({
          "openai-codex": {
            type: "oauth",
            access: "token",
            accountId: "acct_123",
            expires: Date.now() + 60_000,
          },
        }),
        "openai-codex"
      );

      expect(peekProviderUsage("openai-codex", { allowStale: true })).toBeNull();
      await Promise.resolve();
      expect(fetchMock).toHaveBeenCalledTimes(1);

      release();
      const usage = await first;
      expect(await second).toEqual(usage);
      expect(peekProviderUsage("openai-codex", { allowStale: true })?.provider).toBe("openai-codex");
    } finally {
      globalThis.fetch = previousFetch;
    }
  });

  test("fetches Anthropic usage from the OAuth usage API", async () => {
    const fetchMock = mock(async (input: RequestInfo | URL) => {
      const url = String(input);
      if (url === "https://api.anthropic.com/api/oauth/usage") {
        return new Response(JSON.stringify({
          five_hour: {
            utilization: 35,
            resets_at: new Date(Date.now() + 2 * 3600_000).toISOString(),
          },
          seven_day: {
            utilization: 58,
            resets_at: new Date(Date.now() + 3 * 86400_000).toISOString(),
          },
          extra_usage: {
            is_enabled: true,
            monthly_limit: 2000,
            used_credits: 500,
            utilization: 25,
          },
        }));
      }
      if (url === "https://api.anthropic.com/api/oauth/profile") {
        return new Response(JSON.stringify({ organization: { uuid: "org_123" } }));
      }
      if (url === "https://api.anthropic.com/api/oauth/organizations/org_123/overage_credit_grant") {
        return new Response(JSON.stringify({
          available: true,
          eligible: true,
          granted: true,
          amount_minor_units: 2000,
          currency: "USD",
        }));
      }
      return new Response("not found", { status: 404 });
    });
    const previousFetch = globalThis.fetch;
    globalThis.fetch = fetchMock as any;

    try {
      const usage = await getProviderUsage(
        createAuthStorage({
          anthropic: {
            type: "oauth",
            access: "anthropic_oauth_token",
            expires: Date.now() + 60_000,
          },
        }),
        "anthropic"
      );

      expect(fetchMock).toHaveBeenCalledTimes(3);
      expect(fetchMock.mock.calls[0]?.[0]).toBe("https://api.anthropic.com/api/oauth/usage");
      expect(fetchMock.mock.calls[0]?.[1]).toMatchObject({
        headers: expect.objectContaining({
          Authorization: "Bearer anthropic_oauth_token",
          "anthropic-beta": "oauth-2025-04-20",
        }),
      });
      expect(fetchMock.mock.calls[0]?.[1]?.signal).toBeTruthy();
      expect(usage?.provider).toBe("anthropic");
      expect(usage?.primary?.label).toBe("5h");
      expect(usage?.primary?.remaining_percent).toBe(65);
      expect(usage?.secondary?.label).toBe("week");
      expect(usage?.secondary?.remaining_percent).toBe(42);
      expect(usage?.extra_usage?.hint_short).toBe("extra $5/$20");
      expect(usage?.hint_short).toContain("5h 65%");
      expect(usage?.hint_short).toContain("wk 42%");
      expect(usage?.hint_short).toContain("extra $5/$20");
    } finally {
      globalThis.fetch = previousFetch;
    }
  });

  test("shows overage credit grant balance when extra usage is off", async () => {
    const fetchMock = mock(async (input: RequestInfo | URL) => {
      const url = String(input);
      if (url === "https://api.anthropic.com/api/oauth/usage") {
        return new Response(JSON.stringify({
          five_hour: { utilization: 10, resets_at: new Date(Date.now() + 3600_000).toISOString() },
          seven_day: { utilization: 20, resets_at: new Date(Date.now() + 86400_000).toISOString() },
          extra_usage: {
            is_enabled: false,
            monthly_limit: null,
            used_credits: null,
            utilization: null,
          },
        }));
      }
      if (url === "https://api.anthropic.com/api/oauth/profile") {
        return new Response(JSON.stringify({ organization: { uuid: "org_456" } }));
      }
      if (url === "https://api.anthropic.com/api/oauth/organizations/org_456/overage_credit_grant") {
        return new Response(JSON.stringify({
          available: true,
          eligible: true,
          granted: true,
          amount_minor_units: 15000,
          currency: "GBP",
        }));
      }
      return new Response("not found", { status: 404 });
    });
    const previousFetch = globalThis.fetch;
    globalThis.fetch = fetchMock as any;

    try {
      const usage = await getProviderUsage(
        createAuthStorage({
          anthropic: { type: "oauth", access: "tok", expires: Date.now() + 60_000 },
        }),
        "anthropic"
      );

      expect(usage?.extra_usage?.grant_amount_minor_units).toBe(15000);
      expect(usage?.extra_usage?.grant_currency).toBe("GBP");
      expect(usage?.extra_usage?.hint_short).toBe("extra off (£150.00)");
      expect(usage?.hint_short).toContain("extra off (£150.00)");
    } finally {
      globalThis.fetch = previousFetch;
    }
  });

  test("keeps configured disabled caps visible and only adds the grant source suffix when access was granted", async () => {
    const fetchMock = mock(async (input: RequestInfo | URL) => {
      const url = String(input);
      if (url === "https://api.anthropic.com/api/oauth/usage") {
        return new Response(JSON.stringify({
          five_hour: { utilization: 12, resets_at: new Date(Date.now() + 3600_000).toISOString() },
          seven_day: { utilization: 18, resets_at: new Date(Date.now() + 86400_000).toISOString() },
          extra_usage: {
            is_enabled: false,
            monthly_limit: 0,
            used_credits: 0,
            utilization: 0,
          },
        }));
      }
      if (url === "https://api.anthropic.com/api/oauth/profile") {
        return new Response(JSON.stringify({ organization: { uuid: "org_654" } }));
      }
      if (url === "https://api.anthropic.com/api/oauth/organizations/org_654/overage_credit_grant") {
        return new Response(JSON.stringify({
          available: true,
          eligible: true,
          granted: false,
          amount_minor_units: 2500,
          currency: "USD",
        }));
      }
      return new Response("not found", { status: 404 });
    });
    const previousFetch = globalThis.fetch;
    globalThis.fetch = fetchMock as any;

    try {
      const usage = await getProviderUsage(
        createAuthStorage({
          anthropic: { type: "oauth", access: "tok-zero", expires: Date.now() + 60_000 },
        }),
        "anthropic"
      );

      expect(usage?.source).toBe("anthropic-oauth-usage-api");
      expect(usage?.extra_usage?.monthly_limit_usd).toBe(0);
      expect(usage?.extra_usage?.hint_short).toBe("extra off ($0)");
      expect(usage?.hint_short).toContain("extra off ($0)");
    } finally {
      globalThis.fetch = previousFetch;
    }
  });

  test("keeps Anthropic usage available when the overage grant fetch fails", async () => {
    const fetchMock = mock(async (input: RequestInfo | URL) => {
      const url = String(input);
      if (url === "https://api.anthropic.com/api/oauth/usage") {
        return new Response(JSON.stringify({
          five_hour: { utilization: 25, resets_at: new Date(Date.now() + 3600_000).toISOString() },
          seven_day: { utilization: 40, resets_at: new Date(Date.now() + 86400_000).toISOString() },
        }));
      }
      if (url === "https://api.anthropic.com/api/oauth/profile") {
        return new Response(JSON.stringify({ organization: { uuid: "org_789" } }));
      }
      if (url === "https://api.anthropic.com/api/oauth/organizations/org_789/overage_credit_grant") {
        throw new Error("temporary overage failure");
      }
      return new Response("not found", { status: 404 });
    });
    const previousFetch = globalThis.fetch;
    globalThis.fetch = fetchMock as any;

    try {
      const usage = await getProviderUsage(
        createAuthStorage({
          anthropic: { type: "oauth", access: "tok", expires: Date.now() + 60_000 },
        }),
        "anthropic"
      );

      expect(usage?.provider).toBe("anthropic");
      expect(usage?.primary?.remaining_percent).toBe(75);
      expect(usage?.secondary?.remaining_percent).toBe(60);
      expect(usage?.extra_usage).toBeNull();
    } finally {
      globalThis.fetch = previousFetch;
    }
  });

  test("returns null for unsupported providers", async () => {
    const usage = await getProviderUsage(createAuthStorage({}), "openai");
    expect(usage).toBeNull();
  });
});
