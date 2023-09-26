import { test, expect } from "@playwright/test";

test("have button", async ({ page }) => {
  const result = await page.goto("http://localhost:3000/");

  const text = page.getByRole("heading", { name: "Hello Docit" });

  expect(result?.ok()).toBe(true);
  expect(await text.textContent()).toBe("Hello Docit");
});
