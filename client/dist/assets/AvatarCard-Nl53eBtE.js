import{q as w,p as U,t as _,w as c,r as i,x as L,y as k,j as e,z as A,A as z,S as B}from"./index-Dm6jrkaa.js";import{B as I,t as V}from"./Features-M4ODAUeT.js";import"./Menu-BqoZ4b2f.js";import{a as q,A as $}from"./Avatar-BOgCjYz0.js";function D(t){return U("MuiAvatarGroup",t)}const T=w("MuiAvatarGroup",["root","avatar"]),W=T,F=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],P={small:-16,medium:null},H=t=>{const{classes:a}=t;return z({root:["root"],avatar:["avatar"]},D,a)},J=_("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(t,a)=>c({[`& .${W.avatar}`]:a.avatar},a.root)})(({theme:t,ownerState:a})=>{const s=a.spacing&&P[a.spacing]!==void 0?P[a.spacing]:-a.spacing;return{[`& .${q.root}`]:{border:`2px solid ${(t.vars||t).palette.background.default}`,boxSizing:"content-box",marginLeft:s??-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}}),K=i.forwardRef(function(a,s){var r;const p=L({props:a,name:"MuiAvatarGroup"}),{children:j,className:M,component:g="div",componentsProps:N={},max:m=5,renderSurplus:f,slotProps:y={},spacing:b="medium",total:R,variant:u="circular"}=p,S=k(p,F);let o=m<2?2:m;const G=c({},p,{max:m,spacing:b,component:g,variant:u}),v=H(G),d=i.Children.toArray(j).filter(n=>i.isValidElement(n)),l=R||d.length;l===o&&(o+=1),o=Math.min(l+1,o);const C=Math.min(d.length,o-1),x=Math.max(l-o,l-C,0),E=f?f(x):`+${x}`,h=(r=y.additionalAvatar)!=null?r:N.additionalAvatar;return e.jsxs(J,c({as:g,ownerState:G,className:A(v.root,M),ref:s},S,{children:[x?e.jsx($,c({variant:u},h,{className:A(v.avatar,h==null?void 0:h.className),children:E})):null,d.slice(0,C).reverse().map(n=>i.cloneElement(n,{className:A(n.props.className,v.avatar),variant:n.props.variant||u}))]}))}),O=K,aa=({avatar:t=[],max:a=4})=>e.jsx(B,{direction:"row",spacing:.5,children:e.jsx(O,{max:a,sx:{position:"relative"},children:e.jsx(I,{width:"5rem",height:"3rem",children:t.map((s,r)=>e.jsx($,{src:V(s),alt:`avatar ${r}`,sx:{width:"3rem",height:"3rem",position:"absolute",left:{xs:`${.5+r}rem`,sm:`${r}rem`},marginRight:"2rem"}},Math.random()*100))})})});export{aa as A};
