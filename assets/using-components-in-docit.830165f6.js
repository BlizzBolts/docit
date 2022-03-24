import{j as r,R as e}from"./vendor.51078ebd.js";import{B as a}from"./Button.083f56d1.js";const m=()=>{const t=Object.assign({div:"div"},r());return e.createElement(t.div,{style:{color:"red",background:"blue"}}," I'm rendered from a inline declaring component")};function p(t={}){const{wrapper:l}=Object.assign({},r(),t.components);return l?e.createElement(l,t,e.createElement(c)):c();function c(){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span",blockquote:"blockquote",p:"p"},r(),t.components),{ShowCode:o}=n;return o||s("ShowCode",!0),e.createElement(e.Fragment,null,e.createElement(n.h1,null,"\u5982\u4F55\u4E66\u5199\u4F7F\u7528 Components"),`
`,e.createElement(n.h2,null,"\u5916\u90E8\u7EC4\u4EF6\u5F15\u5165"),`
`,e.createElement(n.h3,null,"\u5F15\u5165\u7EC4\u4EF6"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-js"},e.createElement(n.span,{className:"hljs-keyword"},"import")," { ",e.createElement(n.span,{className:"hljs-title hljs-class"},"Button")," } ",e.createElement(n.span,{className:"hljs-keyword"},"from")," ",e.createElement(n.span,{className:"hljs-string"},'"./components/Button"'),`;
`)),`
`,e.createElement(n.h3,null,"\u7EC4\u4EF6\u8C03\u7528"),`
`,e.createElement(e.Fragment,null,e.createElement(o,{code:`import { Button } from "../components/Button"



<Button />`,lang:"jsx"},e.createElement(a))),`
`,e.createElement(n.h2,null,"\u5728 MDX \u6587\u4EF6\u5185\u5B9A\u4E49\u4E00\u4E2A\u7EC4\u4EF6 \uFF08\u4FD7\u79F0\u5185\u8054\u7EC4\u4EF6\uFF09"),`
`,e.createElement(n.h3,null,"\u4E66\u5199\u7EC4\u4EF6\u5185\u5BB9"),`
`,e.createElement(n.blockquote,null,`
`,e.createElement(n.p,null,"\u6CE8\u610F export \u5173\u952E\u5B57"),`
`),`
`,e.createElement(e.Fragment,null,e.createElement(o,{code:`export const HelloWorld = () => {

  return (

    <div

      style={{

        color: "red",

        background: "blue",

      }}

    >

      I'm rendered from a inline declaring component

    </div>

  )

}



<HelloWorld />`,lang:"jsx"},e.createElement(m))),`
`,e.createElement(n.h3,null,"\u7EC4\u4EF6\u8C03\u7528"),`
`,e.createElement(n.p,null,"\u5185\u8054\u7EC4\u4EF6\u4E0E\u5916\u90E8\u5F15\u5165\u7684\u8C03\u7528\u65B9\u5F0F\u4E00\u81F4"))}}function s(t,l){throw new Error("Expected "+(l?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{m as HelloWorld,p as default};
