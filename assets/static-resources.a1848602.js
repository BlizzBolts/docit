import{u as s,R as e}from"./index.c5d0e702.js";function r(n={}){const{wrapper:l}=Object.assign({},s(),n.components);return l?e.createElement(l,n,e.createElement(a)):a();function a(){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",span:"span",blockquote:"blockquote",img:"img"},s(),n.components);return e.createElement(e.Fragment,null,e.createElement(t.h1,{id:"static-resources"},"Static Resources"),`
`,e.createElement(t.h2,{id:"introduction"},"Introduction"),`
`,e.createElement(t.p,null,"Make a ",e.createElement(t.code,null,"assets")," folder, and put all your static resources under it."),`
`,e.createElement(t.pre,null,e.createElement(t.code,{className:"hljs language-lua"},`|-docs
  |-assets
    |-tree-house-ipa.jpeg
    |-`,e.createElement(t.span,{className:"hljs-built_in"},"dump"),`-beer.gif
  |-ReadMe.md
`)),`
`,e.createElement(t.p,null,"All these resources will move to your ",e.createElement(t.code,null,"docs-dist")," folder, Docit will handle ",e.createElement(t.code,null,"public path")," for you."),`
`,e.createElement(t.h2,{id:"usage"},"Usage"),`
`,e.createElement(t.p,null,"To use assets"),`
`,e.createElement(t.blockquote,null,`
`,e.createElement(t.p,null,"Don't put ",e.createElement(t.code,null,"/")," before image path"),`
`),`
`,e.createElement(t.pre,null,e.createElement(t.code,{className:"hljs language-md"},"![",e.createElement(t.span,{className:"hljs-string"},"Tree House IPA"),"](",e.createElement(t.span,{className:"hljs-link"},"tree-house-ipa.jpeg"),`)
`)),`
`,e.createElement(t.p,null,e.createElement(t.img,{src:"tree-house-ipa.jpeg",alt:"Tree House IPA"})),`
`,e.createElement(t.pre,null,e.createElement(t.code,{className:"hljs language-md"},"![",e.createElement(t.span,{className:"hljs-string"},"Dump Beer"),"](",e.createElement(t.span,{className:"hljs-link"},"dump-beer.gif"),`)
`)),`
`,e.createElement(t.p,null,e.createElement(t.img,{src:"/dump-beer.gif",alt:"Dump Beer"})))}}export{r as default};
