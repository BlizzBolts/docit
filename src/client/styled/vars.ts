import { createGlobalStyle } from "styled-components";

export const CssVariables = createGlobalStyle`
  :root {
    --sidebar-width: 15em;
    --header-height: 4rem;
    --toc-width: 15em;

    --font-size: 16px;
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --font-family-code: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    --font-weight: 400;

    --box-shadow: rgb(0 0 0 / 10%) 0px 2px 3px 0px;
    --direction: ltr;

    --c-white: #ffffff;
    --c-black: #000000;
    --c-brand: #9B1D30;
    --c-1: #3c2828;

    --c-bg: var(--c-white);
    --c-divider: rgba(60, 60, 67, .12);
    --c-border: rgba(0, 0, 0, 0.1);

    --code-border-radius: 4px;
    --code-line-height: 1.7;
    --code-font-size: 14px;

    --c-pre-bg: #292828;
    --c-code-bg: #ececec;
    --c-code-keyword: #89b482;
    --c-code-function: #a9b665;
    --c-code-attr: #fff;
    --c-code-string: #D8A657;
    --c-code-built-in: #7DAEA3;
    --c-code-name: #e78a4e;
    --c-code-doctag: #EA6962;
    --c-code-link: var(--c-code-keyword);
    --c-code-comments: #938374;
  }
`;
