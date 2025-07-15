import { test } from "@playwright/test"
import { setTimeout } from "timers/promises";

test("Keyboard shortcuts", async ({ page }) => {

    //navigate to application
    await page.goto("https://roboticqa.com");

    // type text in username
    const searchBox = page.locator("//div[contains(@class,'wf_navbar')]//input[@id='wf_search-form-1']");
    await searchBox.fill("Welcome to Playwright");


    // press enter key
    await searchBox.press('Enter');

    // Press $
    await searchBox.press("$");

    // press Munus
    await searchBox.press("Minus");

    // b
    await searchBox.press("Shift+b");

    //press tab
    await searchBox.press("Tab");

     // press enter key
    await searchBox.press('Enter');

    //Playwright Supported Keyboard Keys
    // F1 – F12 (Function keys)
    // Digit0 – Digit9 (Number keys)
    // KeyA – KeyZ (Alphabet keys)
    // Backquote (`)
    // Minus (-)
    // Equal (=)
    // Backslash (\)
    // Backspace
    // Tab
    // Delete
    // Escape (Esc)
    // ArrowDown (↓)
    // End
    // Enter (Return key)
    // Home
    // Insert
    // PageDown
    // PageUp
    // ArrowRight (→)
    // ArrowUp (↑)

    //Shift , Control , Alt, Meta

    // Shift + ArrowLeft
    await searchBox.press("Shift+ArrowUp");

    // Control + Shift + T
    await searchBox.press("Control + Shift + T");

    //wait
    await setTimeout(5000);

})