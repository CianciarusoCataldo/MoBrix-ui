"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[724],{4182:(e,s,r)=>{r.d(s,{A:()=>c});var t=r(7081),a=r(5001),l=r(5971),n=r(4414);const c=e=>{const s=(0,t.d4)(a.jJ);return(0,n.jsx)(l.ag,{...e,dark:s})}},7701:(e,s,r)=>{r.d(s,{A:()=>i});var t=r(8738),a=r.n(t),l=r(5971),n=r(9950),c=r(5627),o=r(4414);const d=(0,c.y)((e=>{let{children:s,location:{pathname:r}}=e;return(0,n.useEffect)((()=>{document.getElementById("scroll-manager")&&document.getElementById("scroll-manager").scrollIntoView()}),[r]),(0,o.jsx)("div",{id:"scroll-manager",children:s||null})})),i=e=>{let{className:s,children:r}=e;return(0,o.jsx)(d,{children:(0,o.jsx)(l.mc,{animated:!0,unstyled:!0,className:a()("m-2",s),children:r})})}},4477:(e,s,r)=>{r.d(s,{h:()=>m});var t=r(6742),a=r(7081),l=r(1123),n=r(5971),c=r(4182),o=r(7701),d=r(6555),i=r(4414);const m=e=>{let{children:s,name:r,render:m,props:h,translations:u}=e;const x=(0,l.S)(),{t:p}=(0,t.B)(u?r.toLowerCase():"common"),b=x("component",{componentName:r}),j=(0,a.d4)(d.X5);return(0,i.jsxs)(o.A,{children:[(0,i.jsx)(c.A,{className:"text-4xl mt-12 mb-5 ml-3",children:b}),(0,i.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[(0,i.jsx)("iframe",{className:"w-full h-[30rem] mb-2",title:"".concat(r," page"),src:"https://cianciarusocataldo.github.io/".concat(j[r].replace("/mobrix-ui","/mobrix-ui/docs"))}),s,m&&m(p,b),(0,i.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,i.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),h&&(0,i.jsx)(n.XI,{headers:!0,rows:h})]})]})}},6597:(e,s,r)=>{r.d(s,{Q:()=>a,f:()=>l});var t=r(9137);const a={className:(0,t.BG)(""),hide:(0,t.Ue)(!1),dark:(0,t.Ue)(!1),shadow:(0,t.Ue)(!1),unstyled:(0,t.Ue)(!1),animated:(0,t.Ue)(!0),disabled:(0,t.Ue)(!1),hover:(0,t.Ue)(!0),a11y:(0,t.Ue)(!0),a11yLabel:(0,t.BG)("")},l=[["animated","dark","shadow"],["className","unstyled","hover","disabled"],["hide","a11y","a11yLabel"]]},1123:(e,s,r)=>{r.d(s,{B:()=>l,S:()=>a});var t=r(6742);const a=()=>{const{t:e}=(0,t.B)("common");return e},l=()=>{const{t:e}=(0,t.B)("overview");return e}},486:(e,s,r)=>{r.r(s),r.d(s,{ModalPage:()=>o,default:()=>d});var t=r(9137),a=r(5971),l=r(4477),n=r(6597),c=r(4414);const o=()=>(0,c.jsx)(l.h,{name:"Modal",translations:!0,render:(e,s)=>{const r=e("props_closeButton"),l=e("props_openButton");return(0,c.jsx)(t.CH,{startColor:"#999",label:s,props:{title:(0,t.BG)("title"),children:(0,t.BG)("children"),[r]:(0,t.Ue)(!0),closeOutside:(0,t.Ue)(!0),...n.Q,hide:(0,t.Ku)(!0)},rows:[["title","children","closeOutside",r],...n.f],children:(e,s)=>{let t={...e};return delete t[r],(0,c.jsxs)("div",{className:"flex flex-col items-center",children:[(0,c.jsx)(a.$n,{onClick:()=>s({...e,hide:!1}),children:l}),(0,c.jsx)(a.aF,{...t,children:(0,c.jsx)("div",{children:t.children}),onClose:e[r]&&(()=>s({...e,hide:!0}))})]})}})}}),d=o}}]);