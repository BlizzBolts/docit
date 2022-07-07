import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import { StyledMarkdown, StyledDocument } from "./styled";
import ApiTable from "../../built-in/ApiTable";
import { useAnchors } from "../../hooks/useAnchors";
import { Toc } from "../Toc";

import hljs from "highlight.js";
import {
  StyledRenderWindow,
  StyledShowCodeContainer,
  StyledButtonContainer,
  StyledCodeWindow,
} from "../../built-in/ShowCode/styled";
import { Loading } from "../../components/Loading";
import sandboxes from "virtual:sandboxes";

const Document: React.FC = (props) => {
  const { children } = props;
  useAnchors();

  return (
    <StyledDocument className="docit-document">
      <StyledMarkdown className="docit-markdown">
        <MDXProvider
          components={{
            ShowCode: (props) => {
              const { code, lang, mobileView, moduleId } = props;

              const ComponentRef = useRef<React.FC>(() => <></>);
              const [isLoading, setIsLoading] = useState(false);
              const [isShowing, setIsShowing] = useState(false);
              const [_, update] = useState({});

              useEffect(() => {
                if (sandboxes[moduleId] && !mobileView) {
                  setIsLoading(true);
                  sandboxes[moduleId]()
                    .then((res) => {
                      const { default: Component } = res;
                      ComponentRef.current = Component;
                      update({});
                    })
                    .finally(() => {
                      setIsLoading(false);
                    });
                }
              }, []);

              const display = useMemo(() => {
                return hljs.highlight(code.replace(/\n\n/g, "\n"), {
                  language: lang || "bash",
                });
              }, [code]);

              const renderCode = () => {
                return (
                  <pre>
                    <code
                      style={{ margin: 0 }}
                      className="docit-code"
                      dangerouslySetInnerHTML={{ __html: display.value }}
                    ></code>
                  </pre>
                );
              };

              return (
                <Loading loading={isLoading}>
                  <StyledShowCodeContainer mobileView={mobileView}>
                    <StyledRenderWindow>
                      <iframe
                        src={`#/__sandbox__?moduleId=${moduleId}`}
                        style={{ border: 0, width: "100%", height: "100%" }}
                      ></iframe>
                    </StyledRenderWindow>
                    <StyledButtonContainer>
                      <button
                        onClick={() => {
                          setIsShowing((v) => !v);
                        }}
                      >
                        Show Code
                      </button>
                    </StyledButtonContainer>
                    <StyledCodeWindow show={isShowing}>
                      {renderCode()}
                    </StyledCodeWindow>
                  </StyledShowCodeContainer>
                </Loading>
              );
            },
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
