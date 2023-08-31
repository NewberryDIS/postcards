import{_ as Ct,E as Dt,$ as He,M as Ne,c as ot,a as it,p as St}from"./q-013f8456.js";import{getWidth as Et}from"./q-a80ab938.js";import"./q-902e4364.js";function j(){}const qe=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function kt(t){return t()}function X(t){t.forEach(kt)}function Oe(t){return typeof t=="function"}function le(t,e){return t!=t?e==e:t!==e}function $t(t){return Object.keys(t).length===0}function At(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function pe(t,e,n){t.$$.on_destroy.push(At(e,n))}function Le(t){return t&&Oe(t.destroy)?t.destroy:j}let Be=()=>globalThis.performance.now(),Ve=t=>requestAnimationFrame(t);const he=new Set;function wt(t){he.forEach(e=>{e.c(t)||(he.delete(e),e.f())}),he.size!==0&&Ve(wt)}function Ze(t){let e;return he.size===0&&Ve(wt),{promise:new Promise(n=>{he.add(e={c:t,f:n})}),abort(){he.delete(e)}}}function Q(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode.removeChild(t)}function M(t){return document.createElement(t)}function Ot(t){return document.createTextNode(t)}function Re(){return Ot("")}function H(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n)}function N(t,e,n){t.classList[n?"add":"remove"](e)}function Lt(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}let ge,Ue=0,Ye={};function It(t,e,n,r,o,s,c,i=0){const l=16.666/r;let u=`{
`;for(let f=0;f<=1;f+=l){const a=e+(n-e)*s(f);u+=f*100+`%{${c(a,1-a)}}
`}const m=u+`100% {${c(n,1-n)}}
}`,p=`_bp_${Math.round(Math.random()*1e9)}_${i}`;if(!Ye[p]){if(!ge){const f=M("style");document.head.appendChild(f),ge=f.sheet}Ye[p]=!0,ge.insertRule(`@keyframes ${p} ${m}`,ge.cssRules.length)}const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${p} ${r}ms linear ${o}ms 1 both`,Ue+=1,p}function Xe(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?n=>n.indexOf(e)<0:n=>n.indexOf("_bp")===-1).join(", "),e&&!--Ue&&Rt()}function Rt(){Ve(()=>{if(Ue)return;let t=ge.cssRules.length;for(;t--;)ge.deleteRule(t);Ye={}})}let Ge;function ze(t){Ge=t}const ve=[],st=[],Se=[],ct=[],Ht=Promise.resolve();let Fe=!1;function Nt(){Fe||(Fe=!0,Ht.then(vt))}function re(t){Se.push(t)}const je=new Set;let De=0;function vt(){const t=Ge;do{for(;De<ve.length;){const e=ve[De];De++,ze(e),jt(e.$$)}for(ze(null),ve.length=0,De=0;st.length;)st.pop()();for(let e=0;e<Se.length;e+=1){const n=Se[e];je.has(n)||(je.add(n),n())}Se.length=0}while(ve.length);for(;ct.length;)ct.pop()();Fe=!1,je.clear(),ze(t)}function jt(t){if(t.fragment!==null){t.update(),X(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(re)}}let Ie;function zt(){return Ie||(Ie=Promise.resolve(),Ie.then(()=>{Ie=null})),Ie}function $e(t,e,n){t.dispatchEvent(Lt(`${e?"intro":"outro"}${n}`))}const Ee=new Set;let K;function oe(){K={r:0,c:[],p:K}}function ie(){K.r||X(K.c),K=K.p}function T(t,e){t&&t.i&&(Ee.delete(t),t.i(e))}function C(t,e,n,r){if(t&&t.o){if(Ee.has(t))return;Ee.add(t),K.c.push(()=>{Ee.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const Tt={duration:0};function Mt(t,e,n){let r=e(t,n),o=!1,s,c,i=0;function l(){s&&Xe(t,s)}function u(){const{delay:p=0,duration:h=300,easing:f=qe,tick:a=j,css:_}=r||Tt;_&&(s=It(t,0,1,h,p,f,_,i++)),a(0,1);const y=Be()+p,L=y+h;c&&c.abort(),o=!0,re(()=>$e(t,!0,"start")),c=Ze(W=>{if(o){if(W>=L)return a(1,0),$e(t,!0,"end"),l(),o=!1;if(W>=y){const k=f((W-y)/h);a(k,1-k)}}return o})}let m=!1;return{start(){m||(m=!0,Xe(t),Oe(r)?(r=r(),zt().then(u)):u())},invalidate(){m=!1},end(){o&&(l(),o=!1)}}}function _e(t,e,n){let r=e(t,n),o=!0,s;const c=K;c.r+=1;function i(){const{delay:l=0,duration:u=300,easing:m=qe,tick:p=j,css:h}=r||Tt;h&&(s=It(t,1,0,u,l,m,h));const f=Be()+l,a=f+u;re(()=>$e(t,!1,"start")),Ze(_=>{if(o){if(_>=a)return p(0,1),$e(t,!1,"end"),--c.r||X(c.c),!1;if(_>=f){const y=m((_-f)/u);p(1-y,y)}}return o})}return Oe(r)?zt().then(()=>{r=r(),i()}):i(),{end(l){l&&r.tick&&r.tick(1,0),o&&(s&&Xe(t,s),o=!1)}}}function be(t){t&&t.c()}function se(t,e,n,r){const{fragment:o,on_mount:s,on_destroy:c,after_update:i}=t.$$;o&&o.m(e,n),r||re(()=>{const l=s.map(kt).filter(Oe);c?c.push(...l):X(l),t.$$.on_mount=[]}),i.forEach(re)}function ce(t,e){const n=t.$$;n.fragment!==null&&(X(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(ve.push(t),Nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Te(t,e,n,r,o,s,c,i=[-1]){const l=Ge;ze(t);const u=t.$$={fragment:null,ctx:null,props:s,update:j,not_equal:o,bound:{},on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:{},dirty:i,skip_bound:!1,root:e.target||l.$$.root};c&&c(u.root);let m=!1;u.ctx=n?n(t,e.props||{},(p,h,...f)=>{const a=f.length?f[0]:h;return u.ctx&&o(u.ctx[p],u.ctx[p]=a)&&(!u.skip_bound&&u.bound[p]&&u.bound[p](a),m&&Wt(t,p)),h}):[],u.update(),m=!0,X(u.before_update),u.fragment=r?r(u.ctx):!1,e.target&&(u.fragment&&u.fragment.c(),se(t,e.target,e.anchor,e.customElement),vt()),ze(l)}class Me{$destroy(){ce(this,1),this.$destroy=j}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Je(t){const e=t-1;return e*e*e+1}function x(t,{delay:e=0,duration:n=400,easing:r=Je,x:o=0,y:s=0,opacity:c=0}={}){const i=getComputedStyle(t),l=+i.opacity,u=i.transform==="none"?"":i.transform,m=l*(1-c);return{delay:e,duration:n,easing:r,css:(p,h)=>`
			transform: ${u} translate(${(1-p)*o}px, ${(1-p)*s}px);
			opacity: ${l-m*h}`}}const me=[];function Ke(t,e=j){let n;const r=new Set;function o(i){if(le(t,i)&&(t=i,n)){const l=!me.length;for(const u of r)u[1](),me.push(u,t);if(l){for(let u=0;u<me.length;u+=2)me[u][0](me[u+1]);me.length=0}}}function s(i){o(i(t))}function c(i,l=j){const u=[i,l];return r.add(u),r.size===1&&(n=e(o)||j),i(t),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:o,update:s,subscribe:c}}function Pt(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(Array.isArray(t)){const r=e.map((o,s)=>Pt(t[s],o));return o=>r.map(s=>s(o))}if(n==="number"){const r=e-t;return o=>t+o*r}}function ut(t,e={}){const n=Ke(t);let r,o=t;function s(c,i){if(t==null)return n.set(t=c),Promise.resolve();o=c;let l=r,u=!1,{delay:m=0,duration:p=400,easing:h=qe,interpolate:f=Pt}=lt(lt({},e),i);if(p===0)return l&&(l.abort(),l=null),n.set(t=o),Promise.resolve();const a=Be()+m;let _;return r=Ze(y=>{if(y<a)return!0;u||(_=f(t,c),typeof p=="function"&&(p=p(t,c)),u=!0),l&&(l.abort(),l=null);const L=y-a;return L>p?(n.set(t=c),!1):(n.set(t=_(h(L/p))),!0)}),r.promise}return{set:s,update:(c,i)=>s(c(o,t),i),subscribe:n.subscribe}}const Ae=Ke(0);var yt;const Yt=(yt=globalThis.matchMedia)==null?void 0:yt.call(globalThis,"(prefers-reduced-motion: reduce)").matches,We=t=>({easing:Je,duration:Yt?0:t});function ft(t){let e,n,r,o,s=!t[2]&&at();return{c(){e=M("div"),s&&s.c(),v(e,"class","bp-load"),E(e,"background-image","url("+t[0]+")")},m(c,i){A(c,e,i),s&&s.m(e,null),o=!0},p(c,i){t=c,t[2]?s&&(s.d(1),s=null):s||(s=at(),s.c(),s.m(e,null)),(!o||i&1)&&E(e,"background-image","url("+t[0]+")")},i(c){o||(re(()=>{r&&r.end(1),n=Mt(e,x,{duration:t[1]?400:0}),n.start()}),o=!0)},o(c){n&&n.invalidate(),c&&(r=_e(e,x,{duration:480})),o=!1},d(c){c&&O(e),s&&s.d(),c&&r&&r.end()}}}function at(t){let e,n;return{c(){e=M("span"),n=M("span"),v(e,"class","bp-bar"),v(n,"class","bp-o")},m(r,o){A(r,e,o),A(r,n,o)},d(r){r&&O(e),r&&O(n)}}}function Xt(t){let e,n=(!t[1]||t[2])&&ft(t);return{c(){n&&n.c(),e=Re()},m(r,o){n&&n.m(r,o),A(r,e,o)},p(r,[o]){!r[1]||r[2]?n?(n.p(r,o),o&6&&T(n,1)):(n=ft(r),n.c(),T(n,1),n.m(e.parentNode,e)):n&&(oe(),C(n,1,1,()=>{n=null}),ie())},i(r){T(n)},o(r){C(n)},d(r){n&&n.d(r),r&&O(e)}}}function Ft(t,e,n){let r;pe(t,Ae,c=>n(2,r=c));let{thumb:o}=e,{loaded:s}=e;return t.$$set=c=>{"thumb"in c&&n(0,o=c.thumb),"loaded"in c&&n(1,s=c.loaded)},[o,s,r]}class Qe extends Me{constructor(e){super(),Te(this,e,Ft,Xt,le,{thumb:0,loaded:1})}}function dt(t){let e,n,r,o,s,c;return{c(){e=M("img"),v(e,"srcset",t[7].img),v(e,"sizes",n=t[8].sizes||`${t[1]}px`),v(e,"alt",t[7].alt)},m(i,l){A(i,e,l),o=!0,s||(c=H(e,"error",t[26]),s=!0)},p(i,l){(!o||l[0]&2&&n!==(n=i[8].sizes||`${i[1]}px`))&&v(e,"sizes",n)},i(i){o||(r&&r.end(1),o=!0)},o(i){r=_e(e,x,{}),o=!1},d(i){i&&O(e),i&&r&&r.end(),s=!1,c()}}}function mt(t){let e,n;return e=new Qe({props:{thumb:t[7].thumb,loaded:t[2]}}),{c(){be(e.$$.fragment)},m(r,o){se(e,r,o),n=!0},p(r,o){const s={};o[0]&4&&(s.loaded=r[2]),e.$set(s)},i(r){n||(T(e.$$.fragment,r),n=!0)},o(r){C(e.$$.fragment,r),n=!1},d(r){ce(e,r)}}}function qt(t){let e,n,r,o,s,c,i=t[2]&&dt(t),l=t[3]&&mt(t);return{c(){e=M("div"),n=M("div"),i&&i.c(),r=Re(),l&&l.c(),v(n,"class","bp-img"),E(n,"background-image","url("+t[7].thumb+")"),E(n,"width",t[0][0]+"px"),E(n,"height",t[0][1]+"px"),E(n,"transform","translate3d("+(t[0][0]/-2+t[6][0])+"px, "+(t[0][1]/-2+t[6][1])+"px, 0)"),N(n,"bp-drag",t[4]),N(n,"bp-canzoom",t[11]>1&&t[0][0]<t[12]),v(e,"class","bp-img-wrap"),N(e,"bp-close",t[5])},m(u,m){A(u,e,m),Q(e,n),i&&i.m(n,null),Q(n,r),l&&l.m(n,null),o=!0,s||(c=[Le(t[20].call(null,n)),H(e,"wheel",t[15]),H(e,"pointerdown",t[16]),H(e,"pointermove",t[17]),H(e,"pointerup",t[19]),H(e,"pointercancel",t[18])],s=!0)},p(u,m){u[2]?i?(i.p(u,m),m[0]&4&&T(i,1)):(i=dt(u),i.c(),T(i,1),i.m(n,r)):i&&(oe(),C(i,1,1,()=>{i=null}),ie()),u[3]?l?(l.p(u,m),m[0]&8&&T(l,1)):(l=mt(u),l.c(),T(l,1),l.m(n,null)):l&&(oe(),C(l,1,1,()=>{l=null}),ie()),(!o||m[0]&1)&&E(n,"width",u[0][0]+"px"),(!o||m[0]&1)&&E(n,"height",u[0][1]+"px"),(!o||m[0]&65)&&E(n,"transform","translate3d("+(u[0][0]/-2+u[6][0])+"px, "+(u[0][1]/-2+u[6][1])+"px, 0)"),m[0]&16&&N(n,"bp-drag",u[4]),m[0]&6145&&N(n,"bp-canzoom",u[11]>1&&u[0][0]<u[12]),m[0]&32&&N(e,"bp-close",u[5])},i(u){o||(T(i),T(l),o=!0)},o(u){C(i),C(l),o=!1},d(u){u&&O(e),i&&i.d(),l&&l.d(),s=!1,X(c)}}}function Bt(t,e,n){let r,o,s,c;pe(t,Ae,d=>n(25,s=d));let{props:i}=e,{smallScreen:l}=e,{activeItem:u,opts:m,prev:p,next:h,zoomed:f,container:a}=i;pe(t,f,d=>n(24,r=d));let _=u.maxZoom||m.maxZoom||10,y=i.calculateDimensions(u),L=y[0],W,k,Y,ee,U=0,D,G,ue,fe,Pe,ae,Ce;const te=+u.width,ye=[],ne=new Map,J=ut(y,We(400));pe(t,J,d=>n(0,c=d));const F=ut([0,0],We(400));pe(t,F,d=>n(6,o=d));const ke=([d,I],P=c)=>{const w=(P[0]-a.w)/2,$=(P[1]-a.h)/2;return w<0?d=0:d>w?l?(d=D?w+(d-w)/10:w,d>w+20&&n(4,D=p())):d=w:d<-w&&(l?(d=D?-w-(-w-d)/10:-w,d<-w-20&&n(4,D=h())):d=-w),$<0?I=0:I>$?I=$:I<-$&&(I=-$),[d,I]};function de(d=_,I){if(s)return;const P=y[0]*_;let w=c[0]+c[0]*d,$=c[1]+c[1]*d;if(d>0)w>P&&(w=P,$=y[1]*_),w>te&&(w=te,$=+u.height);else if(w<y[0])return J.set(y),F.set([0,0]);let{x:Z,y:we,width:xe,height:et}=ee.getBoundingClientRect();const tt=I?I.clientX-Z-xe/2:0,nt=I?I.clientY-we-et/2:0;Z=-tt*(w/xe)+tt,we=-nt*($/et)+nt;const rt=[w,$];J.set(rt).then(()=>{n(1,L=Math.round(Math.max(L,w)))}),F.set(ke([o[0]+Z,o[1]+we],rt))}Object.defineProperty(u,"zoom",{configurable:!0,get:()=>r,set:d=>de(d?_:-_)});const g=d=>{m.inline&&!r||(d.preventDefault(),de(d.deltaY/-300,d))},b=d=>{d.button!==2&&(d.preventDefault(),n(4,D=!0),ne.set(d.pointerId,d),ue=d.clientX,fe=d.clientY,Pe=o[0],ae=o[1])},z=d=>{var w;if(ne.size>1)return n(4,D=!1),((w=m.noPinch)==null?void 0:w.call(m,a.el))||S(d);if(!D)return;let I=d.clientX,P=d.clientY;G=ye.push({x:I,y:P})>2,I=I-ue,P=P-fe,r||(P<-90&&n(4,D=!m.noClose&&i.close()),Math.abs(P)<30&&(I>40&&n(4,D=p()),I<-40&&n(4,D=h()))),r&&G&&!s&&F.set(ke([Pe+I,ae+P]),{duration:0})},S=d=>{const[I,P]=ne.set(d.pointerId,d).values(),w=I.clientX-P.clientX,$=I.clientY-P.clientY,Z=Math.hypot(w,$);Y=Y||{clientX:(I.clientX+P.clientX)/2,clientY:(I.clientY+P.clientY)/2},de(((U||Z)-Z)/-35,Y),U=Z},B=d=>ne.delete(d.pointerId);function R(d){var I;if(B(d),Y&&(n(4,D=U=0),Y=ne.size?Y:null),!!D){if(n(4,D=!1),d.target===this&&!m.noClose)return i.close();if(G){const[P,w,$]=ye.slice(-3),Z=w.x-$.x,we=w.y-$.y;Math.hypot(Z,we)>5&&F.set(ke([o[0]-(P.x-$.x)*5,o[1]-(P.y-$.y)*5]))}else(I=m.onImageClick)!=null&&I.call(m,a.el,u)||de(r?-_:_,d);G=!1,ye.length=0}}const q=d=>{ee=d,i.setResizeFunc(()=>{n(23,y=i.calculateDimensions(u)),(m.inline||!l)&&(J.set(y),F.set([0,0]))}),i.loadImage(u).then(()=>{n(2,W=!0),i.preloadNext()}),setTimeout(()=>{n(3,k=!W)},250)},V=d=>{var I;return(I=m.onError)==null?void 0:I.call(m,a,u,d)};return t.$$set=d=>{"smallScreen"in d&&n(22,l=d.smallScreen)},t.$$.update=()=>{if(t.$$.dirty[0]&8388609&&f.set(c[0]-10>y[0]),t.$$.dirty[0]&58720256&&s&&r&&!m.intro){const d=We(480);F.set([0,0],d),J.set(y,d),n(5,Ce=!0)}},[c,L,W,k,D,Ce,o,u,m,f,a,_,te,J,F,g,b,z,B,R,q,i,l,y,r,s,V]}class Vt extends Me{constructor(e){super(),Te(this,e,Bt,qt,le,{props:21,smallScreen:22},null,[-1,-1])}}function Zt(t){let e,n,r,o,s,c;return r=new Qe({props:{thumb:t[2].thumb,loaded:t[0]}}),{c(){e=M("div"),n=M("iframe"),be(r.$$.fragment),v(n,"allow","autoplay; fullscreen"),v(n,"title",t[2].title),v(e,"class","bp-if"),E(e,"width",t[1][0]+"px"),E(e,"height",t[1][1]+"px")},m(i,l){A(i,e,l),Q(e,n),se(r,e,null),o=!0,s||(c=[Le(t[3].call(null,n)),H(n,"load",t[5])],s=!0)},p(i,[l]){const u={};l&1&&(u.loaded=i[0]),r.$set(u),(!o||l&2)&&E(e,"width",i[1][0]+"px"),(!o||l&2)&&E(e,"height",i[1][1]+"px")},i(i){o||(T(r.$$.fragment,i),o=!0)},o(i){C(r.$$.fragment,i),o=!1},d(i){i&&O(e),ce(r),s=!1,X(c)}}}function Ut(t,e,n){let{props:r}=e,o,s;const{activeItem:c}=r,i=()=>n(1,s=r.calculateDimensions(c));return i(),r.setResizeFunc(i),[o,s,c,m=>m.src=c.iframe,r,()=>n(0,o=!0)]}class Gt extends Me{constructor(e){super(),Te(this,e,Ut,Zt,le,{props:4})}}function Jt(t){let e,n,r,o,s;return n=new Qe({props:{thumb:t[2].thumb,loaded:t[0]}}),{c(){e=M("div"),be(n.$$.fragment),v(e,"class","bp-vid"),E(e,"width",t[1][0]+"px"),E(e,"height",t[1][1]+"px"),E(e,"background-image","url("+t[2].thumb+")")},m(c,i){A(c,e,i),se(n,e,null),r=!0,o||(s=Le(t[3].call(null,e)),o=!0)},p(c,[i]){const l={};i&1&&(l.loaded=c[0]),n.$set(l),(!r||i&2)&&E(e,"width",c[1][0]+"px"),(!r||i&2)&&E(e,"height",c[1][1]+"px")},i(c){r||(T(n.$$.fragment,c),r=!0)},o(c){C(n.$$.fragment,c),r=!1},d(c){c&&O(e),ce(n),o=!1,s()}}}function Kt(t,e,n){let{props:r}=e,o,s;const{activeItem:c,opts:i,container:l}=r,u=()=>n(1,s=r.calculateDimensions(c));u(),r.setResizeFunc(u);const m=(h,f)=>{for(const a in f)v(h,a,f[a])};return[o,s,c,h=>{let f;const a=(_,y)=>{var L;Array.isArray(y)||(y=JSON.parse(y));for(const W of y){f||(f=M((L=W.type)!=null&&L.includes("audio")?"audio":"video"),m(f,{controls:!0,autoplay:!0,playsinline:!0,tabindex:"0"}));const k=M(_);m(k,W),_=="source"&&H(k,"error",Y=>{var ee;return(ee=i.onError)==null?void 0:ee.call(i,l,c,Y)}),Q(f,k)}};a("source",c.sources),a("track",c.tracks||[]),H(f,"canplay",()=>n(0,o=!0)),Q(h,f)},r]}class Qt extends Me{constructor(e){super(),Te(this,e,Kt,Jt,le,{props:4})}}function pt(t){let e,n,r,o=t[6].i,s,c,i,l,u,m,p=ht(t),h=t[0].length>1&&_t(t);return{c(){e=M("div"),n=M("div"),p.c(),s=M("div"),c=M("button"),h&&h.c(),v(c,"class","bp-x"),v(c,"title","Close"),v(c,"aria-label","Close"),v(s,"class","bp-controls"),v(e,"class","bp-wrap"),N(e,"bp-zoomed",t[10]),N(e,"bp-inline",t[8]),N(e,"bp-small",t[7]),N(e,"bp-noclose",t[5].noClose)},m(f,a){A(f,e,a),Q(e,n),p.m(e,null),Q(e,s),Q(s,c),h&&h.m(s,null),l=!0,u||(m=[H(c,"click",t[1]),Le(t[14].call(null,e))],u=!0)},p(f,a){a[0]&64&&le(o,o=f[6].i)?(oe(),C(p,1,1,j),ie(),p=ht(f),p.c(),T(p),p.m(e,s)):p.p(f,a),f[0].length>1?h?h.p(f,a):(h=_t(f),h.c(),h.m(s,null)):h&&(h.d(1),h=null),a[0]&1024&&N(e,"bp-zoomed",f[10]),a[0]&256&&N(e,"bp-inline",f[8]),a[0]&128&&N(e,"bp-small",f[7]),a[0]&32&&N(e,"bp-noclose",f[5].noClose)},i(f){l||(r&&r.end(1),T(p),i&&i.end(1),l=!0)},o(f){r=_e(n,x,{duration:480}),C(p),i=_e(s,x,{}),l=!1},d(f){f&&O(e),f&&r&&r.end(),p.d(f),h&&h.d(),f&&i&&i.end(),u=!1,X(m)}}}function xt(t){let e,n=t[6].html+"";return{c(){e=M("div"),v(e,"class","bp-html")},m(r,o){A(r,e,o),e.innerHTML=n},p(r,o){o[0]&64&&n!==(n=r[6].html+"")&&(e.innerHTML=n)},i:j,o:j,d(r){r&&O(e)}}}function en(t){let e,n;return e=new Gt({props:{props:t[13]()}}),{c(){be(e.$$.fragment)},m(r,o){se(e,r,o),n=!0},p:j,i(r){n||(T(e.$$.fragment,r),n=!0)},o(r){C(e.$$.fragment,r),n=!1},d(r){ce(e,r)}}}function tn(t){let e,n;return e=new Qt({props:{props:t[13]()}}),{c(){be(e.$$.fragment)},m(r,o){se(e,r,o),n=!0},p:j,i(r){n||(T(e.$$.fragment,r),n=!0)},o(r){C(e.$$.fragment,r),n=!1},d(r){ce(e,r)}}}function nn(t){let e,n;return e=new Vt({props:{props:t[13](),smallScreen:t[7]}}),{c(){be(e.$$.fragment)},m(r,o){se(e,r,o),n=!0},p(r,o){const s={};o[0]&128&&(s.smallScreen=r[7]),e.$set(s)},i(r){n||(T(e.$$.fragment,r),n=!0)},o(r){C(e.$$.fragment,r),n=!1},d(r){ce(e,r)}}}function gt(t){let e,n=t[6].caption+"",r,o;return{c(){e=M("div"),v(e,"class","bp-cap")},m(s,c){A(s,e,c),e.innerHTML=n,o=!0},p(s,c){(!o||c[0]&64)&&n!==(n=s[6].caption+"")&&(e.innerHTML=n)},i(s){o||(r&&r.end(1),o=!0)},o(s){r=_e(e,x,{duration:200}),o=!1},d(s){s&&O(e),s&&r&&r.end()}}}function ht(t){let e,n,r,o,s,c,i,l,u;const m=[nn,tn,en,xt],p=[];function h(a,_){return a[6].img?0:a[6].sources?1:a[6].iframe?2:3}n=h(t),r=p[n]=m[n](t);let f=t[6].caption&&gt(t);return{c(){e=M("div"),r.c(),f&&f.c(),c=Re(),v(e,"class","bp-inner")},m(a,_){A(a,e,_),p[n].m(e,null),f&&f.m(a,_),A(a,c,_),i=!0,l||(u=[H(e,"pointerdown",t[21]),H(e,"pointerup",t[22])],l=!0)},p(a,_){let y=n;n=h(a),n===y?p[n].p(a,_):(oe(),C(p[y],1,1,()=>{p[y]=null}),ie(),r=p[n],r?r.p(a,_):(r=p[n]=m[n](a),r.c()),T(r,1),r.m(e,null)),a[6].caption?f?(f.p(a,_),_[0]&64&&T(f,1)):(f=gt(a),f.c(),T(f,1),f.m(c.parentNode,c)):f&&(oe(),C(f,1,1,()=>{f=null}),ie())},i(a){i||(T(r),re(()=>{s&&s.end(1),o=Mt(e,t[12],!0),o.start()}),T(f),i=!0)},o(a){C(r),o&&o.invalidate(),s=_e(e,t[12],!1),C(f),i=!1},d(a){a&&O(e),p[n].d(),a&&s&&s.end(),f&&f.d(a),a&&O(c),l=!1,X(u)}}}function _t(t){let e,n=`${t[4]+1} / ${t[0].length}`,r,o,s,c;return{c(){e=M("div"),r=M("button"),o=M("button"),v(e,"class","bp-count"),v(r,"class","bp-prev"),v(r,"title","Previous"),v(r,"aria-label","Previous"),v(o,"class","bp-next"),v(o,"title","Next"),v(o,"aria-label","Next")},m(i,l){A(i,e,l),e.innerHTML=n,A(i,r,l),A(i,o,l),s||(c=[H(r,"click",t[2]),H(o,"click",t[3])],s=!0)},p(i,l){l[0]&17&&n!==(n=`${i[4]+1} / ${i[0].length}`)&&(e.innerHTML=n)},d(i){i&&O(e),i&&O(r),i&&O(o),s=!1,X(c)}}}function rn(t){let e,n,r=t[0]&&pt(t);return{c(){r&&r.c(),e=Re()},m(o,s){r&&r.m(o,s),A(o,e,s),n=!0},p(o,s){o[0]?r?(r.p(o,s),s[0]&1&&T(r,1)):(r=pt(o),r.c(),T(r,1),r.m(e.parentNode,e)):r&&(oe(),C(r,1,1,()=>{r=null}),ie())},i(o){n||(T(r),n=!0)},o(o){C(r),n=!1},d(o){r&&r.d(o),o&&O(e)}}}function on(t,e,n){let r,{items:o=void 0}=e,{target:s=void 0}=e;const c=document.documentElement;let i,l,u,m,p,h,f,a,_,y,L;const W=g=>L=g,k={},Y=Ke(0);pe(t,Y,g=>n(10,r=g));const ee=g=>{n(5,l=g),n(8,h=l.inline);const b=l.items;!h&&c.scrollHeight>c.clientHeight&&c.classList.add("bp-lock"),m=document.activeElement,n(20,k.w=s.offsetWidth,k),n(20,k.h=s===document.body?globalThis.innerHeight:s.clientHeight,k),n(7,p=k.w<769),n(4,i=l.position||0),Array.isArray(b)?n(0,o=b.map((z,S)=>(l.el&&l.el===z.element&&n(4,i=S),{i:S,...z}))):n(0,o=(b.length?[...b]:[b]).map((z,S)=>(l.el===z&&n(4,i=S),{element:z,i:S,...z.dataset})))},U=()=>{var g;(g=l.onClose)==null||g.call(l,k.el,_),Ae.set(!0),n(0,o=null),m==null||m.focus({preventScroll:!0})},D=()=>ue(i-1),G=()=>ue(i+1),ue=g=>{f=g-i,n(4,i=fe(g))},fe=g=>(g+o.length)%o.length,Pe=g=>{const{key:b,shiftKey:z}=g;if(b==="Escape")!l.noClose&&U();else if(b==="ArrowRight")G();else if(b==="ArrowLeft")D();else if(b==="Tab"){const{activeElement:S}=document;if(z||!S.controls){g.preventDefault();const{focusWrap:B=k.el}=l,R=[...B.querySelectorAll("*")].filter(V=>V.tabIndex>=0);let q=R.indexOf(S);q+=R.length+(z?-1:1),R[q%R.length].focus()}}},ae=({width:g=1920,height:b=1080})=>{const{scale:z=.99}=l,S=Math.min(1,k.w/g*z,k.h/b*z);return[Math.round(g*S),Math.round(b*S)]},Ce=()=>{if(o){const g=o[fe(i+1)],b=o[fe(i-1)];!g.preload&&te(g),!b.preload&&te(b)}},te=g=>{if(g.img){const b=M("img");return b.sizes=l.sizes||`${ae(g)[0]}px`,b.srcset=g.img,g.preload=!0,b.decode().catch(z=>{})}},ye=(g,b)=>!u||!o?(n(18,u=b),l.intro?x(g,{y:b?10:-10}):ne(g)):x(g,{x:(f>0?20:-20)*(b?1:-1),duration:250}),ne=g=>{let b;if(y){const V=g.firstChild.firstChild;b=[V.clientWidth,V.clientHeight]}else b=ae(_);const z=(_.element||m).getBoundingClientRect(),S=z.left-(k.w-z.width)/2,B=z.top-(k.h-z.height)/2,R=z.width/b[0],q=z.height/b[1];return{duration:480,easing:Je,css:(V,d)=>`transform:translate3d(${S*d}px, ${B*d}px, 0) scale3d(${R+V*(1-R)}, ${q+V*(1-q)}, 1)`}},J=()=>({activeItem:_,calculateDimensions:ae,loadImage:te,preloadNext:Ce,opts:l,prev:D,next:G,close:U,setResizeFunc:W,zoomed:Y,container:k}),F=g=>{var B;n(20,k.el=g,k);let b,z;(B=l.onOpen)==null||B.call(l,k.el,_),h||(b=H(globalThis,"keydown",Pe));const S=new ResizeObserver(R=>{var q;z&&(n(20,k.w=R[0].contentRect.width,k),n(20,k.h=R[0].contentRect.height,k),n(7,p=k.w<769),L==null||L(),(q=l.onResize)==null||q.call(l,k.el,_)),z=!0});return S.observe(g),{destroy(){var R;S.disconnect(),b==null||b(),Ae.set(!1),c.classList.remove("bp-lock"),(R=l.onClosed)==null||R.call(l)}}},ke=g=>n(9,a=g.target),de=function(g){g.button!==2&&g.target===this&&a===this&&!l.noClose&&U()};return t.$$set=g=>{"items"in g&&n(0,o=g.items),"target"in g&&n(15,s=g.target)},t.$$.update=()=>{var g;t.$$.dirty[0]&1835121&&o&&(n(6,_=o[i]),n(19,y=_.hasOwnProperty("html")),u&&(y&&W(null),(g=l.onUpdate)==null||g.call(l,k.el,_)))},[o,U,D,G,i,l,_,p,h,a,r,Y,ye,J,F,s,ee,ue,u,y,k,ke,de]}class ln extends Me{constructor(e){super(),Te(this,e,on,rn,le,{items:0,target:15,open:16,close:1,prev:2,next:3,setPosition:17},null,[-1,-1])}get items(){return this.$$.ctx[0]}get target(){return this.$$.ctx[15]}get open(){return this.$$.ctx[16]}get close(){return this.$$.ctx[1]}get prev(){return this.$$.ctx[2]}get next(){return this.$$.ctx[3]}get setPosition(){return this.$$.ctx[17]}}function sn(t){return new ln({...t,props:t})}const cn=()=>{const t=sn({target:document.body}),e=document.querySelectorAll("#images > a");console.log("imageLinks",e),console.log("idocument.querySelectorAll(#images > a",document.querySelectorAll("#images > a"));for(const r of e)r.addEventListener("click",n);function n(r){console.log(r.currentTarget),r.preventDefault(),r.currentTarget!==null&&t.open({intro:"fadeup",items:e,el:r.currentTarget})}},un=t=>(Ct(ot(()=>it(()=>Promise.resolve().then(()=>bt),void 0),"s_52gzBgvIN04")),Dt(ot(()=>it(()=>Promise.resolve().then(()=>bt),void 0),"s_komuIAt92hc")),He("div",null,{class:"horiz",id:"images"},t.data.map(e=>He("a",{"data-caption":`${e.title} | View at <a href="https://collections.newberry.org/asset-management/${e.image}" target="_blank">Newberry Digital Collections</a>`,"data-height":Ne(e,"height"),"data-img":`https://collections.newberry.org/IIIF3/Image/${e.image}/full/,${Math.min(parseInt(e.height),600)}/0/default.jpg 600w, https://collections.newberry.org/IIIF3/Image/${e.image}/full/,${Math.min(parseInt(e.height),1e3)}/0/default.jpg 1000w, https://collections.newberry.org/IIIF3/Image/${e.image}/full/max/0/default.jpg 2500w`,"data-thumb":`https://collections.newberry.org/IIIF3/Image/${e.image}/full/max/0/default.jpg`,"data-width":Ne(e,"width"),href:`https://collections.newberry.org/IIIF3/Image/${e.image}/full/max/0/default.jpg`},null,He("img",{alt:Ne(e,"imageTitle"),src:`https://collections.newberry.org/IIIF3/Image/${e.image}/full/,300/0/default.jpg`,width:Et(parseInt(e.width),parseInt(e.height))},{height:"300"},null,3,null),1,e.image)),1,"qh_0")),fn=`.horiz{display:flex;flex-flow:row wrap;gap:8px}.vert{columns:250px;column-gap:20px}.tile{position:relative;height:300px;display:inline-block;border:1px solid rgb(var(--fg-color-1))}.tile h3{position:absolute;left:0;bottom:0;right:0;margin:0;padding:8px;display:flex;color:rgb(var(--bg-color-1))}.tile:not(.empty-tile) h3{justify-content:flex-end;align-items:flex-end}.nhgals,.hgals,.horiz{margin:32px}.empty-tile{min-width:200px}.empty-tile h3{justify-content:center;align-items:center;top:0;text-align:center;background:rgb(var(--fg-color-2))}.nhtile.tile:not(.empty-tile) h3{background:rgb(var(--fg-color-1))}.htile h3{background:rgb(var(--park-green))}
`,an=fn,bt=Object.freeze(Object.defineProperty({__proto__:null,_hW:St,s_52gzBgvIN04:an,s_MMfHp7gWCZ4:un,s_komuIAt92hc:cn},Symbol.toStringTag,{value:"Module"}));export{St as _hW,an as s_52gzBgvIN04,un as s_MMfHp7gWCZ4,cn as s_komuIAt92hc};
