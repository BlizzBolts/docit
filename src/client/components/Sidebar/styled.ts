import styled from "styled-components";
import { StyledSidebarItemProps } from "./types";

export const StyledAside = styled.aside<{ visible: string }>`
  padding: 2rem 2rem;
  width: var(--sidebar-width);
  height: calc(100vh - var(--header-height));
  overflow-y: auto;
  display: inline-block;
  border-right: 1px solid var(--c-divider);
  background: white;

  @media (max-width: 768px) {
    position: fixed;
    left: ${(props) =>
      props.visible === "true" ? 0 : "calc(-1 * var(--sidebar-width))"};

    transition: left 250ms ease-in-out;
  }
`;

export const StyledSidebarItem = styled.div.attrs<StyledSidebarItemProps>(
  (props) => {
    return {
      "data-level": props.level,
    };
  }
)<StyledSidebarItemProps>`
  font-size: 16px;
  margin-bottom: 16px;
  padding-left: ${(props) => (props.level === 0 ? "0" : "12px")};

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
