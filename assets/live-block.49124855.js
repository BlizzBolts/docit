import{u as a,R as e}from"./index.56e1f40e.js";function s(l={}){const{wrapper:o}=Object.assign({},a(),l.components);return o?e.createElement(o,l,e.createElement(c)):c();function c(){const n=Object.assign({h1:"h1",p:"p",code:"code",blockquote:"blockquote",h3:"h3",pre:"pre",span:"span",h2:"h2"},a(),l.components),{ShowCode:t}=n;return t||m("ShowCode",!0),e.createElement(e.Fragment,null,e.createElement(n.h1,{id:"live-block"},"Live Block"),`
`,e.createElement(n.p,null,"Live Block is a way to speed up your doc writing by rendering and showing code at the same time."),`
`,e.createElement(n.p,null,"Just add ",e.createElement(n.code,null,"live")," keyword after code block language"),`
`,e.createElement(n.p,null,"Docit only respect ",e.createElement(n.code,null,"live")," keyword for ",e.createElement(n.code,null,"js")," ",e.createElement(n.code,null,"jsx")," ",e.createElement(n.code,null,"ts")," and ",e.createElement(n.code,null,"tsx")," languages"),`
`,e.createElement(n.blockquote,null,`
`,e.createElement(n.p,null,"The code you writing is rendered in a sandbox(iframe), and also a JavaScript sandbox (serving as an independent dynamic import)."),`
`),`
`,e.createElement(n.h3,{id:"syntax"},"Syntax"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-md"},e.createElement(n.span,{className:"hljs-code"},'```jsx live\nimport { DemoBlock } from "../components/DemoBlock";\n<DemoBlock />;\n```'),`
`)),`
`,e.createElement(n.p,null,"This will render as"),`
`,e.createElement(e.Fragment,null,e.createElement(t,{moduleId:"/Users/hao/local/projj/github.com/phshy0607/docit/docs/document/live-block.mdx?SandBox@0",lang:"jsx",code:`import { DemoBlock } from "../components/DemoBlock"

<DemoBlock />`,mobileView:!1})),`
`,e.createElement(n.h3,{id:"why"},"Why?"),`
`,e.createElement(n.p,null,"Markdown naturally has code block syntax"),`
`,e.createElement(n.p,null,"For Example:"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-md"},e.createElement(n.span,{className:"hljs-code"},'```jsx\nimport { DemoBlock } from "../components/DemoBlock";\n<DemoBlock />;\n```'),`
`)),`
`,e.createElement(n.p,null,"Your markdown might look like"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-md"},`import { DemoBlock } from "../components/DemoBlock";

`,e.createElement(n.span,{className:"xml"},e.createElement(n.span,{className:"hljs-tag"},"<",e.createElement(n.span,{className:"hljs-name"},"DemoBlock")," />")),`;

`,e.createElement(n.span,{className:"hljs-code"},'```jsx\nimport { DemoBlock } from "../components/DemoBlock";\n<DemoBlock />;\n```'),`
`)),`
`,e.createElement(n.p,null,"You will find that you write the statement twice."),`
`,e.createElement(n.p,null,"And if your code has changes, you need to apply the changes twice."),`
`,e.createElement(n.h2,{id:"for-mobile"},"For Mobile"),`
`,e.createElement(n.h3,{id:"syntax-1"},"Syntax"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-md"},e.createElement(n.span,{className:"hljs-code"},'```jsx live mobile\nimport { DemoBlock } from "../components/DemoBlock";\n<DemoBlock />;\n```'),`
`)),`
`,e.createElement(n.p,null,"Docit also support live mobile block. Add a ",e.createElement(n.code,null,"mobile")," keyword after ",e.createElement(n.code,null,"live")," to enable it."),`
`,e.createElement(e.Fragment,null,e.createElement(t,{moduleId:"/Users/hao/local/projj/github.com/phshy0607/docit/docs/document/live-block.mdx?SandBox@1",lang:"jsx",code:`import { DemoBlock } from "../components/DemoBlock"



<DemoBlock />`,mobileView:!0})),`
`,e.createElement(n.p,null,"Docit provides a ",e.createElement(n.code,null,"360 * 640")," mobile view to help you display responsive component"))}}function m(l,o){throw new Error("Expected "+(o?"component":"object")+" `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}export{s as default};
