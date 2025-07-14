import { test, expect } from "@playwright/test"
import { setTimeout } from "timers/promises";

test('File upload Test',async({page})=>{

    //navigate to application
    await page.goto("https://the-internet.herokuapp.com/upload");

    // click on choose file
    const fileChooserPromise=page.waitForEvent('filechooser');
    await page.locator('#file-upload').click();
    const fileChooser=await fileChooserPromise;
    await fileChooser.setFiles('package.json');

    //click on upload
    await page.locator('#file-submit').click();

    // verify file upload is successfull
    expect(await page.locator('div.example h3').textContent()).toBe(' Uploaded!');

    await setTimeout(5000);

})