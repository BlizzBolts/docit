import { Link, Route, Routes } from "react-router-dom";
import {
  isInBrowser,
  logger,
  markdownPathToRoutePath,
  resolvePath,
} from "@blizzbolts/docit-shared/client";
import appConfig from "@docit/config";
import viteConfig from "@vite/config";
import { Suspense, lazy } from "react";

interface DocumentItem {
  name: string;
  routePath: string;
  component: () => Promise<{ default: React.ComponentType }>;
}

const docComponents = import.meta.glob("doc-root/**/*.(md|mdx)", {
  eager: false,
}) as Record<string, () => Promise<{ default: React.ComponentType }>>;

const docs: DocumentItem[] = Object.entries(docComponents).map((entry) => {
  const [key, component] = entry;

  // key is relative path to vite root, using resolveFrom to make it abs path
  const absFilePath = resolvePath(viteConfig.root, key);
  const routePath = markdownPathToRoutePath(absFilePath, appConfig.docRoot!);
  const parts = routePath.split("/");
  return {
    routePath,
    name: parts[parts.length - 1] || "index",
    component: component,
  };
});

if (isInBrowser()) {
  logger.info("Docs:", docs);
  logger.info("AppConfig from @docit/config:", appConfig);
}

export const App = () => {
  return (
    <>
      <nav>
        <ul>
          {docs.map(({ name, routePath }) => {
            return (
              <li key={routePath}>
                <Link to={routePath}>{name}</Link>
              </li>
            );
          })}
        </ul>
        <Routes>
          {docs.map(({ routePath, component }) => {
            const Component = lazy(component);
            return (
              <Route
                key={routePath}
                path={routePath}
                element={
                  <Suspense fallback={<div>loading...</div>}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      </nav>
    </>
  );
};
