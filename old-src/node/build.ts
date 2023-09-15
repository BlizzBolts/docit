import path from "path";
import { build as viteBuild } from "vite";
import chalk from "chalk";
import fsx from "fs-extra";
import { resolveConfig } from "./config.js";
import { docit } from "./plugins/index.js";
import type { UserConfig } from "./types.js";
import { resolveAbsPath } from "./utils/paths.js";
import { BUILD_DIST_PATH } from "./constants.js";
import { logger } from "./utils/index.js";
import { Core } from "./core/index.js";

export const build = async (userConfig: UserConfig) => {
  const config = await resolveConfig(userConfig, "build");

  const buildServer = async () => {
    logger.info(`${chalk.red("[Docit]")} Start building server...`);

    return viteBuild({
      plugins: [await docit("build", config)],
      build: {
        outDir: path.resolve(process.cwd(), "./docs-dist/server"),
        emptyOutDir: true,
        ssr: true,
        rollupOptions: {
          input: resolveAbsPath("./client/entry-server.js", BUILD_DIST_PATH),
        },
      },
    });
  };

  const buildClient = async () => {
    logger.info(`${chalk.red("[Docit]")} Start building client...`);

    return viteBuild({
      plugins: [await docit("build", config)],
      build: {
        outDir: path.resolve(process.cwd(), "./docs-dist/client"),
        emptyOutDir: true,
      },
    });
  };

  const generateStatic = async () => {
    const sidebarConfigs = await Core.getInstance().makeSidebars();
    console.log(sidebarConfigs);
    const routes = sidebarConfigs.map((o) => o.path);
    const template = await fsx.readFile(
      path.resolve(process.cwd(), "./docs-dist/client/index.html"),
      "utf-8"
    );
    const { render } = await import(
      path.resolve(process.cwd(), "./docs-dist/server/entry-server.js")
    );

    console.log(render);
  };

  await buildServer();
  logger.info(`${chalk.red("[Docit]")} Server Bundled!`);

  await buildClient();
  logger.info(`${chalk.red("[Docit]")} Client Bundled!`);

  await generateStatic();
};
