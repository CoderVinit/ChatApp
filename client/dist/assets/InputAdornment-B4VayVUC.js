import{q as E,p as P,t as C,w as c,r as b,x as I,y as j,j as a,z as L,v as m,A as z}from"./index-Dm6jrkaa.js";import{u as $,F as R}from"./TextField-TzJcuXm1.js";import{T}from"./Typography-BNMws05L.js";function F(n){return P("MuiInputAdornment",n)}const M=E("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),x=M;var f;const N=["children","className","component","disablePointerEvents","disableTypography","position","variant"],U=(n,t)=>{const{ownerState:e}=n;return[t.root,t[`position${m(e.position)}`],e.disablePointerEvents===!0&&t.disablePointerEvents,t[e.variant]]},_=n=>{const{classes:t,disablePointerEvents:e,hiddenLabel:o,position:s,size:r,variant:l}=n,d={root:["root",e&&"disablePointerEvents",s&&`position${m(s)}`,l,o&&"hiddenLabel",r&&`size${m(r)}`]};return z(d,F,t)},w=C("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:U})(({theme:n,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},t.variant==="filled"&&{[`&.${x.positionStart}&:not(.${x.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),S=b.forwardRef(function(t,e){const o=I({props:t,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:d=!1,disableTypography:g=!1,position:u,variant:v}=o,y=j(o,N),i=$()||{};let p=v;v&&i.variant,i&&!p&&(p=i.variant);const h=c({},o,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:d,position:u,variant:p}),A=_(h);return a.jsx(R.Provider,{value:null,children:a.jsx(w,c({as:l,ownerState:h,className:L(A.root,r),ref:e},y,{children:typeof s=="string"&&!g?a.jsx(T,{color:"text.secondary",children:s}):a.jsxs(b.Fragment,{children:[u==="start"?f||(f=a.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})}),k=S;export{k as I};
