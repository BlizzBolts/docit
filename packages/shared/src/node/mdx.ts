import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import type { Node } from "unified/lib";
import { matter } from "vfile-matter";
import type { VFile } from "vfile";
import { glob } from "glob";
import fsx from "fs-extra";
import { markdownPathToRoutePath } from "../shared/utils/markdown";

const matterParser = () => {
  return (tree: Node, file: VFile) => {
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

export const scanMarkdowns = async (docRoot: string) => {
  const docPaths = await glob("./**/*.{md,mdx}", {
    cwd: docRoot,
    absolute: true,
  });

  return docPaths.map((docPath) => {
    const routePath = markdownPathToRoutePath(docPath, docRoot);
    const parts = routePath.split("/");
    const getContent = async () => {
      return await fsx.readFile(docPath, "utf-8");
    };
    return {
      name: parts[parts.length - 1] || "index",
      routePath: routePath,
      filePath: docPath,
      getContent,
      getFrontMatter: async () => {
        getFrontMatter(await getContent());
      },
    };
  });
};
