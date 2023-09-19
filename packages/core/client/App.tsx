import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { logger } from "@blizzbolts/docit-shared/client";
import { PageA } from "./pages/A";
import { PageB } from "./pages/B";
import { PageC } from "./pages/sub/C";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const docs = import.meta.glob("doc-root/**/*.(md|mdx)", {
  eager: true,
});

logger.info("Docs:", docs);

const docsRoutes = Object.keys(docs).map((path) => {
  const pattern = /^(?:\.\.\/)+|\/?docs\/?|\.mdx?$/g;
  const routePath = "/" + path.replace(pattern, "");
  const name = routePath.split("/")[routePath.split("/").length - 1];
  return {
    name: name,
    path: routePath,
    component: docs[path].default,
  };
});

const routes = [
  {
    name: "A",
    path: "/A",
    component: PageA,
  },
  {
    name: "B",
    path: "/B",
    component: PageB,
  },
  {
    name: "C",
    path: "/sub/C",
    component: PageC,
  },
  ...docsRoutes,
];

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
