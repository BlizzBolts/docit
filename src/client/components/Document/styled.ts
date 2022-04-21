import styled from "styled-components";

export const StyledDocument = styled.main`
  width: calc(100vw - var(--sidebar-width));
  height: calc(100vh - var(--header-height));
  display: inline-block;
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    width: 100vw;
    padding-left: 0rem;
  }
`;

export const StyledMarkdown = styled.div`
  color: var(--c-1);
  padding: 0 4em;
  padding-right: calc(4em - 20px);
  word-break: break-all;
  margin-bottom: 100px;
  width: calc(100% - var(--toc-width));

  :last-child {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 0 1em;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1.25;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  b {
    font-weight: 600;
  }

  h1 {
    margin-top: 1.5rem;
    font-size: 1.9rem;
  }

  @media screen and (min-width: 420px) {
    h1 {
      font-size: 2.2rem;
    }
  }

  h2 {
    margin-top: 2.25rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid var(--c-divider);
    padding-bottom: 0.3rem;
    line-height: 1.25;
    font-size: 1.65rem;
  }

  h2 + h3 {
    margin-top: 1.5rem;
  }

  h3 {
    margin-top: 2rem;
    font-size: 1.35rem;
  }

  h4 {
    font-size: 1.15rem;
  }

  p,
  .docit-paragraph,
  ol,
  ul {
    margin: 1rem 0;
    line-height: 1.7;
  }

  a,
  area,
  button,
  [role="button"],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }

  a {
    white-space: nowrap;
    text-decoration: none;
    color: var(--c-brand);
    transition: all 0.3 linear;
    ::before {
      content: "「";
    }
    ::after {
      content: "」";
    }
  }

  a:hover {
    opacity: 0.8;
  }

  a.header-anchor {
    float: left;
    margin-top: 0.125em;
    margin-left: -0.87em;
    padding-right: 0.23em;
    font-size: 0.85em;
    opacity: 0;
  }

  a.header-anchor:hover,
  a.header-anchor:focus {
    text-decoration: none;
  }

  figure {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  ul,
  ol {
    padding-left: 1.25em;
  }

  li > ul,
  li > ol {
    margin: 0;
  }

  table {
    display: block;
    border-collapse: collapse;
    margin: 1rem 0;
    overflow-x: auto;
  }

  tr {
    border-top: 1px solid #dfe2e5;
  }

  tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  th,
  td {
    border: 1px solid #dfe2e5;
    padding: 0.6em 1em;
  }

  blockquote {
    margin: 1rem 0;
    border-left: 0.2rem solid #dfe2e5;
    padding: 0.25rem 0 0.25rem 1rem;
    font-size: 1rem;
    color: #999;
  }

  blockquote > p {
    margin: 0;
  }

  blockquote > .docit-paragraph {
    margin: 0;
  }

  form {
    margin: 0;
  }

  code.docit-code {
    background: var(--c-code-bg);
    font-weight: bold;
    padding: 0 0.25em;
  }

  p .docit-code {
    margin: 0 0.25em;
  }

  hr {
    border-top: 1px dashed var(--c-brand);
  }

  pre {
    text-align: left;
    font-size: var(--code-font-size);
    line-height: var(--code-line-height);
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    box-shadow: var(--box-shadow);
    background: var(--c-pre-bg);
    border-radius: var(--code-border-radius);

    code.docit-code {
      display: block;
      overflow-x: auto;
      background: transparent;
      font-weight: inherit;
      font-family: var(--font-family-code);
      color: var(--c-white);
      padding: 1em;
      margin: 1.5em 0px;

      .hljs-keyword {
        color: var(--c-code-keyword);
      }

      .hljs-class {
        color: #e78a4e;
      }

      .hljs-title.hljs-function {
        color: var(--c-code-function);
      }

      .hljs-attr {
        color: var(--c-code-attr);
      }

      .hljs-built_in {
        color: var(--c-code-built-in);
      }

      .hljs-name {
        color: var(--c-code-name);
      }

      .hljs-link {
        color: var(--c-code-link);
      }

      .hljs-string {
        color: var(--c-code-name);
      }

      .hljs-comment {
        color: var(--c-code-comments);
      }

      .hljs-property {
        color: var(--c-code-function);
      }

      .hljs-doctag {
        color: var(--c-code-doctag);
      }

      .hljs-string {
        color: var(--c-code-string);
      }
    }
  }
`;
