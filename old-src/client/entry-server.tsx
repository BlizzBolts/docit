import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { App } from "./App";

const sheet = new ServerStyleSheet();

// context ?FIXME
export function render(url: string, context: any) {
  return ReactDOMServer.renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StyleSheetManager>
  );
}
