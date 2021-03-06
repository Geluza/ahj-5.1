import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);
describe('Popover Widget ', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, //show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });
  describe('Popover Widget ', () => {
    test('should show popover by click', async () => {
      await page.goto(baseUrl);
      const btn = await page.$('.btn');
      await btn.click();
      await page.waitForSelector('.popover');
    });
    test('should remove popover by click', async () => {
      await page.goto(baseUrl);
      const btn = await page.$('.btn');
      await btn.click();
      await btn.click();
      const popover = await page.$('.popover');
      expect(popover).toBeNull();
    });
  });
});
