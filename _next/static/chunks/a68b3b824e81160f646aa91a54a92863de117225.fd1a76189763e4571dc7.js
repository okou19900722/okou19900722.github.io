(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("q1tI")),o=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery;return r||a&&(void 0!==o&&o)}t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))}},"50tO":function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=o(r("q1tI")),a=o(r("17x9"));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=function(e){var t=e.color,r=e.size,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["color","size"]);return n.default.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:t,viewBox:"0 0 24 24"},a),n.default.createElement("path",{d:"M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"}))};u.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},u.defaultProps={color:"currentColor",size:"24"};var l=u;t.default=l},"8Kt/":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("q1tI")),o=n(r("Xuae")),i=r("lwAK"),u=r("FYa8"),l=r("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var M=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(c,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,l=M.length;u<l;u++){var s=M[u];if(a.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?o=!1:r.add(s);else{var c=a.props[s],f=n[s]||new Set;f.has(c)?o=!1:(f.add(c),n[s]=f)}}}return o}}()).reverse().map((function(e,t){var r=e.key||t;return a.default.cloneElement(e,{key:r})}))}var j=o.default();function L(e){var t=e.children;return a.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(u.HeadManagerContext.Consumer,null,(function(r){return a.default.createElement(j,{reduceComponentsToState:f,handleStateChange:r,inAmpMode:l.isInAmpMode(e)},t)}))}))}L.rewind=j.rewind,t.default=L},BMc8:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAyODEuMyA5MS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MHtmaWxsOiNmNzk0MjJ9LnN0MXtmaWxsOiMzZDNjM2J9PC9zdHlsZT48ZyBpZD0iTGF5ZXJfMV8xXyI+PHBhdGggY2xhc3M9InN0MCIgZD0iTTI2NS43IDg0TDI1NyA3M2gtMi43djE3LjdoMy4zdi0xMmw5LjMgMTJoMi4xVjczaC0zLjN2MTF6bS0zMi40LTguM2M0LjIgMCA1LjggMy4zIDUuOCA2LjNzLTEuNiA2LTUuOCA2LTUuNy0zLjEtNS44LTYgMS43LTYuMyA1LjgtNi4zem0wLTNjLTYuMSAwLTkuMSA0LjctOS4xIDkuMyAwIDQuNyAyLjkgOS4xIDkuMSA5LjFzOS00LjYgOS4xLTkuMi0zLTkuMi05LjEtOS4yem0tMjEuMiAxOFY3M2gtMy4zdjE3LjdoMy4zem0tMjMuNiAwaDMuM1Y3Nmg1LjZ2LTNoLTE0LjZ2M2g1LjZsLjEgMTQuN3ptLTE4LjktNi41SDE2M2wzLjMtNy42IDMuMyA3LjZ6bTIuOCA2LjVoMy42TDE2OC4yIDczaC0zLjZsLTggMTcuN2gzLjZsMS41LTMuM2g5LjNsMS40IDMuM3ptLTM4LTE0LjZoMy42YzMuOSAwIDUuNSAyLjggNS41IDUuNS4xIDIuOC0xLjUgNS44LTUuNSA1LjhoLTMuNlY3Ni4xem0zLjctMy4xaC02Ljl2MTcuN2g2LjljNi4yIDAgOC45LTQuNSA4LjktOXMtMi44LTguNy04LjktOC43em0tMjIuNCAxMUwxMDcgNzNoLTIuN3YxNy43aDMuM3YtMTJsOS4zIDEyaDIuMVY3M2gtMy4zdjExek04OC4yIDczdjEwLjJjMCAzLTEuNiA0LjktNC4zIDQuOXMtNC42LTEuNy00LjYtNC45VjczSDc2djEwLjFjMCA1LjMgMy42IDcuOSA3LjkgNy45IDQuNCAwIDcuNy0yLjcgNy43LTcuOVY3M2gtMy40em0tMzMgMi43YzQuMiAwIDUuOCAzLjMgNS44IDYuM3MtMS42IDYtNS44IDYtNS43LTMuMS01LjgtNiAxLjctNi4zIDUuOC02LjN6bTAtM2MtNi4xIDAtOS4xIDQuNy05LjEgOS4zczIuOSA5LjEgOS4xIDkuMSA5LTQuNiA5LjEtOS4yLTMtOS4yLTkuMS05LjJ6bS0yOS43IDE4di02LjVoOC45di0zLjFoLTguOXYtNC44aDkuNFY3M0gyMi4ydjE3LjZoMy4zeiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNjkuNCA1NC40aC0yMi4ydi04LjloMjEuNHYtNi45aC0yMS40di05LjFoMjIuMnYtNy4yaC0yOS42djM5LjVoMjkuNnYtNy40em0tNDAtMjUuNmMtMy02LjEtOS40LTcuOC0xNS41LTcuOC03LjMgMC0xNS4zIDMuNC0xNS4zIDExLjUgMCA4LjkgNy40IDExIDE1LjUgMTIgNS4yLjYgOS4xIDIuMSA5LjEgNS44IDAgNC4zLTQuNCA1LjktOS4xIDUuOXMtOS40LTEuOS0xMS4xLTYuM2wtNi4yIDMuMmMyLjkgNy4yIDkuMSA5LjcgMTcuMiA5LjcgOC44IDAgMTYuNi0zLjggMTYuNi0xMi42IDAtOS40LTcuNy0xMS42LTE1LjktMTIuNi00LjctLjYtOC44LTEuNS04LjgtNSAwLTIuOSAyLjYtNS4yIDguMi01LjIgNC4zIDAgOCAyLjIgOS40IDQuNGw1LjktM3pNMTc2IDIyLjJjLTYuMi0uMS0xMi40IDAtMTguNiAwdjM5LjVoNy40VjUwLjFIMTc2YzE5LjQgMCAxOS40LTI3LjkgMC0yNy45em0tMTEuMSA3LjFIMTc2YzkuNSAwIDkuNSAxNCAwIDE0aC0xMS4ybC4xLTE0em0tMTggMzIuNVYyMi4yaC03LjR2MzkuNWw3LjQuMXptLTQ0LTM5LjZ2MzkuNWgyNy43di02LjloLTIwLjNWMjIuMmgtNy40ek05MC43IDUxLjdjLTIuNyAyLjUtNi4yIDQtOS45IDQtOS44IDAtMTMuNS02LjgtMTMuNi0xMy40czQuMS0xMy43IDEzLjYtMTMuN2MzLjUtLjEgNyAxLjMgOS41IDMuN2w1LTQuOGMtMy44LTMuOS05LjEtNi0xNC41LTYtMTQuMyAwLTIxIDEwLjUtMjAuOSAyMC44czYuMyAyMC4zIDIwLjkgMjAuM2M1LjYuMSAxMS0yIDE1LTUuOWwtNS4xLTV6bS0zOSAyLjdIMjkuNXYtOC45aDIxLjR2LTYuOUgyOS41di05LjFoMjIuMnYtNy4ySDIyLjJ2MzkuNWgyOS42bC0uMS03LjR6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTkuOCAxOC4yQzE4LjggNC4xIDM2LjktLjggNTIuMSA2bC0xLS43QzM1LjctNC42IDE1LjItLjEgNS4zIDE1LjNzLTUuNCAzNS45IDEwIDQ1LjhsMS4xLjZDMy44IDUwLjguOCAzMi4zIDkuOCAxOC4yeiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNzIuMiAyNi4xYzAtMi41IDIuMS00LjYgNC42LTQuNiAyLjUgMCA0LjYgMi4xIDQuNiA0LjYgMCAyLjUtMi4xIDQuNi00LjYgNC42LTIuNiAwLTQuNi0yLjEtNC42LTQuNnptOC42IDBjMC0yLjItMS44LTQuMS00LTQuMXMtNC4xIDEuOC00LjEgNC4xYzAgMi4yIDEuNyA0IDMuOSA0LjFoLjFjMi4zIDAgNC4xLTEuOCA0LjEtNC4xem0tNi0yLjVoMi4zYzEuMSAwIDEuOS41IDEuOSAxLjYgMCAuNy0uNCAxLjMtMS4xIDEuNWwxLjIgMS43aC0xLjRsLTEtMS41aC0uN3YxLjVoLTEuMWwtLjEtNC44em0yLjIgMi4zYy41IDAgLjgtLjMuOC0uN3MtLjMtLjctLjgtLjdoLTF2MS4zbDEgLjF6Ii8+PC9nPjwvc3ZnPg=="},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},Cgje:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("8Kt/"),i=r.n(o),u=r("TSYQ"),l=r.n(u),s=r("YFqc"),c=r.n(s),M=(r("SYuY"),r("X/cK")),f=r.n(M),j=r("50tO"),L=r.n(j),p=r("viIp"),d=r.n(p),y=a.a.createElement,g=function(){var e=Object(n.useRef)(),t=Object(n.useState)(!1),a=t[0],o=t[1],i=Object(n.useState)(void 0),u=i[0],s=i[1];return y("div",{className:"navbar"},y("div",{className:"navbar-content container"},y("div",{className:"navbar-logo"},y(c.a,{href:"/"},y("a",null,y("img",{src:r("y/Pd"),alt:"Vert.x Logo"})))),y("div",{className:"navbar-collapse-button",onClick:function(){var t=0,r=!0,n=!1,i=void 0;try{for(var u,l=e.current.children[Symbol.iterator]();!(r=(u=l.next()).done);r=!0){t+=u.value.offsetHeight}}catch(c){n=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(n)throw i}}a?(o(!1),s(void 0)):(o(!0),s(t))}},y("span",null),y("span",null),y("span",null)),y("div",{className:l()("navbar-right",{collapse:a}),ref:e,style:{maxHeight:u}},y("div",{className:"navbar-menu"},y(c.a,{href:"/"},y("a",{className:"navbar-menu-item"},"Ecosystem")),y(c.a,{href:"/introduction-to-vertx-and-reactive/"},y("a",{className:"navbar-menu-item"},"Intro")),y(c.a,{href:"/docs/"},y("a",{className:"navbar-menu-item"},"Docs")),y(c.a,{href:"/"},y("a",{className:"navbar-menu-item"},"FAQ")),y(c.a,{href:"/blog/"},y("a",{className:"navbar-menu-item"},"Blog")),y(c.a,{href:"/"},y("a",{className:"navbar-menu-item"},"Community"))),y("div",{className:"navbar-social"},y("span",{className:"navbar-social-version"},"v4.0.0"),y("a",{href:"https://www.youtube.com/results?search_query=vert.x",className:"navbar-social-link"},y(d.a,{"aria-label":"YouTube videos related to Vert.x"})),y("a",{href:"https://stackoverflow.com/questions/tagged/vert.x",className:"navbar-social-link"},y(L.a,{"aria-label":"Stack Overflow questions related to Vert.x"})),y("a",{href:"https://gitter.im/eclipse-vertx/vertx-users",className:"navbar-social-link"},y(f.a,{"aria-label":"Eclipse Vert.x channel on Gitter"}))))))},h=a.a.createElement;t.a=function(e){var t=e.title;return h("header",null,h(i.a,null,h("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),h("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),h("meta",{name:"description",content:"Vert.x | Reactive applications on the JVM"}),h("meta",{name:"robots",content:"index,follow"}),h("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500",rel:"stylesheet"}),h("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400",rel:"stylesheet"}),h("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap",rel:"stylesheet"}),h("title",null,t&&t+" | ","Eclipse Vert.x")),h(g,null))}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},JoS9:function(e,t,r){},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),o=r("Bnag");e.exports=function(e){return n(e)||a(e)||o()}},SYuY:function(e,t,r){},TSYQ:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var u in n)r.call(n,u)&&n[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},"X/cK":function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=o(r("q1tI")),a=o(r("17x9"));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=function(e){var t=e.color,r=e.size,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["color","size"]);return n.default.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:t,viewBox:"0 0 24 24"},a),n.default.createElement("path",{d:"M8.501 4.001H10.5V24H8.501V4.001zm6.999 0V24h-2V4.001h2zM3.5 0h2.001v15H3.5V0zm15 4.001h2V15h-2V4.001z"}))};u.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},u.defaultProps={color:"currentColor",size:"24"};var l=u;t.default=l},Xuae:function(e,t,r){"use strict";var n=r("lwsE"),a=r("a1gu"),o=r("Nsbk"),i=r("PJYZ"),u=r("W8MJ"),l=r("7W2i"),s=r("RIqP");Object.defineProperty(t,"__esModule",{value:!0});var c=r("q1tI"),M=!1;t.default=function(){var e,t=new Set;function r(r){e=r.props.reduceComponentsToState(s(t),r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return function(s){function c(e){var u;return n(this,c),u=a(this,o(c).call(this,e)),M&&(t.add(i(u)),r(i(u))),u}return l(c,s),u(c,null,[{key:"rewind",value:function(){var r=e;return e=void 0,t.clear(),r}}]),u(c,[{key:"componentDidMount",value:function(){t.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),r(this)}},{key:"render",value:function(){return null}}]),c}(c.Component)}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("lwsE"),a=r("W8MJ"),o=r("a1gu"),i=r("Nsbk"),u=r("7W2i"),l=r("TqRt"),s=r("284h");t.__esModule=!0,t.default=void 0;var c,M=s(r("q1tI")),f=r("QmWs"),j=r("g/15"),L=l(r("nOHt"));function p(e){return e&&"object"===typeof e?(0,j.formatWithValidation)(e):e}var d=new Map,y=window.IntersectionObserver,g={};function h(){return c||(y?c=new y((function(e){e.forEach((function(e){if(d.has(e.target)){var t=d.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),d.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var N=function(e){function t(e){var r;return n(this,t),(r=o(this,i(t).call(this,e))).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,r=null,n=null;return function(a,o){if(n&&a===t&&o===r)return n;var i=e(a,o);return t=a,r=o,n=i,i}}((function(e,t){return{href:p(e),as:t?p(t):t}})),r.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,a=t.target;if("A"!==n||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=r.formatUrls(r.props.href,r.props.as),i=o.href,u=o.as;if(function(e){var t=(0,f.parse)(e,!1,!0),r=(0,f.parse)((0,j.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var l=window.location.pathname;i=(0,f.resolve)(l,i),u=u?(0,f.resolve)(l,u):i,e.preventDefault();var s=r.props.scroll;null==s&&(s=u.indexOf("#")<0),L.default[r.props.replace?"replace":"push"](i,u,{shallow:r.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==e.prefetch,r}return u(t,e),a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,a=(0,f.resolve)(e,r);return[a,n?(0,f.resolve)(e,n):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=h();return r?(r.observe(e),d.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}d.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();L.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,o=n.as;"string"===typeof t&&(t=M.default.createElement("a",null,t));var i=M.Children.only(t),u={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=o||a);var l=r("P5f7").rewriteUrlForNextExport;return u.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(u.href=l(u.href)),M.default.cloneElement(i,u)}}]),t}(M.Component);t.default=N},lwAK:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("q1tI"));t.AmpStateContext=a.createContext({})},naWs:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("TSYQ"),i=r.n(o),u=(r("JoS9"),r("YFqc")),l=r.n(u),s=a.a.createElement;t.a=function(){var e=[Object(n.useRef)(),Object(n.useRef)()],t=[Object(n.useState)(void 0),Object(n.useState)(void 0)],a=[Object(n.useState)(!1),Object(n.useState)(!1)],o=function(r){var n=0,o=!0,i=!1,u=void 0;try{for(var l,s=e[r].current.children[Symbol.iterator]();!(o=(l=s.next()).done);o=!0){n+=l.value.offsetHeight}}catch(c){i=!0,u=c}finally{try{o||null==s.return||s.return()}finally{if(i)throw u}}a[r][0]?(a[r][1](!1),t[r][1](void 0)):(a[r][1](!0),t[r][1](n))};return s("footer",null,s("div",{className:"container"},s("div",{className:"footer-nav-section"},s("div",{className:"footer-nav-list footer-logo"},s(l.a,{href:"/"},s("a",null,s("img",{src:r("y/Pd"),alt:"Vert.x Logo"})))),s("div",{className:"footer-nav-list"},s("h5",{onClick:function(){return o(0)}},"Eclipse Vert.x"),s("ul",{ref:e[0],style:{maxHeight:t[0][0]},className:i()({visible:a[0][0]})},s("li",null,s(l.a,{href:"/"},s("a",null,"Ecosystem"))),s("li",null,s(l.a,{href:"/docs/"},s("a",null,"Docs"))),s("li",null,s(l.a,{href:"/"},s("a",null,"FAQ"))),s("li",null,s(l.a,{href:"/blog/"},s("a",null,"Blog"))),s("li",null,s(l.a,{href:"/"},s("a",null,"Community"))))),s("div",{className:"footer-nav-list"},s("h5",{onClick:function(){return o(1)}},"Eclipse"),s("ul",{ref:e[1],style:{maxHeight:t[1][0]},className:i()({visible:a[1][0]})},s("li",null,s("a",{href:"https://www.eclipse.org/"},"Eclipse Foundation")),s("li",null,s("a",{href:"https://www.eclipse.org/legal/privacy.php"},"Privacy Policy")),s("li",null,s("a",{href:"https://www.eclipse.org/legal/termsofuse.php"},"Terms of Use")),s("li",null,s("a",{href:"https://www.eclipse.org/legal/copyright.php"},"Copyright Agent")),s("li",null,s("a",{href:"https://www.eclipse.org/legal/"},"Legal Resources"))))),s("div",{className:"footer-copyright"},s("div",{className:"footer-copyright-remarks"},"\xa9 ",(new Date).getFullYear()," Eclipse Vert.x",s("br",null),"Eclipse Vert.x is open source and dual-licensed under the ",s("a",{href:"https://creativecommons.org/licenses/by-sa/3.0/",target:"_blank",rel:"noopener noreferrer"},"Eclipse Public License 2.0")," and the ",s("a",{href:"https://www.apache.org/licenses/LICENSE-2.0.html",target:"_blank",rel:"noopener noreferrer"},"Apache License 2.0"),". ",s("br",{className:"footer-copyright-break"}),"Website design by ",s("a",{href:"https://michelkraemer.com",target:"_blank",rel:"noopener noreferrer"},"Michel Kr\xe4mer"),"."),s("div",{className:"footer-copyright-eclipse-logo"},s("a",{href:"https://www.eclipse.org/",target:"_blank",rel:"noopener noreferrer"},s("img",{src:r("BMc8"),alt:"Eclipse foundation Logo"}))))))}},viIp:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=o(r("q1tI")),a=o(r("17x9"));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=function(e){var t=e.color,r=e.size,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["color","size"]);return n.default.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:t,viewBox:"0 0 24 24"},a),n.default.createElement("path",{d:"M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"}))};u.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},u.defaultProps={color:"currentColor",size:"24"};var l=u;t.default=l},"y/Pd":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAxMTI1LjYgMzE1LjIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZT4uc3Qwe2ZpbGw6Izc4MmE5MX08L3N0eWxlPjxwYXRoIGQ9Ik0xMjAuOSAyMTQuMkwxOTAuNSAwaDUyLjNsLTk4LjUgMjczLjhIOTguMkwwIDBoNTIuMWw2OC44IDIxNC4yem0yOTEuMi02Mi42SDI5OS42djg0LjJINDMxdjM4SDI1MlYwaDE3Ny43djM4LjRIMjk5LjZWMTE0aDExMi41djM3LjZ6bTgzLjctMTEzLjJINTQ2YzE2LjUuMyAyOSA0LjQgMzcuMyAxMi40IDguMyA4IDEyLjUgMTkuNCAxMi41IDM0IDAgMTQtNC41IDI1LjEtMTMuNSAzMy4yLTkgOC4xLTIxLjYgMTIuMS0zNy42IDEyLjFoLTI3LjF2MjQuMmw4Ni4xIDExOS41aDUxdi0yLjRsLTc3LjItMTA2LjdjMjQuOS01LjUgNDMuMy0yMS43IDUyLjYtMzUuOSA4LjItMTIuNiAxMy4zLTI3LjcgMTMuMy00NiAwLTI2LjgtOC42LTQ3LjQtMjUuOC02MS41QzYwMC41IDcuMSA1NzYuMSAwIDU0NC41IDBoLTk2LjN2MjczLjhoNDcuNiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDUyLjMgMTU3LjdsLTQxLjUgNjIuNyAyOS43IDUzLjRoODUuMXoiLz48Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI4MjcuOSIgY3k9IjI3NC43IiByPSI0MC41Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTEwMzcgMGwtNDcuNiA3NC4yTDk0OSAwaC04NGw4NS4zIDEzNS44LTY3LjEgMTA1LjdjNS43IDkuNSA5LjEgMjAuNSA5LjIgMzIuNGg1MC4xTDExMjEuMyAwSDEwMzd6Ii8+PHBhdGggZD0iTTc2My41IDI3My44Yy4xLTkuOSAyLjUtMTkuMiA2LjYtMjcuNVYzOC40aDg1LjRWMEg2MzguMnYzOC40aDg0LjZ2MjM1LjRoNDAuN3oiLz48L3N2Zz4="}}]);