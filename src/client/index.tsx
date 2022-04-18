import React, { useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import { useLocation } from "react-router";
import { Document } from "./components/Document";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import { GlobalStyle, CssVariables } from "./styled";

import Provider from "virtual:provider";
import appData from "virtual:appData";
import { routes } from "virtual:routes";

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        <Suspense fallback={<></>}>
          <route.component {...props} routes={route.routes} />
        </Suspense>
      )}
    />
  );
}

const App = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = appData.title;
    console.log(`%cDocit@${appData.version}`, `color: #9B1D30;`);
  }, []);

  return (
    <Provider>
      <CssVariables />
      <GlobalStyle />
      {location.pathname !== "/sandbox" ? (
        <>
          <Header />
          <Sidebar />
          <Document />
        </>
      ) : (
        <Switch>
          {routes
            .filter((o) => o.path === "/sandbox")
            .map((route) => (
              <RouteWithSubRoutes key={route.path} {...route} />
            ))}
        </Switch>
      )}
    </Provider>
  );
};

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);
