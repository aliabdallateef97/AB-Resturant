import{E as Le,j as l,b as X,r as c,G as rt,H as Ne,J as $e,_ as f,g as de,a as ue,s as k,K as nt,u as be,t as ke,M as Z,d as $,f as fe,N as ce,P as st,R as at,w as M}from"./index-05581993.js";import{M as ct,C as E}from"./style-dfee851a.js";import{u as it,S as dt,M as ut}from"./index-b6c218cd.js";import"./style-8bb4c691.js";import{M as bt}from"./index-0a89981d.js";import{B as ft}from"./OrderItemStyled-1d6e0b9d.js";let W;function Ae(){if(W)return W;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),W="reverse",e.scrollLeft>0?W="default":(e.scrollLeft=1,e.scrollLeft===0&&(W="negative")),document.body.removeChild(e),W}function ht(e,t){const r=e.scrollLeft;if(t!=="rtl")return r;switch(Ae()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}const pt=Le(l.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),St=Le(l.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function vt(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function xt(e,t,r,a={},s=()=>{}){const{ease:u=vt,duration:h=300}=a;let b=null;const S=t[e];let B=!1;const v=()=>{B=!0},z=y=>{if(B){s(new Error("Animation cancelled"));return}b===null&&(b=y);const g=Math.min(1,(y-b)/h);if(t[e]=u(g)*(r-S)+S,g>=1){requestAnimationFrame(()=>{s(null)});return}requestAnimationFrame(z)};return S===r?(s(new Error("Element already at target position")),v):(requestAnimationFrame(z),v)}const mt=["onChange"],gt={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function wt(e){const{onChange:t}=e,r=X(e,mt),a=c.useRef(),s=c.useRef(null),u=()=>{a.current=s.current.offsetHeight-s.current.clientHeight};return rt(()=>{const h=$e(()=>{const S=a.current;u(),S!==a.current&&t(a.current)}),b=Ne(s.current);return b.addEventListener("resize",h),()=>{h.clear(),b.removeEventListener("resize",h)}},[t]),c.useEffect(()=>{u(),t(a.current)},[t]),l.jsx("div",f({style:gt,ref:s},r))}function Bt(e){return ue("MuiTabScrollButton",e)}const yt=de("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Ct=yt,Tt=["className","slots","slotProps","direction","orientation","disabled"],jt=e=>{const{classes:t,orientation:r,disabled:a}=e;return fe({root:["root",r,a&&"disabled"]},Bt,t)},It=k(nt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.orientation&&t[r.orientation]]}})(({ownerState:e})=>f({width:40,flexShrink:0,opacity:.8,[`&.${Ct.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),Mt=c.forwardRef(function(t,r){var a,s;const u=be({props:t,name:"MuiTabScrollButton"}),{className:h,slots:b={},slotProps:S={},direction:B}=u,v=X(u,Tt),y=ke().direction==="rtl",g=f({isRtl:y},u),ee=jt(g),F=(a=b.StartScrollButtonIcon)!=null?a:pt,x=(s=b.EndScrollButtonIcon)!=null?s:St,U=Z({elementType:F,externalSlotProps:S.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:g}),T=Z({elementType:x,externalSlotProps:S.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:g});return l.jsx(It,f({component:"div",className:$(ee.root,h),ref:r,role:null,ownerState:g,tabIndex:null},v,{children:B==="left"?l.jsx(F,f({},U)):l.jsx(x,f({},T))}))}),Et=Mt;function Pt(e){return ue("MuiTabs",e)}const Rt=de("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),ie=Rt,zt=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Pe=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,Re=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,Q=(e,t,r)=>{let a=!1,s=r(e,t);for(;s;){if(s===e.firstChild){if(a)return;a=!0}const u=s.disabled||s.getAttribute("aria-disabled")==="true";if(!s.hasAttribute("tabindex")||u)s=r(e,s);else{s.focus();return}}},Lt=e=>{const{vertical:t,fixed:r,hideScrollbar:a,scrollableX:s,scrollableY:u,centered:h,scrollButtonsHideMobile:b,classes:S}=e;return fe({root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",a&&"hideScrollbar",s&&"scrollableX",u&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",b&&"scrollButtonsHideMobile"],scrollableX:[s&&"scrollableX"],hideScrollbar:[a&&"hideScrollbar"]},Pt,S)},Nt=k("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${ie.scrollButtons}`]:t.scrollButtons},{[`& .${ie.scrollButtons}`]:r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,r.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>f({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${ie.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),$t=k("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})(({ownerState:e})=>f({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),kt=k("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})(({ownerState:e})=>f({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),At=k("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>f({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),Wt=k(wt)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),ze={},Ht=c.forwardRef(function(t,r){const a=be({props:t,name:"MuiTabs"}),s=ke(),u=s.direction==="rtl",{"aria-label":h,"aria-labelledby":b,action:S,centered:B=!1,children:v,className:z,component:y="div",allowScrollButtonsMobile:g=!1,indicatorColor:ee="primary",onChange:F,orientation:x="horizontal",ScrollButtonComponent:U=Et,scrollButtons:T="auto",selectionFollowsFocus:Xe,slots:_={},slotProps:he={},TabIndicatorProps:te={},TabScrollButtonProps:Y={},textColor:pe="primary",value:K,variant:oe="standard",visibleScrollbar:le=!1}=a,Fe=X(a,zt),w=oe==="scrollable",m=x==="vertical",H=m?"scrollTop":"scrollLeft",V=m?"top":"left",q=m?"bottom":"right",re=m?"clientHeight":"clientWidth",D=m?"height":"width",L=f({},a,{component:y,allowScrollButtonsMobile:g,indicatorColor:ee,orientation:x,vertical:m,scrollButtons:T,textColor:pe,variant:oe,visibleScrollbar:le,fixed:!w,hideScrollbar:w&&!le,scrollableX:w&&!m,scrollableY:w&&m,centered:B&&!w,scrollButtonsHideMobile:!g}),j=Lt(L),Ue=Z({elementType:_.StartScrollButtonIcon,externalSlotProps:he.startScrollButtonIcon,ownerState:L}),_e=Z({elementType:_.EndScrollButtonIcon,externalSlotProps:he.endScrollButtonIcon,ownerState:L}),[Se,Ye]=c.useState(!1),[N,ve]=c.useState(ze),[xe,Ke]=c.useState(!1),[me,Ve]=c.useState(!1),[ge,qe]=c.useState(!1),[we,Ge]=c.useState({overflow:"hidden",scrollbarWidth:0}),Be=new Map,C=c.useRef(null),A=c.useRef(null),ye=()=>{const o=C.current;let n;if(o){const d=o.getBoundingClientRect();n={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:ht(o,s.direction),scrollWidth:o.scrollWidth,top:d.top,bottom:d.bottom,left:d.left,right:d.right}}let i;if(o&&K!==!1){const d=A.current.children;if(d.length>0){const p=d[Be.get(K)];i=p?p.getBoundingClientRect():null}}return{tabsMeta:n,tabMeta:i}},O=ce(()=>{const{tabsMeta:o,tabMeta:n}=ye();let i=0,d;if(m)d="top",n&&o&&(i=n.top-o.top+o.scrollTop);else if(d=u?"right":"left",n&&o){const I=u?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;i=(u?-1:1)*(n[d]-o[d]+I)}const p={[d]:i,[D]:n?n[D]:0};if(isNaN(N[d])||isNaN(N[D]))ve(p);else{const I=Math.abs(N[d]-p[d]),J=Math.abs(N[D]-p[D]);(I>=1||J>=1)&&ve(p)}}),ne=(o,{animation:n=!0}={})=>{n?xt(H,C.current,o,{duration:s.transitions.duration.standard}):C.current[H]=o},Ce=o=>{let n=C.current[H];m?n+=o:(n+=o*(u?-1:1),n*=u&&Ae()==="reverse"?-1:1),ne(n)},Te=()=>{const o=C.current[re];let n=0;const i=Array.from(A.current.children);for(let d=0;d<i.length;d+=1){const p=i[d];if(n+p[re]>o){d===0&&(n=o);break}n+=p[re]}return n},Je=()=>{Ce(-1*Te())},Qe=()=>{Ce(Te())},Ze=c.useCallback(o=>{Ge({overflow:null,scrollbarWidth:o})},[]),et=()=>{const o={};o.scrollbarSizeListener=w?l.jsx(Wt,{onChange:Ze,className:$(j.scrollableX,j.hideScrollbar)}):null;const i=w&&(T==="auto"&&(xe||me)||T===!0);return o.scrollButtonStart=i?l.jsx(U,f({slots:{StartScrollButtonIcon:_.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:Ue},orientation:x,direction:u?"right":"left",onClick:Je,disabled:!xe},Y,{className:$(j.scrollButtons,Y.className)})):null,o.scrollButtonEnd=i?l.jsx(U,f({slots:{EndScrollButtonIcon:_.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:_e},orientation:x,direction:u?"left":"right",onClick:Qe,disabled:!me},Y,{className:$(j.scrollButtons,Y.className)})):null,o},je=ce(o=>{const{tabsMeta:n,tabMeta:i}=ye();if(!(!i||!n)){if(i[V]<n[V]){const d=n[H]+(i[V]-n[V]);ne(d,{animation:o})}else if(i[q]>n[q]){const d=n[H]+(i[q]-n[q]);ne(d,{animation:o})}}}),Ie=ce(()=>{w&&T!==!1&&qe(!ge)});c.useEffect(()=>{const o=$e(()=>{C.current&&O()}),n=Ne(C.current);n.addEventListener("resize",o);let i;return typeof ResizeObserver<"u"&&(i=new ResizeObserver(o),Array.from(A.current.children).forEach(d=>{i.observe(d)})),()=>{o.clear(),n.removeEventListener("resize",o),i&&i.disconnect()}},[O]),c.useEffect(()=>{const o=Array.from(A.current.children),n=o.length;if(typeof IntersectionObserver<"u"&&n>0&&w&&T!==!1){const i=o[0],d=o[n-1],p={root:C.current,threshold:.99},I=ae=>{Ke(!ae[0].isIntersecting)},J=new IntersectionObserver(I,p);J.observe(i);const lt=ae=>{Ve(!ae[0].isIntersecting)},Ee=new IntersectionObserver(lt,p);return Ee.observe(d),()=>{J.disconnect(),Ee.disconnect()}}},[w,T,ge,v==null?void 0:v.length]),c.useEffect(()=>{Ye(!0)},[]),c.useEffect(()=>{O()}),c.useEffect(()=>{je(ze!==N)},[je,N]),c.useImperativeHandle(S,()=>({updateIndicator:O,updateScrollButtons:Ie}),[O,Ie]);const Me=l.jsx(At,f({},te,{className:$(j.indicator,te.className),ownerState:L,style:f({},N,te.style)}));let G=0;const tt=c.Children.map(v,o=>{if(!c.isValidElement(o))return null;const n=o.props.value===void 0?G:o.props.value;Be.set(n,G);const i=n===K;return G+=1,c.cloneElement(o,f({fullWidth:oe==="fullWidth",indicator:i&&!Se&&Me,selected:i,selectionFollowsFocus:Xe,onChange:F,textColor:pe,value:n},G===1&&K===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),ot=o=>{const n=A.current,i=st(n).activeElement;if(i.getAttribute("role")!=="tab")return;let p=x==="horizontal"?"ArrowLeft":"ArrowUp",I=x==="horizontal"?"ArrowRight":"ArrowDown";switch(x==="horizontal"&&u&&(p="ArrowRight",I="ArrowLeft"),o.key){case p:o.preventDefault(),Q(n,i,Re);break;case I:o.preventDefault(),Q(n,i,Pe);break;case"Home":o.preventDefault(),Q(n,null,Pe);break;case"End":o.preventDefault(),Q(n,null,Re);break}},se=et();return l.jsxs(Nt,f({className:$(j.root,z),ownerState:L,ref:r,as:y},Fe,{children:[se.scrollButtonStart,se.scrollbarSizeListener,l.jsxs($t,{className:j.scroller,ownerState:L,style:{overflow:we.overflow,[m?`margin${u?"Left":"Right"}`:"marginBottom"]:le?void 0:-we.scrollbarWidth},ref:C,children:[l.jsx(kt,{"aria-label":h,"aria-labelledby":b,"aria-orientation":x==="vertical"?"vertical":null,className:j.flexContainer,ownerState:L,onKeyDown:ot,ref:A,role:"tablist",children:tt}),Se&&Me]}),se.scrollButtonEnd]}))}),Dt=Ht,We=c.createContext(null);function Ot(){const[e,t]=c.useState(null);return c.useEffect(()=>{t(`mui-p-${Math.round(Math.random()*1e5)}`)},[]),e}function Xt(e){const{children:t,value:r}=e,a=Ot(),s=c.useMemo(()=>({idPrefix:a,value:r}),[a,r]);return l.jsx(We.Provider,{value:s,children:t})}function He(){return c.useContext(We)}function De(e,t){const{idPrefix:r}=e;return r===null?null:`${e.idPrefix}-P-${t}`}function Oe(e,t){const{idPrefix:r}=e;return r===null?null:`${e.idPrefix}-T-${t}`}const Ft=["children"],Ut=c.forwardRef(function(t,r){const{children:a}=t,s=X(t,Ft),u=He();if(u===null)throw new TypeError("No TabContext provided");const h=c.Children.map(a,b=>c.isValidElement(b)?c.cloneElement(b,{"aria-controls":De(u,b.props.value),id:Oe(u,b.props.value)}):null);return l.jsx(Dt,f({},s,{ref:r,value:u.value,children:h}))}),_t=Ut;function Yt(e){return ue("MuiTabPanel",e)}de("MuiTabPanel",["root"]);const Kt=["children","className","value"],Vt=e=>{const{classes:t}=e;return fe({root:["root"]},Yt,t)},qt=k("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(3)})),Gt=c.forwardRef(function(t,r){const a=be({props:t,name:"MuiTabPanel"}),{children:s,className:u,value:h}=a,b=X(a,Kt),S=f({},a),B=Vt(S),v=He();if(v===null)throw new TypeError("No TabContext provided");const z=De(v,h),y=Oe(v,h);return l.jsx(qt,f({"aria-labelledby":y,className:$(B.root,u),hidden:h!==v.value,id:z,ref:r,role:"tabpanel",ownerState:S},b,{children:h===v.value&&s}))}),P=Gt,R=({type:e,number:t})=>{const{data:r,isLoading:a}=it({type:e,number:t});return l.jsx(bt,{loading:a,LoadingSkeleton:l.jsx(dt,{}),children:l.jsx(ct,{children:r==null?void 0:r.map(s=>l.jsx(ut,{id:s.id,image:s.img,title:s.title},s.id))})})},Jt=()=>{const[e,t]=at.useState("1"),r=(a,s)=>{t(s)};return l.jsxs(Xt,{value:e,children:[l.jsx(ft,{sx:{borderBottom:1,borderColor:"divider",marginTop:"10px"},children:l.jsxs(_t,{onChange:r,"aria-label":"lab API tabs example",variant:"scrollable",scrollButtons:"auto",allowScrollButtonsMobile:!0,children:[l.jsx(E,{label:l.jsx(M,{id:"main-course"}),value:"1"}),l.jsx(E,{label:l.jsx(M,{id:"side-dish"}),value:"2"}),l.jsx(E,{label:l.jsx(M,{id:"appetizer"}),value:"3"}),l.jsx(E,{label:l.jsx(M,{id:"salad"}),value:"4"}),l.jsx(E,{label:l.jsx(M,{id:"soup"}),value:"5"}),l.jsx(E,{label:l.jsx(M,{id:"sauce"}),value:"6"}),l.jsx(E,{label:l.jsx(M,{id:"drink"}),value:"7"}),l.jsx(E,{label:l.jsx(M,{id:"dessert"}),value:"8"})]})}),l.jsx(P,{value:"1",children:l.jsx(R,{type:"main course",number:20})}),l.jsx(P,{value:"2",children:l.jsx(R,{type:"side dish",number:20})}),l.jsx(P,{value:"3",children:l.jsx(R,{type:"appetizer",number:20})}),l.jsx(P,{value:"4",children:l.jsx(R,{type:"salad",number:20})}),l.jsx(P,{value:"5",children:l.jsx(R,{type:"soup",number:20})}),l.jsx(P,{value:"6",children:l.jsx(R,{type:"sauce",number:20})}),l.jsx(P,{value:"7",children:l.jsx(R,{type:"drink",number:20})}),l.jsx(P,{value:"8",children:l.jsx(R,{type:"dessert",number:20})})]})},ro=()=>l.jsx(Jt,{});export{ro as default};
