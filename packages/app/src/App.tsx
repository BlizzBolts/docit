import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Test from "./Test.mdx";

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
  {
    name: "Test",
    component: Test, //import("./About.js"),
    path: "/test",
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
