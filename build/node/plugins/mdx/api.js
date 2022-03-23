import { visit } from 'unist-util-visit';
import { parseMdxToTree } from '../../utils/index.js';
import { select } from 'unist-util-select';
import resolve from 'resolve';
export const api = (config) => {
    return (ast) => {
        visit(ast, 'link', (link, _, parent) => {
            const text = select('text', link);
            if (!link || !text) {
                return;
            }
            if (text.value.toLowerCase() === 'props' && link.url) {
                const componentPath = resolve.sync(link.url, {
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
//# sourceMappingURL=api.js.map