import{n as h,t as r,j as e}from"./index-95628fc1.js";import{C as p}from"./Container-7001a1ce.js";import{T as o,S as x}from"./Title-85f14986.js";const c=[{name:"John",age:21,grade:90},{name:"Jane",age:20,grade:85},{name:"Alice",age:22,grade:90},{name:"Bob",age:20,grade:80},{name:"David",age:21,grade:85}],j=s=>{const a=d=>(i,t)=>i[d]>t[d]?-1:i[d]<t[d]?1:0;return[...s].sort((d,i)=>{const t=a("grade")(d,i);if(t!==0)return t;const n=a("age")(d,i);return n!==0?n:a("name")(d,i)})},l=h.div`
  overflow: hidden;
  border-radius: ${r.radii.l};
  margin-top: ${r.space[2]};
  :first-of-type {
    margin-bottom: ${r.space[4]};
  }

  @media (${r.mediaBreakpoints.mobile.media}) {
    border-radius: ${r.radii.m};
  }
`,m=h.table`
  border-collapse: collapse;
  text-align: center;
  color: ${r.colors.primary.hover};

  @media (${r.mediaBreakpoints.mobile.media}) {
    font-size: ${r.fontSizes.s};
  }
  @media ${r.mediaBreakpoints.tablet.media} {
    font-size: ${r.fontSizes.m};
  }
  @media ${r.mediaBreakpoints.desktop.media} {
    font-size: ${r.fontSizes.m};
  }

  th,
  td:first-of-type {
    background: ${r.colors.primary.hover};
    color: ${r.colors.white};

    @media (${r.mediaBreakpoints.mobile.media}) {
      padding: ${r.space[1]} ${r.space[2]};
    }
    @media ${r.mediaBreakpoints.tablet.media} {
      padding: ${r.space[1]} ${r.space[3]};
    }
    @media ${r.mediaBreakpoints.desktop.media} {
      padding: ${r.space[1]} ${r.space[3]};
    }
  }

  th,
  td {
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: ${r.colors.secondary.bg};
  }
  td {
    background: ${r.colors.secondary.light};
  }
  th:first-of-type,
  td:first-of-type {
    text-align: center;
  }
`,g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{as:"h2",children:"Unsorted students:"}),e.jsx(l,{children:e.jsx(m,{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Position"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Age"}),e.jsx("th",{children:"Grade"})]}),c.map((s,a)=>e.jsxs("tr",{children:[e.jsxs("td",{children:[a+1,")"]}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.age}),e.jsx("td",{children:s.grade})]},s.name))]})})}),e.jsx(o,{as:"h2",children:"Sorted students:"}),e.jsx(l,{children:e.jsx(m,{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Position"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Age"}),e.jsx("th",{children:"Grade"})]}),j(c).map((s,a)=>e.jsxs("tr",{children:[e.jsxs("td",{children:[a+1,")"]}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.age}),e.jsx("td",{children:s.grade})]},s.name))]})})})]}),$=()=>e.jsx(x,{children:e.jsx(p,{children:e.jsx(g,{})})}),S=$;export{S as default};
