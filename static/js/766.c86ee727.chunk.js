"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[766],{1592:function(n,e,r){var t=r(1413),a=r(6352),o=r(1269),i=r(1449),c=r(6417);e.Z=function(n){var e=(0,a.v9)(o.N2);return(0,c.jsx)(i.__,(0,t.Z)((0,t.Z)({},n),{},{dark:e}))}},1188:function(n,e,r){r.d(e,{Z:function(){return u}});var t=r(6123),a=r.n(t),o=r(1449),i=r(7313),c=r(196),s=r(6417),l=(0,c.EN)((function(n){var e=n.children,r=n.location.pathname;return(0,i.useEffect)((function(){document.getElementById("scroll-manager")&&document.getElementById("scroll-manager").scrollIntoView()}),[r]),(0,s.jsx)("div",{id:"scroll-manager",children:e||null})})),u=function(n){var e=n.className,r=n.children;return(0,s.jsx)(l,{children:(0,s.jsx)(o.W2,{animated:!0,unstyled:!0,className:a()("m-2",e),children:r})})}},5950:function(n,e,r){r.d(e,{L:function(){return l}});var t=r(4240),a=r(6036),o=r(1449),i=r(1592),c=r(1188),s=r(6417),l=function(n){var e=n.children,r=n.name,l=n.render,u=n.props,d=n.translations,m=(0,a.M)(),f=(0,t.$)(d?r.toLowerCase():"common").t,h=m("component",{componentName:r});return(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(i.Z,{className:"text-4xl mt-12 mb-5 ml-3",children:h}),(0,s.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[e,l&&l(f,h),(0,s.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,s.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),u&&(0,s.jsx)(o.iA,{headers:!0,rows:u})]})]})}},8314:function(n,e,r){var t=r(1413),a=r(9325),o=r(6417);e.Z=function(n){var e=n.rows,r=n.props,i=n.children,c=n.parseProps,s=n.label,l=n.startColor;return(0,o.jsx)(a.B9,{props:r,rows:e,label:s,startColor:l,children:function(n,e){var r=(0,t.Z)({},n);return c&&(r=c(r,e)),(0,o.jsx)("div",{className:"flex flex-col items-center",children:i(r,e)})}})}},9399:function(n,e,r){r.d(e,{W:function(){return a},c:function(){return o}});var t=r(9325),a={className:(0,t.VV)(""),hide:(0,t.Hw)(!1),dark:(0,t.Hw)(!1),shadow:(0,t.Hw)(!1),unstyled:(0,t.Hw)(!1),animated:(0,t.Hw)(!0),a11y:(0,t.Hw)(!0),a11yLabel:(0,t.VV)("")},o=[["animated","dark","shadow"],["className","unstyled"],["hide","a11y","a11yLabel"]]},6036:function(n,e,r){r.d(e,{M:function(){return a},v:function(){return o}});var t=r(4240),a=function(){return(0,t.$)("common").t},o=function(){return(0,t.$)("overview").t}},9555:function(n,e,r){r.r(e);var t=r(3433),a=r(4942),o=r(1413),i=r(9325),c=r(9399),s=r(1449),l=r(5950),u=r(8314),d=r(6417);e.default=function(){return(0,d.jsx)(l.L,{name:"CodeBox",translations:!0,render:function(n,e){var r,l=n("props_environment",{context:"default"});return(0,d.jsx)(u.Z,{label:e,props:(0,o.Z)({value:(0,i.VV)("npm i mobrix-ui"),enhanced:(0,i.Hw)(!0),environment:(0,i.kb)((r={},(0,a.Z)(r,l,"terminal"),(0,a.Z)(r,"Javascript","javascript"),(0,a.Z)(r,"Python","python"),r))},c.W),rows:[["value","enhanced","environment"]].concat((0,t.Z)(c.c)),children:s.wh})}})}}}]);