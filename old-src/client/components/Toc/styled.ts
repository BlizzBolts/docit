import styled from "styled-components";

export const StyledToc = styled.div`
  border-left: 1px solid var(--docit-c-divider);
  background: white;
  position: fixed;
  /* roughly scorllbar width */
  right: 20px;
  top: var(--docit-header-height);
  width: calc(var(--docit-toc-width) - 20px);
  height: 100%;
  padding-top: 1.5rem;
  padding-left: 1rem;

  span {
    color: var(--docit-c-brand);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledTocTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: var(--docit-c-brand);
`;

export const StyledTocItemTitle = styled.div`
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  :hover {
    opacity: 0.6;
    transition: opacity 200ms linear;
  }
`;

export const StyledTocItem = styled.div.attrs<{ level: number }>((props) => {
  return {
    "data-level": props.level,
  };
})<{ level: number; empty: boolean }>`
  padding-left: ${(props) => (props.empty ? "8px" : "0")};
`;
