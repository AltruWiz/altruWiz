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
  await page.locator('[data-testid="ArrowDropDownIcon"]').click();
  await page.locator('text=Star Trek Armada').click();
  // assert.equal(page.url(), 'https://altruwiz.web.app/organizer');
  await page.locator('text=EventsEvent CodeDateNameParticipantsCreate New Event >> button').click();
  await page.locator('text=Make an Event').click();
  await page.locator('text=Make an EventLet’s cover some basic information about your event.Name of EventTi >> input[type="text"]').first().click();
  await page.locator('text=Make an EventLet’s cover some basic information about your event.Name of EventTi >> input[type="text"]').first().fill('Eco Brick Seminar');
  await page.locator('text=Make an EventLet’s cover some basic information about your event.Name of EventTi >> input[type="date"]').fill('2022-06-17');
  await page.locator('text=Make an EventLet’s cover some basic information about your event.Name of EventTi >> input[type="time"]').click();
  await page.locator('text=Make an EventLet’s cover some basic information about your event.Name of EventTi >> input[type="time"]').click();
  await page.locator('text=Make an EventLet’s cover some basic information about your event.Name of EventTi >> input[type="time"]').click();
  await page.locator('text=Make an EventLet’s cover some basic information about your event.Name of EventTi >> input[type="text"]').nth(1).click();
  await page.locator('text=Make an EventLet’s cover some basic information about your event.Name of EventTi >> input[type="text"]').nth(1).fill('Cebu City, Cebu');
  await page.locator('text=Add a Quest').first().click();
  await page.locator('[placeholder="Assign a quest"]').click();
  await page.locator('[placeholder="Assign a quest"]').fill('Make at least 3 bricks');
  await page.locator('[placeholder="Assign exp reward"]').click();
  await page.locator('[placeholder="Assign exp reward"]').fill('100');
  await page.locator('text=Make an EventLet’s cover some basic information about your event.Name of EventTi >> input[type="text"]').nth(3).click();
  await page.locator('text=Make an EventLet’s cover some basic information about your event.Name of EventTi >> input[type="text"]').nth(3).fill('100');
  await page.locator('text=Make an EventLet’s cover some basic information about your event.Name of EventTi >> textarea').click();
  await page.locator('text=Make an EventLet’s cover some basic information about your event.Name of EventTi >> textarea').fill('Spend the weekend learning about the sustainability of Eco Bricks! Come join us Recycle!');
  await page.locator('text=Description').first().click();
  await page.locator('text=Done').first().click();
  console.log("Success!");
  await context.close();
  await browser.close();
})();