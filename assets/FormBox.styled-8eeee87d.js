import{j as s,r as d,n as l,t as n}from"./index-95628fc1.js";import{e as x,L as c,f as u,E as f,g as h,P as j,I as w,h as F,i as I,F as B}from"./PasswordInput.styled-39d88c20.js";const E=({type:o,label:a,placeholder:r,id:e,onClick:i=null,readOnly:t=!1})=>s.jsxs(x,{children:[a&&s.jsx(c,{htmlFor:e,children:a}),s.jsx(u,{id:e,name:e,type:o,placeholder:r,onClick:i,readOnly:t}),s.jsx(f,{name:e,component:h})]}),y=({label:o,placeholder:a,id:r,onChange:e=null,value:i=""})=>{const[t,m]=d.useState(!1);return s.jsxs(j,{children:[s.jsx(E,{type:t?"text":"password",id:r,label:o,placeholder:a,onChange:e,value:i}),s.jsx(w,{icon:t?F:I,iconSize:24,onClick:()=>m(p=>!p),round:!0})]})},P=l(B)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 60px;

  @media (${n.mediaBreakpoints.mobile.media}) {
    width: 100%;
  }
  @media ${n.mediaBreakpoints.tablet.media} {
    width: 350px;
  }
  @media ${n.mediaBreakpoints.desktop.media} {
    width: 500px;
  }
`;export{P as F,E as I,y as P};
