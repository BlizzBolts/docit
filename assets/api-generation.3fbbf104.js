import{u as l,R as e,_ as c}from"./index.f975152f.js";function n(a){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",h3:"h3",pre:"pre",code:"code",span:"span",a:"a",hr:"hr"},l(),a.components),{ApiTable:s}=t;return s||r("ApiTable",!0),e.createElement(e.Fragment,null,e.createElement(t.h1,{id:"api-generation"},"API Generation"),`
`,e.createElement(t.p,null,"Docit provides a simple syntax to handle auto API parsing."),`
`,e.createElement(t.blockquote,null,`
`,e.createElement(t.p,null,"Currently only support React Typescript API Tables. Functions and Interface support might not work as you expected."),`
`),`
`,e.createElement(t.h3,{id:"syntax"},"Syntax"),`
`,e.createElement(t.pre,null,e.createElement(t.code,{className:"hljs language-md"},"[",e.createElement(t.span,{className:"hljs-string"},"Props"),"](",e.createElement(t.span,{className:"hljs-link"},"../components/Button.tsx"),`)
`)),`
`,e.createElement(t.p,null,"Inside Docit, it will check the text name to be ",e.createElement(t.code,null,"Props")," and resolve your component path using ",e.createElement(t.a,{href:"https://www.npmjs.com/package/resolve"},"resolve")),`
`,e.createElement(t.p,null,"For Example"),`
`,e.createElement(t.pre,null,e.createElement(t.code,{className:"hljs language-jsx"},e.createElement(t.span,{className:"hljs-keyword"},"import")," ",e.createElement(t.span,{className:"hljs-title class_"},"React")," ",e.createElement(t.span,{className:"hljs-keyword"},"from")," ",e.createElement(t.span,{className:"hljs-string"},'"react"'),`;
`,e.createElement(t.span,{className:"hljs-keyword"},"import")," styled ",e.createElement(t.span,{className:"hljs-keyword"},"from")," ",e.createElement(t.span,{className:"hljs-string"},'"styled-components"'),`;

enum `,e.createElement(t.span,{className:"hljs-title class_"},"Length"),` {
  `,e.createElement(t.span,{className:"hljs-comment"},`/**
   * Large
   */`),`
  `,e.createElement(t.span,{className:"hljs-title class_"},"Large")," = ",e.createElement(t.span,{className:"hljs-number"},"5"),`,
  `,e.createElement(t.span,{className:"hljs-comment"},`/**
   * \u4E2D
   */`),`
  `,e.createElement(t.span,{className:"hljs-title class_"},"Medium")," = ",e.createElement(t.span,{className:"hljs-number"},"3"),`,
  `,e.createElement(t.span,{className:"hljs-comment"},`/**
   * \u5C0F
   */`),`
  `,e.createElement(t.span,{className:"hljs-title class_"},"Small")," = ",e.createElement(t.span,{className:"hljs-number"},"1"),`,
}

interface `,e.createElement(t.span,{className:"hljs-title class_"},"ButtonProps")," ",e.createElement(t.span,{className:"hljs-keyword"},"extends")," ",e.createElement(t.span,{className:"hljs-title class_"},"HTMLButtonElement"),` {
  `,e.createElement(t.span,{className:"hljs-comment"},`/**
   * \u4E00\u79CD\u989C\u8272
   * `,e.createElement(t.span,{className:"hljs-doctag"},"@default")," ",e.createElement(t.span,{className:"hljs-variable"},"red"),`
   */`),`
  color?: string;
  `,e.createElement(t.span,{className:"hljs-attr"},"length"),": ",e.createElement(t.span,{className:"hljs-title class_"},"Length"),`;
}

`,e.createElement(t.span,{className:"hljs-keyword"},"export")," ",e.createElement(t.span,{className:"hljs-keyword"},"const")," ",e.createElement(t.span,{className:"hljs-title class_"},"StyledButton")," = styled.",e.createElement(t.span,{className:"hljs-property"},"button"),e.createElement(t.span,{className:"hljs-string"},"`\n  z-index: 9999;\n`"),`;

`,e.createElement(t.span,{className:"hljs-keyword"},"const")," ",e.createElement(t.span,{className:"hljs-title class_"},"Button"),": ",e.createElement(t.span,{className:"hljs-title class_"},"React"),".",e.createElement(t.span,{className:"hljs-property"},"FC"),"<",e.createElement(t.span,{className:"hljs-title class_"},"ButtonProps"),"> = ",e.createElement(t.span,{className:"hljs-function"},"() =>"),` {
  `,e.createElement(t.span,{className:"hljs-keyword"},"return")," ",e.createElement(t.span,{className:"xml"},e.createElement(t.span,{className:"hljs-tag"},"<",e.createElement(t.span,{className:"hljs-name"},"StyledButton"),">"),"1",e.createElement(t.span,{className:"hljs-tag"},"</",e.createElement(t.span,{className:"hljs-name"},"StyledButton"),">")),`;
};

`,e.createElement(t.span,{className:"hljs-title class_"},"Button"),".",e.createElement(t.span,{className:"hljs-property"},"defaultProps"),` = {
  `,e.createElement(t.span,{className:"hljs-attr"},"color"),": ",e.createElement(t.span,{className:"hljs-string"},'"green"'),`,
  `,e.createElement(t.span,{className:"hljs-attr"},"length"),": ",e.createElement(t.span,{className:"hljs-title class_"},"Length"),".",e.createElement(t.span,{className:"hljs-property"},"Large"),`,
};

`,e.createElement(t.span,{className:"hljs-keyword"},"export")," { ",e.createElement(t.span,{className:"hljs-title class_"},"Button"),` };
`)),`
`,e.createElement(t.p,null,"The API table will look like:"),`
`,e.createElement(t.p,null,e.createElement(e.Fragment,null,e.createElement(s,{get:()=>c(()=>import("./ApiTest.f9e5b688.js"),[]),path:"/Users/hao/local/projj/github.com/BlizzBolts/docit/docs/components/ApiTest.tsx"}))),`
`,e.createElement(t.p,null,"You will notice ",e.createElement(t.code,null,"StyledButton")," get exported, but the api table does not appear, thats because the type parser got nothing from parsing it."),`
`,e.createElement(t.hr),`
`,e.createElement(t.p,null,"since Docit using ",e.createElement(t.code,null,"resolve"),", you can actually parsing some third party types like"),`
`,e.createElement(t.pre,null,e.createElement(t.code,{className:"hljs language-md"},"[",e.createElement(t.span,{className:"hljs-string"},"Props"),"](",e.createElement(t.span,{className:"hljs-link"},"antd-mobile/es/index.d.ts"),`)
`)))}function o(a={}){const{wrapper:t}=Object.assign({},l(),a.components);return t?e.createElement(t,a,e.createElement(n,a)):n(a)}function r(a,t){throw new Error("Expected "+(t?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}export{o as default};
