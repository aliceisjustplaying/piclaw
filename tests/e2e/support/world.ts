import { test as base, expect, Page, BrowserContext } from '@playwright/test';
import { authenticatedContext } from './auth';

/**
 * Custom test fixture that provides an authenticated page.
 */
export const test = base.extend<{ authedPage: Page }>({
  authedPage: async ({ browser }, use) => {
    const baseURL = process.env.PICLAW_E2E_URL || 'http://localhost:3000';
    const context = await authenticatedContext(browser, baseURL);
    const page = await context.newPage();
    await page.goto(baseURL);
    await page.waitForLoadState('networkidle');
    await use(page);
    await context.close();
  },
});

export { expect };
