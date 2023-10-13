import { describe, it } from "vitest";
import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { getFrontMatter, scanMarkdowns } from "@/node/mdx";

const CONTENT = `Mollit sint esse irure reprehenderit culpa consectetur culpa eu veniam.`;

const makeTemplateMdFiles = async ({ maker, r }: Pick<TmpDirContext, "maker" | "r">) => {
  await maker.makeFile(r("./docs/index.mdx"), CONTENT);
  await maker.makeFile(r("./docs/one.mdx"), CONTENT);
  await maker.makeFile(r("./docs/two.mdx"), CONTENT);
  await maker.makeFile(r("./docs/three.mdx"), CONTENT);
  await maker.makeFile(r("./docs/four.mdx"), CONTENT);

  await maker.makeFile(r("./docs/folderOne/index.md"), CONTENT);
  await maker.makeFile(r("./docs/folderOne/one.mdx"), CONTENT);
  await maker.makeFile(r("./docs/folderOne/two.md"), CONTENT);
  await maker.makeFile(r("./docs/folderOne/three.mdx"), CONTENT);
  await maker.makeFile(r("./docs/folderOne/four.mdx"), CONTENT);

  await maker.makeFile(r("./docs/folderOne/folder/one.mdx"), CONTENT);
  await maker.makeFile(r("./docs/folderOne/folder/two.mdx"), CONTENT);
  await maker.makeFile(r("./docs/folderOne/folder/three.mdx"), CONTENT);
  await maker.makeFile(r("./docs/folderOne/folder/four.mdx"), CONTENT);

  await maker.makeFile(r("./docs/folderTwo/one.mdx"), CONTENT);
  await maker.makeFile(r("./docs/folderTwo/two.mdx"), CONTENT);
  await maker.makeFile(r("./docs/folderTwo/three.mdx"), CONTENT);
  await maker.makeFile(r("./docs/folderTwo/four.mdx"), CONTENT);
};

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

  it<TmpDirContext>("should scan all markdown files", async ({ expect, r, maker }) => {
    const docRoot = r("./docs");
    await makeTemplateMdFiles({ maker, r });
    const results = await scanMarkdowns(docRoot);
    expect(results.map((o) => ({ routePath: o.routePath, name: o.name }))).toEqual([
      {
        name: "two",
        routePath: "/two",
      },
      {
        name: "three",
        routePath: "/three",
      },
      {
        name: "one",
        routePath: "/one",
      },
      {
        name: "index",
        routePath: "/",
      },
      {
        name: "four",
        routePath: "/four",
      },
      {
        name: "two",
        routePath: "/foldertwo/two",
      },
      {
        name: "three",
        routePath: "/foldertwo/three",
      },
      {
        name: "one",
        routePath: "/foldertwo/one",
      },
      {
        name: "four",
        routePath: "/foldertwo/four",
      },
      {
        name: "two",
        routePath: "/folderone/two",
      },
      {
        name: "three",
        routePath: "/folderone/three",
      },
      {
        name: "one",
        routePath: "/folderone/one",
      },
      {
        name: "index",
        routePath: "/folderone/",
      },
      {
        name: "four",
        routePath: "/folderone/four",
      },
      {
        name: "two",
        routePath: "/folderone/folder/two",
      },
      {
        name: "three",
        routePath: "/folderone/folder/three",
      },
      {
        name: "one",
        routePath: "/folderone/folder/one",
      },
      {
        name: "four",
        routePath: "/folderone/folder/four",
      },
    ]);
  });

  // it<TmpDirContext>("should make default folder structure", async ({ expect, r, maker }) => {
  //   const docRoot = r("./docs");
  //   await makeTemplateMdFiles({ maker, r });
  //   const results = await scanMarkdowns(docRoot);
  // });
});
