import { chromium, type Browser } from "playwright";
import { beforeAll, afterAll } from "vitest";
let browser: Browser;

beforeAll(async () => {
  browser = await chromium.connect(process.env["WS_ENDPOINT"]!);
  globalThis.page = await browser.newPage();
  globalThis.goto = async (path: string) => {
    await globalThis.page.goto(`http://localhost:${process.env["PORT"]}${path}`);
    console.log(`Docit running at: http://localhost:${process.env["PORT"]}${path}`);
    await globalThis.page.waitForSelector("#docit-root .docit-page");
  };
});

afterAll(async () => {
  await globalThis.page.close();
  await browser.close();
});
