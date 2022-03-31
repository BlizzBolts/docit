import minimist from "minimist";
import chalk from "chalk";
import chokidar from "chokidar";
import path from "path";
import fsx from "fs-extra";
import { ViteDevServer } from "vite";
import { merge } from "lodash-es";
import { PKG_JSON_PATH } from "./constants.js";
import { UserConfig } from "./types.js";
import { start } from "./start.js";
import { build } from "./build.js";
import {
  isFileExists,
  readUserConfigFile,
  resolveAbsPath,
} from "./utils/index.js";

const argv: any = minimist(process.argv.slice(2));
const command: string = argv._[0];
const root: string = argv._[1] || "docs";

const pkg = fsx.readJSONSync(PKG_JSON_PATH);

console.log(chalk.greenBright(`Running Docit@${pkg.version}`));

const configFilePath = path.resolve(
  resolveAbsPath(root),
  "./.docit/docit.config.js"
);
let server: ViteDevServer = null;

const bootstrap = () => {
  readUserConfigFile(configFilePath).then((userConfig) => {
    if (command === "start") {
      start(merge({ root }, userConfig)).then((s) => {
        server = s;
      });
    }
    if (command === "build") {
      build(merge({ root }, userConfig));
    }
  });
};

if (isFileExists(configFilePath) && command === "start") {
  const watcher = chokidar.watch(configFilePath);
  watcher.on("change", () => {
    if (server) {
      server.close();
    }
    bootstrap();
  });
}

bootstrap();
