import styled from "styled-components";

export const StyledBottomTools = styled.div`
  visibility: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px;
  background-color: #e8e8e8;
`;

export const StyledQrCode = styled.div<{ src: string }>`
  position: relative;
  width: 20px;
  height: 20px;
  .icon-wrapper {
    position: relative;
  }
  .icon-wrapper:hover:after {
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
