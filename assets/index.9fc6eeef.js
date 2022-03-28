var A=Object.defineProperty,M=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var x=(t,n,a)=>n in t?A(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,p=(t,n)=>{for(var a in n||(n={}))N.call(n,a)&&x(t,a,n[a]);if(E)for(var a of E(n))j.call(n,a)&&x(t,a,n[a]);return t},v=(t,n)=>M(t,O(n));import{R as e,s as m,F as B,r as s,u as H,l as q,y as W,H as G,i as _,a as U,b as k,m as Q,M as X,c as Y,W as S,e as J,P as K,S as Z,d as ee,f as te,L as re,g as ne,h as oe,j as ae}from"./vendor.1f95e102.js";const ie=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}};ie();const le="modulepreload",y={},ce="https://phshy0607.github.io/docit/",d=function(n,a){return!a||a.length===0?n():Promise.all(a.map(l=>{if(l=`${ce}${l}`,l in y)return;y[l]=!0;const o=l.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${r}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":le,o||(i.as="script",i.crossOrigin=""),i.href=l,document.head.appendChild(i),o)return new Promise((c,u)=>{i.addEventListener("load",c),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>n())},V=[{path:"/Configs",exact:!0,component:e.lazy(()=>d(()=>import("./Configs.12305e40.js"),["assets/Configs.12305e40.js","assets/vendor.1f95e102.js"]))},{path:"/FAQ",exact:!0,component:e.lazy(()=>d(()=>import("./FAQ.7c4229d0.js"),["assets/FAQ.7c4229d0.js","assets/vendor.1f95e102.js"]))},{path:"/feature-request",exact:!0,component:e.lazy(()=>d(()=>import("./feature-request.1fc2fbf1.js"),["assets/feature-request.1fc2fbf1.js","assets/vendor.1f95e102.js"]))},{path:"/index",exact:!0,component:e.lazy(()=>d(()=>import("./index.2b5188a7.js"),["assets/index.2b5188a7.js","assets/vendor.1f95e102.js"]))},{path:"/Test/GFM",exact:!0,component:e.lazy(()=>d(()=>import("./GFM.dca874c3.js"),["assets/GFM.dca874c3.js","assets/vendor.1f95e102.js"]))},{path:"/Test/demo",exact:!0,component:e.lazy(()=>d(()=>import("./demo.44b8f765.js"),["assets/demo.44b8f765.js","assets/vendor.1f95e102.js"]))},{path:"/usage/API",exact:!0,component:e.lazy(()=>d(()=>import("./API.a39c9bfd.js"),["assets/API.a39c9bfd.js","assets/vendor.1f95e102.js"]))},{path:"/usage/GFM",exact:!0,component:e.lazy(()=>d(()=>import("./GFM.077dbbcf.js"),["assets/GFM.077dbbcf.js","assets/vendor.1f95e102.js"]))},{path:"/usage/MDX",exact:!0,component:e.lazy(()=>d(()=>import("./MDX.5771047d.js"),["assets/MDX.5771047d.js","assets/vendor.1f95e102.js","assets/Button.960e4357.js"]))},{path:"/usage/Syntax",exact:!0,component:e.lazy(()=>d(()=>import("./Syntax.4a2f4f2f.js"),["assets/Syntax.4a2f4f2f.js","assets/vendor.1f95e102.js"]))},{path:"/usage/sidebar",exact:!0,component:e.lazy(()=>d(()=>import("./sidebar.a14ce38d.js"),["assets/sidebar.a14ce38d.js","assets/vendor.1f95e102.js"]))},{path:"/usage/static-resources",exact:!0,component:e.lazy(()=>d(()=>import("./static-resources.35efd21a.js"),["assets/static-resources.35efd21a.js","assets/vendor.1f95e102.js"]))},{path:"/usage/using-components-in-docit",exact:!0,component:e.lazy(()=>d(()=>import("./using-components-in-docit.581386b9.js"),["assets/using-components-in-docit.581386b9.js","assets/vendor.1f95e102.js"]))},{path:"*",exact:!0,component:e.lazy(()=>d(()=>import("./404.90ec2698.js"),["assets/404.90ec2698.js","assets/vendor.1f95e102.js"]))}],$=m.div`
  padding: 1em;
`,C=m.div`
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
`,z=m.div`
  display: ${t=>t.show?"block":"none"};
`,se=m.div`
  margin: 1rem 0;
  border: 1px solid var(--c-border);
  border-radius: 4px;

  ${z} {
    display: ${t=>t.mobileView&&"block"};
    flex: ${t=>t.mobileView&&"1 1 auto"};
    overflow: ${t=>t.mobileView&&"auto"};

    pre {
      height: ${t=>t.mobileView&&"100%"};
      margin: ${t=>t.mobileView&&"0"};
      border-top-right-radius: ${t=>t.mobileView&&"0"};
      border-bottom-right-radius: ${t=>t.mobileView&&"0"};

      code {
        height: ${t=>t.mobileView&&"100%"};
      }
    }
  }

  ${$} {
    flex: ${t=>t.mobileView&&"0 0 360px"};
    width: ${t=>t.mobileView&&"360px"};
    min-width: ${t=>t.mobileView&&"360px"};
    man-width: ${t=>t.mobileView&&"360px"};

    height: ${t=>t.mobileView&&"640px"};
    min-height: ${t=>t.mobileView&&"640px"};
    max-height: ${t=>t.mobileView&&"640px"};

    border-left: ${t=>t.mobileView&&"1px solid var(--c-border)"};
    padding: ${t=>t.mobileView&&"0"};


    @media (max-width: 768px) {
      width: 100%;
      min-width: auto;
    }
  }

  ${C} {
    display: ${t=>t.mobileView&&"none"};
  }

  display: ${t=>t.mobileView?"flex":"block"};
  flex-flow: ${t=>t.mobileView&&"row-reverse"};

  @media (max-width: 1024px) {
    flex-flow: ${t=>t.mobileView&&"column"};
  }
`,de=m(B)`
  border: none;
  width: 100%;
  height: 100%;
`,f="iframe-root",me=t=>{const{children:n,id:a,mobileView:l}=t,{document:o}=q.useFrame();return s.exports.useEffect(()=>{if(!l){const r=document.getElementById(a),i=o.getElementById(f);r.style.height=`${i.clientHeight+30}px`}},[]),e.createElement(W,{target:o.head},e.createElement(e.Fragment,null,n))},ue=t=>{const{children:n,mobileView:a}=t,l=s.exports.useRef(H("iframe")),o=s.exports.useMemo(()=>{const i=[...document.head.childNodes].filter(c=>c.tagName==="STYLE"&&c.type==="text/css"&&!c.dataset.styled).map((c,u)=>e.createElement("style",{key:u,type:"text/css"},c.innerHTML));return e.createElement(e.Fragment,null,i)},[]);return e.createElement(de,{head:o,id:l.current,initialContent:`<!DOCTYPE html><html><head></head><body><div id="${f}"></div></body></html>`,mountTarget:`#${f}`},e.createElement(me,{id:l.current,mobileView:a},n))},he=m.div`
  margin-top: 1em;
  width: 100%;
  height: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ececec;
  border-radius: 1em;
`,D=t=>{const{loading:n,children:a}=t;return n?e.createElement(he,null,e.createElement("svg",{version:"1.1",id:"L5",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",xmlSpace:"preserve",width:"2em"},e.createElement("circle",{fill:"#615f5d",stroke:"none",cx:"6",cy:"50",r:"6"},e.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 15 ; 0 -15; 0 15",repeatCount:"indefinite",begin:"0.1"})),e.createElement("circle",{fill:"#615f5d",stroke:"none",cx:"30",cy:"50",r:"6"},e.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 10 ; 0 -10; 0 10",repeatCount:"indefinite",begin:"0.2"})),e.createElement("circle",{fill:"#615f5d",stroke:"none",cx:"54",cy:"50",r:"6"},e.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.3"})))):e.createElement(e.Fragment,null,a)},pe=t=>{const{get:n,code:a,lang:l,mobileView:o}=t,r=s.exports.useRef(()=>e.createElement(e.Fragment,null)),[i,c]=s.exports.useState(!1),[u,h]=s.exports.useState(!1),[Re,I]=s.exports.useState({});s.exports.useEffect(()=>{c(!0),n().then(g=>{c(!1);const{default:P}=g;r.current=P,I({})}).catch(()=>{c(!1)})},[]);const T=s.exports.useMemo(()=>G.highlight(a.replace(/\n\n/g,`
`),{language:l||"bash"}),[a]),F=()=>e.createElement("pre",null,e.createElement("code",{style:{margin:0},className:"docit-code",dangerouslySetInnerHTML:{__html:T.value}}));return e.createElement(D,{loading:i},e.createElement(se,{mobileView:o},e.createElement($,null,e.createElement(ue,{mobileView:o},e.createElement(r.current,null))),e.createElement(C,null,e.createElement("button",{onClick:()=>{h(g=>!g)}},"Show Code")),e.createElement(z,{show:u},F())))},ge=m.div`
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
    }
  }
`,fe=t=>{const[n,a]=s.exports.useState(!0),[l,o]=s.exports.useState(null);return s.exports.useEffect(()=>{a(!0),t.get().then(r=>{a(!1),o(r.default),console.log(r.default)}).catch(()=>{a(!1)})},[]),s.exports.useMemo(()=>l?l.reduce((r,i)=>p(p({},r),i.props.filter(c=>c.isEnum).reduce((c,u)=>v(p({},c),{[u.type]:u.enums}),{})),{}):null,[l]),e.createElement(D,{loading:n},l==null?void 0:l.filter(r=>!_(r.props)).map(r=>e.createElement("div",{key:r.componentName},e.createElement("strong",null,r.componentName),e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"\u5C5E\u6027"),e.createElement("th",null,"\u7C7B\u578B"),e.createElement("th",null,"\u9ED8\u8BA4\u503C"),e.createElement("th",null,"\u5FC5\u586B"),e.createElement("th",null,"\u63CF\u8FF0"))),e.createElement("tbody",null,r.props.map(i=>e.createElement("tr",{key:i.name},e.createElement("td",null,i.name),e.createElement("td",null,e.createElement("span",{style:{color:i.isEnum?"red":"inherit"}},i.type)),e.createElement("td",null,i.defaultValue),e.createElement("td",null,i.isRequired?"\u662F":"\u5426"),e.createElement("td",null,i.description||"-"))))))))};var L=[{title:"Get Started",path:"/index"},{title:"Usage",children:[{title:"Syntax",path:"/usage/Syntax"},{title:"API Generation",path:"/usage/API"},{title:"Sidebars",path:"/usage/sidebar"},{title:"Static Resources",path:"/usage/static-resources"},{title:"How to use components in Docit",path:"/usage/using-components-in-docit"}]},{title:"Test",children:[{title:"Editor.md",path:"/Test/GFM"},{title:"Demo",path:"/Test/demo"}]},{title:"Config File",path:"/Configs"},{title:"FAQ",path:"/FAQ"},{title:"Feature Request List",path:"/feature-request"}];const be=()=>{const t=()=>(r=>{var i,c;for(let u=0;u<r.length;u++){const h=r[u];return _(h.children)?h==null?void 0:h.path:(c=(i=h==null?void 0:h.children)==null?void 0:i[0])==null?void 0:c.path}})(L),n=U(),a=k();Q(a.pathname,V.map(o=>o.path)).path==="*"&&a.pathname==="/"&&n.push(t()||"/index")};class we extends e.Component{constructor(n){super(n);this.state={hasError:!1}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,a){console.log(n.message),this.state.a=n.message,this.setState({hasError:!0})}render(){return this.state.hasError?e.createElement("h1",null,this.state.a||"Something went wrong."):this.props.children}}const Ee=()=>(be(),e.createElement(we,null,e.createElement(ge,{className:"docit-markdown"},e.createElement(X,{components:{ShowCode:pe,ApiTable:fe,Suspense:s.exports.Suspense,code:t=>{if(t.className){const n=new RegExp(/language-(.*)/g);t.className.match(n)}return e.createElement("code",{className:`${[t.className,"docit-code"].join(" ")}`,"data-lang":RegExp.$1},t.children)}}},e.createElement(s.exports.Suspense,{fallback:e.createElement(e.Fragment,null)},Y(V))))));const xe=S`
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
`,ve=S`
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
`,ye=m.header`
  // z-index: 10;
  // position: fixed;
  // top: 0;
  // left: 0;
  height: var(--header-height);
  width: 100%;
  background: var(--c-bg);
  border-bottom: 1px solid var(--c-divider);

  display: flex;
  align-items: center;
  padding: 0 1rem;
`,_e=m.aside`
  width: var(--sidebar-width);
  height: calc(100vh - var(--header-height));
  overflow-y: auto;
  display: inline-block;

  .pro-sidebar {
    width: 100% !important;
    height: 100% !important;
    min-width: 100% !important;
  }

  @media (max-width: 768px) {
    width: 0px;
    .pro-sidebar.md {
      position: fixed;
      left: calc(var(--sidebar-width) * -1);
      width: auto !important;
      min-width: auto !important;
    }
    .pro-sidebar.md.toggled {
      position: fixed;
      left: 0em;
      width: 100% !important;
    }
  }
`,R=m.div`
  width: calc(100vw - var(--sidebar-width));
  height: calc(100vh - var(--header-height));
  display: inline-block;
  overflow-y: auto;
`,ke=m.main`
  .docit-markdown {
    padding: 0 4em;
    word-break: break-all;
    margin-bottom: 100px;
  }

  @media (max-width: 768px) {
    ${R} {
      width: 100vw;
      padding-left: 0rem;
    }

    .docit-markdown {
      padding: 0 1rem;
    }
  }
`;var Se={title:"Docit"};const Ve=m.p`
  font-weight: bold;
  font-size: 1.5em;
  color: var(--c-brand);
`,$e=m.button`
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
`,w=J(!1),b=t=>{w.set(t)},Ce=()=>{const t=w.use();return e.createElement(ye,null,e.createElement($e,{onClick:()=>{b(!t)}},e.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 448 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}))),e.createElement(Ve,null,Se.title))},ze=t=>{const{children:n}=t;return e.createElement(e.Fragment,null,n)};const De=t=>{const n=k(),{className:a}=t,l=w.use(),o=(r,i=0)=>r.children?e.createElement(ne,{key:r.title,title:r.title,defaultOpen:!0},r.children.map(c=>o(c,i+1))):e.createElement(te,{key:r.path,active:r.path===n.pathname,onClick:()=>{b(!1)}},r.title,e.createElement(re,{to:r.path}));return e.createElement(K,{breakPoint:"md",toggled:l,onToggle:r=>{b(r)},className:a,width:"20em",collapsedWidth:"0px"},e.createElement(Z,null,e.createElement(ee,null,L.map(r=>o(r)))))},Le=()=>e.createElement(ze,null,e.createElement(ve,null),e.createElement(xe,null),e.createElement(ke,null,e.createElement(Ce,null),e.createElement(_e,null,e.createElement(De,null)),e.createElement(R,null,e.createElement(Ee,null))));oe.render(e.createElement(e.StrictMode,null,e.createElement(ae,null,e.createElement(Le,null))),document.getElementById("app"));export{d as _};
