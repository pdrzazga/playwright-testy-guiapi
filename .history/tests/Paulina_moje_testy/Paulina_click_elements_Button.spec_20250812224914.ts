import { test } from "@playwright/test";

test("click on the Practice Page", async ({ page }) => {
  // before recording get article url
  await page.goto("http://localhost:3000/practice/simple-elements.html");
  //await page.getByTestId("dti-button-element").click();
  await page.locator('[data-testid="dti-button-element"]').click();
});
