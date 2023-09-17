import type { PluginOption } from "vite";
// FIXME:
const APP_PATH = "/Users/hao/spaces/projj/github.com/BlizzBolts/docit/packages/app/build";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";

export const createDocitPlugin = (): PluginOption[] => {
  const docitPlugin: PluginOption = {
    name: "vite-plugin-docit",
    config(config) {
      return config;
    },
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          const cleanUrl = (url: string): string => url.replace(/#.*$/s, "").replace(/\?.*$/s, "");

          const url = req.url && cleanUrl(req.url);
          if (url?.endsWith(".html")) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            let html = `
              <!DOCTYPE html>
              <html>
                <head>
                  <title></title>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width,initial-scale=1">
                  <meta name="description" content="">
                </head>
                <body>
                  <div id="docit-root"></div>
                  <script type="module" src="/@fs/${APP_PATH}/index.jsx"></script>
                </body>
              </html>`;

            html = await server.transformIndexHtml(url, html, req.originalUrl);
            res.end(html);
            return;
          }
          next();
        });
      };
    },
  };

  return [docitPlugin, mdx(), react()];
};
