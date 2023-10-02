import { Link, Route, Routes } from "react-router-dom";
import {
  isInBrowser,
  logger,
  markdownPathToRoutePath,
  resolvePath,
} from "@blizzbolts/docit-shared/client";
import appConfig from "@docit/config";
import viteConfig from "@vite/config";
import { Header, Layout } from "@blizzbolts/docit-theme-default";

interface DocumentItem {
  name: string;
  routePath: string;
  component: React.ComponentType;
}

const docComponents = import.meta.glob("doc-root/**/*.(md|mdx)", {
  eager: true,
}) as Record<string, { default: React.ComponentType }>;

const docs: DocumentItem[] = Object.entries(docComponents).map((entry) => {
  const [key, component] = entry;

  // key is relative path to vite root, using resolveFrom to make it abs path
  const absFilePath = resolvePath(viteConfig.root, key);
  const routePath = markdownPathToRoutePath(absFilePath, appConfig.docRoot!);
  const parts = routePath.split("/");
  return {
    routePath,
    name: parts[parts.length - 1] || "index",
    component: component.default,
  };
});

if (isInBrowser()) {
  logger.info("Docs:", docs);
  logger.info("AppConfig from @docit/config:", appConfig);
}

export const App = () => {
  return (
    <Layout>
      <Header title={appConfig.site?.title || ""} />
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
          {docs.map(({ routePath, component: Component }) => {
            return <Route key={routePath} path={routePath} element={<Component />} />;
          })}
        </Routes>
      </nav>
    </Layout>
  );
};
