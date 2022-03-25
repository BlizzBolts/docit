import styled from "styled-components";
import Frame from "react-frame-component";
import { IFrameProps } from "./types";

export const StyledFrame = styled(Frame)<IFrameProps>`
  border: none;
  width: 100%;
  height: 100%;
`;
