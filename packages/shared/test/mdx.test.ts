import { describe, it } from "vitest";
import { getFrontMatter } from "@/node/mdx";

describe("mdx", () => {
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
});
