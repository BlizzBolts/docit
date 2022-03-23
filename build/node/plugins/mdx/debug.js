import { visit } from 'unist-util-visit';
import { tableMaker, parseApi, logger } from '../../utils/index.js';
import { select } from 'unist-util-select';
import path from 'path';
import { isEmpty } from 'lodash-es';
const { t, r, c } = tableMaker;
export const debug = (config) => {
    return (ast) => {
        const heading = r([
            c('属性'),
            c('类型'),
            c('默认值'),
            c('必填'),
            c('描述'),
        ]);
        visit(ast, 'link', (link, index, parent) => {
            const text = select('text', link);
            if (!link || !text) {
                return;
            }
            if (text.value.toLowerCase() === 'props' && link.url) {
                const componentPath = path.resolve(config.docs, link.url);
                const start = performance.now();
                const parsedProps = parseApi(componentPath).filter((o) => !isEmpty(o.props));
                const tables = parsedProps.map((o) => {
                    return t([
                        heading,
                        ...o.props?.map((p) => {
                            return r([
                                c(p.name || '-'),
                                c(p.type || '-'),
                                c(p.defaultValue || '-'),
                                c(p.isRequired ? '是' : '否'),
                                c(p.description || '-'),
                            ]);
                        }),
                    ]);
                });
                const end = performance.now();
                logger.info(`Parsing ${link.url} used ${end - start}ms`);
                parent.children = tables;
            }
        });
    };
};
//# sourceMappingURL=debug.js.map