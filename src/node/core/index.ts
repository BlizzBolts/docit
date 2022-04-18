import path from "path";
import chokidar from "chokidar";
import { ResolvedUserConfig, SidebarNode } from "../types.js";
import {
  MD_PATTERN,
  VIRTUAL_APP_DATA_ID,
  VIRTUAL_ROUTER_CONFIG_ID,
  VIRTUAL_SIDEBARS_CONFIG_ID,
  CLIENT_PATH,
  VIRTUAL_SANDBOXES_ID,
} from "../constants.js";
import { MarkdownCache } from "./MarkdownCache.js";
import { isEmpty, pick } from "lodash-es";
import { Markdown } from "./Markdown.js";
import { withVirtual, VirtualUpdater } from "../plugins/virtual/index.js";
import { pkg } from "../constants.js";

class Core {
  private static instance: Core;

  private config: ResolvedUserConfig;
  private watcher: chokidar.FSWatcher;
  private markdownCache: MarkdownCache;
  private tmp: Map<string, any>;
  private sandBoxMapper: Map<string, any>;

  private updater: {
    updateSidebars: VirtualUpdater;
    updateRoutes: VirtualUpdater;
    updateAppData: VirtualUpdater;
    updateSandBoxes: VirtualUpdater;
  };

  private constructor(config: ResolvedUserConfig) {
    this.config = config;
    this.watcher = chokidar.watch(path.join(config.docs, MD_PATTERN), {
      atomic: false,
      awaitWriteFinish: false,
      binaryInterval: 300,
      disableGlobbing: false,
      followSymlinks: true,
      ignored: ["**/node_modules/**", "**/.git/**"],
      ignoreInitial: true,
      ignorePermissionErrors: true,
      interval: 100,
      persistent: true,
      useFsEvents: true,
    });

    this.markdownCache = new MarkdownCache(config);
    this.updater = {
      updateSidebars: () => null,
      updateRoutes: () => null,
      updateAppData: () => null,
      updateSandBoxes: () => null,
    };

    this.tmp = new Map();
    this.sandBoxMapper = new Map();
  }

  private watch() {
    this.watcher.addListener("all", async (eventType: string, file: string) => {
      switch (eventType) {
        case "add": {
          this.markdownCache.add(file);
          await this.updater.updateRoutes();
          await this.updater.updateSidebars();
          break;
        }
        case "unlink": {
          await this.markdownCache.update();
          await this.updater.updateRoutes();
          await this.updater.updateSidebars();
          break;
        }
        case "change": {
          this.markdownCache.update();
          await this.updater.updateSandBoxes();
          await this.updater.updateAppData();
          break;
        }
      }
    });
  }

  private async makeViteVirtualPlugin() {
    const [sidebars, updateSidebars] = await withVirtual(
      VIRTUAL_SIDEBARS_CONFIG_ID,
      this.makeSidebars.bind(this)
    );
    const [routes, updateRoutes] = await withVirtual(
      VIRTUAL_ROUTER_CONFIG_ID,
      this.makeRoutes.bind(this)
    );
    const [appData, updateAppData] = await withVirtual(
      VIRTUAL_APP_DATA_ID,
      this.makeAppData.bind(this)
    );
    const [sandboxes, updateSandboxes] = await withVirtual(
      VIRTUAL_SANDBOXES_ID,
      this.makeSandboxes.bind(this)
    );

    this.updater.updateSidebars = updateSidebars;
    this.updater.updateAppData = updateAppData;
    this.updater.updateRoutes = updateRoutes;
    this.updater.updateSandBoxes = updateSandboxes;

    return {
      sidebars,
      routes,
      appData,
      sandboxes,
    };
  }

  private async makeRoutes(): Promise<string> {
    const content = `
      import React from 'react';

      export const routes = [
        ${this.getMarkdowns()
          .map((o) => {
            return `
          {
            path: "${o.routePath}",
            exact: true,
            component: React.lazy(() => import('${o.fullPath}')),
          }
        `;
          })
          .concat(
            `
            {
              path: "/sandbox",
              exact: true,
              component: React.lazy(() => import('${path.resolve(
                CLIENT_PATH,
                `./components/SandBox/index.js`
              )}')),
            }
            `
          )
          .concat(
            `
            {
              path: "*",
              exact: true,
              component: React.lazy(() => import('${path.resolve(
                this.config.base,
                `./404.js`
              )}')),
            }
          `
          )
          .join(",")}
      ]
    `;

    return content;
  }

  private async makeSidebars(): Promise<SidebarNode[]> {
    let result: SidebarNode[] = [];
    if (!isEmpty(this.config.sidebars)) {
      result = this.config.sidebars;
    } else {
      const resolveSidebarConfig = async () => {
        const parsed = this.getMarkdowns().map((o) => {
          return {
            markdown: o,
            transformedPaths: o.relativePath.split("/").filter((o) => o !== ""),
          };
        });
        const root: SidebarNode = {
          title: "ROOT",
          children: [],
        };

        function parse(
          markdowns: { markdown: Markdown; transformedPaths: string[] }[],
          node: SidebarNode
        ): SidebarNode[] {
          let mapper: {
            [key: string]: {
              markdown: Markdown;
              transformedPaths: string[];
            }[];
          } = {};

          markdowns.forEach(({ markdown, transformedPaths }) => {
            if (!transformedPaths[0]) {
              return;
            }
            if (mapper[transformedPaths[0]]) {
              mapper[transformedPaths[0]].push({
                markdown,
                transformedPaths: transformedPaths.slice(1),
              });
            } else {
              mapper[transformedPaths[0]] = [
                {
                  markdown,
                  transformedPaths: transformedPaths.slice(1),
                },
              ];
            }
          });

          const tmp = Object.entries(mapper).map(([key, value]) => {
            if (value.length === 1 && value[0].transformedPaths.length === 0) {
              return {
                title: value[0].markdown.title,
                path: value[0].markdown.routePath,
              };
            }

            const tmp: SidebarNode = {
              title: key,
              children: [],
            };
            tmp.children = parse(value, tmp);
            return tmp;
          });

          node.children = tmp;
          return tmp;
        }

        return parse(parsed, root);
      };

      result = await resolveSidebarConfig();
    }
    return result;
  }

  private async makeAppData() {
    return {
      title: this.config.title,
      socials: this.config.socials,
      version: pkg.version,
      markdowns: this.getMarkdowns().map((o) => pick(o, ["toc", "routePath"])),
    };
  }

  private makeSandboxes() {
    const mapper = this.getMarkdowns()
      .map((o) => {
        return o.sandboxes;
      })
      .reduce((acc, curr) => {
        return {
          ...acc,
          ...curr,
        };
      }, {});

    Object.entries(mapper).forEach(([key, value]) => {
      this.sandBoxMapper.set(key, value);
    });

    return `
      const sandboxes = {${Object.entries(mapper)
        .map(([key, value]) => {
          return `'${key}': () => import('${key}')`;
        })
        .join(",")}}
        
      export default sandboxes;
    `;
  }

  private setConfig(config: ResolvedUserConfig) {
    this.config = config;
  }

  getTmp() {
    return this.tmp;
  }

  getSandBoxMapper() {
    return this.sandBoxMapper;
  }

  getMarkdowns() {
    return this.markdownCache.getMarkdowns();
  }

  async prepare() {
    await this.markdownCache.prepare();
    const { sidebars, routes, appData, sandboxes } =
      await this.makeViteVirtualPlugin();

    this.watch();

    return {
      sidebars,
      routes,
      appData,
      sandboxes,
    };
  }

  static getInstance(config?: ResolvedUserConfig) {
    if (!Core.instance) {
      Core.instance = new Core(config);
    } else {
      if (config) {
        Core.instance.setConfig(config);
      }
    }
    return Core.instance;
  }
}

export { Core };
