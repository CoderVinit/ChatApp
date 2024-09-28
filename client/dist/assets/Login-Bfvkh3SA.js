import{j as e,r as C,u as H,S as V,V as A,_ as s,a as I,b as T}from"./index-Dm6jrkaa.js";import{i as D,u as x,a as F}from"./index-DpHtcuSt.js";import{C as q}from"./Container-_t8TImdz.js";import{P as R}from"./Modal-DKikbja4.js";import{c as k,T as o}from"./Typography-BNMws05L.js";import{T as l}from"./TextField-TzJcuXm1.js";import{B as v}from"./Button-Cbi2cfxC.js";import{A as M}from"./Avatar-BOgCjYz0.js";import{M as U}from"./IconButton-CjltV93Y.js";import"./isMuiElement-DExMpYSc.js";import"./Menu-BqoZ4b2f.js";const B=k([e.jsx("circle",{cx:"12",cy:"12",r:"3.2"},"0"),e.jsx("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"1")],"CameraAlt"),E=m=>{if(!D(m))return{isValid:!1,errorMessage:"Invalid username"}},Z=()=>{const[m,S]=C.useState(!0),[p,g]=C.useState(!1),f=x(""),j=x(""),r=x("",E),t=x(""),d=F("single"),y=H(),L=async b=>{var h,u;b.preventDefault();const c=s.loading("Logging In...");g(!0);const n={withCredentials:!0,headers:{"Content-Type":"application/json"}};try{const{data:a}=await I.post("http://localhost:4000/api/v1/users/login",{username:r.value,password:t.value},n);y(T(a.user)),s.success(a.message,{id:c})}catch(a){s.error(((u=(h=a==null?void 0:a.response)==null?void 0:h.data)==null?void 0:u.message)||"Something went wrong",{id:c})}finally{g(!1)}},W=async b=>{var u,a;b.preventDefault();const c=s.loading("Signing Up...");g(!0);const n=new FormData;n.append("avatar",d.file),n.append("name",f.value),n.append("username",r.value),n.append("password",t.value),n.append("bio",j.value);const h={withCredentials:!0,headers:{"Content-Type":"multipart/form-data"}};try{const{data:i}=await I.post("http://localhost:4000/api/v1/users/new",n,h);y(T(i.user)),s.success(i.message,{id:c})}catch(i){s.error(((a=(u=i==null?void 0:i.response)==null?void 0:u.data)==null?void 0:a.message)||"Something went wrong",{id:c})}finally{g(!1)}},w=()=>{S(!m)};return e.jsx(q,{component:"main",maxWidth:"xs",sx:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(R,{elevation:3,sx:{padding:4,display:"flex",flexDirection:"column",alignItems:"center"},children:m?e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"h5",children:"Sign In"}),e.jsxs("form",{style:{width:"100%",marginTop:"1rem"},onSubmit:L,children:[e.jsx(l,{label:"username",value:r.value,onChange:r.changeHandler,fullWidth:!0,required:!0,margin:"normal",variant:"outlined"}),e.jsx(l,{label:"password",value:t.value,onChange:t.changeHandler,type:"password",fullWidth:!0,required:!0,margin:"normal",variant:"outlined"}),e.jsx(v,{sx:{marginTop:"1rem"},fullWidth:!0,variant:"contained",color:"primary",type:"submit",disabled:p,children:"Login"}),e.jsx(o,{sx:{textAlign:"center",marginTop:2},children:"OR"}),e.jsx(v,{sx:{marginTop:"1rem"},fullWidth:!0,variant:"text",onClick:w,disabled:p,children:"Register"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"h5",children:"Register"}),e.jsxs("form",{style:{width:"100%",marginTop:"1rem"},onSubmit:W,children:[e.jsxs(V,{position:"relative",width:"10rem",margin:"auto",children:[e.jsx(M,{sx:{height:"10rem",width:"10rem"},objectfit:"contain",src:d.preview}),e.jsx(U,{sx:{position:"absolute",bottom:"0",right:"0",color:"#fff",bgcolor:"rgba(0,0,0,0.5)",":hover":{bgcolor:"rgba(0,0,0,0.7)"}},component:"label",children:e.jsxs(e.Fragment,{children:[e.jsx(B,{}),e.jsx(A,{type:"file",onChange:d.changeHandler})]})})]}),d.error&&e.jsx(o,{m:"1rem auto",width:"fit-content",display:"block",color:"error",variant:"caption",children:d.error}),e.jsx(l,{label:"name",value:f.value,onChange:f.changeHandler,fullWidth:!0,required:!0,margin:"normal",variant:"outlined"}),e.jsx(l,{label:"username",value:r.value,onChange:r.changeHandler,fullWidth:!0,required:!0,margin:"normal",variant:"outlined"}),r.error&&e.jsx(o,{color:"error",variant:"caption",children:r.error}),e.jsx(l,{label:"bio",value:j.value,onChange:j.changeHandler,fullWidth:!0,margin:"normal",variant:"outlined"}),e.jsx(l,{label:"password",value:t.value,onChange:t.changeHandler,type:"password",fullWidth:!0,required:!0,margin:"normal",variant:"outlined"}),e.jsx(v,{sx:{marginTop:"1rem"},fullWidth:!0,variant:"contained",color:"primary",type:"submit",disabled:p,children:"SignUp"}),e.jsx(o,{sx:{textAlign:"center",marginTop:2},children:"OR"}),e.jsx(v,{fullWidth:!0,sx:{marginTop:"1rem"},variant:"text",onClick:w,disabled:p,children:"Login"})]})]})})})};export{Z as default};
