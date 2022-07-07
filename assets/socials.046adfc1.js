import{u as a,R as e}from"./index.f6c9da86.js";function l(n){const t=Object.assign({h1:"h1",p:"p",code:"code",blockquote:"blockquote",a:"a",h2:"h2",pre:"pre",span:"span"},a(),n.components);return e.createElement(e.Fragment,null,e.createElement(t.h1,{id:"socials"},"Socials"),`
`,e.createElement(t.p,null,"add a ",e.createElement(t.code,null,"socials")," object in your ",e.createElement(t.code,null,"docit.config.js")," file"),`
`,e.createElement(t.blockquote,null,`
`,e.createElement(t.p,null,"Checkout ",e.createElement(t.a,{href:"#/configure/config-file"},"Config File")," for Config file setup"),`
`),`
`,e.createElement(t.p,null,"Currently only support ",e.createElement(t.code,null,"Twitter")," and ",e.createElement(t.code,null,"Github")),`
`,e.createElement(t.p,null,"Your social info will displayed at the right side of header"),`
`,e.createElement(t.h2,{id:"example"},"Example"),`
`,e.createElement(t.pre,null,e.createElement(t.code,{className:"hljs language-js"},e.createElement(t.span,{className:"hljs-comment"},"// docit.config.js"),`

`,e.createElement(t.span,{className:"hljs-keyword"},"export")," ",e.createElement(t.span,{className:"hljs-keyword"},"default"),` {
  `,e.createElement(t.span,{className:"hljs-attr"},"socials"),`: {
    `,e.createElement(t.span,{className:"hljs-title class_"},"Github"),": ",e.createElement(t.span,{className:"hljs-string"},"'https://github.com/blizzbolts/docit'"),`
  }
}
`)))}function s(n={}){const{wrapper:t}=Object.assign({},a(),n.components);return t?e.createElement(t,n,e.createElement(l,n)):l(n)}export{s as default};
