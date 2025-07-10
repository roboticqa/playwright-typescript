import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDocsPage {
  readonly page: Page;
  readonly docsLink: Locator;
  readonly installingPlaywrightHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.docsLink = page.locator('a', { hasText: 'Get started' });
    this.installingPlaywrightHeader = page.locator('h2', { hasText: 'Installing Playwright' });
  }

  async goto() {
    await this.page.goto('https://playwright.dev/');
  }

  async goToDocs() {
    await this.docsLink.first().click();
  }

  async verifyInstallingPlaywrightVisible() {
    await expect(this.installingPlaywrightHeader).toBeVisible();
  }
}
