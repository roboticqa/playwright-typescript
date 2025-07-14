import { test } from "@playwright/test"
import { setTimeout } from "timers/promises";

test("Mouse Actions Test",async ({page})=>{

    // naviage to application
    await page.goto('https://www.advantageonlineshopping.com/#/');

    // Generic click
    const downArrow=await page.locator('img[src$="arrow.svg"]');
    downArrow.click();

    //Doube llick
    downArrow.dblclick();

    // right click
    downArrow.click({button:'right'});

    // Shift + click
    const popularIteams=page.locator('a[translate="POPULAR_ITEMS"]');
    await popularIteams.click();

    const hpLink=page.locator('#details_16');
    await hpLink.click({ modifiers :['Shift']});

    // Hover on element
    const button=page.locator('#see_offer_btn');
    await button.hover();

    // Ctrl + click
    await hpLink.click({ modifiers :['ControlOrMeta']});

    // Click on top left corner
    downArrow.click({position:{x :0, y:0}});

    // wait for 5 sec
    await setTimeout(5000);

});
