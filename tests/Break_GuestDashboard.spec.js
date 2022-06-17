const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://altruwiz.web.app/');
  await page.locator('text=Dashboard').click();
  await page.locator('text=Login').first().click();
  await page.locator('text=Welcome! Please login to your account.').click();
  await page.locator('text=Email Address').click();
  await page.locator('text=Password').first().click();
  console.log("Success!");
  await context.close();
  await browser.close();
})();