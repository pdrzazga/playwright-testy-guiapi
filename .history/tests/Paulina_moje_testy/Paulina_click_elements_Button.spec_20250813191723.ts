import { test } from "@playwright/test";

let page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto("http://localhost:3000/practice/simple-elements.html");
});

test("Click on the button on Simple Elements with ID - Practice Page", async ({
  page,
}) => {
  //await page.getByTestId("dti-button-element").click();
  await page.locator('[data-testid="dti-button-element"]').click();
});

test.afterAll(async () => {
  await page.close();
});
