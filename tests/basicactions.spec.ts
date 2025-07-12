import { test, expect } from '@playwright/test';
import { setTimeout } from 'timers/promises';
test("Demo web appllication - Basic Actions & Assertions", async ({page})=>{

     // Navigate to URL
     await page.goto("https://seleniumbase.io/demo_page");


     //assertions
     expect(page).toHaveTitle('Web Testing Page');

     // enter text into textbox
     await page.locator("#myTextInput").fill('RoboticQA Academy');

     //enter text into textarea
     await page.locator('#myTextarea').fill("Welcome to Playwright Session")

     // click on button
     await page.getByRole('button').click();

     // clear text
      await page.locator("#myTextInput").clear();

      //check the checkbox
      await page.locator("#checkBox1").check();
      await setTimeout(4000);
       await page.locator("#checkBox1").uncheck();

     // select value from dropdown
     await page.locator('#mySelect').selectOption("Set to 100%");

     //select radio button
     await page.locator("#radioButton2").click();

     // hover on element
     await page.locator('#myDropdown').hover();

     //get text content
     const text=await page.locator('[id*="dropOption"]').allTextContents();
     console.log(text);

     expect(await page.getByText('seleniumbase.com').textContent()).toBe('seleniumbase.com');

     //click on link
     await page.getByText('seleniumbase.com').click();

     //npx playwright codegen https://seleniumbase.io/demo_page

     
});