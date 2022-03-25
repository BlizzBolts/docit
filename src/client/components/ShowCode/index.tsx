import React, { useEffect, useMemo, useRef, useState } from "react";
import { ShowCodeProps } from "./types";
import hljs from "highlight.js";
import {
  RenderWindow,
  ShowCodeContainer,
  ButtonContainer,
  CodeWindow,
} from "./styled";
import { IFrame } from "../IFrame";
import { Loading } from "../Loading";

const ShowCode: React.FC<ShowCodeProps> = (props) => {
  const { get, code, lang, mobileView } = props;

  const ComponentRef = useRef<React.FC>(() => <></>);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
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
      <ShowCodeContainer mobileView={mobileView}>
        <RenderWindow>
          <IFrame mobileView={mobileView}>
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
        <CodeWindow show={isShowing}>{renderCode()}</CodeWindow>
      </ShowCodeContainer>
    </Loading>
  );
};

export { ShowCode };
