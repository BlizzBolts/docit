import resolve from "resolve";
import path from "path";
import { parseMdxToTree } from "../../utils/index.js";
import { select } from "unist-util-select";
import { visit } from "unist-util-visit";
import { Plugin } from "unified";
import { Link, Text } from "mdast";
import { ResolvedUserConfig } from "../../types";

import { VFile } from "vfile";

const { sync } = resolve;

export const api = (config: ResolvedUserConfig): Plugin => {
  return (ast, file: VFile) => {
    visit(ast, "link", (link: Link, _, parent) => {
      const text = select("text", link) as Text;

      if (!link || !text) {
        return;
      }

      if (text.value.toLowerCase() === "props" && link.url) {
        const componentPath = sync(link.url, {
          basedir: path.dirname(file.path),
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
