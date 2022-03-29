import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Document from "./components/Document";
import { Header } from "./components/Header";
import { StyledAside, StyledDocument, StyledMain } from "./styled";
import { GlobalStyle, CssVariables } from "./styled";
import Provider from "virtual:provider";
import appData from "virtual:appData";
import { sidebarVisible } from "./model";

const App = () => {
  useEffect(() => {
    document.title = appData.title;
  }, []);
  const visible = sidebarVisible.use();
  return (
    <Provider>
      <CssVariables />
      <GlobalStyle />
      <StyledMain>
        <Header />
        <StyledAside visible={`${visible}`} />
        <StyledDocument>
          <Document />
        </StyledDocument>
      </StyledMain>
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
