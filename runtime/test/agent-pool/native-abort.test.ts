import { expect, test } from "bun:test";

import { createNativeAbortHandle } from "../../src/agent-pool/native-abort.js";

test("native abort callback fires only once across caller abort and timeout", async () => {
  const caller = new AbortController();
  let abortCount = 0;
  const handle = createNativeAbortHandle({ signal: caller.signal, timeoutMs: 1 }, () => {
    abortCount += 1;
  });

  expect(handle).toBeTruthy();
  caller.abort();
  await Bun.sleep(5);

  expect(handle!.controller.signal.aborted).toBe(true);
  expect(abortCount).toBe(1);
  handle!.dispose();
});
