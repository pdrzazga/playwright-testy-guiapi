import { expect, test } from "@playwright/test";

let page;
const labelText = "Some text for label";
const input = "Test P 123";

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto("http://localhost:3000/practice/simple-elements.html");
});

test("Click on the button on Simple Elements with ID - Practice Page", async () => {
  //await page.getByTestId("dti-button-element").click();
  await page.locator('[data-testid="dti-button-element"]').click();
});

test("Check if text for label is correct", async () => {
  await expect(page.getByTestId("dti-label-element")).toHaveText(labelText);
});

test("Check the checkbox", async () => {
  await expect(page.getByTestId("dti-checkbox")).not.toBeChecked();
  await page.getByTestId("dti-checkbox").click();
  await expect(page.getByTestId("dti-checkbox")).toBeChecked();
});

test("Use the input field", async () => {
  await page.getByTestId("dti-input").fill(input);
  await expect(page.getByTestId("dti-input")).toHaveValue(input);
  await page.getByTestId("dti-input").clear();
});

test("Select Option3 from dropdown", async () => {
  await page.getByTestId("dti-dropdown").selectOption("option3"); // wybór opcji po value
  await expect(page.getByTestId("dti-dropdown")).toHaveValue("option3");
});

test("Select Radio Button 3 from radio buttons", async () => {
  await page.getByTestId("dti-radio3").click();
  await expect(page.getByTestId("dti-radio3")).toBeChecked();
});

test.afterAll(async () => {
  await page.close();
});
