import path from "node:path";
import type { PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import { resolveConfig } from "@blizzbolts/docit-shared/node";
import { virtual } from "./virtual";

export const createDocitPlugin = async (cwd: string): Promise<PluginOption[]> => {
  const config = await resolveConfig(path.resolve(cwd));

  const docitPlugin: PluginOption = {
    name: "vite-plugin-docit",
    config() {
      return {
        resolve: {
          dedupe: ["react", "react-dom"],
          alias: {
            "doc-root": path.resolve(cwd, "./", config.docRoot!),
          },
        },
      };
    },
  };

  return [docitPlugin, mdx(), react(), await virtual(cwd)];
};
