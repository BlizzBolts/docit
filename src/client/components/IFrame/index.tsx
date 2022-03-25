import React, { useEffect, useMemo, useRef } from "react";
import { StyleSheetManager } from "styled-components";
import { useFrame } from "react-frame-component";
import { StyledFrame } from "./styled";
import { uniqueId } from "lodash-es";
import { IFrameProps } from "./types";

const IFRAME_MOUNT_ID = "iframe-root";

const FrameChild: React.FC<IFrameProps & { id: string }> = (props) => {
  const { children, id, mobileView } = props;
  const { document: innerDocument } = useFrame();

  useEffect(() => {
    if (!mobileView) {
      const targetIframe = document.getElementById(id);

      const innerBody = innerDocument.getElementById(IFRAME_MOUNT_ID);

      targetIframe.style.height = `${innerBody.clientHeight + 30}px`;
    }
  }, []);

  return (
    <StyleSheetManager target={innerDocument.head}>
      <>{children}</>
    </StyleSheetManager>
  );
};

export const IFrame: React.FC<IFrameProps> = (props) => {
  const { children, mobileView } = props;

  const id = useRef(uniqueId("iframe"));

  const head = useMemo(() => {
    const styleNodes = [...document.head.childNodes].filter(
      (o: HTMLLinkElement) => {
        return (
          o.tagName === "STYLE" && o.type === "text/css" && !o.dataset.styled
        );
      }
    );

    const result = styleNodes.map((o: HTMLLinkElement, index) => {
      return (
        <style key={index} type="text/css">
          {o.innerHTML}
        </style>
      );
    });

    return <>{result}</>;
  }, []);

  return (
    <StyledFrame
      head={head}
      id={id.current}
      initialContent={`<!DOCTYPE html><html><head></head><body><div id="${IFRAME_MOUNT_ID}"></div></body></html>`}
      mountTarget={`#${IFRAME_MOUNT_ID}`}
    >
      <FrameChild id={id.current} mobileView={mobileView}>
        {children}
      </FrameChild>
    </StyledFrame>
  );
};
