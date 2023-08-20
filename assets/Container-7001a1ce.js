import{n as a,t as i,j as d}from"./index-95628fc1.js";const n=a.div`
  /* width: ${i.mediaBreakpoints.desktop.width}; */
  height: 100%;
  padding: 0 ${i.space[3]};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${i.mediaBreakpoints.mobile.media}) {
    min-width: ${i.mediaBreakpoints.mobile.width};
  }
  @media ${i.mediaBreakpoints.tablet.media} {
    padding: 0 30px;
    width: ${i.mediaBreakpoints.tablet.width};
  }
  @media ${i.mediaBreakpoints.desktop.media} {
    padding: 0 15px;
    width: ${i.mediaBreakpoints.desktop.width};
  }
`,m=({children:e,id:t=null})=>d.jsx(n,{id:t,children:e});export{m as C};
