import{u as a,R as e}from"./index.0cc171e8.js";function l(n){const t=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",ul:"ul",li:"li",h2:"h2",pre:"pre",code:"code",h3:"h3",ol:"ol",span:"span"},a(),n.components);return e.createElement(e.Fragment,null,e.createElement(t.h1,{id:"docit"},"Docit"),`
`,e.createElement(t.blockquote,null,`
`,e.createElement(t.p,null,"Simple and Rapid React Documentation ",e.createElement(t.a,{href:"https://blizzbolts.github.io/docit"},"https://blizzbolts.github.io/docit")),`
`),`
`,e.createElement(t.ul,null,`
`,e.createElement(t.li,null,"\u{1F61B} MDX & MD Syntax oriented."),`
`,e.createElement(t.li,null,"\u{1F32A}\uFE0F Fast HMR"),`
`,e.createElement(t.li,null,"\u{1F4B9} Out of the Box Api & Component Props Table Generation"),`
`,e.createElement(t.li,null,"\u2764\uFE0F Emoji Support and Responsive Designs"),`
`),`
`,e.createElement(t.h2,{id:"get-started"},"Get Started"),`
`,e.createElement(t.blockquote,null,`
`,e.createElement(t.p,null,"This package is ESM only: Node 12+ is needed to use it and it must be imported instead of required."),`
`),`
`,e.createElement(t.pre,null,e.createElement(t.code,{className:"hljs language-sh"},`yarn add @blizzbolts/docit -D
`)),`
`,e.createElement(t.h3,{id:"usage"},"Usage"),`
`,e.createElement(t.ol,null,`
`,e.createElement(t.li,null,"Make your first markdown file under ",e.createElement(t.code,null,"docs")),`
`),`
`,e.createElement(t.pre,null,e.createElement(t.code,{className:"hljs language-sh"},e.createElement(t.span,{className:"hljs-built_in"},"mkdir"),` docs

`,e.createElement(t.span,{className:"hljs-built_in"},"echo")," ",e.createElement(t.span,{className:"hljs-string"},'"# Introudction"'),` > docs/index.md
`)),`
`,e.createElement(t.ol,{start:"2"},`
`,e.createElement(t.li,null,"Start your doc local dev server by"),`
`),`
`,e.createElement(t.pre,null,e.createElement(t.code,{className:"hljs language-sh"},`docit start
`)),`
`,e.createElement(t.p,null,"For build"),`
`,e.createElement(t.pre,null,e.createElement(t.code,{className:"hljs language-sh"},`docit build
`)),`
`,e.createElement(t.h2,{id:"credits"},"Credits"),`
`,e.createElement(t.p,null,"This project is inspired by ",e.createElement(t.a,{href:"https://vitepress.vuejs.org/"},"Vitepress")," and ",e.createElement(t.a,{href:"https://storybook.js.org/"},"Storybook"),", powered by ",e.createElement(t.a,{href:"https://vitejs.dev/"},"Vite")," and ",e.createElement(t.a,{href:"https://mdxjs.com/"},"MDX")),`
`,e.createElement(t.h2,{id:"changelog"},"Changelog"),`
`,e.createElement(t.p,null,e.createElement(t.a,{href:"https://github.com/blizzbolts/docit/blob/master/CHANGELOG.md"},"CHANGELOG.md")),`
`,e.createElement(t.h2,{id:"examples"},"Examples"),`
`,e.createElement(t.p,null,e.createElement(t.a,{href:"https://blizzbolts.github.io/docit/"},"Docit")))}function c(n={}){const{wrapper:t}=Object.assign({},a(),n.components);return t?e.createElement(t,n,e.createElement(l,n)):l(n)}export{c as default};
