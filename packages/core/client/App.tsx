import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { logger, markdownPathToRoutePath } from "@blizzbolts/docit-shared/client";

const docs = import.meta.glob("doc-root/**/*.(md|mdx)", {
  eager: true,
});

logger.info("Docs:", docs);

const routes = Object.keys(docs).map((path) => {
  const routePath = markdownPathToRoutePath(path);
  const name = routePath.split("/")[routePath.split("/").length - 1];
  return {
    name: name || "index",
    path: routePath,
    component: (docs?.[path] as { default: React.ComponentType }).default,
  };
});

export const App = () => {
  return (
    <>
      <nav>
        <ul>
          {routes.map(({ name, path }) => {
            return (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
        </ul>
        <Routes>
          {routes.map(({ path, component: RouteComp }) => {
            return <Route key={path} path={path} element={<RouteComp />} />;
          })}
        </Routes>
      </nav>
    </>
  );
};
