import { expect, test } from "bun:test";

import {
  isCodexBridgeToolAllowed,
  listCodexBridgeDynamicToolsForTests,
  type PiclawBridgeSession,
} from "../../src/agent-pool/codex-app-server-backend.js";

test("Codex bridge filters native Pi tools and exposes Piclaw extension tools", () => {
  expect(isCodexBridgeToolAllowed("bash")).toBe(false);
  expect(isCodexBridgeToolAllowed("edit")).toBe(false);
  expect(isCodexBridgeToolAllowed("m365_mail")).toBe(true);
  expect(isCodexBridgeToolAllowed("schedule_task")).toBe(true);

  const session: PiclawBridgeSession = {
    getAllTools: () => [
      { name: "bash", description: "shell", parameters: {}, execute: async () => ({ content: [] }) },
      { name: "m365_mail", description: "Mail", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
      { name: "schedule_task", description: "Schedule", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
    ],
  };

  expect(listCodexBridgeDynamicToolsForTests(session)).toEqual([
    {
      namespace: "piclaw_tool",
      name: "m365_mail",
      description: "Mail",
      inputSchema: { type: "object" },
    },
    {
      namespace: "piclaw_tool",
      name: "schedule_task",
      description: "Schedule",
      inputSchema: { type: "object" },
    },
  ]);
});

test("Codex bridge exposes extension runner registered tools", () => {
  const session: PiclawBridgeSession = {
    extensionRunner: {
      createContext: () => ({ chatJid: "web:default" }),
      getAllRegisteredTools: () => [
        {
          definition: {
            name: "google_calendar",
            description: "Google Calendar",
            parameters: { type: "object" },
            execute: async () => ({ content: [] }),
          },
        },
        {
          definition: {
            name: "gmail_fetch_email",
            description: "Fetch Gmail message",
            parameters: { type: "object" },
            execute: async () => ({ content: [] }),
          },
        },
      ],
    },
  };

  expect(listCodexBridgeDynamicToolsForTests(session)).toEqual([
    {
      namespace: "piclaw_tool",
      name: "gmail_fetch_email",
      description: "Fetch Gmail message",
      inputSchema: { type: "object" },
    },
    {
      namespace: "piclaw_tool",
      name: "google_calendar",
      description: "Google Calendar",
      inputSchema: { type: "object" },
    },
  ]);
});
