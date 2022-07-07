import{s as j,r as _,R as N,S as ht,a as Ft,b as X}from"./index.c96f0782.js";const Ut=j.div`
  visibility: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px;
  pointer-events: none;
`,vt=j.div`
  position: relative;
  margin-right: 12px;
  pointer-events: all;
  .qrcode-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  .qrcode-wrapper:hover:after {
    content: "";
    position: absolute;
    top: -100px;
    left: 0px;
    width: 80px;
    height: 80px;
    background-image: url(${e=>e.src});
    background-repeat: no-repeat;
    background-size: contain;
  }
`,kt=j.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  pointer-events: all;
`;var K={},zt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Et={},b={};let ct;const Vt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];b.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};b.getSymbolTotalCodewords=function(t){return Vt[t]};b.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};b.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');ct=t};b.isKanjiModeEnabled=function(){return typeof ct!="undefined"};b.toSJIS=function(t){return ct(t)};var Q={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(o){return o&&typeof o.bit!="undefined"&&o.bit>=0&&o.bit<4},e.from=function(o,r){if(e.isValid(o))return o;try{return t(o)}catch{return r}}})(Q);function pt(){this.buffer=[],this.length=0}pt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Ht=pt;function J(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}J.prototype.set=function(e,t,i,o){const r=e*this.size+t;this.data[r]=i,o&&(this.reservedBit[r]=!0)};J.prototype.get=function(e,t){return this.data[e*this.size+t]};J.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};J.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Kt=J,Ct={};(function(e){const t=b.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const r=Math.floor(o/7)+2,n=t(o),s=n===145?26:Math.ceil((n-13)/(2*r-2))*2,a=[n-7];for(let u=1;u<r-1;u++)a[u]=a[u-1]-s;return a.push(6),a.reverse()},e.getPositions=function(o){const r=[],n=e.getRowColCoords(o),s=n.length;for(let a=0;a<s;a++)for(let u=0;u<s;u++)a===0&&u===0||a===0&&u===s-1||a===s-1&&u===0||r.push([n[a],n[u]]);return r}})(Ct);var Bt={};const Jt=b.getSymbolSize,mt=7;Bt.getPositions=function(t){const i=Jt(t);return[[0,0],[i-mt,0],[0,i-mt]]};var At={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const n=r.size;let s=0,a=0,u=0,c=null,l=null;for(let C=0;C<n;C++){a=u=0,c=l=null;for(let m=0;m<n;m++){let f=r.get(C,m);f===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=f,a=1),f=r.get(m,C),f===l?u++:(u>=5&&(s+=t.N1+(u-5)),l=f,u=1)}a>=5&&(s+=t.N1+(a-5)),u>=5&&(s+=t.N1+(u-5))}return s},e.getPenaltyN2=function(r){const n=r.size;let s=0;for(let a=0;a<n-1;a++)for(let u=0;u<n-1;u++){const c=r.get(a,u)+r.get(a,u+1)+r.get(a+1,u)+r.get(a+1,u+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const n=r.size;let s=0,a=0,u=0;for(let c=0;c<n;c++){a=u=0;for(let l=0;l<n;l++)a=a<<1&2047|r.get(c,l),l>=10&&(a===1488||a===93)&&s++,u=u<<1&2047|r.get(l,c),l>=10&&(u===1488||u===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let n=0;const s=r.data.length;for(let u=0;u<s;u++)n+=r.data[u];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(o,r,n){switch(o){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(r,n){const s=n.size;for(let a=0;a<s;a++)for(let u=0;u<s;u++)n.isReserved(u,a)||n.xor(u,a,i(r,u,a))},e.getBestMask=function(r,n){const s=Object.keys(e.Patterns).length;let a=0,u=1/0;for(let c=0;c<s;c++){n(c),e.applyMask(c,r);const l=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(c,r),l<u&&(u=l,a=c)}return a}})(At);var q={};const L=Q,$=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Y=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];q.getBlocksCount=function(t,i){switch(i){case L.L:return $[(t-1)*4+0];case L.M:return $[(t-1)*4+1];case L.Q:return $[(t-1)*4+2];case L.H:return $[(t-1)*4+3];default:return}};q.getTotalCodewordsCount=function(t,i){switch(i){case L.L:return Y[(t-1)*4+0];case L.M:return Y[(t-1)*4+1];case L.Q:return Y[(t-1)*4+2];case L.H:return Y[(t-1)*4+3];default:return}};var It={},G={};const V=new Uint8Array(512),O=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)V[i]=t,O[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)V[i]=V[i-255]})();G.log=function(t){if(t<1)throw new Error("log("+t+")");return O[t]};G.exp=function(t){return V[t]};G.mul=function(t,i){return t===0||i===0?0:V[O[t]+O[i]]};(function(e){const t=G;e.mul=function(o,r){const n=new Uint8Array(o.length+r.length-1);for(let s=0;s<o.length;s++)for(let a=0;a<r.length;a++)n[s+a]^=t.mul(o[s],r[a]);return n},e.mod=function(o,r){let n=new Uint8Array(o);for(;n.length-r.length>=0;){const s=n[0];for(let u=0;u<r.length;u++)n[u]^=t.mul(r[u],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let n=0;n<o;n++)r=e.mul(r,new Uint8Array([1,t.exp(n)]));return r}})(It);const bt=It;function lt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}lt.prototype.initialize=function(t){this.degree=t,this.genPoly=bt.generateECPolynomial(this.degree)};lt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const o=bt.mod(i,this.genPoly),r=this.degree-o.length;if(r>0){const n=new Uint8Array(this.degree);return n.set(o,r),n}return o};var $t=lt,Nt={},D={},ft={};ft.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var M={};const St="[0-9]+",Yt="[A-Z $%*+\\-./:]+";let H="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";H=H.replace(/u/g,"\\u");const Ot="(?:(?![A-Z0-9 $%*+\\-./:]|"+H+`)(?:.|[\r
]))+`;M.KANJI=new RegExp(H,"g");M.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");M.BYTE=new RegExp(Ot,"g");M.NUMERIC=new RegExp(St,"g");M.ALPHANUMERIC=new RegExp(Yt,"g");const xt=new RegExp("^"+H+"$"),jt=new RegExp("^"+St+"$"),Qt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");M.testKanji=function(t){return xt.test(t)};M.testNumeric=function(t){return jt.test(t)};M.testAlphanumeric=function(t){return Qt.test(t)};(function(e){const t=ft,i=M;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function o(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(n,s){if(e.isValid(n))return n;try{return o(n)}catch{return s}}})(D);(function(e){const t=b,i=q,o=Q,r=D,n=ft,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,a=t.getBCHDigit(s);function u(m,f,w){for(let y=1;y<=40;y++)if(f<=e.getCapacity(y,w,m))return y}function c(m,f){return r.getCharCountIndicator(m,f)+4}function l(m,f){let w=0;return m.forEach(function(y){w+=c(y.mode,f)+y.getBitsLength()}),w}function C(m,f){for(let w=1;w<=40;w++)if(l(m,w)<=e.getCapacity(w,f,r.MIXED))return w}e.from=function(f,w){return n.isValid(f)?parseInt(f,10):w},e.getCapacity=function(f,w,y){if(!n.isValid(f))throw new Error("Invalid QR Code version");typeof y=="undefined"&&(y=r.BYTE);const I=t.getSymbolTotalCodewords(f),h=i.getTotalCodewordsCount(f,w),E=(I-h)*8;if(y===r.MIXED)return E;const g=E-c(y,f);switch(y){case r.NUMERIC:return Math.floor(g/10*3);case r.ALPHANUMERIC:return Math.floor(g/11*2);case r.KANJI:return Math.floor(g/13);case r.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(f,w){let y;const I=o.from(w,o.M);if(Array.isArray(f)){if(f.length>1)return C(f,I);if(f.length===0)return 1;y=f[0]}else y=f;return u(y.mode,y.getLength(),I)},e.getEncodedBits=function(f){if(!n.isValid(f)||f<7)throw new Error("Invalid QR Code version");let w=f<<12;for(;t.getBCHDigit(w)-a>=0;)w^=s<<t.getBCHDigit(w)-a;return f<<12|w}})(Nt);var Tt={};const it=b,Mt=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,qt=1<<14|1<<12|1<<10|1<<4|1<<1,wt=it.getBCHDigit(Mt);Tt.getEncodedBits=function(t,i){const o=t.bit<<3|i;let r=o<<10;for(;it.getBCHDigit(r)-wt>=0;)r^=Mt<<it.getBCHDigit(r)-wt;return(o<<10|r)^qt};var Pt={};const Gt=D;function F(e){this.mode=Gt.NUMERIC,this.data=e.toString()}F.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(t){let i,o,r;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),r=parseInt(o,10),t.put(r,10);const n=this.data.length-i;n>0&&(o=this.data.substr(i),r=parseInt(o,10),t.put(r,n*3+1))};var Wt=F;const Zt=D,tt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function U(e){this.mode=Zt.ALPHANUMERIC,this.data=e}U.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let o=tt.indexOf(this.data[i])*45;o+=tt.indexOf(this.data[i+1]),t.put(o,11)}this.data.length%2&&t.put(tt.indexOf(this.data[i]),6)};var Xt=U,te=function(t){for(var i=[],o=t.length,r=0;r<o;r++){var n=t.charCodeAt(r);if(n>=55296&&n<=56319&&o>r+1){var s=t.charCodeAt(r+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,r+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const ee=te,ne=D;function v(e){this.mode=ne.BYTE,this.data=new Uint8Array(ee(e))}v.getBitsLength=function(t){return t*8};v.prototype.getLength=function(){return this.data.length};v.prototype.getBitsLength=function(){return v.getBitsLength(this.data.length)};v.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var re=v;const oe=D,ie=b;function k(e){this.mode=oe.KANJI,this.data=e}k.getBitsLength=function(t){return t*13};k.prototype.getLength=function(){return this.data.length};k.prototype.getBitsLength=function(){return k.getBitsLength(this.data.length)};k.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=ie.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var se=k,Rt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,o,r){var n={},s={};s[o]=0;var a=t.PriorityQueue.make();a.push(o,0);for(var u,c,l,C,m,f,w,y,I;!a.empty();){u=a.pop(),c=u.value,C=u.cost,m=i[c]||{};for(l in m)m.hasOwnProperty(l)&&(f=m[l],w=C+f,y=s[l],I=typeof s[l]=="undefined",(I||y>w)&&(s[l]=w,a.push(l,w),n[l]=c))}if(typeof r!="undefined"&&typeof s[r]=="undefined"){var h=["Could not find a path from ",o," to ",r,"."].join("");throw new Error(h)}return n},extract_shortest_path_from_predecessor_list:function(i,o){for(var r=[],n=o;n;)r.push(n),i[n],n=i[n];return r.reverse(),r},find_path:function(i,o,r){var n=t.single_source_shortest_paths(i,o,r);return t.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(i){var o=t.PriorityQueue,r={},n;i=i||{};for(n in o)o.hasOwnProperty(n)&&(r[n]=o[n]);return r.queue=[],r.sorter=i.sorter||o.default_sorter,r},default_sorter:function(i,o){return i.cost-o.cost},push:function(i,o){var r={value:i,cost:o};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Rt);(function(e){const t=D,i=Wt,o=Xt,r=re,n=se,s=M,a=b,u=Rt.exports;function c(h){return unescape(encodeURIComponent(h)).length}function l(h,E,g){const d=[];let p;for(;(p=h.exec(g))!==null;)d.push({data:p[0],index:p.index,mode:E,length:p[0].length});return d}function C(h){const E=l(s.NUMERIC,t.NUMERIC,h),g=l(s.ALPHANUMERIC,t.ALPHANUMERIC,h);let d,p;return a.isKanjiModeEnabled()?(d=l(s.BYTE,t.BYTE,h),p=l(s.KANJI,t.KANJI,h)):(d=l(s.BYTE_KANJI,t.BYTE,h),p=[]),E.concat(g,d,p).sort(function(A,S){return A.index-S.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function m(h,E){switch(E){case t.NUMERIC:return i.getBitsLength(h);case t.ALPHANUMERIC:return o.getBitsLength(h);case t.KANJI:return n.getBitsLength(h);case t.BYTE:return r.getBitsLength(h)}}function f(h){return h.reduce(function(E,g){const d=E.length-1>=0?E[E.length-1]:null;return d&&d.mode===g.mode?(E[E.length-1].data+=g.data,E):(E.push(g),E)},[])}function w(h){const E=[];for(let g=0;g<h.length;g++){const d=h[g];switch(d.mode){case t.NUMERIC:E.push([d,{data:d.data,mode:t.ALPHANUMERIC,length:d.length},{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.ALPHANUMERIC:E.push([d,{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.KANJI:E.push([d,{data:d.data,mode:t.BYTE,length:c(d.data)}]);break;case t.BYTE:E.push([{data:d.data,mode:t.BYTE,length:c(d.data)}])}}return E}function y(h,E){const g={},d={start:{}};let p=["start"];for(let B=0;B<h.length;B++){const A=h[B],S=[];for(let R=0;R<A.length;R++){const T=A[R],z=""+B+R;S.push(z),g[z]={node:T,lastCount:0},d[z]={};for(let Z=0;Z<p.length;Z++){const P=p[Z];g[P]&&g[P].node.mode===T.mode?(d[P][z]=m(g[P].lastCount+T.length,T.mode)-m(g[P].lastCount,T.mode),g[P].lastCount+=T.length):(g[P]&&(g[P].lastCount=T.length),d[P][z]=m(T.length,T.mode)+4+t.getCharCountIndicator(T.mode,E))}}p=S}for(let B=0;B<p.length;B++)d[p[B]].end=0;return{map:d,table:g}}function I(h,E){let g;const d=t.getBestModeForData(h);if(g=t.from(E,d),g!==t.BYTE&&g.bit<d.bit)throw new Error('"'+h+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(d));switch(g===t.KANJI&&!a.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new i(h);case t.ALPHANUMERIC:return new o(h);case t.KANJI:return new n(h);case t.BYTE:return new r(h)}}e.fromArray=function(E){return E.reduce(function(g,d){return typeof d=="string"?g.push(I(d,null)):d.data&&g.push(I(d.data,d.mode)),g},[])},e.fromString=function(E,g){const d=C(E,a.isKanjiModeEnabled()),p=w(d),B=y(p,g),A=u.find_path(B.map,"start","end"),S=[];for(let R=1;R<A.length-1;R++)S.push(B.table[A[R]].node);return e.fromArray(f(S))},e.rawSplit=function(E){return e.fromArray(C(E,a.isKanjiModeEnabled()))}})(Pt);const W=b,et=Q,ue=Ht,ae=Kt,ce=Ct,le=Bt,st=At,ut=q,fe=$t,x=Nt,de=Tt,ge=D,nt=Pt;function he(e,t){const i=e.size,o=le.getPositions(t);for(let r=0;r<o.length;r++){const n=o[r][0],s=o[r][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||i<=n+a))for(let u=-1;u<=7;u++)s+u<=-1||i<=s+u||(a>=0&&a<=6&&(u===0||u===6)||u>=0&&u<=6&&(a===0||a===6)||a>=2&&a<=4&&u>=2&&u<=4?e.set(n+a,s+u,!0,!0):e.set(n+a,s+u,!1,!0))}}function me(e){const t=e.size;for(let i=8;i<t-8;i++){const o=i%2===0;e.set(i,6,o,!0),e.set(6,i,o,!0)}}function we(e,t){const i=ce.getPositions(t);for(let o=0;o<i.length;o++){const r=i[o][0],n=i[o][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(r+s,n+a,!0,!0):e.set(r+s,n+a,!1,!0)}}function ye(e,t){const i=e.size,o=x.getEncodedBits(t);let r,n,s;for(let a=0;a<18;a++)r=Math.floor(a/3),n=a%3+i-8-3,s=(o>>a&1)===1,e.set(r,n,s,!0),e.set(n,r,s,!0)}function rt(e,t,i){const o=e.size,r=de.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(r>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(o-15+n,8,s,!0),n<8?e.set(8,o-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(o-8,8,1,!0)}function Ee(e,t){const i=e.size;let o=-1,r=i-1,n=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let u=0;u<2;u++)if(!e.isReserved(r,a-u)){let c=!1;s<t.length&&(c=(t[s]>>>n&1)===1),e.set(r,a-u,c),n--,n===-1&&(s++,n=7)}if(r+=o,r<0||i<=r){r-=o,o=-o;break}}}function pe(e,t,i){const o=new ue;i.forEach(function(u){o.put(u.mode.bit,4),o.put(u.getLength(),ge.getCharCountIndicator(u.mode,e)),u.write(o)});const r=W.getSymbolTotalCodewords(e),n=ut.getTotalCodewordsCount(e,t),s=(r-n)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const a=(s-o.getLengthInBits())/8;for(let u=0;u<a;u++)o.put(u%2?17:236,8);return Ce(o,e,t)}function Ce(e,t,i){const o=W.getSymbolTotalCodewords(t),r=ut.getTotalCodewordsCount(t,i),n=o-r,s=ut.getBlocksCount(t,i),a=o%s,u=s-a,c=Math.floor(o/s),l=Math.floor(n/s),C=l+1,m=c-l,f=new fe(m);let w=0;const y=new Array(s),I=new Array(s);let h=0;const E=new Uint8Array(e.buffer);for(let A=0;A<s;A++){const S=A<u?l:C;y[A]=E.slice(w,w+S),I[A]=f.encode(y[A]),w+=S,h=Math.max(h,S)}const g=new Uint8Array(o);let d=0,p,B;for(p=0;p<h;p++)for(B=0;B<s;B++)p<y[B].length&&(g[d++]=y[B][p]);for(p=0;p<m;p++)for(B=0;B<s;B++)g[d++]=I[B][p];return g}function Be(e,t,i,o){let r;if(Array.isArray(e))r=nt.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const l=nt.rawSplit(e);c=x.getBestVersionForData(l,i)}r=nt.fromString(e,c||40)}else throw new Error("Invalid data");const n=x.getBestVersionForData(r,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=pe(t,i,r),a=W.getSymbolSize(t),u=new ae(a);return he(u,t),me(u),we(u,t),rt(u,i,0),t>=7&&ye(u,t),Ee(u,s),isNaN(o)&&(o=st.getBestMask(u,rt.bind(null,u,i))),st.applyMask(o,u),rt(u,i,o),{modules:u,version:t,errorCorrectionLevel:i,maskPattern:o,segments:r}}Et.create=function(t,i){if(typeof t=="undefined"||t==="")throw new Error("No input text");let o=et.M,r,n;return typeof i!="undefined"&&(o=et.from(i.errorCorrectionLevel,et.M),r=x.from(i.version),n=st.from(i.maskPattern),i.toSJISFunc&&W.setToSJISFunction(i.toSJISFunc)),Be(t,r,o,n)};var Lt={},dt={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+i);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(n){return[n,n]}))),o.length===6&&o.push("F","F");const r=parseInt(o.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const r=typeof o.margin=="undefined"||o.margin===null||o.margin<0?4:o.margin,n=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:n,scale:n?4:s,margin:r,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},e.getImageWidth=function(o,r){const n=e.getScale(o,r);return Math.floor((o+r.margin*2)*n)},e.qrToImageData=function(o,r,n){const s=r.modules.size,a=r.modules.data,u=e.getScale(s,n),c=Math.floor((s+n.margin*2)*u),l=n.margin*u,C=[n.color.light,n.color.dark];for(let m=0;m<c;m++)for(let f=0;f<c;f++){let w=(m*c+f)*4,y=n.color.light;if(m>=l&&f>=l&&m<c-l&&f<c-l){const I=Math.floor((m-l)/u),h=Math.floor((f-l)/u);y=C[a[I*s+h]?1:0]}o[w++]=y.r,o[w++]=y.g,o[w++]=y.b,o[w]=y.a}}})(dt);(function(e){const t=dt;function i(r,n,s){r.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let u=a,c=s;typeof u=="undefined"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(c=o()),u=t.getOptions(u);const l=t.getImageWidth(n.modules.size,u),C=c.getContext("2d"),m=C.createImageData(l,l);return t.qrToImageData(m.data,n,u),i(C,c,l),C.putImageData(m,0,0),c},e.renderToDataURL=function(n,s,a){let u=a;typeof u=="undefined"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const c=e.render(n,s,u),l=u.type||"image/png",C=u.rendererOpts||{};return c.toDataURL(l,C.quality)}})(Lt);var Dt={};const Ae=dt;function yt(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function ot(e,t,i){let o=e+t;return typeof i!="undefined"&&(o+=" "+i),o}function Ie(e,t,i){let o="",r=0,n=!1,s=0;for(let a=0;a<e.length;a++){const u=Math.floor(a%t),c=Math.floor(a/t);!u&&!n&&(n=!0),e[a]?(s++,a>0&&u>0&&e[a-1]||(o+=n?ot("M",u+i,.5+c+i):ot("m",r,0),r=0,n=!1),u+1<t&&e[a+1]||(o+=ot("h",s),s=0)):r++}return o}Dt.render=function(t,i,o){const r=Ae.getOptions(i),n=t.modules.size,s=t.modules.data,a=n+r.margin*2,u=r.color.light.a?"<path "+yt(r.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+yt(r.color.dark,"stroke")+' d="'+Ie(s,n,r.margin)+'"/>',l='viewBox="0 0 '+a+" "+a+'"',C=r.width?'width="'+r.width+'" height="'+r.width+'" ':"",m='<svg xmlns="http://www.w3.org/2000/svg" '+C+l+' shape-rendering="crispEdges">'+u+c+`</svg>
`;return typeof o=="function"&&o(null,m),m};const be=zt,at=Et,_t=Lt,Ne=Dt;function gt(e,t,i,o,r){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!be())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(r=i,i=t,t=o=void 0):s===3&&(t.getContext&&typeof r=="undefined"?(r=o,o=void 0):(r=o,o=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=o=void 0):s===2&&!t.getContext&&(o=i,i=t,t=void 0),new Promise(function(u,c){try{const l=at.create(i,o);u(e(l,t,o))}catch(l){c(l)}})}try{const u=at.create(i,o);r(null,e(u,t,o))}catch(u){r(u)}}K.create=at.create;K.toCanvas=gt.bind(null,_t.render);K.toDataURL=gt.bind(null,_t.renderToDataURL);K.toString=gt.bind(null,function(e,t,i){return Ne.render(e,i)});const Se=e=>{const{moduleId:t}=e,[i,o]=_.exports.useState(null),r=_.exports.useMemo(()=>`https://blizzbolts.github.io/docit/#/__sandbox__?moduleId=${t}`,[t]);return _.exports.useEffect(()=>{K.toDataURL(r,{margin:0}).then(n=>{o(n)})},[r]),N.createElement(Ut,{className:"iframe-tools"},i&&N.createElement(vt,{src:i},N.createElement("div",{className:"qrcode-wrapper"},N.createElement(ht.QRCode,{height:"20px",width:"20px"}))),N.createElement(kt,{onClick:()=>window.open(r)},N.createElement(ht.Forward,{style:{cursor:"pointer"},height:"20px",width:"20px"})))},Te=j.div`
  :hover .iframe-tools {
    visibility: visible;
  }
`,Pe=()=>{const e=Ft(),[t,i]=_.exports.useState({}),o=_.exports.useRef(()=>N.createElement(N.Fragment,null));return _.exports.useEffect(()=>{const r=X[decodeURI(e.moduleId)];r?r().then(n=>{const{default:s}=n;o.current=s,i({})}):(console.warn("No Matching Sandbox!",X),console.log({query:e,sandboxes:X}))},[]),N.createElement(Te,null,N.createElement("div",{style:{height:"100vh"}},N.createElement(o.current,null)),N.createElement(Se,{moduleId:e.moduleId}))};export{Pe as default};