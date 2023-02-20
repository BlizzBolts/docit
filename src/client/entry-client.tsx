import React from "react";
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

hydrateRoot(
  document.getElementById("app"),
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
