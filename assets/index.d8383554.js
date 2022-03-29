var P=Object.defineProperty,A=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var x=(e,r,i)=>r in e?P(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,p=(e,r)=>{for(var i in r||(r={}))H.call(r,i)&&x(e,i,r[i]);if(v)for(var i of v(r))B.call(r,i)&&x(e,i,r[i]);return e},y=(e,r)=>A(e,O(r));import{R as t,s as d,F as q,r as s,u as W,l as U,y as G,H as X,i as b,a as Y,b as S,m as J,M as K,c as Q,W as _,e as Z,L as ee,d as te,f as re}from"./vendor.d396be56.js";const oe=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}};oe();const ne="modulepreload",E={},ie="https://phshy0607.github.io/docit/",h=function(r,i){return!i||i.length===0?r():Promise.all(i.map(o=>{if(o=`${ie}${o}`,o in E)return;E[o]=!0;const n=o.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":ne,n||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),n)return new Promise((c,m)=>{l.addEventListener("load",c),l.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>r())},V=[{path:"/Configs",exact:!0,component:t.lazy(()=>h(()=>import("./Configs.f3391c55.js"),["assets/Configs.f3391c55.js","assets/vendor.d396be56.js"]))},{path:"/index",exact:!0,component:t.lazy(()=>h(()=>import("./index.fd57c282.js"),["assets/index.fd57c282.js","assets/vendor.d396be56.js"]))},{path:"/troubleshooting",exact:!0,component:t.lazy(()=>h(()=>import("./troubleshooting.64a36d6e.js"),["assets/troubleshooting.64a36d6e.js","assets/vendor.d396be56.js"]))},{path:"/usage/Syntax",exact:!0,component:t.lazy(()=>h(()=>import("./Syntax.c74cc47d.js"),["assets/Syntax.c74cc47d.js","assets/vendor.d396be56.js"]))},{path:"/usage/sidebar",exact:!0,component:t.lazy(()=>h(()=>import("./sidebar.630c0cee.js"),["assets/sidebar.630c0cee.js","assets/vendor.d396be56.js"]))},{path:"/usage/static-resources",exact:!0,component:t.lazy(()=>h(()=>import("./static-resources.b94fa631.js"),["assets/static-resources.b94fa631.js","assets/vendor.d396be56.js"]))},{path:"*",exact:!0,component:t.lazy(()=>h(()=>import("./404.00dd571e.js"),["assets/404.00dd571e.js","assets/vendor.d396be56.js"]))}],$=d.div`
  clear: both;
  overflow: auto;
  padding: 0 1em 1em 0;
  button {
    box-shadow: var(--box-shadow);
    border-radius: 4px;
    font-size: 0.875em;
    float: right;
    background: var(--c-white);
    color: var(--c-1);
    padding: 0.25em 0.5em;
    outline: 0;
    border: 0;

    cursor: pointer;
    transition: all 200ms linear;
    text-decoration: none;
    text-align: center;
    font-size: 0.5rem;
  }
`,C=d.div`
  display: ${e=>e.show?"block":"none"};
`,z=d.div`
  padding: 1em;
`,ae=d.div`
  margin: 1rem 0;
  border-radius: 4px;
  border-color: var(--c-border);
  border-width: ${e=>e.mobileView?"0px":"1px"};
  border-style: solid;

  display: ${e=>e.mobileView?"flex":"block"};
  flex-flow: ${e=>e.mobileView&&"row-reverse"};

  ${C} {
    display: ${e=>e.mobileView&&"block"};
    flex: ${e=>e.mobileView&&"1 1 auto"};
    overflow: ${e=>e.mobileView&&"auto"};
    margin-right: ${e=>e.mobileView&&"2em"};

    pre {
      height: ${e=>e.mobileView&&"100%"};
      margin: ${e=>e.mobileView?"0":"1em 0 0 0"};
      border-radius: 4px;

      code {
        height: ${e=>e.mobileView&&"100%"};
      }
    }
  }

  ${z} {
    flex: ${e=>e.mobileView&&"0 0 360px"};
    width: ${e=>e.mobileView&&"360px"};
    min-width: ${e=>e.mobileView&&"360px"};
    max-width: ${e=>e.mobileView&&"360px"};

    height: ${e=>e.mobileView&&"640px"};
    min-height: ${e=>e.mobileView&&"640px"};
    max-height: ${e=>e.mobileView&&"640px"};

    border-left: ${e=>e.mobileView&&"1px solid var(--c-border)"};
    padding: ${e=>e.mobileView&&"0"};

    border: ${e=>e.mobileView?"1px solid var(--c-border);":"0px"};

    @media (max-width: 768px) {
      width: 100%;
      min-width: auto;
    }
  }

  ${$} {
    display: ${e=>e.mobileView&&"none"};
  }

  @media (max-width: 1024px) {
    flex-flow: ${e=>e.mobileView&&"column"};
  }
`,le=d(q)`
  border: none;
  width: 100%;
  height: 100%;
`,f="iframe-root",ce=e=>{const{children:r,id:i,mobileView:o}=e,{document:n}=U.useFrame();return s.exports.useEffect(()=>{if(!o){const a=document.getElementById(i),l=n.getElementById(f);a.style.height=`${l.clientHeight+30}px`}},[]),t.createElement(G,{target:n.head},t.createElement(t.Fragment,null,r))},se=e=>{const{children:r,mobileView:i}=e,o=s.exports.useRef(W("iframe")),n=s.exports.useMemo(()=>{const l=[...document.head.childNodes].filter(c=>c.tagName==="STYLE"&&c.type==="text/css"&&!c.dataset.styled).map((c,m)=>t.createElement("style",{key:m,type:"text/css"},c.innerHTML));return t.createElement(t.Fragment,null,l)},[]);return t.createElement(le,{head:n,id:o.current,initialContent:`<!DOCTYPE html><html><head></head><body><div id="${f}"></div></body></html>`,mountTarget:`#${f}`},t.createElement(ce,{id:o.current,mobileView:i},r))},de=d.div`
  margin-top: 1em;
  width: 100%;
  height: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ececec;
  border-radius: 1em;
`,D=e=>{const{loading:r,children:i}=e;return r?t.createElement(de,null,t.createElement("svg",{version:"1.1",id:"L5",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",xmlSpace:"preserve",width:"2em"},t.createElement("circle",{fill:"#615f5d",stroke:"none",cx:"6",cy:"50",r:"6"},t.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 15 ; 0 -15; 0 15",repeatCount:"indefinite",begin:"0.1"})),t.createElement("circle",{fill:"#615f5d",stroke:"none",cx:"30",cy:"50",r:"6"},t.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 10 ; 0 -10; 0 10",repeatCount:"indefinite",begin:"0.2"})),t.createElement("circle",{fill:"#615f5d",stroke:"none",cx:"54",cy:"50",r:"6"},t.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.3"})))):t.createElement(t.Fragment,null,i)},me=e=>{const{get:r,code:i,lang:o,mobileView:n}=e,a=s.exports.useRef(()=>t.createElement(t.Fragment,null)),[l,c]=s.exports.useState(!1),[m,u]=s.exports.useState(!1),[Ce,F]=s.exports.useState({});s.exports.useEffect(()=>{c(!0),r().then(g=>{c(!1);const{default:M}=g;a.current=M,F({})}).catch(()=>{c(!1)})},[]);const N=s.exports.useMemo(()=>X.highlight(i.replace(/\n\n/g,`
`),{language:o||"bash"}),[i]),j=()=>t.createElement("pre",null,t.createElement("code",{style:{margin:0},className:"docit-code",dangerouslySetInnerHTML:{__html:N.value}}));return t.createElement(D,{loading:l},t.createElement(ae,{mobileView:n},t.createElement(z,null,t.createElement(se,{mobileView:n},t.createElement(a.current,null))),t.createElement($,null,t.createElement("button",{onClick:()=>{u(g=>!g)}},"Show Code")),t.createElement(C,{show:m},j())))},ue=d.div`
  color: var(--c-1);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1.25;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  b {
    font-weight: 600;
  }

  h1 {
    margin-top: 1.5rem;
    font-size: 1.9rem;
  }

  @media screen and (min-width: 420px) {
    h1 {
      font-size: 2.2rem;
    }
  }

  h2 {
    margin-top: 2.25rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid var(--c-divider);
    padding-bottom: 0.3rem;
    line-height: 1.25;
    font-size: 1.65rem;
  }

  h2 + h3 {
    margin-top: 1.5rem;
  }

  h3 {
    margin-top: 2rem;
    font-size: 1.35rem;
  }

  h4 {
    font-size: 1.15rem;
  }

  p,
  ol,
  ul {
    margin: 1rem 0;
    line-height: 1.7;
  }

  a,
  area,
  button,
  [role="button"],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }

  a {
    white-space: nowrap;
    text-decoration: none;
    color: var(--c-brand);
    transition: all 0.3 linear;
    ::before {
      content: "「";
    }
    ::after {
      content: "」";
    }
  }

  a:hover {
    opacity: 0.8;
  }

  a.header-anchor {
    float: left;
    margin-top: 0.125em;
    margin-left: -0.87em;
    padding-right: 0.23em;
    font-size: 0.85em;
    opacity: 0;
  }

  a.header-anchor:hover,
  a.header-anchor:focus {
    text-decoration: none;
  }

  figure {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  ul,
  ol {
    padding-left: 1.25em;
  }

  li > ul,
  li > ol {
    margin: 0;
  }

  table {
    display: block;
    border-collapse: collapse;
    margin: 1rem 0;
    overflow-x: auto;
  }

  tr {
    border-top: 1px solid #dfe2e5;
  }

  tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  th,
  td {
    border: 1px solid #dfe2e5;
    padding: 0.6em 1em;
  }

  blockquote {
    margin: 1rem 0;
    border-left: 0.2rem solid #dfe2e5;
    padding: 0.25rem 0 0.25rem 1rem;
    font-size: 1rem;
    color: #999;
  }

  blockquote > p {
    margin: 0;
  }

  form {
    margin: 0;
  }

  code.docit-code {
    background: var(--c-code-bg);
    font-weight: bold;
    padding: 0 0.25em;
  }

  p .docit-code {
    margin: 0 0.25em;
  }

  hr {
    border-top: 1px dashed var(--c-brand);
  }

  pre {
    text-align: left;
    font-size: var(--code-font-size);
    line-height: var(--code-line-height);
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    box-shadow: var(--box-shadow);
    background: var(--c-pre-bg);
    border-radius: var(--code-border-radius);

    code.docit-code {
      display: block;
      overflow-x: auto;
      background: transparent;
      font-weight: inherit;
      font-family: var(--font-family-code);
      color: var(--c-white);
      padding: 1em;
      margin: 1.5em 0px;

      .hljs-keyword {
        color: var(--c-code-keyword);
      }

      .hljs-class {
        color: #e78a4e;
      }

      .hljs-title.hljs-function {
        color: var(--c-code-function);
      }

      .hljs-attr {
        color: var(--c-code-attr);
      }

      .hljs-built_in {
        color: var(--c-code-built-in);
      }

      .hljs-name {
        color: var(--c-code-name);
      }

      .hljs-link {
        color: var(--c-code-link);
      }

      .hljs-string {
        color: var(--c-code-name);
      }

      .hljs-comment {
        color: var(--c-code-comments);
      }

      .hljs-property {
        color: var(--c-code-function);
      }

      .hljs-doctag {
        color: var(--c-code-doctag);
      }

      .hljs-string {
        color: var(--c-code-string);
      }
    }
  }
`,he=e=>{const[r,i]=s.exports.useState(!0),[o,n]=s.exports.useState(null);return s.exports.useEffect(()=>{i(!0),e.get().then(a=>{i(!1),n(a.default),console.log(a.default)}).catch(()=>{i(!1)})},[]),s.exports.useMemo(()=>o?o.reduce((a,l)=>p(p({},a),l.props.filter(c=>c.isEnum).reduce((c,m)=>y(p({},c),{[m.type]:m.enums}),{})),{}):null,[o]),t.createElement(D,{loading:r},o==null?void 0:o.filter(a=>!b(a.props)).map(a=>t.createElement("div",{key:a.componentName},t.createElement("strong",null,a.componentName),t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"Property"),t.createElement("th",null,"Type"),t.createElement("th",null,"DefaulValue"),t.createElement("th",null,"Required"),t.createElement("th",null,"Description"))),t.createElement("tbody",null,a.props.map(l=>t.createElement("tr",{key:l.name},t.createElement("td",null,l.name),t.createElement("td",null,t.createElement("span",{style:{color:l.isEnum?"red":"inherit"}},l.type)),t.createElement("td",null,l.defaultValue),t.createElement("td",null,l.isRequired?"\u662F":"\u5426"),t.createElement("td",null,l.description||"-"))))))))};var L=[{title:"Get Started",path:"/index"},{title:"Usage",children:[{title:"Syntax",path:"/usage/Syntax"},{title:"Sidebars",path:"/usage/sidebar"},{title:"Static Resources",path:"/usage/static-resources"}]},{title:"Config File",path:"/Configs"},{title:"Troubleshooting",path:"/troubleshooting"}];const pe=()=>{const e=()=>(a=>{var l,c;for(let m=0;m<a.length;m++){const u=a[m];return b(u.children)?u==null?void 0:u.path:(c=(l=u==null?void 0:u.children)==null?void 0:l[0])==null?void 0:c.path}})(L),r=Y(),i=S();J(i.pathname,V.map(n=>n.path)).path==="*"&&i.pathname==="/"&&r.push(e()||"/index")};class ge extends t.Component{constructor(r){super(r);this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0}}componentDidCatch(r,i){console.log(r.message),this.state.a=r.message,this.setState({hasError:!0})}render(){return this.state.hasError?t.createElement("h1",null,this.state.a||"Something went wrong."):this.props.children}}const fe=()=>(pe(),t.createElement(ge,null,t.createElement(ue,{className:"docit-markdown"},t.createElement(K,{components:{ShowCode:me,ApiTable:he,Suspense:s.exports.Suspense,code:e=>t.createElement("code",{className:`${[e.className,"docit-code"].join(" ")}`},e.children)}},t.createElement(s.exports.Suspense,{fallback:t.createElement(t.Fragment,null)},Q(V))))));const be=_`
  html, body, #app {
    margin: 0;
    padding: 0;
    font-family: var(--font-family);
    font-weight: var(--font-weight);
    font-size: var(--font-size);
    color: var(--c-1);
    background-color: var(--c-bg);
    -webkit-text-size-adjust: 100%
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    direction: var(--direction);
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    * {
      box-sizing: border-box;
    }

    button {
      -webkit-tap-highlight-color: transparent;
    }
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
  }
`,we=_`
  :root {
    --sidebar-width: 20em;
    --header-height: 4rem;

    --font-size: 16px;
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --font-family-code: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    --font-weight: 400;

    --box-shadow: rgb(0 0 0 / 10%) 0px 2px 3px 0px;
    --direction: ltr;

    --c-white: #ffffff;
    --c-black: #000000;
    --c-brand: #9B1D30;
    --c-1: #3c2828;

    --c-bg: var(--c-white);
    --c-divider: rgba(60, 60, 67, .12);
    --c-border: rgba(0, 0, 0, 0.1);

    --code-border-radius: 4px;
    --code-line-height: 1.7;
    --code-font-size: 14px;

    --c-pre-bg: #292828;
    --c-code-bg: #ececec;
    --c-code-keyword: #89b482;
    --c-code-function: #a9b665;
    --c-code-attr: #fff;
    --c-code-string: #D8A657;
    --c-code-built-in: #7DAEA3;
    --c-code-name: #e78a4e;
    --c-code-doctag: #EA6962;
    --c-code-link: var(--c-code-keyword);
    --c-code-comments: #938374;
  }
`,k=d.div.attrs(e=>({"data-level":e.level}))`
  font-size: 16px;
  margin-bottom: 16px;
  padding-left: 12px;

  font-weight: 600;

  color: ${e=>e.active?"blue":"inherit"};

  a {
    font-weight: 400;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color: var(--c-1);

    :hover {
      color: var(--c-brand);
    }
  }
`,w=Z(!1),R=e=>{w.set(e)},ve=e=>{const r=S(),i=(o,n)=>b(o.children)?t.createElement(k,{key:o.path,level:n,active:o.path===r.pathname},t.createElement(ee,{to:o.path,onClick:()=>{R(!1)}},o.title)):t.createElement(k,{level:n,active:!1,key:o.title},o.title,t.createElement("div",{style:{marginTop:"16px"}},o.children.map(a=>i(a,n+1))));return t.createElement("aside",p({},e),L.map(o=>i(o,0)))},xe=d.header`
  height: var(--header-height);
  width: 100%;
  background: var(--c-bg);
  border-bottom: 1px solid var(--c-divider);

  display: flex;
  align-items: center;
  padding: 0 1rem;
`,ye=d(ve)`
  padding: 1.5rem 1rem;
  width: var(--sidebar-width);
  height: calc(100vh - var(--header-height));
  overflow-y: auto;
  display: inline-block;
  border-right: 1px solid var(--c-divider);
  background: white;

  @media (max-width: 768px) {
    position: fixed;
    left: ${e=>e.visible==="true"?0:"calc(-1 * var(--sidebar-width))"};

    transition: left 250ms ease-in-out;
  }
`,I=d.div`
  width: calc(100vw - var(--sidebar-width));
  height: calc(100vh - var(--header-height));
  display: inline-block;
  overflow-y: auto;
`,Ee=d.main`
  .docit-markdown {
    padding: 0 4em;
    word-break: break-all;
    margin-bottom: 100px;
  }

  @media (max-width: 768px) {
    ${I} {
      width: 100vw;
      padding-left: 0rem;
    }

    .docit-markdown {
      padding: 0 1rem;
    }
  }
`;var T={title:"Docit"};const ke=d.p`
  font-weight: bold;
  font-size: 1.5em;
  color: var(--c-brand);
`,Se=d.button`
  @media (min-width: 768px) {
    display: none;
  }

  margin-right: 1em;
  color: var(--c-black);
  border: 0;
  outline: 0;
  background: var(--c-divider);
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s linear;
`,_e=()=>{const e=w.use();return t.createElement(xe,null,t.createElement(Se,{onClick:()=>{R(!e)}},t.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 448 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}))),t.createElement(ke,null,T.title))},Ve=e=>{const{children:r}=e;return t.createElement(t.Fragment,null,r)},$e=()=>{s.exports.useEffect(()=>{document.title=T.title},[]);const e=w.use();return t.createElement(Ve,null,t.createElement(we,null),t.createElement(be,null),t.createElement(Ee,null,t.createElement(_e,null),t.createElement(ye,{visible:`${e}`}),t.createElement(I,null,t.createElement(fe,null))))};te.render(t.createElement(t.StrictMode,null,t.createElement(re,null,t.createElement($e,null))),document.getElementById("app"));export{h as _};
