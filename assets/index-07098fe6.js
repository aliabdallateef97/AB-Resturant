import{g as K,a as V,s as v,_ as y,r as A,u as H,b as N,c as W,j as e,F as Y,d as Z,T as G,e as _,f as J,h as f,i as w,S as u,k as z,l as E,m as D,n as R,o as T,p as Q,q as k,R as L,t as X,v as ee,C as x,w as d,x as se,y as te,I as ne,O as oe,z as ae,L as re}from"./index-05581993.js";import{C as ie}from"./OrderItemStyled-1d6e0b9d.js";function le(t){return V("MuiInputAdornment",t)}const de=K("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),$=de;var M;const ce=["children","className","component","disablePointerEvents","disableTypography","position","variant"],ue=(t,n)=>{const{ownerState:s}=t;return[n.root,n[`position${_(s.position)}`],s.disablePointerEvents===!0&&n.disablePointerEvents,n[s.variant]]},pe=t=>{const{classes:n,disablePointerEvents:s,hiddenLabel:o,position:r,size:i,variant:p}=t,m={root:["root",s&&"disablePointerEvents",r&&`position${_(r)}`,p,o&&"hiddenLabel",i&&`size${_(i)}`]};return J(m,le,n)},me=v("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:ue})(({theme:t,ownerState:n})=>y({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},n.variant==="filled"&&{[`&.${$.positionStart}&:not(.${$.hiddenLabel})`]:{marginTop:16}},n.position==="start"&&{marginRight:8},n.position==="end"&&{marginLeft:8},n.disablePointerEvents===!0&&{pointerEvents:"none"})),he=A.forwardRef(function(n,s){const o=H({props:n,name:"MuiInputAdornment"}),{children:r,className:i,component:p="div",disablePointerEvents:m=!1,disableTypography:j=!1,position:a,variant:g}=o,b=N(o,ce),c=W()||{};let l=g;g&&c.variant,c&&!l&&(l=c.variant);const h=y({},o,{hiddenLabel:c.hiddenLabel,size:c.size,disablePointerEvents:m,position:a,variant:l}),U=pe(h);return e.jsx(Y.Provider,{value:null,children:e.jsx(me,y({as:p,ownerState:h,className:Z(U.root,i),ref:s},b,{children:typeof r=="string"&&!j?e.jsx(G,{color:"text.secondary",children:r}):e.jsxs(A.Fragment,{children:[a==="start"?M||(M=e.jsx("span",{className:"notranslate",children:"​"})):null,r]})}))})}),ve=he;var I={},ge=w;Object.defineProperty(I,"__esModule",{value:!0});var q=I.default=void 0,xe=ge(f()),fe=e,we=(0,xe.default)((0,fe.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");q=I.default=we;var C={},je=w;Object.defineProperty(C,"__esModule",{value:!0});var F=C.default=void 0,be=je(f()),ye=e,_e=(0,be.default)((0,ye.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");F=C.default=_e;var P={},Ie=w;Object.defineProperty(P,"__esModule",{value:!0});var B=P.default=void 0,Ce=Ie(f()),Pe=e,Se=(0,Ce.default)((0,Pe.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");B=P.default=Se;var S={},Ae=w;Object.defineProperty(S,"__esModule",{value:!0});var O=S.default=void 0,ke=Ae(f()),Le=e,$e=(0,ke.default)((0,Le.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");O=S.default=$e;const Me=v(u)(({theme:t})=>({flexDirection:"row",justifyContent:"space-between",margin:"20px 0",[t.breakpoints.down("md")]:{flexDirection:"column-reverse",gap:"20px"}})),ze=v(u)(({theme:t})=>({flexDirection:"column",gap:"20px",alignItems:"center",width:"50%",[t.breakpoints.down("md")]:{width:"100%"}})),Ee=v("form")({display:"flex",width:"90%",flexDirection:"column",gap:"30px"}),De=v(u)(({theme:t})=>({width:"40%",img:{width:"100%"},[t.breakpoints.down("md")]:{width:"100%"}})),Re="/AB-Resturant/assets/undraw_secure_login_pdn4-5c485f5b.svg",Te=t=>T.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDsP2KqofU01dDahEgi09cfKL7weKhOn-Y",t),qe=()=>{const t=z(),n=E();return D(Te,{onSuccess:s=>{var r,i;const o={idToken:(r=s==null?void 0:s.data)==null?void 0:r.idToken,localId:(i=s==null?void 0:s.data)==null?void 0:i.localId};t(R(o)),n("/home")},onError:s=>{const o=s;o.response&&o.response.data?alert(o.response.data.error.message):alert("An unknown error occurred")}})},Fe=t=>T.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDsP2KqofU01dDahEgi09cfKL7weKhOn-Y",t),Be=()=>{const t=z(),n=E();return D(Fe,{onSuccess:s=>{var r,i;const o={idToken:(r=s==null?void 0:s.data)==null?void 0:r.idToken,localId:(i=s==null?void 0:s.data)==null?void 0:i.localId};t(R(o)),n("/home")},onError:s=>{const o=s;o.response&&o.response.data?alert(o.response.data.error.message):alert("An unknown error occurred")}})},Oe=Q().shape({email:k().email("Invalid email").required("Email is required"),password:k().min(8,"Password must be at least 8 characters long").matches(/[a-zA-Z]/,"Password must contain at least one letter").matches(/\d/,"Password must contain at least one number").matches(/[\^$*.[\]{}()?"!@#%&/,><':;|_~`]/,"Password must contain at least one special character").required("Password is required")}),Ue={email:"",password:""},Ke=()=>{const[t,n]=L.useState(!1),[s,o]=L.useState(!1),{mutate:r,isLoading:i}=qe(),{mutate:p,isLoading:m}=Be(),j=X(),a=ee({initialValues:Ue,validationSchema:Oe,onSubmit:l=>{const h={email:l.email,password:l.password,returnSecureToken:!0};s?p(h):r(h)}}),g=()=>{o(l=>!l)},b=()=>n(l=>!l),c=l=>{l.preventDefault()};return e.jsx(ie,{children:e.jsxs(Me,{children:[e.jsxs(ze,{children:[e.jsx(x,{colorprops:"dark",variant:"h3",children:s?e.jsx(d,{id:"login"}):e.jsx(d,{id:"signup"})}),e.jsxs(Ee,{onSubmit:a.handleSubmit,children:[e.jsxs(u,{gap:"4px",children:[e.jsx(se,{id:"filled-number",label:e.jsx(d,{id:"email"}),type:"email",variant:"outlined",name:"email",value:a.values.email,onChange:a.handleChange,onBlur:a.handleBlur}),a.errors.email&&a.touched.email?e.jsx(x,{colorprops:"red",variant:"h5",children:a.errors.email}):null]}),e.jsxs(u,{gap:"4px",children:[e.jsxs(te,{variant:"outlined",children:[e.jsx(ne,{htmlFor:"outlined-adornment-password",children:e.jsx(d,{id:"password"})}),e.jsx(oe,{id:"outlined-adornment-password",value:a.values.password,name:"password",onChange:a.handleChange,onBlur:a.handleBlur,type:t?"password":"text",endAdornment:e.jsx(ve,{position:"end",children:e.jsx(ae,{"aria-label":"toggle password visibility",onClick:b,onMouseDown:c,edge:"end",children:t?e.jsx(F,{}):e.jsx(q,{})})}),label:"Password"})]}),a.errors.password&&a.touched.password?e.jsx(x,{colorprops:"red",variant:"h5",children:a.errors.password}):null]}),e.jsx(re,{loading:s?m:i,variant:"contained",size:"large",type:"submit",children:s?e.jsx(d,{id:"login"}):e.jsx(d,{id:"createAccount"})}),e.jsxs(u,{onClick:g,direction:"row",gap:"4px",sx:{cursor:"pointer"},children:[e.jsx(x,{colorprops:"gray",variant:"h5",children:s?e.jsx(d,{id:"signupMove"}):e.jsx(d,{id:"existing"})}),j.direction=="ltr"?e.jsx(B,{}):e.jsx(O,{})]})]})]}),e.jsx(De,{children:e.jsx("img",{src:Re,alt:"AuthImg"})})]})})},Ne=()=>e.jsx(Ke,{});export{Ne as default};
