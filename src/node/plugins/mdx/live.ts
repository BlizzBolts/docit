import { visit } from "unist-util-visit";
import { Plugin } from "unified";
import { ResolvedUserConfig } from "../../types.js";
import { parseMdxToTree } from "../../utils/index.js";
import { VFile } from "vfile";

export const live = (config: ResolvedUserConfig): Plugin => {
  return (ast, file: VFile) => {
    let _i = 0;
    visit(ast, "code", (node, index) => {
      const meta = node?.meta?.split(" ");
      if (
        node.type === "code" &&
        meta?.includes("live") &&
        ["js", "ts", "jsx", "tsx"].includes(node.lang)
      ) {
        const mobileView = meta.includes("mobile");
        const lang = node.lang;
        const content = node.value.replace(/\n/g, "\n\n").replace(/;/g, "");
        const filePath = file.path;
        const moduleId = `${filePath}?SandBox@${_i++}`;

        const result = parseMdxToTree(
          `<ShowCode moduleId={\`${moduleId}\`} lang={\`${lang}\`} code={\`${content}\`} mobileView={${mobileView}}></ShowCode>`
        );

        ast.children.splice(index, 1, result);
      }
    });
  };
};
