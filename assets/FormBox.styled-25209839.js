import{j as s,r as x,n as l}from"./index-89c7967e.js";import{e as c,L as u,f as m,E as d,g as f,P as j,I as F,h as I,i as w,F as E}from"./PasswordInput.styled-a4901847.js";const h=({type:t,label:o,placeholder:n,id:e,onClick:a=null,readOnly:r=!1})=>s.jsxs(c,{children:[o&&s.jsx(u,{htmlFor:e,children:o}),s.jsx(m,{id:e,name:e,type:t,placeholder:n,onClick:a,readOnly:r}),s.jsx(d,{name:e,component:f})]}),P=({label:t,placeholder:o,id:n,onChange:e=null,value:a=""})=>{const[r,i]=x.useState(!1);return s.jsxs(j,{children:[s.jsx(h,{type:r?"text":"password",id:n,label:t,placeholder:o,onChange:e,value:a}),s.jsx(F,{icon:r?I:w,iconSize:24,onClick:()=>i(p=>!p),round:!0})]})},B=l(E)`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 60px;
`;export{B as F,h as I,P};
