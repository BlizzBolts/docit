import path from "node:path";
import {
  colors,
  coreLogger,
  getDirname,
  markdownPathToRoutePath,
} from "@blizzbolts/docit-shared/node";
import fsx from "fs-extra";
import type { InlineConfig } from "vite";
import { build as viteBuild } from "vite";
import { createDocitPlugin } from "@blizzbolts/vite-plugin-docit";
import { glob } from "glob";
import { preFlight } from "./pre-flight";

export const build = async (root: string) => {
  await preFlight();
  coreLogger.start(colors.cyan(`Start building`));

  await buildForSSR(root);
  await generateStatics(root);
  coreLogger.ready(
    colors.cyan(
      `Static files generated at ${path.resolve(process.cwd(), "./.docit/build/static")}`,
    ),
  );
};

const buildForSSR = async (root: string) => {
  const r = (p: string = "") => path.resolve(getDirname(import.meta.url), "../", p);
  const ENTRY_SERVER = r("./client/entry-server.js");

  const viteConfig: InlineConfig = {
    root: r("./client"),
    resolve: {
      alias: {
        "doc-root": path.resolve(process.cwd(), "./", root),
      },
    },
    plugins: [createDocitPlugin()],
  };
  // build client
  await viteBuild({
    ...viteConfig,
    build: {
      emptyOutDir: true,
      outDir: path.resolve(process.cwd(), "./.docit", "./build/static"),
    },
  });

  // build server
  await viteBuild({
    ...viteConfig,
    build: {
      emptyOutDir: true,
      ssr: ENTRY_SERVER,
      outDir: path.resolve(process.cwd(), "./.docit", "./build/server"),
    },
  });
};

const generateStatics = async (root: string) => {
  const r = (p: string = "") => path.resolve(process.cwd(), "./.docit/build", p);

  coreLogger.log("");
  coreLogger.box(colors.cyan("Generating Static HTMLs..."));

  const templatePath = r("./static/index.html");

  const template = await fsx.readFile(templatePath, "utf-8");
  const { render } = await import(r("./server/entry-server.js"));
  const docs = await glob("./**/*.{md,mdx}", {
    cwd: path.resolve(process.cwd(), root),
  });
  const routesToPrerender = docs.map((path) => markdownPathToRoutePath(path));
  for (const url of routesToPrerender) {
    const context = {};
    const appHtml = await render(url, context);
    const html = template.replace(`<!--app-html-->`, appHtml);
    const filePath = `./.docit/build/static${url === "/" ? "/index" : url}.html`;
    await fsx.outputFile(path.resolve(process.cwd(), filePath), html);
  }
};
