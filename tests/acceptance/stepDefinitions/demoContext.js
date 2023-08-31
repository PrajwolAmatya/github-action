const { When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { expect } = require("@playwright/test");

setDefaultTimeout(60000);

let browser;
let page;

When("user browses the page {string}", async function (url) {
  browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
  });
  page = await browser.newPage();
  await page.goto(url);
});

Then("user should see the text {string}", async function (expectedText) {
  contentSelector = "//h1";
  await expect(page.locator(contentSelector)).toHaveText(expectedText);
  await browser.close();
});
