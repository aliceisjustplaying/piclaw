import { expect, test } from "bun:test";
import "../helpers.js";
import { mkdtempSync, readdirSync, readFileSync, rmSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";

const SCRIPT_PATH = "/workspace/.tmp/piclaw-skl-03/runtime/skills/operator/graphite-power-chart/graphite-power-chart.ts";

test("graphite power chart --ipc writes unique atomic IPC files", async () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-graphite-ipc-"));
  const dataDir = join(base, "data");
  const now = Math.floor(Date.now() / 1000);
  const server = Bun.serve({
    port: 0,
    fetch() {
      return Response.json([
        {
          target: "zigbee.server_closet_ups_power.power",
          datapoints: [
            [101, now - 300],
            [111, now],
          ],
        },
      ]);
    },
  });

  try {
    const runChart = async () => {
      const proc = Bun.spawn([
        "bun",
        SCRIPT_PATH,
        "--device",
        "server_closet_ups_power",
        "--base-url",
        `http://127.0.0.1:${server.port}`,
        "--ipc",
      ], {
        env: {
          ...process.env,
          PICLAW_DATA: dataDir,
        },
      });
      expect(await proc.exited).toBe(0);
    };

    await runChart();
    await runChart();

    const messagesDir = join(dataDir, "ipc", "messages");
    const mediaDir = join(dataDir, "ipc", "media");
    const files = readdirSync(messagesDir).filter((file) => file.endsWith(".json"));
    expect(files).toHaveLength(2);
    expect(readdirSync(messagesDir).some((file) => file.startsWith(".tmp."))).toBe(false);
    expect(readdirSync(mediaDir).filter((file) => file.endsWith(".svg"))).toHaveLength(2);
    expect(readdirSync(mediaDir).some((file) => file.startsWith(".tmp."))).toBe(false);

    const payload = JSON.parse(readFileSync(join(messagesDir, files[0]), "utf8"));
    expect(payload).toMatchObject({
      type: "message",
      chatJid: "web:default",
      noNudge: true,
    });
    expect(payload.text).toContain("last 12h");
    expect(payload.media[0]).toMatchObject({
      content_type: "image/svg+xml",
      inline: true,
    });
  } finally {
    server.stop(true);
    rmSync(base, { recursive: true, force: true });
  }
});
