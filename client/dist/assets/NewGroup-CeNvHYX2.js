import{u as w,c as y,aI as C,r as M,j as e,S as n,n as N,aJ as S,_ as m,F as T}from"./index-Dm6jrkaa.js";import{u as k}from"./index-DpHtcuSt.js";import{b as A,a as D}from"./Features-M4ODAUeT.js";import{U as E}from"./UserItems-bP_p-Hwu.js";import{D as H,a as I}from"./DialogTitle-BrCAEDFX.js";import{T as _}from"./TextField-TzJcuXm1.js";import{T as F}from"./Typography-BNMws05L.js";import{B as c}from"./Button-Cbi2cfxC.js";import"./Modal-DKikbja4.js";import"./ListItem-BZnh-FdA.js";import"./Menu-BqoZ4b2f.js";import"./isMuiElement-DExMpYSc.js";import"./Avatar-BOgCjYz0.js";import"./IconButton-CjltV93Y.js";import"./Delete-Cwb7cZ6I.js";const $=()=>{var l;const u=w(),{isNewGroup:p}=y(r=>r.misc),{isError:d,isLoading:x,error:h,data:o}=C(),[f,j]=A(S),[t,b]=M.useState([]),s=k("");D([{isError:d,error:h}]);const g=r=>{b(i=>i.includes(r)?i.filter(G=>G!==r):[...i,r])},v=()=>{if(!s.value)return m.error("Group name is required!");if(t.length<2)return m.error("Group must have minimum 3 members");f("Creating a new Group...",{name:s==null?void 0:s.value,members:t}),a()},a=()=>{u(T(!1))};return e.jsx(H,{open:p,onClose:a,children:e.jsxs(n,{p:{xs:"1rem",sm:"3rem"},width:"25rem",spacing:"2rem",children:[e.jsx(I,{textAlign:"center",variant:"h4",children:"New Group"}),e.jsx(_,{label:"Group Name",value:s.value,onChange:s.changeHandler}),e.jsx(F,{variant:"body1",children:"Members"}),e.jsx(n,{children:x?e.jsx(N,{}):(l=o==null?void 0:o.friends)==null?void 0:l.map(r=>e.jsx(E,{user:r,handler:g,isAdded:t.includes(r._id)},r._id))}),e.jsxs(n,{direction:"row",justifyContent:"space-evenly",children:[e.jsx(c,{variant:"text",color:"error",size:"large",onClick:a,children:"Cancel"}),e.jsx(c,{variant:"contained",color:"primary",size:"large",onClick:v,disabled:j,children:"Create"})]})]})})};export{$ as default};
