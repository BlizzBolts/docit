import path from "node:path";
import type { PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import { type DocitConfig } from "@blizzbolts/docit-shared/node";
import gfm from "remark-gfm";
import emoji from "remark-emoji";
import { virtual } from "./virtual";

export const createDocitPlugin = async (
  cwd: string,
  config: DocitConfig,
): Promise<PluginOption[]> => {
  const docitPlugin: PluginOption = {
    name: "vite-plugin-docit",
    config() {
      return {
        // FIXME: process.env.NODE_ENV in markdown file will be replaced with actual variable
        // should find a way to fix it.
        // define: {
        //   "process.env.NODE_ENV": undefined,
        // },
        resolve: {
          dedupe: ["react", "react-dom"],
          alias: [
            {
              find: "doc-root",
              replacement: path.resolve(cwd, "./", config.docRoot!),
            },
          ],
        },
        // define: {
        //   // FIXME: all process.env.NODE_ENV will not be processed
        //   "process.env.NODE_ENV": `process.env.NODE_ENV`,
        // },
      };
    },
  };

  return [
    docitPlugin,
    mdx({
      remarkPlugins: [gfm, emoji],
    }),
    react(),
    await virtual(config),
  ];
};
