import{j as s,R as e}from"./vendor.51078ebd.js";import{B as c}from"./Button.083f56d1.js";const m="Hello Docgen";function p(t={}){const{wrapper:l}=Object.assign({},s(),t.components);return l?e.createElement(l,t,e.createElement(a)):a();function a(){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",span:"span",blockquote:"blockquote"},s(),t.components);return e.createElement(e.Fragment,null,e.createElement(n.h1,null,"MDX"),`
`,e.createElement(n.p,null,e.createElement(n.a,{href:"https://mdxjs.com/docs/what-is-mdx/"},"MDX")," \u662F Markdown \u7684\u62D3\u5C55"),`
`,e.createElement(n.p,null,"\u652F\u6301\u5728 Markdown \u5185\u4E66\u5199 Jsx \u8BED\u6CD5\u3001import export\u3001\u548C Js \u8868\u8FBE\u5F0F"),`
`,e.createElement(n.h2,null,"JSX \u4E0E import export"),`
`,e.createElement(n.p,null,"Docgen \u4F7F\u7528 React \u7684 Jsx \u5B9E\u73B0\uFF0C\u652F\u6301\u5C55\u793A React Component\u3002"),`
`,e.createElement(n.p,null,"\u4F8B\u5982"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-markdown"},e.createElement(n.span,{className:"hljs-section"},"# \u76EE\u5F55\u7ED3\u6784"),`
|-docs
  |-components
`,e.createElement(n.span,{className:"hljs-code"},`    |-Button.jsx
  |-ReadMe.md
`))),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-js"},e.createElement(n.span,{className:"hljs-comment"},"// ReadMe.md"),`
`,e.createElement(n.span,{className:"hljs-keyword"},"import")," { ",e.createElement(n.span,{className:"hljs-title hljs-class"},"Button")," } ",e.createElement(n.span,{className:"hljs-keyword"},"from")," ",e.createElement(n.span,{className:"hljs-string"},'"./components/Button"'),`;

`,e.createElement(n.span,{className:"xml"},e.createElement(n.span,{className:"hljs-tag"},"<",e.createElement(n.span,{className:"hljs-name"},"Button")," />")),`;
`)),`
`,e.createElement(n.p,null,"\u4EE5\u4E0A\u4EE3\u7801\u4F1A\u6E32\u67D3\u6210"),`
`,`
`,e.createElement(c),`
`,e.createElement(n.p,null,"\u5F53\u7136\u4F60\u53EF\u4EE5\u5728 mdx \u6587\u4EF6\u5185\u4F7F\u7528",e.createElement(n.code,null,"export"),"\u8FDB\u884C\u5B9A\u4E49"),`
`,e.createElement(n.blockquote,null,`
`,e.createElement(n.p,null,"\u6CE8\u610F\uFF1A\u53EA\u6709 export \u5F00\u5934\u7684 js \u5B9A\u4E49\u624D\u80FD\u88AB\u89E3\u6790\u6210\u5B9A\u4E49\uFF0C\u5426\u5219\u89C6\u4E3A\u6587\u672C\u5904\u7406"),`
`),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-js"},e.createElement(n.span,{className:"hljs-keyword"},"export")," ",e.createElement(n.span,{className:"hljs-keyword"},"const")," text = ",e.createElement(n.span,{className:"hljs-string"},'"Hello Docgen"'),`;
`)),`
`,`
`,e.createElement(n.p,null,"\u8BE5\u53D8\u91CF\u53EF\u5728 jsx \u5185\u4F7F\u7528\uFF0C\u4F8B\u5982"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-jsx"},"<",e.createElement(n.span,{className:"hljs-title hljs-class"},"Button"),">{text}</",e.createElement(n.span,{className:"hljs-title hljs-class"},"Button"),`>
`)),`
`,e.createElement(n.p,null,"\u4EE5\u4E0A\u4EE3\u7801\u4F1A\u6E32\u67D3\u6210"),`
`,e.createElement(c,null,m),`
`,e.createElement(n.h2,null,"Js \u8868\u8FBE\u5F0F"),`
`,e.createElement(n.p,null,"\u4F7F\u7528 export \u5B9A\u4E49\u53D8\u91CF"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-js"},e.createElement(n.span,{className:"hljs-keyword"},"export")," ",e.createElement(n.span,{className:"hljs-keyword"},"const")," text = ",e.createElement(n.span,{className:"hljs-string"},'"Hello Docgen"'),`;
`)),`
`,e.createElement(n.p,null,"\u4F7F\u7528 ",e.createElement(n.code,null,"{}")," \u8C03\u7528\u53D8\u91CF"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-javascript"},"{text.",e.createElement(n.span,{className:"hljs-title hljs-function"},"replace"),"(",e.createElement(n.span,{className:"hljs-regexp"},"/Docgen/g"),", ",e.createElement(n.span,{className:"hljs-string"},"'World!'"),`)}
`)),`
`,e.createElement(n.p,null,"\u4EE5\u4E0A\u4EE3\u7801\u4F1A\u6E32\u67D3\u6210"),`
`,m.replace(/Docgen/g,"World!"))}}export{p as default,m as text};
