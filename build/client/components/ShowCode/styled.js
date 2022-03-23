import styled from 'styled-components';
export const ShowCodeContainer = styled.div `
  margin: 1rem 0;
  border: 1px solid var(--c-border);
  border-radius: 4px;
`;
export const RenderWindow = styled.div `
  padding: 1em;
`;
export const ButtonContainer = styled.div `
  clear: both;
  overflow: auto;
  padding: 0 1em 1em 0;
  button {
    box-shadow: var(--box-shadow);
    border-radius: 4px;
    font-size: 0.875em;
    float: right;
    background: var(--c-white);
    color: var(--c-1);
    padding: 0.25em 0.5em;
    outline: 0;
    border: 0;

    cursor: pointer;
    transition: all 200ms linear;
    text-decoration: none;
    text-align: center;
    font-size: 0.5rem;
  }
`;
export const CodeWindow = styled.div ``;
//# sourceMappingURL=styled.js.map