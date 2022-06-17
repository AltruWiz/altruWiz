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
  await page.locator('text=Bike for a Cause').first().click();
  // assert.equal(page.url(), 'https://altruwiz.web.app/event/4cc462b3-34ad-4660-acc0-eecb826825df');
  await page.locator('text=Bike for a Cause').nth(3).click();
  await page.locator('text=Event Code').click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('oy8UcVDU1DVIBw3mcS9f');
  await page.locator('text=Submit').click();
  await page.locator('text=You have successfully completed Bike for a Cause.').click();
  await page.locator('text=You gained +100 points').click();
  await page.locator('text=See your dashboard for your certificates!').click();
  await page.locator('text=You have successfully completed Bike for a Cause.You gained +100 pointsSee your  >> button').click();
  await page.locator('text=AltruWiz').nth(1).click();
  await page.locator('a:has-text("Dashboard")').click();
  // assert.equal(page.url(), 'https://altruwiz.web.app/dashboard');
  await page.locator('button[role="tab"]:has-text("Events")').click();
  await page.locator('text=Completed Events').click();
  await page.locator('text=Bike for a Cause').nth(1).click();
  // assert.equal(page.url(), 'https://altruwiz.web.app/event/4cc462b3-34ad-4660-acc0-eecb826825df');
  await page.locator('text=Bike for a Cause').nth(3).click();
  console.log("Success!");
  await context.close();
  await browser.close();
})();