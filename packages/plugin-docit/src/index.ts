import type { Plugin } from "vite";
export const createDocitPlugin = (): Plugin => {
  return {
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
                  <div id="app">123</div>
                  <script src="/@fs/index.js"></script>
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
};
