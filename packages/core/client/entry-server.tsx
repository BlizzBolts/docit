import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { logger } from "@blizzbolts/docit-shared";
import { App } from "./App";

export function render(url: string | Partial<Location>, context: { url?: string }) {
  logger.debug("Server Rendering: ", url, context);
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}
