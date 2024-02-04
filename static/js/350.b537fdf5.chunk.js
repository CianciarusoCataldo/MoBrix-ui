"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[350],{7462:function(e,n,t){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{Z:function(){return r}})},543:function(e,n,t){t.r(n),t.d(n,{initMoBrixDesigner:function(){return s}});var r=t(7313),o=t(6352),i=function(e,n){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},i(e,n)},a=function(){return a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},a.apply(this,arguments)},c=function(e){function n(n){var t=e.call(this,n)||this;return t.state={hasError:!1},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}i(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}(n,e),n.getDerivedStateFromError=function(e){return{hasError:!0}},n.prototype.componentDidCatch=function(e,n){this.setState({hasError:!0})},n.prototype.render=function(){return this.state.hasError?(window.document.title="Error",this.props.fallback||r.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"}},r.createElement("div",{style:{margin:"auto"}},r.createElement("button",{style:{fontSize:"3rem",padding:"1rem"},className:"error-button",onClick:function(){window.location.reload()}},"Try again")))):this.props.children},n}(r.Component),l=function(e){var n=e.creatorConfig,t=e.children,o=n.content,i=n.header,a=n.footer;return r.createElement("div",{id:"basic-app",style:{height:"100%",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",overflow:"hidden",position:"relative"}},i&&r.createElement("header",{style:{position:"relative",top:"0",right:"0",left:"0",width:"100%"}},r.createElement(i,null)),t,o&&r.createElement(o,null),a&&r.createElement("footer",{style:{width:"100%",bottom:"0",left:"0",right:"0"}},r.createElement(a,null)))},u=function(e){var n=e.creatorConfig,t=e.store,i=e.externalComponents,a=e.internalComponents;return r.createElement(o.zt,{store:t},i.map((function(e,o){return r.createElement("div",{key:"plugin_".concat(o,"_external_component")},r.createElement(e,{creatorConfig:n,store:t}))})),r.createElement(l,{creatorConfig:n},r.createElement("div",{style:{height:"100%",overflow:"auto",width:"100%"}},a.map((function(e,o){return r.createElement("div",{key:"plugin_".concat(o,"_internal_component")},r.createElement(e,{creatorConfig:n,store:t}))})))))},p=function(e){var n=e.creatorConfig,t=e.store,o=e.externalComponents,i=e.internalComponents,a=n.preloader;return r.createElement(r.Suspense,{fallback:a?r.createElement(a,null):r.createElement("div",null)},r.createElement(c,{fallback:n.error},r.createElement("div",{id:"app-container",style:{height:"".concat(window.innerHeight,"px")}},t?r.createElement(u,{store:t,creatorConfig:n,internalComponents:i,externalComponents:o}):r.createElement(l,{creatorConfig:n}))))},s=function(e){var n,t,o,i={},c=[],l=[];if(e&&(n=e.store,t=e.creatorConfig,i=a(a({},o=t||{}),{core:o.core||{},plugins:o.plugins||[]}),e.engineConfig,n)){var u=function(e,n){var t,r=a({},e),o=r.plugins,i={},c={},l=[],u=[],p=[];return o.forEach((function(e){if(e.feature&&"mobrix-designer-plugin"===e.type){i[e.feature]={};var n=e();if(n.field){var t=n.field(r);t&&t.name&&(c[e.feature]=t.name,i[e.feature]=t.content,r[t.name]=t.content||{})}n.internalComponent&&u.push(n.internalComponent),n.externalComponent&&l.push(n.externalComponent),n.before&&p.push(n.before)}})),(null===(t=null==n?void 0:n.core)||void 0===t?void 0:t.designerInteractions)&&n.core.designerInteractions.forEach((function(e){i[e.plugin]&&c[e.plugin]&&(r[c[e.plugin]]=e.effect(i[e.plugin],n),i[e.plugin]=r[c[e.plugin]])})),p.forEach((function(e){return e(r)})),{externalComponents:l,internalComponents:u,engineConfig:n,creatorConfig:r}}(i,e.engineConfig);l=u.externalComponents,c=u.internalComponents,i=u.creatorConfig}var s=function(){var e=window.document.getElementById("app-container");e&&(e.style.height="".concat(window.innerHeight,"px"))};return window.addEventListener("resize",s),window.addEventListener("orientationchange",s),{App:r.createElement(p,{store:n,creatorConfig:i,internalComponents:c,externalComponents:l}),config:i}}}}]);