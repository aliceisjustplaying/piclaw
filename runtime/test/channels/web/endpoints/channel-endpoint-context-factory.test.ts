import { describe, expect, test } from "bun:test";
import "../../../helpers.js";
import {
  createWebChannelEndpointContexts,
  type WebChannelEndpointFactoryOptions,
  type WebChannelIdentitySnapshot,
} from "../../../../src/channels/web/endpoints/channel-endpoint-context-factory.js";
import { setChatAgentBackend } from "../../../../src/agent-pool/backend-state.js";

function createIdentitySnapshot(overrides: Partial<WebChannelIdentitySnapshot> = {}): WebChannelIdentitySnapshot {
  return {
    assistantName: "Pi",
    assistantAvatarRaw: "assistant.png",
    agentAvatarUrl: "/avatars/agent",
    userName: "You",
    userAvatarRaw: "user.png",
    userAvatarUrl: "/avatars/user",
    userAvatarBackground: "#000",
    ...overrides,
  };
}

describe("web channel endpoint context factory", () => {
  const contextSnapshot = {
    backend: "pi",
    source: "pi-session-context",
    tokens: 10,
    contextWindow: 100,
    percent: 10,
    model: "openai/gpt-test",
    updatedAt: "2026-05-03T00:00:00.000Z",
    sessionId: null,
  } as const;

  test("reuses stable auth/ui/content/agent-status contexts", async () => {
    const panelCalls: Array<{ turnId: string; panel: "thought" | "draft"; expanded: boolean }> = [];
    const watcherSyncCalls: string[] = [];
    let identity = createIdentitySnapshot();

    const channel = {
      workspaceVisible: false,
      workspaceShowHidden: false,
      json: (payload: unknown, status = 200) => new Response(JSON.stringify(payload), { status }),
      serveStatic: async (relPath: string) => new Response(`static:${relPath}`),
      setPanelExpanded: (turnId: string, panel: "thought" | "draft", expanded: boolean) => {
        panelCalls.push({ turnId, panel, expanded });
      },
      getBuffer: () => ({ text: "draft", totalLines: 1 }),
      getAgentStatus: () => ({ type: "thinking" }),
      uiBridge: {
        handleUiResponse: () => ({ status: "ok" as const }),
      },
      syncWorkspaceWatcher: () => {
        watcherSyncCalls.push("sync");
      },
      authGateway: {
        createTotpContext: () => ({ kind: "totp" }),
        createWebauthnContext: () => ({ kind: "webauthn" }),
        createWebauthnEnrolPageContext: () => ({ kind: "enrol" }),
      },
      agentPool: {
        getContextUsageForChat: async () => contextSnapshot,
        getAvailableModels: async () => ({ current: "openai/gpt-4o", models: ["openai/gpt-4o"] }),
      },
    };

    const options: WebChannelEndpointFactoryOptions = {
      defaultChatJid: "web:default",
      defaultAgentId: "default",
      getIdentitySnapshot: () => identity,
    };

    const contexts = createWebChannelEndpointContexts(
      channel as unknown as Parameters<typeof createWebChannelEndpointContexts>[0],
      options,
    );

    const auth = contexts.auth();
    expect(auth).toBe(contexts.auth());
    expect(auth.createTotpContext()).toEqual({ kind: "totp" });
    expect(auth.createWebauthnContext()).toEqual({ kind: "webauthn" });
    expect(auth.createWebauthnEnrolPageContext()).toEqual({ kind: "enrol" });
    expect(await (await auth.serveStatic("login.html")).text()).toBe("static:login.html");

    const ui = contexts.ui();
    expect(ui).toBe(contexts.ui());
    expect(ui.getWorkspaceVisible()).toBe(false);
    ui.setWorkspaceVisible(true);
    expect(channel.workspaceVisible).toBe(true);
    ui.setWorkspaceShowHidden(true);
    expect(channel.workspaceShowHidden).toBe(true);
    expect(watcherSyncCalls).toEqual(["sync", "sync"]);
    ui.setPanelExpanded("turn-1", "thought", true);
    expect(panelCalls).toEqual([{ turnId: "turn-1", panel: "thought", expanded: true }]);
    expect(ui.handleUiResponse("req-1", { ok: true }).status).toBe("ok");

    const content = contexts.content();
    expect(content).toBe(contexts.content());
    expect(content.defaultChatJid).toBe("web:default");
    expect(content.getBuffer("turn-1", "draft")?.text).toBe("draft");

    const status = contexts.agentStatus();
    expect(status).toBe(contexts.agentStatus());
    expect(status.defaultChatJid).toBe("web:default");
    expect(status.getAgentStatus("web:default")?.type).toBe("thinking");
    expect((await status.getContextUsageForChat("web:default"))?.tokens).toBe(10);
  });

  test("does not use persisted channel context fallback for Claude chats", async () => {
    setChatAgentBackend("web:claude-context", "claude-agent-sdk");
    const channel = {
      json: (payload: unknown, status = 200) => new Response(JSON.stringify(payload), { status }),
      getAgentStatus: () => null,
      recoverStaleInflightRun: () => false,
      getBuffer: () => undefined,
      getContextUsage: () => ({ tokens: 72, contextWindow: 1_000_000, percent: 0.0072 }),
      agentPool: {
        getContextUsageForChat: async () => null,
        getAvailableModels: async () => ({}),
      },
    };

    const contexts = createWebChannelEndpointContexts(
      channel as unknown as Parameters<typeof createWebChannelEndpointContexts>[0],
      {
        defaultChatJid: "web:claude-context",
        defaultAgentId: "default",
        getIdentitySnapshot: () => createIdentitySnapshot(),
      },
    );

    expect(await contexts.agentStatus().getContextUsageForChat("web:claude-context")).toBeNull();
  });

  test("uses typed persisted fallback only for Pi chats", async () => {
    setChatAgentBackend("web:pi-context", "pi");
    const channel = {
      json: (payload: unknown, status = 200) => new Response(JSON.stringify(payload), { status }),
      getAgentStatus: () => null,
      recoverStaleInflightRun: () => false,
      getBuffer: () => undefined,
      getContextUsage: () => contextSnapshot,
      agentPool: {
        getContextUsageForChat: async () => null,
        getAvailableModels: async () => ({}),
      },
    };

    const contexts = createWebChannelEndpointContexts(
      channel as unknown as Parameters<typeof createWebChannelEndpointContexts>[0],
      {
        defaultChatJid: "web:pi-context",
        defaultAgentId: "default",
        getIdentitySnapshot: () => createIdentitySnapshot(),
      },
    );

    expect(await contexts.agentStatus().getContextUsageForChat("web:pi-context")).toEqual(contextSnapshot);
  });

  test("rebuilds agents/avatar contexts from the latest identity snapshot", () => {
    let identity = createIdentitySnapshot();

    const channel = {
      json: (payload: unknown, status = 200) => new Response(JSON.stringify(payload), { status }),
      agentPool: {},
    };

    const contexts = createWebChannelEndpointContexts(
      channel as unknown as Parameters<typeof createWebChannelEndpointContexts>[0],
      {
        defaultChatJid: "web:default",
        defaultAgentId: "default",
        getIdentitySnapshot: () => identity,
      },
    );

    expect(contexts.agents().agentName).toBe("Pi");
    expect(contexts.agents().agentAvatar).toBe("/avatars/agent");
    expect(contexts.avatar().assistantAvatar).toBe("assistant.png");

    identity = createIdentitySnapshot({
      assistantName: "Nova",
      assistantAvatarRaw: "assistant-next.png",
      agentAvatarUrl: "/avatars/agent-next",
      userName: "Operator",
      userAvatarRaw: "user-next.png",
      userAvatarUrl: "/avatars/user-next",
      userAvatarBackground: "#123456",
    });

    const agents = contexts.agents();
    expect(agents.agentName).toBe("Nova");
    expect(agents.agentAvatar).toBe("/avatars/agent-next");
    expect(agents.userName).toBe("Operator");
    expect(agents.userAvatar).toBe("/avatars/user-next");
    expect(agents.userAvatarBackground).toBe("#123456");

    const avatar = contexts.avatar();
    expect(avatar.assistantAvatar).toBe("assistant-next.png");
    expect(avatar.userAvatar).toBe("user-next.png");
  });
});
