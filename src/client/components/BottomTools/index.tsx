import React, { useState, useEffect, useMemo } from "react";
import { BottomToolsProps } from "./types";
import { StyledBottomTools, StyledQrCode, StyledIconWrapper } from "./styled";
import qrcode from "qrcode";
import { Svgs } from "../Svgs/index";

const BottomTools: React.FC<BottomToolsProps> = (props) => {
  const { moduleId } = props;
  const [qrCodeSrc, setQrCodeSrc] = useState(null);
  const url = useMemo(() => {
    return `${window.location.origin}/#sandbox?moduleId=${moduleId}`;
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
    <StyledBottomTools className="bottom-tools">
      {qrCodeSrc && (
        <StyledQrCode src={qrCodeSrc}>
          <div className="qrcode-wrapper">
            <Svgs.QRCode height="20px" width="20px" />
          </div>
        </StyledQrCode>
      )}
      <StyledIconWrapper onClick={() => window.open(url)}>
        <Svgs.OpenInNewTab
          style={{ cursor: "pointer" }}
          height="20px"
          width="20px"
        />
      </StyledIconWrapper>
    </StyledBottomTools>
  );
};

export default BottomTools;
