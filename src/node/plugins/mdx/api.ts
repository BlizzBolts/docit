import { visit } from "unist-util-visit";
import { Plugin } from "unified";
import { Link, Text } from "mdast";
import { ResolvedUserConfig } from "../../types.js";
import { parseMdxToTree } from "../../utils/index.js";
import { select } from "unist-util-select";
import resolve from "resolve";
const { sync } = resolve;

export const api = (config: ResolvedUserConfig): Plugin => {
  return (ast) => {
    visit(ast, "link", (link: Link, _, parent) => {
      const text = select("text", link) as Text;

      if (!link || !text) {
        return;
      }

      if (text.value.toLowerCase() === "props" && link.url) {
        const componentPath = sync(link.url, {
          basedir: config.docs,
        });
        const result = parseMdxToTree(`
<ApiTable get={() => import('${componentPath}?needParse')} path="${componentPath}"/>
       `);
        const index = parent.children.findIndex((o) => o === link);
        parent.children.splice(index, 1, result);
      }
    });
  };
};
