import Koa from "koa";
import koaConnect from "koa-connect";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { resolveConfig } from "./config.js";
import { UserConfig } from "./types.js";
import { docit } from "./plugins/index.js";
import colors from "colors";
import path from "path";
import { BUILD_DIST_PATH } from "./constants.js";

export const start = async (userConfig: UserConfig) => {
  const config = await resolveConfig(userConfig, "start");
  const app = new Koa();
  const vite = await createViteServer({
    base: "/",
    plugins: [await docit("start", config)],
    server: {
      middlewareMode: true,
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
    appType: "custom",
  });

  app.use(koaConnect(vite.middlewares));

  app.use(async (ctx, next: Koa.Next) => {
    const { req } = ctx;
    const { url } = req;

    if (url === "/_next/webpack-hmr") {
      return;
    }

    console.log("request coming", url);
    let template: string, render;
    try {
      template = fs.readFileSync(
        path.resolve(BUILD_DIST_PATH, "./client/index.html"),
        "utf-8"
      );
      template = await vite.transformIndexHtml(url, template);
      render = (
        await vite.ssrLoadModule(
          path.resolve(BUILD_DIST_PATH, "./client/entry-server.js")
        )
      ).render;

      const context = {};
      const appHtml = await render(url, context);
      const html = template.replace(`<!--app-html-->`, appHtml);

      ctx.status = 200;
      ctx.type = "text/html";
      ctx.body = html;
      next();
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      next();
    }
  });

  console.log('started')
  app.listen(3000, () => {
    console.log(
      colors.green("[React SSR]启动成功, 地址为:"),
      colors.green.underline(`http://localhost:${3000}`)
    );
  });

  return app;
};
