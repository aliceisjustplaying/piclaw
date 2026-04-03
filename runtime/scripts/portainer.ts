#!/usr/bin/env bun
/**
 * runtime/scripts/portainer.ts – Portainer operator helper for PiClaw.
 *
 * Goals:
 *   - Resolve the Portainer endpoint + API token via the piclaw keychain CLI.
 *   - Provide action-oriented endpoint/stack/container subcommands.
 *   - Avoid putting endpoint URLs and API tokens in shell command invocations.
 *
 * Usage examples:
 *   bun run runtime/scripts/portainer.ts endpoint list
 *   bun run runtime/scripts/portainer.ts stack list --endpoint 2
 *   bun run runtime/scripts/portainer.ts stack file --id 58 --raw
 *   bun run runtime/scripts/portainer.ts stack create-standalone --endpoint 2 --name books --file ./books.yml
 *   bun run runtime/scripts/portainer.ts stack update --endpoint 2 --id 58 --file ./books.yml
 *   bun run runtime/scripts/portainer.ts container list --endpoint 2 --unmanaged
 *   bun run runtime/scripts/portainer.ts container inspect --endpoint 2 --name xmind
 *   bun run runtime/scripts/portainer.ts container compose --endpoint 2 --name xmind --raw
 */

type JsonRecord = Record<string, unknown>;

type KeychainSecret = {
  username: string;
  secret: string;
};

type StackServiceMap = {
  stackId: number;
  stackName: string;
  serviceNames: string[];
  containerNames: string[];
};

type ContainerSummary = JsonRecord & {
  Id?: string;
  Names?: string[];
  Image?: string;
  State?: string;
  Status?: string;
  Ports?: Array<Record<string, unknown>>;
};

const DEFAULT_KEYCHAIN_ENTRY = process.env.PICLAW_PORTAINER_KEYCHAIN || "portainer/relay";
const args = process.argv.slice(2);

function usage(): never {
  console.log(`Usage:
  bun run runtime/scripts/portainer.ts endpoint list [--json]
  bun run runtime/scripts/portainer.ts stack list [--endpoint <id>] [--json]
  bun run runtime/scripts/portainer.ts stack file --id <id> [--raw] [--json]
  bun run runtime/scripts/portainer.ts stack create-standalone --endpoint <id> --name <name> --file <path> [--json]
  bun run runtime/scripts/portainer.ts stack update --endpoint <id> --id <id> --file <path> [--json]
  bun run runtime/scripts/portainer.ts stack delete --endpoint <id> --id <id> [--json]
  bun run runtime/scripts/portainer.ts container list --endpoint <id> [--unmanaged] [--json]
  bun run runtime/scripts/portainer.ts container inspect --endpoint <id> (--id <id>|--name <name>) [--json]
  bun run runtime/scripts/portainer.ts container compose --endpoint <id> (--id <id>|--name <name>) [--raw] [--json]
  bun run runtime/scripts/portainer.ts container delete --endpoint <id> (--id <id>|--name <name>) [--force] [--json]

Options:
  --endpoint <id>      Numeric endpoint ID
  --id <id>            Numeric stack ID or container ID
  --name <name>        Stack name or container name
  --file <path>        Compose file path
  --raw                Print raw stack file content or compose service YAML
  --unmanaged          For container list: only show containers not matched to a Portainer stack
  --force              For container delete: force removal
  --json               Print machine-readable JSON
  --base <url>         Override Portainer base URL (otherwise use keychain username)
  --keychain <name>    Override keychain entry name (default: ${DEFAULT_KEYCHAIN_ENTRY})
`);
  process.exit(1);
}

function getFlagValue(flag: string): string | undefined {
  const index = args.indexOf(flag);
  if (index < 0) return undefined;
  const value = args[index + 1];
  if (!value || value.startsWith("-")) return undefined;
  return value;
}

function hasFlag(flag: string): boolean {
  return args.includes(flag);
}

function parsePositiveIntFlag(flag: string, label: string): number {
  const raw = getFlagValue(flag);
  const value = raw ? parseInt(raw, 10) : NaN;
  if (!Number.isFinite(value) || value <= 0) fail(`Missing or invalid ${label}`);
  return value;
}

function fail(message: string, details?: unknown): never {
  if (hasFlag("--json")) {
    console.error(JSON.stringify({ ok: false, error: message, details: details ?? null }, null, 2));
  } else {
    console.error(`[portainer] ${message}`);
    if (details != null) console.error(details);
  }
  process.exit(1);
}

function print(value: unknown): void {
  if (hasFlag("--json")) {
    console.log(JSON.stringify(value, null, 2));
    return;
  }
  if (typeof value === "string") {
    console.log(value);
    return;
  }
  console.log(JSON.stringify(value, null, 2));
}

function resolvePiclawCli(): string[] {
  const explicit = process.env.PICLAW_CLI;
  if (explicit && explicit.trim()) return [explicit.trim()];
  const which = Bun.which("piclaw");
  if (which) return [which];
  return ["bun", "run", "runtime/src/index.ts"];
}

function parseLastJsonDocument(stdout: string): unknown {
  const trimmed = stdout.trim();
  if (!trimmed) fail("Keychain command returned no output.");

  const chunks = trimmed.split(/\n(?=\{)/g);
  for (let index = chunks.length - 1; index >= 0; index -= 1) {
    const candidate = chunks.slice(index).join("\n").trim();
    try {
      return JSON.parse(candidate);
    } catch {
      // Try earlier split points.
    }
  }

  try {
    return JSON.parse(trimmed);
  } catch (error) {
    fail("Keychain command returned invalid JSON.", error instanceof Error ? error.message : String(error));
  }
}

function runKeychainGet(name: string): KeychainSecret {
  const command = [...resolvePiclawCli(), "keychain", "get", name];
  const proc = Bun.spawnSync(command, {
    cwd: process.cwd(),
    stdout: "pipe",
    stderr: "pipe",
    env: process.env,
  });

  if (proc.exitCode !== 0) {
    fail(`Failed to load keychain entry ${name}`, proc.stderr.toString().trim() || proc.stdout.toString().trim());
  }

  const parsed = parseLastJsonDocument(proc.stdout.toString()) as Partial<KeychainSecret>;
  const username = typeof parsed?.username === "string" ? parsed.username.trim() : "";
  const secret = typeof parsed?.secret === "string" ? parsed.secret.trim() : "";
  if (!username || !secret) fail(`Keychain entry ${name} is missing username/secret fields.`);
  return { username, secret };
}

function normalizeContainerName(name: string): string {
  return name.replace(/^\/+/, "").trim();
}

function formatPorts(ports: Array<Record<string, unknown>> | undefined): string {
  if (!Array.isArray(ports) || ports.length === 0) return "";
  const values = new Set<string>();
  for (const port of ports) {
    const publicPort = port.PublicPort != null ? String(port.PublicPort) : "";
    const privatePort = port.PrivatePort != null ? String(port.PrivatePort) : "";
    const kind = port.Type != null ? String(port.Type) : "tcp";
    if (publicPort) values.add(`${publicPort}->${privatePort}/${kind}`);
    else values.add(`${privatePort}/${kind}`);
  }
  return [...values].join(",");
}

function yamlQuote(value: string): string {
  return JSON.stringify(value);
}

function yamlScalar(value: unknown): string {
  if (typeof value === "string") return yamlQuote(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (value == null) return '""';
  return yamlQuote(String(value));
}

function pushSection(lines: string[], title: string, values: string[]): void {
  if (values.length === 0) return;
  lines.push(`    ${title}:`);
  for (const value of values) lines.push(`      - ${value}`);
}

function parseComposeMappings(content: string, stackId: number, stackName: string): StackServiceMap {
  const serviceNames: string[] = [];
  const containerNames: string[] = [];
  let inServices = false;
  let currentService: string | null = null;

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!inServices) {
      if (trimmed === "services:") inServices = true;
      continue;
    }

    if (!trimmed || trimmed.startsWith("#")) continue;
    if (/^[A-Za-z0-9_.-]+:\s*$/.test(line)) break;

    const serviceMatch = line.match(/^  ([A-Za-z0-9_.-]+):\s*$/);
    if (serviceMatch) {
      currentService = serviceMatch[1];
      serviceNames.push(currentService);
      containerNames.push(currentService);
      continue;
    }

    if (!currentService) continue;

    const containerMatch = line.match(/^\s{4}container_name:\s*(.+?)\s*$/);
    if (containerMatch) {
      const containerName = normalizeContainerName(containerMatch[1]);
      if (containerName && !containerNames.includes(containerName)) containerNames.push(containerName);
    }
  }

  return { stackId, stackName, serviceNames, containerNames };
}

function buildContainerComposeService(container: JsonRecord): string {
  const lines: string[] = ["services:"];
  const rawName = typeof container.Name === "string" ? normalizeContainerName(container.Name) : "container";
  const serviceName = rawName.replace(/[^A-Za-z0-9_.-]+/g, "-") || "container";
  const image = typeof (container.Config as any)?.Image === "string" ? (container.Config as any).Image : "";
  const hostname = typeof container.Config?.Hostname === "string" ? container.Config.Hostname : "";
  const restart = typeof (container.HostConfig as any)?.RestartPolicy?.Name === "string" ? (container.HostConfig as any).RestartPolicy.Name : "";
  const env = Array.isArray((container.Config as any)?.Env) ? ((container.Config as any).Env as unknown[]).filter((entry): entry is string => typeof entry === "string") : [];
  const binds = Array.isArray((container.HostConfig as any)?.Binds) ? ((container.HostConfig as any).Binds as unknown[]).filter((entry): entry is string => typeof entry === "string") : [];
  const portBindings = (container.HostConfig as any)?.PortBindings as Record<string, Array<Record<string, unknown>>> | undefined;

  lines.push(`  ${serviceName}:`);
  if (rawName) lines.push(`    container_name: ${rawName}`);
  if (hostname && hostname !== rawName && !/^[0-9a-f]{12,}$/i.test(hostname)) lines.push(`    hostname: ${hostname}`);
  if (image) lines.push(`    image: ${image}`);
  if (restart && restart !== "no") lines.push(`    restart: ${restart}`);

  const portLines: string[] = [];
  if (portBindings && typeof portBindings === "object") {
    for (const [privatePort, bindings] of Object.entries(portBindings)) {
      const [containerPort, protocol = "tcp"] = privatePort.split("/");
      if (!Array.isArray(bindings) || bindings.length === 0) {
        portLines.push(yamlQuote(protocol === "tcp" ? containerPort : `${containerPort}/${protocol}`));
        continue;
      }
      for (const binding of bindings) {
        const hostPort = typeof binding?.HostPort === "string" ? binding.HostPort : "";
        const hostIp = typeof binding?.HostIp === "string" ? binding.HostIp : "";
        const suffix = protocol === "tcp" ? containerPort : `${containerPort}/${protocol}`;
        if (hostPort && hostIp && hostIp !== "0.0.0.0" && hostIp !== "::") {
          portLines.push(yamlQuote(`${hostIp}:${hostPort}:${suffix}`));
        } else if (hostPort) {
          portLines.push(yamlQuote(`${hostPort}:${suffix}`));
        } else {
          portLines.push(yamlQuote(suffix));
        }
      }
    }
  }
  pushSection(lines, "ports", portLines);
  pushSection(lines, "volumes", binds.map((entry) => yamlQuote(entry)));
  pushSection(lines, "environment", env.map((entry) => yamlScalar(entry)));

  return `${lines.join("\n")}\n`;
}

class PortainerClient {
  constructor(readonly base: string, readonly token: string) {}

  async request(path: string, init?: RequestInit): Promise<unknown> {
    const url = `${this.base.replace(/\/$/, "")}${path}`;
    const response = await fetch(url, {
      ...init,
      headers: {
        "X-API-Key": this.token,
        ...(init?.headers || {}),
      },
      tls: {
        rejectUnauthorized: false,
      },
    } as RequestInit & { tls: { rejectUnauthorized: boolean } });

    const text = await response.text();
    if (!response.ok) {
      throw new Error(text || `HTTP ${response.status} ${response.statusText} for ${path}`);
    }
    if (!text) return null;
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  }

  async listEndpoints(): Promise<JsonRecord[]> {
    const payload = await this.request("/api/endpoints");
    return Array.isArray(payload) ? (payload as JsonRecord[]) : [];
  }

  async listStacks(endpointId?: number): Promise<JsonRecord[]> {
    const payload = await this.request("/api/stacks");
    const stacks = Array.isArray(payload) ? (payload as JsonRecord[]) : [];
    if (!endpointId) return stacks;
    return stacks.filter((entry) => Number(entry.EndpointId) === endpointId);
  }

  async getStackFile(stackId: number): Promise<string> {
    const payload = await this.request(`/api/stacks/${stackId}/file`);
    const content = typeof (payload as any)?.StackFileContent === "string" ? (payload as any).StackFileContent : "";
    if (!content) throw new Error(`Stack ${stackId} returned no stack file content.`);
    return content;
  }

  async createStandaloneStack(endpointId: number, name: string, stackFileContent: string): Promise<JsonRecord> {
    const payload = await this.request(`/api/stacks/create/standalone/string?endpointId=${endpointId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Name: name, StackFileContent: stackFileContent, Env: [] }),
    });
    return (payload ?? {}) as JsonRecord;
  }

  async updateStack(endpointId: number, stackId: number, stackFileContent: string): Promise<JsonRecord> {
    const payload = await this.request(`/api/stacks/${stackId}?endpointId=${endpointId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stackFileContent, env: [] }),
    });
    return (payload ?? {}) as JsonRecord;
  }

  async deleteStack(endpointId: number, stackId: number): Promise<void> {
    await this.request(`/api/stacks/${stackId}?endpointId=${endpointId}`, { method: "DELETE" });
  }

  async listContainers(endpointId: number): Promise<ContainerSummary[]> {
    const payload = await this.request(`/api/endpoints/${endpointId}/docker/containers/json?all=1`);
    return Array.isArray(payload) ? (payload as ContainerSummary[]) : [];
  }

  async inspectContainer(endpointId: number, containerId: string): Promise<JsonRecord> {
    const payload = await this.request(`/api/endpoints/${endpointId}/docker/containers/${encodeURIComponent(containerId)}/json`);
    return (payload ?? {}) as JsonRecord;
  }

  async deleteContainer(endpointId: number, containerId: string, force: boolean): Promise<void> {
    const suffix = force ? "?force=true&v=true" : "";
    await this.request(`/api/endpoints/${endpointId}/docker/containers/${encodeURIComponent(containerId)}${suffix}`, { method: "DELETE" });
  }

  async getStackServiceMaps(endpointId: number): Promise<StackServiceMap[]> {
    const stacks = await this.listStacks(endpointId);
    const mappings: StackServiceMap[] = [];
    for (const stack of stacks) {
      const stackId = Number(stack.Id);
      if (!Number.isFinite(stackId) || stackId <= 0) continue;
      const stackName = typeof stack.Name === "string" ? stack.Name : String(stackId);
      const content = await this.getStackFile(stackId);
      mappings.push(parseComposeMappings(content, stackId, stackName));
    }
    return mappings;
  }
}

async function resolveContainer(client: PortainerClient, endpointId: number): Promise<ContainerSummary> {
  const id = getFlagValue("--id")?.trim();
  const name = getFlagValue("--name")?.trim();
  if (!id && !name) fail("Missing --id or --name");

  const containers = await client.listContainers(endpointId);

  if (id) {
    const byId = containers.find((entry) => typeof entry.Id === "string" && entry.Id.startsWith(id));
    if (byId) return byId;
  }

  if (name) {
    const normalized = normalizeContainerName(name);
    const byName = containers.find((entry) => Array.isArray(entry.Names) && entry.Names.some((value) => normalizeContainerName(value) === normalized));
    if (byName) return byName;
  }

  fail(`Container not found on endpoint ${endpointId}.`);
}

function formatEndpoint(entry: JsonRecord): string {
  return [entry.Id, entry.Name, entry.Type, entry.Status, entry.URL].map((value) => String(value ?? "")).join("\t");
}

function formatStack(entry: JsonRecord): string {
  return [entry.Id, entry.Name, entry.EndpointId, entry.Status, entry.EntryPoint].map((value) => String(value ?? "")).join("\t");
}

function formatContainer(entry: JsonRecord): string {
  return [entry.name, entry.state, entry.stack, entry.image, entry.ports].map((value) => String(value ?? "")).join("\t");
}

async function main(): Promise<void> {
  const [resource, action] = args;
  if (!resource || !action) usage();

  const keychainEntry = getFlagValue("--keychain") || DEFAULT_KEYCHAIN_ENTRY;
  const keychain = runKeychainGet(keychainEntry);
  const base = (getFlagValue("--base") || keychain.username || "").trim();
  if (!base) fail("Missing Portainer base URL.");

  const client = new PortainerClient(base, keychain.secret);

  if (resource === "endpoint" && action === "list") {
    const endpoints = await client.listEndpoints();
    if (hasFlag("--json")) {
      print(endpoints);
      return;
    }
    for (const endpoint of endpoints) console.log(formatEndpoint(endpoint));
    return;
  }

  if (resource === "stack") {
    switch (action) {
      case "list": {
        const endpointId = getFlagValue("--endpoint") ? parsePositiveIntFlag("--endpoint", "--endpoint") : undefined;
        const stacks = await client.listStacks(endpointId);
        if (hasFlag("--json")) {
          print(stacks);
          return;
        }
        for (const stack of stacks) console.log(formatStack(stack));
        return;
      }
      case "file": {
        const stackId = parsePositiveIntFlag("--id", "--id");
        const content = await client.getStackFile(stackId);
        if (hasFlag("--raw") && !hasFlag("--json")) {
          console.log(content);
        } else {
          print(hasFlag("--json") ? { id: stackId, content } : content);
        }
        return;
      }
      case "create-standalone": {
        const endpointId = parsePositiveIntFlag("--endpoint", "--endpoint");
        const name = getFlagValue("--name")?.trim();
        const path = getFlagValue("--file")?.trim();
        if (!name) fail("Missing --name");
        if (!path) fail("Missing --file");
        const stackFileContent = await Bun.file(path).text();
        const result = await client.createStandaloneStack(endpointId, name, stackFileContent);
        print(hasFlag("--json") ? result : `Created stack ${String(result.Name ?? name)} (id=${String(result.Id ?? "?")}) on endpoint ${endpointId}.`);
        return;
      }
      case "update": {
        const endpointId = parsePositiveIntFlag("--endpoint", "--endpoint");
        const stackId = parsePositiveIntFlag("--id", "--id");
        const path = getFlagValue("--file")?.trim();
        if (!path) fail("Missing --file");
        const stackFileContent = await Bun.file(path).text();
        const result = await client.updateStack(endpointId, stackId, stackFileContent);
        print(hasFlag("--json") ? result : `Updated stack ${String(result.Name ?? stackId)} (id=${stackId}) on endpoint ${endpointId}.`);
        return;
      }
      case "delete": {
        const endpointId = parsePositiveIntFlag("--endpoint", "--endpoint");
        const stackId = parsePositiveIntFlag("--id", "--id");
        await client.deleteStack(endpointId, stackId);
        print(hasFlag("--json") ? { ok: true, endpointId, stackId } : `Deleted stack ${stackId} from endpoint ${endpointId}.`);
        return;
      }
      default:
        usage();
    }
  }

  if (resource === "container") {
    switch (action) {
      case "list": {
        const endpointId = parsePositiveIntFlag("--endpoint", "--endpoint");
        const containers = await client.listContainers(endpointId);
        const mappings = await client.getStackServiceMaps(endpointId);
        const ownership = new Map<string, string>();
        for (const mapping of mappings) {
          for (const name of mapping.containerNames) ownership.set(normalizeContainerName(name), mapping.stackName);
        }

        const rows = containers.map((container) => {
          const name = normalizeContainerName(Array.isArray(container.Names) && container.Names[0] ? container.Names[0] : String(container.Id ?? ""));
          return {
            id: String(container.Id ?? ""),
            name,
            image: String(container.Image ?? ""),
            state: String(container.State ?? ""),
            status: String(container.Status ?? ""),
            ports: formatPorts(container.Ports),
            stack: ownership.get(name) || null,
          };
        });

        const filtered = hasFlag("--unmanaged") ? rows.filter((entry) => !entry.stack) : rows;
        if (hasFlag("--json")) {
          print(filtered);
          return;
        }
        for (const row of filtered) console.log(formatContainer(row));
        return;
      }
      case "inspect": {
        const endpointId = parsePositiveIntFlag("--endpoint", "--endpoint");
        const container = await resolveContainer(client, endpointId);
        const id = typeof container.Id === "string" ? container.Id : "";
        if (!id) fail(`Container on endpoint ${endpointId} has no ID.`);
        const payload = await client.inspectContainer(endpointId, id);
        print(payload);
        return;
      }
      case "compose": {
        const endpointId = parsePositiveIntFlag("--endpoint", "--endpoint");
        const container = await resolveContainer(client, endpointId);
        const id = typeof container.Id === "string" ? container.Id : "";
        if (!id) fail(`Container on endpoint ${endpointId} has no ID.`);
        const payload = await client.inspectContainer(endpointId, id);
        const compose = buildContainerComposeService(payload);
        if (hasFlag("--raw") && !hasFlag("--json")) {
          console.log(compose);
        } else {
          print(hasFlag("--json") ? { id, compose } : compose);
        }
        return;
      }
      case "delete": {
        const endpointId = parsePositiveIntFlag("--endpoint", "--endpoint");
        const container = await resolveContainer(client, endpointId);
        const id = typeof container.Id === "string" ? container.Id : "";
        if (!id) fail(`Container on endpoint ${endpointId} has no ID.`);
        await client.deleteContainer(endpointId, id, hasFlag("--force"));
        print(hasFlag("--json") ? { ok: true, endpointId, id } : `Deleted container ${normalizeContainerName(Array.isArray(container.Names) && container.Names[0] ? container.Names[0] : id)} from endpoint ${endpointId}.`);
        return;
      }
      default:
        usage();
    }
  }

  usage();
}

main().catch((error) => {
  fail(error instanceof Error ? error.message : String(error));
});
