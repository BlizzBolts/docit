import path from "node:path";
import type { DocitConfig } from "@blizzbolts/docit-shared/node";
import {
  colors,
  coreLogger,
  getDirname,
  markdownPathToRoutePath,
  retrieveUserEnv,
} from "@blizzbolts/docit-shared/node";
import { pkgUpSync } from "pkg-up";
import fsx from "fs-extra";
import type { InlineConfig } from "vite";
import { build as viteBuild } from "vite";
import { createDocitPlugin } from "@blizzbolts/vite-plugin-docit";
import { glob } from "glob";

const CORE_PKG_DIST_DIR = path.dirname(pkgUpSync({ cwd: getDirname(import.meta.url) })!);

export const build = async (cwd: string, config: DocitConfig) => {
  cwd = path.resolve(cwd);
  coreLogger.start(colors.cyan(`Start building for production...`));

  await fsx.remove(config.outDir!);

  await buildForSSR(cwd, config);
  await buildForStatic(cwd, config);

  coreLogger.ready(
    colors.cyan(`Static files generated at [${path.resolve(cwd, config.docRoot!, "./dist")}]`),
  );
};

const buildForSSR = async (cwd: string, config: DocitConfig) => {
  const userEnv = await retrieveUserEnv(cwd);
  const r = (p: string = "") => path.resolve(CORE_PKG_DIST_DIR, "./dist", p);
  const ENTRY_SERVER = r("./client/entry-server.js");

  const viteConfig: InlineConfig = {
    root: r("./client"),
    plugins: [await createDocitPlugin(cwd, config)],
  };
  // build client
  await viteBuild({
    ...viteConfig,
    build: {
      emptyOutDir: true,
      outDir: config.outDir!,
    },
  });

  // build server
  // FIXME: should build into a cache folder, only output html to user path, currently using r
  await viteBuild({
    ...viteConfig,
    ssr: {
      format: userEnv.isEsm ? "esm" : "cjs",
    },
    build: {
      emptyOutDir: true,
      ssr: ENTRY_SERVER,
      // outDir: path.resolve(cwd, config.docRoot!, "./dist/server"),
      outDir: r("./tmp/server"),
    },
  });
};

const buildForStatic = async (cwd: string, config: DocitConfig) => {
  const userEnv = await retrieveUserEnv(cwd);
  const r = (p: string = "") => path.resolve(cwd, config.docRoot!, "./dist", p);

  coreLogger.log("");
  coreLogger.box(colors.cyan("Generating Static HTMLs..."));

  const templatePath = r("./index.html");

  const template = await fsx.readFile(templatePath, "utf-8");
  const { render } = await import(
    path.resolve(
      CORE_PKG_DIST_DIR,
      `./dist/tmp/server/entry-server.${userEnv.isEsm ? "js" : "cjs"}`,
    )
  );
  const docs = await glob("./**/*.{md,mdx}", {
    cwd: config.docRoot!,
  });
  const routePaths = docs.map((p) => {
    return markdownPathToRoutePath(path.resolve(config.docRoot!, "./", p), config.docRoot!);
  });
  for (const routePath of routePaths) {
    const context = {};
    const appHtml = await render(routePath, context);
    const html = template.replace(`<!--app-html-->`, appHtml);

    const filePath = path.join(
      config.outDir!,
      `./${routePath.endsWith("/") ? `${routePath}index` : routePath}.html`,
    );
    await fsx.outputFile(path.resolve(process.cwd(), filePath), html);
  }
};
