import path from "path";
import type { PluginOption } from "vite";
import { defineConfig, mergeConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import type { Command, ResolvedUserConfig } from "../types.js";
import { Core } from "../core/index.js";
import { logger } from "../utils/index.js";
import { virtualProvider } from "./virtual/index.js";
import { mdx } from "./mdx/index.js";

export const docit = async (
  command: Command,
  config: ResolvedUserConfig
): Promise<PluginOption> => {
  const instance = Core.getInstance(command, config);
  const virtualPlugins = await instance.prepare();

  const docitPlugin: PluginOption = {
    name: "vite-plugin-docit",
    enforce: "pre",
    config: () => {
      const baseConfig = defineConfig({
        root: config.base,
        base: config.publicPath,
        // optimizeDeps: {
        //   include: [
        //     "@mdx-js/react",
        //     "qrcode",
        //     "styled-components",
        //     "highlight.js",
        //     "lodash-es",
        //     "react",
        //     "react-dom",
        //   ],
        // },
        customLogger: logger,
        server: {
          watch: {
            disableGlobbing: false,
          },
          fs: {
            strict: false,
          },
        },
        clearScreen: true,
        publicDir: path.resolve(config.docs, "./assets"),
      });
      const mergedConfig = mergeConfig(baseConfig, config.vite);
      return mergedConfig;
    },
    // transform(_, id) {
    //   if (id.endsWith("?needParse")) {
    //     return `export default ${JSON.stringify(
    //       parseApi(id.replace("?needParse", ""))
    //     )}`;
    //   }

    //   const reg = /\?SandBox@(\d*)/g;
    //   const result = reg.exec(id);

    //   if (result) {
    //     const content = Core.getInstance().getSandBoxMapper().get(result.input);
    //     const compiled = compileSync(content, getCompilerOptions(config));
    //     return compiled.value as string;
    //   }
    // },
  };

  const mdxPlugin = await mdx(config);
  const providerPlugin = virtualProvider(config);
  const reactPlugin = react();

  return [docitPlugin, virtualPlugins, providerPlugin, reactPlugin, mdxPlugin];
};
