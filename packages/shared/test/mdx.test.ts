import { describe, it } from "vitest";
import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { init } from "../../core/node/init";
import { getFrontMatter, scanMarkdowns } from "@/node/mdx";

describe("mdx", () => {
  setupTmpDir();
  it("should parse frontmatter successfuly", async ({ expect }) => {
    const content = `---
title: hello
toc: true
arr: [1, 2, 3]
---

# Heading1
lorem

## Heading2
lorem
`;

    expect(await getFrontMatter(content)).toEqual({
      title: "hello",
      toc: true,
      arr: [1, 2, 3],
    });
  });

  it<TmpDirContext>("should scan all markdown files", async ({ expect, r }) => {
    await init({
      root: r(),
      docRoot: r("./docs"),
    });
    const results = await scanMarkdowns(r("./docs"));
    expect(results.map((o) => ({ routePath: o.routePath, name: o.name }))).toStrictEqual([
      { routePath: "/", name: "index" },
      { routePath: "/folder/another", name: "another" },
    ]);
  });
});
