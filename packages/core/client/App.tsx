import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { logger } from "@blizzbolts/docit-shared/client";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const docs = import.meta.glob("/**/*.(md|mdx)", {
  eager: true,
});

logger.debug("Docs:", docs);

const routes = Object.keys(docs).map((path) => {
  const name = path.match(/\/(.*)\.mdx?$/)![1];
  return {
    name: name,
    path: `/${name}`,
    component: docs[path].default,
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
