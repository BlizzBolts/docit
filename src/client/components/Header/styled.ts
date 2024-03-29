import styled from "styled-components";

export const StyledHeader = styled.header`
  height: var(--docit-header-height);
  width: 100%;
  background: var(--docit-c-bg);
  border-bottom: 1px solid var(--docit-c-divider);

  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

export const StyledTitle = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  color: var(--docit-c-brand);
  margin: 0;
`;

export const StyledSidebarBtn = styled.button`
  @media (min-width: 768px) {
    display: none;
  }

  margin-right: 1em;
  color: var(--docit-c-black);
  border: 0;
  outline: 0;
  background: var(--docit-c-divider);
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s linear;
`;
