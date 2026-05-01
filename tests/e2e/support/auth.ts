import { Page, BrowserContext } from '@playwright/test';
import { resolveInternalSecret } from '../../runtime/scripts/playwright/web-auth-bootstrap';

export interface PiclawWorld {
  page: Page;
  context: BrowserContext;
  baseURL: string;
}

/**
 * Authenticate against the E2E bootstrap endpoint and return a cookie-bearing context.
 */
export async function authenticatedContext(
  browser: import('@playwright/test').Browser,
  baseURL: string
): Promise<BrowserContext> {
  const secret = resolveInternalSecret();
  const resp = await fetch(`${baseURL}/api/auth/e2e-bootstrap`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret }),
  });
  if (!resp.ok) throw new Error(`E2E auth failed: ${resp.status}`);
  const setCookie = resp.headers.get('set-cookie');
  if (!setCookie) throw new Error('No Set-Cookie from E2E auth');

  const context = await browser.newContext();
  // Parse and set the cookie
  const [nameValue] = setCookie.split(';');
  const eq = nameValue.indexOf('=');
  const name = nameValue.slice(0, eq).trim();
  const value = nameValue.slice(eq + 1).trim();
  await context.addCookies([{ name, value, url: baseURL }]);
  return context;
}
