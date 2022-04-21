import { Plugin, defineConfig, mergeConfig } from "vite";
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

export const docit = async (config: ResolvedUserConfig): Promise<Plugin[]> => {
  const provider = await virtualProvider(config);
  const instance = Core.getInstance(config);
  const { sidebars, routes, appData, sandboxes } = await instance.prepare();

  const plugin: Plugin = {
    name: "vite-plugin-docit",
    enforce: "pre",
    config: () => {
      const baseConfig = defineConfig({
        root: config.base,
        base: config.publicPath,
        optimizeDeps: {
          include: [
            "react",
            "react-dom",
            "prop-types",
            "styled-components",
            "hoist-non-react-statics",
            "react-is",
            "path-to-regexp",
            "lodash-es",
            "shallowequal",
            "regexpu-core",
            "react-simple-code-editor",
            "react-live",
            "core-js",
            "highlight.js",
            "react-frame-component",
            "qrcode",
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
      return mergeConfig(baseConfig, config.vite);
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

  return [
    plugin,
    appData,
    routes,
    sidebars,
    provider,
    sandboxes,
    ...(await mdx(config)),
    ...(react({
      jsxRuntime: "classic",
    }) as Plugin[]),
    nodeResolve({
      moduleDirectories: [
        "node_modules",
        `./node_modules/${pkg.name}/node_modules`,
      ],
    }),
  ];
};
