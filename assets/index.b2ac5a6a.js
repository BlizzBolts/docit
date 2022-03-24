import{j as l,R as e}from"./vendor.51078ebd.js";function r(s={}){const{wrapper:t}=Object.assign({},l(),s.components);return t?e.createElement(t,s,e.createElement(n)):n();function n(){const a=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",h2:"h2"},l(),s.components);return e.createElement(e.Fragment,null,e.createElement(a.h1,null,"\u9875\u9762\u914D\u7F6E"),`
`,e.createElement(a.p,null,"\u53EF\u4EE5\u5728\u6587\u6863\u6587\u4EF6\u5939\u4E0B\u6DFB\u52A0 docgen.config.js \u5BF9\u9879\u76EE\u8FDB\u884C\u66F4\u4E30\u5BCC\u7684\u914D\u7F6E\uFF0C\u4EE5\u4E0B\u4E3A\u652F\u6301\u7684\u914D\u7F6E\u9879\uFF1A"),`
`,e.createElement(a.pre,null,e.createElement(a.code,{className:"hljs language-ts"},e.createElement(a.span,{className:"hljs-keyword"},"export")," ",e.createElement(a.span,{className:"hljs-keyword"},"interface")," ",e.createElement(a.span,{className:"hljs-title hljs-class"},"UserFileConfig"),` {
  title?: `,e.createElement(a.span,{className:"hljs-built_in"},"string"),`;
  sidebars?: `,e.createElement(a.span,{className:"hljs-title hljs-class"},"SidebarNode"),`[];
}
`)),`
`,e.createElement(a.pre,null,e.createElement(a.code,{className:"hljs language-ts"},e.createElement(a.span,{className:"hljs-keyword"},"export")," ",e.createElement(a.span,{className:"hljs-keyword"},"interface")," ",e.createElement(a.span,{className:"hljs-title hljs-class"},"SidebarNode"),` {
  `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-built_in"},"string"),`;
  path?: `,e.createElement(a.span,{className:"hljs-built_in"},"string"),`;
  children?: `,e.createElement(a.span,{className:"hljs-title hljs-class"},"SidebarNode"),`[];
}
`)),`
`,e.createElement(a.h2,null,"\u914D\u7F6E\u793A\u4F8B"),`
`,e.createElement(a.p,null,"\u914D\u7F6E\u4F4D\u7F6E\uFF1A"),`
`,e.createElement(a.pre,null,e.createElement(a.code,{className:"hljs language-arduino"},`|-[Root]
  |-docs
    |-docgen.config.js
`)),`
`,e.createElement(a.p,null,"\u793A\u4F8B"),`
`,e.createElement(a.pre,null,e.createElement(a.code,{className:"hljs language-js"},e.createElement(a.span,{className:"hljs-keyword"},"const"),` config = {
  `,e.createElement(a.span,{className:"hljs-comment"},"// \u663E\u793A\u5728\u6587\u6863\u5DE6\u4E0A\u89D2\u7684\u4E3B\u6807\u9898"),`
  `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"Docgen"'),`,

  `,e.createElement(a.span,{className:"hljs-comment"},"// \u4FA7\u8FB9\u680F\u914D\u7F6E\u793A\u4F8B"),`
  `,e.createElement(a.span,{className:"hljs-attr"},"sidebars"),`: [
    { `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"\u4ECB\u7ECD"'),", ",e.createElement(a.span,{className:"hljs-attr"},"path"),": ",e.createElement(a.span,{className:"hljs-string"},'"/index"'),` },
    { `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"FAQ"'),", ",e.createElement(a.span,{className:"hljs-attr"},"path"),": ",e.createElement(a.span,{className:"hljs-string"},'"/FAQ"'),` },
    { `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"Feature Request"'),", ",e.createElement(a.span,{className:"hljs-attr"},"path"),": ",e.createElement(a.span,{className:"hljs-string"},'"/feature-request"'),` },
    {
      `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"\u4F7F\u7528\u6307\u5357"'),`,
      `,e.createElement(a.span,{className:"hljs-attr"},"children"),`: [
        { `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"\u6587\u6863\u914D\u7F6E"'),", ",e.createElement(a.span,{className:"hljs-attr"},"path"),": ",e.createElement(a.span,{className:"hljs-string"},'"/\u4F7F\u7528\u6307\u5357/page-config"'),` },
        { `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"\u9759\u6001\u8D44\u6E90"'),", ",e.createElement(a.span,{className:"hljs-attr"},"path"),": ",e.createElement(a.span,{className:"hljs-string"},'"/\u4F7F\u7528\u6307\u5357/static-resources"'),` },
        {
          `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"\u5982\u4F55\u4E66\u5199\u4F7F\u7528 Components"'),`,
          `,e.createElement(a.span,{className:"hljs-attr"},"path"),": ",e.createElement(a.span,{className:"hljs-string"},'"/\u4F7F\u7528\u6307\u5357/using-components-in-docgen"'),`,
        },
      ],
    },
  ],
};
`,e.createElement(a.span,{className:"hljs-keyword"},"export")," ",e.createElement(a.span,{className:"hljs-keyword"},"default"),` config;
`)))}}export{r as default};
