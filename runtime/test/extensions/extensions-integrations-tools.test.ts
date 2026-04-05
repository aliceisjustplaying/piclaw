import { describe, expect, test } from "bun:test";

import keychainExtension from "../../extensions/integrations/keychain/index.ts";
import portainerExtension from "../../extensions/integrations/portainer/index.ts";
import proxmoxExtension from "../../extensions/integrations/proxmox/index.ts";
import sshExtension from "../../extensions/integrations/ssh/index.ts";
import { createFakeExtensionApi } from "./fake-extension-api.js";

describe("packaged integration tool extensions", () => {
  test("keychain packaged extension registers keychain", () => {
    const fake = createFakeExtensionApi();
    keychainExtension(fake.api);
    expect(fake.tools.has("keychain")).toBe(true);
  });

  test("ssh packaged extension registers ssh", () => {
    const fake = createFakeExtensionApi();
    sshExtension(fake.api);
    expect(fake.tools.has("ssh")).toBe(true);
  });

  test("proxmox packaged extension registers proxmox and contributes colocated skills", async () => {
    const fake = createFakeExtensionApi();
    proxmoxExtension(fake.api);
    expect(fake.tools.has("proxmox")).toBe(true);

    const discover = fake.handlers.find((entry) => entry.event === "resources_discover");
    expect(discover).toBeTruthy();
    const payload = await discover?.handler({ reason: "startup", cwd: "/workspace" }, {});
    expect(payload?.skillPaths).toEqual([
      expect.stringContaining("/runtime/extensions/integrations/proxmox/skills/proxmox-guest-compare-chart/SKILL.md"),
    ]);
  });

  test("portainer packaged extension registers portainer and contributes colocated skills", async () => {
    const fake = createFakeExtensionApi();
    portainerExtension(fake.api);
    expect(fake.tools.has("portainer")).toBe(true);

    const discover = fake.handlers.find((entry) => entry.event === "resources_discover");
    expect(discover).toBeTruthy();
    const payload = await discover?.handler({ reason: "startup", cwd: "/workspace" }, {});
    expect(payload?.skillPaths).toEqual([
      expect.stringContaining("/runtime/extensions/integrations/portainer/skills/portainer-container-compare-chart/SKILL.md"),
    ]);
  });
});
