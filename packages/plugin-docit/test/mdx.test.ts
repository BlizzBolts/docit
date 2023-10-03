import path from "node:path";
import fs from "fs-extra";
import { it } from "vitest";
import { describe } from "vitest";
import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";

describe("MDX", () => {
  it("should compile GFM", async ({ expect }) => {
    const fileContent = await fs.readFile(path.resolve(__dirname, "./fixtures/gfm.mdx"), "utf-8");
    const result = await compile(fileContent, {
      remarkPlugins: [remarkGfm],
    });

    expect(result).toMatchSnapshot();
  });

  it("should compile GFM full list", async ({ expect }) => {
    const fileContent = await fs.readFile(
      path.resolve(__dirname, "./fixtures/gfm-full.mdx"),
      "utf-8",
    );
    const result = await compile(fileContent, {
      remarkPlugins: [remarkGfm],
    });

    expect(result).toBeTruthy();
  });
});
