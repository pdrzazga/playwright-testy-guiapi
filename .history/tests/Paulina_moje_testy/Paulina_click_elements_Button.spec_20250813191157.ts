import { test } from "@playwright/test";

test.beforeAll(async ({ browser }) => {
  await.page.goto("http://localhost:3000/practice/simple-elements.html");
});

test("Click on the button on Practice Page", async ({ page }) => {
  //await page.getByTestId("dti-button-element").click();
  await page.locator('[data-testid="dti-button-element"]').click();
});
