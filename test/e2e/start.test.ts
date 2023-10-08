import { it } from "vitest";
import "./shims";

it("render headings correctly", async ({ expect }) => {
  await goto(`/`);

  const h1 = page.locator("h1").filter({ hasText: "Heading1" });
  const h2 = page.locator("h2").filter({ hasText: "Heading2" });
  const h3 = page.locator("h3").filter({ hasText: "Heading3" });
  const h4 = page.locator("h4").filter({ hasText: "Heading4" });

  expect(await h1.textContent()).toBe("Heading1");
  expect(await h2.textContent()).toBe("Heading2");
  expect(await h3.textContent()).toBe("Heading3");
  expect(await h4.textContent()).toBe("Heading4");
});
