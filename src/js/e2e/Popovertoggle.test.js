import puppetteer from 'puppeteer';

jest.setTimeout(30000);
describe('Popover Widget ', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: true,
      // slowMo: 100,
      // devtools: false,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  describe('Popover Widget ', () => {
    test('should show popover by click', async () => {
      await page.goto(baseUrl);
      const btn = await page.$('.btn');
      btn.click();
      await page.waitForSelector('.popover');
    });
  });
});
