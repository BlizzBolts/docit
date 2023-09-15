import path from "path";
import chokidar from "chokidar";
import { isEmpty, pick } from "lodash-es";
import type { PluginOption } from "vite";
import type { Command, ResolvedUserConfig, SidebarNode } from "../types.js";
import {
  MD_PATTERN,
  VIRTUAL_APP_DATA_ID,
  VIRTUAL_ROUTER_CONFIG_ID,
  VIRTUAL_SIDEBARS_CONFIG_ID,
  VIRTUAL_SANDBOXES_ID,
} from "../constants.js";
import type { VirtualUpdater } from "../plugins/virtual/index.js";
import { withVirtual } from "../plugins/virtual/index.js";
import { pkg } from "../constants.js";
import { logger } from "../utils/index.js";
import { Markdown } from "./Markdown.js";
import { MarkdownCache } from "./MarkdownCache.js";
import { resolveSidebars } from "./sidebars.js";

class Core {
  private static instance: Core;
  private command: Command;
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

  private constructor(command: Command, config: ResolvedUserConfig) {
    this.config = config;
    this.command = command;
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
    const watchedPath = path.join(this.config.docs, MD_PATTERN);
    this.watcher = chokidar.watch(watchedPath, {
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

    logger.info(`
Start watching docs at 
${watchedPath}
`);
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
    const importReact = `
      import React from 'react'
    `;

    const importComponents = this.getMarkdowns()
      .map((o, index) => {
        return `import ${`Component${index}`} from '${o.fullPath}';`;
      })
      .join("\n");

    const exports =
      "export const routes = [" +
      this.getMarkdowns()
        .map(
          (o, index) => `
        {
          path: "${o.routePath}",
          component: ${`Component${index}`}
        }`
        )
        .join(",\n") +
      "]";

    return `
      ${importReact}
      ${importComponents}
      ${exports}
    `;
  }

  private async _makeRoutes(): Promise<string> {
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

  async makeSidebars(): Promise<SidebarNode[]> {
    return resolveSidebars(this.config, this.getMarkdowns());
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

  getTmp() {
    return this.tmp;
  }

  getSandBoxMapper() {
    return this.sandBoxMapper;
  }

  getMarkdowns() {
    return this.markdownCache.getMarkdowns();
  }

  async prepare(): Promise<PluginOption> {
    await this.markdownCache.prepare();
    const { sidebars, routes, appData, sandboxes } =
      await this.makeViteVirtualPlugin();

    if (this.command === "start") {
      this.watch();
    }

    return [sidebars, routes, appData, sandboxes];
  }

  static getInstance(command?: Command, config?: ResolvedUserConfig) {
    if (!Core.instance) {
      Core.instance = new Core(command, config);
    }

    return Core.instance;
  }
}

export { Core };
