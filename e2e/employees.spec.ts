import { test, expect } from "@playwright/test";

test("should navigate to the employees page", async ({ page }) => {
  await page.goto("/");
  await page.click("text=Employees");
  await expect(page).toHaveURL("/employees");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Employees"
  );
});

test("should navigate to the employee edit page", async ({ page }) => {
  await page.goto("/employees");

  await page.getByRole("link", { name: "Peter Gibbons" }).click();
  await expect(page).toHaveURL("/employees/1/edit");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Edit Peter Gibbons"
  );
});
