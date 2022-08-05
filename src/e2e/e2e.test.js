import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("navigates to the about page", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".App");
    const text = await page.$eval(".App", (e) => e.textContent);
    expect(text).toContain("Hello World!");
  });
  afterAll(() => browser.close());
});
