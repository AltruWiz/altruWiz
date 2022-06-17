const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://altruwiz.web.app/');
    await page.locator('text=About Us').click();
    // assert.equal(page.url(), 'https://altruwiz.web.app/about_us');
    await page.locator('text=ALTRUWIZ').nth(1).click();
    await page.locator('text=Jezreel Jedidiah O. Floreta').click();
    console.log("Success!");
    await context.close();
    await browser.close();
  })();