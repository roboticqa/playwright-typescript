import { test, expect } from '@playwright/test';

test('MCP steps for seleniumbase demo page', async ({ page }) => {
  // 1. Login to https://seleniumbase.io/demo_page
  await page.goto('https://seleniumbase.io/demo_page');

  // 2. Enter text in Text Input Field as "RoboticQA"
  await page.locator('#myTextInput').fill('RoboticQA');

  // 3. Click on "Click Me (Green)" button
  await page.getByRole('button', { name: 'Click Me (Green)' }).click();

  // 4. Select the Radio Button 2
  await page.locator('#radioButton2').click();

  // 5. Select value "Set to 100%" from dropdown "Select Dropdown:"
  await page.locator('#mySelect').selectOption({ label: 'Set to 100%' });

  // Optionally, add assertions here to verify the actions
});
