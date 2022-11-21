import { defineConfig, mergeConfig, PluginOption } from "vite";
import fsx from "fs-extra";
import path from "path";
import react from "@vitejs/plugin-react";
import { mdx, getCompilerOptions } from "./mdx/index.js";
import { ResolvedUserConfig } from "../types.js";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { PKG_JSON_PATH } from "../constants.js";
import { Core } from "../core/index.js";
import { virtualProvider } from "./virtual/index.js";
import { parseApi } from "../utils/api.js";
import { compileSync } from "@mdx-js/mdx";
const pkg = fsx.readJSONSync(PKG_JSON_PATH);

export const docit = async (
  config: ResolvedUserConfig
): Promise<PluginOption> => {
  const instance = Core.getInstance(config);
  const virtualPlugins = await instance.prepare();

  const docitPlugin: PluginOption = {
    name: "vite-plugin-docit",
    enforce: "pre",
    config: () => {
      const baseConfig = defineConfig({
        root: config.base,
        base: config.publicPath,
        optimizeDeps: {
          include: [
            "@mdx-js/react",
          ],
        },
        build: {
          outDir: path.resolve(process.cwd(), "./docs-dist"),
          emptyOutDir: true,
        },
        server: {
          watch: {
            disableGlobbing: false,
          },
          fs: {
            strict: false,
          },
        },
        clearScreen: false,
        publicDir: path.resolve(config.docs, "./assets"),
      });
      const mergedConfig = mergeConfig(baseConfig, config.vite);
      return mergedConfig;
    },
    transform(_, id) {
      if (id.endsWith("?needParse")) {
        return `export default ${JSON.stringify(
          parseApi(id.replace("?needParse", ""))
        )}`;
      }

      const reg = /\?SandBox@(\d*)/g;
      const result = reg.exec(id);

      if (result) {
        const content = instance.getSandBoxMapper().get(result.input);
        const compiled = compileSync(content, getCompilerOptions(config));
        return compiled.value as string;
      }
    },
  };
  const mdxPlugin = await mdx(config);
  const nodeResolvePlugin = nodeResolve({
    moduleDirectories: [
      "node_modules",
      `./node_modules/${pkg.name}/node_modules`,
    ],
  }) as PluginOption;
  const providerPlugin = virtualProvider(config);
  const reactPlugin = react({
    jsxRuntime: "classic",
  });

  return [
    docitPlugin,
    virtualPlugins,
    providerPlugin,
    reactPlugin,
    mdxPlugin,
    nodeResolvePlugin,
  ];
};
