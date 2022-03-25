import React, { useEffect, useMemo, useRef, useState } from "react";
import { CodeBlockProps } from "./types";
import hljs from "highlight.js";
import {
  RenderWindow,
  ShowCodeContainer,
  ButtonContainer,
  CodeWindow,
} from "./styled";
import { IFrame } from "../IFrame";

const ShowCode: React.FC<CodeBlockProps> = (props) => {
  const { get, code, lang } = props;

  const ComponentRef = useRef<React.FC>();
  const [isLoading, setIsLoading] = useState(false);
  const [isShowing, setIsShowing] = useState(!Boolean(ComponentRef.current));
  const [_, update] = useState({});

  useEffect(() => {
    setIsLoading(true);
    get()
      .then((res) => {
        setIsLoading(false);
        const { default: Component } = res;
        ComponentRef.current = Component;
        update({});
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  const display = useMemo(() => {
    return hljs.highlight(code.replace(/\n\n/g, "\n"), {
      language: lang || "bash",
    });
  }, [code]);

  const renderCode = () => {
    return (
      <pre style={{ display: isShowing ? "block" : "none", margin: 0 }}>
        <code
          style={{ margin: 0 }}
          className="docit-code"
          dangerouslySetInnerHTML={{ __html: display.value }}
        ></code>
      </pre>
    );
  };

  if (isLoading) {
    return <div>loading</div>;
  }

  if (!Boolean(ComponentRef.current)) {
    return renderCode();
  }

  return (
    <ShowCodeContainer>
      <RenderWindow>
        <IFrame>
          <ComponentRef.current />
        </IFrame>
      </RenderWindow>
      <ButtonContainer>
        <button
          onClick={() => {
            setIsShowing((v) => !v);
          }}
        >
          Show Code
        </button>
      </ButtonContainer>
      <CodeWindow>{renderCode()}</CodeWindow>
    </ShowCodeContainer>
  );
};

export { ShowCode };
