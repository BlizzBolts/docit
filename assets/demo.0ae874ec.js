import{_ as s}from"./index.26d4d93d.js";import{j as r,R as e}from"./vendor.51078ebd.js";import{B as i}from"./Button.083f56d1.js";const u=()=>{const t=Object.assign({div:"div"},r());return e.createElement(t.div,null,"123")},p="green";function f(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.createElement(n,t,e.createElement(l)):l();function l(){const o=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li"},r(),t.components),{ShowCode:c,ApiTable:a}=o;return a||m("ApiTable",!0),c||m("ShowCode",!0),e.createElement(e.Fragment,null,e.createElement(o.h1,null,"Demo23345"),`
`,e.createElement(e.Fragment,null,e.createElement(c,{code:`import { Button } from "../components/Button"



export const Hello = () => <div>123</div>

export const color = 'green'



<Button color={color} />

<Hello/>`,lang:"jsx"},e.createElement(i,{color:p}),e.createElement(u))),`
`,e.createElement(o.h2,null,"Props"),`
`,e.createElement(o.ul,null,`
`,e.createElement(o.li,null,`Table
`,e.createElement(e.Fragment,null,e.createElement(a,{get:()=>s(()=>import("./ApiTest.a4bddbe7.js"),[]),path:"/Users/hao/local/projj/github.com/phshy0607/docit/docs/components/ApiTest.tsx"}))),`
`))}}function m(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{u as Hello,p as color,f as default};
