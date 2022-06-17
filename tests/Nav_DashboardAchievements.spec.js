const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://altruwiz.web.app/');
  await page.locator('text=Log In').click();
  // assert.equal(page.url(), 'http://localhost:3000/login');
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('testcinder00000001@gmail.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('poiuytrewq');
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/dashboard' }*/),
    page.locator('button:has-text("Login")').click()
  ]);
  await page.locator('text=Achievements').click();
  await page.locator('text=Your Events').click();
  await page.locator('text=EVENTS JOINED').click();
  await page.locator('text=BADGES OBTAINED').click();
  console.log("Success!");
  await context.close();
  await browser.close();
})();