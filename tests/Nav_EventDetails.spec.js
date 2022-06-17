const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://altruwiz.web.app/');
  await page.locator('text=Log In').click();
  // assert.equal(page.url(), 'https://altruwiz.web.app/login');
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('testcinder00000001@gmail.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('poiuytrewq');
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://altruwiz.web.app/dashboard' }*/),
    page.locator('button:has-text("Login")').click()
  ]);
  await page.locator('button[role="tab"]:has-text("Events")').click();
  await page.locator('text=Post-Typhoon Relief').click();
  // assert.equal(page.url(), 'https://altruwiz.web.app/event/7e8ce9bd-69ec-41e3-b772-0228f40bea86')
  await page.locator('text=Post-Typhoon Relief').nth(2).click();
  await page.locator('text=About Organizer').click();
  await page.locator('text=About this event').click();
  console.log("Success!");
  await context.close();
  await browser.close();
})();