import path from "node:path";
import { createDocitPlugin } from "@blizzbolts/vite-plugin-docit";
import express from "express";
import { createServer as createViteServer } from "vite";
import { coreLogger } from "@blizzbolts/docit-shared";

// FIXME:
const APP_PATH = "/Users/hao/spaces/projj/github.com/BlizzBolts/docit/app/build";
const r = (p: string = "") => path.resolve(APP_PATH, p);
const ENTRY_CLIENT = r("./entry-client.js");
const ENTRY_SERVER = r("./entry-server.js");

export const start = async (root: string) => {
  const app = express();

  const vite = await createViteServer({
    root: path.resolve(process.cwd(), "./", root),
    server: {
      middlewareMode: true,
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
    appType: "custom",
    plugins: [createDocitPlugin({ root })],
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    const url = req.originalUrl;
    try {
      let template = `
        <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script>const global = globalThis;</script>
    <title>Docit</title>
    <!--preload-links-->
  </head>
  <body>
    <div id="docit-root"><!--app-html--></div>
  </body>
  <script type="module" src="/@fs/${ENTRY_CLIENT}"></script>
  </html>`;
      template = await vite.transformIndexHtml(url, template);
      const { render } = await vite.ssrLoadModule(ENTRY_SERVER);
      const context: { url?: string } = {};
      const appHtml = await render(url, context);
      if (context.url) {
        return res.redirect(301, context.url);
      }
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      if (e instanceof Error) {
        // 如果捕获到了一个错误，让 Vite 来修复该堆栈，这样它就可以映射回
        // 你的实际源码中。
        vite.ssrFixStacktrace(e);
        coreLogger.error(e.stack);
        res.status(500).end(e.stack);
      }
    }
  });

  const server = app.listen(3000, () => {
    console.log("opened server on", server.address());
  });
};
