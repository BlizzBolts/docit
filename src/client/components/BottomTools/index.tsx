import React, { useState, useEffect } from "react";
import { BottomToolsProps } from "./types";
import { StyledBottomTools, StyledQrCode } from "./styled";
import qrcode from "qrcode";
import { Svgs } from "../Svgs/index";

const BottomTools: React.FC<BottomToolsProps> = (props) => {
  const { moduleId } = props;
  const [qrCodeSrc, setQrCodeSrc] = useState(null);

  useEffect(() => {
    qrcode
      .toDataURL(`${window.location.origin}/#sandbox?moduleId=${moduleId}`, {
        margin: 0,
      })
      .then((res) => {
        setQrCodeSrc(res);
      });
  }, []);

  return (
    <StyledBottomTools className="bottom-tools">
      {qrCodeSrc && (
        <StyledQrCode src={qrCodeSrc}>
          <div className="icon-wrapper">
            <Svgs.ToggleBtn />
          </div>
        </StyledQrCode>
      )}
    </StyledBottomTools>
  );
};

export default BottomTools;
