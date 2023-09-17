import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import React from "react";
import { HydrationProvider, Server } from "react-hydration-provider";
import { App } from "./App";

export function render(url: string | Partial<Location>) {
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
