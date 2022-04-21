import{u as s,R as e}from"./index.efcb964a.js";function c(a={}){const{wrapper:t}=Object.assign({},s(),a.components);return t?e.createElement(t,a,e.createElement(l)):l();function l(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",a:"a"},s(),a.components);return e.createElement(e.Fragment,null,e.createElement(n.h1,{id:"mdx"},"MDX"),`
`,e.createElement(n.p,null,"MDX is a syntax that enable writing JSX and JavaScript expressions in your Markdown files."),`
`,e.createElement(n.h2,{id:"syntax"},"Syntax"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-md"},e.createElement(n.span,{className:"hljs-section"},"# Title 1"),`

`,e.createElement(n.span,{className:"hljs-section"},"## Title 2"),`

{ console.log({str: 'hello world!'})}

export const MyComponent = () => `,e.createElement(n.span,{className:"xml"},e.createElement(n.span,{className:"hljs-tag"},"<",e.createElement(n.span,{className:"hljs-name"},"strong"),">")),"Coffee Time",e.createElement(n.span,{className:"xml"},e.createElement(n.span,{className:"hljs-tag"},"</",e.createElement(n.span,{className:"hljs-name"},"strong"),">")),`

`,e.createElement(n.span,{className:"xml"},e.createElement(n.span,{className:"hljs-tag"},"<",e.createElement(n.span,{className:"hljs-name"},"MyComponent")," />")),`
`)),`
`,e.createElement(n.p,null,"Check out ",e.createElement(n.a,{href:"https://mdxjs.com/docs/what-is-mdx/"},"MDX")," for more."),`
`,e.createElement(n.h2,{id:"usage"},"Usage"),`
`,e.createElement(n.p,null,"Docit support normal ",e.createElement(n.code,null,".md")," files by default."),`
`,e.createElement(n.p,null,"To render components in Markdown file, please use ",e.createElement(n.code,null,".mdx")," as file extension."),`
`,e.createElement(n.p,null,"You can mix and layout your files as you want."),`
`,e.createElement(n.p,null,"For Example"),`
`,e.createElement(n.pre,null,e.createElement(n.code,{className:"hljs language-md"},`|- docs
  |- get-started
`,e.createElement(n.span,{className:"hljs-code"},`    |- introduction.md
    |- features.md
  |- components
    |- Button.mdx
    |- Sidebar.mdx
|- package.json
`))))}}export{c as default};
