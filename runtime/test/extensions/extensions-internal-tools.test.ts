/**
 * test/extensions/extensions-internal-tools.test.ts – Tests for internal-tools extension.
 */

import { describe, expect, test } from "bun:test";
import "../helpers.js";
import { createFakeExtensionApi } from "./fake-extension-api.js";

describe("internal-tools extension", () => {
  test("registers list_internal_tools tool", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({ allTools: [] });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    expect(tool).toBeDefined();
    expect(tool.name).toBe("list_internal_tools");
  });

  test("lists tools with brief descriptions and query filter", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({
      allTools: [
        { name: "bash", description: "Run a shell command and return output." },
        { name: "messages", description: "Search, retrieve, add, or delete messages." },
        { name: "list_internal_tools", description: "List available internal tools." },
      ],
      activeTools: ["bash", "list_internal_tools"],
    });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    const all = await tool.execute("t1", {});
    expect(all.content[0].text).toContain("Available tools:");
    // bash line now uses summary from capability registry and includes metadata
    expect(all.content[0].text).toContain("bash");
    expect(all.content[0].text).toContain("[active]");
    expect(all.content[0].text).toContain("{core}");
    expect(all.content[0].text).toContain("[mutating, standard, default]");

    const filtered = await tool.execute("t2", { query: "search" });
    expect(filtered.content[0].text).toContain("filtered");
    expect(filtered.content[0].text).toContain("messages");
    expect(filtered.content[0].text).toContain("{data}");
    expect(filtered.content[0].text).not.toContain("• bash —");
  });

  test("includes parameter schemas when requested", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({ allTools: [
      {
        name: "read",
        description: "Read a file.",
        parameters: { type: "object", properties: { path: { type: "string" } } },
      },
    ] });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    const result = await tool.execute("t3", { include_parameters: true });
    expect(result.details.count).toBe(1);
    expect(result.details.tools[0].parameters).toBeDefined();
    expect(result.details.tools[0].toolsets).toEqual(["core"]);
    expect(result.details.tools[0].active).toBe(false);
  });

  test("intent mode recommends built-in tools with compact reasons", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({
      allTools: [
        { name: "messages", description: "Search, retrieve, add, or delete messages.", promptSnippet: "Inspect recent chat history and retrieve timeline messages" },
        { name: "introspect_sql", description: "Run read-only SQL queries against the messages database.", promptSnippet: "Inspect SQL tables and run read-only database queries" },
        { name: "search_workspace", description: "Search indexed workspace content.", promptSnippet: "Search notes and workspace files" },
      ],
      activeTools: ["messages"],
    });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    const result = await tool.execute("t6", { intent: "inspect recent messages" });
    expect(result.content[0].text).toContain('Recommended tools for "inspect recent messages"');
    expect(result.content[0].text).toContain('messages');
    expect(result.details.intent).toBe('inspect recent messages');
    expect(result.details.recommendations[0].name).toBe('messages');
    expect(result.details.recommendations[0].matched_terms).toContain('messages');
    expect(result.details.recommendations[0].matched_sources.length).toBeGreaterThan(0);
    expect(result.details.recommendations[0].reason_summary).toContain('active');
  });

  test("intent mode can discover extension tools from description and promptSnippet", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({
      allTools: [
        {
          name: "m365_teams_messages",
          description: "Read messages from a Microsoft Teams chat.",
          promptSnippet: "Read Teams chat messages and inspect recent conversation history",
          parameters: { type: "object", properties: { chat_id: { type: "string" } } },
        },
        {
          name: "search_workspace",
          description: "Search indexed workspace content.",
          promptSnippet: "Search notes and workspace files",
        },
      ],
    });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    const result = await tool.execute("t7", { intent: "inspect recent Teams messages", include_parameters: true });
    expect(result.details.recommendations[0].name).toBe("m365_teams_messages");
    expect(result.details.recommendations[0].matched_sources).toContain("promptSnippet");
    expect(result.details.recommendations[0].parameters).toBeDefined();
  });

  test("intent mode falls back cleanly when no strong recommendation exists", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({
      allTools: [
        { name: "messages", description: "Search, retrieve, add, or delete messages." },
        { name: "search_workspace", description: "Search indexed workspace content." },
      ],
    });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    const result = await tool.execute("t8", { intent: "solder gpio pins" });
    expect(result.content[0].text).toContain('No strong recommendation');
    expect(result.details.recommendations).toEqual([]);
  });

  test("intent mode can use structured discovery docs as supplemental signals", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({
      allTools: [
        {
          name: "repo_validate",
          description: "Workspace helper.",
          promptSnippet: "General helper.",
          jdoc: {
            summary: "Packaged repo validation helper.",
            keywords: ["repo hygiene", "stale dist", "import boundaries"],
            verbs: ["check", "validate", "audit"],
            nouns: ["repo", "dist", "imports"],
            aliases: ["repo audit"],
            examples: [{ description: "check stale dist files in the repo" }],
          },
        },
        {
          name: "search_workspace",
          description: "Search indexed workspace content.",
          promptSnippet: "Search notes and workspace files",
        },
      ],
    });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    const result = await tool.execute("t8b", { intent: "check stale dist in the repo" });
    expect(result.details.recommendations[0].name).toBe("repo_validate");
    expect(result.details.recommendations[0].matched_sources.some((source: string) => source.startsWith("jdoc."))).toBe(true);
  });

  test("query mode can match structured discovery doc terms", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({
      allTools: [
        {
          name: "repo_validate",
          description: "Workspace helper.",
          promptSnippet: "General helper.",
          discoveryDoc: {
            aliases: ["repo audit"],
            keywords: ["stale dist", "repo hygiene"],
          },
        },
      ],
    });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    const result = await tool.execute("t8c", { query: "repo audit" });
    expect(result.details.count).toBe(1);
    expect(result.details.tools[0].name).toBe("repo_validate");
  });

  test("details include capability metadata fields", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({
      allTools: [
        { name: "bash", description: "Run a shell command." },
        { name: "read", description: "Read a file." },
        { name: "list_models", description: "List available models." },
        { name: "schedule_task", description: "Schedule a task." },
        { name: "read_attachment", description: "Read attachment." },
        { name: "proxmox", description: "Proxmox API." },
      ],
      activeTools: ["bash", "read", "list_models", "schedule_task", "read_attachment"],
    });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    const result = await tool.execute("t4", {});
    const tools = result.details.tools;

    // bash: mutating, standard, default — summary falls back to tool description
    const bashTool = tools.find((t: any) => t.name === "bash");
    expect(bashTool.kind).toBe("mutating");
    expect(bashTool.weight).toBe("standard");
    expect(bashTool.activation).toBe("default");
    expect(bashTool.summary).toBe("Run a shell command.");  // from tool description

    // read: read-only, lightweight, default
    const readTool = tools.find((t: any) => t.name === "read");
    expect(readTool.kind).toBe("read-only");
    expect(readTool.weight).toBe("lightweight");
    expect(readTool.activation).toBe("default");

    // list_models: read-only, lightweight, default via effective read-only baseline
    const listModelsTool = tools.find((t: any) => t.name === "list_models");
    expect(listModelsTool.kind).toBe("read-only");
    expect(listModelsTool.weight).toBe("lightweight");
    expect(listModelsTool.activation).toBe("default");

    // schedule_task: mutating, standard, default via effective scheduling baseline
    const scheduleTaskTool = tools.find((t: any) => t.name === "schedule_task");
    expect(scheduleTaskTool.kind).toBe("mutating");
    expect(scheduleTaskTool.weight).toBe("standard");
    expect(scheduleTaskTool.activation).toBe("default");

    // read_attachment: read-only, lightweight, default via effective attachment baseline
    const readAttachmentTool = tools.find((t: any) => t.name === "read_attachment");
    expect(readAttachmentTool.kind).toBe("read-only");
    expect(readAttachmentTool.weight).toBe("lightweight");
    expect(readAttachmentTool.activation).toBe("default");

    // proxmox: mixed, standard, on-demand
    const proxmoxTool = tools.find((t: any) => t.name === "proxmox");
    expect(proxmoxTool.kind).toBe("mixed");
    expect(proxmoxTool.weight).toBe("standard");
    expect(proxmoxTool.activation).toBe("on-demand");
  });

  test("unknown tools get sensible default capabilities", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({
      allTools: [
        { name: "custom_tool_xyz", description: "A custom tool." },
      ],
    });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    const result = await tool.execute("t5", {});
    const custom = result.details.tools[0];
    expect(custom.kind).toBe("mixed");
    expect(custom.weight).toBe("standard");
    expect(custom.activation).toBe("on-demand");
    // summary falls back to the tool's own description
    expect(custom.summary).toBe("A custom tool.");
  });
});
