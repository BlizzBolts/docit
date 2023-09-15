import path from "path";
import fsx from "fs-extra";
import grayMatter from "gray-matter";
import type { Text, Code } from "mdast";
import { select, selectAll } from "unist-util-select";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { toc as generateToc } from "mdast-util-toc";
import { toRoutePath, parseToc } from "../utils/index.js";
import type { ResolvedUserConfig } from "../types.js";

class Markdown {
  private config: ResolvedUserConfig;

  public relativePath: string;

  constructor(relativePath: string, config: ResolvedUserConfig) {
    this.relativePath = relativePath;
    this.config = config;
  }

  get cwd() {
    return this.config.docs;
  }

  get fileName() {
    return path.parse(this.relativePath).name;
  }

  get fullContent() {
    return fsx.readFileSync(this.fullPath);
  }

  get frontMatter() {
    const { data } = grayMatter(this.fullContent);
    return data;
  }

  get content() {
    const { content } = grayMatter(this.fullContent);
    return content;
  }

  get title() {
    const h1Title = (
      select(
        "heading[depth=1] > text",
        unified().use(remarkParse).parse(this.content)
      ) as Text
    )?.value;

    return this.frontMatter?.title || h1Title || this.fileName;
  }

  get fullPath() {
    return path.resolve(this.config.docs, this.relativePath);
  }

  get routePath() {
    return toRoutePath(this.relativePath);
  }

  get transformedPaths() {
    return this.relativePath.split("/").filter((o) => o !== "");
  }

  get toc() {
    const tree = unified().use(remarkParse).parse(this.content);
    const nodes = generateToc(tree, {
      maxDepth: 3,
      tight: true,
      ordered: true,
    });

    return parseToc(nodes.map, {});
  }

  get sandboxes() {
    const tree = unified().use(remarkParse).parse(this.content);
    const nodes = selectAll("code", tree)
      .filter((o: Code) => {
        return (
          o.meta?.includes("live") &&
          ["js", "ts", "jsx", "tsx"].includes(o.lang)
        );
      })
      .map((o: Code, index) => {
        return {
          [`${this.fullPath}?SandBox@${index}`]: o.value
            .replace(/\n/g, "\n\n")
            .replace(/;/g, ""),
        };
      })
      .reduce((acc, curr) => {
        return {
          ...acc,
          ...curr,
        };
      }, {});
    return nodes;
  }
}

export { Markdown };
