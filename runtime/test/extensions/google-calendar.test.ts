import { expect, test } from "bun:test";
import { buildGoogleCalendarArgsForTests } from "../../extensions/integrations/google-calendar/index.ts";

test("google_calendar list builds a read-only Hermes command", () => {
  expect(buildGoogleCalendarArgsForTests({
    action: "list",
    start: "2026-05-01T00:00:00Z",
    end: "2026-05-02T00:00:00Z",
    max: 200,
  }).slice(1)).toEqual([
    "calendar",
    "list",
    "--start",
    "2026-05-01T00:00:00Z",
    "--end",
    "2026-05-02T00:00:00Z",
    "--max",
    "100",
    "--calendar",
    "primary",
  ]);
});

test("google_calendar writes require explicit confirmation", () => {
  expect(() => buildGoogleCalendarArgsForTests({
    action: "create",
    summary: "Test",
    start: "2026-05-01T10:00:00Z",
    end: "2026-05-01T10:30:00Z",
  })).toThrow("confirm=true");
});

test("google_calendar rejects flag-like event ids", () => {
  expect(() => buildGoogleCalendarArgsForTests({
    action: "delete",
    eventId: "--help",
    confirm: true,
  })).toThrow("eventId contains unsupported characters");
});

test("google_calendar accepts hyphenated event ids after the first character", () => {
  const args = buildGoogleCalendarArgsForTests({
    action: "delete",
    eventId: "event-123",
    confirm: true,
  });
  expect(args.slice(1)).toEqual(["calendar", "delete", "event-123", "--calendar", "primary"]);
});

test("google_calendar calendars action uses inline discovery script", () => {
  const args = buildGoogleCalendarArgsForTests({ action: "calendars" });
  expect(args[0]).toBe("-c");
  expect(args[1]).toContain("calendarList()");
});
