import { spawn } from "node:child_process";
import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

type GoogleCalendarAction = "calendars" | "list" | "create" | "delete";

type GoogleCalendarParams = {
  action?: GoogleCalendarAction;
  start?: string;
  end?: string;
  max?: number;
  calendar?: string;
  summary?: string;
  location?: string;
  description?: string;
  attendees?: string;
  eventId?: string;
  confirm?: boolean | string;
};

const HERMES_GOOGLE_API = process.env.PICLAW_GOOGLE_API_SCRIPT
  || "/workspace/src/hermes-live/skills/productivity/google-workspace/scripts/google_api.py";
const HERMES_GOOGLE_SCRIPTS_DIR = "/workspace/src/hermes-live/skills/productivity/google-workspace/scripts";
const HERMES_PYTHON = process.env.PICLAW_GOOGLE_PYTHON
  || process.env.HERMES_NOTIFY_PYTHON
  || "/workspace/.hermes/venv/bin/python";
const HERMES_HOME = process.env.HERMES_HOME
  || process.env.PICLAW_GOOGLE_HERMES_HOME
  || "/home/agent/.hermes";

function readString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function isConfirmed(value: unknown): boolean {
  return value === true || value === "true" || value === "yes";
}

function isSafeEventId(value: string): boolean {
  return /^[A-Za-z0-9_@.]+$/.test(value);
}

export function buildGoogleCalendarArgsForTests(params: GoogleCalendarParams): string[] {
  const action = readString(params.action) as GoogleCalendarAction | null;
  if (action !== "calendars" && action !== "list" && action !== "create" && action !== "delete") {
    throw new Error("action must be one of: calendars, list, create, delete");
  }

  if (action === "calendars") {
    return ["-c", GOOGLE_CALENDAR_LIST_SCRIPT.replace("__HERMES_GOOGLE_SCRIPTS_DIR__", HERMES_GOOGLE_SCRIPTS_DIR)];
  }

  const args = [HERMES_GOOGLE_API, "calendar", action];
  const calendar = readString(params.calendar) || "primary";

  if (action === "list") {
    if (params.start) args.push("--start", params.start);
    if (params.end) args.push("--end", params.end);
    args.push("--max", String(Math.max(1, Math.min(100, Number(params.max) || 25))));
    args.push("--calendar", calendar);
    return args;
  }

  if (!isConfirmed(params.confirm)) {
    throw new Error(`${action} requires confirm=true`);
  }

  if (action === "create") {
    const summary = readString(params.summary);
    const start = readString(params.start);
    const end = readString(params.end);
    if (!summary) throw new Error("summary is required for create");
    if (!start) throw new Error("start is required for create");
    if (!end) throw new Error("end is required for create");
    args.push("--summary", summary, "--start", start, "--end", end);
    if (params.location) args.push("--location", params.location);
    if (params.description) args.push("--description", params.description);
    if (params.attendees) args.push("--attendees", params.attendees);
    args.push("--calendar", calendar);
    return args;
  }

  const eventId = readString(params.eventId);
  if (!eventId) throw new Error("eventId is required for delete");
  if (!isSafeEventId(eventId)) throw new Error("eventId contains unsupported characters");
  args.push(eventId, "--calendar", calendar);
  return args;
}

async function runGoogleCalendar(params: GoogleCalendarParams): Promise<string> {
  const args = buildGoogleCalendarArgsForTests(params);
  const proc = spawn(HERMES_PYTHON, args, {
    cwd: process.cwd(),
    env: {
      ...process.env,
      HERMES_HOME,
    },
    stdio: ["ignore", "pipe", "pipe"],
  });

  const chunks: Buffer[] = [];
  const errors: Buffer[] = [];
  proc.stdout.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
  proc.stderr.on("data", (chunk) => errors.push(Buffer.from(chunk)));

  const exitCode = await new Promise<number | null>((resolve, reject) => {
    proc.on("error", reject);
    proc.on("close", resolve);
  });

  const stdout = Buffer.concat(chunks).toString("utf8").trim();
  const stderr = Buffer.concat(errors).toString("utf8").trim();
  if (exitCode !== 0) throw new Error(stderr || `google_api.py exited ${exitCode}`);
  return stdout || "{}";
}

export default function register(pi: ExtensionAPI) {
  pi.registerTool({
    name: "google_calendar",
    label: "Google Calendar",
    description:
      "Read and manage Google Calendar events through Hermes' Google Workspace credentials. " +
      "Actions: calendars, list, create, delete. calendars/list are safe for automatic use; create/delete require confirm=true.",
    promptSnippet: "google_calendar: discover calendars and list/create/delete Google Calendar events using ISO 8601 datetimes.",
    parameters: {
      type: "object",
      properties: {
        action: { type: "string", description: "One of: calendars, list, create, delete" },
        start: { type: "string", description: "Start datetime for list/create, ISO 8601" },
        end: { type: "string", description: "End datetime for list/create, ISO 8601" },
        max: { type: "number", description: "Max events for list, default 25" },
        calendar: { type: "string", description: "Calendar ID, default primary" },
        summary: { type: "string", description: "Event title for create" },
        location: { type: "string", description: "Optional event location for create" },
        description: { type: "string", description: "Optional event description for create" },
        attendees: { type: "string", description: "Comma-separated attendee emails for create" },
        eventId: { type: "string", description: "Event ID for delete" },
        confirm: { type: "boolean", description: "Required true for create/delete" },
      },
      required: ["action"],
    },
    async execute(_id, params) {
      const text = await runGoogleCalendar(params as GoogleCalendarParams);
      return { content: [{ type: "text", text }] };
    },
  });
}

const GOOGLE_CALENDAR_LIST_SCRIPT = String.raw`
import json
import sys
sys.path.insert(0, "__HERMES_GOOGLE_SCRIPTS_DIR__")
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from _hermes_home import get_hermes_home

token_path = get_hermes_home() / "google_token.json"
creds = Credentials.from_authorized_user_file(str(token_path))
if creds.expired and creds.refresh_token:
    creds.refresh(Request())
    token_path.write_text(creds.to_json())
service = build("calendar", "v3", credentials=creds)
items = []
page_token = None
while True:
    result = service.calendarList().list(pageToken=page_token, minAccessRole="reader").execute()
    items.extend(result.get("items", []))
    page_token = result.get("nextPageToken")
    if not page_token:
        break
print(json.dumps([{
    "id": item.get("id"),
    "summary": item.get("summary"),
    "primary": item.get("primary", False),
    "accessRole": item.get("accessRole"),
    "selected": item.get("selected", False),
    "hidden": item.get("hidden", False),
    "timeZone": item.get("timeZone"),
} for item in items], indent=2, ensure_ascii=False))
`;
