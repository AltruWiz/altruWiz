const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://altruwiz.web.app/');
  // assert.equal(page.url(), 'http://localhost:3000/register');
  await page.locator('text=Sign Up').click();
  await page.locator('text=First Name').click();
  await page.locator('text=Password').first().click();
  console.log("Success!");
  await context.close();
  await browser.close();
})();