#!/usr/bin/env bun
/**
 * SCRIPT_JDOC:
 * {
 *   "summary": "Start management for a packaged skill.",
 *   "aliases": [
 *     "proxmox start vm",
 *     "start vm"
 *   ],
 *   "domains": [
 *     "proxmox",
 *     "vm",
 *     "virtualization"
 *   ],
 *   "verbs": [
 *     "start"
 *   ],
 *   "nouns": [
 *     "management"
 *   ],
 *   "keywords": [
 *     "proxmox",
 *     "management",
 *     "start",
 *     "vm",
 *     "virtualization"
 *   ],
 *   "guidance": [
 *     "Runnable script entrypoint.",
 *     "Packaged script surface."
 *   ],
 *   "examples": [
 *     "start management"
 *   ],
 *   "kind": "mutating",
 *   "weight": "lightweight",
 *   "role": "entrypoint"
 * }
 */
/** Start a Proxmox QEMU VM via the packaged helper. */

import { resolve } from "path";

const vmid = process.env.PVE_VMID?.trim();
if (!vmid) {
  console.error("Missing required env var: PVE_VMID");
  process.exit(2);
}

const args = [resolve(import.meta.dir, "../../scripts/proxmox.ts"), "vm", "start", "--vmid", vmid, "--json"];
if (process.env.PVE_BASE?.trim()) args.push("--base", process.env.PVE_BASE.trim());
if (process.env.PICLAW_PROXMOX_TOKEN_KEYCHAIN?.trim()) args.push("--keychain", process.env.PICLAW_PROXMOX_TOKEN_KEYCHAIN.trim());
if (process.env.PVE_TIMEOUT_SEC?.trim()) {
  const secs = Number(process.env.PVE_TIMEOUT_SEC.trim());
  if (Number.isFinite(secs) && secs > 0) args.push("--timeout-ms", String(Math.round(secs * 1000)));
}

const proc = Bun.spawnSync(["bun", ...args], {
  cwd: process.cwd(),
  stdout: "inherit",
  stderr: "inherit",
  env: process.env,
});
process.exit(proc.exitCode ?? 1);
