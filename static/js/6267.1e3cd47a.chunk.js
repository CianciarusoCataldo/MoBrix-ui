"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[6267],{4182:(e,a,l)=>{l.d(a,{A:()=>d});var r=l(7081),s=l(5001),t=l(5971),o=l(4414);const d=e=>{const a=(0,r.d4)(s.jJ);return(0,o.jsx)(t.ag,{...e,dark:a})}},7701:(e,a,l)=>{l.d(a,{A:()=>i});var r=l(8738),s=l.n(r),t=l(5971),o=l(9950),d=l(5627),c=l(4414);const n=(0,d.y)((e=>{let{children:a,location:{pathname:l}}=e;return(0,o.useEffect)((()=>{document.getElementById("scroll-manager")&&document.getElementById("scroll-manager").scrollIntoView()}),[l]),(0,c.jsx)("div",{id:"scroll-manager",children:a||null})})),i=e=>{let{className:a,children:l}=e;return(0,c.jsx)(n,{children:(0,c.jsx)(t.mc,{animated:!0,unstyled:!0,className:s()("m-2",a),children:l})})}},4477:(e,a,l)=>{l.d(a,{h:()=>m});var r=l(6742),s=l(7081),t=l(1123),o=l(5971),d=l(4182),c=l(7701),n=l(6555),i=l(4414);const m=e=>{let{children:a,name:l,render:m,props:h,translations:p}=e;const u=(0,t.S)(),{t:x}=(0,r.B)(p?l.toLowerCase():"common"),f=u("component",{componentName:l}),b=(0,s.d4)(n.X5);return(0,i.jsxs)(c.A,{children:[(0,i.jsx)(d.A,{className:"text-4xl mt-12 mb-5 ml-3",children:f}),(0,i.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[(0,i.jsx)("iframe",{className:"w-full h-[30rem] mb-2",title:"".concat(l," page"),src:"https://cianciarusocataldo.github.io/".concat(b[l].replace("/mobrix-ui","/mobrix-ui/docs"))}),a,m&&m(x,f),(0,i.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,i.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),h&&(0,i.jsx)(o.XI,{headers:!0,rows:h})]})]})}},6597:(e,a,l)=>{l.d(a,{Q:()=>s,f:()=>t});var r=l(9137);const s={className:(0,r.BG)(""),hide:(0,r.Ue)(!1),dark:(0,r.Ue)(!1),shadow:(0,r.Ue)(!1),unstyled:(0,r.Ue)(!1),animated:(0,r.Ue)(!0),disabled:(0,r.Ue)(!1),hover:(0,r.Ue)(!0),a11y:(0,r.Ue)(!0),a11yLabel:(0,r.BG)("")},t=[["animated","dark","shadow"],["className","unstyled","hover","disabled"],["hide","a11y","a11yLabel"]]},1123:(e,a,l)=>{l.d(a,{B:()=>t,S:()=>s});var r=l(6742);const s=()=>{const{t:e}=(0,r.B)("common");return e},t=()=>{const{t:e}=(0,r.B)("overview");return e}},785:(e,a,l)=>{l.r(a),l.d(a,{default:()=>c});var r=l(9137),s=l(6597),t=l(5971),o=l(4477),d=l(4414);const c=()=>(0,d.jsx)(o.h,{name:"Form",translations:!0,render:(e,a)=>{let l={...s.Q};return["title","children","submitLabel"].forEach((a=>l[a]=(0,r.BG)(e("props",{context:a})))),l.fieldClassName=(0,r.BG)(""),(0,d.jsx)(r.CH,{label:a,startColor:"#A19B9B",props:l,rows:[["title","submitLabel"],["children","fieldClassName"],["className","dark","shadow"],["unstyled","hide"]],children:a=>(0,d.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,d.jsx)(t.lV,{...a,fields:{field1:{placeholder:"placeholder",header:e("props_field",{context:"text"})},field2:{placeholder:"placeholder",type:"boolean",header:e("props_field",{context:"boolean"})},field3:{placeholder:"placeholder",type:"numeric",header:e("props_field",{context:"numeric"})},field4:{placeholder:"placeholder",type:"radio",header:e("props_field",{context:"radio"})}},onClick:e=>console.log(e)})})})}})}}]);