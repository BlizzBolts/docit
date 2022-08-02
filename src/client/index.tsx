import React, { useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Document } from "./components/Document";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import { GlobalStyle, CssVariables } from "./styled";

import Provider from "virtual:provider";
import appData from "virtual:appData";
import { routes } from "virtual:routes";
import { useDefaultRoute } from "./hooks/useDefaultRoute";

const App: React.FC = ({ children }) => {
  useEffect(() => {
    document.title = appData.title;
    console.log(`%cDocit@${appData.version}`, `color: #9B1D30;`);
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <Document>{children}</Document>
    </>
  );
};

const Root = () => {
  useDefaultRoute();

  return (
    <Provider>
      <CssVariables />
      <GlobalStyle />
      <Routes>
        {routes.map((route) => {
          const Component = route.component;
          return (
            <Route
              key={route.path}
              path={encodeURI(route.path)}
              element={
                route.path !== "/__sandbox__" ? (
                  <App>
                    <Suspense fallback={<></>}>
                      <Component />
                    </Suspense>
                  </App>
                ) : (
                  <Suspense fallback={<></>}>
                    <Component />
                  </Suspense>
                )
              }
            />
          );
        })}
      </Routes>
    </Provider>
  );
};

ReactDOM.render(
  <HashRouter>
    <Root />
  </HashRouter>,
  document.getElementById("app")
);
