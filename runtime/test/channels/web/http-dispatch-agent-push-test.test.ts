import { describe, expect, test } from "bun:test";

import { handleAgentRoutes } from "../../../src/channels/web/http/dispatch-agent.js";

describe("web http agent dispatch push test", () => {
  test("dispatches the push test route", async () => {
    const previousFlag = process.env.PICLAW_ENABLE_PUSH_TEST;
    process.env.PICLAW_ENABLE_PUSH_TEST = "1";
    const req = new Request("https://example.com/agent/push/test", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: "{}",
    });

    try {
      expect((await handleAgentRoutes({} as any, req, "/agent/push/test", new URL(req.url)))?.status).toBe(400);
    } finally {
      if (typeof previousFlag === "string") {
        process.env.PICLAW_ENABLE_PUSH_TEST = previousFlag;
      } else {
        delete process.env.PICLAW_ENABLE_PUSH_TEST;
      }
    }
  });
});
