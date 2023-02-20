import React from "react";
import styled from "styled-components";

enum Length {
  /**
   * 大
   */
  Large = 5,
  /**
   * 中
   */
  Medium = 3,
  /**
   * 小
   */
  Small = 1,
}

interface ButtonProps extends HTMLButtonElement {
  /**
   * 一种颜色
   * @default red
   */
  color?: string;
  length: Length;
  variant: "A" | "B" | "C";
}

export const StyledButton = styled.button`
  z-index: 9999;
`;

const Button: React.FC<ButtonProps> = () => {
  return <StyledButton>123</StyledButton>;
};

Button.defaultProps = {
  color: "grene",
  length: Length.Large,
};

export { Button };
