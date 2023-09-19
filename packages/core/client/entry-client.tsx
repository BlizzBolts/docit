import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { App } from "./App";

ReactDOM.hydrateRoot(
  document.getElementById("docit-root")!,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
