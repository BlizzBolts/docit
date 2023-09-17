import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { HydrationProvider, Client } from "react-hydration-provider";
import { App } from "./App";

ReactDOM.hydrateRoot(
  document.getElementById("docit-root")!,
  <HydrationProvider>
    <Client>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Client>
  </HydrationProvider>,
);
