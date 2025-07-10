import { test } from '@playwright/test';
import { PlaywrightDocsPage } from '../pages/playwright-docs-page';

test('should navigate to Docs and verify Installing Playwright text', async ({ page }) => {
  const docsPage = new PlaywrightDocsPage(page);
  await docsPage.goto();
  await docsPage.goToDocs();
  await docsPage.verifyInstallingPlaywrightVisible();
});
