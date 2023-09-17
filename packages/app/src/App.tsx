import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { logger } from "@blizzbolts/docit-shared/client";
import Home from "./Home";
import About from "./About";

const pages = import.meta.glob("/**/*.md", {
  eager: true,
});

logger.info(pages);

const routes = [
  {
    name: "Home",
    component: Home, //import("./Home.js"),
    path: "/",
  },
  {
    name: "About",
    component: About, //import("./About.js"),
    path: "/about",
  },
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
