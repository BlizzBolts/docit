var D=Object.defineProperty,C=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var E=(o,r,a)=>r in o?D(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a,p=(o,r)=>{for(var a in r||(r={}))R.call(r,a)&&E(o,a,r[a]);if(b)for(var a of b(r))A.call(r,a)&&E(o,a,r[a]);return o},v=(o,r)=>C(o,L(r));import{R as e,s as d,r as u,H as M,i as y,u as P,a as w,m as F,M as I,b as O,e as T,P as V,S as j,c as N,d as $,L as B,f as H,W as _,g as q,h as W}from"./vendor.51078ebd.js";const G=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(n){if(n.ep)return;n.ep=!0;const t=a(n);fetch(n.href,t)}};G();const X="modulepreload",x={},Q="https://phshy0607.github.io/docit/",s=function(r,a){return!a||a.length===0?r():Promise.all(a.map(l=>{if(l=`${Q}${l}`,l in x)return;x[l]=!0;const n=l.endsWith(".css"),t=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${t}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":X,n||(i.as="script",i.crossOrigin=""),i.href=l,document.head.appendChild(i),n)return new Promise((c,m)=>{i.addEventListener("load",c),i.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>r())},k=[{path:"/FAQ",exact:!0,component:e.lazy(()=>s(()=>import("./FAQ.3c7a593e.js"),["assets/FAQ.3c7a593e.js","assets/vendor.51078ebd.js"]))},{path:"/feature-request",exact:!0,component:e.lazy(()=>s(()=>import("./feature-request.3f611ada.js"),["assets/feature-request.3f611ada.js","assets/vendor.51078ebd.js"]))},{path:"/index",exact:!0,component:e.lazy(()=>s(()=>import("./index.b7b6d2dd.js"),["assets/index.b7b6d2dd.js","assets/vendor.51078ebd.js"]))},{path:"/Test/GFM",exact:!0,component:e.lazy(()=>s(()=>import("./GFM.1c016241.js"),["assets/GFM.1c016241.js","assets/vendor.51078ebd.js"]))},{path:"/Test/demo",exact:!0,component:e.lazy(()=>s(()=>import("./demo.0ae874ec.js"),["assets/demo.0ae874ec.js","assets/vendor.51078ebd.js","assets/Button.083f56d1.js"]))},{path:"/settings/index",exact:!0,component:e.lazy(()=>s(()=>import("./index.4b4529a0.js"),["assets/index.4b4529a0.js","assets/vendor.51078ebd.js"]))},{path:"/settings/sidebar",exact:!0,component:e.lazy(()=>s(()=>import("./sidebar.3fbfec76.js"),["assets/sidebar.3fbfec76.js","assets/vendor.51078ebd.js"]))},{path:"/settings/static-resources",exact:!0,component:e.lazy(()=>s(()=>import("./static-resources.a4ff8f6b.js"),["assets/static-resources.a4ff8f6b.js","assets/vendor.51078ebd.js"]))},{path:"/tutorials/GFM",exact:!0,component:e.lazy(()=>s(()=>import("./GFM.f0d76518.js"),["assets/GFM.f0d76518.js","assets/vendor.51078ebd.js"]))},{path:"/tutorials/MDX",exact:!0,component:e.lazy(()=>s(()=>import("./MDX.2415303c.js"),["assets/MDX.2415303c.js","assets/vendor.51078ebd.js","assets/Button.083f56d1.js"]))},{path:"/tutorials/using-components-in-docit",exact:!0,component:e.lazy(()=>s(()=>import("./using-components-in-docit.830165f6.js"),["assets/using-components-in-docit.830165f6.js","assets/vendor.51078ebd.js","assets/Button.083f56d1.js"]))},{path:"*",exact:!0,component:e.lazy(()=>s(()=>import("./404.184865ee.js"),["assets/404.184865ee.js","assets/vendor.51078ebd.js"]))}],U=d.div`
  margin: 1rem 0;
  border: 1px solid var(--c-border);
  border-radius: 4px;
`,J=d.div`
  padding: 1em;
`,K=d.div`
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
`,Y=d.div``,Z=o=>{const{children:r,code:a,lang:l}=o,[n,t]=u.exports.useState(!Boolean(r)),i=u.exports.useMemo(()=>M.highlight(a.replace(/\n\n/g,`
`),{language:l||"bash"}),[a]),c=()=>e.createElement("pre",{style:{display:n?"block":"none",margin:0}},e.createElement("code",{style:{margin:0},className:"docit-code",dangerouslySetInnerHTML:{__html:i.value}}));return r?e.createElement(U,null,e.createElement(J,null,e.createElement(e.Fragment,null,r)),e.createElement(K,null,e.createElement("button",{onClick:()=>{t(m=>!m)}},"Show Code")),e.createElement(Y,null,c())):c()},ee=d.div`
  margin-bottom: 5rem;

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
    }
  }
`,te=o=>{const[r,a]=u.exports.useState(!1),[l,n]=u.exports.useState(null);return u.exports.useEffect(()=>{a(!0),o.get().then(t=>{a(!1),n(t.default),console.log(t.default)})},[]),u.exports.useMemo(()=>l?l.reduce((t,i)=>p(p({},t),i.props.filter(c=>c.isEnum).reduce((c,m)=>v(p({},c),{[m.type]:m.enums}),{})),{}):null,[l]),r?e.createElement("div",null,"loading..."):e.createElement(e.Fragment,null,l==null?void 0:l.filter(t=>!y(t.props)).map(t=>e.createElement("div",{key:t.componentName},e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"\u5C5E\u6027"),e.createElement("th",null,"\u7C7B\u578B"),e.createElement("th",null,"\u9ED8\u8BA4\u503C"),e.createElement("th",null,"\u5FC5\u586B"),e.createElement("th",null,"\u63CF\u8FF0"))),e.createElement("tbody",null,t.props.map(i=>e.createElement("tr",{key:i.name},e.createElement("td",null,i.name),e.createElement("td",null,e.createElement("span",{style:{color:i.isEnum?"red":"inherit"}},i.type)),e.createElement("td",null,i.defaultValue),e.createElement("td",null,i.isRequired?"\u662F":"\u5426"),e.createElement("td",null,i.description||"-"))))))))};var S=[{title:"Intro",path:"/index"},{title:"Configuration",children:[{title:"Sidebars",path:"/settings/sidebar"},{title:"Config File",path:"/settings/index"},{title:"Assets",path:"/settings/static-resources"}]},{title:"Syntax",children:[{title:"MDX",path:"/tutorials/MDX"},{title:"GFM",path:"/tutorials/GFM"},{title:"How to use components in Docit",path:"/tutorials/using-components-in-docit"}]},{title:"FAQ",path:"/FAQ"},{title:"Feature Request List",path:"/feature-request"}];const re=()=>{const o=()=>(t=>{var i,c;for(let m=0;m<t.length;m++){const h=t[m];return y(h.children)?h==null?void 0:h.path:(c=(i=h==null?void 0:h.children)==null?void 0:i[0])==null?void 0:c.path}})(S),r=P(),a=w();F(a.pathname,k.map(n=>n.path)).path==="*"&&a.pathname==="/"&&r.push(o()||"/index")};class oe extends e.Component{constructor(r){super(r);this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0}}componentDidCatch(r,a){console.log(r.message),this.state.a=r.message,this.setState({hasError:!0})}render(){return this.state.hasError?e.createElement("h1",null,this.state.a||"Something went wrong."):this.props.children}}const ne=()=>(re(),e.createElement(oe,null,e.createElement(ee,{className:"docit-markdown"},e.createElement(I,{components:{ShowCode:Z,ApiTable:te,Suspense:u.exports.Suspense,code:o=>{if(o.className){const r=new RegExp(/language-(.*)/g);o.className.match(r)}return e.createElement("code",{className:`${[o.className,"docit-code"].join(" ")}`,"data-lang":RegExp.$1},o.children)}}},e.createElement(u.exports.Suspense,{fallback:e.createElement(e.Fragment,null)},O(k))))));const f=T(!1),g=o=>{f.set(o)},ae=o=>{const r=w(),{className:a}=o,l=f.use(),n=(t,i=0)=>t.children?e.createElement(H,{key:t.title,title:t.title,defaultOpen:!0},t.children.map(c=>n(c,i+1))):e.createElement($,{key:t.path,active:t.path===r.pathname,onClick:()=>{g(!1)}},t.title,e.createElement(B,{to:t.path}));return e.createElement(V,{breakPoint:"md",toggled:l,onToggle:t=>{g(t)},className:a,width:"20em",collapsedWidth:"0px"},e.createElement(j,null,e.createElement(N,null,S.map(t=>n(t)))))};const ie=_`
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
`,le=_`
  :root {
    --sidebar-width: 20em;
    --font-size: 16px;
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --font-family-code: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    --font-weight: 400;

    --box-shadow: rgb(0 0 0 / 10%) 0px 2px 3px 0px;
    --direction: ltr;

    --c-white: #ffffff;
    --c-black: #000000;
    --c-brand: #9B1D30;
    --c-1: #2c3e50;
    --c-2: #476582;
    --c-3: #90a4b7;

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
    --c-code-attr: #d8a657;
    --c-code-built-in: #7DAEA3;

    --c-code-name: #e78a4e;
    --c-code-link: var(--c-code-keyword);
    --c-code-comments: #938374;
  }
`,ce=d.header`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  height: 4rem;
  width: 100%;
  background: var(--c-bg);
  border-bottom: 1px solid var(--c-divider);

  display: flex;
  align-items: center;
  padding: 0 1rem;
`,se=d(ae)`
  position: fixed;
  padding-top: 4rem;
  height: 100%;
  width: var(--sidebar-width);
  overflow-y: auto;

  @media (max-width: 768px) {
    &&&.pro-sidebar.md {
      position: fixed;
      left: calc(var(--sidebar-width) * -1);
    }
    &&&.pro-sidebar.md.toggled {
      position: fixed;
      left: 0em;
      width: 100% !important;
    }
  }
`,z=d.div`
  padding-left: var(--sidebar-width);
  padding-top: 4rem;
`,de=d.main`
  .docit-markdown {
    padding: 0 4em;
    height: 100%;
    word-break: break-all;
  }

  @media (max-width: 768px) {
    ${z} {
      padding-left: 0rem;
    }

    .docit-markdown {
      padding: 0 1rem;
    }
  }
`;var me={title:"Docit"};const ue=d.p`
  font-weight: bold;
  font-size: 1.5em;
  color: var(--c-brand);
`,he=d.button`
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
`,pe=()=>{const o=f.use();return e.createElement(ce,null,e.createElement(he,{onClick:()=>{g(!o)}},e.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 448 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}))),e.createElement(ue,null,me.title))},ge=o=>{const{children:r}=o;return e.createElement(e.Fragment,null,r)},fe=()=>e.createElement(ge,null,e.createElement(le,null),e.createElement(ie,null),e.createElement(de,null,e.createElement(pe,null),e.createElement(se,null),e.createElement(z,null,e.createElement(ne,null))));q.render(e.createElement(e.StrictMode,null,e.createElement("div",{style:{width:"calc(100vw - 10px)"}},e.createElement(W,null,e.createElement(fe,null)))),document.getElementById("app"));export{s as _};
