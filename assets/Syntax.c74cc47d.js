import{_ as s}from"./index.d8383554.js";import{g as m,R as e}from"./vendor.d396be56.js";function h(t={}){const{wrapper:l}=Object.assign({},m(),t.components);return l?e.createElement(l,t,e.createElement(r)):r();function r(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",a:"a",blockquote:"blockquote",h3:"h3",hr:"hr"},m(),t.components),{ShowCode:a,ApiTable:c}=n;return c||o("ApiTable",!0),a||o("ShowCode",!0),e.createElement(e.Fragment,null,e.createElement(n.h1,null,"Syntax"),`
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
`,e.createElement(n.p,null,"Check out ",e.createElement(n.a,{href:"https://mdxjs.com/docs/what-is-mdx/"},"MDX")," for more."),`
`,e.createElement(n.h2,null,"Live Block"),`
`,e.createElement(n.p,null,"Live Block is a way to speed up your doc writing by rendering and showing code at the same time."),`
`,e.createElement(n.p,null,"Just add ",e.createElement(n.code,null,"live")," keyword after code block language"),`
`,e.createElement(n.blockquote,null,`
`,e.createElement(n.p,null,"The code you writing is rendered in a sandbox(iframe), and also a JavaScript sandbox (serving as an independent dynamic import)."),`
`),`
`,e.createElement(n.h3,null,"Syntax"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-md"},e.createElement(n.span,{className:"hljs-code"},'```jsx live\r\nimport { DemoBlock } from "../components/DemoBlock";\r\n<DemoBlock />;\r\n```'),`
`)),`
`,e.createElement(n.p,null,"This will render as"),`
`,e.createElement(e.Fragment,null,e.createElement(a,{get:()=>s(()=>import("./Syntax.ccd010de.js"),["assets/Syntax.ccd010de.js","assets/vendor.d396be56.js","assets/DemoBlock.69e22322.js"]),lang:"jsx",code:`import { DemoBlock } from "../components/DemoBlock"

<DemoBlock />`,mobileView:!1})),`
`,e.createElement(n.h3,null,"Why?"),`
`,e.createElement(n.p,null,"Markdown naturally has code block syntax"),`
`,e.createElement(n.p,null,"For Example:"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-md"},e.createElement(n.span,{className:"hljs-code"},'```jsx\r\nimport { DemoBlock } from "../components/DemoBlock";\r\n<DemoBlock />;\r\n```'),`
`)),`
`,e.createElement(n.p,null,"Your markdown might look like"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-md"},`import { DemoBlock } from "../components/DemoBlock";\r
\r
`,e.createElement(n.span,{className:"xml"},e.createElement(n.span,{className:"hljs-tag"},"<",e.createElement(n.span,{className:"hljs-name"},"DemoBlock")," />")),`;\r
\r
`,e.createElement(n.span,{className:"hljs-code"},'```jsx\r\nimport { DemoBlock } from "../components/DemoBlock";\r\n<DemoBlock />;\r\n```'),`
`)),`
`,e.createElement(n.p,null,"You will find that you write the statement twice."),`
`,e.createElement(n.p,null,"And if your code has changes, you need to apply the changes twice."),`
`,e.createElement(n.h2,null,"Mobile View"),`
`,e.createElement(n.h3,null,"Syntax"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-md"},e.createElement(n.span,{className:"hljs-code"},'```jsx live mobile\r\nimport { DemoBlock } from "../components/DemoBlock";\r\n<DemoBlock />;\r\n```'),`
`)),`
`,e.createElement(n.p,null,"Docit also support live mobile block. Add a ",e.createElement(n.code,null,"mobile")," keyword after ",e.createElement(n.code,null,"live")," to enable it."),`
`,e.createElement(e.Fragment,null,e.createElement(a,{get:()=>s(()=>import("./Syntax.048cc78c.js"),["assets/Syntax.048cc78c.js","assets/vendor.d396be56.js","assets/DemoBlock.69e22322.js"]),lang:"jsx",code:`import { DemoBlock } from "../components/DemoBlock"

<DemoBlock />`,mobileView:!0})),`
`,e.createElement(n.p,null,"Docit provides a ",e.createElement(n.code,null,"360 * 640")," mobile view to help you display responsive component"),`
`,e.createElement(n.h2,null,"API Generation"),`
`,e.createElement(n.p,null,"Docit provides a simple syntax to handle auto API parsing."),`
`,e.createElement(n.blockquote,null,`
`,e.createElement(n.p,null,"Currently only support React Typescript API Tables. Functions and Interface support might not work as you expected."),`
`),`
`,e.createElement(n.h3,null,"Syntax"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-md"},"[",e.createElement(n.span,{className:"hljs-string"},"Props"),"](",e.createElement(n.span,{className:"hljs-link"},"../components/Button.tsx"),`)
`)),`
`,e.createElement(n.p,null,"Inside Docit, it will check the text name to be ",e.createElement(n.code,null,"Props")," and resolve your component path using ",e.createElement(n.a,{href:"https://www.npmjs.com/package/resolve"},"resolve")),`
`,e.createElement(n.p,null,"For Example"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-jsx"},e.createElement(n.span,{className:"hljs-keyword"},"import")," ",e.createElement(n.span,{className:"hljs-title hljs-class"},"React")," ",e.createElement(n.span,{className:"hljs-keyword"},"from")," ",e.createElement(n.span,{className:"hljs-string"},'"react"'),`;\r
`,e.createElement(n.span,{className:"hljs-keyword"},"import")," styled ",e.createElement(n.span,{className:"hljs-keyword"},"from")," ",e.createElement(n.span,{className:"hljs-string"},'"styled-components"'),`;\r
\r
enum `,e.createElement(n.span,{className:"hljs-title hljs-class"},"Length"),` {\r
  `,e.createElement(n.span,{className:"hljs-comment"},`/**\r
   * Large\r
   */`),`\r
  `,e.createElement(n.span,{className:"hljs-title hljs-class"},"Large")," = ",e.createElement(n.span,{className:"hljs-number"},"5"),`,\r
  `,e.createElement(n.span,{className:"hljs-comment"},`/**\r
   * \u4E2D\r
   */`),`\r
  `,e.createElement(n.span,{className:"hljs-title hljs-class"},"Medium")," = ",e.createElement(n.span,{className:"hljs-number"},"3"),`,\r
  `,e.createElement(n.span,{className:"hljs-comment"},`/**\r
   * \u5C0F\r
   */`),`\r
  `,e.createElement(n.span,{className:"hljs-title hljs-class"},"Small")," = ",e.createElement(n.span,{className:"hljs-number"},"1"),`,\r
}\r
\r
interface `,e.createElement(n.span,{className:"hljs-title hljs-class"},"ButtonProps")," ",e.createElement(n.span,{className:"hljs-keyword"},"extends")," ",e.createElement(n.span,{className:"hljs-title hljs-class"},"HTMLButtonElement"),` {\r
  `,e.createElement(n.span,{className:"hljs-comment"},`/**\r
   * \u4E00\u79CD\u989C\u8272\r
   * `,e.createElement(n.span,{className:"hljs-doctag"},"@default")," ",e.createElement(n.span,{className:"hljs-variable"},"red"),`\r
   */`),`\r
  color?: string;\r
  `,e.createElement(n.span,{className:"hljs-attr"},"length"),": ",e.createElement(n.span,{className:"hljs-title hljs-class"},"Length"),`;\r
}\r
\r
`,e.createElement(n.span,{className:"hljs-keyword"},"export")," ",e.createElement(n.span,{className:"hljs-keyword"},"const")," ",e.createElement(n.span,{className:"hljs-title hljs-class"},"StyledButton")," = styled.",e.createElement(n.span,{className:"hljs-property"},"button"),e.createElement(n.span,{className:"hljs-string"},"`\r\n  z-index: 9999;\r\n`"),`;\r
\r
`,e.createElement(n.span,{className:"hljs-keyword"},"const")," ",e.createElement(n.span,{className:"hljs-title hljs-class"},"Button"),": ",e.createElement(n.span,{className:"hljs-title hljs-class"},"React"),".",e.createElement(n.span,{className:"hljs-property"},"FC"),"<",e.createElement(n.span,{className:"hljs-title hljs-class"},"ButtonProps"),"> = ",e.createElement(n.span,{className:"hljs-function"},"() =>"),` {\r
  `,e.createElement(n.span,{className:"hljs-keyword"},"return")," ",e.createElement(n.span,{className:"xml"},e.createElement(n.span,{className:"hljs-tag"},"<",e.createElement(n.span,{className:"hljs-name"},"StyledButton"),">"),"1",e.createElement(n.span,{className:"hljs-tag"},"</",e.createElement(n.span,{className:"hljs-name"},"StyledButton"),">")),`;\r
};\r
\r
`,e.createElement(n.span,{className:"hljs-title hljs-class"},"Button"),".",e.createElement(n.span,{className:"hljs-property"},"defaultProps"),` = {\r
  `,e.createElement(n.span,{className:"hljs-attr"},"color"),": ",e.createElement(n.span,{className:"hljs-string"},'"green"'),`,\r
  `,e.createElement(n.span,{className:"hljs-attr"},"length"),": ",e.createElement(n.span,{className:"hljs-title hljs-class"},"Length"),".",e.createElement(n.span,{className:"hljs-property"},"Large"),`,\r
};\r
\r
`,e.createElement(n.span,{className:"hljs-keyword"},"export")," { ",e.createElement(n.span,{className:"hljs-title hljs-class"},"Button"),` };
`)),`
`,e.createElement(n.p,null,"The API table will look like:"),`
`,e.createElement(n.p,null,e.createElement(e.Fragment,null,e.createElement(c,{get:()=>s(()=>import("./ApiTest.bcb105f8.js"),[]),path:"/Users/hao/local/projj/github.com/phshy0607/docit/docs/components/ApiTest.tsx"}))),`
`,e.createElement(n.p,null,"You will notice ",e.createElement(n.code,null,"StyledButton")," get exported, but the api table does not appear, thats because the type parser got nothing from parsing it."),`
`,e.createElement(n.hr),`
`,e.createElement(n.p,null,"since Docit using ",e.createElement(n.code,null,"resolve"),", you can actually parsing some third party types like"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-md"},"[",e.createElement(n.span,{className:"hljs-string"},"Props"),"](",e.createElement(n.span,{className:"hljs-link"},"antd-mobile/es/index.d.ts"),`)
`)))}}function o(t,l){throw new Error("Expected "+(l?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};
