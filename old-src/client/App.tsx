import React, { useEffect, Suspense } from "react";
import appData from "virtual:appData";
import { routes } from "virtual:routes";
import { Route, Routes } from "react-router-dom";
import { Document } from "./components/Document";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { GlobalStyle, CssVariables } from "./styled";
import { useDefaultRoute } from "./hooks/useDefaultRoute";

const App = () => {
  useDefaultRoute();

  useEffect(() => {
    document.title = appData.title;
    console.log(`%cDocit@${appData.version}`, `color: #9B1D30;`);
  }, []);

  return (
    <React.Fragment>
      <CssVariables />
      <GlobalStyle />
      <Header />
      <Sidebar />
      <Document>
        <Routes>
          {routes.map((o) => {
            return (
              <Route
                key={o.path}
                path={o.path}
                element={<o.component />}
              ></Route>
            );
          })}
        </Routes>
      </Document>
    </React.Fragment>
  );
};

export { App };
