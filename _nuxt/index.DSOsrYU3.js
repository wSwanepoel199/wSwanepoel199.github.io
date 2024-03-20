function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as K,v as fu,x as Su,y as uu,z as Oe,d as Qn,A as p,F as Yn,G as Zt,m as ur,o as Ue,H as He,I as Jt,J as du,K as $,L as er,M as re,N as Le,_ as ku,C as gu,O as Kt,P as Xt,Q as tr,R as nr,S as rr,T as ir,U as or,V as sr,c as Qt,W as cr,X as ar,Y as lr,Z as Ou,$ as Ru,a0 as fr,t as dr,a1 as hr}from"./entry.DzOn8CxV.js";const ju=Object.freeze(Object.defineProperty({__proto__:null,get about(){return Or},get banner(){return Jn},get bing(){return qr},get date(){return Hr},get duckduckgo(){return $r},get echo(){return Ur},get email(){return Nr},get fetchsum(){return nc},get github(){return Pr},get google(){return zr},get help(){return Br},get linkedin(){return Mr},get liveterm(){return Ir},get projects(){return Zs},get readme(){return Ws},get reddit(){return jr},get repo(){return Lr},get theme(){return tc}},Symbol.toStringTag,{value:"Module"})),ee=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function pr(u,e){if(typeof u!="string")throw new TypeError("argument str must be a string");const t={},r=(e||{}).decode||_r;let i=0;for(;i<u.length;){const o=u.indexOf("=",i);if(o===-1)break;let s=u.indexOf(";",i);if(s===-1)s=u.length;else if(s<o){i=u.lastIndexOf(";",o-1)+1;continue}const c=u.slice(i,o).trim();if(t[c]===void 0){let a=u.slice(o+1,s).trim();a.codePointAt(0)===34&&(a=a.slice(1,-1)),t[c]=mr(a,r)}i=s+1}return t}function at(u,e,t){const n=t||{},r=n.encode||xr;if(typeof r!="function")throw new TypeError("option encode is invalid");if(!ee.test(u))throw new TypeError("argument name is invalid");const i=r(e);if(i&&!ee.test(i))throw new TypeError("argument val is invalid");let o=u+"="+i;if(n.maxAge!==void 0&&n.maxAge!==null){const s=n.maxAge-0;if(Number.isNaN(s)||!Number.isFinite(s))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(s)}if(n.domain){if(!ee.test(n.domain))throw new TypeError("option domain is invalid");o+="; Domain="+n.domain}if(n.path){if(!ee.test(n.path))throw new TypeError("option path is invalid");o+="; Path="+n.path}if(n.expires){if(!br(n.expires)||Number.isNaN(n.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(o+="; HttpOnly"),n.secure&&(o+="; Secure"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():n.priority){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function br(u){return Object.prototype.toString.call(u)==="[object Date]"||u instanceof Date}function mr(u,e){try{return e(u)}catch{return u}}function _r(u){return u.includes("%")?decodeURIComponent(u):u}function xr(u){return encodeURIComponent(u)}const lt=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ft(u,e){e?e={...lt,...e}:e=lt;const t=Yt(e);return t.dispatch(u),t.toString()}const gr=Object.freeze(["prototype","__proto__","constructor"]);function Yt(u){let e="",t=new Map;const n=r=>{e+=r};return{toString(){return e},getContext(){return t},dispatch(r){return u.replacer&&(r=u.replacer(r)),this[r===null?"null":typeof r](r)},object(r){if(r&&typeof r.toJSON=="function")return this.object(r.toJSON());const i=Object.prototype.toString.call(r);let o="";const s=i.length;s<10?o="unknown:["+i+"]":o=i.slice(8,s-1),o=o.toLowerCase();let c=null;if((c=t.get(r))===void 0)t.set(r,t.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(r))return n("buffer:"),n(r.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](r):u.ignoreUnknown||this.unkown(r,o);else{let a=Object.keys(r);u.unorderedObjects&&(a=a.sort());let d=[];u.respectType!==!1&&!dt(r)&&(d=gr),u.excludeKeys&&(a=a.filter(x=>!u.excludeKeys(x)),d=d.filter(x=>!u.excludeKeys(x))),n("object:"+(a.length+d.length)+":");const l=x=>{this.dispatch(x),n(":"),u.excludeValues||this.dispatch(r[x]),n(",")};for(const x of a)l(x);for(const x of d)l(x)}},array(r,i){if(i=i===void 0?u.unorderedArrays!==!1:i,n("array:"+r.length+":"),!i||r.length<=1){for(const c of r)this.dispatch(c);return}const o=new Map,s=r.map(c=>{const a=Yt(u);a.dispatch(c);for(const[d,l]of a.getContext())o.set(d,l);return a.toString()});return t=o,s.sort(),this.array(s,!1)},date(r){return n("date:"+r.toJSON())},symbol(r){return n("symbol:"+r.toString())},unkown(r,i){if(n(i),!!r&&(n(":"),r&&typeof r.entries=="function"))return this.array(Array.from(r.entries()),!0)},error(r){return n("error:"+r.toString())},boolean(r){return n("bool:"+r)},string(r){n("string:"+r.length+":"),n(r)},function(r){n("fn:"),dt(r)?this.dispatch("[native]"):this.dispatch(r.toString()),u.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(r.name)),u.respectFunctionProperties&&this.object(r)},number(r){return n("number:"+r)},xml(r){return n("xml:"+r.toString())},null(){return n("Null")},undefined(){return n("Undefined")},regexp(r){return n("regex:"+r.toString())},uint8array(r){return n("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},uint8clampedarray(r){return n("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},int8array(r){return n("int8array:"),this.dispatch(Array.prototype.slice.call(r))},uint16array(r){return n("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},int16array(r){return n("int16array:"),this.dispatch(Array.prototype.slice.call(r))},uint32array(r){return n("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},int32array(r){return n("int32array:"),this.dispatch(Array.prototype.slice.call(r))},float32array(r){return n("float32array:"),this.dispatch(Array.prototype.slice.call(r))},float64array(r){return n("float64array:"),this.dispatch(Array.prototype.slice.call(r))},arraybuffer(r){return n("arraybuffer:"),this.dispatch(new Uint8Array(r))},url(r){return n("url:"+r.toString())},map(r){n("map:");const i=[...r];return this.array(i,u.unorderedSets!==!1)},set(r){n("set:");const i=[...r];return this.array(i,u.unorderedSets!==!1)},file(r){return n("file:"),this.dispatch([r.name,r.size,r.type,r.lastModfied])},blob(){if(u.ignoreUnknown)return n("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return n("domwindow")},bigint(r){return n("bigint:"+r.toString())},process(){return n("process")},timer(){return n("timer")},pipe(){return n("pipe")},tcp(){return n("tcp")},udp(){return n("udp")},tty(){return n("tty")},statwatcher(){return n("statwatcher")},securecontext(){return n("securecontext")},connection(){return n("connection")},zlib(){return n("zlib")},context(){return n("context")},nodescript(){return n("nodescript")},httpparser(){return n("httpparser")},dataview(){return n("dataview")},signal(){return n("signal")},fsevent(){return n("fsevent")},tlswrap(){return n("tlswrap")}}}const un="[native code] }",yr=un.length;function dt(u){return typeof u!="function"?!1:Function.prototype.toString.call(u).slice(-yr)===un}function kr(u,e,t={}){return u===e||ft(u,t)===ft(e,t)}function lu(u){if(typeof u!="object")return u;var e,t,n=Object.prototype.toString.call(u);if(n==="[object Object]"){if(u.constructor!==Object&&typeof u.constructor=="function"){t=new u.constructor;for(e in u)u.hasOwnProperty(e)&&t[e]!==u[e]&&(t[e]=lu(u[e]))}else{t={};for(e in u)e==="__proto__"?Object.defineProperty(t,e,{value:lu(u[e]),configurable:!0,enumerable:!0,writable:!0}):t[e]=lu(u[e])}return t}if(n==="[object Array]"){for(e=u.length,t=Array(e);e--;)t[e]=lu(u[e]);return t}return n==="[object Set]"?(t=new Set,u.forEach(function(r){t.add(lu(r))}),t):n==="[object Map]"?(t=new Map,u.forEach(function(r,i){t.set(lu(i),lu(r))}),t):n==="[object Date]"?new Date(+u):n==="[object RegExp]"?(t=new RegExp(u.source,u.flags),t.lastIndex=u.lastIndex,t):n==="[object DataView]"?new u.constructor(lu(u.buffer)):n==="[object ArrayBuffer]"?u.slice(0):n.slice(-6)==="Array]"?new u.constructor(u):u}const Er={class:"inline-flex flex-row flex-wrap"},wr={class:"text-light-yellow dark:text-dark-yellow"},Cr=uu("p",{class:"text-light-gray dark:text-dark-gray"},"@",-1),Dr={class:"text-light-green dark:text-dark-green"},Ar={__name:"UserIdentifier",setup(u,{expose:e}){const t=["guest","nuxt"],n=K();return e({endRef:n}),(r,i)=>(fu(),Su("div",Er,[uu("p",wr,Oe(t[0]),1),Cr,uu("p",Dr,Oe(t[1]),1),uu("p",{ref_key:"endRef",ref:n,class:"text-light-gray dark:text-dark-gray"},":~$",512)]))}},en=Ar,Fr=Qn({props:{output:Object},render:({output:u})=>p("div",null,[p(u,null,null)])}),vr="$s";function nu(...u){const e=typeof u[u.length-1]=="string"?u.pop():void 0;typeof u[0]!="string"&&u.unshift(e);const[t,n]=u;if(!t||typeof t!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+t);if(n!==void 0&&typeof n!="function")throw new Error("[nuxt] [useState] init must be a function: "+n);const r=vr+t,i=ur(),o=Yn(i.payload.state,r);if(o.value===void 0&&n){const s=n();if(Zt(s))return i.payload.state[r]=s,s;o.value=s}return o}const Rr={key:0,classList:"flex flex-row"},Sr={classList:"mb-2 "},Tr={__name:"TerminalHistory",setup(u){const e=nu("history"),t=K(),n=K(),r=K(),i=K(),o=K(0),s=K(!1),c=()=>{o.value++};let a;const d=(l,x)=>{const _=l.offsetWidth<=x.offsetWidth+x.offsetLeft+10;l.style.left=-l.offsetWidth+"px",l.style.textIndent=_?"0px":x.offsetWidth+x.offsetLeft+5+"px",l.style.marginTop=_?x.offsetTop+x.offsetHeight+"px":x.offsetTop+"px"};return Ue(()=>{a=new ResizeObserver(l=>{l.forEach(x=>{n.value&&n.value.forEach((_,h)=>{const w=t.value[h];return d(_,w.children[0].children[3]),_})})}),e.value.length>=1&&c()}),He(()=>{r.value&&a.observe(r.value),!s.value&&n.value&&n.value.forEach((l,x)=>{const _=t.value[x];return d(l,_.children[0].children[3]),l})}),Jt(()=>{o.value&&o.value>0&&(o.value=0)}),(l,x)=>{const _=en,h=Fr;return du(o)?(fu(),Su("div",{key:du(o),ref_key:"historyRef",ref:r,class:"w-full",id:"command_history"},[uu("section",null,[(fu(!0),Su($,null,er(du(e),w=>(fu(),Su("div",{key:w},[w.id>0||w.command?(fu(),Su("div",Rr,[uu("div",{ref_for:!0,ref_key:"labelRef",ref:t,id:"label",class:"flex-shrink flex-1 z-10 relative min-w-full max-w-max break-words text-wrap"},[p(_,{ref_for:!0,ref_key:"endRef",ref:i},null,512)],512),uu("div",{ref_for:!0,ref_key:"inputRef",ref:n,class:"relative flex-grow min-w-full mr-1 break-words"},Oe(w.command),513)])):re("",!0),uu("div",Sr,[typeof w.output=="object"?(fu(),Le(h,{key:0,output:w.output},null,8,["output"])):re("",!0)])]))),128))])])):re("",!0)}}},Br=async()=>{const u=["clear",...Object.keys(ju)].sort().join(", ");return p($,null,[p("div",{className:"whitespace-pre-wrap flex flex-col"},[p("span",null,["Welcome! The available commands are:"]),p("br",null,null),p("span",{className:"ml-4 max-w-sm"},[`${u}`]),p("br",null,null),p("span",null,[`[tab]: trigger completion.
[ctrl+l] or clear: clear terminal.
`]),p("span",null,["Type 'fetchsum' to display summary."])])])},Or=async()=>{const u=await $fetch("/api/getRuntimeConfig").catch(e=>ku(()=>import("./config.DY70oKIP.js"),__vite__mapDeps([]),import.meta.url));return p($,null,[p("div",{className:"flex flex-col"},[p("span",null,[`Hello, I am ${u.NAME}, and welcome to my portfolio!`]),p("span",null,["To learn more about me, try one of the following commands:"]),p("br",null,null),p("div",{className:"ml-4 flex flex-col"},[p("span",null,["'fetchsum' - returns a summary of my details."]),p("span",null,["'readme' - returns my github README"])]),p("br",null,null),p("span",null,["If you haven't, try 'help' to view all available commands."])])])},Lr=async()=>{const u=await $fetch("/api/getRuntimeConfig").catch(e=>ku(()=>import("./config.DY70oKIP.js"),__vite__mapDeps([]),import.meta.url));return window.open(u.GITHUB_REPO,"_blank"),p($,null,[p("div",null,[p("span",null,["Opening GitHub repository..."])])])},Nr=async()=>{const u=await $fetch("/api/getRuntimeConfig").catch(e=>ku(()=>import("./config.DY70oKIP.js"),__vite__mapDeps([]),import.meta.url));return window.open(`mailto:${u.EMAIL}`,"_blank"),p($,null,[p("div",null,[p("span",null,[`Opening email to:${u.EMAIL}...`])])])},Ir=async()=>(window.open("https://github.com/Cveinnt/LiveTerm","_blank"),p($,null,[p("span",null,["Opening liveterm repo..."])])),Pr=async()=>{const u=await $fetch("/api/getRuntimeConfig").catch(e=>ku(()=>import("./config.DY70oKIP.js"),__vite__mapDeps([]),import.meta.url));return window.open(`https://github.com/${u.GITHUB}/`,"_blank"),p($,null,[p("div",null,[p("span",null,[`Opening ${u.GITHUB}'s github...`])])])},Mr=async()=>{const u=await $fetch("/api/getRuntimeConfig").catch(e=>ku(()=>import("./config.DY70oKIP.js"),__vite__mapDeps([]),import.meta.url));return window.open(`https://www.linkedin.com/in/${u.LINKEDIN}/`,"_blank"),p($,null,[p("div",null,[p("span",null,[`Opening ${u.LINKEDIN}'s linkedin...`])])])},zr=async u=>(window.open(`https://google.com/search?q=${u.join(" ")}`),p($,null,[p("div",null,[p("span",null,[`Searching google for ${u.join(" ")}...`])])])),$r=async u=>(window.open(`https://duckduckgo.com/?q=${u.join(" ")}`),p($,null,[p("div",null,[p("span",null,[`Searching duckduckgo for ${u.join(" ")}...`])])])),qr=async u=>(window.open(`https://bing.com/search?q=${u.join(" ")}`),p($,null,[p("div",null,[p("span",null,[`Searching bing for ${u.join(" ")}...seriously?`])])])),jr=async u=>{if(u.length===0)return p($,null,[p("div",{className:"whitespace-pre-wrap flex flex-col"},[p("span",null,["No valid options were provided."]),p("br",null,null),p("span",{className:"whitespace-pre-wrap"},["Enter 'reddit --help' to see all available options"])])]);const e=["--help","--search","--type","--sort"];if(u.includes("--help"))return p($,null,[p("div",{className:"whitespace-pre-wrap flex flex-col"},[p("span",null,["Welcome to Reddit! The available commands to search redditare:"]),p("br",null,null),p("span",{className:"ml-4 max-w-sm"},[`${e.join(", ")}`]),p("br",null,null),p("span",{className:"whitespace-pre-wrap"},[`You are able to string multiple options together, for example: 
'reddit --search='SearchTerm' --type='link||comment||sr||user'`])])]);const n=u.join(" ").split("--").map(r=>{const i=r.split("=");if(e.includes("--"+i[0])){if(i[0]==="search")return"q="+i[1];if(i[0]==="type")return"type="+i[1];if(i[0]==="sort")return"sort="+i[1]}}).reduce((r,i)=>(r?i&&(r=r+"&"+i):r=i,r));return window.open(`https://www.reddit.com/search/?${n}`),p($,null,[p("div",null,[p("span",null,[`Searching reddit for ${n}...`])])])},Ur=async u=>{const e=u.join(" ");return p($,null,[p("div",{className:"whitespace-pre-wrap leading-[normal]"},[p("pre",{className:"whitespace-pre-wrap leading-[normal]"},[`${e}`])])])},Hr=async()=>{const u=new Date().toString();return p($,null,[p("div",null,[p("pre",{className:"whitespace-pre-wrap leading-[normal] text-wrap break-words"},[`${u}`])])])},ht={};function Gr(u){let e=ht[u];if(e)return e;e=ht[u]=[];for(let t=0;t<128;t++){const n=String.fromCharCode(t);e.push(n)}for(let t=0;t<u.length;t++){const n=u.charCodeAt(t);e[n]="%"+("0"+n.toString(16).toUpperCase()).slice(-2)}return e}function Iu(u,e){typeof e!="string"&&(e=Iu.defaultChars);const t=Gr(e);return u.replace(/(%[a-f0-9]{2})+/gi,function(n){let r="";for(let i=0,o=n.length;i<o;i+=3){const s=parseInt(n.slice(i+1,i+3),16);if(s<128){r+=t[s];continue}if((s&224)===192&&i+3<o){const c=parseInt(n.slice(i+4,i+6),16);if((c&192)===128){const a=s<<6&1984|c&63;a<128?r+="��":r+=String.fromCharCode(a),i+=3;continue}}if((s&240)===224&&i+6<o){const c=parseInt(n.slice(i+4,i+6),16),a=parseInt(n.slice(i+7,i+9),16);if((c&192)===128&&(a&192)===128){const d=s<<12&61440|c<<6&4032|a&63;d<2048||d>=55296&&d<=57343?r+="���":r+=String.fromCharCode(d),i+=6;continue}}if((s&248)===240&&i+9<o){const c=parseInt(n.slice(i+4,i+6),16),a=parseInt(n.slice(i+7,i+9),16),d=parseInt(n.slice(i+10,i+12),16);if((c&192)===128&&(a&192)===128&&(d&192)===128){let l=s<<18&1835008|c<<12&258048|a<<6&4032|d&63;l<65536||l>1114111?r+="����":(l-=65536,r+=String.fromCharCode(55296+(l>>10),56320+(l&1023))),i+=9;continue}}r+="�"}return r})}Iu.defaultChars=";/?:@&=+$,#";Iu.componentChars="";const pt={};function Vr(u){let e=pt[u];if(e)return e;e=pt[u]=[];for(let t=0;t<128;t++){const n=String.fromCharCode(t);/^[0-9a-z]$/i.test(n)?e.push(n):e.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<u.length;t++)e[u.charCodeAt(t)]=u[t];return e}function Ju(u,e,t){typeof e!="string"&&(t=e,e=Ju.defaultChars),typeof t>"u"&&(t=!0);const n=Vr(e);let r="";for(let i=0,o=u.length;i<o;i++){const s=u.charCodeAt(i);if(t&&s===37&&i+2<o&&/^[0-9a-f]{2}$/i.test(u.slice(i+1,i+3))){r+=u.slice(i,i+3),i+=2;continue}if(s<128){r+=n[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&i+1<o){const c=u.charCodeAt(i+1);if(c>=56320&&c<=57343){r+=encodeURIComponent(u[i]+u[i+1]),i++;continue}}r+="%EF%BF%BD";continue}r+=encodeURIComponent(u[i])}return r}Ju.defaultChars=";/?:@&=+$,-_.!~*'()#";Ju.componentChars="-_.!~*'()";function Ge(u){let e="";return e+=u.protocol||"",e+=u.slashes?"//":"",e+=u.auth?u.auth+"@":"",u.hostname&&u.hostname.indexOf(":")!==-1?e+="["+u.hostname+"]":e+=u.hostname||"",e+=u.port?":"+u.port:"",e+=u.pathname||"",e+=u.search||"",e+=u.hash||"",e}function ce(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const Wr=/^([a-z0-9.+-]+:)/i,Zr=/:[0-9]*$/,Jr=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Kr=["<",">",'"',"`"," ","\r",`
`,"	"],Xr=["{","}","|","\\","^","`"].concat(Kr),Qr=["'"].concat(Xr),bt=["%","/","?",";","#"].concat(Qr),mt=["/","?","#"],Yr=255,_t=/^[+a-z0-9A-Z_-]{0,63}$/,u0=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,xt={javascript:!0,"javascript:":!0},gt={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Ve(u,e){if(u&&u instanceof ce)return u;const t=new ce;return t.parse(u,e),t}ce.prototype.parse=function(u,e){let t,n,r,i=u;if(i=i.trim(),!e&&u.split("#").length===1){const a=Jr.exec(i);if(a)return this.pathname=a[1],a[2]&&(this.search=a[2]),this}let o=Wr.exec(i);if(o&&(o=o[0],t=o.toLowerCase(),this.protocol=o,i=i.substr(o.length)),(e||o||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(r=i.substr(0,2)==="//",r&&!(o&&xt[o])&&(i=i.substr(2),this.slashes=!0)),!xt[o]&&(r||o&&!gt[o])){let a=-1;for(let h=0;h<mt.length;h++)n=i.indexOf(mt[h]),n!==-1&&(a===-1||n<a)&&(a=n);let d,l;a===-1?l=i.lastIndexOf("@"):l=i.lastIndexOf("@",a),l!==-1&&(d=i.slice(0,l),i=i.slice(l+1),this.auth=d),a=-1;for(let h=0;h<bt.length;h++)n=i.indexOf(bt[h]),n!==-1&&(a===-1||n<a)&&(a=n);a===-1&&(a=i.length),i[a-1]===":"&&a--;const x=i.slice(0,a);i=i.slice(a),this.parseHost(x),this.hostname=this.hostname||"";const _=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!_){const h=this.hostname.split(/\./);for(let w=0,R=h.length;w<R;w++){const B=h[w];if(B&&!B.match(_t)){let O="";for(let F=0,T=B.length;F<T;F++)B.charCodeAt(F)>127?O+="x":O+=B[F];if(!O.match(_t)){const F=h.slice(0,w),T=h.slice(w+1),v=B.match(u0);v&&(F.push(v[1]),T.unshift(v[2])),T.length&&(i=T.join(".")+i),this.hostname=F.join(".");break}}}}this.hostname.length>Yr&&(this.hostname=""),_&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const s=i.indexOf("#");s!==-1&&(this.hash=i.substr(s),i=i.slice(0,s));const c=i.indexOf("?");return c!==-1&&(this.search=i.substr(c),i=i.slice(0,c)),i&&(this.pathname=i),gt[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};ce.prototype.parseHost=function(u){let e=Zr.exec(u);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),u=u.substr(0,u.length-e.length)),u&&(this.hostname=u)};const e0=Object.freeze(Object.defineProperty({__proto__:null,decode:Iu,encode:Ju,format:Ge,parse:Ve},Symbol.toStringTag,{value:"Module"})),tn=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,nn=/[\0-\x1F\x7F-\x9F]/,t0=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,We=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,n0=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,rn=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,r0=Object.freeze(Object.defineProperty({__proto__:null,Any:tn,Cc:nn,Cf:t0,P:We,S:n0,Z:rn},Symbol.toStringTag,{value:"Module"})),i0=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(u=>u.charCodeAt(0))),o0=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(u=>u.charCodeAt(0)));var Ee;const s0=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),c0=(Ee=String.fromCodePoint)!==null&&Ee!==void 0?Ee:function(u){let e="";return u>65535&&(u-=65536,e+=String.fromCharCode(u>>>10&1023|55296),u=56320|u&1023),e+=String.fromCharCode(u),e};function a0(u){var e;return u>=55296&&u<=57343||u>1114111?65533:(e=s0.get(u))!==null&&e!==void 0?e:u}var X;(function(u){u[u.NUM=35]="NUM",u[u.SEMI=59]="SEMI",u[u.EQUALS=61]="EQUALS",u[u.ZERO=48]="ZERO",u[u.NINE=57]="NINE",u[u.LOWER_A=97]="LOWER_A",u[u.LOWER_F=102]="LOWER_F",u[u.LOWER_X=120]="LOWER_X",u[u.LOWER_Z=122]="LOWER_Z",u[u.UPPER_A=65]="UPPER_A",u[u.UPPER_F=70]="UPPER_F",u[u.UPPER_Z=90]="UPPER_Z"})(X||(X={}));const l0=32;var Au;(function(u){u[u.VALUE_LENGTH=49152]="VALUE_LENGTH",u[u.BRANCH_LENGTH=16256]="BRANCH_LENGTH",u[u.JUMP_TABLE=127]="JUMP_TABLE"})(Au||(Au={}));function Ne(u){return u>=X.ZERO&&u<=X.NINE}function f0(u){return u>=X.UPPER_A&&u<=X.UPPER_F||u>=X.LOWER_A&&u<=X.LOWER_F}function d0(u){return u>=X.UPPER_A&&u<=X.UPPER_Z||u>=X.LOWER_A&&u<=X.LOWER_Z||Ne(u)}function h0(u){return u===X.EQUALS||d0(u)}var J;(function(u){u[u.EntityStart=0]="EntityStart",u[u.NumericStart=1]="NumericStart",u[u.NumericDecimal=2]="NumericDecimal",u[u.NumericHex=3]="NumericHex",u[u.NamedEntity=4]="NamedEntity"})(J||(J={}));var Du;(function(u){u[u.Legacy=0]="Legacy",u[u.Strict=1]="Strict",u[u.Attribute=2]="Attribute"})(Du||(Du={}));class p0{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=J.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Du.Strict}startEntity(e){this.decodeMode=e,this.state=J.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case J.EntityStart:return e.charCodeAt(t)===X.NUM?(this.state=J.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=J.NamedEntity,this.stateNamedEntity(e,t));case J.NumericStart:return this.stateNumericStart(e,t);case J.NumericDecimal:return this.stateNumericDecimal(e,t);case J.NumericHex:return this.stateNumericHex(e,t);case J.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|l0)===X.LOWER_X?(this.state=J.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=J.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){const i=n-t;this.result=this.result*Math.pow(r,i)+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){const n=t;for(;t<e.length;){const r=e.charCodeAt(t);if(Ne(r)||f0(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){const n=t;for(;t<e.length;){const r=e.charCodeAt(t);if(Ne(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===X.SEMI)this.consumed+=1;else if(this.decodeMode===Du.Strict)return 0;return this.emitCodePoint(a0(this.result),this.consumed),this.errors&&(e!==X.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){const{decodeTree:n}=this;let r=n[this.treeIndex],i=(r&Au.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){const o=e.charCodeAt(t);if(this.treeIndex=b0(n,r,this.treeIndex+Math.max(1,i),o),this.treeIndex<0)return this.result===0||this.decodeMode===Du.Attribute&&(i===0||h0(o))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&Au.VALUE_LENGTH)>>14,i!==0){if(o===X.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==Du.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;const{result:t,decodeTree:n}=this,r=(n[t]&Au.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)===null||e===void 0||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){const{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~Au.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case J.NamedEntity:return this.result!==0&&(this.decodeMode!==Du.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case J.NumericDecimal:return this.emitNumericEntity(0,2);case J.NumericHex:return this.emitNumericEntity(0,3);case J.NumericStart:return(e=this.errors)===null||e===void 0||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case J.EntityStart:return 0}}}function on(u){let e="";const t=new p0(u,n=>e+=c0(n));return function(r,i){let o=0,s=0;for(;(s=r.indexOf("&",s))>=0;){e+=r.slice(o,s),t.startEntity(i);const a=t.write(r,s+1);if(a<0){o=s+t.end();break}o=s+a,s=a===0?o+1:o}const c=e+r.slice(o);return e="",c}}function b0(u,e,t,n){const r=(e&Au.BRANCH_LENGTH)>>7,i=e&Au.JUMP_TABLE;if(r===0)return i!==0&&n===i?t:-1;if(i){const c=n-i;return c<0||c>=r?-1:u[t+c]-1}let o=t,s=o+r-1;for(;o<=s;){const c=o+s>>>1,a=u[c];if(a<n)o=c+1;else if(a>n)s=c-1;else return u[c+r]}return-1}const m0=on(i0);on(o0);function sn(u,e=Du.Legacy){return m0(u,e)}function _0(u){return Object.prototype.toString.call(u)}function Ze(u){return _0(u)==="[object String]"}const x0=Object.prototype.hasOwnProperty;function g0(u,e){return x0.call(u,e)}function de(u){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(n){u[n]=t[n]})}}),u}function cn(u,e,t){return[].concat(u.slice(0,e),t,u.slice(e+1))}function Je(u){return!(u>=55296&&u<=57343||u>=64976&&u<=65007||(u&65535)===65535||(u&65535)===65534||u>=0&&u<=8||u===11||u>=14&&u<=31||u>=127&&u<=159||u>1114111)}function ae(u){if(u>65535){u-=65536;const e=55296+(u>>10),t=56320+(u&1023);return String.fromCharCode(e,t)}return String.fromCharCode(u)}const an=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,y0=/&([a-z#][a-z0-9]{1,31});/gi,k0=new RegExp(an.source+"|"+y0.source,"gi"),E0=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function w0(u,e){if(e.charCodeAt(0)===35&&E0.test(e)){const n=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10);return Je(n)?ae(n):u}const t=sn(u);return t!==u?t:u}function C0(u){return u.indexOf("\\")<0?u:u.replace(an,"$1")}function Uu(u){return u.indexOf("\\")<0&&u.indexOf("&")<0?u:u.replace(k0,function(e,t,n){return t||w0(e,n)})}const D0=/[&<>"]/,A0=/[&<>"]/g,F0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function v0(u){return F0[u]}function Fu(u){return D0.test(u)?u.replace(A0,v0):u}const R0=/[.?*+^$[\]\\(){}|-]/g;function S0(u){return u.replace(R0,"\\$&")}function U(u){switch(u){case 9:case 32:return!0}return!1}function Hu(u){if(u>=8192&&u<=8202)return!0;switch(u){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Gu(u){return We.test(u)}function Vu(u){switch(u){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function he(u){return u=u.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(u=u.replace(/ẞ/g,"ß")),u.toLowerCase().toUpperCase()}const T0={mdurl:e0,ucmicro:r0},B0=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:cn,assign:de,escapeHtml:Fu,escapeRE:S0,fromCodePoint:ae,has:g0,isMdAsciiPunct:Vu,isPunctChar:Gu,isSpace:U,isString:Ze,isValidEntityCode:Je,isWhiteSpace:Hu,lib:T0,normalizeReference:he,unescapeAll:Uu,unescapeMd:C0},Symbol.toStringTag,{value:"Module"}));function O0(u,e,t){let n,r,i,o;const s=u.posMax,c=u.pos;for(u.pos=e+1,n=1;u.pos<s;){if(i=u.src.charCodeAt(u.pos),i===93&&(n--,n===0)){r=!0;break}if(o=u.pos,u.md.inline.skipToken(u),i===91){if(o===u.pos-1)n++;else if(t)return u.pos=c,-1}}let a=-1;return r&&(a=u.pos),u.pos=c,a}function L0(u,e,t){let n,r=e;const i={ok:!1,pos:0,lines:0,str:""};if(u.charCodeAt(r)===60){for(r++;r<t;){if(n=u.charCodeAt(r),n===10||n===60)return i;if(n===62)return i.pos=r+1,i.str=Uu(u.slice(e+1,r)),i.ok=!0,i;if(n===92&&r+1<t){r+=2;continue}r++}return i}let o=0;for(;r<t&&(n=u.charCodeAt(r),!(n===32||n<32||n===127));){if(n===92&&r+1<t){if(u.charCodeAt(r+1)===32)break;r+=2;continue}if(n===40&&(o++,o>32))return i;if(n===41){if(o===0)break;o--}r++}return e===r||o!==0||(i.str=Uu(u.slice(e,r)),i.pos=r,i.ok=!0),i}function N0(u,e,t){let n,r,i=0,o=e;const s={ok:!1,pos:0,lines:0,str:""};if(o>=t||(r=u.charCodeAt(o),r!==34&&r!==39&&r!==40))return s;for(o++,r===40&&(r=41);o<t;){if(n=u.charCodeAt(o),n===r)return s.pos=o+1,s.lines=i,s.str=Uu(u.slice(e+1,o)),s.ok=!0,s;if(n===40&&r===41)return s;n===10?i++:n===92&&o+1<t&&(o++,u.charCodeAt(o)===10&&i++),o++}return s}const I0=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:L0,parseLinkLabel:O0,parseLinkTitle:N0},Symbol.toStringTag,{value:"Module"})),mu={};mu.code_inline=function(u,e,t,n,r){const i=u[e];return"<code"+r.renderAttrs(i)+">"+Fu(i.content)+"</code>"};mu.code_block=function(u,e,t,n,r){const i=u[e];return"<pre"+r.renderAttrs(i)+"><code>"+Fu(u[e].content)+`</code></pre>
`};mu.fence=function(u,e,t,n,r){const i=u[e],o=i.info?Uu(i.info).trim():"";let s="",c="";if(o){const d=o.split(/(\s+)/g);s=d[0],c=d.slice(2).join("")}let a;if(t.highlight?a=t.highlight(i.content,s,c)||Fu(i.content):a=Fu(i.content),a.indexOf("<pre")===0)return a+`
`;if(o){const d=i.attrIndex("class"),l=i.attrs?i.attrs.slice():[];d<0?l.push(["class",t.langPrefix+s]):(l[d]=l[d].slice(),l[d][1]+=" "+t.langPrefix+s);const x={attrs:l};return`<pre><code${r.renderAttrs(x)}>${a}</code></pre>
`}return`<pre><code${r.renderAttrs(i)}>${a}</code></pre>
`};mu.image=function(u,e,t,n,r){const i=u[e];return i.attrs[i.attrIndex("alt")][1]=r.renderInlineAsText(i.children,t,n),r.renderToken(u,e,t)};mu.hardbreak=function(u,e,t){return t.xhtmlOut?`<br />
`:`<br>
`};mu.softbreak=function(u,e,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};mu.text=function(u,e){return Fu(u[e].content)};mu.html_block=function(u,e){return u[e].content};mu.html_inline=function(u,e){return u[e].content};function Mu(){this.rules=de({},mu)}Mu.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return"";for(r="",t=0,n=e.attrs.length;t<n;t++)r+=" "+Fu(e.attrs[t][0])+'="'+Fu(e.attrs[t][1])+'"';return r};Mu.prototype.renderToken=function(e,t,n){const r=e[t];let i="";if(r.hidden)return"";r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?"</":"<")+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=" /");let o=!1;if(r.block&&(o=!0,r.nesting===1&&t+1<e.length)){const s=e[t+1];(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===r.tag)&&(o=!1)}return i+=o?`>
`:">",i};Mu.prototype.renderInline=function(u,e,t){let n="";const r=this.rules;for(let i=0,o=u.length;i<o;i++){const s=u[i].type;typeof r[s]<"u"?n+=r[s](u,i,e,t,this):n+=this.renderToken(u,i,e)}return n};Mu.prototype.renderInlineAsText=function(u,e,t){let n="";for(let r=0,i=u.length;r<i;r++)switch(u[r].type){case"text":n+=u[r].content;break;case"image":n+=this.renderInlineAsText(u[r].children,e,t);break;case"html_inline":case"html_block":n+=u[r].content;break;case"softbreak":case"hardbreak":n+=`
`;break}return n};Mu.prototype.render=function(u,e,t){let n="";const r=this.rules;for(let i=0,o=u.length;i<o;i++){const s=u[i].type;s==="inline"?n+=this.renderInline(u[i].children,e,t):typeof r[s]<"u"?n+=r[s](u,i,e,t,this):n+=this.renderToken(u,i,e,t)}return n};function eu(){this.__rules__=[],this.__cache__=null}eu.prototype.__find__=function(u){for(let e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===u)return e;return-1};eu.prototype.__compile__=function(){const u=this,e=[""];u.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(n){e.indexOf(n)<0&&e.push(n)})}),u.__cache__={},e.forEach(function(t){u.__cache__[t]=[],u.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||u.__cache__[t].push(n.fn))})})};eu.prototype.at=function(u,e,t){const n=this.__find__(u),r=t||{};if(n===-1)throw new Error("Parser rule not found: "+u);this.__rules__[n].fn=e,this.__rules__[n].alt=r.alt||[],this.__cache__=null};eu.prototype.before=function(u,e,t,n){const r=this.__find__(u),i=n||{};if(r===-1)throw new Error("Parser rule not found: "+u);this.__rules__.splice(r,0,{name:e,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};eu.prototype.after=function(u,e,t,n){const r=this.__find__(u),i=n||{};if(r===-1)throw new Error("Parser rule not found: "+u);this.__rules__.splice(r+1,0,{name:e,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};eu.prototype.push=function(u,e,t){const n=t||{};this.__rules__.push({name:u,enabled:!0,fn:e,alt:n.alt||[]}),this.__cache__=null};eu.prototype.enable=function(u,e){Array.isArray(u)||(u=[u]);const t=[];return u.forEach(function(n){const r=this.__find__(n);if(r<0){if(e)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[r].enabled=!0,t.push(n)},this),this.__cache__=null,t};eu.prototype.enableOnly=function(u,e){Array.isArray(u)||(u=[u]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(u,e)};eu.prototype.disable=function(u,e){Array.isArray(u)||(u=[u]);const t=[];return u.forEach(function(n){const r=this.__find__(n);if(r<0){if(e)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[r].enabled=!1,t.push(n)},this),this.__cache__=null,t};eu.prototype.getRules=function(u){return this.__cache__===null&&this.__compile__(),this.__cache__[u]||[]};function su(u,e,t){this.type=u,this.tag=e,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}su.prototype.attrIndex=function(e){if(!this.attrs)return-1;const t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1};su.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};su.prototype.attrSet=function(e,t){const n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r};su.prototype.attrGet=function(e){const t=this.attrIndex(e);let n=null;return t>=0&&(n=this.attrs[t][1]),n};su.prototype.attrJoin=function(e,t){const n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+" "+t};function ln(u,e,t){this.src=u,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=e}ln.prototype.Token=su;const P0=/\r\n?|\n/g,M0=/\0/g;function z0(u){let e;e=u.src.replace(P0,`
`),e=e.replace(M0,"�"),u.src=e}function $0(u){let e;u.inlineMode?(e=new u.Token("inline","",0),e.content=u.src,e.map=[0,1],e.children=[],u.tokens.push(e)):u.md.block.parse(u.src,u.md,u.env,u.tokens)}function q0(u){const e=u.tokens;for(let t=0,n=e.length;t<n;t++){const r=e[t];r.type==="inline"&&u.md.inline.parse(r.content,u.md,u.env,r.children)}}function j0(u){return/^<a[>\s]/i.test(u)}function U0(u){return/^<\/a\s*>/i.test(u)}function H0(u){const e=u.tokens;if(u.md.options.linkify)for(let t=0,n=e.length;t<n;t++){if(e[t].type!=="inline"||!u.md.linkify.pretest(e[t].content))continue;let r=e[t].children,i=0;for(let o=r.length-1;o>=0;o--){const s=r[o];if(s.type==="link_close"){for(o--;r[o].level!==s.level&&r[o].type!=="link_open";)o--;continue}if(s.type==="html_inline"&&(j0(s.content)&&i>0&&i--,U0(s.content)&&i++),!(i>0)&&s.type==="text"&&u.md.linkify.test(s.content)){const c=s.content;let a=u.md.linkify.match(c);const d=[];let l=s.level,x=0;a.length>0&&a[0].index===0&&o>0&&r[o-1].type==="text_special"&&(a=a.slice(1));for(let _=0;_<a.length;_++){const h=a[_].url,w=u.md.normalizeLink(h);if(!u.md.validateLink(w))continue;let R=a[_].text;a[_].schema?a[_].schema==="mailto:"&&!/^mailto:/i.test(R)?R=u.md.normalizeLinkText("mailto:"+R).replace(/^mailto:/,""):R=u.md.normalizeLinkText(R):R=u.md.normalizeLinkText("http://"+R).replace(/^http:\/\//,"");const B=a[_].index;if(B>x){const v=new u.Token("text","",0);v.content=c.slice(x,B),v.level=l,d.push(v)}const O=new u.Token("link_open","a",1);O.attrs=[["href",w]],O.level=l++,O.markup="linkify",O.info="auto",d.push(O);const F=new u.Token("text","",0);F.content=R,F.level=l,d.push(F);const T=new u.Token("link_close","a",-1);T.level=--l,T.markup="linkify",T.info="auto",d.push(T),x=a[_].lastIndex}if(x<c.length){const _=new u.Token("text","",0);_.content=c.slice(x),_.level=l,d.push(_)}e[t].children=r=cn(r,o,d)}}}}const fn=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,G0=/\((c|tm|r)\)/i,V0=/\((c|tm|r)\)/ig,W0={c:"©",r:"®",tm:"™"};function Z0(u,e){return W0[e.toLowerCase()]}function J0(u){let e=0;for(let t=u.length-1;t>=0;t--){const n=u[t];n.type==="text"&&!e&&(n.content=n.content.replace(V0,Z0)),n.type==="link_open"&&n.info==="auto"&&e--,n.type==="link_close"&&n.info==="auto"&&e++}}function K0(u){let e=0;for(let t=u.length-1;t>=0;t--){const n=u[t];n.type==="text"&&!e&&fn.test(n.content)&&(n.content=n.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),n.type==="link_open"&&n.info==="auto"&&e--,n.type==="link_close"&&n.info==="auto"&&e++}}function X0(u){let e;if(u.md.options.typographer)for(e=u.tokens.length-1;e>=0;e--)u.tokens[e].type==="inline"&&(G0.test(u.tokens[e].content)&&J0(u.tokens[e].children),fn.test(u.tokens[e].content)&&K0(u.tokens[e].children))}const Q0=/['"]/,yt=/['"]/g,kt="’";function te(u,e,t){return u.slice(0,e)+t+u.slice(e+1)}function Y0(u,e){let t;const n=[];for(let r=0;r<u.length;r++){const i=u[r],o=u[r].level;for(t=n.length-1;t>=0&&!(n[t].level<=o);t--);if(n.length=t+1,i.type!=="text")continue;let s=i.content,c=0,a=s.length;u:for(;c<a;){yt.lastIndex=c;const d=yt.exec(s);if(!d)break;let l=!0,x=!0;c=d.index+1;const _=d[0]==="'";let h=32;if(d.index-1>=0)h=s.charCodeAt(d.index-1);else for(t=r-1;t>=0&&!(u[t].type==="softbreak"||u[t].type==="hardbreak");t--)if(u[t].content){h=u[t].content.charCodeAt(u[t].content.length-1);break}let w=32;if(c<a)w=s.charCodeAt(c);else for(t=r+1;t<u.length&&!(u[t].type==="softbreak"||u[t].type==="hardbreak");t++)if(u[t].content){w=u[t].content.charCodeAt(0);break}const R=Vu(h)||Gu(String.fromCharCode(h)),B=Vu(w)||Gu(String.fromCharCode(w)),O=Hu(h),F=Hu(w);if(F?l=!1:B&&(O||R||(l=!1)),O?x=!1:R&&(F||B||(x=!1)),w===34&&d[0]==='"'&&h>=48&&h<=57&&(x=l=!1),l&&x&&(l=R,x=B),!l&&!x){_&&(i.content=te(i.content,d.index,kt));continue}if(x)for(t=n.length-1;t>=0;t--){let T=n[t];if(n[t].level<o)break;if(T.single===_&&n[t].level===o){T=n[t];let v,M;_?(v=e.md.options.quotes[2],M=e.md.options.quotes[3]):(v=e.md.options.quotes[0],M=e.md.options.quotes[1]),i.content=te(i.content,d.index,M),u[T.token].content=te(u[T.token].content,T.pos,v),c+=M.length-1,T.token===r&&(c+=v.length-1),s=i.content,a=s.length,n.length=t;continue u}}l?n.push({token:r,pos:d.index,single:_,level:o}):x&&_&&(i.content=te(i.content,d.index,kt))}}}function ui(u){if(u.md.options.typographer)for(let e=u.tokens.length-1;e>=0;e--)u.tokens[e].type!=="inline"||!Q0.test(u.tokens[e].content)||Y0(u.tokens[e].children,u)}function ei(u){let e,t;const n=u.tokens,r=n.length;for(let i=0;i<r;i++){if(n[i].type!=="inline")continue;const o=n[i].children,s=o.length;for(e=0;e<s;e++)o[e].type==="text_special"&&(o[e].type="text");for(e=t=0;e<s;e++)o[e].type==="text"&&e+1<s&&o[e+1].type==="text"?o[e+1].content=o[e].content+o[e+1].content:(e!==t&&(o[t]=o[e]),t++);e!==t&&(o.length=t)}}const we=[["normalize",z0],["block",$0],["inline",q0],["linkify",H0],["replacements",X0],["smartquotes",ui],["text_join",ei]];function Ke(){this.ruler=new eu;for(let u=0;u<we.length;u++)this.ruler.push(we[u][0],we[u][1])}Ke.prototype.process=function(u){const e=this.ruler.getRules("");for(let t=0,n=e.length;t<n;t++)e[t](u)};Ke.prototype.State=ln;function _u(u,e,t,n){this.src=u,this.md=e,this.env=t,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const r=this.src;for(let i=0,o=0,s=0,c=0,a=r.length,d=!1;o<a;o++){const l=r.charCodeAt(o);if(!d)if(U(l)){s++,l===9?c+=4-c%4:c++;continue}else d=!0;(l===10||o===a-1)&&(l!==10&&o++,this.bMarks.push(i),this.eMarks.push(o),this.tShift.push(s),this.sCount.push(c),this.bsCount.push(0),d=!1,s=0,c=0,i=o+1)}this.bMarks.push(r.length),this.eMarks.push(r.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}_u.prototype.push=function(u,e,t){const n=new su(u,e,t);return n.block=!0,t<0&&this.level--,n.level=this.level,t>0&&this.level++,this.tokens.push(n),n};_u.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};_u.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};_u.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t;e++){const n=this.src.charCodeAt(e);if(!U(n))break}return e};_u.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!U(this.src.charCodeAt(--e)))return e+1;return e};_u.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e};_u.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e};_u.prototype.getLines=function(e,t,n,r){if(e>=t)return"";const i=new Array(t-e);for(let o=0,s=e;s<t;s++,o++){let c=0;const a=this.bMarks[s];let d=a,l;for(s+1<t||r?l=this.eMarks[s]+1:l=this.eMarks[s];d<l&&c<n;){const x=this.src.charCodeAt(d);if(U(x))x===9?c+=4-(c+this.bsCount[s])%4:c++;else if(d-a<this.tShift[s])c++;else break;d++}c>n?i[o]=new Array(c-n+1).join(" ")+this.src.slice(d,l):i[o]=this.src.slice(d,l)}return i.join("")};_u.prototype.Token=su;function Ce(u,e){const t=u.bMarks[e]+u.tShift[e],n=u.eMarks[e];return u.src.slice(t,n)}function Et(u){const e=[],t=u.length;let n=0,r=u.charCodeAt(n),i=!1,o=0,s="";for(;n<t;)r===124&&(i?(s+=u.substring(o,n-1),o=n):(e.push(s+u.substring(o,n)),s="",o=n+1)),i=r===92,n++,r=u.charCodeAt(n);return e.push(s+u.substring(o)),e}function ti(u,e,t,n){if(e+2>t)return!1;let r=e+1;if(u.sCount[r]<u.blkIndent||u.sCount[r]-u.blkIndent>=4)return!1;let i=u.bMarks[r]+u.tShift[r];if(i>=u.eMarks[r])return!1;const o=u.src.charCodeAt(i++);if(o!==124&&o!==45&&o!==58||i>=u.eMarks[r])return!1;const s=u.src.charCodeAt(i++);if(s!==124&&s!==45&&s!==58&&!U(s)||o===45&&U(s))return!1;for(;i<u.eMarks[r];){const F=u.src.charCodeAt(i);if(F!==124&&F!==45&&F!==58&&!U(F))return!1;i++}let c=Ce(u,e+1),a=c.split("|");const d=[];for(let F=0;F<a.length;F++){const T=a[F].trim();if(!T){if(F===0||F===a.length-1)continue;return!1}if(!/^:?-+:?$/.test(T))return!1;T.charCodeAt(T.length-1)===58?d.push(T.charCodeAt(0)===58?"center":"right"):T.charCodeAt(0)===58?d.push("left"):d.push("")}if(c=Ce(u,e).trim(),c.indexOf("|")===-1||u.sCount[e]-u.blkIndent>=4)return!1;a=Et(c),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop();const l=a.length;if(l===0||l!==d.length)return!1;if(n)return!0;const x=u.parentType;u.parentType="table";const _=u.md.block.ruler.getRules("blockquote"),h=u.push("table_open","table",1),w=[e,0];h.map=w;const R=u.push("thead_open","thead",1);R.map=[e,e+1];const B=u.push("tr_open","tr",1);B.map=[e,e+1];for(let F=0;F<a.length;F++){const T=u.push("th_open","th",1);d[F]&&(T.attrs=[["style","text-align:"+d[F]]]);const v=u.push("inline","",0);v.content=a[F].trim(),v.children=[],u.push("th_close","th",-1)}u.push("tr_close","tr",-1),u.push("thead_close","thead",-1);let O;for(r=e+2;r<t&&!(u.sCount[r]<u.blkIndent);r++){let F=!1;for(let v=0,M=_.length;v<M;v++)if(_[v](u,r,t,!0)){F=!0;break}if(F||(c=Ce(u,r).trim(),!c)||u.sCount[r]-u.blkIndent>=4)break;if(a=Et(c),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop(),r===e+2){const v=u.push("tbody_open","tbody",1);v.map=O=[e+2,0]}const T=u.push("tr_open","tr",1);T.map=[r,r+1];for(let v=0;v<l;v++){const M=u.push("td_open","td",1);d[v]&&(M.attrs=[["style","text-align:"+d[v]]]);const V=u.push("inline","",0);V.content=a[v]?a[v].trim():"",V.children=[],u.push("td_close","td",-1)}u.push("tr_close","tr",-1)}return O&&(u.push("tbody_close","tbody",-1),O[1]=r),u.push("table_close","table",-1),w[1]=r,u.parentType=x,u.line=r,!0}function ni(u,e,t){if(u.sCount[e]-u.blkIndent<4)return!1;let n=e+1,r=n;for(;n<t;){if(u.isEmpty(n)){n++;continue}if(u.sCount[n]-u.blkIndent>=4){n++,r=n;continue}break}u.line=r;const i=u.push("code_block","code",0);return i.content=u.getLines(e,r,4+u.blkIndent,!1)+`
`,i.map=[e,u.line],!0}function ri(u,e,t,n){let r=u.bMarks[e]+u.tShift[e],i=u.eMarks[e];if(u.sCount[e]-u.blkIndent>=4||r+3>i)return!1;const o=u.src.charCodeAt(r);if(o!==126&&o!==96)return!1;let s=r;r=u.skipChars(r,o);let c=r-s;if(c<3)return!1;const a=u.src.slice(s,r),d=u.src.slice(r,i);if(o===96&&d.indexOf(String.fromCharCode(o))>=0)return!1;if(n)return!0;let l=e,x=!1;for(;l++,!(l>=t||(r=s=u.bMarks[l]+u.tShift[l],i=u.eMarks[l],r<i&&u.sCount[l]<u.blkIndent));)if(u.src.charCodeAt(r)===o&&!(u.sCount[l]-u.blkIndent>=4)&&(r=u.skipChars(r,o),!(r-s<c)&&(r=u.skipSpaces(r),!(r<i)))){x=!0;break}c=u.sCount[e],u.line=l+(x?1:0);const _=u.push("fence","code",0);return _.info=d,_.content=u.getLines(e+1,l,c,!0),_.markup=a,_.map=[e,u.line],!0}function ii(u,e,t,n){let r=u.bMarks[e]+u.tShift[e],i=u.eMarks[e];const o=u.lineMax;if(u.sCount[e]-u.blkIndent>=4||u.src.charCodeAt(r)!==62)return!1;if(n)return!0;const s=[],c=[],a=[],d=[],l=u.md.block.ruler.getRules("blockquote"),x=u.parentType;u.parentType="blockquote";let _=!1,h;for(h=e;h<t;h++){const F=u.sCount[h]<u.blkIndent;if(r=u.bMarks[h]+u.tShift[h],i=u.eMarks[h],r>=i)break;if(u.src.charCodeAt(r++)===62&&!F){let v=u.sCount[h]+1,M,V;u.src.charCodeAt(r)===32?(r++,v++,V=!1,M=!0):u.src.charCodeAt(r)===9?(M=!0,(u.bsCount[h]+v)%4===3?(r++,v++,V=!1):V=!0):M=!1;let cu=v;for(s.push(u.bMarks[h]),u.bMarks[h]=r;r<i;){const au=u.src.charCodeAt(r);if(U(au))au===9?cu+=4-(cu+u.bsCount[h]+(V?1:0))%4:cu++;else break;r++}_=r>=i,c.push(u.bsCount[h]),u.bsCount[h]=u.sCount[h]+1+(M?1:0),a.push(u.sCount[h]),u.sCount[h]=cu-v,d.push(u.tShift[h]),u.tShift[h]=r-u.bMarks[h];continue}if(_)break;let T=!1;for(let v=0,M=l.length;v<M;v++)if(l[v](u,h,t,!0)){T=!0;break}if(T){u.lineMax=h,u.blkIndent!==0&&(s.push(u.bMarks[h]),c.push(u.bsCount[h]),d.push(u.tShift[h]),a.push(u.sCount[h]),u.sCount[h]-=u.blkIndent);break}s.push(u.bMarks[h]),c.push(u.bsCount[h]),d.push(u.tShift[h]),a.push(u.sCount[h]),u.sCount[h]=-1}const w=u.blkIndent;u.blkIndent=0;const R=u.push("blockquote_open","blockquote",1);R.markup=">";const B=[e,0];R.map=B,u.md.block.tokenize(u,e,h);const O=u.push("blockquote_close","blockquote",-1);O.markup=">",u.lineMax=o,u.parentType=x,B[1]=u.line;for(let F=0;F<d.length;F++)u.bMarks[F+e]=s[F],u.tShift[F+e]=d[F],u.sCount[F+e]=a[F],u.bsCount[F+e]=c[F];return u.blkIndent=w,!0}function oi(u,e,t,n){const r=u.eMarks[e];if(u.sCount[e]-u.blkIndent>=4)return!1;let i=u.bMarks[e]+u.tShift[e];const o=u.src.charCodeAt(i++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;i<r;){const a=u.src.charCodeAt(i++);if(a!==o&&!U(a))return!1;a===o&&s++}if(s<3)return!1;if(n)return!0;u.line=e+1;const c=u.push("hr","hr",0);return c.map=[e,u.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function wt(u,e){const t=u.eMarks[e];let n=u.bMarks[e]+u.tShift[e];const r=u.src.charCodeAt(n++);if(r!==42&&r!==45&&r!==43)return-1;if(n<t){const i=u.src.charCodeAt(n);if(!U(i))return-1}return n}function Ct(u,e){const t=u.bMarks[e]+u.tShift[e],n=u.eMarks[e];let r=t;if(r+1>=n)return-1;let i=u.src.charCodeAt(r++);if(i<48||i>57)return-1;for(;;){if(r>=n)return-1;if(i=u.src.charCodeAt(r++),i>=48&&i<=57){if(r-t>=10)return-1;continue}if(i===41||i===46)break;return-1}return r<n&&(i=u.src.charCodeAt(r),!U(i))?-1:r}function si(u,e){const t=u.level+2;for(let n=e+2,r=u.tokens.length-2;n<r;n++)u.tokens[n].level===t&&u.tokens[n].type==="paragraph_open"&&(u.tokens[n+2].hidden=!0,u.tokens[n].hidden=!0,n+=2)}function ci(u,e,t,n){let r,i,o,s,c=e,a=!0;if(u.sCount[c]-u.blkIndent>=4||u.listIndent>=0&&u.sCount[c]-u.listIndent>=4&&u.sCount[c]<u.blkIndent)return!1;let d=!1;n&&u.parentType==="paragraph"&&u.sCount[c]>=u.blkIndent&&(d=!0);let l,x,_;if((_=Ct(u,c))>=0){if(l=!0,o=u.bMarks[c]+u.tShift[c],x=Number(u.src.slice(o,_-1)),d&&x!==1)return!1}else if((_=wt(u,c))>=0)l=!1;else return!1;if(d&&u.skipSpaces(_)>=u.eMarks[c])return!1;if(n)return!0;const h=u.src.charCodeAt(_-1),w=u.tokens.length;l?(s=u.push("ordered_list_open","ol",1),x!==1&&(s.attrs=[["start",x]])):s=u.push("bullet_list_open","ul",1);const R=[c,0];s.map=R,s.markup=String.fromCharCode(h);let B=!1;const O=u.md.block.ruler.getRules("list"),F=u.parentType;for(u.parentType="list";c<t;){i=_,r=u.eMarks[c];const T=u.sCount[c]+_-(u.bMarks[c]+u.tShift[c]);let v=T;for(;i<r;){const N=u.src.charCodeAt(i);if(N===9)v+=4-(v+u.bsCount[c])%4;else if(N===32)v++;else break;i++}const M=i;let V;M>=r?V=1:V=v-T,V>4&&(V=1);const cu=T+V;s=u.push("list_item_open","li",1),s.markup=String.fromCharCode(h);const au=[c,0];s.map=au,l&&(s.info=u.src.slice(o,_-1));const Tu=u.tight,$u=u.tShift[c],Eu=u.sCount[c],L=u.listIndent;if(u.listIndent=u.blkIndent,u.blkIndent=cu,u.tight=!0,u.tShift[c]=M-u.bMarks[c],u.sCount[c]=v,M>=r&&u.isEmpty(c+1)?u.line=Math.min(u.line+2,t):u.md.block.tokenize(u,c,t,!0),(!u.tight||B)&&(a=!1),B=u.line-c>1&&u.isEmpty(u.line-1),u.blkIndent=u.listIndent,u.listIndent=L,u.tShift[c]=$u,u.sCount[c]=Eu,u.tight=Tu,s=u.push("list_item_close","li",-1),s.markup=String.fromCharCode(h),c=u.line,au[1]=c,c>=t||u.sCount[c]<u.blkIndent||u.sCount[c]-u.blkIndent>=4)break;let P=!1;for(let N=0,vu=O.length;N<vu;N++)if(O[N](u,c,t,!0)){P=!0;break}if(P)break;if(l){if(_=Ct(u,c),_<0)break;o=u.bMarks[c]+u.tShift[c]}else if(_=wt(u,c),_<0)break;if(h!==u.src.charCodeAt(_-1))break}return l?s=u.push("ordered_list_close","ol",-1):s=u.push("bullet_list_close","ul",-1),s.markup=String.fromCharCode(h),R[1]=c,u.line=c,u.parentType=F,a&&si(u,w),!0}function ai(u,e,t,n){let r=0,i=u.bMarks[e]+u.tShift[e],o=u.eMarks[e],s=e+1;if(u.sCount[e]-u.blkIndent>=4||u.src.charCodeAt(i)!==91)return!1;for(;++i<o;)if(u.src.charCodeAt(i)===93&&u.src.charCodeAt(i-1)!==92){if(i+1===o||u.src.charCodeAt(i+1)!==58)return!1;break}const c=u.lineMax,a=u.md.block.ruler.getRules("reference"),d=u.parentType;for(u.parentType="reference";s<c&&!u.isEmpty(s);s++){if(u.sCount[s]-u.blkIndent>3||u.sCount[s]<0)continue;let v=!1;for(let M=0,V=a.length;M<V;M++)if(a[M](u,s,c,!0)){v=!0;break}if(v)break}const l=u.getLines(e,s,u.blkIndent,!1).trim();o=l.length;let x=-1;for(i=1;i<o;i++){const v=l.charCodeAt(i);if(v===91)return!1;if(v===93){x=i;break}else v===10?r++:v===92&&(i++,i<o&&l.charCodeAt(i)===10&&r++)}if(x<0||l.charCodeAt(x+1)!==58)return!1;for(i=x+2;i<o;i++){const v=l.charCodeAt(i);if(v===10)r++;else if(!U(v))break}const _=u.md.helpers.parseLinkDestination(l,i,o);if(!_.ok)return!1;const h=u.md.normalizeLink(_.str);if(!u.md.validateLink(h))return!1;i=_.pos,r+=_.lines;const w=i,R=r,B=i;for(;i<o;i++){const v=l.charCodeAt(i);if(v===10)r++;else if(!U(v))break}const O=u.md.helpers.parseLinkTitle(l,i,o);let F;for(i<o&&B!==i&&O.ok?(F=O.str,i=O.pos,r+=O.lines):(F="",i=w,r=R);i<o;){const v=l.charCodeAt(i);if(!U(v))break;i++}if(i<o&&l.charCodeAt(i)!==10&&F)for(F="",i=w,r=R;i<o;){const v=l.charCodeAt(i);if(!U(v))break;i++}if(i<o&&l.charCodeAt(i)!==10)return!1;const T=he(l.slice(1,x));return T?(n||(typeof u.env.references>"u"&&(u.env.references={}),typeof u.env.references[T]>"u"&&(u.env.references[T]={title:F,href:h}),u.parentType=d,u.line=e+r+1),!0):!1}const li=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],fi="[a-zA-Z_:][a-zA-Z0-9:._-]*",di="[^\"'=<>`\\x00-\\x20]+",hi="'[^']*'",pi='"[^"]*"',bi="(?:"+di+"|"+hi+"|"+pi+")",mi="(?:\\s+"+fi+"(?:\\s*=\\s*"+bi+")?)",dn="<[A-Za-z][A-Za-z0-9\\-]*"+mi+"*\\s*\\/?>",hn="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",_i="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",xi="<[?][\\s\\S]*?[?]>",gi="<![A-Z]+\\s+[^>]*>",yi="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",ki=new RegExp("^(?:"+dn+"|"+hn+"|"+_i+"|"+xi+"|"+gi+"|"+yi+")"),Ei=new RegExp("^(?:"+dn+"|"+hn+")"),Lu=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+li.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(Ei.source+"\\s*$"),/^$/,!1]];function wi(u,e,t,n){let r=u.bMarks[e]+u.tShift[e],i=u.eMarks[e];if(u.sCount[e]-u.blkIndent>=4||!u.md.options.html||u.src.charCodeAt(r)!==60)return!1;let o=u.src.slice(r,i),s=0;for(;s<Lu.length&&!Lu[s][0].test(o);s++);if(s===Lu.length)return!1;if(n)return Lu[s][2];let c=e+1;if(!Lu[s][1].test(o)){for(;c<t&&!(u.sCount[c]<u.blkIndent);c++)if(r=u.bMarks[c]+u.tShift[c],i=u.eMarks[c],o=u.src.slice(r,i),Lu[s][1].test(o)){o.length!==0&&c++;break}}u.line=c;const a=u.push("html_block","",0);return a.map=[e,c],a.content=u.getLines(e,c,u.blkIndent,!0),!0}function Ci(u,e,t,n){let r=u.bMarks[e]+u.tShift[e],i=u.eMarks[e];if(u.sCount[e]-u.blkIndent>=4)return!1;let o=u.src.charCodeAt(r);if(o!==35||r>=i)return!1;let s=1;for(o=u.src.charCodeAt(++r);o===35&&r<i&&s<=6;)s++,o=u.src.charCodeAt(++r);if(s>6||r<i&&!U(o))return!1;if(n)return!0;i=u.skipSpacesBack(i,r);const c=u.skipCharsBack(i,35,r);c>r&&U(u.src.charCodeAt(c-1))&&(i=c),u.line=e+1;const a=u.push("heading_open","h"+String(s),1);a.markup="########".slice(0,s),a.map=[e,u.line];const d=u.push("inline","",0);d.content=u.src.slice(r,i).trim(),d.map=[e,u.line],d.children=[];const l=u.push("heading_close","h"+String(s),-1);return l.markup="########".slice(0,s),!0}function Di(u,e,t){const n=u.md.block.ruler.getRules("paragraph");if(u.sCount[e]-u.blkIndent>=4)return!1;const r=u.parentType;u.parentType="paragraph";let i=0,o,s=e+1;for(;s<t&&!u.isEmpty(s);s++){if(u.sCount[s]-u.blkIndent>3)continue;if(u.sCount[s]>=u.blkIndent){let _=u.bMarks[s]+u.tShift[s];const h=u.eMarks[s];if(_<h&&(o=u.src.charCodeAt(_),(o===45||o===61)&&(_=u.skipChars(_,o),_=u.skipSpaces(_),_>=h))){i=o===61?1:2;break}}if(u.sCount[s]<0)continue;let x=!1;for(let _=0,h=n.length;_<h;_++)if(n[_](u,s,t,!0)){x=!0;break}if(x)break}if(!i)return!1;const c=u.getLines(e,s,u.blkIndent,!1).trim();u.line=s+1;const a=u.push("heading_open","h"+String(i),1);a.markup=String.fromCharCode(o),a.map=[e,u.line];const d=u.push("inline","",0);d.content=c,d.map=[e,u.line-1],d.children=[];const l=u.push("heading_close","h"+String(i),-1);return l.markup=String.fromCharCode(o),u.parentType=r,!0}function Ai(u,e,t){const n=u.md.block.ruler.getRules("paragraph"),r=u.parentType;let i=e+1;for(u.parentType="paragraph";i<t&&!u.isEmpty(i);i++){if(u.sCount[i]-u.blkIndent>3||u.sCount[i]<0)continue;let a=!1;for(let d=0,l=n.length;d<l;d++)if(n[d](u,i,t,!0)){a=!0;break}if(a)break}const o=u.getLines(e,i,u.blkIndent,!1).trim();u.line=i;const s=u.push("paragraph_open","p",1);s.map=[e,u.line];const c=u.push("inline","",0);return c.content=o,c.map=[e,u.line],c.children=[],u.push("paragraph_close","p",-1),u.parentType=r,!0}const ne=[["table",ti,["paragraph","reference"]],["code",ni],["fence",ri,["paragraph","reference","blockquote","list"]],["blockquote",ii,["paragraph","reference","blockquote","list"]],["hr",oi,["paragraph","reference","blockquote","list"]],["list",ci,["paragraph","reference","blockquote"]],["reference",ai],["html_block",wi,["paragraph","reference","blockquote"]],["heading",Ci,["paragraph","reference","blockquote"]],["lheading",Di],["paragraph",Ai]];function pe(){this.ruler=new eu;for(let u=0;u<ne.length;u++)this.ruler.push(ne[u][0],ne[u][1],{alt:(ne[u][2]||[]).slice()})}pe.prototype.tokenize=function(u,e,t){const n=this.ruler.getRules(""),r=n.length,i=u.md.options.maxNesting;let o=e,s=!1;for(;o<t&&(u.line=o=u.skipEmptyLines(o),!(o>=t||u.sCount[o]<u.blkIndent));){if(u.level>=i){u.line=t;break}const c=u.line;let a=!1;for(let d=0;d<r;d++)if(a=n[d](u,o,t,!1),a){if(c>=u.line)throw new Error("block rule didn't increment state.line");break}if(!a)throw new Error("none of the block rules matched");u.tight=!s,u.isEmpty(u.line-1)&&(s=!0),o=u.line,o<t&&u.isEmpty(o)&&(s=!0,o++,u.line=o)}};pe.prototype.parse=function(u,e,t,n){if(!u)return;const r=new this.State(u,e,t,n);this.tokenize(r,r.line,r.lineMax)};pe.prototype.State=_u;function Ku(u,e,t,n){this.src=u,this.env=t,this.md=e,this.tokens=n,this.tokens_meta=Array(n.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Ku.prototype.pushPending=function(){const u=new su("text","",0);return u.content=this.pending,u.level=this.pendingLevel,this.tokens.push(u),this.pending="",u};Ku.prototype.push=function(u,e,t){this.pending&&this.pushPending();const n=new su(u,e,t);let r=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),n.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],r={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(n),this.tokens_meta.push(r),n};Ku.prototype.scanDelims=function(u,e){let t,n,r=!0,i=!0;const o=this.posMax,s=this.src.charCodeAt(u),c=u>0?this.src.charCodeAt(u-1):32;let a=u;for(;a<o&&this.src.charCodeAt(a)===s;)a++;const d=a-u,l=a<o?this.src.charCodeAt(a):32,x=Vu(c)||Gu(String.fromCharCode(c)),_=Vu(l)||Gu(String.fromCharCode(l)),h=Hu(c),w=Hu(l);return w?r=!1:_&&(h||x||(r=!1)),h?i=!1:x&&(w||_||(i=!1)),e?(t=r,n=i):(t=r&&(!i||x),n=i&&(!r||_)),{can_open:t,can_close:n,length:d}};Ku.prototype.Token=su;function Fi(u){switch(u){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function vi(u,e){let t=u.pos;for(;t<u.posMax&&!Fi(u.src.charCodeAt(t));)t++;return t===u.pos?!1:(e||(u.pending+=u.src.slice(u.pos,t)),u.pos=t,!0)}const Ri=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function Si(u,e){if(!u.md.options.linkify||u.linkLevel>0)return!1;const t=u.pos,n=u.posMax;if(t+3>n||u.src.charCodeAt(t)!==58||u.src.charCodeAt(t+1)!==47||u.src.charCodeAt(t+2)!==47)return!1;const r=u.pending.match(Ri);if(!r)return!1;const i=r[1],o=u.md.linkify.matchAtStart(u.src.slice(t-i.length));if(!o)return!1;let s=o.url;if(s.length<=i.length)return!1;s=s.replace(/\*+$/,"");const c=u.md.normalizeLink(s);if(!u.md.validateLink(c))return!1;if(!e){u.pending=u.pending.slice(0,-i.length);const a=u.push("link_open","a",1);a.attrs=[["href",c]],a.markup="linkify",a.info="auto";const d=u.push("text","",0);d.content=u.md.normalizeLinkText(s);const l=u.push("link_close","a",-1);l.markup="linkify",l.info="auto"}return u.pos+=s.length-i.length,!0}function Ti(u,e){let t=u.pos;if(u.src.charCodeAt(t)!==10)return!1;const n=u.pending.length-1,r=u.posMax;if(!e)if(n>=0&&u.pending.charCodeAt(n)===32)if(n>=1&&u.pending.charCodeAt(n-1)===32){let i=n-1;for(;i>=1&&u.pending.charCodeAt(i-1)===32;)i--;u.pending=u.pending.slice(0,i),u.push("hardbreak","br",0)}else u.pending=u.pending.slice(0,-1),u.push("softbreak","br",0);else u.push("softbreak","br",0);for(t++;t<r&&U(u.src.charCodeAt(t));)t++;return u.pos=t,!0}const Xe=[];for(let u=0;u<256;u++)Xe.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(u){Xe[u.charCodeAt(0)]=1});function Bi(u,e){let t=u.pos;const n=u.posMax;if(u.src.charCodeAt(t)!==92||(t++,t>=n))return!1;let r=u.src.charCodeAt(t);if(r===10){for(e||u.push("hardbreak","br",0),t++;t<n&&(r=u.src.charCodeAt(t),!!U(r));)t++;return u.pos=t,!0}let i=u.src[t];if(r>=55296&&r<=56319&&t+1<n){const s=u.src.charCodeAt(t+1);s>=56320&&s<=57343&&(i+=u.src[t+1],t++)}const o="\\"+i;if(!e){const s=u.push("text_special","",0);r<256&&Xe[r]!==0?s.content=i:s.content=o,s.markup=o,s.info="escape"}return u.pos=t+1,!0}function Oi(u,e){let t=u.pos;if(u.src.charCodeAt(t)!==96)return!1;const r=t;t++;const i=u.posMax;for(;t<i&&u.src.charCodeAt(t)===96;)t++;const o=u.src.slice(r,t),s=o.length;if(u.backticksScanned&&(u.backticks[s]||0)<=r)return e||(u.pending+=o),u.pos+=s,!0;let c=t,a;for(;(a=u.src.indexOf("`",c))!==-1;){for(c=a+1;c<i&&u.src.charCodeAt(c)===96;)c++;const d=c-a;if(d===s){if(!e){const l=u.push("code_inline","code",0);l.markup=o,l.content=u.src.slice(t,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return u.pos=c,!0}u.backticks[d]=a}return u.backticksScanned=!0,e||(u.pending+=o),u.pos+=s,!0}function Li(u,e){const t=u.pos,n=u.src.charCodeAt(t);if(e||n!==126)return!1;const r=u.scanDelims(u.pos,!0);let i=r.length;const o=String.fromCharCode(n);if(i<2)return!1;let s;i%2&&(s=u.push("text","",0),s.content=o,i--);for(let c=0;c<i;c+=2)s=u.push("text","",0),s.content=o+o,u.delimiters.push({marker:n,length:0,token:u.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return u.pos+=r.length,!0}function Dt(u,e){let t;const n=[],r=e.length;for(let i=0;i<r;i++){const o=e[i];if(o.marker!==126||o.end===-1)continue;const s=e[o.end];t=u.tokens[o.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=u.tokens[s.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",u.tokens[s.token-1].type==="text"&&u.tokens[s.token-1].content==="~"&&n.push(s.token-1)}for(;n.length;){const i=n.pop();let o=i+1;for(;o<u.tokens.length&&u.tokens[o].type==="s_close";)o++;o--,i!==o&&(t=u.tokens[o],u.tokens[o]=u.tokens[i],u.tokens[i]=t)}}function Ni(u){const e=u.tokens_meta,t=u.tokens_meta.length;Dt(u,u.delimiters);for(let n=0;n<t;n++)e[n]&&e[n].delimiters&&Dt(u,e[n].delimiters)}const pn={tokenize:Li,postProcess:Ni};function Ii(u,e){const t=u.pos,n=u.src.charCodeAt(t);if(e||n!==95&&n!==42)return!1;const r=u.scanDelims(u.pos,n===42);for(let i=0;i<r.length;i++){const o=u.push("text","",0);o.content=String.fromCharCode(n),u.delimiters.push({marker:n,length:r.length,token:u.tokens.length-1,end:-1,open:r.can_open,close:r.can_close})}return u.pos+=r.length,!0}function At(u,e){const t=e.length;for(let n=t-1;n>=0;n--){const r=e[n];if(r.marker!==95&&r.marker!==42||r.end===-1)continue;const i=e[r.end],o=n>0&&e[n-1].end===r.end+1&&e[n-1].marker===r.marker&&e[n-1].token===r.token-1&&e[r.end+1].token===i.token+1,s=String.fromCharCode(r.marker),c=u.tokens[r.token];c.type=o?"strong_open":"em_open",c.tag=o?"strong":"em",c.nesting=1,c.markup=o?s+s:s,c.content="";const a=u.tokens[i.token];a.type=o?"strong_close":"em_close",a.tag=o?"strong":"em",a.nesting=-1,a.markup=o?s+s:s,a.content="",o&&(u.tokens[e[n-1].token].content="",u.tokens[e[r.end+1].token].content="",n--)}}function Pi(u){const e=u.tokens_meta,t=u.tokens_meta.length;At(u,u.delimiters);for(let n=0;n<t;n++)e[n]&&e[n].delimiters&&At(u,e[n].delimiters)}const bn={tokenize:Ii,postProcess:Pi};function Mi(u,e){let t,n,r,i,o="",s="",c=u.pos,a=!0;if(u.src.charCodeAt(u.pos)!==91)return!1;const d=u.pos,l=u.posMax,x=u.pos+1,_=u.md.helpers.parseLinkLabel(u,u.pos,!0);if(_<0)return!1;let h=_+1;if(h<l&&u.src.charCodeAt(h)===40){for(a=!1,h++;h<l&&(t=u.src.charCodeAt(h),!(!U(t)&&t!==10));h++);if(h>=l)return!1;if(c=h,r=u.md.helpers.parseLinkDestination(u.src,h,u.posMax),r.ok){for(o=u.md.normalizeLink(r.str),u.md.validateLink(o)?h=r.pos:o="",c=h;h<l&&(t=u.src.charCodeAt(h),!(!U(t)&&t!==10));h++);if(r=u.md.helpers.parseLinkTitle(u.src,h,u.posMax),h<l&&c!==h&&r.ok)for(s=r.str,h=r.pos;h<l&&(t=u.src.charCodeAt(h),!(!U(t)&&t!==10));h++);}(h>=l||u.src.charCodeAt(h)!==41)&&(a=!0),h++}if(a){if(typeof u.env.references>"u")return!1;if(h<l&&u.src.charCodeAt(h)===91?(c=h+1,h=u.md.helpers.parseLinkLabel(u,h),h>=0?n=u.src.slice(c,h++):h=_+1):h=_+1,n||(n=u.src.slice(x,_)),i=u.env.references[he(n)],!i)return u.pos=d,!1;o=i.href,s=i.title}if(!e){u.pos=x,u.posMax=_;const w=u.push("link_open","a",1),R=[["href",o]];w.attrs=R,s&&R.push(["title",s]),u.linkLevel++,u.md.inline.tokenize(u),u.linkLevel--,u.push("link_close","a",-1)}return u.pos=h,u.posMax=l,!0}function zi(u,e){let t,n,r,i,o,s,c,a,d="";const l=u.pos,x=u.posMax;if(u.src.charCodeAt(u.pos)!==33||u.src.charCodeAt(u.pos+1)!==91)return!1;const _=u.pos+2,h=u.md.helpers.parseLinkLabel(u,u.pos+1,!1);if(h<0)return!1;if(i=h+1,i<x&&u.src.charCodeAt(i)===40){for(i++;i<x&&(t=u.src.charCodeAt(i),!(!U(t)&&t!==10));i++);if(i>=x)return!1;for(a=i,s=u.md.helpers.parseLinkDestination(u.src,i,u.posMax),s.ok&&(d=u.md.normalizeLink(s.str),u.md.validateLink(d)?i=s.pos:d=""),a=i;i<x&&(t=u.src.charCodeAt(i),!(!U(t)&&t!==10));i++);if(s=u.md.helpers.parseLinkTitle(u.src,i,u.posMax),i<x&&a!==i&&s.ok)for(c=s.str,i=s.pos;i<x&&(t=u.src.charCodeAt(i),!(!U(t)&&t!==10));i++);else c="";if(i>=x||u.src.charCodeAt(i)!==41)return u.pos=l,!1;i++}else{if(typeof u.env.references>"u")return!1;if(i<x&&u.src.charCodeAt(i)===91?(a=i+1,i=u.md.helpers.parseLinkLabel(u,i),i>=0?r=u.src.slice(a,i++):i=h+1):i=h+1,r||(r=u.src.slice(_,h)),o=u.env.references[he(r)],!o)return u.pos=l,!1;d=o.href,c=o.title}if(!e){n=u.src.slice(_,h);const w=[];u.md.inline.parse(n,u.md,u.env,w);const R=u.push("image","img",0),B=[["src",d],["alt",""]];R.attrs=B,R.children=w,R.content=n,c&&B.push(["title",c])}return u.pos=i,u.posMax=x,!0}const $i=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,qi=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function ji(u,e){let t=u.pos;if(u.src.charCodeAt(t)!==60)return!1;const n=u.pos,r=u.posMax;for(;;){if(++t>=r)return!1;const o=u.src.charCodeAt(t);if(o===60)return!1;if(o===62)break}const i=u.src.slice(n+1,t);if(qi.test(i)){const o=u.md.normalizeLink(i);if(!u.md.validateLink(o))return!1;if(!e){const s=u.push("link_open","a",1);s.attrs=[["href",o]],s.markup="autolink",s.info="auto";const c=u.push("text","",0);c.content=u.md.normalizeLinkText(i);const a=u.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return u.pos+=i.length+2,!0}if($i.test(i)){const o=u.md.normalizeLink("mailto:"+i);if(!u.md.validateLink(o))return!1;if(!e){const s=u.push("link_open","a",1);s.attrs=[["href",o]],s.markup="autolink",s.info="auto";const c=u.push("text","",0);c.content=u.md.normalizeLinkText(i);const a=u.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return u.pos+=i.length+2,!0}return!1}function Ui(u){return/^<a[>\s]/i.test(u)}function Hi(u){return/^<\/a\s*>/i.test(u)}function Gi(u){const e=u|32;return e>=97&&e<=122}function Vi(u,e){if(!u.md.options.html)return!1;const t=u.posMax,n=u.pos;if(u.src.charCodeAt(n)!==60||n+2>=t)return!1;const r=u.src.charCodeAt(n+1);if(r!==33&&r!==63&&r!==47&&!Gi(r))return!1;const i=u.src.slice(n).match(ki);if(!i)return!1;if(!e){const o=u.push("html_inline","",0);o.content=i[0],Ui(o.content)&&u.linkLevel++,Hi(o.content)&&u.linkLevel--}return u.pos+=i[0].length,!0}const Wi=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Zi=/^&([a-z][a-z0-9]{1,31});/i;function Ji(u,e){const t=u.pos,n=u.posMax;if(u.src.charCodeAt(t)!==38||t+1>=n)return!1;if(u.src.charCodeAt(t+1)===35){const i=u.src.slice(t).match(Wi);if(i){if(!e){const o=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),s=u.push("text_special","",0);s.content=Je(o)?ae(o):ae(65533),s.markup=i[0],s.info="entity"}return u.pos+=i[0].length,!0}}else{const i=u.src.slice(t).match(Zi);if(i){const o=sn(i[0]);if(o!==i[0]){if(!e){const s=u.push("text_special","",0);s.content=o,s.markup=i[0],s.info="entity"}return u.pos+=i[0].length,!0}}}return!1}function Ft(u){const e={},t=u.length;if(!t)return;let n=0,r=-2;const i=[];for(let o=0;o<t;o++){const s=u[o];if(i.push(0),(u[n].marker!==s.marker||r!==s.token-1)&&(n=o),r=s.token,s.length=s.length||0,!s.close)continue;e.hasOwnProperty(s.marker)||(e[s.marker]=[-1,-1,-1,-1,-1,-1]);const c=e[s.marker][(s.open?3:0)+s.length%3];let a=n-i[n]-1,d=a;for(;a>c;a-=i[a]+1){const l=u[a];if(l.marker===s.marker&&l.open&&l.end<0){let x=!1;if((l.close||s.open)&&(l.length+s.length)%3===0&&(l.length%3!==0||s.length%3!==0)&&(x=!0),!x){const _=a>0&&!u[a-1].open?i[a-1]+1:0;i[o]=o-a+_,i[a]=_,s.open=!1,l.end=o,l.close=!1,d=-1,r=-2;break}}}d!==-1&&(e[s.marker][(s.open?3:0)+(s.length||0)%3]=d)}}function Ki(u){const e=u.tokens_meta,t=u.tokens_meta.length;Ft(u.delimiters);for(let n=0;n<t;n++)e[n]&&e[n].delimiters&&Ft(e[n].delimiters)}function Xi(u){let e,t,n=0;const r=u.tokens,i=u.tokens.length;for(e=t=0;e<i;e++)r[e].nesting<0&&n--,r[e].level=n,r[e].nesting>0&&n++,r[e].type==="text"&&e+1<i&&r[e+1].type==="text"?r[e+1].content=r[e].content+r[e+1].content:(e!==t&&(r[t]=r[e]),t++);e!==t&&(r.length=t)}const De=[["text",vi],["linkify",Si],["newline",Ti],["escape",Bi],["backticks",Oi],["strikethrough",pn.tokenize],["emphasis",bn.tokenize],["link",Mi],["image",zi],["autolink",ji],["html_inline",Vi],["entity",Ji]],Ae=[["balance_pairs",Ki],["strikethrough",pn.postProcess],["emphasis",bn.postProcess],["fragments_join",Xi]];function Xu(){this.ruler=new eu;for(let u=0;u<De.length;u++)this.ruler.push(De[u][0],De[u][1]);this.ruler2=new eu;for(let u=0;u<Ae.length;u++)this.ruler2.push(Ae[u][0],Ae[u][1])}Xu.prototype.skipToken=function(u){const e=u.pos,t=this.ruler.getRules(""),n=t.length,r=u.md.options.maxNesting,i=u.cache;if(typeof i[e]<"u"){u.pos=i[e];return}let o=!1;if(u.level<r){for(let s=0;s<n;s++)if(u.level++,o=t[s](u,!0),u.level--,o){if(e>=u.pos)throw new Error("inline rule didn't increment state.pos");break}}else u.pos=u.posMax;o||u.pos++,i[e]=u.pos};Xu.prototype.tokenize=function(u){const e=this.ruler.getRules(""),t=e.length,n=u.posMax,r=u.md.options.maxNesting;for(;u.pos<n;){const i=u.pos;let o=!1;if(u.level<r){for(let s=0;s<t;s++)if(o=e[s](u,!1),o){if(i>=u.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(u.pos>=n)break;continue}u.pending+=u.src[u.pos++]}u.pending&&u.pushPending()};Xu.prototype.parse=function(u,e,t,n){const r=new this.State(u,e,t,n);this.tokenize(r);const i=this.ruler2.getRules(""),o=i.length;for(let s=0;s<o;s++)i[s](r)};Xu.prototype.State=Ku;function Qi(u){const e={};u=u||{},e.src_Any=tn.source,e.src_Cc=nn.source,e.src_Z=rn.source,e.src_P=We.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");const t="[><｜]";return e.src_pseudo_letter="(?:(?!"+t+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+t+"|"+e.src_ZPCc+")(?!"+(u["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(u["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}function Ie(u){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){u[n]=t[n]})}),u}function be(u){return Object.prototype.toString.call(u)}function Yi(u){return be(u)==="[object String]"}function uo(u){return be(u)==="[object Object]"}function eo(u){return be(u)==="[object RegExp]"}function vt(u){return be(u)==="[object Function]"}function to(u){return u.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const mn={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function no(u){return Object.keys(u||{}).reduce(function(e,t){return e||mn.hasOwnProperty(t)},!1)}const ro={"http:":{validate:function(u,e,t){const n=u.slice(e);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(n)?n.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(u,e,t){const n=u.slice(e);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(n)?e>=3&&u[e-3]===":"||e>=3&&u[e-3]==="/"?0:n.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(u,e,t){const n=u.slice(e);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(n)?n.match(t.re.mailto)[0].length:0}}},io="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",oo="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function so(u){u.__index__=-1,u.__text_cache__=""}function co(u){return function(e,t){const n=e.slice(t);return u.test(n)?n.match(u)[0].length:0}}function Rt(){return function(u,e){e.normalize(u)}}function le(u){const e=u.re=Qi(u.__opts__),t=u.__tlds__.slice();u.onCompile(),u.__tlds_replaced__||t.push(io),t.push(e.src_xn),e.src_tlds=t.join("|");function n(s){return s.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(n(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(n(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(n(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(n(e.tpl_host_fuzzy_test),"i");const r=[];u.__compiled__={};function i(s,c){throw new Error('(LinkifyIt) Invalid schema "'+s+'": '+c)}Object.keys(u.__schemas__).forEach(function(s){const c=u.__schemas__[s];if(c===null)return;const a={validate:null,link:null};if(u.__compiled__[s]=a,uo(c)){eo(c.validate)?a.validate=co(c.validate):vt(c.validate)?a.validate=c.validate:i(s,c),vt(c.normalize)?a.normalize=c.normalize:c.normalize?i(s,c):a.normalize=Rt();return}if(Yi(c)){r.push(s);return}i(s,c)}),r.forEach(function(s){u.__compiled__[u.__schemas__[s]]&&(u.__compiled__[s].validate=u.__compiled__[u.__schemas__[s]].validate,u.__compiled__[s].normalize=u.__compiled__[u.__schemas__[s]].normalize)}),u.__compiled__[""]={validate:null,normalize:Rt()};const o=Object.keys(u.__compiled__).filter(function(s){return s.length>0&&u.__compiled__[s]}).map(to).join("|");u.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+o+")","i"),u.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+o+")","ig"),u.re.schema_at_start=RegExp("^"+u.re.schema_search.source,"i"),u.re.pretest=RegExp("("+u.re.schema_test.source+")|("+u.re.host_fuzzy_test.source+")|@","i"),so(u)}function ao(u,e){const t=u.__index__,n=u.__last_index__,r=u.__text_cache__.slice(t,n);this.schema=u.__schema__.toLowerCase(),this.index=t+e,this.lastIndex=n+e,this.raw=r,this.text=r,this.url=r}function Pe(u,e){const t=new ao(u,e);return u.__compiled__[t.schema].normalize(t,u),t}function ru(u,e){if(!(this instanceof ru))return new ru(u,e);e||no(u)&&(e=u,u={}),this.__opts__=Ie({},mn,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Ie({},ro,u),this.__compiled__={},this.__tlds__=oo,this.__tlds_replaced__=!1,this.re={},le(this)}ru.prototype.add=function(e,t){return this.__schemas__[e]=t,le(this),this};ru.prototype.set=function(e){return this.__opts__=Ie(this.__opts__,e),this};ru.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let t,n,r,i,o,s,c,a,d;if(this.re.schema_test.test(e)){for(c=this.re.schema_search,c.lastIndex=0;(t=c.exec(e))!==null;)if(i=this.testSchemaAt(e,t[2],c.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(a=e.search(this.re.host_fuzzy_test),a>=0&&(this.__index__<0||a<this.__index__)&&(n=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=n.index+n[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=n.index+n[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(d=e.indexOf("@"),d>=0&&(r=e.match(this.re.email_fuzzy))!==null&&(o=r.index+r[1].length,s=r.index+r[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&s>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=s))),this.__index__>=0};ru.prototype.pretest=function(e){return this.re.pretest.test(e)};ru.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0};ru.prototype.match=function(e){const t=[];let n=0;this.__index__>=0&&this.__text_cache__===e&&(t.push(Pe(this,n)),n=this.__last_index__);let r=n?e.slice(n):e;for(;this.test(r);)t.push(Pe(this,n)),r=r.slice(this.__last_index__),n+=this.__last_index__;return t.length?t:null};ru.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;const t=this.re.schema_at_start.exec(e);if(!t)return null;const n=this.testSchemaAt(e,t[2],t[0].length);return n?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+n,Pe(this,0)):null};ru.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(n,r,i){return n!==i[r-1]}).reverse(),le(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,le(this),this)};ru.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};ru.prototype.onCompile=function(){};const Nu=2147483647,hu=36,Qe=1,Wu=26,lo=38,fo=700,_n=72,xn=128,gn="-",ho=/^xn--/,po=/[^\0-\x7F]/,bo=/[\x2E\u3002\uFF0E\uFF61]/g,mo={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Fe=hu-Qe,pu=Math.floor,ve=String.fromCharCode;function Cu(u){throw new RangeError(mo[u])}function _o(u,e){const t=[];let n=u.length;for(;n--;)t[n]=e(u[n]);return t}function yn(u,e){const t=u.split("@");let n="";t.length>1&&(n=t[0]+"@",u=t[1]),u=u.replace(bo,".");const r=u.split("."),i=_o(r,e).join(".");return n+i}function kn(u){const e=[];let t=0;const n=u.length;for(;t<n;){const r=u.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){const i=u.charCodeAt(t++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}const xo=u=>String.fromCodePoint(...u),go=function(u){return u>=48&&u<58?26+(u-48):u>=65&&u<91?u-65:u>=97&&u<123?u-97:hu},St=function(u,e){return u+22+75*(u<26)-((e!=0)<<5)},En=function(u,e,t){let n=0;for(u=t?pu(u/fo):u>>1,u+=pu(u/e);u>Fe*Wu>>1;n+=hu)u=pu(u/Fe);return pu(n+(Fe+1)*u/(u+lo))},wn=function(u){const e=[],t=u.length;let n=0,r=xn,i=_n,o=u.lastIndexOf(gn);o<0&&(o=0);for(let s=0;s<o;++s)u.charCodeAt(s)>=128&&Cu("not-basic"),e.push(u.charCodeAt(s));for(let s=o>0?o+1:0;s<t;){const c=n;for(let d=1,l=hu;;l+=hu){s>=t&&Cu("invalid-input");const x=go(u.charCodeAt(s++));x>=hu&&Cu("invalid-input"),x>pu((Nu-n)/d)&&Cu("overflow"),n+=x*d;const _=l<=i?Qe:l>=i+Wu?Wu:l-i;if(x<_)break;const h=hu-_;d>pu(Nu/h)&&Cu("overflow"),d*=h}const a=e.length+1;i=En(n-c,a,c==0),pu(n/a)>Nu-r&&Cu("overflow"),r+=pu(n/a),n%=a,e.splice(n++,0,r)}return String.fromCodePoint(...e)},Cn=function(u){const e=[];u=kn(u);const t=u.length;let n=xn,r=0,i=_n;for(const c of u)c<128&&e.push(ve(c));const o=e.length;let s=o;for(o&&e.push(gn);s<t;){let c=Nu;for(const d of u)d>=n&&d<c&&(c=d);const a=s+1;c-n>pu((Nu-r)/a)&&Cu("overflow"),r+=(c-n)*a,n=c;for(const d of u)if(d<n&&++r>Nu&&Cu("overflow"),d===n){let l=r;for(let x=hu;;x+=hu){const _=x<=i?Qe:x>=i+Wu?Wu:x-i;if(l<_)break;const h=l-_,w=hu-_;e.push(ve(St(_+h%w,0))),l=pu(h/w)}e.push(ve(St(l,0))),i=En(r,a,s===o),r=0,++s}++r,++n}return e.join("")},yo=function(u){return yn(u,function(e){return ho.test(e)?wn(e.slice(4).toLowerCase()):e})},ko=function(u){return yn(u,function(e){return po.test(e)?"xn--"+Cn(e):e})},Dn={version:"2.3.1",ucs2:{decode:kn,encode:xo},decode:wn,encode:Cn,toASCII:ko,toUnicode:yo},Eo={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},wo={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},Co={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},Do={default:Eo,zero:wo,commonmark:Co},Ao=/^(vbscript|javascript|file|data):/,Fo=/^data:image\/(gif|png|jpeg|webp);/;function vo(u){const e=u.trim().toLowerCase();return Ao.test(e)?Fo.test(e):!0}const An=["http:","https:","mailto:"];function Ro(u){const e=Ve(u,!0);if(e.hostname&&(!e.protocol||An.indexOf(e.protocol)>=0))try{e.hostname=Dn.toASCII(e.hostname)}catch{}return Ju(Ge(e))}function So(u){const e=Ve(u,!0);if(e.hostname&&(!e.protocol||An.indexOf(e.protocol)>=0))try{e.hostname=Dn.toUnicode(e.hostname)}catch{}return Iu(Ge(e),Iu.defaultChars+"%")}function ou(u,e){if(!(this instanceof ou))return new ou(u,e);e||Ze(u)||(e=u||{},u="default"),this.inline=new Xu,this.block=new pe,this.core=new Ke,this.renderer=new Mu,this.linkify=new ru,this.validateLink=vo,this.normalizeLink=Ro,this.normalizeLinkText=So,this.utils=B0,this.helpers=de({},I0),this.options={},this.configure(u),e&&this.set(e)}ou.prototype.set=function(u){return de(this.options,u),this};ou.prototype.configure=function(u){const e=this;if(Ze(u)){const t=u;if(u=Do[t],!u)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!u)throw new Error("Wrong `markdown-it` preset, can't be empty");return u.options&&e.set(u.options),u.components&&Object.keys(u.components).forEach(function(t){u.components[t].rules&&e[t].ruler.enableOnly(u.components[t].rules),u.components[t].rules2&&e[t].ruler2.enableOnly(u.components[t].rules2)}),this};ou.prototype.enable=function(u,e){let t=[];Array.isArray(u)||(u=[u]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.enable(u,!0))},this),t=t.concat(this.inline.ruler2.enable(u,!0));const n=u.filter(function(r){return t.indexOf(r)<0});if(n.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this};ou.prototype.disable=function(u,e){let t=[];Array.isArray(u)||(u=[u]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.disable(u,!0))},this),t=t.concat(this.inline.ruler2.disable(u,!0));const n=u.filter(function(r){return t.indexOf(r)<0});if(n.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this};ou.prototype.use=function(u){const e=[this].concat(Array.prototype.slice.call(arguments,1));return u.apply(u,e),this};ou.prototype.parse=function(u,e){if(typeof u!="string")throw new Error("Input data should be a String");const t=new this.core.State(u,this,e);return this.core.process(t),t.tokens};ou.prototype.render=function(u,e){return e=e||{},this.renderer.render(this.parse(u,e),this.options,e)};ou.prototype.parseInline=function(u,e){const t=new this.core.State(u,this,e);return t.inlineMode=!0,this.core.process(t),t.tokens};ou.prototype.renderInline=function(u,e){return e=e||{},this.renderer.render(this.parseInline(u,e),this.options,e)};function Fn(u,e){return function(){return u.apply(e,arguments)}}const{toString:To}=Object.prototype,{getPrototypeOf:Ye}=Object,me=(u=>e=>{const t=To.call(e);return u[t]||(u[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),xu=u=>(u=u.toLowerCase(),e=>me(e)===u),_e=u=>e=>typeof e===u,{isArray:zu}=Array,Zu=_e("undefined");function Bo(u){return u!==null&&!Zu(u)&&u.constructor!==null&&!Zu(u.constructor)&&iu(u.constructor.isBuffer)&&u.constructor.isBuffer(u)}const vn=xu("ArrayBuffer");function Oo(u){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(u):e=u&&u.buffer&&vn(u.buffer),e}const Lo=_e("string"),iu=_e("function"),Rn=_e("number"),xe=u=>u!==null&&typeof u=="object",No=u=>u===!0||u===!1,ie=u=>{if(me(u)!=="object")return!1;const e=Ye(u);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in u)&&!(Symbol.iterator in u)},Io=xu("Date"),Po=xu("File"),Mo=xu("Blob"),zo=xu("FileList"),$o=u=>xe(u)&&iu(u.pipe),qo=u=>{let e;return u&&(typeof FormData=="function"&&u instanceof FormData||iu(u.append)&&((e=me(u))==="formdata"||e==="object"&&iu(u.toString)&&u.toString()==="[object FormData]"))},jo=xu("URLSearchParams"),Uo=u=>u.trim?u.trim():u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Qu(u,e,{allOwnKeys:t=!1}={}){if(u===null||typeof u>"u")return;let n,r;if(typeof u!="object"&&(u=[u]),zu(u))for(n=0,r=u.length;n<r;n++)e.call(null,u[n],n,u);else{const i=t?Object.getOwnPropertyNames(u):Object.keys(u),o=i.length;let s;for(n=0;n<o;n++)s=i[n],e.call(null,u[s],s,u)}}function Sn(u,e){e=e.toLowerCase();const t=Object.keys(u);let n=t.length,r;for(;n-- >0;)if(r=t[n],e===r.toLowerCase())return r;return null}const Tn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Bn=u=>!Zu(u)&&u!==Tn;function Me(){const{caseless:u}=Bn(this)&&this||{},e={},t=(n,r)=>{const i=u&&Sn(e,r)||r;ie(e[i])&&ie(n)?e[i]=Me(e[i],n):ie(n)?e[i]=Me({},n):zu(n)?e[i]=n.slice():e[i]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&Qu(arguments[n],t);return e}const Ho=(u,e,t,{allOwnKeys:n}={})=>(Qu(e,(r,i)=>{t&&iu(r)?u[i]=Fn(r,t):u[i]=r},{allOwnKeys:n}),u),Go=u=>(u.charCodeAt(0)===65279&&(u=u.slice(1)),u),Vo=(u,e,t,n)=>{u.prototype=Object.create(e.prototype,n),u.prototype.constructor=u,Object.defineProperty(u,"super",{value:e.prototype}),t&&Object.assign(u.prototype,t)},Wo=(u,e,t,n)=>{let r,i,o;const s={};if(e=e||{},u==null)return e;do{for(r=Object.getOwnPropertyNames(u),i=r.length;i-- >0;)o=r[i],(!n||n(o,u,e))&&!s[o]&&(e[o]=u[o],s[o]=!0);u=t!==!1&&Ye(u)}while(u&&(!t||t(u,e))&&u!==Object.prototype);return e},Zo=(u,e,t)=>{u=String(u),(t===void 0||t>u.length)&&(t=u.length),t-=e.length;const n=u.indexOf(e,t);return n!==-1&&n===t},Jo=u=>{if(!u)return null;if(zu(u))return u;let e=u.length;if(!Rn(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=u[e];return t},Ko=(u=>e=>u&&e instanceof u)(typeof Uint8Array<"u"&&Ye(Uint8Array)),Xo=(u,e)=>{const n=(u&&u[Symbol.iterator]).call(u);let r;for(;(r=n.next())&&!r.done;){const i=r.value;e.call(u,i[0],i[1])}},Qo=(u,e)=>{let t;const n=[];for(;(t=u.exec(e))!==null;)n.push(t);return n},Yo=xu("HTMLFormElement"),us=u=>u.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,n,r){return n.toUpperCase()+r}),Tt=(({hasOwnProperty:u})=>(e,t)=>u.call(e,t))(Object.prototype),es=xu("RegExp"),On=(u,e)=>{const t=Object.getOwnPropertyDescriptors(u),n={};Qu(t,(r,i)=>{let o;(o=e(r,i,u))!==!1&&(n[i]=o||r)}),Object.defineProperties(u,n)},ts=u=>{On(u,(e,t)=>{if(iu(u)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const n=u[t];if(iu(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},ns=(u,e)=>{const t={},n=r=>{r.forEach(i=>{t[i]=!0})};return zu(u)?n(u):n(String(u).split(e)),t},rs=()=>{},is=(u,e)=>(u=+u,Number.isFinite(u)?u:e),Re="abcdefghijklmnopqrstuvwxyz",Bt="0123456789",Ln={DIGIT:Bt,ALPHA:Re,ALPHA_DIGIT:Re+Re.toUpperCase()+Bt},os=(u=16,e=Ln.ALPHA_DIGIT)=>{let t="";const{length:n}=e;for(;u--;)t+=e[Math.random()*n|0];return t};function ss(u){return!!(u&&iu(u.append)&&u[Symbol.toStringTag]==="FormData"&&u[Symbol.iterator])}const cs=u=>{const e=new Array(10),t=(n,r)=>{if(xe(n)){if(e.indexOf(n)>=0)return;if(!("toJSON"in n)){e[r]=n;const i=zu(n)?[]:{};return Qu(n,(o,s)=>{const c=t(o,r+1);!Zu(c)&&(i[s]=c)}),e[r]=void 0,i}}return n};return t(u,0)},as=xu("AsyncFunction"),ls=u=>u&&(xe(u)||iu(u))&&iu(u.then)&&iu(u.catch),E={isArray:zu,isArrayBuffer:vn,isBuffer:Bo,isFormData:qo,isArrayBufferView:Oo,isString:Lo,isNumber:Rn,isBoolean:No,isObject:xe,isPlainObject:ie,isUndefined:Zu,isDate:Io,isFile:Po,isBlob:Mo,isRegExp:es,isFunction:iu,isStream:$o,isURLSearchParams:jo,isTypedArray:Ko,isFileList:zo,forEach:Qu,merge:Me,extend:Ho,trim:Uo,stripBOM:Go,inherits:Vo,toFlatObject:Wo,kindOf:me,kindOfTest:xu,endsWith:Zo,toArray:Jo,forEachEntry:Xo,matchAll:Qo,isHTMLForm:Yo,hasOwnProperty:Tt,hasOwnProp:Tt,reduceDescriptors:On,freezeMethods:ts,toObjectSet:ns,toCamelCase:us,noop:rs,toFiniteNumber:is,findKey:Sn,global:Tn,isContextDefined:Bn,ALPHABET:Ln,generateString:os,isSpecCompliantForm:ss,toJSONObject:cs,isAsyncFn:as,isThenable:ls};function I(u,e,t,n,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=u,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),n&&(this.request=n),r&&(this.response=r)}E.inherits(I,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Nn=I.prototype,In={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(u=>{In[u]={value:u}});Object.defineProperties(I,In);Object.defineProperty(Nn,"isAxiosError",{value:!0});I.from=(u,e,t,n,r,i)=>{const o=Object.create(Nn);return E.toFlatObject(u,o,function(c){return c!==Error.prototype},s=>s!=="isAxiosError"),I.call(o,u.message,e,t,n,r),o.cause=u,o.name=u.name,i&&Object.assign(o,i),o};const fs=null;function ze(u){return E.isPlainObject(u)||E.isArray(u)}function Pn(u){return E.endsWith(u,"[]")?u.slice(0,-2):u}function Ot(u,e,t){return u?u.concat(e).map(function(r,i){return r=Pn(r),!t&&i?"["+r+"]":r}).join(t?".":""):e}function ds(u){return E.isArray(u)&&!u.some(ze)}const hs=E.toFlatObject(E,{},null,function(e){return/^is[A-Z]/.test(e)});function ge(u,e,t){if(!E.isObject(u))throw new TypeError("target must be an object");e=e||new FormData,t=E.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,R){return!E.isUndefined(R[w])});const n=t.metaTokens,r=t.visitor||d,i=t.dots,o=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(e);if(!E.isFunction(r))throw new TypeError("visitor must be a function");function a(h){if(h===null)return"";if(E.isDate(h))return h.toISOString();if(!c&&E.isBlob(h))throw new I("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(h)||E.isTypedArray(h)?c&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function d(h,w,R){let B=h;if(h&&!R&&typeof h=="object"){if(E.endsWith(w,"{}"))w=n?w:w.slice(0,-2),h=JSON.stringify(h);else if(E.isArray(h)&&ds(h)||(E.isFileList(h)||E.endsWith(w,"[]"))&&(B=E.toArray(h)))return w=Pn(w),B.forEach(function(F,T){!(E.isUndefined(F)||F===null)&&e.append(o===!0?Ot([w],T,i):o===null?w:w+"[]",a(F))}),!1}return ze(h)?!0:(e.append(Ot(R,w,i),a(h)),!1)}const l=[],x=Object.assign(hs,{defaultVisitor:d,convertValue:a,isVisitable:ze});function _(h,w){if(!E.isUndefined(h)){if(l.indexOf(h)!==-1)throw Error("Circular reference detected in "+w.join("."));l.push(h),E.forEach(h,function(B,O){(!(E.isUndefined(B)||B===null)&&r.call(e,B,E.isString(O)?O.trim():O,w,x))===!0&&_(B,w?w.concat(O):[O])}),l.pop()}}if(!E.isObject(u))throw new TypeError("data must be an object");return _(u),e}function Lt(u){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(u).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function ut(u,e){this._pairs=[],u&&ge(u,this,e)}const Mn=ut.prototype;Mn.append=function(e,t){this._pairs.push([e,t])};Mn.toString=function(e){const t=e?function(n){return e.call(this,n,Lt)}:Lt;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function ps(u){return encodeURIComponent(u).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function zn(u,e,t){if(!e)return u;const n=t&&t.encode||ps,r=t&&t.serialize;let i;if(r?i=r(e,t):i=E.isURLSearchParams(e)?e.toString():new ut(e,t).toString(n),i){const o=u.indexOf("#");o!==-1&&(u=u.slice(0,o)),u+=(u.indexOf("?")===-1?"?":"&")+i}return u}class Nt{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){E.forEach(this.handlers,function(n){n!==null&&e(n)})}}const $n={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},bs=typeof URLSearchParams<"u"?URLSearchParams:ut,ms=typeof FormData<"u"?FormData:null,_s=typeof Blob<"u"?Blob:null,xs={isBrowser:!0,classes:{URLSearchParams:bs,FormData:ms,Blob:_s},protocols:["http","https","file","blob","url","data"]},qn=typeof window<"u"&&typeof document<"u",gs=(u=>qn&&["ReactNative","NativeScript","NS"].indexOf(u)<0)(typeof navigator<"u"&&navigator.product),ys=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ks=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:qn,hasStandardBrowserEnv:gs,hasStandardBrowserWebWorkerEnv:ys},Symbol.toStringTag,{value:"Module"})),bu={...ks,...xs};function Es(u,e){return ge(u,new bu.classes.URLSearchParams,Object.assign({visitor:function(t,n,r,i){return bu.isNode&&E.isBuffer(t)?(this.append(n,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function ws(u){return E.matchAll(/\w+|\[(\w*)]/g,u).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Cs(u){const e={},t=Object.keys(u);let n;const r=t.length;let i;for(n=0;n<r;n++)i=t[n],e[i]=u[i];return e}function jn(u){function e(t,n,r,i){let o=t[i++];if(o==="__proto__")return!0;const s=Number.isFinite(+o),c=i>=t.length;return o=!o&&E.isArray(r)?r.length:o,c?(E.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!s):((!r[o]||!E.isObject(r[o]))&&(r[o]=[]),e(t,n,r[o],i)&&E.isArray(r[o])&&(r[o]=Cs(r[o])),!s)}if(E.isFormData(u)&&E.isFunction(u.entries)){const t={};return E.forEachEntry(u,(n,r)=>{e(ws(n),r,t,0)}),t}return null}function Ds(u,e,t){if(E.isString(u))try{return(e||JSON.parse)(u),E.trim(u)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(u)}const et={transitional:$n,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=E.isObject(e);if(i&&E.isHTMLForm(e)&&(e=new FormData(e)),E.isFormData(e))return r?JSON.stringify(jn(e)):e;if(E.isArrayBuffer(e)||E.isBuffer(e)||E.isStream(e)||E.isFile(e)||E.isBlob(e))return e;if(E.isArrayBufferView(e))return e.buffer;if(E.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Es(e,this.formSerializer).toString();if((s=E.isFileList(e))||n.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ge(s?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),Ds(e)):e}],transformResponse:[function(e){const t=this.transitional||et.transitional,n=t&&t.forcedJSONParsing,r=this.responseType==="json";if(e&&E.isString(e)&&(n&&!this.responseType||r)){const o=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(s){if(o)throw s.name==="SyntaxError"?I.from(s,I.ERR_BAD_RESPONSE,this,null,this.response):s}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:bu.classes.FormData,Blob:bu.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],u=>{et.headers[u]={}});const tt=et,As=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Fs=u=>{const e={};let t,n,r;return u&&u.split(`
`).forEach(function(o){r=o.indexOf(":"),t=o.substring(0,r).trim().toLowerCase(),n=o.substring(r+1).trim(),!(!t||e[t]&&As[t])&&(t==="set-cookie"?e[t]?e[t].push(n):e[t]=[n]:e[t]=e[t]?e[t]+", "+n:n)}),e},It=Symbol("internals");function qu(u){return u&&String(u).trim().toLowerCase()}function oe(u){return u===!1||u==null?u:E.isArray(u)?u.map(oe):String(u)}function vs(u){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=t.exec(u);)e[n[1]]=n[2];return e}const Rs=u=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());function Se(u,e,t,n,r){if(E.isFunction(n))return n.call(this,e,t);if(r&&(e=t),!!E.isString(e)){if(E.isString(n))return e.indexOf(n)!==-1;if(E.isRegExp(n))return n.test(e)}}function Ss(u){return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Ts(u,e){const t=E.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(u,n+t,{value:function(r,i,o){return this[n].call(this,e,r,i,o)},configurable:!0})})}class ye{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(s,c,a){const d=qu(c);if(!d)throw new Error("header name must be a non-empty string");const l=E.findKey(r,d);(!l||r[l]===void 0||a===!0||a===void 0&&r[l]!==!1)&&(r[l||c]=oe(s))}const o=(s,c)=>E.forEach(s,(a,d)=>i(a,d,c));return E.isPlainObject(e)||e instanceof this.constructor?o(e,t):E.isString(e)&&(e=e.trim())&&!Rs(e)?o(Fs(e),t):e!=null&&i(t,e,n),this}get(e,t){if(e=qu(e),e){const n=E.findKey(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return vs(r);if(E.isFunction(t))return t.call(this,r,n);if(E.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=qu(e),e){const n=E.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Se(this,this[n],n,t)))}return!1}delete(e,t){const n=this;let r=!1;function i(o){if(o=qu(o),o){const s=E.findKey(n,o);s&&(!t||Se(n,n[s],s,t))&&(delete n[s],r=!0)}}return E.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];(!e||Se(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return E.forEach(this,(r,i)=>{const o=E.findKey(n,i);if(o){t[o]=oe(r),delete t[i];return}const s=e?Ss(i):String(i).trim();s!==i&&delete t[i],t[s]=oe(r),n[s]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return E.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&E.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach(r=>n.set(r)),n}static accessor(e){const n=(this[It]=this[It]={accessors:{}}).accessors,r=this.prototype;function i(o){const s=qu(o);n[s]||(Ts(r,o),n[s]=!0)}return E.isArray(e)?e.forEach(i):i(e),this}}ye.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(ye.prototype,({value:u},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>u,set(n){this[t]=n}}});E.freezeMethods(ye);const yu=ye;function Te(u,e){const t=this||tt,n=e||t,r=yu.from(n.headers);let i=n.data;return E.forEach(u,function(s){i=s.call(t,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function Un(u){return!!(u&&u.__CANCEL__)}function Yu(u,e,t){I.call(this,u??"canceled",I.ERR_CANCELED,e,t),this.name="CanceledError"}E.inherits(Yu,I,{__CANCEL__:!0});function Bs(u,e,t){const n=t.config.validateStatus;!t.status||!n||n(t.status)?u(t):e(new I("Request failed with status code "+t.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const Os=bu.hasStandardBrowserEnv?{write(u,e,t,n,r,i){const o=[u+"="+encodeURIComponent(e)];E.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),E.isString(n)&&o.push("path="+n),E.isString(r)&&o.push("domain="+r),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(u){const e=document.cookie.match(new RegExp("(^|;\\s*)("+u+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(u){this.write(u,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ls(u){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(u)}function Ns(u,e){return e?u.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):u}function Hn(u,e){return u&&!Ls(e)?Ns(u,e):e}const Is=bu.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(i){let o=i;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(o){const s=E.isString(o)?r(o):o;return s.protocol===n.protocol&&s.host===n.host}}():function(){return function(){return!0}}();function Ps(u){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(u);return e&&e[1]||""}function Ms(u,e){u=u||10;const t=new Array(u),n=new Array(u);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const a=Date.now(),d=n[i];o||(o=a),t[r]=c,n[r]=a;let l=i,x=0;for(;l!==r;)x+=t[l++],l=l%u;if(r=(r+1)%u,r===i&&(i=(i+1)%u),a-o<e)return;const _=d&&a-d;return _?Math.round(x*1e3/_):void 0}}function Pt(u,e){let t=0;const n=Ms(50,250);return r=>{const i=r.loaded,o=r.lengthComputable?r.total:void 0,s=i-t,c=n(s),a=i<=o;t=i;const d={loaded:i,total:o,progress:o?i/o:void 0,bytes:s,rate:c||void 0,estimated:c&&o&&a?(o-i)/c:void 0,event:r};d[e?"download":"upload"]=!0,u(d)}}const zs=typeof XMLHttpRequest<"u",$s=zs&&function(u){return new Promise(function(t,n){let r=u.data;const i=yu.from(u.headers).normalize();let{responseType:o,withXSRFToken:s}=u,c;function a(){u.cancelToken&&u.cancelToken.unsubscribe(c),u.signal&&u.signal.removeEventListener("abort",c)}let d;if(E.isFormData(r)){if(bu.hasStandardBrowserEnv||bu.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((d=i.getContentType())!==!1){const[w,...R]=d?d.split(";").map(B=>B.trim()).filter(Boolean):[];i.setContentType([w||"multipart/form-data",...R].join("; "))}}let l=new XMLHttpRequest;if(u.auth){const w=u.auth.username||"",R=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";i.set("Authorization","Basic "+btoa(w+":"+R))}const x=Hn(u.baseURL,u.url);l.open(u.method.toUpperCase(),zn(x,u.params,u.paramsSerializer),!0),l.timeout=u.timeout;function _(){if(!l)return;const w=yu.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),B={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:w,config:u,request:l};Bs(function(F){t(F),a()},function(F){n(F),a()},B),l=null}if("onloadend"in l?l.onloadend=_:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(_)},l.onabort=function(){l&&(n(new I("Request aborted",I.ECONNABORTED,u,l)),l=null)},l.onerror=function(){n(new I("Network Error",I.ERR_NETWORK,u,l)),l=null},l.ontimeout=function(){let R=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const B=u.transitional||$n;u.timeoutErrorMessage&&(R=u.timeoutErrorMessage),n(new I(R,B.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,u,l)),l=null},bu.hasStandardBrowserEnv&&(s&&E.isFunction(s)&&(s=s(u)),s||s!==!1&&Is(x))){const w=u.xsrfHeaderName&&u.xsrfCookieName&&Os.read(u.xsrfCookieName);w&&i.set(u.xsrfHeaderName,w)}r===void 0&&i.setContentType(null),"setRequestHeader"in l&&E.forEach(i.toJSON(),function(R,B){l.setRequestHeader(B,R)}),E.isUndefined(u.withCredentials)||(l.withCredentials=!!u.withCredentials),o&&o!=="json"&&(l.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&l.addEventListener("progress",Pt(u.onDownloadProgress,!0)),typeof u.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Pt(u.onUploadProgress)),(u.cancelToken||u.signal)&&(c=w=>{l&&(n(!w||w.type?new Yu(null,u,l):w),l.abort(),l=null)},u.cancelToken&&u.cancelToken.subscribe(c),u.signal&&(u.signal.aborted?c():u.signal.addEventListener("abort",c)));const h=Ps(x);if(h&&bu.protocols.indexOf(h)===-1){n(new I("Unsupported protocol "+h+":",I.ERR_BAD_REQUEST,u));return}l.send(r||null)})},$e={http:fs,xhr:$s};E.forEach($e,(u,e)=>{if(u){try{Object.defineProperty(u,"name",{value:e})}catch{}Object.defineProperty(u,"adapterName",{value:e})}});const Mt=u=>`- ${u}`,qs=u=>E.isFunction(u)||u===null||u===!1,Gn={getAdapter:u=>{u=E.isArray(u)?u:[u];const{length:e}=u;let t,n;const r={};for(let i=0;i<e;i++){t=u[i];let o;if(n=t,!qs(t)&&(n=$e[(o=String(t)).toLowerCase()],n===void 0))throw new I(`Unknown adapter '${o}'`);if(n)break;r[o||"#"+i]=n}if(!n){const i=Object.entries(r).map(([s,c])=>`adapter ${s} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Mt).join(`
`):" "+Mt(i[0]):"as no adapter specified";throw new I("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return n},adapters:$e};function Be(u){if(u.cancelToken&&u.cancelToken.throwIfRequested(),u.signal&&u.signal.aborted)throw new Yu(null,u)}function zt(u){return Be(u),u.headers=yu.from(u.headers),u.data=Te.call(u,u.transformRequest),["post","put","patch"].indexOf(u.method)!==-1&&u.headers.setContentType("application/x-www-form-urlencoded",!1),Gn.getAdapter(u.adapter||tt.adapter)(u).then(function(n){return Be(u),n.data=Te.call(u,u.transformResponse,n),n.headers=yu.from(n.headers),n},function(n){return Un(n)||(Be(u),n&&n.response&&(n.response.data=Te.call(u,u.transformResponse,n.response),n.response.headers=yu.from(n.response.headers))),Promise.reject(n)})}const $t=u=>u instanceof yu?u.toJSON():u;function Pu(u,e){e=e||{};const t={};function n(a,d,l){return E.isPlainObject(a)&&E.isPlainObject(d)?E.merge.call({caseless:l},a,d):E.isPlainObject(d)?E.merge({},d):E.isArray(d)?d.slice():d}function r(a,d,l){if(E.isUndefined(d)){if(!E.isUndefined(a))return n(void 0,a,l)}else return n(a,d,l)}function i(a,d){if(!E.isUndefined(d))return n(void 0,d)}function o(a,d){if(E.isUndefined(d)){if(!E.isUndefined(a))return n(void 0,a)}else return n(void 0,d)}function s(a,d,l){if(l in e)return n(a,d);if(l in u)return n(void 0,a)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(a,d)=>r($t(a),$t(d),!0)};return E.forEach(Object.keys(Object.assign({},u,e)),function(d){const l=c[d]||r,x=l(u[d],e[d],d);E.isUndefined(x)&&l!==s||(t[d]=x)}),t}const Vn="1.6.7",nt={};["object","boolean","number","function","string","symbol"].forEach((u,e)=>{nt[u]=function(n){return typeof n===u||"a"+(e<1?"n ":" ")+u}});const qt={};nt.transitional=function(e,t,n){function r(i,o){return"[Axios v"+Vn+"] Transitional option '"+i+"'"+o+(n?". "+n:"")}return(i,o,s)=>{if(e===!1)throw new I(r(o," has been removed"+(t?" in "+t:"")),I.ERR_DEPRECATED);return t&&!qt[o]&&(qt[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,o,s):!0}};function js(u,e,t){if(typeof u!="object")throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);const n=Object.keys(u);let r=n.length;for(;r-- >0;){const i=n[r],o=e[i];if(o){const s=u[i],c=s===void 0||o(s,i,u);if(c!==!0)throw new I("option "+i+" must be "+c,I.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new I("Unknown option "+i,I.ERR_BAD_OPTION)}}const qe={assertOptions:js,validators:nt},wu=qe.validators;class fe{constructor(e){this.defaults=e,this.interceptors={request:new Nt,response:new Nt}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const i=r.stack?r.stack.replace(/^.+\n/,""):"";n.stack?i&&!String(n.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+i):n.stack=i}throw n}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Pu(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&qe.assertOptions(n,{silentJSONParsing:wu.transitional(wu.boolean),forcedJSONParsing:wu.transitional(wu.boolean),clarifyTimeoutError:wu.transitional(wu.boolean)},!1),r!=null&&(E.isFunction(r)?t.paramsSerializer={serialize:r}:qe.assertOptions(r,{encode:wu.function,serialize:wu.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=i&&E.merge(i.common,i[t.method]);i&&E.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),t.headers=yu.concat(o,i);const s=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(t)===!1||(c=c&&w.synchronous,s.unshift(w.fulfilled,w.rejected))});const a=[];this.interceptors.response.forEach(function(w){a.push(w.fulfilled,w.rejected)});let d,l=0,x;if(!c){const h=[zt.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,a),x=h.length,d=Promise.resolve(t);l<x;)d=d.then(h[l++],h[l++]);return d}x=s.length;let _=t;for(l=0;l<x;){const h=s[l++],w=s[l++];try{_=h(_)}catch(R){w.call(this,R);break}}try{d=zt.call(this,_)}catch(h){return Promise.reject(h)}for(l=0,x=a.length;l<x;)d=d.then(a[l++],a[l++]);return d}getUri(e){e=Pu(this.defaults,e);const t=Hn(e.baseURL,e.url);return zn(t,e.params,e.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(e){fe.prototype[e]=function(t,n){return this.request(Pu(n||{},{method:e,url:t,data:(n||{}).data}))}});E.forEach(["post","put","patch"],function(e){function t(n){return function(i,o,s){return this.request(Pu(s||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}fe.prototype[e]=t(),fe.prototype[e+"Form"]=t(!0)});const se=fe;class rt{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(i){t=i});const n=this;this.promise.then(r=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](r);n._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(s=>{n.subscribe(s),i=s}).then(r);return o.cancel=function(){n.unsubscribe(i)},o},e(function(i,o,s){n.reason||(n.reason=new Yu(i,o,s),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new rt(function(r){e=r}),cancel:e}}}const Us=rt;function Hs(u){return function(t){return u.apply(null,t)}}function Gs(u){return E.isObject(u)&&u.isAxiosError===!0}const je={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(je).forEach(([u,e])=>{je[e]=u});const Vs=je;function Wn(u){const e=new se(u),t=Fn(se.prototype.request,e);return E.extend(t,se.prototype,e,{allOwnKeys:!0}),E.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return Wn(Pu(u,r))},t}const Z=Wn(tt);Z.Axios=se;Z.CanceledError=Yu;Z.CancelToken=Us;Z.isCancel=Un;Z.VERSION=Vn;Z.toFormData=ge;Z.AxiosError=I;Z.Cancel=Z.CanceledError;Z.all=function(e){return Promise.all(e)};Z.spread=Hs;Z.isAxiosError=Gs;Z.mergeConfig=Pu;Z.AxiosHeaders=yu;Z.formToJSON=u=>jn(E.isHTMLForm(u)?new FormData(u):u);Z.getAdapter=Gn.getAdapter;Z.HttpStatusCode=Vs;Z.default=Z;const Ws=async()=>{const u=await ku(()=>import("./config.DY70oKIP.js"),__vite__mapDeps([]),import.meta.url),e=await $fetch("/api/getReadme").catch(r=>Z.get(u.GITHUB_README_URL).then(i=>i.data)),n=ou("commonmark",{linkify:!0,typographer:!0}).render(e);return p($,null,[p("div",{className:"whitespace-pre-wrap"},[p("span",null,["Opening GitHub README..."]),p("br",null,null),p("div",{innerHTML:n},null)])])},Zs=async()=>{const u=await ku(()=>import("./config.DY70oKIP.js"),__vite__mapDeps([]),import.meta.url),e=await $fetch("/api/getProjects").catch(t=>Z.get(u.GITHUB_REPOSITORIES_URL).then(n=>n.data));return p($,null,[p("div",null,[p("span",{className:"text-light-foreground dark:text-dark-foreground"},[gu("GitHub Projects: ")]),p("ul",null,[e.map(t=>p("li",null,[p("span",{className:"text-light-foreground dark:text-dark-foreground "},[t.name,gu(" - "),p("a",{className:"text-light-blue dark:text-dark-blue underline flex-grow-0",href:t.html_url,target:"_blank"},[t.html_url])])]))])])])},Js={path:"/",watch:!0,decode:u=>rr(decodeURIComponent(u)),encode:u=>encodeURIComponent(typeof u=="string"?u:JSON.stringify(u))};function it(u,e){var c;const t={...Js,...e},n=jt(t)||{};let r;t.maxAge!==void 0?r=t.maxAge*1e3:t.expires&&(r=t.expires.getTime()-Date.now());const i=r!==void 0&&r<=0,o=lu(i?void 0:n[u]??((c=t.default)==null?void 0:c.call(t))),s=r&&!i?Qs(o,r):K(o);{const a=typeof BroadcastChannel>"u"?null:new BroadcastChannel(`nuxt:cookies:${u}`),d=()=>{t.readonly||kr(s.value,n[u])||(Xs(u,s.value,t),n[u]=lu(s.value),a==null||a.postMessage({value:t.encode(s.value)}))},l=_=>{var w;const h=_.refresh?(w=jt(t))==null?void 0:w[u]:t.decode(_.value);x=!0,n[u]=s.value=h,ir(()=>{x=!1})};let x=!1;Kt()&&Xt(()=>{x=!0,d(),a==null||a.close()}),a&&(a.onmessage=({data:_})=>l(_)),t.watch?tr(s,()=>{x||d()},{deep:t.watch!=="shallow"}):d()}return s}function jt(u={}){return pr(document.cookie,u)}function Ks(u,e,t={}){return e==null?at(u,e,{...t,maxAge:-1}):at(u,e,t)}function Xs(u,e,t={}){document.cookie=Ks(u,e,t)}const Ut=2147483647;function Qs(u,e){let t,n=0;return Kt()&&Xt(()=>{clearTimeout(t)}),nr((r,i)=>{function o(){clearTimeout(t);const s=e-n,c=s<Ut?s:Ut;t=setTimeout(()=>{if(n+=c,n<e)return o();u=void 0,i()},c)}return{get(){return r(),u},set(s){o(),u=s,i()}}})}function Ys(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Zn={exports:{}};(function(u){const e=(()=>{const o={},s={font:"Standard",fontPath:"./fonts"};function c(m,g){let f={},b,y,k,A,D=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(b=g!==null?g:m,y=0,k=D.length;y<k;)A=D[y],b>=A[0]?(b=b-A[0],f[A[1]]=typeof f[A[1]]>"u"?A[2]:f[A[1]]):A[1]!=="vLayout"&&A[1]!=="hLayout"&&(f[A[1]]=!1),y++;return typeof f.hLayout>"u"?m===0?f.hLayout=1:m===-1?f.hLayout=0:f.hRule1||f.hRule2||f.hRule3||f.hRule4||f.hRule5||f.hRule6?f.hLayout=3:f.hLayout=2:f.hLayout===2&&(f.hRule1||f.hRule2||f.hRule3||f.hRule4||f.hRule5||f.hRule6)&&(f.hLayout=3),typeof f.vLayout>"u"?f.vRule1||f.vRule2||f.vRule3||f.vRule4||f.vRule5?f.vLayout=3:f.vLayout=0:f.vLayout===2&&(f.vRule1||f.vRule2||f.vRule3||f.vRule4||f.vRule5)&&(f.vLayout=3),f}function a(m,g,f){return m===g&&m!==f?m:!1}function d(m,g){let f="|/\\[]{}()<>";if(m==="_"){if(f.indexOf(g)!==-1)return g}else if(g==="_"&&f.indexOf(m)!==-1)return m;return!1}function l(m,g){let f="| /\\ [] {} () <>",b=f.indexOf(m),y=f.indexOf(g);if(b!==-1&&y!==-1&&b!==y&&Math.abs(b-y)!==1){const k=Math.max(b,y),A=k+1;return f.substring(k,A)}return!1}function x(m,g){let f="[] {} ()",b=f.indexOf(m),y=f.indexOf(g);return b!==-1&&y!==-1&&Math.abs(b-y)<=1?"|":!1}function _(m,g){let f="/\\ \\/ ><",b={0:"|",3:"Y",6:"X"},y=f.indexOf(m),k=f.indexOf(g);return y!==-1&&k!==-1&&k-y===1?b[y]:!1}function h(m,g,f){return m===f&&g===f?f:!1}function w(m,g){return m===g?m:!1}function R(m,g){let f="|/\\[]{}()<>";if(m==="_"){if(f.indexOf(g)!==-1)return g}else if(g==="_"&&f.indexOf(m)!==-1)return m;return!1}function B(m,g){let f="| /\\ [] {} () <>",b=f.indexOf(m),y=f.indexOf(g);if(b!==-1&&y!==-1&&b!==y&&Math.abs(b-y)!==1){const k=Math.max(b,y),A=k+1;return f.substring(k,A)}return!1}function O(m,g){return m==="-"&&g==="_"||m==="_"&&g==="-"?"=":!1}function F(m,g){return m==="|"&&g==="|"?"|":!1}function T(m,g,f){return g===" "||g===""||g===f&&m!==" "?m:g}function v(m,g,f){if(f.fittingRules.vLayout===0)return"invalid";let b,y=Math.min(m.length,g.length),k,A,D=!1,C;if(y===0)return"invalid";for(b=0;b<y;b++)if(k=m.substring(b,b+1),A=g.substring(b,b+1),k!==" "&&A!==" "){if(f.fittingRules.vLayout===1)return"invalid";if(f.fittingRules.vLayout===2)return"end";if(F(k,A)){D=D||!1;continue}if(C=!1,C=f.fittingRules.vRule1?w(k,A):C,C=!C&&f.fittingRules.vRule2?R(k,A):C,C=!C&&f.fittingRules.vRule3?B(k,A):C,C=!C&&f.fittingRules.vRule4?O(k,A):C,D=!0,!C)return"invalid"}return D?"end":"valid"}function M(m,g,f){let b=m.length,y=m.length;g.length;let k,A,D,C=1,S,H,q;for(;C<=b;){for(k=m.slice(Math.max(0,y-C),y),A=g.slice(0,Math.min(b,C)),D=A.length,q="",S=0;S<D;S++)if(H=v(k[S],A[S],f),H==="end")q=H;else if(H==="invalid"){q=H;break}else q===""&&(q="valid");if(q==="invalid"){C--;break}if(q==="end")break;q==="valid"&&C++}return Math.min(b,C)}function V(m,g,f){let b,y=Math.min(m.length,g.length),k,A,D="",C;for(b=0;b<y;b++)k=m.substring(b,b+1),A=g.substring(b,b+1),k!==" "&&A!==" "?f.fittingRules.vLayout===1||f.fittingRules.vLayout===2?D+=T(k,A):(C=!1,C=f.fittingRules.vRule5?F(k,A):C,C=!C&&f.fittingRules.vRule1?w(k,A):C,C=!C&&f.fittingRules.vRule2?R(k,A):C,C=!C&&f.fittingRules.vRule3?B(k,A):C,C=!C&&f.fittingRules.vRule4?O(k,A):C,D+=C):D+=T(k,A);return D}function cu(m,g,f,b){let y=m.length,k=g.length,A=m.slice(0,Math.max(0,y-f)),D=m.slice(Math.max(0,y-f),y),C=g.slice(0,Math.min(f,k)),S,H,q,z=[],j,tu=[];for(H=D.length,S=0;S<H;S++)S>=k?q=D[S]:q=V(D[S],C[S],b),z.push(q);return j=g.slice(Math.min(f,k),k),tu.concat(A,z,j)}function au(m,g){let f,b=m.length,y="";for(f=0;f<g;f++)y+=" ";for(f=0;f<b;f++)m[f]+=y}function Tu(m,g,f){let b=m[0].length,y=g[0].length,k;return b>y?au(g,b-y):y>b&&au(m,y-b),k=M(m,g,f),cu(m,g,k,f)}function $u(m,g,f){if(f.fittingRules.hLayout===0)return 0;let b,y=m.length,k=g.length,A=y,D=1,C=!1,S=!1,H,q,z,j;if(y===0)return 0;u:for(;D<=A;){const tu=y-D;for(H=m.substring(tu,tu+D),q=g.substring(0,Math.min(D,k)),b=0;b<Math.min(D,k);b++)if(z=H.substring(b,b+1),j=q.substring(b,b+1),z!==" "&&j!==" "){if(f.fittingRules.hLayout===1){D=D-1;break u}else if(f.fittingRules.hLayout===2){(z===f.hardBlank||j===f.hardBlank)&&(D=D-1);break u}else if(C=!0,S=!1,S=f.fittingRules.hRule1?a(z,j,f.hardBlank):S,S=!S&&f.fittingRules.hRule2?d(z,j,f.hardBlank):S,S=!S&&f.fittingRules.hRule3?l(z,j,f.hardBlank):S,S=!S&&f.fittingRules.hRule4?x(z,j,f.hardBlank):S,S=!S&&f.fittingRules.hRule5?_(z,j,f.hardBlank):S,S=!S&&f.fittingRules.hRule6?h(z,j,f.hardBlank):S,!S){D=D-1;break u}}if(C)break;D++}return Math.min(A,D)}function Eu(m,g,f,b){let y,k,A=[],D,C,S,H,q,z,j,tu;for(y=0;y<b.height;y++){j=m[y],tu=g[y],q=j.length,z=tu.length,D=q-f,C=j.substr(0,Math.max(0,D)),S="";const ct=Math.max(0,q-f);var Bu=j.substring(ct,ct+f),ue=tu.substring(0,Math.min(f,z));for(k=0;k<f;k++){var W=k<q?Bu.substring(k,k+1):" ",Q=k<z?ue.substring(k,k+1):" ";if(W!==" "&&Q!==" ")if(b.fittingRules.hLayout===1)S+=T(W,Q,b.hardBlank);else if(b.fittingRules.hLayout===2)S+=T(W,Q,b.hardBlank);else{var G="";G=!G&&b.fittingRules.hRule1?a(W,Q,b.hardBlank):G,G=!G&&b.fittingRules.hRule2?d(W,Q,b.hardBlank):G,G=!G&&b.fittingRules.hRule3?l(W,Q,b.hardBlank):G,G=!G&&b.fittingRules.hRule4?x(W,Q,b.hardBlank):G,G=!G&&b.fittingRules.hRule5?_(W,Q,b.hardBlank):G,G=!G&&b.fittingRules.hRule6?h(W,Q,b.hardBlank):G,G=G||T(W,Q,b.hardBlank),S+=G}else S+=T(W,Q,b.hardBlank)}f>=z?H="":H=tu.substring(f,f+Math.max(0,z-f)),A[y]=C+S+H}return A}function L(m){let g=[],f;for(f=0;f<m;f++)g[f]="";return g}const P=function(m){return Math.max.apply(Math,m.map(function(g,f){return g.length}))};function N(m,g,f){return m.reduce(function(b,y){return Eu(b,y.fig,y.overlap,f)},L(g))}function vu(m,g,f){const b={};for(let y=m.length;--y;){let k=N(m.slice(0,y),g,f);if(P(k)<=f.width){b.outputFigText=k,y<m.length?b.chars=m.slice(y):b.chars=[];break}}return b}function ke(m,g,f){let b,y,k=0,A,D,C,S=f.height,H=[],q,z,j=[],tu,Bu,ue,W,Q;for(D=L(S),f.width>0&&f.whitespaceBreak&&(z={chars:[],overlap:k}),f.printDirection===1&&(m=m.split("").reverse().join("")),C=m.length,b=0;b<C;b++)if(tu=m.substring(b,b+1),Bu=tu.match(/\s/),y=g[tu.charCodeAt(0)],W=null,y){if(f.fittingRules.hLayout!==0){for(k=1e4,A=0;A<f.height;A++)k=Math.min(k,$u(D[A],y[A],f));k=k===1e4?0:k}if(f.width>0&&(f.whitespaceBreak?(ue=N(z.chars.concat([{fig:y,overlap:k}]),S,f),W=N(j.concat([{fig:ue,overlap:z.overlap}]),S,f),q=P(W)):(W=Eu(D,y,k,f),q=P(W)),q>=f.width&&b>0&&(f.whitespaceBreak?(D=N(j.slice(0,-1),S,f),j.length>1&&(H.push(D),D=L(S)),j=[]):(H.push(D),D=L(S)))),f.width>0&&f.whitespaceBreak&&((!Bu||b===C-1)&&z.chars.push({fig:y,overlap:k}),Bu||b===C-1)){for(Q=null;W=N(z.chars,S,f),q=P(W),q>=f.width;)Q=vu(z.chars,S,f),z={chars:Q.chars},H.push(Q.outputFigText);q>0&&(Q?j.push({fig:W,overlap:1}):j.push({fig:W,overlap:z.overlap})),Bu&&(j.push({fig:y,overlap:k}),D=L(S)),b===C-1&&(D=N(j,S,f)),z={chars:[],overlap:k};continue}D=Eu(D,y,k,f)}return P(D)>0&&H.push(D),f.showHardBlanks!==!0&&H.forEach(function(G){for(C=G.length,A=0;A<C;A++)G[A]=G[A].replace(new RegExp("\\"+f.hardBlank,"g")," ")}),H}const Kn=function(m,g){let f=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],b={},y;if(m==="default")for(y=0;y<f.length;y++)b[f[y]]=g.fittingRules[f[y]];else if(m==="full")b={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(m==="fitted")b={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(m==="controlled smushing")b={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(m==="universal smushing")b={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return b},Xn=function(m,g){let f=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],b={},y;if(m==="default")for(y=0;y<f.length;y++)b[f[y]]=g.fittingRules[f[y]];else if(m==="full")b={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(m==="fitted")b={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(m==="controlled smushing")b={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(m==="universal smushing")b={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return b},ot=function(m,g,f){f=f.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let b=f.split(`
`),y=[],k,A,D;for(A=b.length,k=0;k<A;k++)y=y.concat(ke(b[k],o[m],g));for(A=y.length,D=y[0],k=1;k<A;k++)D=Tu(D,y[k],g);return D?D.join(`
`):""};function st(m,g){let f=JSON.parse(JSON.stringify(m)),b,y;if(typeof g.horizontalLayout<"u"){b=Kn(g.horizontalLayout,m);for(y in b)b.hasOwnProperty(y)&&(f.fittingRules[y]=b[y])}if(typeof g.verticalLayout<"u"){b=Xn(g.verticalLayout,m);for(y in b)b.hasOwnProperty(y)&&(f.fittingRules[y]=b[y])}return f.printDirection=typeof g.printDirection<"u"?g.printDirection:m.printDirection,f.showHardBlanks=g.showHardBlanks||!1,f.width=g.width||-1,f.whitespaceBreak=g.whitespaceBreak||!1,f}const Y=function(m,g,f){return Y.text(m,g,f)};return Y.text=async function(m,g,f){let b="";return m=m+"",typeof arguments[1]=="function"&&(f=g,g={},g.font=s.font),typeof g=="string"?(b=g,g={}):(g=g||{},b=g.font||s.font),await new Promise((y,k)=>{Y.loadFont(b,function(A,D){if(A){k(A),f&&f(A);return}const C=ot(b,st(D,g),m);y(C),f&&f(null,C)})})},Y.textSync=function(m,g){let f="";m=m+"",typeof g=="string"?(f=g,g={}):(g=g||{},f=g.font||s.font);var b=st(Y.loadFontSync(f),g);return ot(f,b,m)},Y.metadata=function(m,g){m=m+"",Y.loadFont(m,function(f,b){if(f){g(f);return}g(null,b,o[m].comment)})},Y.defaults=function(m){if(typeof m=="object"&&m!==null)for(var g in m)m.hasOwnProperty(g)&&(s[g]=m[g]);return JSON.parse(JSON.stringify(s))},Y.parseFont=function(m,g){g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`),o[m]={};var f=g.split(`
`),b=f.splice(0,1)[0].split(" "),y=o[m],k={};if(k.hardBlank=b[0].substr(5,1),k.height=parseInt(b[1],10),k.baseline=parseInt(b[2],10),k.maxLength=parseInt(b[3],10),k.oldLayout=parseInt(b[4],10),k.numCommentLines=parseInt(b[5],10),k.printDirection=b.length>=6?parseInt(b[6],10):0,k.fullLayout=b.length>=7?parseInt(b[7],10):null,k.codeTagCount=b.length>=8?parseInt(b[8],10):null,k.fittingRules=c(k.oldLayout,k.fullLayout),y.options=k,k.hardBlank.length!==1||isNaN(k.height)||isNaN(k.baseline)||isNaN(k.maxLength)||isNaN(k.oldLayout)||isNaN(k.numCommentLines))throw new Error("FIGlet header contains invalid values.");let A=[],D;for(D=32;D<=126;D++)A.push(D);if(A=A.concat(196,214,220,228,246,252,223),f.length<k.numCommentLines+k.height*A.length)throw new Error("FIGlet file is missing data.");let C,S,H=!1;for(y.comment=f.splice(0,k.numCommentLines).join(`
`),y.numChars=0;f.length>0&&y.numChars<A.length;){for(C=A[y.numChars],y[C]=f.splice(0,k.height),D=0;D<k.height;D++)typeof y[C][D]>"u"?y[C][D]="":(S=new RegExp("\\"+y[C][D].substr(y[C][D].length-1,1)+"+$"),y[C][D]=y[C][D].replace(S,""));y.numChars++}for(;f.length>0;){if(C=f.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(C))C=parseInt(C,16);else if(/^0[0-7]+$/.test(C))C=parseInt(C,8);else if(/^[0-9]+$/.test(C))C=parseInt(C,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(C))C=parseInt(C,16);else{if(C==="")break;console.log("Invalid data:"+C),H=!0;break}for(y[C]=f.splice(0,k.height),D=0;D<k.height;D++)typeof y[C][D]>"u"?y[C][D]="":(S=new RegExp("\\"+y[C][D].substr(y[C][D].length-1,1)+"+$"),y[C][D]=y[C][D].replace(S,""));y.numChars++}if(H===!0)throw new Error("Error parsing data.");return k},Y.loadFont=function(m,g){if(o[m]){g(null,o[m].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(s.fontPath+"/"+m+".flf").then(function(f){if(f.ok)return f.text();throw console.log("Unexpected response",f),new Error("Network response was not ok.")}).then(function(f){g(null,Y.parseFont(m,f))}).catch(g)},Y.loadFontSync=function(m){if(o[m])return o[m].options;throw new Error("synchronous font loading is not implemented for the browser")},Y.preloadFonts=function(m,g){let f=[];m.reduce(function(b,y){return b.then(function(){return fetch(s.fontPath+"/"+y+".flf").then(k=>k.text()).then(function(k){f.push(k)})})},Promise.resolve()).then(function(b){for(var y in m)m.hasOwnProperty(y)&&Y.parseFont(m[y],f[y]);g&&g()})},Y.figFonts=o,Y})();u.exports=e})(Zn);var uc=Zn.exports;const Ht=Ys(uc),ec=`flf2a$ 11 8 35 -1 14
Rebel by Valerie Mates (popcorn@cyberspace.org), based on a font by Ron Bliss
(who sometimes goes by the name "rebel" because his initials are REB).
May 27, 1994

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
11   - height of a character
8    - height of a character, not including descenders
35   - max line length (excluding comment lines) + a fudge factor
-1   - default smushmode for this font (like "-m 15" on command line)
14   - number of comment lines

$$$@
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@@
 ███@
░███@
░███@
░███@
░███@
░░░ @
 ███@
░░░ @
    @
    @
    @@
 ██ ██@
░██░██@
░░ ░░ @
      @
      @
      @
      @
      @
      @
      @
      @@
   ███  ███  @
 ████████████@
░░░███░░███░ @
 ████████████@
░░░███░░███░ @
  ░░░  ░░░   @
             @
             @
             @
             @
             @@
    ███    @
   ██████  @
  ███░░░   @
 ░░█████   @
  ░░░░███  @
  ██████   @
 ░░░███    @
   ░░░     @
           @
           @
           @@
  ███        ███@
 ░░░       ███░ @
         ███░   @
       ███░     @
     ███░       @
   ███░         @
 ███░       ███ @
░░░        ░░░  @
                @
                @
                @@
   ██████  @
  ███░░███ @
 ░░██████  @
  ██████   @
░███░░███  @
░███ ░░███ @
░░█████░███@
 ░░░░░ ░░░ @
           @
           @
           @@
  ██@
 ███@
░░░ @
    @
    @
    @
    @
    @
    @
    @
    @@
   ███@
  ███ @
 ███  @
░███  @
░███  @
░░███ @
 ░░███@
  ░░░ @
      @
      @
      @@
 ███  @
░░███ @
 ░░███@
  ░███@
  ░███@
  ███ @
 ██░  @
░░░   @
      @
      @
      @@
      ███     @
 ███ ░███  ███@
░░░█████████░ @
  ░░░█████░   @
   █████████  @
 ███░░███░░███@
░░░  ░███ ░░░ @
     ░░░      @
              @
              @
              @@
            @
     ███    @
    ░███    @
 ███████████@
░░░░░███░░░ @
    ░███    @
    ░░░     @
            @
            @
            @
            @@
    @
    @
    @
    @
    @
    @
  ██@
 ██ @
░░  @
    @
    @@
           @
           @
           @
 ██████████@
░░░░░░░░░░ @
           @
           @
           @
           @
           @
           @@
   @
   @
   @
   @
   @
   @
 ██@
░░ @
   @
   @
   @@
             ███@
           ███░ @
         ███░   @
       ███░     @
     ███░       @
   ███░         @
 ███░           @
░░░             @
                @
                @
                @@
    █████   @
  ███░░░███ @
 ███   ░░███@
░███    ░███@
░███    ░███@
░░███   ███ @
 ░░░█████░  @
   ░░░░░░   @
            @
            @
            @@
 ████ @
░░███ @
 ░███ @
 ░███ @
 ░███ @
 ░███ @
 █████@
░░░░░ @
      @
      @
      @@
  ████████ @
 ███░░░░███@
░░░    ░███@
   ███████ @
  ███░░░░  @
 ███      █@
░██████████@
░░░░░░░░░░ @
           @
           @
           @@
  ████████ @
 ███░░░░███@
░░░    ░███@
   ██████░ @
  ░░░░░░███@
 ███   ░███@
░░████████ @
 ░░░░░░░░  @
           @
           @
           @@
 █████ █████ @
░░███ ░░███  @
 ░███  ░███ █@
 ░███████████@
 ░░░░░░░███░█@
       ░███░ @
       █████ @
      ░░░░░  @
             @
             @
             @@
 ██████████@
░███░░░░░░█@
░███     ░ @
░█████████ @
░░░░░░░░███@
 ███   ░███@
░░████████ @
 ░░░░░░░░  @
           @
           @
           @@
  ████████ @
 ███░░░░███@
░███   ░░░ @
░█████████ @
░███░░░░███@
░███   ░███@
░░████████ @
 ░░░░░░░░  @
           @
           @
           @@
 ██████████@
░███░░░░███@
░░░    ███ @
      ███  @
     ███   @
    ███    @
   ███     @
  ░░░      @
           @
           @
           @@
  ████████  @
 ███░░░░███ @
░███   ░███ @
░░████████  @
 ███░░░░███ @
░███   ░███ @
░░████████  @
 ░░░░░░░░   @
            @
            @
            @@
  ████████ @
 ███░░░░███@
░███   ░███@
░░█████████@
 ░░░░░░░███@
 ███   ░███@
░░████████ @
 ░░░░░░░░  @
           @
           @
           @@
   @
   @
 ██@
░░ @
   @
   @
 ██@
░░ @
   @
   @
   @@
    @
    @
    @
    @
  ██@
 ░░ @
  ██@
 ██ @
░░  @
    @
    @@
       ███@
     ███░ @
   ███░   @
 ███░     @
░░░███    @
  ░░░███  @
    ░░░███@
      ░░░ @
          @
          @
          @@
          @
          @
 █████████@
░░░░░░░░░ @
 █████████@
░░░░░░░░░ @
          @
          @
          @
          @
          @@
 ███      @
░░░███    @
  ░░░███  @
    ░░░███@
     ███░ @
   ███░   @
 ███░     @
░░░       @
          @
          @
          @@
  ███████ @
 ███░░░███@
░░░   ░███@
  ███████ @
 ░███░░░  @
 ░░░      @
  ███     @
 ░░░      @
          @
          @
          @@
  █████████ @
 ███░░░░░░  @
░███ ██████ @
░███░███░███@
░███░███░███@
░███░░░ ░███@
░░█████████ @
 ░░░░░░░░░  @
            @
            @
            @@
   █████████  @
  ███░░░░░███ @
 ░███    ░███ @
 ░███████████ @
 ░███░░░░░███ @
 ░███    ░███ @
 █████   █████@
░░░░░   ░░░░░ @
              @
              @
              @@
 ███████████ @
░░███░░░░░███@
 ░███    ░███@
 ░██████████ @
 ░███░░░░░███@
 ░███    ░███@
 ███████████ @
░░░░░░░░░░░  @
             @
             @
             @@
   █████████ @
  ███░░░░░███@
 ███     ░░░ @
░███         @
░███         @
░░███     ███@
 ░░█████████ @
  ░░░░░░░░░  @
             @
             @
             @@
 ██████████  @
░░███░░░░███ @
 ░███   ░░███@
 ░███    ░███@
 ░███    ░███@
 ░███    ███ @
 ██████████  @
░░░░░░░░░░   @
             @
             @
             @@
 ██████████@
░░███░░░░░█@
 ░███  █ ░ @
 ░██████   @
 ░███░░█   @
 ░███ ░   █@
 ██████████@
░░░░░░░░░░ @
           @
           @
           @@
 ███████████@
░░███░░░░░░█@
 ░███   █ ░ @
 ░███████   @
 ░███░░░█   @
 ░███  ░    @
 █████      @
░░░░░       @
            @
            @
            @@
   █████████ @
  ███░░░░░███@
 ███     ░░░ @
░███         @
░███    █████@
░░███  ░░███ @
 ░░█████████ @
  ░░░░░░░░░  @
             @
             @
             @@
 █████   █████@
░░███   ░░███ @
 ░███    ░███ @
 ░███████████ @
 ░███░░░░░███ @
 ░███    ░███ @
 █████   █████@
░░░░░   ░░░░░ @
              @
              @
              @@
 █████@
░░███ @
 ░███ @
 ░███ @
 ░███ @
 ░███ @
 █████@
░░░░░ @
      @
      @
      @@
       █████@
      ░░███ @
       ░███ @
       ░███ @
       ░███ @
 ███   ░███ @
░░████████  @
 ░░░░░░░░   @
            @
            @
            @@
 █████   ████@
░░███   ███░ @
 ░███  ███   @
 ░███████    @
 ░███░░███   @
 ░███ ░░███  @
 █████ ░░████@
░░░░░   ░░░░ @
             @
             @
             @@
 █████      @
░░███       @
 ░███       @
 ░███       @
 ░███       @
 ░███      █@
 ███████████@
░░░░░░░░░░░ @
            @
            @
            @@
 ██████   ██████@
░░██████ ██████ @
 ░███░█████░███ @
 ░███░░███ ░███ @
 ░███ ░░░  ░███ @
 ░███      ░███ @
 █████     █████@
░░░░░     ░░░░░ @
                @
                @
                @@
 ██████   █████@
░░██████ ░░███ @
 ░███░███ ░███ @
 ░███░░███░███ @
 ░███ ░░██████ @
 ░███  ░░█████ @
 █████  ░░█████@
░░░░░    ░░░░░ @
               @
               @
               @@
    ███████   @
  ███░░░░░███ @
 ███     ░░███@
░███      ░███@
░███      ░███@
░░███     ███ @
 ░░░███████░  @
   ░░░░░░░    @
              @
              @
              @@
 ███████████ @
░░███░░░░░███@
 ░███    ░███@
 ░██████████ @
 ░███░░░░░░  @
 ░███        @
 █████       @
░░░░░        @
             @
             @
             @@
    ██████   @
  ███░░░░███ @
 ███    ░░███@
░███     ░███@
░███   ██░███@
░░███ ░░████ @
 ░░░██████░██@
   ░░░░░░ ░░ @
             @
             @
             @@
 ███████████  @
░░███░░░░░███ @
 ░███    ░███ @
 ░██████████  @
 ░███░░░░░███ @
 ░███    ░███ @
 █████   █████@
░░░░░   ░░░░░ @
              @
              @
              @@
  █████████ @
 ███░░░░░███@
░███    ░░░ @
░░█████████ @
 ░░░░░░░░███@
 ███    ░███@
░░█████████ @
 ░░░░░░░░░  @
            @
            @
            @@
 ███████████@
░█░░░███░░░█@
░   ░███  ░ @
    ░███    @
    ░███    @
    ░███    @
    █████   @
   ░░░░░    @
            @
            @
            @@
 █████  █████@
░░███  ░░███ @
 ░███   ░███ @
 ░███   ░███ @
 ░███   ░███ @
 ░███   ░███ @
 ░░████████  @
  ░░░░░░░░   @
             @
             @
             @@
 █████   █████@
░░███   ░░███ @
 ░███    ░███ @
 ░███    ░███ @
 ░░███   ███  @
  ░░░█████░   @
    ░░███     @
     ░░░      @
              @
              @
              @@
 █████   ███   █████@
░░███   ░███  ░░███ @
 ░███   ░███   ░███ @
 ░███   ░███   ░███ @
 ░░███  █████  ███  @
  ░░░█████░█████░   @
    ░░███ ░░███     @
     ░░░   ░░░      @
                    @
                    @
                    @@
 █████ █████@
░░███ ░░███ @
 ░░███ ███  @
  ░░█████   @
   ███░███  @
  ███ ░░███ @
 █████ █████@
░░░░░ ░░░░░ @
            @
            @
            @@
 █████ █████@
░░███ ░░███ @
 ░░███ ███  @
  ░░█████   @
   ░░███    @
    ░███    @
    █████   @
   ░░░░░    @
            @
            @
            @@
 ███████████@
░█░░░░░░███ @
░     ███░  @
     ███    @
    ███     @
  ████     █@
 ███████████@
░░░░░░░░░░░ @
            @
            @
            @@
 █████@
░███░ @
░███  @
░███  @
░███  @
░███  @
░█████@
░░░░░ @
      @
      @
      @@
 ███      @
░░███     @
 ░░███    @
  ░░███   @
   ░░███  @
    ░░███ @
     ░░███@
      ░░░ @
          @
          @
          @@
 █████@
░░░███@
  ░███@
  ░███@
  ░███@
  ░███@
 █████@
░░░░░ @
      @
      @
      @@
   ██  @
  ████ @
 ██░░██@
░░  ░░ @
       @
       @
       @
       @
       @
       @
       @@
          @
          @
          @
          @
          @
          @
 █████████@
░░░░░░░░░ @
          @
          @
          @@
 ██ @
░███@
░░░ @
    @
    @
    @
    @
    @
    @
    @
    @@
          @
          @
  ██████  @
 ░░░░░███ @
  ███████ @
 ███░░███ @
░░████████@
 ░░░░░░░░ @
          @
          @
          @@
 █████    @
░░███     @
 ░███████ @
 ░███░░███@
 ░███ ░███@
 ░███ ░███@
 ████████ @
░░░░░░░░  @
          @
          @
          @@
         @
         @
  ██████ @
 ███░░███@
░███ ░░░ @
░███  ███@
░░██████ @
 ░░░░░░  @
         @
         @
         @@
     █████@
    ░░███ @
  ███████ @
 ███░░███ @
░███ ░███ @
░███ ░███ @
░░████████@
 ░░░░░░░░ @
          @
          @
          @@
         @
         @
  ██████ @
 ███░░███@
░███████ @
░███░░░  @
░░██████ @
 ░░░░░░  @
         @
         @
         @@
    ██████ @
   ███░░███@
  ░███ ░░░ @
 ███████   @
░░░███░    @
  ░███     @
  █████    @
 ░░░░░     @
           @
           @
           @@
         @
         @
  ███████@
 ███░░███@
░███ ░███@
░███ ░███@
░░███████@
 ░░░░░███@
 ███ ░███@
░░██████ @
 ░░░░░░  @@
 █████     @
░░███      @
 ░███████  @
 ░███░░███ @
 ░███ ░███ @
 ░███ ░███ @
 ████ █████@
░░░░ ░░░░░ @
           @
           @
           @@
  ███ @
 ░░░  @
 ████ @
░░███ @
 ░███ @
 ░███ @
 █████@
░░░░░ @
      @
      @
      @@
      ███ @
     ░░░  @
     █████@
    ░░███ @
     ░███ @
     ░███ @
     ░███ @
     ░███ @
 ███ ░███ @
░░██████  @
 ░░░░░░   @@
 █████     @
░░███      @
 ░███ █████@
 ░███░░███ @
 ░██████░  @
 ░███░░███ @
 ████ █████@
░░░░ ░░░░░ @
           @
           @
           @@
 ████ @
░░███ @
 ░███ @
 ░███ @
 ░███ @
 ░███ @
 █████@
░░░░░ @
      @
      @
      @@
                @
                @
 █████████████  @
░░███░░███░░███ @
 ░███ ░███ ░███ @
 ░███ ░███ ░███ @
 █████░███ █████@
░░░░░ ░░░ ░░░░░ @
                @
                @
                @@
           @
           @
 ████████  @
░░███░░███ @
 ░███ ░███ @
 ░███ ░███ @
 ████ █████@
░░░░ ░░░░░ @
           @
           @
           @@
         @
         @
  ██████ @
 ███░░███@
░███ ░███@
░███ ░███@
░░██████ @
 ░░░░░░  @
         @
         @
         @@
          @
          @
 ████████ @
░░███░░███@
 ░███ ░███@
 ░███ ░███@
 ░███████ @
 ░███░░░  @
 ░███     @
 █████    @
░░░░░     @@
          @
          @
  ████████@
 ███░░███ @
░███ ░███ @
░███ ░███ @
░░███████ @
 ░░░░░███ @
     ░███ @
     █████@
    ░░░░░ @@
          @
          @
 ████████ @
░░███░░███@
 ░███ ░░░ @
 ░███     @
 █████    @
░░░░░     @
          @
          @
          @@
        @
        @
  █████ @
 ███░░  @
░░█████ @
 ░░░░███@
 ██████ @
░░░░░░  @
        @
        @
        @@
  █████   @
 ░░███    @
 ███████  @
░░░███░   @
  ░███    @
  ░███ ███@
  ░░█████ @
   ░░░░░  @
          @
          @
          @@
           @
           @
 █████ ████@
░░███ ░███ @
 ░███ ░███ @
 ░███ ░███ @
 ░░████████@
  ░░░░░░░░ @
           @
           @
           @@
            @
            @
 █████ █████@
░░███ ░░███ @
 ░███  ░███ @
 ░░███ ███  @
  ░░█████   @
   ░░░░░    @
            @
            @
            @@
                @
                @
 █████ ███ █████@
░░███ ░███░░███ @
 ░███ ░███ ░███ @
 ░░███████████  @
  ░░████░████   @
   ░░░░ ░░░░    @
                @
                @
                @@
            @
            @
 █████ █████@
░░███ ░░███ @
 ░░░█████░  @
  ███░░░███ @
 █████ █████@
░░░░░ ░░░░░ @
            @
            @
            @@
           @
           @
 █████ ████@
░░███ ░███ @
 ░███ ░███ @
 ░███ ░███ @
 ░░███████ @
  ░░░░░███ @
  ███ ░███ @
 ░░██████  @
  ░░░░░░   @@
           @
           @
  █████████@
 ░█░░░░███ @
 ░   ███░  @
   ███░   █@
  █████████@
 ░░░░░░░░░ @
           @
           @
           @@
     ███@
    ██░ @
   ██   @
 ███    @
░░░██   @
  ░░██  @
   ░░███@
    ░░░ @
        @
        @
        @@
 ███@
░███@
░███@
░███@
░███@
░███@
░███@
░░░ @
    @
    @
    @@
 ███    @
░░░██   @
  ░░██  @
   ░░███@
    ██░ @
   ██   @
 ███    @
░░░     @
        @
        @
        @@
          @
   ███ ███@
 ███░███░ @
░░░ ░░░   @
          @
          @
          @
          @
          @
          @
          @@
  ███   ███ @
 ░░░   ░░░  @
   ███████  @
  ███░░░███ @
 ░█████████ @
 ░███░░░███ @
 █████ █████@
░░░░░ ░░░░░ @
            @
            @
            @@
 ███  ███ @
░░░  ░░░  @
  ███████ @
 ███░░░███@
░███  ░███@
░███  ░███@
░░███████ @
 ░░░░░░░  @
          @
          @
          @@
  ███   ███ @
 ░░░   ░░░  @
 █████ █████@
░░███ ░░███ @
 ░███  ░███ @
 ░███  ░███ @
 ░░███████  @
  ░░░░░░░   @
            @
            @
            @@
 ███  ███ @
░░░  ░░░  @
  ██████  @
 ░░░░░███ @
  ███████ @
 ███░░███ @
░░████████@
 ░░░░░░░░ @
          @
          @
          @@
 ███  ███ @
░░░  ░░░  @
  ███████ @
 ███░░░███@
░███  ░███@
░███  ░███@
░░███████ @
 ░░░░░░░  @
          @
          @
          @@
  ███   ███ @
 ░░░   ░░░  @
 █████ █████@
░░███ ░░███ @
 ░███  ░███ @
 ░███  ░███ @
 ░░█████████@
  ░░░░░░░░░ @
            @
            @
            @@
   █████████ @
  ███░░░░░███@
 ░███    ░███@
 ░██████████ @
 ░███░░░░░███@
 ░███    ░███@
 ████ ██████ @
░░░░ ░░░░░░  @
             @
             @
             @@
`,Gt=async({fontSelect:u="DOS Rebel",text:e=`Portfolio
 Terminal`}={})=>{const t=await $fetch("/api/getRuntimeConfig").catch(r=>ku(()=>import("./config.DY70oKIP.js"),__vite__mapDeps([]),import.meta.url));Ht.parseFont(u,ec);const n=await Ht.text(e==null?void 0:e.replace(/\\n/g,`
`),{font:u,horizontalLayout:"fitted",verticalLayout:"fitted"},function(r,i){if(r){console.dir(r);return}return i});return p($,null,[p("div",{id:"banner",className:"whitespace-pre-wrap pt-4",style:{gridTemplateRows:"minmax(2rem, 20vmin) 1fr 5rem"}},[p("pre",{className:"min-w-max",style:{fontSize:"max(0.1rem, 2vmin)",lineHeight:"normal"}},[n]),p("sup",null,[p("a",{className:"text-[10px]"},["inpired by Cveinnt's Liveterm"])])]),p("div",{className:"whitespace-pre-wrap text-xs sm:text-sm md:text-base w-fill max-w-full ",style:{wordBreak:"break-word"}},[p("ul",{className:"list-none text-xs sm:text-sm md:text-base pl-4"},[p("li",{className:"pt-1"},["Type banner --help to see banner customization options."]),p("li",{className:"pt-1"},["Type 'help' to see the list of available commands."]),p("li",{className:"pt-1"},["Type 'fetchsum' to display summary."]),p("li",{className:"pt-1"},["Type 'repo' or click ",p("u",null,[p("a",{className:"text-light-blue dark:text-dark-blue underline",href:t==null?void 0:t.GITHUB_REPO,target:"_blank"},[gu("here")])])," for the Github repository."])])])])},Jn=async(u=[])=>{const e=it("banner");if(u.length===0)return await Gt(e.value);const t=["--help","--text","--set"];if(u.includes("--help"))return p($,null,[p("div",{className:"whitespace-pre-wrap flex flex-col"},[p("span",null,["Welcome to Banner! These are the available commands that can be used:"]),p("br",null,null),p("span",{className:"ml-4 max-w-sm"},[`${t.join(", ")}`]),p("br",null,null),p("span",{className:"whitespace-pre-wrap"},[`Entering 'banner --text=<text>' will alter the banners text. 
Entering 'banner --set' will save the current banner as default, 
alternatively 'banner --set=false' will reset the banner`])])]);const n=u.join(" ").split("--").map(o=>{const s=o.split("=");if(t.includes("--"+s[0]))return s.length<=1&&s.push(void 0),s}),r={};let i=!1;return n.forEach((o,s)=>{if(!(!o||!o[0]))switch(o[0]){case"text":{if(!o[1]||o[1]===" "){i="--text";return}r.text=o[1].trim();return}case"set":{if(o[1]==="false"){r.reset=!0;return}r.saveBanner=!0;return}default:return}}),i==="--text"?p($,null,[p("div",null,[p("span",{className:"whitespace-pre-wrap"},[`No text was provided. 
Please do not use the '--text' option if no text will be provided`]),p("br",null,null)])]):(r.saveBanner&&(e.value=r),r.reset&&(e.value=null),await Gt(r))},Vt={default:{light:{background:"#9A9A9A",foreground:"#0D0D0D",yellow:"#FFFF00",green:"#00FF00",gray:"#090909",blue:"#0000FF",red:"#FF0000"},dark:{background:"#0A0A0A",foreground:"#DDDDDD",yellow:"#F7FF00",green:"#00FF00",gray:"#999999",blue:"#0000FF",red:"#FF0000"}},liveterm:{light:{background:"#FBF1C9",foreground:"#3C3836",yellow:"#D79921",green:"#98971A",gray:"#7C6F64",blue:"#458588",red:"#CA2124"},dark:{background:"#2E3440",foreground:"#E5E9F0",yellow:"#5E81AC",green:"#A3BE8C",gray:"#88C0D0",blue:"#EBCB8B",red:"#BF616A"}},gruvbox:{light:{background:"#FBF1C9",foreground:"#3C3836",yellow:"#D79921",green:"#98971A",gray:"#7C6F64",blue:"#458588",red:"#CA2124"},dark:{background:"#1c1c1c",foreground:"#EBDBB2",yellow:"#D79921",green:"#98971A",gray:"#A89984",blue:"#458588",red:"#CA2124"}},dracula:{light:{background:"#FFFFDB",foreground:"#282a36",yellow:"#ffb86c",green:"#50fa7b",gray:"#8B6BB9",blue:"#67AFC0",red:"#ff5555"},dark:{background:"#282a36",foreground:"#f8f8f2",yellow:"#ffb86c",green:"#50fa7b",gray:"#bd93f9",blue:"#8be9fd",red:"#ff5555"}},nord:{light:{background:"#E5E9F0",foreground:"#2E3440",yellow:"#5E81AC",green:"#A3BE8C",gray:"#88C0D0",blue:"#EBCB8B",red:"#BF616A"},dark:{background:"#2E3440",foreground:"#E5E9F0",yellow:"#5E81AC",green:"#A3BE8C",gray:"#88C0D0",blue:"#EBCB8B",red:"#BF616A"}},monokai:{light:{background:"#F8F8F2",foreground:"#272822",yellow:"#F4BF75",green:"#A6E22E",gray:"#AE81FF",blue:"#66D9EF",red:"#F92672"},dark:{background:"#272822",foreground:"#F8F8F2",yellow:"#F4BF75",green:"#A6E22E",gray:"#AE81FF",blue:"#66D9EF",red:"#F92672"}},mocha:{light:{background:"#D0C8C6",foreground:"#3B3228",yellow:"#F4BC87",green:"#BEB55B",gray:"#A89BB9",blue:"#8AB3B5",red:"#CB6077"},dark:{background:"#3B3228",foreground:"#D0C8C6",yellow:"#F4BC87",green:"#BEB55B",gray:"#A89BB9",blue:"#8AB3B5",red:"#CB6077"}},solarized:{light:{background:"#FDF6E3",foreground:"#586E75",yellow:"#B58900",green:"#859900",gray:"#6C71C4",blue:"#268BD2",red:"#DC322F"},dark:{background:"#002B36",foreground:"#93A1A1",yellow:"#B58900",green:"#859900",gray:"#6C71C4",blue:"#268BD2",red:"#DC322F"}},paraiso:{light:{background:"#A39E9B",foreground:"#2F1E2E",yellow:"#FEC418",green:"#48B685",gray:"#815BA4",blue:"#06B6EF",red:"#EF6155"},dark:{background:"#2F1E2E",foreground:"#A39E9B",yellow:"#FEC418",green:"#48B685",gray:"#815BA4",blue:"#06B6EF",red:"#EF6155"}}},tc=async u=>{const e=["--help","--select"];switch(u[0]){case e[0]:return p($,null,[p("div",{className:"whitespace-pre-wrap text-xs sm:text-sm md:text-base flex flex-col"},[p("span",null,[`Welcome to Theme!
Theme allows you to alter the appearance of the terminal by selecting from a list of themes.`]),p("br",null,null),p("span",null,["Here are all the available options that you can use:"]),p("br",null,null),p("span",{className:"pl-4 max-w-sm"},[`  ${e.join(", ")}`]),p("br",null,null),p("span",null,[`[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.`])])]);case e[1]:{const n=Object.keys(Vt).sort();var t="";const r=Object.keys(Vt).length;for(let s=1;s<=r;s++)s===r?t+=n[s-1]+`
`:t+=n[s-1]+", ";if(!u[1])return p($,null,[p("div",{className:"whitespace-pre-wrap"},[`No theme provided. Please select one of the following themes:
              
  ${t}
              
A theme can be applied by entering "theme ${e[1]} 'theme'"`])]);if(!n.includes(u[1]))return p($,null,[p("div",{className:"whitespace-pre-wrap"},[`'${u[1]}' is not a valid theme. Please select a valid theme:
              
  ${t}`])]);const i=u[1],o=it("theme");return o.value=i,p($,null,[p("div",{className:"whitespace-pre-wrap"},[`Setting theme to '${i}'`])])}default:return p($,null,[p("div",{className:"whitespace-pre-wrap"},[`No valid options where provided. 
            
Enter 'theme ${e[0]}' to see all available options.`])])}},nc=async()=>{const u=await $fetch("/api/getRuntimeConfig").catch(e=>ku(()=>import("./config.DY70oKIP.js"),__vite__mapDeps([]),import.meta.url));return p($,null,[p("div",{className:"flex flex-col items-start"},["fetchsum: summary display",p("div",{className:"flex flex-row flex-wrap sm:flex-nowrap max-w-full"},[p("div",{className:"whitespace-pre-wrap m-auto sm:mx-0 flex-grow-1",style:{}},[p("pre",{className:" leading-[normal]",style:{fontSize:"max(0.1rem, 2.5vmin)",lineHeight:"normal"}},[`
      |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|
      | |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾| |
      | |       Portfolio       | |
      | |       Terminal        | |
      | |       >_              | |
      | |_______________________| |
      |___________________________|
      ____\\_____   []    _____/_____,
     /        /___________\\        /|
    /_____________________________/ |
    |  _ _ _            [-------] | | 
    |  o o o            [-------] | /
    |_____________________________|/
      _______________________
     //̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅- //
    / /̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-//
    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`])]),p("div",{className:"whitespace-pre-wrap w-full mx-auto md:mx-0 my-4 sm:my-auto flex-grow-1"},[p("ul",{className:""},[p("li",{className:"min-w-full border-y-light-foreground : dark:border-y-dark-foreground border-solid border-y-2 py-2 my-4 list-none"},[gu(" ABOUT")]),p("li",{className:"pl-4"},[u.NAME]),p("li",{className:"pl-4"},[p("u",null,[p("a",{href:`${u.RESUME}`,target:"_blank"},[gu("Resume")])])]),p("li",{className:"pl-4"},[p("u",null,[p("a",{href:`${u.GITHUB_REPO}`,target:"_blank"},[gu("GitHub Repo")])])]),p("li",{className:"min-w-full border-y-light-foreground : dark:border-y-dark-foreground border-solid border-y-2 py-2 my-4 list-none"},[gu(" CONTACT")]),p("li",{className:"pl-4"},[p("u",null,[p("a",{href:`mailto:${u.EMAIL}`,target:"_blank"},[u.EMAIL])])]),p("li",{className:"pl-4"},[p("u",null,[p("a",{href:`https://github.com/${u.GITHUB}`,target:"_blank"},[gu("github.com/"),u.GITHUB])])]),p("li",{className:"pl-4"},[p("u",null,[p("a",{href:`https://linkedin.com/in/${u.LINKEDIN}`,target:"_blank"},[gu("linkedin.com/in/"),u.LINKEDIN])])])])])])])])},Wt=u=>["clear",...Object.keys(ju)].indexOf(u==null?void 0:u.split(" ")[0].toLowerCase())!==-1,rc=async(u,e,t,n)=>{const r=u.split(" ");if(r[0]=r[0].toLowerCase(),r[0]==="clear")t();else if(u==="")e("");else if(Object.keys(ju).indexOf(r[0])===-1)e(p($,null,[p("span",null,[`
shell: command not found: ${r[0]}. 

Try 'help' to get started.`])]));else{const i=await ju[r[0]](r.slice(1));e(i)}n("")},ic=(u,e)=>{const t=Object.keys(ju).filter(n=>n.startsWith(u));t.length===1&&e(t[0])},oc={class:"flex flex-row items-start min-w-full"},sc=["onKeydown"],cc={__name:"TerminalInput",props:or({containerRef:{type:Object},setCommand:{type:Function},setHistory:{type:Function},clearHistory:{type:Function},setLastCommandIndex:{type:Function}},{input:{},inputModifiers:{}}),emits:["update:input"],setup(u,{expose:e}){const t=u,{containerRef:n,setCommand:r,setHistory:i,clearHistory:o,setLastCommandIndex:s}=t,c=nu("history"),a=nu("command"),d=nu("lastCommandIndex"),[l,x]=sr(u,"input"),_=K(),h=K(),w=K(),R=K();K(!1);const B=K(0),O=K(Wt(l.value)),F=Qt(()=>({"text-light-green dark:text-dark-green":O.value,"text-light-foreground dark:text-dark-foreground":!O.value||a.value===""})),T=()=>{B.value++},v=L=>{L.style.removeProperty("height"),L.style.padding="0px",L.style.height=L.scrollHeight+"px",L.style.removeProperty("padding")},M=(L,P)=>{const N=L.offsetWidth<=P.offsetWidth+P.offsetLeft+10;L.style.left=-L.offsetWidth+"px",L.style.textIndent=N?"0px":P.offsetWidth+P.offsetLeft+5+"px",L.style.marginTop=N?P.offsetTop+P.offsetHeight+"px":P.offsetTop+"px"};let V;Ue(()=>{if(V=new ResizeObserver(L=>{L.forEach(async P=>{if(_.value){const N=_.value,vu=h.value,ke=R.value.endRef||vu.children[0].children[3];v(N),M(N,ke)}})}),_.value){const L=_.value,P=h.value,N=R.value.endRef||P.children[0].children[3];v(L),M(L,N)}w.value&&V.observe(w.value)}),He(()=>{O.value=Wt(l.value),w.value&&V.observe(w.value),n.scrollTo(0,n.scrollHeight)});const cu=L=>{const{target:P}=L;v(P),r(l.value)},au=async L=>{l.value&&((L.key==="Enter"||L.keyCode===13)&&(s(0),await rc(a.value,i,o,r),n.scrollTo(0,n.scrollHeight)),l.value=a.value)},Tu=async L=>{L.key==="c"&&(r(""),i(""),s(0)),L.key==="l"&&o(),l.value=a.value,T()},$u=L=>{L.key==="Tab"&&ic(a.value,r),l.value=a.value,T()},Eu=L=>{const P=c.value.map(({command:N})=>N).filter(N=>N);if(L.key==="ArrowUp"){if(!P.length)return;const N=d.value+1;N<=P.length&&(s(N),r(P[P.length-N]))}if(L.key==="ArrowDown"){if(!P.length)return;const N=d.value-1;N>0?(s(N),r(P[P.length-N])):(s(0),r(""))}l.value=a.value};return e({inputRef:_}),(L,P)=>{const N=en;return fu(),Su("div",{key:du(B),id:"terminal-input",ref_key:"commandRef",ref:w},[uu("section",oc,[uu("label",{ref_key:"labelRef",ref:h,for:"command-input",class:"flex-shrink flex-1 z-10 relative min-w-full break-words text-wrap"},[p(N,{ref_key:"endRef",ref:R},null,512)],512),cr(uu("textarea",{ref_key:"inputRef",ref:_,id:"command-input",type:"text",class:lr(["flex-1 bg-light-background dark:bg-dark-background relative flex-grow min-w-full mr-1 focus:outline-none resize-none break-words text-wrap",du(F)]),"onUpdate:modelValue":P[0]||(P[0]=vu=>Zt(l)?l.value=vu:null),onKeydown:[Ou(Ru(Tu,["ctrl","prevent"]),["c"]),Ou(Ru(Tu,["ctrl","prevent"]),["l"]),Ou(Ru($u,["prevent"]),["tab"]),Ou(Ru(au,["prevent"]),["enter"]),Ou(Ru(Eu,["prevent"]),["up"]),Ou(Ru(Eu,["prevent"]),["down"])],onInput:Ru(cu,["prevent"]),autofocus:"",autocomplete:"off",spellcheck:"false"},`
      `,42,sc),[[ar,du(l),void 0,{trim:!0}]])])])}}},ac=cc,lc=(u=[])=>{const e=nu("history",()=>u),t=nu("command",()=>""),n=nu("lastCommandIndex",()=>0);return fr({history:e,command:t,lastCommandIndex:n,setHistory:c=>{const a=nu("history"),d=nu("command");a.value.push({id:a.value.length,date:new Date,command:d.value,output:c})},clearHistory:()=>{const c=nu("history");c.value.length=0},setCommand:c=>{const a=nu("command");a.value=c},setLastCommandIndex:c=>{const a=nu("lastCommandIndex");a.value=c}})},fc={class:"w-full h-full bg-light-background dark:bg-dark-background p-1 sm:p2"},dc={class:"h-full border-2 rounded border-light-yellow dark:border-dark-yellow overflow-hidden p-2 sm:p-3 md:p-5"},hc={class:"max-w-full xl:max-w-2xl"},bc={__name:"index",setup(u){const e=Qt(()=>it("theme",{default:()=>"default",watch:"shallow"}));dr({htmlAttrs:{class:e.value}});const t=K(),n=K(0),r=K(),i=nu("history"),{setCommand:o,setHistory:s,setLastCommandIndex:c,clearHistory:a}=lc([]),d=()=>{n.value+=1};Ue(async()=>{var x;((x=i.value)==null?void 0:x.length)===0&&(s(await Jn()),d()),r.value.offsetHeight<=r.value.scrollHeight?(r.value.style.paddingRight="20px",r.value.scrollTo(0,r.value.scrollHeight)):r.value.style.paddingRight&&r.value.style.removeProperty("paddingRight")}),He(()=>{r.value.offsetHeight<=r.value.scrollHeight?(r.value.style.paddingRight="10px",r.value.scrollTo(0,r.value.scrollHeight)):r.value.style.paddingRight&&r.value.style.removeProperty("paddingRight")}),Jt(()=>{n.value>0&&(n.value=0)});const l=x=>{hr(()=>{var _;(_=t.value)!=null&&_.inputRef&&t.value.inputRef.focus()})};return(x,_)=>{const h=Tr,w=ac;return fu(),Su("div",{class:"max-w-full h-screen text-light-foreground dark:text-dark-foreground text-sm md:min-w-full md:text-base",onClick:l},[uu("main",fc,[uu("div",dc,[uu("div",{ref_key:"containerRef",ref:r,class:"h-full scrollbar-thin scrollbar-webkit overflow-y-auto overflow-x-hidden"},[uu("div",hc,[(fu(),Le(h,{key:n.value})),r.value?(fu(),Le(w,{key:0,ref_key:"inputRef",ref:t,containerRef:r.value,setHistory:du(s),clearHistory:du(a),setCommand:du(o),setLastCommandIndex:du(c)},null,8,["containerRef","setHistory","clearHistory","setCommand","setLastCommandIndex"])):re("",!0)])],512)])])])}}};export{bc as default};
