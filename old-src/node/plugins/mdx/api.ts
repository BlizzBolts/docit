import path from "path";
import resolve from "resolve";
import { select } from "unist-util-select";
import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Link, Text } from "mdast";

import type { VFile } from "vfile";
import { parseMdxToTree } from "../../utils/index.js";
import type { ResolvedUserConfig } from "../../types";

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
