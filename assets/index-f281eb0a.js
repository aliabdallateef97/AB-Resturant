import{j as e,r as j,Q as v,k as S,A as g,U as f,C as a,x as y,w as c,V as w,W as k}from"./index-05581993.js";import{a as z,D as C,S as D,b as M,c as I,d as b}from"./style-dfee851a.js";import{r as q}from"./style-8bb4c691.js";import{u as F,S as i,M as L}from"./index-0a89981d.js";import{C as T}from"./OrderItemStyled-1d6e0b9d.js";const P=s=>({title:s.title,id:s.id,img:s.image,price:s.pricePerServing,summary:s.summary}),Q=s=>q({url:`recipes/${s}/information?apiKey=21cc279360ce44d78b690e9c21a48844`}),$=({id:s})=>F({queryKey:["item",s],queryFn:()=>Q(s),select:P}),E=()=>e.jsxs(z,{children:[e.jsx(i,{variant:"text",sx:{fontSize:"2rem"},width:"60%"}),e.jsxs(C,{children:[e.jsx(i,{variant:"rectangular",width:"40%",height:300}),e.jsxs(D,{children:[e.jsx(i,{variant:"text",sx:{fontSize:"1rem"},width:"80%"}),e.jsx(i,{variant:"text",sx:{fontSize:"1rem"},width:"80%"}),e.jsx(i,{variant:"text",sx:{fontSize:"1rem"},width:"80%"}),e.jsx(i,{variant:"text",sx:{fontSize:"1rem"},width:"80%"}),e.jsx(i,{variant:"text",sx:{fontSize:"1rem"},width:"80%"}),e.jsx(i,{variant:"text",sx:{fontSize:"1rem"},width:"80%"}),e.jsx(i,{variant:"text",sx:{fontSize:"1rem"},width:"80%"}),e.jsx(i,{variant:"text",sx:{fontSize:"1rem"},width:"80%"}),e.jsx(i,{variant:"text",sx:{fontSize:"1rem"},width:"80%"})]})]})]}),H=()=>{var x;const[s,o]=j.useState(""),{id:r}=v(),d=S(),m=g(f);if(typeof r>"u")return e.jsx("div",{children:"Invalid ID"});const u=n=>{o(n.target.value)},{data:t,isLoading:p}=$({id:r}),h=()=>{var l;const n={title:t==null?void 0:t.title,price:(l=t==null?void 0:t.price)==null?void 0:l.toFixed(2),id:r,quantity:+s};d(k(n)),o("")};return e.jsx(L,{loading:p,LoadingSkeleton:e.jsx(E,{}),children:e.jsxs(T,{style:{marginTop:"30px"},children:[e.jsx(a,{colorprops:"dark",variant:"h3",responsive:"20px",children:t==null?void 0:t.title}),e.jsxs(M,{children:[e.jsx("img",{src:t==null?void 0:t.img}),e.jsxs(I,{children:[e.jsx(a,{colorprops:"dark",variant:"h4",responsive:"18px",children:"Summary"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:t?t==null?void 0:t.summary:""}}),e.jsxs(a,{colorprops:"dark",variant:"h4",responsive:"18px",children:["Price:$",(x=t==null?void 0:t.price)==null?void 0:x.toFixed(2)]}),m&&e.jsxs(b,{children:[e.jsx(y,{id:"filled-number",label:e.jsx(c,{id:"quantity"}),type:"number",value:s,onChange:u,InputLabelProps:{shrink:!0},variant:"standard"}),e.jsx(w,{variant:"outlined",size:"large",onClick:h,children:e.jsx(c,{id:"addToCard"})})]})]})]})]})})},R=()=>e.jsx(H,{});export{R as default};