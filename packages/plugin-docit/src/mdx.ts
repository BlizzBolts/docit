import type { PluginOption } from "vite";
import mdx from "@mdx-js/rollup";
import { type DocitConfig } from "@blizzbolts/docit-shared/node";
import gfm from "remark-gfm";
import emoji from "remark-emoji";
import frontmatter from "remark-frontmatter";
import mdxFrontmatter from "remark-mdx-frontmatter";

export const createMdxPlugin = async (config: DocitConfig): Promise<PluginOption[]> => {
  // const mdxPlugin: PluginOption = {
  //   name: "vite-plugin-docit-mdx",
  //   enforce: "pre",
  //   async transform(code, id, options) {
  //     return null;
  //   },
  // };

  return [
    // mdxPlugin,
    mdx({
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [
        gfm,
        emoji,
        frontmatter,
        mdxFrontmatter,
      ],
    }),
  ];
};
