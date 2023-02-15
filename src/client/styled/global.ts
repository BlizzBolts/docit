import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
  html, body, #app {
    margin: 0;
    padding: 0;
    font-family: var(--docit-font-family) !important;
    font-weight: var(--docit-font-weight) !important;
    font-size: var(--docit-font-size);
    color: var(--docit-c-1);
    background-color: var(--docit-c-bg);
    -webkit-text-size-adjust: 100%;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    direction: var(--docit-direction);
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    * {
      box-sizing: border-box;
    }

    button {
      -webkit-tap-highlight-color: transparent;
    }
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;
