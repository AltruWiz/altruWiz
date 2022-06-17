const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  // Change to final link from http://localhost:3000/ to https://altruwiz.web.app/
  await page.goto('https://altruwiz.web.app/');
  // assert.equal(page.url(), 'https://altruwiz.web.app/');
  await page.locator('text=AltruWizLog InSign Up >> h1').click();
  await page.locator('text=Find your next event').click();
  await page.locator('text=All Events').click();
  await page.locator('text=Quick Links').click();
  console.log("Success!");
  await context.close();
  await browser.close();
})();