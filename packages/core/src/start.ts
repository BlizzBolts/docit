import path from "node:path";
import { createDocitPlugin } from "@blizzbolts/vite-plugin-docit";
import express from "express";
import { createServer as createViteServer } from "vite";

const APP_PATH = "/Users/hao/spaces/projj/github.com/BlizzBolts/docit/packages/app/build";
const r = (p: string = "") => path.resolve(APP_PATH, p);
const ENTRY_CLIENT = r("./entry-client.js");
const ENTRY_SERVER = r("./entry-server.js");

export const start = async () => {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
    plugins: [createDocitPlugin()],
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res) => {
    const url = req.originalUrl;
    try {
      // 1. 读取 index.html
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
      // 2. 应用 Vite HTML 转换。这将会注入 Vite HMR 客户端，
      //    同时也会从 Vite 插件应用 HTML 转换。
      //    例如：@vitejs/plugin-react 中的 global preambles
      template = await vite.transformIndexHtml(url, template);
      // 3. 加载服务器入口。vite.ssrLoadModule 将自动转换
      //    你的 ESM 源码使之可以在 Node.js 中运行！无需打包
      //    并提供类似 HMR 的根据情况随时失效。
      const { render } = await vite.ssrLoadModule(ENTRY_SERVER);
      // 4. 渲染应用的 HTML。这假设 entry-server.js 导出的 `render`
      //    函数调用了适当的 SSR 框架 API。
      //    例如 ReactDOMServer.renderToString()
      const appHtml = await render(url);
      // 5. 注入渲染后的应用程序 HTML 到模板中。
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);
      // 6. 返回渲染后的 HTML。
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      if (e instanceof Error) {
        // 如果捕获到了一个错误，让 Vite 来修复该堆栈，这样它就可以映射回
        // 你的实际源码中。
        vite.ssrFixStacktrace(e);
      }
    }
  });

  const server = app.listen(3000, () => {
    console.log("opened server on", server.address());
  });
};
