var q=Object.defineProperty,G=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var S=(e,n,r)=>n in e?q(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,h=(e,n)=>{for(var r in n||(n={}))W.call(n,r)&&S(e,r,n[r]);if(k)for(var r of k(n))X.call(n,r)&&S(e,r,n[r]);return e},g=(e,n)=>G(e,U(n));import{R as t,s as d,F as Q,r as s,u as Y,l as J,y as K,H as Z,i as b,a as y,b as v,m as ee,M as te,c as re,e as oe,L as ne,W as C,d as ie,f as ae}from"./vendor.d396be56.js";const le=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}};le();const ce="modulepreload",V={},se="https://phshy0607.github.io/docit/",m=function(n,r){return!r||r.length===0?n():Promise.all(r.map(o=>{if(o=`${se}${o}`,o in V)return;V[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":ce,i||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),i)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n())},D=[{path:"/troubleshooting",exact:!0,component:t.lazy(()=>m(()=>import("./troubleshooting.50582bca.js"),["assets/troubleshooting.50582bca.js","assets/vendor.d396be56.js"]))},{path:"/configure/config-file",exact:!0,component:t.lazy(()=>m(()=>import("./config-file.205910a0.js"),["assets/config-file.205910a0.js","assets/vendor.d396be56.js"]))},{path:"/configure/provider",exact:!0,component:t.lazy(()=>m(()=>import("./provider.c5c4e2b8.js"),["assets/provider.c5c4e2b8.js","assets/vendor.d396be56.js"]))},{path:"/configure/sidebar",exact:!0,component:t.lazy(()=>m(()=>import("./sidebar.e08dcce6.js"),["assets/sidebar.e08dcce6.js","assets/vendor.d396be56.js"]))},{path:"/configure/socials",exact:!0,component:t.lazy(()=>m(()=>import("./socials.15015f8a.js"),["assets/socials.15015f8a.js","assets/vendor.d396be56.js"]))},{path:"/configure/static-resources",exact:!0,component:t.lazy(()=>m(()=>import("./static-resources.aa39a215.js"),["assets/static-resources.aa39a215.js","assets/vendor.d396be56.js"]))},{path:"/explaination/routes",exact:!0,component:t.lazy(()=>m(()=>import("./routes.68912804.js"),["assets/routes.68912804.js","assets/vendor.d396be56.js"]))},{path:"/explaination/title",exact:!0,component:t.lazy(()=>m(()=>import("./title.fa88dd27.js"),["assets/title.fa88dd27.js","assets/vendor.d396be56.js"]))},{path:"/document/MDX",exact:!0,component:t.lazy(()=>m(()=>import("./MDX.86098b74.js"),["assets/MDX.86098b74.js","assets/vendor.d396be56.js"]))},{path:"/document/api-generation",exact:!0,component:t.lazy(()=>m(()=>import("./api-generation.9832ce7d.js"),["assets/api-generation.9832ce7d.js","assets/vendor.d396be56.js"]))},{path:"/document/front-matter",exact:!0,component:t.lazy(()=>m(()=>import("./front-matter.e16e64a2.js"),["assets/front-matter.e16e64a2.js","assets/vendor.d396be56.js"]))},{path:"/document/live-block",exact:!0,component:t.lazy(()=>m(()=>import("./live-block.4d45188c.js"),["assets/live-block.4d45188c.js","assets/vendor.d396be56.js"]))},{path:"/get-started/introduction",exact:!0,component:t.lazy(()=>m(()=>import("./introduction.a470d1a7.js"),["assets/introduction.a470d1a7.js","assets/vendor.d396be56.js"]))},{path:"/get-started/prerequisites",exact:!0,component:t.lazy(()=>m(()=>import("./prerequisites.f2ff0a03.js"),["assets/prerequisites.f2ff0a03.js","assets/vendor.d396be56.js"]))},{path:"*",exact:!0,component:t.lazy(()=>m(()=>import("./404.00dd571e.js"),["assets/404.00dd571e.js","assets/vendor.d396be56.js"]))}],z=d.div`
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
`,L=d.div`
  display: ${e=>e.show?"block":"none"};
`,I=d.div`
  padding: 1em;
`,de=d.div`
  margin: 1rem 0;
  border-radius: 4px;
  border-color: var(--c-border);
  border-width: ${e=>e.mobileView?"0px":"1px"};
  border-style: solid;

  display: ${e=>e.mobileView?"flex":"block"};
  flex-flow: ${e=>e.mobileView&&"row-reverse"};

  ${L} {
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

  ${I} {
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

  ${z} {
    display: ${e=>e.mobileView&&"none"};
  }

  @media (max-width: 1024px) {
    flex-flow: ${e=>e.mobileView&&"column"};
  }
`,me=d(Q)`
  border: none;
  width: 100%;
  height: 100%;
`,w="iframe-root",ue=e=>{const{children:n,id:r,mobileView:o}=e,{document:i}=J.useFrame();return s.exports.useEffect(()=>{if(!o){const l=document.getElementById(r),a=i.getElementById(w);l.style.height=`${a.clientHeight+30}px`}},[]),t.createElement(K,{target:i.head},t.createElement(t.Fragment,null,n))},he=e=>{const{children:n,mobileView:r}=e,o=s.exports.useRef(Y("iframe")),i=s.exports.useMemo(()=>{const a=[...document.head.childNodes].filter(c=>c.tagName==="STYLE"&&c.type==="text/css"&&!c.dataset.styled).map((c,u)=>t.createElement("style",{key:u,type:"text/css"},c.innerHTML));return t.createElement(t.Fragment,null,a)},[]);return t.createElement(me,{head:i,id:o.current,initialContent:`<!DOCTYPE html><html><head></head><body><div id="${w}"></div></body></html>`,mountTarget:`#${w}`},t.createElement(ue,{id:o.current,mobileView:r},n))},pe=d.div`
  margin-top: 1em;
  width: 100%;
  height: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ececec;
  border-radius: 1em;
`,ge=e=>t.createElement("svg",h({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),t.createElement("title",null,"Twitter"),t.createElement("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})),fe=e=>t.createElement("svg",h({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),t.createElement("title",null,"GitHub"),t.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})),be=e=>t.createElement("svg",h({strokeWidth:"0",viewBox:"0 0 448 512",xmlns:"http://www.w3.org/2000/svg"},e),t.createElement("path",{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"})),ve=e=>t.createElement("svg",h({version:"1.1",id:"L5",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",xmlSpace:"preserve"},e),t.createElement("circle",{fill:"#615f5d",stroke:"none",cx:"6",cy:"50",r:"6"},t.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 15 ; 0 -15; 0 15",repeatCount:"indefinite",begin:"0.1"})),t.createElement("circle",{fill:"#615f5d",stroke:"none",cx:"30",cy:"50",r:"6"},t.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 10 ; 0 -10; 0 10",repeatCount:"indefinite",begin:"0.2"})),t.createElement("circle",{fill:"#615f5d",stroke:"none",cx:"54",cy:"50",r:"6"},t.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.3"}))),E={Twitter:ge,Github:fe,ToggleBtn:be,AnimatedLoading:ve},R=e=>{const{loading:n,children:r}=e;return n?t.createElement(pe,null,t.createElement(E.AnimatedLoading,{width:"2em"})):t.createElement(t.Fragment,null,r)},xe=e=>{const{get:n,code:r,lang:o,mobileView:i}=e,l=s.exports.useRef(()=>t.createElement(t.Fragment,null)),[a,c]=s.exports.useState(!1),[u,p]=s.exports.useState(!1),[He,N]=s.exports.useState({});s.exports.useEffect(()=>{c(!0),n().then(x=>{c(!1);const{default:H}=x;l.current=H,N({})}).catch(()=>{c(!1)})},[]);const j=s.exports.useMemo(()=>Z.highlight(r.replace(/\n\n/g,`
`),{language:o||"bash"}),[r]),B=()=>t.createElement("pre",null,t.createElement("code",{style:{margin:0},className:"docit-code",dangerouslySetInnerHTML:{__html:j.value}}));return t.createElement(R,{loading:a},t.createElement(de,{mobileView:i},t.createElement(I,null,t.createElement(he,{mobileView:i},t.createElement(l.current,null))),t.createElement(z,null,t.createElement("button",{onClick:()=>{p(x=>!x)}},"Show Code")),t.createElement(L,{show:u},B())))},we=d.main`
  width: calc(100vw - var(--sidebar-width));
  height: calc(100vh - var(--header-height));
  display: inline-block;
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    width: 100vw;
    padding-left: 0rem;
  }
`,ye=d.div`
  color: var(--c-1);
  padding: 0 4em;
  padding-right: calc(4em - 20px);
  word-break: break-all;
  margin-bottom: 100px;
  width: calc(100% - var(--toc-width));

  @media (max-width: 768px) {
    padding: 0 1em;
    width: 100%;
  }

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
  .docit-paragraph,
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

  blockquote > .docit-paragraph {
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
`,Ee=e=>{const[n,r]=s.exports.useState(!0),[o,i]=s.exports.useState(null);return s.exports.useEffect(()=>{r(!0),e.get().then(l=>{r(!1),i(l.default),console.log(l.default)}).catch(()=>{r(!1)})},[]),s.exports.useMemo(()=>o?o.reduce((l,a)=>h(h({},l),a.props.filter(c=>c.isEnum).reduce((c,u)=>g(h({},c),{[u.type]:u.enums}),{})),{}):null,[o]),t.createElement(R,{loading:n},o==null?void 0:o.filter(l=>!b(l.props)).map(l=>t.createElement("div",{key:l.componentName},t.createElement("strong",null,l.componentName),t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"Property"),t.createElement("th",null,"Type"),t.createElement("th",null,"DefaulValue"),t.createElement("th",null,"Required"),t.createElement("th",null,"Description"))),t.createElement("tbody",null,l.props.map(a=>t.createElement("tr",{key:a.name},t.createElement("td",null,a.name),t.createElement("td",null,t.createElement("span",{style:{color:a.isEnum?"red":"inherit"}},a.type)),t.createElement("td",null,a.defaultValue),t.createElement("td",null,a.isRequired?"\u662F":"\u5426"),t.createElement("td",null,a.description||"-"))))))))};var A=[{title:"Get Started",children:[{title:"Introduction",path:"/get-started/introduction"}]},{title:"Document",children:[{title:"MDX",path:"/document/MDX"},{title:"Live Block",path:"/document/live-block"},{title:"API Generation",path:"/document/api-generation"},{title:"Front Matter",path:"/document/front-matter"}]},{title:"Explaination",children:[{title:"Routes",path:"/explaination/routes"},{title:"Title",path:"/explaination/title"}]},{title:"Configure",children:[{title:"Config File",path:"/configure/config-file"},{title:"Sidebar",path:"/configure/sidebar"},{title:"Provider",path:"/configure/provider"},{title:"Static Resources",path:"/configure/static-resources"},{title:"Socials",path:"/configure/socials"}]},{title:"Troubleshooting",path:"/troubleshooting"}];const _e=()=>{const e=()=>(l=>{var a,c;for(let u=0;u<l.length;u++){const p=l[u];return b(p.children)?p==null?void 0:p.path:(c=(a=p==null?void 0:p.children)==null?void 0:a[0])==null?void 0:c.path}})(A),n=y(),r=v();ee(r.pathname,D.map(i=>i.path)).path==="*"&&r.pathname==="/"&&n.push(e()||"/index")},ke=e=>e?e.replace("?","").split("&").reduce((n,r)=>{const[o,i]=r.split("=");return g(h({},n),{[o]:i})},{}):null,M=e=>b(e)?"":"?"+Object.entries(e).reduce((n,r)=>{const[o,i]=r;return[...n,`${o}=${i}`]},[]).join("&"),O=()=>{const e=v();return s.exports.useMemo(()=>e.search?ke(e.search):null,[e.search])},Se=()=>{const e=y(),n=v(),r=O();s.exports.useEffect(()=>{if(r!=null&&r.p){const o=()=>{const i=r.p,l=document.getElementById(i);l?l.scrollIntoView(!0):requestAnimationFrame(o)};requestAnimationFrame(o)}},[r]),s.exports.useEffect(()=>{const o=i=>{const l=i.target;if(["H1","H2","H3"].includes(l.tagName)){const a=M(g(h({},r),{p:l.id}));a!==n.search&&e.replace({pathname:n.pathname,search:a})}};return document.addEventListener("click",o),()=>{document.removeEventListener("click",o)}},[n,r])};var f={title:"Docit",socials:{Github:"https://github.com/phshy0607/docit"},version:"0.6.6",markdowns:[{toc:{items:[{url:"#troubleshooting",title:"Troubleshooting"}]},routePath:"/troubleshooting"},{toc:{items:[{url:"#config-file",title:"Config File",items:[{url:"#example",title:"Example"}]}]},routePath:"/configure/config-file"},{toc:{items:[{url:"#provider",title:"Provider",items:[{url:"#example",title:"Example"}]}]},routePath:"/configure/provider"},{toc:{items:[{url:"#sidebars",title:"Sidebars",items:[{url:"#custom-sidebars",title:"Custom Sidebars"}]}]},routePath:"/configure/sidebar"},{toc:{items:[{url:"#socials",title:"Socials",items:[{url:"#example",title:"Example"}]}]},routePath:"/configure/socials"},{toc:{items:[{url:"#static-resources",title:"Static Resources",items:[{url:"#introduction",title:"Introduction"},{url:"#usage",title:"Usage"}]}]},routePath:"/configure/static-resources"},{toc:{items:[{url:"#routes",title:"Routes"}]},routePath:"/explaination/routes"},{toc:{items:[{url:"#title",title:"Title"}]},routePath:"/explaination/title"},{toc:{items:[{url:"#mdx",title:"MDX",items:[{url:"#syntax",title:"Syntax"},{url:"#usage",title:"Usage"}]}]},routePath:"/document/MDX"},{toc:{items:[{url:"#api-generation",title:"API Generation",items:[{items:[{url:"#syntax",title:"Syntax"}]}]}]},routePath:"/document/api-generation"},{toc:{items:[{url:"#front-matter",title:"Front Matter"}]},routePath:"/document/front-matter"},{toc:{items:[{url:"#live-block",title:"Live Block",items:[{items:[{url:"#syntax",title:"Syntax"},{url:"#why",title:"Why?"}]},{url:"#for-mobile",title:"For Mobile",items:[{url:"#syntax-1",title:"Syntax"}]}]}]},routePath:"/document/live-block"},{toc:{items:[{url:"#docit",title:"Docit",items:[{url:"#get-started",title:"Get Started",items:[{url:"#usage",title:"Usage"}]},{url:"#credits",title:"Credits"},{url:"#changelog",title:"Changelog"},{url:"#examples",title:"Examples"}]}]},routePath:"/get-started/introduction"},{toc:{items:[{url:"#prerequisites",title:"Prerequisites"}]},routePath:"/get-started/prerequisites"}]};const Ve=d.div`
  border-left: 1px solid var(--c-divider);
  background: white;
  position: fixed;
  /* roughly scorllbar width */
  right: 20px;
  top: var(--header-height);
  width: calc(var(--toc-width) - 20px);
  height: 100%;
  padding-top: 1.5rem;
  padding-left: 1rem;

  span {
    color: var(--c-brand);
  }

  @media (max-width: 768px) {
    display: none;
  }
`,P=d.div`
  margin-bottom: 12px;
  cursor: pointer;
`,$=d.div.attrs(e=>({"data-level":e.level}))`
  padding-left: ${e=>e.empty?"12px":"0"};
`,{markdowns:Pe}=f,$e=()=>{const e=v(),n=O(),r=y(),o=s.exports.useMemo(()=>Pe.find(a=>a.routePath===e.pathname),[e.pathname]),i=a=>{const c=M(g(h({},n),{p:a.url.replace("#","")}));c!==e.search&&r.replace({pathname:e.pathname,search:c})},l=(a,c)=>b(a.items)?t.createElement($,{key:a.title,level:c,empty:!0},t.createElement(P,{onClick:()=>i(a)},a.title)):t.createElement($,{level:c,empty:!1},t.createElement(P,{onClick:()=>i(a)},a.title),t.createElement("div",null,a.items.map(u=>l(u,c+1))));return t.createElement(Ve,null,l(o==null?void 0:o.toc,0))},Te=()=>(_e(),Se(),t.createElement(we,{className:"docit-document"},t.createElement(ye,{className:"docit-markdown"},t.createElement(te,{components:{ShowCode:xe,ApiTable:Ee,Suspense:s.exports.Suspense,code:e=>t.createElement("code",{className:`${[e.className,"docit-code"].join(" ")}`},e.children),p:e=>t.createElement("div",{className:"docit-paragraph"},e.children)}},t.createElement(s.exports.Suspense,{fallback:t.createElement(t.Fragment,null)},re(D)))),t.createElement($e,null))),Ce=d.header`
  height: var(--header-height);
  width: 100%;
  background: var(--c-bg);
  border-bottom: 1px solid var(--c-divider);

  display: flex;
  align-items: center;
  padding: 0 2rem;
`,De=d.p`
  font-weight: bold;
  font-size: 1.5em;
  color: var(--c-brand);
`,ze=d.button`
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
`,_=oe(!1),F=e=>{_.set(e)},Le=d.div`
  margin-left: auto;

  svg + svg {
    margin-left: 1rem;
  }
`,Ie={fill:"var(--c-black)",width:"1.5em",height:"1.5em",cursor:"pointer"},Re=()=>f.socials?t.createElement(Le,null,Object.entries(f.socials).map(([e,n])=>{const r=E[e];return t.createElement(r,g(h({},Ie),{key:e,onClick:()=>{window.open(n,"__blank")}}))})):null,Ae=()=>{const e=_.use();return t.createElement(Ce,{className:"docit-header"},t.createElement(ze,{onClick:()=>{F(!e)}},t.createElement(E.ToggleBtn,{width:"1em",height:"1em"})),t.createElement(De,null,f.title),t.createElement(Re,null))},Me=d.aside`
  padding: 2rem 2rem;
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
`,T=d.div.attrs(e=>({"data-level":e.level}))`
  font-size: 16px;
  margin-bottom: 16px;
  padding-left: ${e=>e.level===0?"0":"12px"};
  font-weight: 600;

  a {
    font-weight: 400;
    display: inline-flex;
    text-decoration: none;
    cursor: pointer;
    color: ${e=>e.active?"var(--c-brand)":"var(--c-1)"};

    :hover {
      opacity: 0.6;
      transition: opacity 200ms linear;
    }
  }
`,Oe=()=>{const e=_.use(),n=v(),r=(o,i)=>b(o.children)?t.createElement(T,{key:o.path,level:i,active:o.path===n.pathname},t.createElement(ne,{to:o.path,onClick:()=>{F(!1)}},o.title)):t.createElement(T,{level:i,active:!1,key:o.title},o.title,t.createElement("div",{style:{marginTop:"16px"}},o.children.map(l=>r(l,i+1))));return t.createElement(Me,{visible:`${e}`,className:"docit-sidebar"},A.map(o=>r(o,0)))};const Fe=C`
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
`,Ne=C`
  :root {
    --sidebar-width: 20em;
    --header-height: 4rem;
    --toc-width: 280px;

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
`,je=e=>{const{children:n}=e;return t.createElement(t.Fragment,null,n)},Be=()=>(s.exports.useEffect(()=>{document.title=f.title,console.log(`%cDocit@${f.version}`,"color: #9B1D30;")},[]),t.createElement(je,null,t.createElement(Ne,null),t.createElement(Fe,null),t.createElement(Ae,null),t.createElement(Oe,null),t.createElement(Te,null)));ie.render(t.createElement(t.StrictMode,null,t.createElement(ae,null,t.createElement(Be,null))),document.getElementById("app"));export{m as _};
