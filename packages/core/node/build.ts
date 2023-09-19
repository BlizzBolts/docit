import path from "node:path";
import { colors, coreLogger, getDirname } from "@blizzbolts/docit-shared/node";
import fsx from "fs-extra";
import { build as viteBuild } from "vite";
import { createDocitPlugin } from "@blizzbolts/vite-plugin-docit";
import { glob } from "glob";

const buildForSSR = async (root: string) => {
  const r = (p: string = "") => path.resolve(getDirname(import.meta.url), "../", p);
  const ENTRY_CLIENT = r("./client/entry-client.js");
  const ENTRY_SERVER = r("./client/entry-server.js");

  const template = await fsx.readFile(r("./client/index.html"), { encoding: "utf-8" });
  const html = template.replace(`<!--entry-point-->`, `/@fs${ENTRY_CLIENT}`);

  await fsx.writeFile(r("./client/index.html"), html);

  coreLogger.log("");
  coreLogger.info(colors.cyan("Building Docit SSR assets..."));
  await viteBuild({
    root: r("./client"),
    plugins: [createDocitPlugin()],
    build: {
      emptyOutDir: true,
      outDir: path.resolve(process.cwd(), "./.docit", "./build/client"),
    },
  });

  await viteBuild({
    root: r("./client"),
    plugins: [createDocitPlugin()],
    build: {
      emptyOutDir: true,
      ssr: ENTRY_SERVER,
      outDir: path.resolve(process.cwd(), "./.docit", "./build/node"),
    },
  });
};

const generateStatics = async (root: string) => {
  const r = (p: string) => path.resolve(process.cwd(), "./.docit/build", p);

  await viteBuild({
    root: path.resolve(getDirname(import.meta.url), "../client"),
    plugins: [createDocitPlugin()],
    build: {
      emptyOutDir: true,
      outDir: path.resolve(process.cwd(), "./.docit", "./build/static"),
    },
  });

  const template = await fsx.readFile(r("./client/index.html"), "utf-8");
  const { render } = await import(r("./node/entry-server.js"));
  const docs = await glob("./**/*.{md,mdx}", {
    cwd: path.resolve(process.cwd(), root),
  });
  const routesToPrerender = docs.map((path) => {
    const name = path.match(/(.*)\.mdx?$/)![1];
    return `/${name}`;
  });
  for (const url of routesToPrerender) {
    const context = {};
    const appHtml = await render(url, context);
    const html = template.replace(`<!--app-html-->`, appHtml);
    const filePath = `./.docit/build/static${url === "/" ? "/index" : url}.html`;
    await fsx.outputFile(path.resolve(process.cwd(), filePath), html);
  }
};

export const build = async (root: string) => {
  await buildForSSR(root);
  await generateStatics(root);
};
