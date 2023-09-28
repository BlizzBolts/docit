import { Link, Route, Routes } from "react-router-dom";
import {
  isInBrowser,
  logger,
  markdownPathToRoutePath,
  resolvePath,
} from "@blizzbolts/docit-shared/client";
import appConfig from "@docit/config";
import viteConfig from "@vite/config";

interface DocumentItem {
  name: string;
  routePath: string;
  component: React.ComponentType;
}

const docComponents: Record<string, React.ComponentType> = import.meta.glob(
  "doc-root/**/*.(md|mdx)",
  {
    eager: true,
    import: "default",
  },
);

const docs: DocumentItem[] = Object.entries(docComponents).map((entry) => {
  const [key, component] = entry;

  // key is relative path to vite root, using resolveFrom to make it abs path
  const absFilePath = resolvePath(viteConfig.root, key);
  const routePath = markdownPathToRoutePath(absFilePath, appConfig.docRoot!);
  const parts = routePath.split("/");
  return {
    routePath,
    name: parts[parts.length - 1] || "index",
    component,
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
          {docs.map(({ routePath, component: Document }) => {
            return <Route key={routePath} path={routePath} element={<Document />} />;
          })}
        </Routes>
      </nav>
    </>
  );
};
