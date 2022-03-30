import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { Document } from "./components/Document";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import { GlobalStyle, CssVariables } from "./styled";

import Provider from "virtual:provider";
import appData from "virtual:appData";

const App = () => {
  useEffect(() => {
    document.title = appData.title;
  }, []);

  return (
    <Provider>
      <CssVariables />
      <GlobalStyle />
      <Header />
      <Sidebar />
      <Document />
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
