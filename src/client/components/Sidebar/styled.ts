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

  a {
    font-weight: 400;
    display: inline-flex;
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => {
      return props.active ? "var(--c-brand)" : "var(--c-1)";
    }};

    :hover {
      opacity: 0.6;
      transition: opacity 200ms linear;
      color: ${(props) => {
        return props.active ? "var(--c-brand)" : "var(--c-1)";
      }};
    }
  }
`;
