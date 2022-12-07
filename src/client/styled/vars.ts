import { createGlobalStyle } from "styled-components";

export const CssVariables = createGlobalStyle`
  :root {
    --docit-sidebar-width: 15em;
    --docit-header-height: 4rem;
    --docit-toc-width: 15em;

    --docit-font-size: 16px;
    --docit-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --docit-font-family-code: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    --docit-font-weight: 400;

    --docit-box-shadow: rgb(0 0 0 / 10%) 0px 2px 3px 0px;
    --docit-direction: ltr;

    --docit-c-white: #ffffff;
    --docit-c-black: #000000;
    --docit-c-brand: #9B1D30;
    --docit-c-1: #3c2828;

    --docit-c-bg: var(--docit-c-white);
    --docit-c-divider: rgba(60, 60, 67, .12);
    --docit-c-border: rgba(0, 0, 0, 0.1);

    --docit-code-border-radius: 4px;
    --docit-code-line-height: 1.7;
    --docit-code-font-size: 14px;

    --docit-c-pre-bg: #292828;
    --docit-c-code-bg: #ececec;
    --docit-c-code-keyword: #89b482;
    --docit-c-code-function: #a9b665;
    --docit-c-code-attr: #D8A657;
    --docit-c-code-string: #D8A657;
    --docit-c-code-built-in: #7DAEA3;
    --docit-c-code-name: #e78a4e;
    --docit-c-code-doctag: #EA6962;
    --docit-c-code-link: var(--docit-c-code-keyword);
    --docit-c-code-comments: #938374;
  }
`;
