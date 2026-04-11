import { expect, test } from "bun:test";
import { createGeneratedWidgetBlock, createDashboardWidgetBlock, postDashboardWidget } from "../../../src/channels/web/dashboard-widget.ts";

test("createGeneratedWidgetBlock creates widget from agent HTML", () => {
  const block = createGeneratedWidgetBlock({
    html: "<h1>Report</h1><script>console.log('hi')</script>",
    title: "My Report",
    openLabel: "View report",
    interactive: true,
  });

  expect(block.type).toBe("generated_widget");
  expect(block.widget_id).toBeTruthy();
  expect(block.title).toBe("My Report");
  expect(block.open_label).toBe("View report");
  expect(block.capabilities).toEqual(["interactive"]);
  expect(block.artifact.kind).toBe("html");
  expect(block.artifact.html).toContain("<h1>Report</h1>");
});

test("createGeneratedWidgetBlock defaults to interactive with generated id", () => {
  const block = createGeneratedWidgetBlock({ html: "<p>test</p>" });
  expect(block.capabilities).toEqual(["interactive"]);
  expect(block.title).toBe("Generated widget");
  expect(block.open_label).toBe("Open widget");
  expect(block.widget_id).toBeTruthy();
});

test("createGeneratedWidgetBlock supports non-interactive mode", () => {
  const block = createGeneratedWidgetBlock({ html: "<p>static</p>", interactive: false });
  expect(block.capabilities).toEqual([]);
});

test("createGeneratedWidgetBlock accepts explicit widgetId", () => {
  const block = createGeneratedWidgetBlock({ html: "<p>x</p>", widgetId: "w-99" });
  expect(block.widget_id).toBe("w-99");
});

test("createDashboardWidgetBlock returns a placeholder (deprecated)", () => {
  const block = createDashboardWidgetBlock("legacy-1");
  expect(block.type).toBe("generated_widget");
  expect(block.widget_id).toBe("legacy-1");
  expect(block.artifact.html).toContain("No widget content");
});

test("postDashboardWidget sends widget with custom HTML", async () => {
  const calls: Array<{ chatJid: string; text: string; options: any }> = [];
  const sender = {
    async sendMessage(chatJid: string, text: string, options?: any) {
      calls.push({ chatJid, text, options });
    },
  };

  await postDashboardWidget(sender, {
    chatJid: "web:test",
    html: "<div>Custom</div>",
    title: "Report",
    text: "Report ready.",
  });

  expect(calls).toHaveLength(1);
  expect(calls[0].chatJid).toBe("web:test");
  expect(calls[0].text).toBe("Report ready.");
  const block = calls[0].options.contentBlocks[0];
  expect(block.title).toBe("Report");
  expect(block.artifact.html).toBe("<div>Custom</div>");
});

test("postDashboardWidget throws without chatJid", async () => {
  const sender = { async sendMessage() {} };
  await expect(postDashboardWidget(sender, {})).rejects.toThrow("requires an explicit chatJid");
});
