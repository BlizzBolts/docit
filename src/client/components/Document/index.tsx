import React, { Suspense } from "react";
import { routes } from "virtual:routes";
import { renderRoutes } from "react-router-config";
import { MDXProvider } from "@mdx-js/react";
import { ShowCode } from "../../built-in/ShowCode";
import { StyledMarkdown, StyledDocument } from "./styled";
import { ApiTable } from "../../built-in/ApiTable";
import { useDefaultRoute } from "../../hooks/useDefaultRoute";
import { usePositioning } from "../../hooks/usePositioning";

const Document = () => {
  useDefaultRoute();
  usePositioning();

  return (
    <StyledDocument className="docit-document">
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
            p: (props) => {
              return <div className="docit-paragraph">{props.children}</div>;
            },
          }}
        >
          <Suspense fallback={<></>}>{renderRoutes(routes)}</Suspense>
        </MDXProvider>
      </StyledMarkdown>
    </StyledDocument>
  );
};

export { Document };
