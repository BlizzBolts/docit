import { fromMarkdown } from 'mdast-util-from-markdown';
import { toMarkdown } from 'mdast-util-to-markdown';
import { mdxjs } from 'micromark-extension-mdxjs';
import { mdxFromMarkdown, mdxToMarkdown } from 'mdast-util-mdx';
import { gfmTableFromMarkdown, gfmTableToMarkdown } from 'mdast-util-gfm-table';
import { walk } from 'estree-walker';
export const parseMdxToTree = (s) => {
    const tree = fromMarkdown(s, {
        extensions: [mdxjs()],
        mdastExtensions: [mdxFromMarkdown, gfmTableFromMarkdown],
    });
    return tree;
};
export const parseTreeToMdx = (ast) => {
    const out = toMarkdown(ast, {
        extensions: [mdxToMarkdown, gfmTableToMarkdown()],
    });
    return out;
};
export const codeBlockAnalyze = (code) => {
    const ast = parseMdxToTree(code);
    const depsMapper = getImportMap(ast);
    const executable = getExecutable(ast);
    return {
        depsMapper,
        executable,
    };
};
export const getImportStatements = (ast) => {
    const out = toMarkdown({
        ...ast,
        children: ast.children.filter((o) => o.type === 'mdxjsEsm'),
    }, { extensions: [mdxToMarkdown] });
    return out;
};
export const getExecutable = (ast) => {
    const out = toMarkdown({
        ...ast,
        children: ast.children.filter((o) => o.type !== 'mdxjsEsm'),
    }, { extensions: [mdxToMarkdown] });
    return `${out.replace(/;/g, '')}`;
};
export const getImportMap = (ast) => {
    let importDeclarations = [];
    let depsMapper = new Map();
    ast.children
        .filter((o) => o.type === 'mdxjsEsm')
        .map((o) => o.data.estree)
        .forEach((o) => walk(o, {
        enter: (node) => {
            if (node.type === 'ImportDeclaration') {
                const path = node.source.value;
                const result = new Map();
                result.set('default', result.get('default') || null);
                result.set('nonDefault', result.get('nonDefault') || new Set());
                result.set('namespace', result.get('namespace') || null);
                depsMapper.set(path, result);
                importDeclarations.push(node);
            }
        },
    }));
    importDeclarations.forEach((o) => {
        walk(o, {
            enter: (node, parent) => {
                if (node?.type === 'ImportDefaultSpecifier') {
                    const path = parent.source.value;
                    const name = node.local.name;
                    const target = depsMapper.get(path);
                    target.set('default', name);
                }
                if (node?.type === 'ImportSpecifier') {
                    const path = parent.source.value;
                    const name = node.local.name;
                    const target = depsMapper.get(path);
                    target.get('nonDefault').add(name);
                }
                if (node?.type === 'ImportNamespaceSpecifier') {
                    const path = parent.source.value;
                    const name = node.local.name;
                    const target = depsMapper.get(path);
                    target.set('namespace', name);
                }
            },
        });
    });
    return depsMapper;
};
export const tableMaker = {
    t: (rows) => {
        return {
            type: 'table',
            children: rows,
        };
    },
    r: (cells) => {
        return {
            type: 'tableRow',
            children: cells,
        };
    },
    c: (value) => {
        return {
            type: 'tableCell',
            children: [{ type: 'text', value: value }],
        };
    },
};
//# sourceMappingURL=ast.js.map