import{r as b,t as o,n as j,L as ri,j as d,a as bs,u as It,b as ai,s as ws,c as oi,d as xs,g as li,e as ci,f as ui,N as di,h as fi,O as hi}from"./index-95628fc1.js";import{C as mi}from"./Container-7001a1ce.js";import{G as Oe,I as yt,F as pi,c as gi,a as Le,p as vi,b as yi,n as me,d as bi,e as Be,L as Ue,f as Ne,E as De,g as qe,P as Qt,h as Ht,i as Wt,B as wi,j as _s,k as ks}from"./PasswordInput.styled-39d88c20.js";import{R as xi,a as _i,b as ki}from"./index.esm-7ee6dba0.js";import{I as Si}from"./index.esm-ee41b0ed.js";function $i(e){return Oe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"}}]})(e)}var Pi=typeof window<"u",ji=function(e,t){return t!==void 0?t:Pi?window.matchMedia(e).matches:!1},Ai=function(e,t){var s=b.useState(ji(e,t)),i=s[0],n=s[1];return b.useEffect(function(){var r=!0,a=window.matchMedia(e),l=function(){r&&n(!!a.matches)};return a.addListener(l),n(a.matches),function(){r=!1,a.removeListener(l)}},[e]),i};const dt=Ai,Ss=()=>{const[e,t]=b.useState(null),s=dt(o.mediaBreakpoints.mobile.media),i=dt(o.mediaBreakpoints.tablet.media),n=dt(o.mediaBreakpoints.desktop.media);return b.useEffect(()=>{s&&t("mobile"),i&&t("tablet"),n&&t("desktop")},[n,s,i]),{MediaType:e}},Ii=j(ri)`
  display: flex;
  align-items: center;
`,Ci=j.span`
  font-size: ${o.fontSizes.xl};
  font-weight: ${o.fontWeights.bold};
  color: ${o.colors.background};
  margin-left: ${o.space[2]};
`,Mi=()=>{const{MediaType:e}=Ss();return d.jsxs(Ii,{to:"/",children:[d.jsx($i,{size:e==="mobile"?32:52,color:o.colors.background}),e!=="mobile"&&d.jsx(Ci,{children:"Shopping"})]})};var Ei=Object.defineProperty,Ri=(e,t)=>{for(var s in t)Ei(e,s,{get:t[s],enumerable:!0})},W={};Ri(W,{assign:()=>Ti,colors:()=>ae,createStringInterpolator:()=>Tt,skipAnimation:()=>Ms,to:()=>Cs,willAdvance:()=>zt});var Ct=Te(),x=e=>Fe(e,Ct),Mt=Te();x.write=e=>Fe(e,Mt);var st=Te();x.onStart=e=>Fe(e,st);var Et=Te();x.onFrame=e=>Fe(e,Et);var Rt=Te();x.onFinish=e=>Fe(e,Rt);var fe=[];x.setTimeout=(e,t)=>{const s=x.now()+t,i=()=>{const r=fe.findIndex(a=>a.cancel==i);~r&&fe.splice(r,1),re-=~r?1:0},n={time:s,handler:e,cancel:i};return fe.splice($s(s),0,n),re+=1,Ps(),n};var $s=e=>~(~fe.findIndex(t=>t.time>e)||~fe.length);x.cancel=e=>{st.delete(e),Et.delete(e),Rt.delete(e),Ct.delete(e),Mt.delete(e)};x.sync=e=>{bt=!0,x.batchedUpdates(e),bt=!1};x.throttle=e=>{let t;function s(){try{e(...t)}finally{t=null}}function i(...n){t=n,x.onStart(s)}return i.handler=e,i.cancel=()=>{st.delete(s),t=null},i};var Ot=typeof window<"u"?window.requestAnimationFrame:()=>{};x.use=e=>Ot=e;x.now=typeof performance<"u"?()=>performance.now():Date.now;x.batchedUpdates=e=>e();x.catch=console.error;x.frameLoop="always";x.advance=()=>{x.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):As()};var ne=-1,re=0,bt=!1;function Fe(e,t){bt?(t.delete(e),e(0)):(t.add(e),Ps())}function Ps(){ne<0&&(ne=0,x.frameLoop!=="demand"&&Ot(js))}function Oi(){ne=-1}function js(){~ne&&(Ot(js),x.batchedUpdates(As))}function As(){const e=ne;ne=x.now();const t=$s(ne);if(t&&(Is(fe.splice(0,t),s=>s.handler()),re-=t),!re){Oi();return}st.flush(),Ct.flush(e?Math.min(64,ne-e):16.667),Et.flush(),Mt.flush(),Rt.flush()}function Te(){let e=new Set,t=e;return{add(s){re+=t==e&&!e.has(s)?1:0,e.add(s)},delete(s){return re-=t==e&&e.has(s)?1:0,e.delete(s)},flush(s){t.size&&(e=new Set,re-=t.size,Is(t,i=>i(s)&&e.add(i)),re+=e.size,t=e)}}}function Is(e,t){e.forEach(s=>{try{t(s)}catch(i){x.catch(i)}})}function wt(){}var Fi=(e,t,s)=>Object.defineProperty(e,t,{value:s,writable:!0,configurable:!0}),u={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0};function te(e,t){if(u.arr(e)){if(!u.arr(t)||e.length!==t.length)return!1;for(let s=0;s<e.length;s++)if(e[s]!==t[s])return!1;return!0}return e===t}var _=(e,t)=>e.forEach(t);function J(e,t,s){if(u.arr(e)){for(let i=0;i<e.length;i++)t.call(s,e[i],`${i}`);return}for(const i in e)e.hasOwnProperty(i)&&t.call(s,e[i],i)}var T=e=>u.und(e)?[]:u.arr(e)?e:[e];function _e(e,t){if(e.size){const s=Array.from(e);e.clear(),_(s,t)}}var xe=(e,...t)=>_e(e,s=>s(...t)),Ft=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Tt,Cs,ae=null,Ms=!1,zt=wt,Ti=e=>{e.to&&(Cs=e.to),e.now&&(x.now=e.now),e.colors!==void 0&&(ae=e.colors),e.skipAnimation!=null&&(Ms=e.skipAnimation),e.createStringInterpolator&&(Tt=e.createStringInterpolator),e.requestAnimationFrame&&x.use(e.requestAnimationFrame),e.batchedUpdates&&(x.batchedUpdates=e.batchedUpdates),e.willAdvance&&(zt=e.willAdvance),e.frameLoop&&(x.frameLoop=e.frameLoop)},ke=new Set,D=[],ft=[],Ze=0,it={get idle(){return!ke.size&&!D.length},start(e){Ze>e.priority?(ke.add(e),x.onStart(zi)):(Es(e),x(xt))},advance:xt,sort(e){if(Ze)x.onFrame(()=>it.sort(e));else{const t=D.indexOf(e);~t&&(D.splice(t,1),Rs(e))}},clear(){D=[],ke.clear()}};function zi(){ke.forEach(Es),ke.clear(),x(xt)}function Es(e){D.includes(e)||Rs(e)}function Rs(e){D.splice(Vi(D,t=>t.priority>e.priority),0,e)}function xt(e){const t=ft;for(let s=0;s<D.length;s++){const i=D[s];Ze=i.priority,i.idle||(zt(i),i.advance(e),i.idle||t.push(i))}return Ze=0,ft=D,ft.length=0,D=t,D.length>0}function Vi(e,t){const s=e.findIndex(t);return s<0?e.length:s}var Li=(e,t,s)=>Math.min(Math.max(s,e),t),Bi={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},H="[-+]?\\d*\\.?\\d+",Je=H+"%";function nt(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Ui=new RegExp("rgb"+nt(H,H,H)),Ni=new RegExp("rgba"+nt(H,H,H,H)),Di=new RegExp("hsl"+nt(H,Je,Je)),qi=new RegExp("hsla"+nt(H,Je,Je,H)),Qi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Hi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Wi=/^#([0-9a-fA-F]{6})$/,Gi=/^#([0-9a-fA-F]{8})$/;function Ki(e){let t;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Wi.exec(e))?parseInt(t[1]+"ff",16)>>>0:ae&&ae[e]!==void 0?ae[e]:(t=Ui.exec(e))?(ue(t[1])<<24|ue(t[2])<<16|ue(t[3])<<8|255)>>>0:(t=Ni.exec(e))?(ue(t[1])<<24|ue(t[2])<<16|ue(t[3])<<8|Zt(t[4]))>>>0:(t=Qi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Gi.exec(e))?parseInt(t[1],16)>>>0:(t=Hi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Di.exec(e))?(Gt(Kt(t[1]),Qe(t[2]),Qe(t[3]))|255)>>>0:(t=qi.exec(e))?(Gt(Kt(t[1]),Qe(t[2]),Qe(t[3]))|Zt(t[4]))>>>0:null}function ht(e,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(t-e)*6*s:s<1/2?t:s<2/3?e+(t-e)*(2/3-s)*6:e}function Gt(e,t,s){const i=s<.5?s*(1+t):s+t-s*t,n=2*s-i,r=ht(n,i,e+1/3),a=ht(n,i,e),l=ht(n,i,e-1/3);return Math.round(r*255)<<24|Math.round(a*255)<<16|Math.round(l*255)<<8}function ue(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Kt(e){return(parseFloat(e)%360+360)%360/360}function Zt(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function Qe(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Jt(e){let t=Ki(e);if(t===null)return e;t=t||0;const s=(t&4278190080)>>>24,i=(t&16711680)>>>16,n=(t&65280)>>>8,r=(t&255)/255;return`rgba(${s}, ${i}, ${n}, ${r})`}var Pe=(e,t,s)=>{if(u.fun(e))return e;if(u.arr(e))return Pe({range:e,output:t,extrapolate:s});if(u.str(e.output[0]))return Tt(e);const i=e,n=i.output,r=i.range||[0,1],a=i.extrapolateLeft||i.extrapolate||"extend",l=i.extrapolateRight||i.extrapolate||"extend",h=i.easing||(c=>c);return c=>{const y=Ji(c,r);return Zi(c,r[y],r[y+1],n[y],n[y+1],h,a,l,i.map)}};function Zi(e,t,s,i,n,r,a,l,h){let c=h?h(e):e;if(c<t){if(a==="identity")return c;a==="clamp"&&(c=t)}if(c>s){if(l==="identity")return c;l==="clamp"&&(c=s)}return i===n?i:t===s?e<=t?i:n:(t===-1/0?c=-c:s===1/0?c=c-t:c=(c-t)/(s-t),c=r(c),i===-1/0?c=-c:n===1/0?c=c+i:c=c*(n-i)+i,c)}function Ji(e,t){for(var s=1;s<t.length-1&&!(t[s]>=e);++s);return s-1}var Xi=(e,t="end")=>s=>{s=t==="end"?Math.min(s,.999):Math.max(s,.001);const i=s*e,n=t==="end"?Math.floor(i):Math.ceil(i);return Li(0,1,n/e)},Xe=1.70158,He=Xe*1.525,Xt=Xe+1,Yt=2*Math.PI/3,es=2*Math.PI/4.5,We=e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,Yi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e===0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Xt*e*e*e-Xe*e*e,easeOutBack:e=>1+Xt*Math.pow(e-1,3)+Xe*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*((He+1)*2*e-He)/2:(Math.pow(2*e-2,2)*((He+1)*(e*2-2)+He)+2)/2,easeInElastic:e=>e===0?0:e===1?1:-Math.pow(2,10*e-10)*Math.sin((e*10-10.75)*Yt),easeOutElastic:e=>e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e*10-.75)*Yt)+1,easeInOutElastic:e=>e===0?0:e===1?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*es))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*es)/2+1,easeInBounce:e=>1-We(1-e),easeOutBounce:We,easeInOutBounce:e=>e<.5?(1-We(1-2*e))/2:(1+We(2*e-1))/2,steps:Xi},je=Symbol.for("FluidValue.get"),pe=Symbol.for("FluidValue.observers"),N=e=>!!(e&&e[je]),z=e=>e&&e[je]?e[je]():e,ts=e=>e[pe]||null;function en(e,t){e.eventObserved?e.eventObserved(t):e(t)}function Ae(e,t){const s=e[pe];s&&s.forEach(i=>{en(i,t)})}var Os=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");tn(this,e)}},tn=(e,t)=>Fs(e,je,t);function ge(e,t){if(e[je]){let s=e[pe];s||Fs(e,pe,s=new Set),s.has(t)||(s.add(t),e.observerAdded&&e.observerAdded(s.size,t))}return t}function Ie(e,t){const s=e[pe];if(s&&s.has(t)){const i=s.size-1;i?s.delete(t):e[pe]=null,e.observerRemoved&&e.observerRemoved(i,t)}}var Fs=(e,t,s)=>Object.defineProperty(e,t,{value:s,writable:!0,configurable:!0}),Ge=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,sn=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ss=new RegExp(`(${Ge.source})(%|[a-z]+)`,"i"),nn=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,rt=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ts=e=>{const[t,s]=rn(e);if(!t||Ft())return e;const i=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(i)return i.trim();if(s&&s.startsWith("--")){const n=window.getComputedStyle(document.documentElement).getPropertyValue(s);return n||e}else{if(s&&rt.test(s))return Ts(s);if(s)return s}return e},rn=e=>{const t=rt.exec(e);if(!t)return[,];const[,s,i]=t;return[s,i]},mt,an=(e,t,s,i,n)=>`rgba(${Math.round(t)}, ${Math.round(s)}, ${Math.round(i)}, ${n})`,zs=e=>{mt||(mt=ae?new RegExp(`(${Object.keys(ae).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map(r=>z(r).replace(rt,Ts).replace(sn,Jt).replace(mt,Jt)),s=t.map(r=>r.match(Ge).map(Number)),n=s[0].map((r,a)=>s.map(l=>{if(!(a in l))throw Error('The arity of each "output" value must be equal');return l[a]})).map(r=>Pe({...e,output:r}));return r=>{var h;const a=!ss.test(t[0])&&((h=t.find(c=>ss.test(c)))==null?void 0:h.replace(Ge,""));let l=0;return t[0].replace(Ge,()=>`${n[l++](r)}${a||""}`).replace(nn,an)}},Vt="react-spring: ",Vs=e=>{const t=e;let s=!1;if(typeof t!="function")throw new TypeError(`${Vt}once requires a function parameter`);return(...i)=>{s||(t(...i),s=!0)}},on=Vs(console.warn);function ln(){on(`${Vt}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var cn=Vs(console.warn);function un(){cn(`${Vt}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function at(e){return u.str(e)&&(e[0]=="#"||/\d/.test(e)||!Ft()&&rt.test(e)||e in(ae||{}))}var de=Ft()?b.useEffect:b.useLayoutEffect,dn=()=>{const e=b.useRef(!1);return de(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function Ls(){const e=b.useState()[1],t=dn();return()=>{t.current&&e(Math.random())}}function fn(e,t){const[s]=b.useState(()=>({inputs:t,result:e()})),i=b.useRef(),n=i.current;let r=n;return r?t&&r.inputs&&hn(t,r.inputs)||(r={inputs:t,result:e()}):r=s,b.useEffect(()=>{i.current=r,n==s&&(s.inputs=s.result=void 0)},[r]),r.result}function hn(e,t){if(e.length!==t.length)return!1;for(let s=0;s<e.length;s++)if(e[s]!==t[s])return!1;return!0}var Bs=e=>b.useEffect(e,mn),mn=[];function pn(e){const t=b.useRef();return b.useEffect(()=>{t.current=e}),t.current}var Ce=Symbol.for("Animated:node"),gn=e=>!!e&&e[Ce]===e,Z=e=>e&&e[Ce],Lt=(e,t)=>Fi(e,Ce,t),ot=e=>e&&e[Ce]&&e[Ce].getPayload(),Us=class{constructor(){Lt(this,this)}getPayload(){return this.payload||[]}},ze=class extends Us{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,u.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ze(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return u.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value===e?!1:(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,u.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Me=class extends ze{constructor(e){super(0),this._string=null,this._toString=Pe({output:[e,e]})}static create(e){return new Me(e)}getValue(){const e=this._string;return e??(this._string=this._toString(this._value))}setValue(e){if(u.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=Pe({output:[this.getValue(),e]})),this._value=0,super.reset()}},Ye={dependencies:null},lt=class extends Us{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return J(this.source,(s,i)=>{gn(s)?t[i]=s.getValue(e):N(s)?t[i]=z(s):e||(t[i]=s)}),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&_(this.payload,e=>e.reset())}_makePayload(e){if(e){const t=new Set;return J(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Ye.dependencies&&N(e)&&Ye.dependencies.add(e);const t=ot(e);t&&_(t,s=>this.add(s))}},Ns=class extends lt{constructor(e){super(e)}static create(e){return new Ns(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){const t=this.getPayload();return e.length==t.length?t.map((s,i)=>s.setValue(e[i])).some(Boolean):(super.setValue(e.map(vn)),!0)}};function vn(e){return(at(e)?Me:ze).create(e)}function _t(e){const t=Z(e);return t?t.constructor:u.arr(e)?Ns:at(e)?Me:ze}var is=(e,t)=>{const s=!u.fun(e)||e.prototype&&e.prototype.isReactComponent;return b.forwardRef((i,n)=>{const r=b.useRef(null),a=s&&b.useCallback(g=>{r.current=wn(n,g)},[n]),[l,h]=bn(i,t),c=Ls(),y=()=>{const g=r.current;if(s&&!g)return;(g?t.applyAnimatedValues(g,l.getValue(!0)):!1)===!1&&c()},m=new yn(y,h),v=b.useRef();de(()=>(v.current=m,_(h,g=>ge(g,m)),()=>{v.current&&(_(v.current.deps,g=>Ie(g,v.current)),x.cancel(v.current.update))})),b.useEffect(y,[]),Bs(()=>()=>{const g=v.current;_(g.deps,p=>Ie(p,g))});const k=t.getComponentProps(l.getValue());return b.createElement(e,{...k,ref:a})})},yn=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){e.type=="change"&&x.write(this.update)}};function bn(e,t){const s=new Set;return Ye.dependencies=s,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new lt(e),Ye.dependencies=null,[e,s]}function wn(e,t){return e&&(u.fun(e)?e(t):e.current=t),t}var ns=Symbol.for("AnimatedComponent"),xn=(e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:s=n=>new lt(n),getComponentProps:i=n=>n}={})=>{const n={applyAnimatedValues:t,createAnimatedStyle:s,getComponentProps:i},r=a=>{const l=rs(a)||"Anonymous";return u.str(a)?a=r[a]||(r[a]=is(a,n)):a=a[ns]||(a[ns]=is(a,n)),a.displayName=`Animated(${l})`,a};return J(e,(a,l)=>{u.arr(e)&&(l=rs(a)),r[l]=r(a)}),{animated:r}},rs=e=>u.str(e)?e:e&&u.str(e.displayName)?e.displayName:u.fun(e)&&e.name||null;function V(e,...t){return u.fun(e)?e(...t):e}var Se=(e,t)=>e===!0||!!(t&&e&&(u.fun(e)?e(t):T(e).includes(t))),Ds=(e,t)=>u.obj(e)?t&&e[t]:e,qs=(e,t)=>e.default===!0?e[t]:e.default?e.default[t]:void 0,_n=e=>e,Bt=(e,t=_n)=>{let s=kn;e.default&&e.default!==!0&&(e=e.default,s=Object.keys(e));const i={};for(const n of s){const r=t(e[n],n);u.und(r)||(i[n]=r)}return i},kn=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Sn={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function $n(e){const t={};let s=0;if(J(e,(i,n)=>{Sn[n]||(t[n]=i,s++)}),s)return t}function Ut(e){const t=$n(e);if(t){const s={to:t};return J(e,(i,n)=>n in t||(s[n]=i)),s}return{...e}}function Ee(e){return e=z(e),u.arr(e)?e.map(Ee):at(e)?W.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Pn(e){for(const t in e)return!0;return!1}function kt(e){return u.fun(e)||u.arr(e)&&u.obj(e[0])}function as(e,t){var s;(s=e.ref)==null||s.delete(e),t==null||t.delete(e)}function jn(e,t){var s;t&&e.ref!==t&&((s=e.ref)==null||s.delete(e),t.add(e),e.ref=t)}var An={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},St={...An.default,mass:1,damping:1,easing:Yi.linear,clamp:!1},In=class{constructor(){this.velocity=0,Object.assign(this,St)}};function Cn(e,t,s){s&&(s={...s},os(s,t),t={...s,...t}),os(e,t),Object.assign(e,t);for(const a in St)e[a]==null&&(e[a]=St[a]);let{frequency:i,damping:n}=e;const{mass:r}=e;return u.und(i)||(i<.01&&(i=.01),n<0&&(n=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*n*r/i),e}function os(e,t){if(!u.und(t.decay))e.duration=void 0;else{const s=!u.und(t.tension)||!u.und(t.friction);(s||!u.und(t.frequency)||!u.und(t.damping)||!u.und(t.mass))&&(e.duration=void 0,e.decay=void 0),s&&(e.frequency=void 0)}}var ls=[],Mn=class{constructor(){this.changed=!1,this.values=ls,this.toValues=null,this.fromValues=ls,this.config=new In,this.immediate=!1}};function Qs(e,{key:t,props:s,defaultProps:i,state:n,actions:r}){return new Promise((a,l)=>{let h,c,y=Se(s.cancel??(i==null?void 0:i.cancel),t);if(y)k();else{u.und(s.pause)||(n.paused=Se(s.pause,t));let g=i==null?void 0:i.pause;g!==!0&&(g=n.paused||Se(g,t)),h=V(s.delay||0,t),g?(n.resumeQueue.add(v),r.pause()):(r.resume(),v())}function m(){n.resumeQueue.add(v),n.timeouts.delete(c),c.cancel(),h=c.time-x.now()}function v(){h>0&&!W.skipAnimation?(n.delayed=!0,c=x.setTimeout(k,h),n.pauseQueue.add(m),n.timeouts.add(c)):k()}function k(){n.delayed&&(n.delayed=!1),n.pauseQueue.delete(m),n.timeouts.delete(c),e<=(n.cancelId||0)&&(y=!0);try{r.start({...s,callId:e,cancel:y},a)}catch(g){l(g)}}})}var Nt=(e,t)=>t.length==1?t[0]:t.some(s=>s.cancelled)?he(e.get()):t.every(s=>s.noop)?Hs(e.get()):Q(e.get(),t.every(s=>s.finished)),Hs=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Q=(e,t,s=!1)=>({value:e,finished:t,cancelled:s}),he=e=>({value:e,cancelled:!0,finished:!1});function Ws(e,t,s,i){const{callId:n,parentId:r,onRest:a}=t,{asyncTo:l,promise:h}=s;return!r&&e===l&&!t.reset?h:s.promise=(async()=>{s.asyncId=n,s.asyncTo=e;const c=Bt(t,(f,S)=>S==="onRest"?void 0:f);let y,m;const v=new Promise((f,S)=>(y=f,m=S)),k=f=>{const S=n<=(s.cancelId||0)&&he(i)||n!==s.asyncId&&Q(i,!1);if(S)throw f.result=S,m(f),f},g=(f,S)=>{const I=new cs,P=new us;return(async()=>{if(W.skipAnimation)throw Re(s),P.result=Q(i,!1),m(P),P;k(I);const A=u.obj(f)?{...f}:{...S,to:f};A.parentId=n,J(c,(G,C)=>{u.und(A[C])&&(A[C]=G)});const R=await i.start(A);return k(I),s.paused&&await new Promise(G=>{s.resumeQueue.add(G)}),R})()};let p;if(W.skipAnimation)return Re(s),Q(i,!1);try{let f;u.arr(e)?f=(async S=>{for(const I of S)await g(I)})(e):f=Promise.resolve(e(g,i.stop.bind(i))),await Promise.all([f.then(y),v]),p=Q(i.get(),!0,!1)}catch(f){if(f instanceof cs)p=f.result;else if(f instanceof us)p=f.result;else throw f}finally{n==s.asyncId&&(s.asyncId=r,s.asyncTo=r?l:void 0,s.promise=r?h:void 0)}return u.fun(a)&&x.batchedUpdates(()=>{a(p,i,i.item)}),p})()}function Re(e,t){_e(e.timeouts,s=>s.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var cs=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},us=class extends Error{constructor(){super("SkipAnimationSignal")}},$t=e=>e instanceof Dt,En=1,Dt=class extends Os{constructor(){super(...arguments),this.id=En++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Z(this);return e&&e.getValue()}to(...e){return W.to(this,e)}interpolate(...e){return ln(),W.to(this,e)}toJSON(){return this.get()}observerAdded(e){e==1&&this._attach()}observerRemoved(e){e==0&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ae(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||it.sort(this),Ae(this,{type:"priority",parent:this,priority:e})}},ce=Symbol.for("SpringPhase"),Gs=1,Pt=2,jt=4,pt=e=>(e[ce]&Gs)>0,ie=e=>(e[ce]&Pt)>0,ye=e=>(e[ce]&jt)>0,ds=(e,t)=>t?e[ce]|=Pt|Gs:e[ce]&=~Pt,fs=(e,t)=>t?e[ce]|=jt:e[ce]&=~jt,Rn=class extends Dt{constructor(e,t){if(super(),this.animation=new Mn,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!u.und(e)||!u.und(t)){const s=u.obj(e)?{...e}:{...t,from:e};u.und(s.default)&&(s.default=!0),this.start(s)}}get idle(){return!(ie(this)||this._state.asyncTo)||ye(this)}get goal(){return z(this.animation.to)}get velocity(){const e=Z(this);return e instanceof ze?e.lastVelocity||0:e.getPayload().map(t=>t.lastVelocity||0)}get hasAnimated(){return pt(this)}get isAnimating(){return ie(this)}get isPaused(){return ye(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,s=!1;const i=this.animation;let{toValues:n}=i;const{config:r}=i,a=ot(i.to);!a&&N(i.to)&&(n=T(z(i.to))),i.values.forEach((c,y)=>{if(c.done)return;const m=c.constructor==Me?1:a?a[y].lastPosition:n[y];let v=i.immediate,k=m;if(!v){if(k=c.lastPosition,r.tension<=0){c.done=!0;return}let g=c.elapsedTime+=e;const p=i.fromValues[y],f=c.v0!=null?c.v0:c.v0=u.arr(r.velocity)?r.velocity[y]:r.velocity;let S;const I=r.precision||(p==m?.005:Math.min(1,Math.abs(m-p)*.001));if(u.und(r.duration))if(r.decay){const P=r.decay===!0?.998:r.decay,A=Math.exp(-(1-P)*g);k=p+f/(1-P)*(1-A),v=Math.abs(c.lastPosition-k)<=I,S=f*A}else{S=c.lastVelocity==null?f:c.lastVelocity;const P=r.restVelocity||I/10,A=r.clamp?0:r.bounce,R=!u.und(A),G=p==m?c.v0>0:p<m;let C,K=!1;const M=1,U=Math.ceil(e/M);for(let L=0;L<U&&(C=Math.abs(S)>P,!(!C&&(v=Math.abs(m-k)<=I,v)));++L){R&&(K=k==m||k>m==G,K&&(S=-S*A,k=m));const X=-r.tension*1e-6*(k-m),Y=-r.friction*.001*S,w=(X+Y)/r.mass;S=S+w*M,k=k+S*M}}else{let P=1;r.duration>0&&(this._memoizedDuration!==r.duration&&(this._memoizedDuration=r.duration,c.durationProgress>0&&(c.elapsedTime=r.duration*c.durationProgress,g=c.elapsedTime+=e)),P=(r.progress||0)+g/this._memoizedDuration,P=P>1?1:P<0?0:P,c.durationProgress=P),k=p+r.easing(P)*(m-p),S=(k-c.lastPosition)/e,v=P==1}c.lastVelocity=S,Number.isNaN(k)&&(console.warn("Got NaN while animating:",this),v=!0)}a&&!a[y].done&&(v=!1),v?c.done=!0:t=!1,c.setValue(k,r.round)&&(s=!0)});const l=Z(this),h=l.getValue();if(t){const c=z(i.to);(h!==c||s)&&!r.decay?(l.setValue(c),this._onChange(c)):s&&r.decay&&this._onChange(h),this._stop()}else s&&this._onChange(h)}set(e){return x.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ie(this)){const{to:e,config:t}=this.animation;x.batchedUpdates(()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let s;return u.und(e)?(s=this.queue||[],this.queue=[]):s=[u.obj(e)?e:{...t,to:e}],Promise.all(s.map(i=>this._update(i))).then(i=>Nt(this,i))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Re(this._state,e&&this._lastCallId),x.batchedUpdates(()=>this._stop(t,e)),this}reset(){this._update({reset:!0})}eventObserved(e){e.type=="change"?this._start():e.type=="priority"&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:s,from:i}=e;s=u.obj(s)?s[t]:s,(s==null||kt(s))&&(s=void 0),i=u.obj(i)?i[t]:i,i==null&&(i=void 0);const n={to:s,from:i};return pt(this)||(e.reverse&&([s,i]=[i,s]),i=z(i),u.und(i)?Z(this)||this._set(s):this._set(i)),n}_update({...e},t){const{key:s,defaultProps:i}=this;e.default&&Object.assign(i,Bt(e,(a,l)=>/^on/.test(l)?Ds(a,s):a)),ms(this,e,"onProps"),we(this,"onProps",e,this);const n=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const r=this._state;return Qs(++this._lastCallId,{key:s,props:e,defaultProps:i,state:r,actions:{pause:()=>{ye(this)||(fs(this,!0),xe(r.pauseQueue),we(this,"onPause",Q(this,be(this,this.animation.to)),this))},resume:()=>{ye(this)&&(fs(this,!1),ie(this)&&this._resume(),xe(r.resumeQueue),we(this,"onResume",Q(this,be(this,this.animation.to)),this))},start:this._merge.bind(this,n)}}).then(a=>{if(e.loop&&a.finished&&!(t&&a.noop)){const l=Ks(e);if(l)return this._update(l,!0)}return a})}_merge(e,t,s){if(t.cancel)return this.stop(!0),s(he(this));const i=!u.und(e.to),n=!u.und(e.from);if(i||n)if(t.callId>this._lastToId)this._lastToId=t.callId;else return s(he(this));const{key:r,defaultProps:a,animation:l}=this,{to:h,from:c}=l;let{to:y=h,from:m=c}=e;n&&!i&&(!t.default||u.und(y))&&(y=m),t.reverse&&([y,m]=[m,y]);const v=!te(m,c);v&&(l.from=m),m=z(m);const k=!te(y,h);k&&this._focus(y);const g=kt(t.to),{config:p}=l,{decay:f,velocity:S}=p;(i||n)&&(p.velocity=0),t.config&&!g&&Cn(p,V(t.config,r),t.config!==a.config?V(a.config,r):void 0);let I=Z(this);if(!I||u.und(y))return s(Q(this,!0));const P=u.und(t.reset)?n&&!t.default:!u.und(m)&&Se(t.reset,r),A=P?m:this.get(),R=Ee(y),G=u.num(R)||u.arr(R)||at(R),C=!g&&(!G||Se(a.immediate||t.immediate,r));if(k){const L=_t(y);if(L!==I.constructor)if(C)I=this._set(R);else throw Error(`Cannot animate between ${I.constructor.name} and ${L.name}, as the "to" prop suggests`)}const K=I.constructor;let M=N(y),U=!1;if(!M){const L=P||!pt(this)&&v;(k||L)&&(U=te(Ee(A),R),M=!U),(!te(l.immediate,C)&&!C||!te(p.decay,f)||!te(p.velocity,S))&&(M=!0)}if(U&&ie(this)&&(l.changed&&!P?M=!0:M||this._stop(h)),!g&&((M||N(h))&&(l.values=I.getPayload(),l.toValues=N(y)?null:K==Me?[1]:T(R)),l.immediate!=C&&(l.immediate=C,!C&&!P&&this._set(h)),M)){const{onRest:L}=l;_(On,Y=>ms(this,t,Y));const X=Q(this,be(this,h));xe(this._pendingCalls,X),this._pendingCalls.add(s),l.changed&&x.batchedUpdates(()=>{var Y;l.changed=!P,L==null||L(X,this),P?V(a.onRest,X):(Y=l.onStart)==null||Y.call(l,X,this)})}P&&this._set(A),g?s(Ws(t.to,t,this._state,this)):M?this._start():ie(this)&&!k?this._pendingCalls.add(s):s(Hs(A))}_focus(e){const t=this.animation;e!==t.to&&(ts(this)&&this._detach(),t.to=e,ts(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;N(t)&&(ge(t,this),$t(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;N(e)&&Ie(e,this)}_set(e,t=!0){const s=z(e);if(!u.und(s)){const i=Z(this);if(!i||!te(s,i.getValue())){const n=_t(s);!i||i.constructor!=n?Lt(this,n.create(s)):i.setValue(s),i&&x.batchedUpdates(()=>{this._onChange(s,t)})}}return Z(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,we(this,"onStart",Q(this,be(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),V(this.animation.onChange,e,this)),V(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Z(this).reset(z(e.to)),e.immediate||(e.fromValues=e.values.map(t=>t.lastPosition)),ie(this)||(ds(this,!0),ye(this)||this._resume())}_resume(){W.skipAnimation?this.finish():it.start(this)}_stop(e,t){if(ie(this)){ds(this,!1);const s=this.animation;_(s.values,n=>{n.done=!0}),s.toValues&&(s.onChange=s.onPause=s.onResume=void 0),Ae(this,{type:"idle",parent:this});const i=t?he(this.get()):Q(this.get(),be(this,e??s.to));xe(this._pendingCalls,i),s.changed&&(s.changed=!1,we(this,"onRest",i,this))}}};function be(e,t){const s=Ee(t),i=Ee(e.get());return te(i,s)}function Ks(e,t=e.loop,s=e.to){const i=V(t);if(i){const n=i!==!0&&Ut(i),r=(n||e).reverse,a=!n||n.reset;return et({...e,loop:t,default:!1,pause:void 0,to:!r||kt(s)?s:void 0,from:a?e.from:void 0,reset:a,...n})}}function et(e){const{to:t,from:s}=e=Ut(e),i=new Set;return u.obj(t)&&hs(t,i),u.obj(s)&&hs(s,i),e.keys=i.size?Array.from(i):null,e}function hs(e,t){J(e,(s,i)=>s!=null&&t.add(i))}var On=["onStart","onRest","onChange","onPause","onResume"];function ms(e,t,s){e.animation[s]=t[s]!==qs(t,s)?Ds(t[s],e.key):void 0}function we(e,t,...s){var i,n,r,a;(n=(i=e.animation)[t])==null||n.call(i,...s),(a=(r=e.defaultProps)[t])==null||a.call(r,...s)}var Fn=["onStart","onChange","onRest"],Tn=1,zn=class{constructor(e,t){this.id=Tn++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each((t,s)=>e[s]=t.get()),e}set(e){for(const t in e){const s=e[t];u.und(s)||this.springs[t].set(s)}}update(e){return e&&this.queue.push(et(e)),this}start(e){let{queue:t}=this;return e?t=T(e).map(et):this.queue=[],this._flush?this._flush(this,t):(Ys(this,t),Vn(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const s=this.springs;_(T(t),i=>s[i].stop(!!e))}else Re(this._state,this._lastAsyncId),this.each(s=>s.stop(!!e));return this}pause(e){if(u.und(e))this.start({pause:!0});else{const t=this.springs;_(T(e),s=>t[s].pause())}return this}resume(e){if(u.und(e))this.start({pause:!1});else{const t=this.springs;_(T(e),s=>t[s].resume())}return this}each(e){J(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:s}=this._events,i=this._active.size>0,n=this._changed.size>0;(i&&!this._started||n&&!this._started)&&(this._started=!0,_e(e,([l,h])=>{h.value=this.get(),l(h,this,this._item)}));const r=!i&&this._started,a=n||r&&s.size?this.get():null;n&&t.size&&_e(t,([l,h])=>{h.value=a,l(h,this,this._item)}),r&&(this._started=!1,_e(s,([l,h])=>{h.value=a,l(h,this,this._item)}))}eventObserved(e){if(e.type=="change")this._changed.add(e.parent),e.idle||this._active.add(e.parent);else if(e.type=="idle")this._active.delete(e.parent);else return;x.onFrame(this._onFrame)}};function Vn(e,t){return Promise.all(t.map(s=>Zs(e,s))).then(s=>Nt(e,s))}async function Zs(e,t,s){const{keys:i,to:n,from:r,loop:a,onRest:l,onResolve:h}=t,c=u.obj(t.default)&&t.default;a&&(t.loop=!1),n===!1&&(t.to=null),r===!1&&(t.from=null);const y=u.arr(n)||u.fun(n)?n:void 0;y?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):_(Fn,p=>{const f=t[p];if(u.fun(f)){const S=e._events[p];t[p]=({finished:I,cancelled:P})=>{const A=S.get(f);A?(I||(A.finished=!1),P&&(A.cancelled=!0)):S.set(f,{value:null,finished:I||!1,cancelled:P||!1})},c&&(c[p]=t[p])}});const m=e._state;t.pause===!m.paused?(m.paused=t.pause,xe(t.pause?m.pauseQueue:m.resumeQueue)):m.paused&&(t.pause=!0);const v=(i||Object.keys(e.springs)).map(p=>e.springs[p].start(t)),k=t.cancel===!0||qs(t,"cancel")===!0;(y||k&&m.asyncId)&&v.push(Qs(++e._lastAsyncId,{props:t,state:m,actions:{pause:wt,resume:wt,start(p,f){k?(Re(m,e._lastAsyncId),f(he(e))):(p.onRest=l,f(Ws(y,p,m,e)))}}})),m.paused&&await new Promise(p=>{m.resumeQueue.add(p)});const g=Nt(e,await Promise.all(v));if(a&&g.finished&&!(s&&g.noop)){const p=Ks(t,a,n);if(p)return Ys(e,[p]),Zs(e,p,!0)}return h&&x.batchedUpdates(()=>h(g,e,e.item)),g}function Ln(e,t){const s={...e.springs};return t&&_(T(t),i=>{u.und(i.keys)&&(i=et(i)),u.obj(i.to)||(i={...i,to:void 0}),Xs(s,i,n=>Js(n))}),Bn(e,s),s}function Bn(e,t){J(t,(s,i)=>{e.springs[i]||(e.springs[i]=s,ge(s,e))})}function Js(e,t){const s=new Rn;return s.key=e,t&&ge(s,t),s}function Xs(e,t,s){t.keys&&_(t.keys,i=>{(e[i]||(e[i]=s(i)))._prepareNode(t)})}function Ys(e,t){_(t,s=>{Xs(e.springs,s,i=>Js(i,e))})}var ct=({children:e,...t})=>{const s=b.useContext(tt),i=t.pause||!!s.pause,n=t.immediate||!!s.immediate;t=fn(()=>({pause:i,immediate:n}),[i,n]);const{Provider:r}=tt;return b.createElement(r,{value:t},e)},tt=Un(ct,{});ct.Provider=tt.Provider;ct.Consumer=tt.Consumer;function Un(e,t){return Object.assign(e,b.createContext(t)),e.Provider._context=e,e.Consumer._context=e,e}var Nn=()=>{const e=[],t=function(i){un();const n=[];return _(e,(r,a)=>{if(u.und(i))n.push(r.start());else{const l=s(i,r,a);l&&n.push(r.start(l))}}),n};t.current=e,t.add=function(i){e.includes(i)||e.push(i)},t.delete=function(i){const n=e.indexOf(i);~n&&e.splice(n,1)},t.pause=function(){return _(e,i=>i.pause(...arguments)),this},t.resume=function(){return _(e,i=>i.resume(...arguments)),this},t.set=function(i){_(e,(n,r)=>{const a=u.fun(i)?i(r,n):i;a&&n.set(a)})},t.start=function(i){const n=[];return _(e,(r,a)=>{if(u.und(i))n.push(r.start());else{const l=this._getProps(i,r,a);l&&n.push(r.start(l))}}),n},t.stop=function(){return _(e,i=>i.stop(...arguments)),this},t.update=function(i){return _(e,(n,r)=>n.update(this._getProps(i,n,r))),this};const s=function(i,n,r){return u.fun(i)?i(r,n):i};return t._getProps=s,t};function ei(e,t,s){const i=u.fun(t)&&t,{reset:n,sort:r,trail:a=0,expires:l=!0,exitBeforeEnter:h=!1,onDestroyed:c,ref:y,config:m}=i?i():t,v=b.useMemo(()=>i||arguments.length==3?Nn():void 0,[]),k=T(e),g=[],p=b.useRef(null),f=n?null:p.current;de(()=>{p.current=g}),Bs(()=>(_(g,w=>{v==null||v.add(w.ctrl),w.ctrl.ref=v}),()=>{_(p.current,w=>{w.expired&&clearTimeout(w.expirationId),as(w.ctrl,v),w.ctrl.stop(!0)})}));const S=qn(k,i?i():t,f),I=n&&p.current||[];de(()=>_(I,({ctrl:w,item:$,key:O})=>{as(w,v),V(c,$,O)}));const P=[];if(f&&_(f,(w,$)=>{w.expired?(clearTimeout(w.expirationId),I.push(w)):($=P[$]=S.indexOf(w.key),~$&&(g[$]=w))}),_(k,(w,$)=>{g[$]||(g[$]={key:S[$],item:w,phase:"mount",ctrl:new zn},g[$].ctrl.item=w)}),P.length){let w=-1;const{leave:$}=i?i():t;_(P,(O,F)=>{const E=f[F];~O?(w=g.indexOf(E),g[w]={...E,item:k[O]}):$&&g.splice(++w,0,E)})}u.fun(r)&&g.sort((w,$)=>r(w.item,$.item));let A=-a;const R=Ls(),G=Bt(t),C=new Map,K=b.useRef(new Map),M=b.useRef(!1);_(g,(w,$)=>{const O=w.key,F=w.phase,E=i?i():t;let B,ee;const ii=V(E.delay||0,O);if(F=="mount")B=E.enter,ee="enter";else{const q=S.indexOf(O)<0;if(F!="leave")if(q)B=E.leave,ee="leave";else if(B=E.update)ee="update";else return;else if(!q)B=E.enter,ee="enter";else return}if(B=V(B,w.item,$),B=u.obj(B)?Ut(B):{to:B},!B.config){const q=m||G.config;B.config=V(q,w.item,$,ee)}A+=a;const oe={...G,delay:ii+A,ref:y,immediate:E.immediate,reset:!1,...B};if(ee=="enter"&&u.und(oe.from)){const q=i?i():t,ve=u.und(q.initial)||f?q.from:q.initial;oe.from=V(ve,w.item,$)}const{onResolve:ni}=oe;oe.onResolve=q=>{V(ni,q);const ve=p.current,se=ve.find(Ve=>Ve.key===O);if(se&&!(q.cancelled&&se.phase!="update")&&se.ctrl.idle){const Ve=ve.every(le=>le.ctrl.idle);if(se.phase=="leave"){const le=V(l,se.item);if(le!==!1){const ut=le===!0?0:le;if(se.expired=!0,!Ve&&ut>0){ut<=2147483647&&(se.expirationId=setTimeout(R,ut));return}}}Ve&&ve.some(le=>le.expired)&&(K.current.delete(se),h&&(M.current=!0),R())}};const qt=Ln(w.ctrl,oe);ee==="leave"&&h?K.current.set(w,{phase:ee,springs:qt,payload:oe}):C.set(w,{phase:ee,springs:qt,payload:oe})});const U=b.useContext(ct),L=pn(U),X=U!==L&&Pn(U);de(()=>{X&&_(g,w=>{w.ctrl.start({default:U})})},[U]),_(C,(w,$)=>{if(K.current.size){const O=g.findIndex(F=>F.key===$.key);g.splice(O,1)}}),de(()=>{_(K.current.size?K.current:C,({phase:w,payload:$},O)=>{const{ctrl:F}=O;O.phase=w,v==null||v.add(F),X&&w=="enter"&&F.start({default:U}),$&&(jn(F,$.ref),(F.ref||v)&&!M.current?F.update($):(F.start($),M.current&&(M.current=!1)))})},n?void 0:s);const Y=w=>b.createElement(b.Fragment,null,g.map(($,O)=>{const{springs:F}=C.get($)||$.ctrl,E=w({...F},$.item,$,O);return E&&E.type?b.createElement(E.type,{...E.props,key:u.str($.key)||u.num($.key)?$.key:$.ctrl.id,ref:E.ref}):E}));return v?[Y,v]:Y}var Dn=1;function qn(e,{key:t,keys:s=t},i){if(s===null){const n=new Set;return e.map(r=>{const a=i&&i.find(l=>l.item===r&&l.phase!=="leave"&&!n.has(l));return a?(n.add(a),a.key):Dn++})}return u.und(s)?e:u.fun(s)?e.map(s):T(s)}var Qn=class extends Dt{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Pe(...t);const s=this._get(),i=_t(s);Lt(this,i.create(s))}advance(e){const t=this._get(),s=this.get();te(t,s)||(Z(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&ps(this._active)&&gt(this)}_get(){const e=u.arr(this.source)?this.source.map(z):T(z(this.source));return this.calc(...e)}_start(){this.idle&&!ps(this._active)&&(this.idle=!1,_(ot(this),e=>{e.done=!1}),W.skipAnimation?(x.batchedUpdates(()=>this.advance()),gt(this)):it.start(this))}_attach(){let e=1;_(T(this.source),t=>{N(t)&&ge(t,this),$t(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))}),this.priority=e,this._start()}_detach(){_(T(this.source),e=>{N(e)&&Ie(e,this)}),this._active.clear(),gt(this)}eventObserved(e){e.type=="change"?e.idle?this.advance():(this._active.add(e.parent),this._start()):e.type=="idle"?this._active.delete(e.parent):e.type=="priority"&&(this.priority=T(this.source).reduce((t,s)=>Math.max(t,($t(s)?s.priority:0)+1),0))}};function Hn(e){return e.idle!==!1}function ps(e){return!e.size||Array.from(e).every(Hn)}function gt(e){e.idle||(e.idle=!0,_(ot(e),t=>{t.done=!0}),Ae(e,{type:"idle",parent:e}))}W.assign({createStringInterpolator:zs,to:(e,t)=>new Qn(e,t)});var ti=/^--/;function Wn(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!ti.test(e)&&!($e.hasOwnProperty(e)&&$e[e])?t+"px":(""+t).trim()}var gs={};function Gn(e,t){if(!e.nodeType||!e.setAttribute)return!1;const s=e.nodeName==="filter"||e.parentNode&&e.parentNode.nodeName==="filter",{style:i,children:n,scrollTop:r,scrollLeft:a,viewBox:l,...h}=t,c=Object.values(h),y=Object.keys(h).map(m=>s||e.hasAttribute(m)?m:gs[m]||(gs[m]=m.replace(/([A-Z])/g,v=>"-"+v.toLowerCase())));n!==void 0&&(e.textContent=n);for(const m in i)if(i.hasOwnProperty(m)){const v=Wn(m,i[m]);ti.test(m)?e.style.setProperty(m,v):e.style[m]=v}y.forEach((m,v)=>{e.setAttribute(m,c[v])}),r!==void 0&&(e.scrollTop=r),a!==void 0&&(e.scrollLeft=a),l!==void 0&&e.setAttribute("viewBox",l)}var $e={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kn=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),Zn=["Webkit","Ms","Moz","O"];$e=Object.keys($e).reduce((e,t)=>(Zn.forEach(s=>e[Kn(s,t)]=e[t]),e),$e);var Jn=/^(matrix|translate|scale|rotate|skew)/,Xn=/^(translate)/,Yn=/^(rotate|skew)/,vt=(e,t)=>u.num(e)&&e!==0?e+t:e,Ke=(e,t)=>u.arr(e)?e.every(s=>Ke(s,t)):u.num(e)?e===t:parseFloat(e)===t,er=class extends lt{constructor({x:e,y:t,z:s,...i}){const n=[],r=[];(e||t||s)&&(n.push([e||0,t||0,s||0]),r.push(a=>[`translate3d(${a.map(l=>vt(l,"px")).join(",")})`,Ke(a,0)])),J(i,(a,l)=>{if(l==="transform")n.push([a||""]),r.push(h=>[h,h===""]);else if(Jn.test(l)){if(delete i[l],u.und(a))return;const h=Xn.test(l)?"px":Yn.test(l)?"deg":"";n.push(T(a)),r.push(l==="rotate3d"?([c,y,m,v])=>[`rotate3d(${c},${y},${m},${vt(v,h)})`,Ke(v,0)]:c=>[`${l}(${c.map(y=>vt(y,h)).join(",")})`,Ke(c,l.startsWith("scale")?1:0)])}}),n.length&&(i.transform=new tr(n,r)),super(i)}},tr=class extends Os{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return _(this.inputs,(s,i)=>{const n=z(s[0]),[r,a]=this.transforms[i](u.arr(n)?n:s.map(z));e+=" "+r,t=t&&a}),t?"none":e}observerAdded(e){e==1&&_(this.inputs,t=>_(t,s=>N(s)&&ge(s,this)))}observerRemoved(e){e==0&&_(this.inputs,t=>_(t,s=>N(s)&&Ie(s,this)))}eventObserved(e){e.type=="change"&&(this._value=null),Ae(this,e)}},sr=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];W.assign({batchedUpdates:bs.unstable_batchedUpdates,createStringInterpolator:zs,colors:Bi});var ir=xn(sr,{applyAnimatedValues:Gn,createAnimatedStyle:e=>new er(e),getComponentProps:({scrollTop:e,scrollLeft:t,...s})=>s}),si=ir.animated;const nr=j(si.div)`
  position: absolute;
  top: calc(100% + ${o.space[2]});
  right: 0;
  padding: ${o.space[3]};
  background-color: ${o.colors.white};
  border-radius: ${o.radii.l};
  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.08);
  z-index: 2;
  transform-origin: right top;
`,rr=({children:e,isOpen:t})=>ei(t,{from:{opacity:0,transform:"scale(0)"},enter:{opacity:1,transform:"scale(1)",config:{duration:150}},leave:{opacity:0,transform:"scale(0)",config:{duration:150}}})((i,n)=>d.jsx(d.Fragment,{children:n?d.jsx(nr,{style:i,children:e}):null}));function ar(e){return Oe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"}}]})(e)}const or=j(si.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;

  @media ${o.mediaBreakpoints.tablet.media} {
    overflow-y: auto;
  }
`,lr=j.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: ${o.space[3]};
  padding-top: calc(${o.space[4]} * 2 + 35px);
  background-color: ${o.colors.white};
  border-radius: ${o.radii.l};
  box-shadow: ${o.shadow.primary};

  @media ${o.mediaBreakpoints.mobile.media} {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
  }

  @media ${o.mediaBreakpoints.tablet.media} {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    padding: ${o.space[4]};
    padding-top: calc(${o.space[4]} * 2 + 35px);
    background-color: ${o.colors.white};
    border-radius: ${o.radii.l};
    box-shadow: ${o.shadow.primary};
    overflow-y: scroll;
  }

  @media ${o.mediaBreakpoints.desktop.media} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: ${o.space[4]};
    padding-top: calc(${o.space[4]} * 2 + 35px);
    background-color: ${o.colors.white};
    border-radius: ${o.radii.l};
    box-shadow: ${o.shadow.primary};
  }

  button[aria-labelledby='close button'] {
    margin-left: auto;
    background-color: transparent;
    color: ${o.colors.black};

    :hover {
      color: ${o.colors.primary.regular};
      background-color: ${o.colors.primary.light};
    }
  }
`,cr=j.div`
  position: absolute;
  top: ${o.space[4]};
  left: ${o.space[4]};
  width: calc(100% - ${o.space[4]} * 2);
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ur=j.h5`
  color: ${o.colors.black};
  font-size: ${o.fontSizes.xxxl};
  font-weight: ${o.fontWeights.bold};
  letter-spacing: 0.48px;
`,dr=document.querySelector("#modal-root"),fr=({toggleModal:e,isOpen:t,title:s="",children:i=null})=>{const n=ei(t,{from:{opacity:0},enter:{opacity:1,config:{duration:250}},leave:{opacity:0,config:{duration:250}}}),r=b.useCallback(({code:a,target:l,currentTarget:h})=>{(l===h||a==="Escape")&&e()},[e]);return b.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[t]),b.useEffect(()=>(document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)),[r,e]),n((a,l)=>d.jsx(d.Fragment,{children:l?bs.createPortal(d.jsx(or,{style:a,onClick:r,children:d.jsxs(lr,{children:[d.jsxs(cr,{children:[s!==""&&d.jsx(ur,{children:s}),d.jsx(yt,{icon:ar,iconSize:24,ariaLabel:"close button",onClick:e})]}),i]})}),dr):null}))},hr=j.div`
  display: flex;
  justify-content: space-between;
  gap: ${o.space[4]};

  @media (${o.mediaBreakpoints.mobile.media}) {
    flex-direction: column;
    justify-content: unset;
    align-items: center;
  }
`,mr=j(pi)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media (${o.mediaBreakpoints.mobile.media}) {
    width: 100%;
  }
`,pr=j.div`
  display: flex;
  flex-direction: column;
  gap: calc((27px + ${o.space[2]}) + ${o.space[3]});
  margin-bottom: ${o.space[4]};

  @media (${o.mediaBreakpoints.mobile.media}) {
    width: 100%;
  }
  @media ${o.mediaBreakpoints.tablet.media} {
    width: 370px;
  }
  @media ${o.mediaBreakpoints.desktop.media} {
    width: 370px;
  }

  input[id='name'] {
    margin-top: calc(27px + ${o.space[2]});
  }
`;j.div`
  display: flex;
  gap: ${o.space[3]};

  p {
    flex: 50%;
  }
`;const gr=gi().shape({fullName:Le().test("notEmpty","Cannot be empty",function(e){return this.parent.name||e!==void 0}).min(3,"Must be at least 3 characters").max(20,"Must be max 20 characters"),email:Le().test("notEmpty","Cannot be empty",function(e){return this.parent.name||e!==void 0}).email("Must be valid email"),password:Le().min(8,"Must be at least 8 characters").max(16,"Must be max 16 characters").matches(vi,"Must be at least one capital letter and one number"),confirmPassword:Le().test("additionalField-required","Password confirm required",function(e){return this.parent.password&&this.parent.password.length>0?e&&e.length>0:!0}).oneOf([yi("password"),null],"Passwords must match!")}),vr=({setShowModal:e,user:t})=>{const[s,i]=b.useState({fullName:t.fullName,email:t.email,password:"",confirmPassword:""}),[n,r]=b.useState({password:!1,confirmPassword:!1});b.useEffect(()=>{if(!t._id)return;const{email:p,fullName:f}=t;i(S=>({...S,fullName:f,email:p}))},[t]);const a={fullName:s.fullName,email:s.email,password:s.password,confirmPassword:s.confirmPassword},l=It(),[h,{isLoading:c,isSuccess:y,isError:m,error:v}]=ai(),k=async p=>{const{data:f}=await h(p);l(ws(f.user))},g=p=>i(f=>({...f,[p.target.id]:p.target.value}));return b.useEffect(()=>{y&&me.Notify.success("Data successfully saved",{showOnlyTheLastOne:!0,position:"right-bottom"}),m&&me.Notify.failure(v.data.message,{showOnlyTheLastOne:!0,position:"right-bottom"}),!c&&y&&e(!1)},[v,m,c,y,e]),d.jsx(bi,{initialValues:a,validationSchema:gr,onSubmit:(p,{resetForm:f})=>{k((I=>{const{confirmPassword:P,password:A,...R}=I;return A===""?R:{...R,password:A}})(p)),f()},children:({setFieldValue:p})=>d.jsxs(mr,{children:[d.jsxs(pr,{children:[d.jsxs(Be,{children:[d.jsx(Ue,{htmlFor:"fullName",children:"Full name"}),d.jsx(Ne,{id:"fullName",name:"fullName",type:"text",placeholder:"First & last name",onChange:f=>{p("fullName",f.target.value.trim()),g(f)},value:s.fullName}),d.jsx(De,{name:"fullName",component:qe})]}),d.jsxs(Be,{children:[d.jsx(Ue,{htmlFor:"email",children:"Email"}),d.jsx(Ne,{id:"email",name:"email",type:"email",placeholder:"example@email.com",onChange:f=>{p("email",f.target.value.trim()),g(f)},value:s.email}),d.jsx(De,{name:"email",component:qe})]}),d.jsxs(Qt,{children:[d.jsxs(Be,{children:[d.jsx(Ue,{htmlFor:"password",children:"Password"}),d.jsx(Ne,{id:"password",name:"password",type:n.password?"text":"password",placeholder:"********",onChange:f=>{p("password",f.target.value.trim()),g(f)},value:s.password.trim()}),d.jsx(De,{name:"password",component:qe})]}),d.jsx(yt,{icon:n.password?Ht:Wt,iconSize:24,onClick:()=>r(f=>({...f,password:!f.password})),round:!0})]}),d.jsxs(Qt,{children:[d.jsxs(Be,{children:[d.jsx(Ue,{htmlFor:"confirmPassword",children:"Confirm password"}),d.jsx(Ne,{id:"confirmPassword",name:"confirmPassword",type:n.confirmPassword?"text":"password",placeholder:"********",onChange:f=>{p("confirmPassword",f.target.value.trim()),g(f)},value:s.confirmPassword}),d.jsx(De,{name:"confirmPassword",component:qe})]}),d.jsx(yt,{icon:n.confirmPassword?Ht:Wt,iconSize:24,onClick:()=>r(f=>({...f,confirmPassword:!f.confirmPassword})),round:!0})]})]}),d.jsx(wi,{type:"submit",isLoading:c,icon:xi,disabled:c,children:"Save"})]})})};function yr(e){return Oe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z"}}]})(e)}function br(e){return Oe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z"}}]})(e)}const wr=j.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${e=>e.color?e.color:o.colors.primary.regular};
  transition: ${o.transition.primary};
  padding: ${o.space[1]} ${o.space[2]};
  border-radius: 19.5px;

  svg {
    transition: ${o.transition.primary};
    color: ${e=>e.color?e.color:o.colors.black};
    transform-origin: center;
  }

  :disabled {
    pointer-events: none;
  }

  :hover:not(:disabled) {
    background-color: ${o.colors.primary.light};

    svg {
      fill: ${o.colors.primary.regular};
    }

    span {
      color: ${o.colors.primary.regular};
    }
  }
`,xr=j.span`
  color: ${e=>e.color?e.color:o.colors.black};
  font-family: ${o.fonts.body};
  font-size: ${o.fontSizes.l};
  font-weight: ${o.fontWeights.regular};
  transition: ${o.transition.primary};
  margin-left: ${e=>e.isIconThere?o.space[2]:o.space[0]};
`,At=({id:e=null,color:t=null,icon:s,iconSize:i=34,children:n,onClick:r=null,isLoading:a=!1})=>d.jsxs(wr,{id:e,color:t,onClick:r,children:[a&&s&&d.jsx(_s,{children:d.jsx(ks,{size:i})}),!a&&s&&d.jsx(s,{size:i,color:t}),d.jsx(xr,{isIconThere:s,color:t,children:n})]}),_r=j.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${e=>e.color?e.color:o.colors.primary.regular};
  transition: ${o.transition.primary};
  padding: ${o.space[1]} ${o.space[2]};
  border-radius: 19.5px;

  svg {
    margin-right: ${o.space[2]};
    transition: ${o.transition.primary};
    color: ${e=>e.color?e.color:o.colors.black};
  }

  :disabled {
    pointer-events: none;
  }

  :hover:not(:disabled) {
    background-color: ${o.colors.primary.light};

    svg {
      fill: ${o.colors.primary.regular};
    }

    span {
      color: ${o.colors.primary.regular};
    }
  }
`,kr=j.input`
  visibility: hidden;
  width: 0;
  height: 0;
`,Sr=j.span`
  color: ${e=>e.color?e.color:o.colors.black};
  font-family: ${o.fonts.body};
  font-size: ${o.fontSizes.l};
  font-weight: ${o.fontWeights.regular};
  transition: ${o.transition.primary};
`,$r=({label:e,id:t,onClick:s=null,onChange:i=null,isLoading:n,icon:r,iconSize:a=22,color:l=null})=>d.jsxs(_r,{children:[n&&r&&d.jsx(_s,{children:d.jsx(ks,{size:a})}),!n&&r&&d.jsx(r,{size:a,color:l}),d.jsx(kr,{type:"file",id:t,name:t,onClick:s,onChange:i}),d.jsx(Sr,{children:e})]}),Pr=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
`,jr=j.img`
  width: 100px;
  height: 100px;
  border-radius: ${o.radii.round};
  margin-bottom: ${o.space[3]};
  object-fit: cover;
`,Ar=({user:e,avatarUrl:t="",fullName:s="",setShowModal:i})=>{const[n,r]=b.useState(!1),[a,l]=b.useState(!1),[h,{isLoading:c,isSuccess:y,isError:m,error:v}]=oi(),k=It(),g=f=>{l(f.target.files[0]),r(!0)},p=async()=>{const f=new FormData;f.append("avatar",a);const{data:S}=await h(f);k(ws({...e,avatarUrl:S.avatarUrl})),r(!1)};return b.useEffect(()=>{y&&(me.Notify.success("Avatar successfully updated",{showOnlyTheLastOne:!0,position:"right-bottom"}),i(!1)),m&&me.Notify.failure(v.data.message,{showOnlyTheLastOne:!0,position:"right-bottom"})},[v,m,y,i]),d.jsxs(Pr,{children:[d.jsx(jr,{src:a?URL.createObjectURL(a):t,alt:s}),n?d.jsx(At,{onClick:p,icon:yr,isLoading:c,iconSize:20,children:"Confirm"}):d.jsx($r,{id:"avatarUrl",name:"avatarUrl",label:"Change photo",onChange:g,isLoading:c,icon:br})]})},Ir=({setShowModal:e})=>{const t=xs(li);return d.jsxs(hr,{children:[d.jsx(Ar,{fullname:t.fullname,avatarUrl:t.avatarUrl,setShowModal:e,user:t}),d.jsx(vr,{setShowModal:e,user:t})]})};function Cr(e){return Oe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M192 277.4h189.7l-43.6 44.7L368 352l96-96-96-96-31 29.9 44.7 44.7H192v42.8z"}},{tag:"path",attr:{d:"M255.7 421.3c-44.1 0-85.5-17.2-116.7-48.4-31.2-31.2-48.3-72.7-48.3-116.9 0-44.1 17.2-85.7 48.3-116.9 31.2-31.2 72.6-48.4 116.7-48.4 44 0 85.3 17.1 116.5 48.2l30.3-30.3c-8.5-8.4-17.8-16.2-27.7-23.2C339.7 61 298.6 48 255.7 48 141.2 48 48 141.3 48 256s93.2 208 207.7 208c42.9 0 84-13 119-37.5 10-7 19.2-14.7 27.7-23.2l-30.2-30.2c-31.1 31.1-72.5 48.2-116.5 48.2zM448.004 256.847l-.849-.848.849-.849.848.849z"}}]})(e)}const vs=(e,t)=>{if(e.length<=t||e.length-3<=t)return e.trim();const s=t-3;return`${e.slice(0,s).trim()}...`},Mr=j.div`
  @media (${o.mediaBreakpoints.mobile.media}) {
    width: calc(312px - ${o.space[3]} * 2);
  }
  @media ${o.mediaBreakpoints.tablet.media} {
    width: 330px;
  }
  @media ${o.mediaBreakpoints.desktop.media} {
    width: 330px;
  }

  p {
    display: flex;
    flex-direction: column;
  }
`,Er=j.div`
  display: flex;
  gap: ${o.space[2]};
  align-items: center;
`,Rr=j.img`
  width: 64px;
  height: 64px;
  border-radius: ${o.radii.round};
  object-fit: cover;
`,Or=j.span`
  color: ${o.colors.black};
  font-size: ${o.fontSizes.l};
  font-weight: ${o.fontWeights.bold};
`,Fr=j.span`
  color: ${o.colors.secondary.regular};
  font-size: ${o.fontSizes.m};
  font-weight: ${o.fontWeights.light};
`,Tr=j.div`
  display: flex;
  flex-direction: column;
  gap: ${o.space[1]};
  margin-top: ${o.space[3]};
`,zr=({user:e,setPopUpShow:t,setShowModal:s})=>{const i=It(),[n,{isError:r,isLoading:a,isSuccess:l,error:h}]=ci();b.useEffect(()=>{l&&(me.Notify.success("Successfully Logout",{position:"right-bottom"}),t(null)),r&&me.Notify.failure(h.message,{position:"right-bottom"})},[h,r,l,t]);const c=()=>{t(null),s(!0)},y=async()=>{await n(),i(ui())};return d.jsxs(Mr,{children:[d.jsxs(Er,{children:[d.jsx(Rr,{src:e.avatarUrl,alt:e.name}),d.jsxs("p",{children:[d.jsx(Or,{children:vs(e.fullName,18)}),d.jsx(Fr,{children:vs(e.email,18)})]})]}),d.jsxs(Tr,{children:[d.jsx(At,{iconSize:20,icon:_i,color:o.colors.black,onClick:c,children:"Settings"}),d.jsx(At,{iconSize:20,icon:Cr,color:o.colors.black,onClick:y,id:"logout",isLoading:a,children:"Logout"})]})]})},Vr=j.ul`
  display: flex;
  align-items: center;

  li {
    :not(:last-of-type) {
      margin-right: ${o.space[1]};
    }
  }
`,ys=j(di)`
  font-size: ${o.fontSizes.m};
  font-weight: ${o.fontWeights.regular};
  color: ${o.colors.secondary.bg};
  transition: ${o.transition.primary};
  display: flex;
  align-items: center;
  padding: ${o.space[1]} ${o.space[2]};
  border-radius: 18.5px;

  span {
    margin-left: ${o.space[1]};
  }

  :hover {
    color: ${o.colors.black};
    background-color: ${o.colors.secondary.light};
  }

  &.active {
    color: ${o.colors.primary.regular};
    background-color: ${o.colors.secondary.bg};

    :hover {
      color: ${o.colors.black};
    }
  }
`,Lr=()=>{const{MediaType:e}=Ss();return d.jsxs(Vr,{children:[d.jsx("li",{children:d.jsxs(ys,{to:"/login",children:[d.jsx(ki,{size:e==="mobile"?32:20}),e!=="mobile"&&d.jsx("span",{children:"Login"})]})}),d.jsx("li",{children:d.jsxs(ys,{to:"/register",children:[d.jsx(Si,{size:e==="mobile"?32:20}),e!=="mobile"&&d.jsx("span",{children:"Registration"})]})})]})},Br=j.header`
  width: 100%;
  padding: ${o.space[3]} 0;
  background-color: ${o.colors.secondary.dark};

  div[id='appBarContainer'] {
    min-height: 52px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
`,Ur=j.div`
  position: relative;
`,Nr=j.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  cursor: pointer;
`,Dr=()=>{const[e,t]=b.useState(null),[s,i]=b.useState(!1),[n,r]=b.useState({_id:"",fullName:"",email:""}),a=xs(fi),l=h=>{t(c=>{switch(!0){case!c:return h;case(c&&c!==h):return h;default:return null}})};return b.useEffect(()=>{r(a.user)},[a.user]),b.useEffect(()=>(window.addEventListener("keydown",h=>{h.key==="Escape"&&t(null)}),()=>{window.removeEventListener("keydown",h=>{h.key==="Escape"&&t(null)})}),[]),d.jsxs(Br,{children:[d.jsxs(mi,{id:"appBarContainer",children:[d.jsx(Mi,{}),!n._id||!a.accessToken?d.jsx(Lr,{}):d.jsxs(Ur,{children:[d.jsx(Nr,{src:n.avatarUrl,onClick:()=>l("profileOpen")}),d.jsx(rr,{isOpen:e==="profileOpen",children:d.jsx(zr,{user:n,setPopUpShow:t,setShowModal:i})})]})]}),d.jsx(fr,{toggleModal:()=>i(!1),isOpen:s,title:"Settings",children:d.jsx(Ir,{setShowModal:i})})]})},qr=()=>d.jsxs(d.Fragment,{children:[d.jsx(Dr,{}),d.jsx(hi,{})]}),Zr=qr;export{Zr as default};
