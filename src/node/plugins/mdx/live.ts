import { visit } from "unist-util-visit";
import { Plugin } from "unified";
import { ResolvedUserConfig } from "../../types.js";
import { parseMdxToTree } from "../../utils/index.js";
import { Core } from "../../core/index.js";
import { VFile } from "vfile";

export const live = (config: ResolvedUserConfig): Plugin => {
  return (ast, file: VFile) => {
    visit(ast, (node, index) => {
      const meta = node?.meta?.split(" ");
      if (
        node.type === "code" &&
        meta?.includes("live") &&
        ["js", "ts", "jsx", "tsx"].includes(node.lang)
      ) {
        const mobileView = meta.includes("mobile");

        const lang = node.lang;
        const content = node.value.replace(/\n/g, "\n\n").replace(/;/g, "");
        const tmp = Core.getInstance().getTmp();
        const filePath = file.path;
        const moduleId = `${filePath}?__needSandBox=${index}`;
        tmp.set(moduleId, {
          content,
          lang,
        });

        const result = parseMdxToTree(
          `<ShowCode get={() => import('${moduleId}')} lang={\`${lang}\`} code={\`${content}\`} mobileView={${mobileView}}></ShowCode>`
        );
        ast.children.splice(index, 1, result);
      }
    });
  };
};
