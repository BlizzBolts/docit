import { Root } from "mdast";
import { visit } from "unist-util-visit";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import stringify from "remark-stringify";

export const parseMdxToTree = (s: string): Root => {
  const tree = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkGfm)
    .parse(s);
  return tree;
};

export const parseTreeToMdx = (ast: Root): string => {
  const out = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkGfm)
    .use(stringify)
    .stringify(ast);
  return out;
};

export const parseToc = (node, current) => {
  if (!node) {
    return {};
  } else if (node.type === `paragraph`) {
    visit(node, (item) => {
      if (item.type === `link`) {
        current.url = item.url;
      }
      if (item.type === `text`) {
        current.title = item.value;
      }
    });
    return current;
  } else {
    if (node.type === `list`) {
      current.items = node.children.map((i) => parseToc(i, {}));
      return current;
    } else if (node.type === `listItem`) {
      const heading = parseToc(node.children[0], {});
      if (node.children.length > 1) {
        parseToc(node.children[1], heading);
      }
      return heading;
    }
  }
  return {};
};
