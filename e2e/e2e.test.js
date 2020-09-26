import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Popover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 250,
      devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });
  
  test('should add .active class', async () => {
    await page.goto(baseUrl);
    const button = await page.$('[data-toggle="button-popover"]');
    button.click();
    await page.waitForSelector('[data-widget="popover-top"].message-popover');
  });
});
