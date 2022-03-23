import gfm from 'remark-gfm';
import highlight from 'rehype-highlight';
import mdxRollup from '@mdx-js/rollup';
import frontMatter from 'remark-frontmatter';
import emoji from 'remark-emoji';
import { live } from './live.js';
import { api } from './api.js';
export const mdx = async (config) => {
    return [
        mdxRollup({
            jsxRuntime: 'classic',
            remarkPlugins: [gfm, frontMatter, emoji, [live, config], [api, config]],
            rehypePlugins: [highlight],
            providerImportSource: '@mdx-js/react',
        }),
    ];
};
//# sourceMappingURL=index.js.map