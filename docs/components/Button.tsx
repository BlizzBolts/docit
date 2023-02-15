import React, { PropsWithChildren } from "react";
import styled from "styled-components";
interface ButtonProps {
  /**
   * 一个颜色
   * @default red
   */
  color?: string;
}

const StyledButton = styled.button`
  outline: none;
  background: white;
  border: 1px solid #525ee9;
  border-radius: 4px;
  color: #525ee9;
  cursor: pointer;
`;

const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { children, color } = props;
  return (
    <StyledButton
      style={{ color }}
      onClick={() => {
        alert("Hello World");
      }}
    >
      {children || "我是按钮"}
    </StyledButton>
  );
};

export { Button };
