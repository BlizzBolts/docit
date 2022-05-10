import React, { useState, useEffect, useMemo } from "react";
import { IFrameToolsProps } from "./types";
import { StyledIFrameTools, StyledQrCode, StyledIconWrapper } from "./styled";
import qrcode from "qrcode";
import { Svgs } from "../Svgs/index";

const IFrameTools: React.FC<IFrameToolsProps> = (props) => {
  const { moduleId } = props;
  const [qrCodeSrc, setQrCodeSrc] = useState(null);
  const url = useMemo(() => {
    return `${import.meta.env.BASE_URL}#sandbox?moduleId=${moduleId}`;
  }, [moduleId]);

  useEffect(() => {
    qrcode
      .toDataURL(url, {
        margin: 0,
      })
      .then((res) => {
        setQrCodeSrc(res);
      });
  }, [url]);

  return (
    <StyledIFrameTools className="iframe-tools">
      {qrCodeSrc && (
        <StyledQrCode src={qrCodeSrc}>
          <div className="qrcode-wrapper">
            <Svgs.QRCode height="20px" width="20px" />
          </div>
        </StyledQrCode>
      )}
      <StyledIconWrapper onClick={() => window.open(url)}>
        <Svgs.Forward
          style={{ cursor: "pointer" }}
          height="20px"
          width="20px"
        />
      </StyledIconWrapper>
    </StyledIFrameTools>
  );
};

export default IFrameTools;
