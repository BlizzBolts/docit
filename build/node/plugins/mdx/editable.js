import { visit } from 'unist-util-visit';
import { parseMdxToTree, codeBlockAnalyze } from '../../utils/index.js';
const transformDepsToScope = (deps) => {
    const defaultTpl = `
    __KEY__: React.lazy(() =>
      import("__PATH__").then((o) => {
        return { default: o.__NAME__ };
      })
    )
  `;
    const result = [];
    deps.forEach((value, key) => {
        if (value.get('default')) {
            result.push(defaultTpl
                .replace(/__PATH__/g, key)
                .replace(/__NAME__/g, 'default')
                .replace(/__KEY__/g, value.get('default')));
        }
        if (value.get('nonDefault')) {
            const set = value.get('nonDefault');
            set.forEach((o) => {
                result.push(defaultTpl
                    .replace(/__PATH__/g, key)
                    .replace(/__NAME__/g, o)
                    .replace(/__KEY__/g, o));
            });
        }
    });
    return `{${result.join(',')}}`;
};
export const liveCoding = (config) => {
    return (ast) => {
        visit(ast, (node, index) => {
            if (node.type === 'code' &&
                node.meta === 'live' &&
                ['js', 'ts', 'jsx', 'tsx'].includes(node.lang)) {
                const content = node.value.replace(/\n/g, '\n\n');
                const { depsMapper, executable } = codeBlockAnalyze(content);
                const scope = transformDepsToScope(depsMapper);
                const code = `
          <LiveProvider
            scope={__SCOPE__}
            code={\`__CODE__\`}
          >
            <LiveEditor />
            <LiveError />
            <Suspense fallback={<div></div>}>
              <LivePreview />
            </Suspense>
          </LiveProvider>
        `;
                const result = parseMdxToTree(code.replace(/__SCOPE__/g, scope).replace(/__CODE__/g, executable));
                ast.children = [
                    ...ast.children.slice(0, index + 1),
                    result,
                    ...ast.children.slice(index + 1, ast.children.length),
                ];
            }
        });
    };
};
//# sourceMappingURL=editable.js.map