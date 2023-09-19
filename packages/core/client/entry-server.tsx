import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import React from "react";
import { HydrationProvider, Server } from "react-hydration-provider";
import { logger } from "@blizzbolts/docit-shared";
import { App } from "./App";

export function render(url: string | Partial<Location>, context: { url?: string }) {
  logger.debug("Server render, visiting", url, context);
  return ReactDOMServer.renderToString(
    <HydrationProvider>
      <Server>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Server>
    </HydrationProvider>,
  );
}
