import{k as l,R as e}from"./vendor.1f95e102.js";function c(t={}){const{wrapper:a}=Object.assign({},l(),t.components);return a?e.createElement(a,t,e.createElement(s)):s();function s(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",a:"a"},l(),t.components);return e.createElement(e.Fragment,null,e.createElement(n.h1,null,"Syntax"),`
`,e.createElement(n.p,null,"Docit is a MDX & MD oriented document tool."),`
`,e.createElement(n.p,null,"It's based on MDX and MD syntax, and support with some others to fit your needs."),`
`,e.createElement(n.h2,null,"MDX"),`
`,e.createElement(n.p,null,"MDX is a syntax that enable writing JSX and JavaScript expressions in your Markdown files."),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-md"},e.createElement(n.span,{className:"hljs-section"},"# Title 1"),`\r
\r
`,e.createElement(n.span,{className:"hljs-section"},"## Title 2"),`\r
\r
{ console.log({str: 'hello world!'})}\r
\r
export const MyComponent = () => `,e.createElement(n.span,{className:"xml"},e.createElement(n.span,{className:"hljs-tag"},"<",e.createElement(n.span,{className:"hljs-name"},"strong"),">")),"Coffee Time",e.createElement(n.span,{className:"xml"},e.createElement(n.span,{className:"hljs-tag"},"</",e.createElement(n.span,{className:"hljs-name"},"strong"),">")),`\r
\r
`,e.createElement(n.span,{className:"xml"},e.createElement(n.span,{className:"hljs-tag"},"<",e.createElement(n.span,{className:"hljs-name"},"MyComponent")," />")),`
`)),`
`,e.createElement(n.p,null,"Check out ",e.createElement(n.a,{href:"https://mdxjs.com/docs/what-is-mdx/"},"MDX")," for more."))}}export{c as default};
