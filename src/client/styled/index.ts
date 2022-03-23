import styled from 'styled-components';
import { Sidebar } from '../components/Sidebar';
export * from './global';
export * from './vars';

export const StyledHeader = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  height: 4rem;
  width: 100%;
  background: var(--c-bg);
  border-bottom: 1px solid var(--c-divider);

  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

export const StyledAside = styled(Sidebar)`
  position: fixed;
  padding-top: 4rem;
  height: 100%;
  width: var(--sidebar-width);
  overflow-y: auto;

  @media (max-width: 768px) {
    &&&.pro-sidebar.md {
      position: fixed;
      left: calc(var(--sidebar-width) * -1);
    }
    &&&.pro-sidebar.md.toggled {
      position: fixed;
      left: 0em;
      width: 100% !important;
    }
  }
`;

export const StyledDocument = styled.div`
  padding-left: var(--sidebar-width);
  padding-top: 4rem;
`;

export const StyledMain = styled.main`
  .docit-markdown {
    padding: 0 4em;
    height: 100%;
    word-break: break-all;
  }

  @media (max-width: 768px) {
    ${StyledDocument} {
      padding-left: 0rem;
    }

    .docit-markdown {
      padding: 0 1rem;
    }
  }
`;
