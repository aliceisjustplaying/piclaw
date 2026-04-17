import { expect, test } from "bun:test";

import { WhatsAppChannel } from "../../src/channels/whatsapp.js";

test("WhatsAppChannel.connect rejects when the first scheduled reconnect attempt throws", async () => {
  const channel = new WhatsAppChannel({
    onMessage: () => {},
    onChatMetadata: () => {},
    chatJids: () => new Set(),
  }) as any;

  let connectCalls = 0;
  channel.connectInternal = async (onFirstOpen?: () => void) => {
    connectCalls += 1;
    if (connectCalls === 1) {
      queueMicrotask(() => {
        void channel.connectInternal(onFirstOpen).catch((error: unknown) => {
          channel.settlePendingConnectError(error);
        });
      });
      return;
    }
    throw new Error("scheduled reconnect failed");
  };

  await expect(channel.connect()).rejects.toThrow("scheduled reconnect failed");
  expect(connectCalls).toBe(2);
});
