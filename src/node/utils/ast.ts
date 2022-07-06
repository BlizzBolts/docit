import { Root } from "mdast";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toMarkdown } from "mdast-util-to-markdown";
import { mdxjs } from "micromark-extension-mdxjs";
import { mdxFromMarkdown, mdxToMarkdown } from "mdast-util-mdx";
import { gfmTableFromMarkdown, gfmTableToMarkdown } from "mdast-util-gfm-table";
import { visit } from "unist-util-visit";

export const parseMdxToTree = (s: string) => {
  const tree = fromMarkdown(s, {
    extensions: [mdxjs()],
    mdastExtensions: [mdxFromMarkdown(), gfmTableFromMarkdown],
  });
  return tree;
};

export const parseTreeToMdx = (ast: Root) => {
  const out = toMarkdown(ast, {
    extensions: [mdxToMarkdown(), gfmTableToMarkdown()],
  });
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
