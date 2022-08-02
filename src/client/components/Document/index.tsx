import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import { StyledMarkdown, StyledDocument } from "./styled";
import { ApiTable } from "../../built-in/ApiTable";
import { ShowCode } from "../../built-in/ShowCode";
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
