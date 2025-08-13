import { test } from "@playwright/test";

let page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://example.com");
});

test("Click on the button on Practice Page", async ({ page }) => {
  //await page.getByTestId("dti-button-element").click();
  await page.locator('[data-testid="dti-button-element"]').click();
});
