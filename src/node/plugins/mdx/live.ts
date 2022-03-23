import { visit } from 'unist-util-visit';
import { Plugin } from 'unified';
import { ResolvedUserConfig } from '../../types.js';
import {
  getExecutable,
  parseMdxToTree,
  getImportStatements,
} from '../../utils/index.js';

export const live = (config: ResolvedUserConfig): Plugin => {
  return (ast) => {
    visit(ast, (node, index) => {
      if (
        node.type === 'code' &&
        node.meta === 'live' &&
        ['js', 'ts', 'jsx', 'tsx'].includes(node.lang)
      ) {
        const lang = node.lang;
        const content = node.value.replace(/\n/g, '\n\n').replace(/;/g, '');
        const tree = parseMdxToTree(content);
        const imports = getImportStatements(tree);
        const renders = getExecutable(tree);
        const result = parseMdxToTree(`${imports}
          <ShowCode code={\`${content}\`} lang={\`${lang}\`}>
            ${renders}
          </ShowCode>
        `);
        ast.children.splice(index, 1, result);
      }
    });
  };
};
