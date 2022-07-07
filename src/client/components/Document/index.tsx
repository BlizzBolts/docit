import React, { Suspense } from "react";
import { MDXProvider } from "@mdx-js/react";
import { StyledMarkdown, StyledDocument } from "./styled";
import ShowCode from "../../built-in/ShowCode";
import ApiTable from "../../built-in/ApiTable";
import { useAnchors } from "../../hooks/useAnchors";
import { Toc } from "../Toc";

const Document: React.FC = (props) => {
  const { children } = props;
  useAnchors();

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
          {children}
        </MDXProvider>
      </StyledMarkdown>
      <Toc />
    </StyledDocument>
  );
};

export { Document };
