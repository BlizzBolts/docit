import { createRoot } from "react-dom/client";
import React from "react";
import { App } from "./App";

const container = document.getElementById("docit-root");

if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
