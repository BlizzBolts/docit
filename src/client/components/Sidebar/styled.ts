import styled from "styled-components";
import { StyledSidebarItemProps } from "./types";

export const StyledSidebarItem = styled.div.attrs<StyledSidebarItemProps>(
  (props) => {
    return {
      "data-level": props.level,
    };
  }
)<StyledSidebarItemProps>`
  font-size: 16px;
  margin-bottom: 16px;
  padding-left: 12px;

  font-weight: 600;

  color: ${(props) => (props.active ? "blue" : "inherit")};

  a {
    font-weight: 400;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color: var(--c-1);

    :hover {
      color: var(--c-brand);
    }
  }
`;
