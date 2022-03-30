var N=Object.defineProperty,F=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var _=(t,r,o)=>r in t?N(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,p=(t,r)=>{for(var o in r||(r={}))B.call(r,o)&&_(t,o,r[o]);if(y)for(var o of y(r))H.call(r,o)&&_(t,o,r[o]);return t},b=(t,r)=>F(t,j(r));import{R as e,s as m,F as q,r as s,u as G,l as W,y as X,H as U,i as w,a as Y,b as V,m as J,M as K,c as Q,e as Z,L as ee,W as z,d as te,f as re}from"./vendor.d396be56.js";const oe=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}};oe();const ne="modulepreload",k={},ie="https://phshy0607.github.io/docit/",d=function(r,o){return!o||o.length===0?r():Promise.all(o.map(n=>{if(n=`${ie}${n}`,n in k)return;k[n]=!0;const i=n.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":ne,i||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),i)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>r())},D=[{path:"/troubleshooting",exact:!0,component:e.lazy(()=>d(()=>import("./troubleshooting.64a36d6e.js"),["assets/troubleshooting.64a36d6e.js","assets/vendor.d396be56.js"]))},{path:"/document/MDX",exact:!0,component:e.lazy(()=>d(()=>import("./MDX.65a33c41.js"),["assets/MDX.65a33c41.js","assets/vendor.d396be56.js"]))},{path:"/document/api-generation",exact:!0,component:e.lazy(()=>d(()=>import("./api-generation.217699a4.js"),["assets/api-generation.217699a4.js","assets/vendor.d396be56.js"]))},{path:"/document/front-matter",exact:!0,component:e.lazy(()=>d(()=>import("./front-matter.9923885c.js"),["assets/front-matter.9923885c.js","assets/vendor.d396be56.js"]))},{path:"/document/live-block",exact:!0,component:e.lazy(()=>d(()=>import("./live-block.420f4fd7.js"),["assets/live-block.420f4fd7.js","assets/vendor.d396be56.js"]))},{path:"/configure/config-file",exact:!0,component:e.lazy(()=>d(()=>import("./config-file.bb4a8c7e.js"),["assets/config-file.bb4a8c7e.js","assets/vendor.d396be56.js"]))},{path:"/configure/provider",exact:!0,component:e.lazy(()=>d(()=>import("./provider.ecf77b8b.js"),["assets/provider.ecf77b8b.js","assets/vendor.d396be56.js"]))},{path:"/configure/sidebar",exact:!0,component:e.lazy(()=>d(()=>import("./sidebar.65c9e6e8.js"),["assets/sidebar.65c9e6e8.js","assets/vendor.d396be56.js"]))},{path:"/configure/socials",exact:!0,component:e.lazy(()=>d(()=>import("./socials.04de3a92.js"),["assets/socials.04de3a92.js","assets/vendor.d396be56.js"]))},{path:"/configure/static-resources",exact:!0,component:e.lazy(()=>d(()=>import("./static-resources.c91afc61.js"),["assets/static-resources.c91afc61.js","assets/vendor.d396be56.js"]))},{path:"/get-started/introduction",exact:!0,component:e.lazy(()=>d(()=>import("./introduction.3ba71191.js"),["assets/introduction.3ba71191.js","assets/vendor.d396be56.js"]))},{path:"/get-started/prerequisites",exact:!0,component:e.lazy(()=>d(()=>import("./prerequisites.7bc57c9d.js"),["assets/prerequisites.7bc57c9d.js","assets/vendor.d396be56.js"]))},{path:"/explaination/routes",exact:!0,component:e.lazy(()=>d(()=>import("./routes.a01e7c78.js"),["assets/routes.a01e7c78.js","assets/vendor.d396be56.js"]))},{path:"/explaination/title",exact:!0,component:e.lazy(()=>d(()=>import("./title.977d3a8f.js"),["assets/title.977d3a8f.js","assets/vendor.d396be56.js"]))},{path:"*",exact:!0,component:e.lazy(()=>d(()=>import("./404.00dd571e.js"),["assets/404.00dd571e.js","assets/vendor.d396be56.js"]))}],$=m.div`
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
`,L=m.div`
  display: ${t=>t.show?"block":"none"};
`,C=m.div`
  padding: 1em;
`,ae=m.div`
  margin: 1rem 0;
  border-radius: 4px;
  border-color: var(--c-border);
  border-width: ${t=>t.mobileView?"0px":"1px"};
  border-style: solid;

  display: ${t=>t.mobileView?"flex":"block"};
  flex-flow: ${t=>t.mobileView&&"row-reverse"};

  ${L} {
    display: ${t=>t.mobileView&&"block"};
    flex: ${t=>t.mobileView&&"1 1 auto"};
    overflow: ${t=>t.mobileView&&"auto"};
    margin-right: ${t=>t.mobileView&&"2em"};

    pre {
      height: ${t=>t.mobileView&&"100%"};
      margin: ${t=>t.mobileView?"0":"1em 0 0 0"};
      border-radius: 4px;

      code {
        height: ${t=>t.mobileView&&"100%"};
      }
    }
  }

  ${C} {
    flex: ${t=>t.mobileView&&"0 0 360px"};
    width: ${t=>t.mobileView&&"360px"};
    min-width: ${t=>t.mobileView&&"360px"};
    max-width: ${t=>t.mobileView&&"360px"};

    height: ${t=>t.mobileView&&"640px"};
    min-height: ${t=>t.mobileView&&"640px"};
    max-height: ${t=>t.mobileView&&"640px"};

    border-left: ${t=>t.mobileView&&"1px solid var(--c-border)"};
    padding: ${t=>t.mobileView&&"0"};

    border: ${t=>t.mobileView?"1px solid var(--c-border);":"0px"};

    @media (max-width: 768px) {
      width: 100%;
      min-width: auto;
    }
  }

  ${$} {
    display: ${t=>t.mobileView&&"none"};
  }

  @media (max-width: 1024px) {
    flex-flow: ${t=>t.mobileView&&"column"};
  }
`,le=m(q)`
  border: none;
  width: 100%;
  height: 100%;
`,v="iframe-root",ce=t=>{const{children:r,id:o,mobileView:n}=t,{document:i}=W.useFrame();return s.exports.useEffect(()=>{if(!n){const a=document.getElementById(o),l=i.getElementById(v);a.style.height=`${l.clientHeight+30}px`}},[]),e.createElement(X,{target:i.head},e.createElement(e.Fragment,null,r))},se=t=>{const{children:r,mobileView:o}=t,n=s.exports.useRef(G("iframe")),i=s.exports.useMemo(()=>{const l=[...document.head.childNodes].filter(c=>c.tagName==="STYLE"&&c.type==="text/css"&&!c.dataset.styled).map((c,u)=>e.createElement("style",{key:u,type:"text/css"},c.innerHTML));return e.createElement(e.Fragment,null,l)},[]);return e.createElement(le,{head:i,id:n.current,initialContent:`<!DOCTYPE html><html><head></head><body><div id="${v}"></div></body></html>`,mountTarget:`#${v}`},e.createElement(ce,{id:n.current,mobileView:o},r))},de=m.div`
  margin-top: 1em;
  width: 100%;
  height: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ececec;
  border-radius: 1em;
`,me=t=>e.createElement("svg",p({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("title",null,"Twitter"),e.createElement("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})),ue=t=>e.createElement("svg",p({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("title",null,"GitHub"),e.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})),he=t=>e.createElement("svg",p({strokeWidth:"0",viewBox:"0 0 448 512",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"})),pe=t=>e.createElement("svg",p({version:"1.1",id:"L5",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",xmlSpace:"preserve"},t),e.createElement("circle",{fill:"#615f5d",stroke:"none",cx:"6",cy:"50",r:"6"},e.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 15 ; 0 -15; 0 15",repeatCount:"indefinite",begin:"0.1"})),e.createElement("circle",{fill:"#615f5d",stroke:"none",cx:"30",cy:"50",r:"6"},e.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 10 ; 0 -10; 0 10",repeatCount:"indefinite",begin:"0.2"})),e.createElement("circle",{fill:"#615f5d",stroke:"none",cx:"54",cy:"50",r:"6"},e.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.3"}))),x={Twitter:me,Github:ue,ToggleBtn:he,AnimatedLoading:pe},T=t=>{const{loading:r,children:o}=t;return r?e.createElement(de,null,e.createElement(x.AnimatedLoading,{width:"2em"})):e.createElement(e.Fragment,null,o)},ge=t=>{const{get:r,code:o,lang:n,mobileView:i}=t,a=s.exports.useRef(()=>e.createElement(e.Fragment,null)),[l,c]=s.exports.useState(!1),[u,h]=s.exports.useState(!1),[Ae,A]=s.exports.useState({});s.exports.useEffect(()=>{c(!0),r().then(f=>{c(!1);const{default:M}=f;a.current=M,A({})}).catch(()=>{c(!1)})},[]);const P=s.exports.useMemo(()=>U.highlight(o.replace(/\n\n/g,`
`),{language:n||"bash"}),[o]),O=()=>e.createElement("pre",null,e.createElement("code",{style:{margin:0},className:"docit-code",dangerouslySetInnerHTML:{__html:P.value}}));return e.createElement(T,{loading:l},e.createElement(ae,{mobileView:i},e.createElement(C,null,e.createElement(se,{mobileView:i},e.createElement(a.current,null))),e.createElement($,null,e.createElement("button",{onClick:()=>{h(f=>!f)}},"Show Code")),e.createElement(L,{show:u},O())))},fe=m.main`
  width: calc(100vw - var(--sidebar-width));
  height: calc(100vh - var(--header-height));
  display: inline-block;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100vw;
    padding-left: 0rem;
  }
`,be=m.div`
  color: var(--c-1);
  padding: 0 4em;
  word-break: break-all;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    padding: 0 1em;
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
`,ve=t=>{const[r,o]=s.exports.useState(!0),[n,i]=s.exports.useState(null);return s.exports.useEffect(()=>{o(!0),t.get().then(a=>{o(!1),i(a.default),console.log(a.default)}).catch(()=>{o(!1)})},[]),s.exports.useMemo(()=>n?n.reduce((a,l)=>p(p({},a),l.props.filter(c=>c.isEnum).reduce((c,u)=>b(p({},c),{[u.type]:u.enums}),{})),{}):null,[n]),e.createElement(T,{loading:r},n==null?void 0:n.filter(a=>!w(a.props)).map(a=>e.createElement("div",{key:a.componentName},e.createElement("strong",null,a.componentName),e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Property"),e.createElement("th",null,"Type"),e.createElement("th",null,"DefaulValue"),e.createElement("th",null,"Required"),e.createElement("th",null,"Description"))),e.createElement("tbody",null,a.props.map(l=>e.createElement("tr",{key:l.name},e.createElement("td",null,l.name),e.createElement("td",null,e.createElement("span",{style:{color:l.isEnum?"red":"inherit"}},l.type)),e.createElement("td",null,l.defaultValue),e.createElement("td",null,l.isRequired?"\u662F":"\u5426"),e.createElement("td",null,l.description||"-"))))))))};var R=[{title:"Get Started",children:[{title:"Introduction",path:"/get-started/introduction"}]},{title:"Document",children:[{title:"MDX",path:"/document/MDX"},{title:"Live Block",path:"/document/live-block"},{title:"API Generation",path:"/document/api-generation"},{title:"Front Matter",path:"/document/front-matter"}]},{title:"Explaination",children:[{title:"Routes",path:"/explaination/routes"},{title:"Title",path:"/explaination/title"}]},{title:"Configure",children:[{title:"Config File",path:"/configure/config-file"},{title:"Sidebar",path:"/configure/sidebar"},{title:"Provider",path:"/configure/provider"},{title:"Static Resources",path:"/configure/static-resources"},{title:"Socials",path:"/configure/socials"}]},{title:"Troubleshooting",path:"/troubleshooting"}];const we=()=>{const t=()=>(a=>{var l,c;for(let u=0;u<a.length;u++){const h=a[u];return w(h.children)?h==null?void 0:h.path:(c=(l=h==null?void 0:h.children)==null?void 0:l[0])==null?void 0:c.path}})(R),r=Y(),o=V();J(o.pathname,D.map(i=>i.path)).path==="*"&&o.pathname==="/"&&r.push(t()||"/index")};class xe extends e.Component{constructor(r){super(r);this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0}}componentDidCatch(r,o){console.log(r.message),this.state.a=r.message,this.setState({hasError:!0})}render(){return this.state.hasError?e.createElement("h1",null,this.state.a||"Something went wrong."):this.props.children}}const Ee=()=>(we(),e.createElement(fe,{className:"docit-document"},e.createElement(xe,null,e.createElement(be,{className:"docit-markdown"},e.createElement(K,{components:{ShowCode:ge,ApiTable:ve,Suspense:s.exports.Suspense,code:t=>e.createElement("code",{className:`${[t.className,"docit-code"].join(" ")}`},t.children)}},e.createElement(s.exports.Suspense,{fallback:e.createElement(e.Fragment,null)},Q(D))))))),ye=m.header`
  height: var(--header-height);
  width: 100%;
  background: var(--c-bg);
  border-bottom: 1px solid var(--c-divider);

  display: flex;
  align-items: center;
  padding: 0 2rem;
`,_e=m.p`
  font-weight: bold;
  font-size: 1.5em;
  color: var(--c-brand);
`,ke=m.button`
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
`,E=Z(!1),I=t=>{E.set(t)},Se=m.div`
  margin-left: auto;

  svg + svg {
    margin-left: 1rem;
  }
`;var g={title:"Docit",socials:{Github:"https://github.com/phshy0607/docit"}};const Ve={fill:"var(--c-black)",width:"1.5em",height:"1.5em",cursor:"pointer"},ze=()=>g.socials?e.createElement(Se,null,Object.entries(g.socials).map(([t,r])=>{const o=x[t];return e.createElement(o,b(p({},Ve),{key:t,onClick:()=>{window.open(r,"__blank")}}))})):null,De=()=>{const t=E.use();return e.createElement(ye,{className:"docit-header"},e.createElement(ke,{onClick:()=>{I(!t)}},e.createElement(x.ToggleBtn,{width:"1em",height:"1em"})),e.createElement(_e,null,g.title),e.createElement(ze,null))},$e=m.aside`
  padding: 2rem 2rem;
  width: var(--sidebar-width);
  height: calc(100vh - var(--header-height));
  overflow-y: auto;
  display: inline-block;
  border-right: 1px solid var(--c-divider);
  background: white;

  @media (max-width: 768px) {
    position: fixed;
    left: ${t=>t.visible==="true"?0:"calc(-1 * var(--sidebar-width))"};

    transition: left 250ms ease-in-out;
  }
`,S=m.div.attrs(t=>({"data-level":t.level}))`
  font-size: 16px;
  margin-bottom: 16px;
  padding-left: ${t=>t.level===0?"0":"12px"};

  font-weight: 600;

  color: ${t=>t.active?"blue":"inherit"};

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
`,Le=()=>{const t=E.use(),r=V(),o=(n,i)=>w(n.children)?e.createElement(S,{key:n.path,level:i,active:n.path===r.pathname},e.createElement(ee,{to:n.path,onClick:()=>{I(!1)}},n.title)):e.createElement(S,{level:i,active:!1,key:n.title},n.title,e.createElement("div",{style:{marginTop:"16px"}},n.children.map(a=>o(a,i+1))));return e.createElement($e,{visible:`${t}`,className:"docit-sidebar"},R.map(n=>o(n,0)))};const Ce=z`
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
`,Te=z`
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
`,Re=t=>{const{children:r}=t;return e.createElement(e.Fragment,null,r)},Ie=()=>(s.exports.useEffect(()=>{document.title=g.title},[]),e.createElement(Re,null,e.createElement(Te,null),e.createElement(Ce,null),e.createElement(De,null),e.createElement(Le,null),e.createElement(Ee,null)));te.render(e.createElement(e.StrictMode,null,e.createElement(re,null,e.createElement(Ie,null))),document.getElementById("app"));export{d as _};
