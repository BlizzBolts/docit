import { assert, describe, it } from "vitest";
import { parseMdxToTree } from "../../src/node/utils/index.js";
import fsx from "fs-extra";
import path from "path";

describe("skipped suite", () => {
  it("stub", () => {
    const demoContent = fsx.readFileSync(path.resolve(__dirname, "./s1.mdx"), {
      encoding: "utf-8",
    });
    const tree = parseMdxToTree(demoContent);

    assert.equal(tree.children.length, 2);
  });
});
