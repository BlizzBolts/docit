import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import React from "react";
import { logger } from "@blizzbolts/docit-shared";
import { App } from "./App";

export function render(url: string | Partial<Location>, context: { url?: string }) {
  logger.debug("Server render, visiting", url, context);
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}
