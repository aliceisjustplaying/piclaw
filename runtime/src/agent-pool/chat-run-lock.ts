const runLocksByChat = new Map<string, Promise<unknown>>();

export async function withAgentChatRunLock<T>(chatJid: string, fn: () => Promise<T>): Promise<T> {
  const previous = runLocksByChat.get(chatJid) ?? Promise.resolve();
  let release!: () => void;
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  const current = previous.catch(() => undefined).then(() => gate);
  runLocksByChat.set(chatJid, current);
  await previous.catch(() => undefined);
  try {
    return await fn();
  } finally {
    release();
    if (runLocksByChat.get(chatJid) === current) runLocksByChat.delete(chatJid);
  }
}

export function resetAgentChatRunLocksForTests(): void {
  runLocksByChat.clear();
}
