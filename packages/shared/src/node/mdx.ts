import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import type { Node } from "unified/lib";
import { matter } from "vfile-matter";
import type { VFile } from "vfile";

const matterParser = () => {
  return function (tree: Node, file: VFile) {
    matter(file);
  };
};
export const getFrontMatter = async (mdxContent: string) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkFrontmatter, ["yaml"])
    .use(matterParser)
    .process(mdxContent);

  return file.data.matter;
};
