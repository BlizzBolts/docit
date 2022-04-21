import styled from "styled-components";

export const StyledIFrameTools = styled.div`
  visibility: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px;
`;

export const StyledQrCode = styled.div<{ src: string }>`
  position: relative;
  margin-right: 12px;
  .qrcode-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  .qrcode-wrapper:hover:after {
    content: "";
    position: absolute;
    top: -100px;
    left: 0px;
    width: 80px;
    height: 80px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;
