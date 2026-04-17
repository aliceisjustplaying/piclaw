import { expect, test } from "bun:test";

import {
  extractConsumerAuthCodeFromRedirect,
  extractImplicitOAuthTokenFromRedirect,
  isM365YoloEnabled,
  resolveGraphAuthMode,
} from "../../extensions/experimental/m365/shared.js";

test("isM365YoloEnabled accepts common truthy spellings", () => {
  expect(isM365YoloEnabled(undefined)).toBe(false);
  expect(isM365YoloEnabled("0")).toBe(false);
  expect(isM365YoloEnabled("1")).toBe(true);
  expect(isM365YoloEnabled("true")).toBe(true);
  expect(isM365YoloEnabled("YES")).toBe(true);
  expect(isM365YoloEnabled(" on ")).toBe(true);
});

test("extractConsumerAuthCodeFromRedirect requires exact redirect origin/path and matching state", () => {
  expect(
    extractConsumerAuthCodeFromRedirect(
      "https://outlook.live.com/mail/?code=abc&state=ok",
      "https://outlook.live.com/mail/",
      "ok",
    ),
  ).toBe("abc");

  expect(
    extractConsumerAuthCodeFromRedirect(
      "https://outlook.live.com/mail/inbox?code=abc&state=ok",
      "https://outlook.live.com/mail/",
      "ok",
    ),
  ).toBeNull();

  expect(
    extractConsumerAuthCodeFromRedirect(
      "https://outlook.live.com/mail/?code=abc&state=wrong",
      "https://outlook.live.com/mail/",
      "ok",
    ),
  ).toBeNull();

  expect(
    extractConsumerAuthCodeFromRedirect(
      "https://outlook.live.com/mail/?error=access_denied&state=ok",
      "https://outlook.live.com/mail/",
      "ok",
    ),
  ).toBeNull();
});

test("extractImplicitOAuthTokenFromRedirect requires exact redirect origin/path and matching state", () => {
  expect(
    extractImplicitOAuthTokenFromRedirect(
      "https://teams.microsoft.com/go#access_token=abc&state=ok",
      "https://teams.microsoft.com/go",
      "ok",
    ),
  ).toBe("abc");

  expect(
    extractImplicitOAuthTokenFromRedirect(
      "https://teams.microsoft.com/go?state=ok#access_token=abc",
      "https://teams.microsoft.com/go",
      "ok",
    ),
  ).toBe("abc");

  expect(
    extractImplicitOAuthTokenFromRedirect(
      "https://teams.microsoft.com/go/elsewhere#access_token=abc&state=ok",
      "https://teams.microsoft.com/go",
      "ok",
    ),
  ).toBeNull();

  expect(
    extractImplicitOAuthTokenFromRedirect(
      "https://teams.microsoft.com/go#access_token=abc&state=wrong",
      "https://teams.microsoft.com/go",
      "ok",
    ),
  ).toBeNull();

  expect(
    extractImplicitOAuthTokenFromRedirect(
      "https://teams.microsoft.com/go#error=access_denied&state=ok",
      "https://teams.microsoft.com/go",
      "ok",
    ),
  ).toBeNull();
});

test("resolveGraphAuthMode hard-fails only for known consumer mode", () => {
  expect(resolveGraphAuthMode({ tenantId: "9188040d-6c67-4c5b-b112-36a304b66dad" })).toEqual({
    useConsumerFlow: true,
    hardFailOnConsumerFailure: true,
  });

  expect(resolveGraphAuthMode({ isConsumer: true })).toEqual({
    useConsumerFlow: true,
    hardFailOnConsumerFailure: true,
  });

  expect(resolveGraphAuthMode({ consumerSessionVisible: true })).toEqual({
    useConsumerFlow: true,
    hardFailOnConsumerFailure: false,
  });

  expect(resolveGraphAuthMode({ consumerSessionVisible: false })).toEqual({
    useConsumerFlow: false,
    hardFailOnConsumerFailure: false,
  });
});
