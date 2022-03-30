import React, { Suspense } from "react";
import { routes } from "virtual:routes";
import { renderRoutes } from "react-router-config";
import { MDXProvider } from "@mdx-js/react";
import { ShowCode } from "../../built-in/ShowCode";
import { StyledMarkdown, StyledDocument } from "./styled";
import { ApiTable } from "../../built-in/ApiTable";
import { useDefaultRoute } from "../../hooks/useDefaultRoute";
import { ErrorBoundary } from "../ErrorBoundary";

const Document = () => {
  useDefaultRoute();
  return (
    <StyledDocument className="docit-document">
      <ErrorBoundary>
        <StyledMarkdown className="docit-markdown">
          <MDXProvider
            components={{
              ShowCode,
              ApiTable,
              Suspense,
              code: (props) => {
                return (
                  <code
                    className={`${[props.className, "docit-code"].join(" ")}`}
                  >
                    {props.children}
                  </code>
                );
              },
            }}
          >
            <Suspense fallback={<></>}>{renderRoutes(routes)}</Suspense>
          </MDXProvider>
        </StyledMarkdown>
      </ErrorBoundary>
    </StyledDocument>
  );
};

export { Document };
