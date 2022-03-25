import styled from 'styled-components';
export * from './global';
export * from './vars';

export const StyledHeader = styled.header`
  // z-index: 10;
  // position: fixed;
  // top: 0;
  // left: 0;
  height: var(--header-height);
  width: 100%;
  background: var(--c-bg);
  border-bottom: 1px solid var(--c-divider);

  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

export const StyledAside = styled.aside`
  width: var(--sidebar-width);
  height: calc(100vh - var(--header-height));
  overflow-y: auto;
  display: inline-block;

  .pro-sidebar {
    width: 100% !important;
    height: 100% !important;
    min-width: 100% !important;
  }

  @media (max-width: 768px) {
    width: 0px;
    .pro-sidebar.md {
      position: fixed;
      left: calc(var(--sidebar-width) * -1);
      width: auto !important;
      min-width: auto !important;
    }
    .pro-sidebar.md.toggled {
      position: fixed;
      left: 0em;
      width: 100% !important;
    }
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
