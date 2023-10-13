import path from "node:path";
import type { PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import { type DocitConfig } from "@blizzbolts/docit-shared/node";
import { virtual } from "./virtual";
import { createMdxPlugin } from "./mdx";

export const createDocitPlugin = async (
  cwd: string,
  config: DocitConfig,
): Promise<PluginOption[]> => {
  const docitPlugin: PluginOption = {
    name: "vite-plugin-docit",
    config() {
      return {
        resolve: {
          dedupe: ["react", "react-dom", "@mdx-js/react"],
          alias: [
            {
              find: "doc-root",
              replacement: path.resolve(cwd, "./", config.docRoot!),
            },
          ],
        },
        // FIXME:
        // process.env.NODE_ENV in markdown file will be replaced with actual variable
        // should find a way to fix it.
        // define: {
        //   "process.env.NODE_ENV": undefined,
        // },
        // or
        //
        // define: {
        //   // FIXME: all process.env.NODE_ENV will not be processed
        //   "process.env.NODE_ENV": `process.env.NODE_ENV`,
        // },
      };
    },
  };

  return [docitPlugin, createMdxPlugin(config), react(), await virtual(config)];
};
