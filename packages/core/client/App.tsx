import { Route, Routes, useNavigate } from "react-router-dom";
import {
  isInBrowser,
  logger,
  markdownPathToRoutePath,
  resolvePath,
} from "@blizzbolts/docit-shared/client";
import appConfig from "@docit/config";
import viteConfig from "@vite/config";
import type React from "react";
import { Header, Layout, Document, SideBar, Page } from "@blizzbolts/docit-theme-default";

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
  const navigate = useNavigate();

  return (
    <Page>
      <Header
        title={appConfig.site?.title || ""}
        navs={appConfig.themeConfig?.nav}
        onNavigate={(o) => {
          navigate(o.url);
        }}
      />
      <Layout>
        <SideBar>1231</SideBar>
        <Document>
          <Routes>
            {docs.map(({ routePath, component: Component }) => {
              return <Route key={routePath} path={routePath} element={<Component />} />;
            })}
          </Routes>
        </Document>
      </Layout>
    </Page>
  );
};
