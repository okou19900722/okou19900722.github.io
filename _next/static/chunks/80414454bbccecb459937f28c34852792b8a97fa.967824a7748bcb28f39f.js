(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery;return n||i&&(void 0!==o&&o)}t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(o.AmpStateContext))}},"/9aa":function(e,t,n){var r=n("NykK"),i=n("ExA7"),o="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||i(e)&&r(e)==o}},"50tO":function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=o(n("q1tI")),i=o(n("17x9"));function o(e){return e&&e.__esModule?e:{default:e}}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=e.color,n=e.size,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["color","size"]);return r.default.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,fill:t,viewBox:"0 0 24 24"},i),r.default.createElement("path",{d:"M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"}))};u.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},u.defaultProps={color:"currentColor",size:"24"};var c=u;t.default=c},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=r(n("Xuae")),a=n("lwAK"),u=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function M(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var a=i.key.slice(i.key.indexOf("$")+1);e.has(a)?o=!1:e.add(a)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var l=f[u];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var s=i.props[l],M=r[l]||new Set;M.has(s)?o=!1:(M.add(s),r[l]=M)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}var p=o.default();function j(e){var t=e.children;return i.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return i.default.createElement(p,{reduceComponentsToState:M,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}j.rewind=p.rewind,t.default=j},AP2z:function(e,t,n){var r=n("nmnc"),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(c){}var i=a.call(e);return r&&(t?e[u]=n:delete e[u]),i}},BMc8:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAyODEuMyA5MS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MHtmaWxsOiNmNzk0MjJ9LnN0MXtmaWxsOiMzZDNjM2J9PC9zdHlsZT48ZyBpZD0iTGF5ZXJfMV8xXyI+PHBhdGggY2xhc3M9InN0MCIgZD0iTTI2NS43IDg0TDI1NyA3M2gtMi43djE3LjdoMy4zdi0xMmw5LjMgMTJoMi4xVjczaC0zLjN2MTF6bS0zMi40LTguM2M0LjIgMCA1LjggMy4zIDUuOCA2LjNzLTEuNiA2LTUuOCA2LTUuNy0zLjEtNS44LTYgMS43LTYuMyA1LjgtNi4zem0wLTNjLTYuMSAwLTkuMSA0LjctOS4xIDkuMyAwIDQuNyAyLjkgOS4xIDkuMSA5LjFzOS00LjYgOS4xLTkuMi0zLTkuMi05LjEtOS4yem0tMjEuMiAxOFY3M2gtMy4zdjE3LjdoMy4zem0tMjMuNiAwaDMuM1Y3Nmg1LjZ2LTNoLTE0LjZ2M2g1LjZsLjEgMTQuN3ptLTE4LjktNi41SDE2M2wzLjMtNy42IDMuMyA3LjZ6bTIuOCA2LjVoMy42TDE2OC4yIDczaC0zLjZsLTggMTcuN2gzLjZsMS41LTMuM2g5LjNsMS40IDMuM3ptLTM4LTE0LjZoMy42YzMuOSAwIDUuNSAyLjggNS41IDUuNS4xIDIuOC0xLjUgNS44LTUuNSA1LjhoLTMuNlY3Ni4xem0zLjctMy4xaC02Ljl2MTcuN2g2LjljNi4yIDAgOC45LTQuNSA4LjktOXMtMi44LTguNy04LjktOC43em0tMjIuNCAxMUwxMDcgNzNoLTIuN3YxNy43aDMuM3YtMTJsOS4zIDEyaDIuMVY3M2gtMy4zdjExek04OC4yIDczdjEwLjJjMCAzLTEuNiA0LjktNC4zIDQuOXMtNC42LTEuNy00LjYtNC45VjczSDc2djEwLjFjMCA1LjMgMy42IDcuOSA3LjkgNy45IDQuNCAwIDcuNy0yLjcgNy43LTcuOVY3M2gtMy40em0tMzMgMi43YzQuMiAwIDUuOCAzLjMgNS44IDYuM3MtMS42IDYtNS44IDYtNS43LTMuMS01LjgtNiAxLjctNi4zIDUuOC02LjN6bTAtM2MtNi4xIDAtOS4xIDQuNy05LjEgOS4zczIuOSA5LjEgOS4xIDkuMSA5LTQuNiA5LjEtOS4yLTMtOS4yLTkuMS05LjJ6bS0yOS43IDE4di02LjVoOC45di0zLjFoLTguOXYtNC44aDkuNFY3M0gyMi4ydjE3LjZoMy4zeiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNjkuNCA1NC40aC0yMi4ydi04LjloMjEuNHYtNi45aC0yMS40di05LjFoMjIuMnYtNy4yaC0yOS42djM5LjVoMjkuNnYtNy40em0tNDAtMjUuNmMtMy02LjEtOS40LTcuOC0xNS41LTcuOC03LjMgMC0xNS4zIDMuNC0xNS4zIDExLjUgMCA4LjkgNy40IDExIDE1LjUgMTIgNS4yLjYgOS4xIDIuMSA5LjEgNS44IDAgNC4zLTQuNCA1LjktOS4xIDUuOXMtOS40LTEuOS0xMS4xLTYuM2wtNi4yIDMuMmMyLjkgNy4yIDkuMSA5LjcgMTcuMiA5LjcgOC44IDAgMTYuNi0zLjggMTYuNi0xMi42IDAtOS40LTcuNy0xMS42LTE1LjktMTIuNi00LjctLjYtOC44LTEuNS04LjgtNSAwLTIuOSAyLjYtNS4yIDguMi01LjIgNC4zIDAgOCAyLjIgOS40IDQuNGw1LjktM3pNMTc2IDIyLjJjLTYuMi0uMS0xMi40IDAtMTguNiAwdjM5LjVoNy40VjUwLjFIMTc2YzE5LjQgMCAxOS40LTI3LjkgMC0yNy45em0tMTEuMSA3LjFIMTc2YzkuNSAwIDkuNSAxNCAwIDE0aC0xMS4ybC4xLTE0em0tMTggMzIuNVYyMi4yaC03LjR2MzkuNWw3LjQuMXptLTQ0LTM5LjZ2MzkuNWgyNy43di02LjloLTIwLjNWMjIuMmgtNy40ek05MC43IDUxLjdjLTIuNyAyLjUtNi4yIDQtOS45IDQtOS44IDAtMTMuNS02LjgtMTMuNi0xMy40czQuMS0xMy43IDEzLjYtMTMuN2MzLjUtLjEgNyAxLjMgOS41IDMuN2w1LTQuOGMtMy44LTMuOS05LjEtNi0xNC41LTYtMTQuMyAwLTIxIDEwLjUtMjAuOSAyMC44czYuMyAyMC4zIDIwLjkgMjAuM2M1LjYuMSAxMS0yIDE1LTUuOWwtNS4xLTV6bS0zOSAyLjdIMjkuNXYtOC45aDIxLjR2LTYuOUgyOS41di05LjFoMjIuMnYtNy4ySDIyLjJ2MzkuNWgyOS42bC0uMS03LjR6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTkuOCAxOC4yQzE4LjggNC4xIDM2LjktLjggNTIuMSA2bC0xLS43QzM1LjctNC42IDE1LjItLjEgNS4zIDE1LjNzLTUuNCAzNS45IDEwIDQ1LjhsMS4xLjZDMy44IDUwLjguOCAzMi4zIDkuOCAxOC4yeiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNzIuMiAyNi4xYzAtMi41IDIuMS00LjYgNC42LTQuNiAyLjUgMCA0LjYgMi4xIDQuNiA0LjYgMCAyLjUtMi4xIDQuNi00LjYgNC42LTIuNiAwLTQuNi0yLjEtNC42LTQuNnptOC42IDBjMC0yLjItMS44LTQuMS00LTQuMXMtNC4xIDEuOC00LjEgNC4xYzAgMi4yIDEuNyA0IDMuOSA0LjFoLjFjMi4zIDAgNC4xLTEuOCA0LjEtNC4xem0tNi0yLjVoMi4zYzEuMSAwIDEuOS41IDEuOSAxLjYgMCAuNy0uNCAxLjMtMS4xIDEuNWwxLjIgMS43aC0xLjRsLTEtMS41aC0uN3YxLjVoLTEuMWwtLjEtNC44em0yLjIgMi4zYy41IDAgLjgtLjMuOC0uN3MtLjMtLjctLjgtLjdoLTF2MS4zbDEgLjF6Ii8+PC9nPjwvc3ZnPg=="},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},Cgje:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("8Kt/"),a=n.n(o),u=n("anbt"),c=n("TSYQ"),l=n.n(c),s=n("YFqc"),f=n.n(s),M=(n("SYuY"),n("DzJC")),p=n.n(M),j=n("X/cK"),y=n.n(j),d=n("50tO"),g=n.n(d),v=n("viIp"),L=n.n(v),h=i.a.createElement,N=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),i=Object(r.useState)(!1),o=i[0],a=i[1],c=Object(r.useState)(void 0),s=c[0],M=c[1],j=Object(r.useContext)(u.a.Dispatch);Object(r.useEffect)((function(){function t(){var t=e.current.clientHeight;j({height:t})}t();var n=p()(t,100);return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[j]);return h("div",{className:"navbar",ref:e},h("div",{className:"navbar-content container"},h("div",{className:"navbar-logo"},h(f.a,{href:"/"},h("a",null,h("img",{src:n("y/Pd"),alt:"Vert.x Logo"})))),h("div",{className:"navbar-collapse-button",onClick:function(){var e=0,n=!0,r=!1,i=void 0;try{for(var u,c=t.current.children[Symbol.iterator]();!(n=(u=c.next()).done);n=!0){e+=u.value.offsetHeight}}catch(l){r=!0,i=l}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}o?(a(!1),M(void 0)):(a(!0),M(e))}},h("span",null),h("span",null),h("span",null)),h("div",{className:l()("navbar-right",{collapse:o}),ref:t,style:{maxHeight:s}},h("div",{className:"navbar-menu"},h(f.a,{href:"/introduction-to-vertx-and-reactive/"},h("a",{className:"navbar-menu-item"},"Intro")),h(f.a,{href:"/docs/"},h("a",{className:"navbar-menu-item"},"Docs")),h(f.a,{href:"/ecosystem/"},h("a",{className:"navbar-menu-item"},"Ecosystem")),h(f.a,{href:"/faq/"},h("a",{className:"navbar-menu-item"},"FAQ")),h(f.a,{href:"/blog/"},h("a",{className:"navbar-menu-item"},"Blog")),h(f.a,{href:"/"},h("a",{className:"navbar-menu-item"},"Community"))),h("div",{className:"navbar-social"},h("span",{className:"navbar-social-version"},"v4.0.0"),h("a",{href:"https://www.youtube.com/results?search_query=vert.x",className:"navbar-social-link"},h(L.a,{"aria-label":"YouTube videos related to Vert.x"})),h("a",{href:"https://stackoverflow.com/questions/tagged/vert.x",className:"navbar-social-link"},h(g.a,{"aria-label":"Stack Overflow questions related to Vert.x"})),h("a",{href:"https://gitter.im/eclipse-vertx/vertx-users",className:"navbar-social-link"},h(y.a,{"aria-label":"Eclipse Vert.x channel on Gitter"}))))))},I=i.a.createElement;t.a=function(e){var t=e.title;return I("header",null,I(a.a,null,I("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),I("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),I("meta",{name:"description",content:"Vert.x | Reactive applications on the JVM"}),I("meta",{name:"robots",content:"index,follow"}),I("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500",rel:"stylesheet"}),I("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400",rel:"stylesheet"}),I("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap",rel:"stylesheet"}),I("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),I("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),I("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),I("link",{rel:"icon",type:"image/png",sizes:"48x48",href:"/favicons/favicon-48x48.png"}),I("title",null,t&&t+" | ","Eclipse Vert.x")),I(N,null))}},DzJC:function(e,t,n){var r=n("sEfC"),i=n("GoyQ"),o="Expected a function";e.exports=function(e,t,n){var a=!0,u=!0;if("function"!=typeof e)throw new TypeError(o);return i(n)&&(a="leading"in n?!!n.leading:a,u="trailing"in n?!!n.trailing:u),r(e,t,{leading:a,maxWait:t,trailing:u})}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},GoyQ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},JoS9:function(e,t,n){},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var r=n("WFqU"),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},NykK:function(e,t,n){var r=n("nmnc"),i=n("AP2z"),o=n("KfNM"),a="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?u:a:c&&c in Object(e)?i(e):o(e)}},QIyF:function(e,t,n){var r=n("Kz5y");e.exports=function(){return r.Date.now()}},RIqP:function(e,t,n){var r=n("Ijbi"),i=n("EbDI"),o=n("Bnag");e.exports=function(e){return r(e)||i(e)||o()}},SYuY:function(e,t,n){},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var a=i.apply(null,r);a&&e.push(a)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},"X/cK":function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=o(n("q1tI")),i=o(n("17x9"));function o(e){return e&&e.__esModule?e:{default:e}}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=e.color,n=e.size,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["color","size"]);return r.default.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,fill:t,viewBox:"0 0 24 24"},i),r.default.createElement("path",{d:"M8.501 4.001H10.5V24H8.501V4.001zm6.999 0V24h-2V4.001h2zM3.5 0h2.001v15H3.5V0zm15 4.001h2V15h-2V4.001z"}))};u.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},u.defaultProps={color:"currentColor",size:"24"};var c=u;t.default=c},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),i=n("a1gu"),o=n("Nsbk"),a=n("PJYZ"),u=n("W8MJ"),c=n("7W2i"),l=n("RIqP");Object.defineProperty(t,"__esModule",{value:!0});var s=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){function s(e){var u;return r(this,s),u=i(this,o(s).call(this,e)),f&&(t.add(a(u)),n(a(u))),u}return c(s,l),u(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(s.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},anbt:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n("q1tI"),o=n.n(i).a.createElement;function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var u=Object(i.createContext)(),c=Object(i.createContext)(),l=function(e,t){var n=t.height;return"undefined"!==typeof n&&n!==e.height&&(e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{height:n})),e};t.a={State:u,Dispatch:c,Provider:function(e){var t=e.children,n=Object(i.useReducer)(l,{height:0}),r=n[0],a=n[1];return o(u.Provider,{value:r},o(c.Provider,{value:a},t))}}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),i=n("W8MJ"),o=n("a1gu"),a=n("Nsbk"),u=n("7W2i"),c=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var s,f=l(n("q1tI")),M=n("QmWs"),p=n("g/15"),j=c(n("nOHt"));function y(e){return e&&"object"===typeof e?(0,p.formatWithValidation)(e):e}var d=new Map,g=window.IntersectionObserver,v={};function L(){return s||(g?s=new g((function(e){e.forEach((function(e){if(d.has(e.target)){var t=d.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),d.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var h=function(e){function t(e){var n;return r(this,t),(n=o(this,a(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(i,o){if(r&&i===t&&o===n)return r;var a=e(i,o);return t=i,n=o,r=a,a}}((function(e,t){return{href:y(e),as:t?y(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,i=t.target;if("A"!==r||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),a=o.href,u=o.as;if(function(e){var t=(0,M.parse)(e,!1,!0),n=(0,M.parse)((0,p.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,M.resolve)(c,a),u=u?(0,M.resolve)(c,u):a,e.preventDefault();var l=n.props.scroll;null==l&&(l=u.indexOf("#")<0),j.default[n.props.replace?"replace":"push"](a,u,{shallow:n.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return u(t,e),i(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,i=(0,M.resolve)(e,n);return[i,r?(0,M.resolve)(e,r):i]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),v[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=L();return n?(n.observe(e),d.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}d.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();j.default.prefetch(t[0],t[1],e).catch((function(e){0})),v[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),i=r.href,o=r.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var a=f.Children.only(t),u={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(u.href=o||i);var c=n("P5f7").rewriteUrlForNextExport;return u.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(u.href=c(u.href)),f.default.cloneElement(a,u)}}]),t}(f.Component);t.default=h},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI"));t.AmpStateContext=i.createContext({})},naWs:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("TSYQ"),a=n.n(o),u=(n("JoS9"),n("YFqc")),c=n.n(u),l=i.a.createElement;t.a=function(){var e=[Object(r.useRef)(),Object(r.useRef)()],t=[Object(r.useState)(void 0),Object(r.useState)(void 0)],i=[Object(r.useState)(!1),Object(r.useState)(!1)],o=function(n){var r=0,o=!0,a=!1,u=void 0;try{for(var c,l=e[n].current.children[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){r+=c.value.offsetHeight}}catch(s){a=!0,u=s}finally{try{o||null==l.return||l.return()}finally{if(a)throw u}}i[n][0]?(i[n][1](!1),t[n][1](void 0)):(i[n][1](!0),t[n][1](r))};return l("footer",null,l("div",{className:"container"},l("div",{className:"footer-nav-section"},l("div",{className:"footer-nav-list footer-logo"},l(c.a,{href:"/"},l("a",null,l("img",{src:n("y/Pd"),alt:"Vert.x Logo"})))),l("div",{className:"footer-nav-list"},l("h5",{onClick:function(){return o(0)}},"Eclipse Vert.x"),l("ul",{ref:e[0],style:{maxHeight:t[0][0]},className:a()({visible:i[0][0]})},l("li",null,l(c.a,{href:"/docs/"},l("a",null,"Docs"))),l("li",null,l(c.a,{href:"/ecosystem/"},l("a",null,"Ecosystem"))),l("li",null,l(c.a,{href:"/faq/"},l("a",null,"FAQ"))),l("li",null,l(c.a,{href:"/blog/"},l("a",null,"Blog"))),l("li",null,l(c.a,{href:"/"},l("a",null,"Community"))))),l("div",{className:"footer-nav-list"},l("h5",{onClick:function(){return o(1)}},"Eclipse"),l("ul",{ref:e[1],style:{maxHeight:t[1][0]},className:a()({visible:i[1][0]})},l("li",null,l("a",{href:"https://www.eclipse.org/"},"Eclipse Foundation")),l("li",null,l("a",{href:"https://www.eclipse.org/legal/privacy.php"},"Privacy Policy")),l("li",null,l("a",{href:"https://www.eclipse.org/legal/termsofuse.php"},"Terms of Use")),l("li",null,l("a",{href:"https://www.eclipse.org/legal/copyright.php"},"Copyright Agent")),l("li",null,l("a",{href:"https://www.eclipse.org/legal/"},"Legal Resources"))))),l("div",{className:"footer-copyright"},l("div",{className:"footer-copyright-remarks"},"\xa9 ",(new Date).getFullYear()," Eclipse Vert.x",l("br",null),"Eclipse Vert.x is open source and dual-licensed under the ",l("a",{href:"https://creativecommons.org/licenses/by-sa/3.0/",target:"_blank",rel:"noopener noreferrer"},"Eclipse Public License 2.0")," and the ",l("a",{href:"https://www.apache.org/licenses/LICENSE-2.0.html",target:"_blank",rel:"noopener noreferrer"},"Apache License 2.0"),". ",l("br",{className:"footer-copyright-break"}),"Website design by ",l("a",{href:"https://michelkraemer.com",target:"_blank",rel:"noopener noreferrer"},"Michel Kr\xe4mer"),"."),l("div",{className:"footer-copyright-eclipse-logo"},l("a",{href:"https://www.eclipse.org/",target:"_blank",rel:"noopener noreferrer"},l("img",{src:n("BMc8"),alt:"Eclipse foundation Logo"}))))))}},nmnc:function(e,t,n){var r=n("Kz5y").Symbol;e.exports=r},sEfC:function(e,t,n){var r=n("GoyQ"),i=n("QIyF"),o=n("tLB3"),a="Expected a function",u=Math.max,c=Math.min;e.exports=function(e,t,n){var l,s,f,M,p,j,y=0,d=!1,g=!1,v=!0;if("function"!=typeof e)throw new TypeError(a);function L(t){var n=l,r=s;return l=s=void 0,y=t,M=e.apply(r,n)}function h(e){var n=e-j;return void 0===j||n>=t||n<0||g&&e-y>=f}function N(){var e=i();if(h(e))return I(e);p=setTimeout(N,function(e){var n=t-(e-j);return g?c(n,f-(e-y)):n}(e))}function I(e){return p=void 0,v&&l?L(e):(l=s=void 0,M)}function m(){var e=i(),n=h(e);if(l=arguments,s=this,j=e,n){if(void 0===p)return function(e){return y=e,p=setTimeout(N,t),d?L(e):M}(j);if(g)return clearTimeout(p),p=setTimeout(N,t),L(j)}return void 0===p&&(p=setTimeout(N,t)),M}return t=o(t)||0,r(n)&&(d=!!n.leading,f=(g="maxWait"in n)?u(o(n.maxWait)||0,t):f,v="trailing"in n?!!n.trailing:v),m.cancel=function(){void 0!==p&&clearTimeout(p),y=0,l=j=s=p=void 0},m.flush=function(){return void 0===p?M:I(i())},m}},tLB3:function(e,t,n){var r=n("GoyQ"),i=n("/9aa"),o=NaN,a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return o;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=c.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):u.test(e)?o:+e}},viIp:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=o(n("q1tI")),i=o(n("17x9"));function o(e){return e&&e.__esModule?e:{default:e}}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=e.color,n=e.size,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["color","size"]);return r.default.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,fill:t,viewBox:"0 0 24 24"},i),r.default.createElement("path",{d:"M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"}))};u.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},u.defaultProps={color:"currentColor",size:"24"};var c=u;t.default=c},"y/Pd":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAxMTI1LjYgMzE1LjIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZT4uc3Qwe2ZpbGw6Izc4MmE5MX08L3N0eWxlPjxwYXRoIGQ9Ik0xMjAuOSAyMTQuMkwxOTAuNSAwaDUyLjNsLTk4LjUgMjczLjhIOTguMkwwIDBoNTIuMWw2OC44IDIxNC4yem0yOTEuMi02Mi42SDI5OS42djg0LjJINDMxdjM4SDI1MlYwaDE3Ny43djM4LjRIMjk5LjZWMTE0aDExMi41djM3LjZ6bTgzLjctMTEzLjJINTQ2YzE2LjUuMyAyOSA0LjQgMzcuMyAxMi40IDguMyA4IDEyLjUgMTkuNCAxMi41IDM0IDAgMTQtNC41IDI1LjEtMTMuNSAzMy4yLTkgOC4xLTIxLjYgMTIuMS0zNy42IDEyLjFoLTI3LjF2MjQuMmw4Ni4xIDExOS41aDUxdi0yLjRsLTc3LjItMTA2LjdjMjQuOS01LjUgNDMuMy0yMS43IDUyLjYtMzUuOSA4LjItMTIuNiAxMy4zLTI3LjcgMTMuMy00NiAwLTI2LjgtOC42LTQ3LjQtMjUuOC02MS41QzYwMC41IDcuMSA1NzYuMSAwIDU0NC41IDBoLTk2LjN2MjczLjhoNDcuNiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDUyLjMgMTU3LjdsLTQxLjUgNjIuNyAyOS43IDUzLjRoODUuMXoiLz48Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI4MjcuOSIgY3k9IjI3NC43IiByPSI0MC41Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTEwMzcgMGwtNDcuNiA3NC4yTDk0OSAwaC04NGw4NS4zIDEzNS44LTY3LjEgMTA1LjdjNS43IDkuNSA5LjEgMjAuNSA5LjIgMzIuNGg1MC4xTDExMjEuMyAwSDEwMzd6Ii8+PHBhdGggZD0iTTc2My41IDI3My44Yy4xLTkuOSAyLjUtMTkuMiA2LjYtMjcuNVYzOC40aDg1LjRWMEg2MzguMnYzOC40aDg0LjZ2MjM1LjRoNDAuN3oiLz48L3N2Zz4="},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}}]);