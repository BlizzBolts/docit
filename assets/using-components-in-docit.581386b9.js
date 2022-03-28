import{_ as a}from"./index.9fc6eeef.js";import{k as c,R as e}from"./vendor.1f95e102.js";function i(n={}){const{wrapper:l}=Object.assign({},c(),n.components);return l?e.createElement(l,n,e.createElement(r)):r();function r(){const t=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span",blockquote:"blockquote",p:"p"},c(),n.components),{ShowCode:o}=t;return o||m("ShowCode",!0),e.createElement(e.Fragment,null,e.createElement(t.h1,null,"\u5982\u4F55\u4E66\u5199\u4F7F\u7528 Components"),`
`,e.createElement(t.h2,null,"\u5916\u90E8\u7EC4\u4EF6\u5F15\u5165"),`
`,e.createElement(t.h3,null,"\u5F15\u5165\u7EC4\u4EF6"),`
`,e.createElement(t.pre,null,e.createElement(t.code,{className:"hljs language-js"},e.createElement(t.span,{className:"hljs-keyword"},"import")," { ",e.createElement(t.span,{className:"hljs-title hljs-class"},"Button")," } ",e.createElement(t.span,{className:"hljs-keyword"},"from")," ",e.createElement(t.span,{className:"hljs-string"},'"./components/Button"'),`;
`)),`
`,e.createElement(t.h3,null,"\u7EC4\u4EF6\u8C03\u7528"),`
`,e.createElement(e.Fragment,null,e.createElement(o,{get:()=>a(()=>import("./using-components-in-docit.81d26ff7.js"),["assets/using-components-in-docit.81d26ff7.js","assets/vendor.1f95e102.js","assets/Button.960e4357.js"]),lang:"jsx",code:`import { Button } from "../components/Button"



<Button />`,mobileView:!1})),`
`,e.createElement(t.h2,null,"\u5728 MDX \u6587\u4EF6\u5185\u5B9A\u4E49\u4E00\u4E2A\u7EC4\u4EF6 \uFF08\u4FD7\u79F0\u5185\u8054\u7EC4\u4EF6\uFF09"),`
`,e.createElement(t.h3,null,"\u4E66\u5199\u7EC4\u4EF6\u5185\u5BB9"),`
`,e.createElement(t.blockquote,null,`
`,e.createElement(t.p,null,"\u6CE8\u610F export \u5173\u952E\u5B57"),`
`),`
`,e.createElement(e.Fragment,null,e.createElement(o,{get:()=>a(()=>import("./using-components-in-docit.09727404.js"),["assets/using-components-in-docit.09727404.js","assets/vendor.1f95e102.js"]),lang:"jsx",code:`export const HelloWorld = () => {

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



<HelloWorld />`,mobileView:!1})),`
`,e.createElement(t.h3,null,"\u7EC4\u4EF6\u8C03\u7528"),`
`,e.createElement(t.p,null,"\u5185\u8054\u7EC4\u4EF6\u4E0E\u5916\u90E8\u5F15\u5165\u7684\u8C03\u7528\u65B9\u5F0F\u4E00\u81F4"))}}function m(n,l){throw new Error("Expected "+(l?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};
