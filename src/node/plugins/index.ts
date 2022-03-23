import { Plugin, defineConfig, UserConfig } from 'vite';
import fsx from 'fs-extra';
import path from 'path';
import react from '@vitejs/plugin-react';
import { mdx } from './mdx/index.js';
import { ResolvedUserConfig } from '../types.js';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { MD_PATTERN, PKG_JSON_PATH } from '../constants.js';
import { Core } from '../core/index.js';
import { virtualProvider } from './virtual/index.js';
import { parseApi } from '../utils/api.js';
import { globby } from 'globby';

const pkg = fsx.readJSONSync(PKG_JSON_PATH);

export const docit = async (config: ResolvedUserConfig): Promise<Plugin[]> => {
  const provider = await virtualProvider(config);
  const instance = Core.getInstance(config);
  const { sidebars, routes, appData } = await instance.prepare();
  const patterns = await globby(MD_PATTERN, {
    cwd: config.docs,
  });

  const plugin: Plugin = {
    name: 'vite-plugin-docit',
    enforce: 'pre',
    config: () => {
      const baseConfig = defineConfig({
        root: config.base,
        base: config.publicPath,
        optimizeDeps: {
          include: [
            'react',
            'react-dom',
            'prop-types',
            'styled-components',
            'hoist-non-react-statics',
            'react-is',
            'path-to-regexp',
            'lodash-es',
            'shallowequal',
            'regexpu-core',
            'react-simple-code-editor',
            'react-live',
            'core-js',
            'highlight.js',
          ],
        },
        build: {
          outDir: path.resolve(process.cwd(), './docs-dist'),
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
        publicDir: path.resolve(config.docs, './assets'),
      });
      return baseConfig as UserConfig;
    },
    transform(_, id) {
      if (id.endsWith('?needParse')) {
        return `export default ${JSON.stringify(
          parseApi(id.replace('?needParse', ''))
        )}`;
      }
    },
  };

  return [
    plugin,
    appData,
    routes,
    sidebars,
    provider,
    ...(await mdx(config)),
    ...(react({
      jsxRuntime: 'classic',
    }) as Plugin[]),
    nodeResolve({
      moduleDirectories: [
        'node_modules',
        `./node_modules/${pkg.name}/node_modules`,
      ],
    }),
  ];
};
