"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[858],{1592:function(e,r,n){var t=n(1413),a=n(6352),l=n(1269),o=n(1449),i=n(6417);r.Z=function(e){var r=(0,a.v9)(l.N2);return(0,i.jsx)(o.__,(0,t.Z)((0,t.Z)({},e),{},{dark:r}))}},1238:function(e,r,n){var t=n(6123),a=n.n(t),l=n(1449),o=n(6417);r.Z=function(e){var r=e.className,n=e.children;return(0,o.jsx)(l.W2,{animated:!0,unstyled:!0,className:a()("m-2",r),children:n})}},5950:function(e,r,n){n.d(r,{L:function(){return c}});var t=n(4240),a=n(6036),l=n(1449),o=n(1592),i=n(1238),s=n(6417),c=function(e){var r=e.children,n=e.name,c=e.render,d=e.props,u=e.translations,f=(0,a.M)(),h=(0,t.$)(u?n.toLowerCase():"common").t,m=f("component",{componentName:n});return(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(o.Z,{className:"text-4xl mt-12 mb-5 ml-3",children:m}),(0,s.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[r,c&&c(h,m),(0,s.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,s.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),d&&(0,s.jsx)(l.iA,{headers:!0,rows:d})]})]})}},9399:function(e,r,n){n.d(r,{W:function(){return a},c:function(){return l}});var t=n(9325),a={className:(0,t.VV)(""),hide:(0,t.Hw)(!1),dark:(0,t.Hw)(!1),shadow:(0,t.Hw)(!1),unstyled:(0,t.Hw)(!1),animated:(0,t.Hw)(!0),a11y:(0,t.Hw)(!0),a11yLabel:(0,t.VV)("")},l=[["animated","dark","shadow"],["className","unstyled"],["hide","a11y","a11yLabel"]]},6036:function(e,r,n){n.d(r,{M:function(){return a},v:function(){return l}});var t=n(4240),a=function(){return(0,t.$)("common").t},l=function(){return(0,t.$)("overview").t}},3554:function(e,r,n){n.r(r);var t=n(1413),a=n(9325),l=n(9399),o=n(1449),i=n(5950),s=n(6417);r.default=function(){return(0,s.jsx)(i.L,{name:"Form",translations:!0,render:function(e,r){var n=(0,t.Z)({},l.W);return["title","children","submitLabel"].forEach((function(r){return n[r]=(0,a.VV)(e("props",{context:r}))})),n.fieldClassName=(0,a.VV)(""),(0,s.jsx)(a.B9,{label:r,startColor:"#A19B9B",props:n,rows:[["title","submitLabel"],["children","fieldClassName"],["className","dark","shadow"],["unstyled","hide"]],children:function(r){return(0,s.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,s.jsx)(o.l0,(0,t.Z)((0,t.Z)({},r),{},{fields:{field1:{placeholder:"placeholder",header:e("props_field",{context:"text"})},field2:{placeholder:"placeholder",type:"boolean",header:e("props_field",{context:"boolean"})},field3:{placeholder:"placeholder",type:"numeric",header:e("props_field",{context:"numeric"})},field4:{placeholder:"placeholder",type:"radio",header:e("props_field",{context:"radio"})}},onClick:function(e){return console.log(e)}}))})}})}})}}}]);