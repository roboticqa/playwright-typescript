import { test } from "@playwright/test"

test('Page Screenshot', async ({page})=>{

    await page.goto('https://playwright.dev/');
    // await page.goto('https://seleniumbase.io/demo_page');
    // await page.locator('#myTextInput').focus();

    const header=await page.locator('.navbar__inner');
    const button=await page.locator('.getStarted_Sjon');
    // Page screenshot
    await page.screenshot({ path: 'screenshot1.jpg'});


    // Full page screenshot
    await page.screenshot({ 
        path: 'screenshot2.jpg',
        fullPage: true
    });

    // Element screenshot
    await header.screenshot({ path: 'screenshot3.jpg'});

    // animation - default allow
    await page.screenshot({ 
        path: 'screenshot4.jpg',
        animations: "disabled"
    });

    //caret default - hide
    await page.screenshot({ 
        path: 'screenshot6.jpg',
        caret: "initial"
    })

    // clip
    await page.screenshot({ 
        path: 'screenshot7.jpg',
        clip: {
            x:100,
            y:100,
            width:500,
            height:500
        }
    })

    //mask
    await page.screenshot({
         path: 'screenshot8.jpg',
         mask: [button, header]
        });

        //maskcolor
         await page.screenshot({
         path: 'screenshot9.jpg',
         mask: [button, header],
         maskColor: '#9ce11cff'
        });
    
        // omitBackground - default is false
        // only support PNG
         await page.screenshot({ 
        path: 'screenshot10.png',
        omitBackground: true
    });

    //quality - The quality of the image, between 0-100. Not applicable to png images.
       await page.screenshot({ 
        path: 'screenshot11.jpg',
        quality:5
    });

    //scale - css / device
    await page.screenshot({ 
        path: 'screenshot12.jpg',
        scale:'device'
    });

    //style
     await page.screenshot({ 
        path: 'screenshot13.jpg',
        style:
        'body {background: red !important;}'
    });

    //timeout
     await page.screenshot({ 
        path: 'screenshot14.jpg',
        timeout: 5000
    });

    //type
     await page.screenshot({ 
        path: 'screenshot15.webp',
        type:"png"
    });


})