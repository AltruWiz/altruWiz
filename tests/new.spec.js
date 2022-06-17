const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://altruwiz.web.app/
  await page.goto('https://altruwiz.web.app/');
  // Click text=Sign Up
  await page.locator('text=Sign Up').click();
  // assert.equal(page.url(), 'https://altruwiz.web.app/register');
  // Click text=First Name​ >> input[type="text"]
  await page.locator('text=First Name​ >> input[type="text"]').click();
  // Fill text=First Name​ >> input[type="text"]
  await page.locator('text=First Name​ >> input[type="text"]').fill('Jez');
  // Click text=Last Name​ >> input[type="text"]
  await page.locator('text=Last Name​ >> input[type="text"]').click();
  // Fill text=Last Name​ >> input[type="text"]
  await page.locator('text=Last Name​ >> input[type="text"]').fill('Flo');
  // Click text=Email​ >> input[type="text"]
  await page.locator('text=Email​ >> input[type="text"]').click();
  // Fill text=Email​ >> input[type="text"]
  await page.locator('text=Email​ >> input[type="text"]').fill('floburner007@gmail.com');
  // Click input[type="password"] >> nth=0
  await page.locator('input[type="password"]').first().click();
  // Fill input[type="password"] >> nth=0
  await page.locator('input[type="password"]').first().fill('0987654321');
  // Click text=Confirm Password​ >> input[type="password"]
  await page.locator('text=Confirm Password​ >> input[type="password"]').click();
  // Fill text=Confirm Password​ >> input[type="password"]
  await page.locator('text=Confirm Password​ >> input[type="password"]').fill('0987654321');
  // Click text=Create Account
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://altruwiz.web.app/verify' }*/),
    page.locator('text=Create Account').click()
  ]);
  // Go to https://altruwiz.web.app/verify
  await page.goto('https://altruwiz.web.app/verify');
  // Go to https://altruwiz.web.app/dashboard
  await page.goto('https://altruwiz.web.app/dashboard');
  // Click button[role="tab"]:has-text("Events")
  await page.locator('button[role="tab"]:has-text("Events")').click();
  // Click text=Achievements
  await page.locator('text=Achievements').click();
  // ---------------------
  await context.close();
  await browser.close();
})();