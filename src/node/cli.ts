import minimist from "minimist";
import chalk from "chalk";
import chokidar from "chokidar";
import path from "path";
import { ViteDevServer } from "vite";
import { merge } from "lodash-es";
import { start } from "./start.js";
import { build } from "./build.js";
import {
  isFileExists,
  readUserConfigFile,
  resolveAbsPath,
} from "./utils/index.js";
import { pkg } from "./constants.js";
import Koa from "koa";

const argv: any = minimist(process.argv.slice(2));
const command: string = argv._[0];
const root: string = argv._[1] || "docs";

console.log(chalk.greenBright(`Running Docit@${pkg.version}`));

const configFilePath = path.resolve(
  resolveAbsPath(root),
  "./.docit/docit.config.js"
);
let server: Koa = null;

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

// FIXME:
// if (isFileExists(configFilePath) && command === "start") {
//   const watcher = chokidar.watch(configFilePath);
//   watcher.on("change", () => {
//     if (server) {
//       server.close();
//     }
//     bootstrap();
//   });
// }

bootstrap();
