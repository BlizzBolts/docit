import styled from "styled-components";
export * from "./global";
export * from "./vars";
import { Sidebar } from "../components/Sidebar";

export const StyledHeader = styled.header`
  height: var(--header-height);
  width: 100%;
  background: var(--c-bg);
  border-bottom: 1px solid var(--c-divider);

  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

export const StyledAside = styled(Sidebar)<{ visible: string }>`
  padding: 1.5rem 1rem;
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

export const StyledDocument = styled.div`
  width: calc(100vw - var(--sidebar-width));
  height: calc(100vh - var(--header-height));
  display: inline-block;
  overflow-y: auto;
`;

export const StyledMain = styled.main`
  .docit-markdown {
    padding: 0 4em;
    word-break: break-all;
    margin-bottom: 100px;
  }

  @media (max-width: 768px) {
    ${StyledDocument} {
      width: 100vw;
      padding-left: 0rem;
    }

    .docit-markdown {
      padding: 0 1rem;
    }
  }
`;
