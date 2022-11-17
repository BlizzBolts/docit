import gfm from "remark-gfm";
import highlight from "rehype-highlight";
import mdxRollup, { Options } from "@mdx-js/rollup";
import { ResolvedUserConfig } from "../../types.js";
import { PluginOption } from "vite";
import frontMatter from "remark-frontmatter";
import emoji from "remark-emoji";
import slug from "rehype-slug";
import { live } from "./live.js";
import { api } from "./api.js";

export const getCompilerOptions = (config: ResolvedUserConfig): Options => {
  return {
    jsxRuntime: "classic",
    remarkPlugins: [gfm, frontMatter, emoji, [live, config], [api, config]],
    rehypePlugins: [highlight, slug],
    providerImportSource: "@mdx-js/react",
  };
};

export const mdx = async (
  config: ResolvedUserConfig
): Promise<PluginOption[]> => {
  return [mdxRollup(getCompilerOptions(config)) as PluginOption];
};
