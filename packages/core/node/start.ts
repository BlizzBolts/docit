import path from "node:path";
import type { Server } from "node:http";
import { createDocitPlugin } from "@blizzbolts/vite-plugin-docit";
import express from "express";
import { createServer as createViteServer } from "vite";
import type { DocitConfig } from "@blizzbolts/docit-shared";
import { colors, coreLogger } from "@blizzbolts/docit-shared";
import { getDirname } from "@blizzbolts/docit-shared/node";
import fsx from "fs-extra";
import getPort from "get-port";
import { createHttpTerminator } from "http-terminator";

const r = (p: string = "") => path.resolve(getDirname(import.meta.url), "../", p);
const ENTRY_SERVER = r("./client/entry-server.js");

export const start = async (
  cwd: string,
  config: DocitConfig,
): Promise<{ server: Server; shutDown: () => Promise<void> }> => {
  const app = express();

  const vite = await createViteServer({
    root: r("./client"),
    server: {
      middlewareMode: true,
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
    appType: "custom",
    // FIXME: Config should pass in
    plugins: [await createDocitPlugin(cwd)],
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    const url = req.originalUrl;
    try {
      let template = await fsx.readFile(r("./client/index.html"), { encoding: "utf-8" });
      template = await vite.transformIndexHtml(url, template);
      const { render } = await vite.ssrLoadModule(ENTRY_SERVER);
      const context: { url?: string } = {};
      const appHtml = await render(url, context);
      if (context.url) {
        return res.redirect(301, context.url);
      }

      const html = template.replace(`<!--app-html-->`, appHtml);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
        coreLogger.error(e.stack);
        res.status(500).end(e.stack);
      }
    }
  });

  const port = await getPort({ port: config.server?.port });

  const onListen = () => {
    const address = server.address();
    if (!address) {
      coreLogger.fail("Server starts failed. Please Try again");
      return;
    }

    if (typeof address === "string") {
      coreLogger.success(colors.bold(colors.green(`Docit server listening at http://${address}`)));
    } else {
      let host = address.address;
      const port = address.port;
      if (host === "::") {
        host = "localhost";
      }
      coreLogger.success(
        colors.bold(colors.green(`Docit server listening at http://${host}:${port}`)),
      );
    }
  };

  const server = app.listen(port, onListen);

  const httpTerminator = createHttpTerminator({
    server,
    gracefulTerminationTimeout: 2000,
  });

  server.on("close", async () => {
    coreLogger.info("");
    coreLogger.info("Server is gracefully shutting down");
  });

  const shutDown = async () => {
    if (server.listening) {
      await httpTerminator.terminate();
      process.exit(0);
    }
  };

  process.on("SIGTERM", shutDown);
  process.on("SIGINT", shutDown);

  return {
    server,
    shutDown: async () => {
      await httpTerminator.terminate();
    },
  };
};
