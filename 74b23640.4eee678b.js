(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(6),i=(t(0),t(86)),a={id:"demo",title:"Demo",sidebar_label:"Demo"},c={unversionedId:"demo",id:"demo",isDocsHomePage:!1,title:"Demo",description:"It is possible to check Kraken CI just now. Either visiting online demo",source:"@site/docs/demo.md",slug:"/demo",permalink:"/docs/demo",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/demo.md",version:"current",sidebar_label:"Demo",sidebar:"someSidebar",previous:{title:"Features",permalink:"/docs/features"},next:{title:"Installation",permalink:"/docs/installation"}},l=[{value:"Online",id:"online",children:[]},{value:"Under your desk",id:"under-your-desk",children:[]}],u={rightToc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"It is possible to check Kraken CI just now. Either visiting online demo\nor running it under the desk."),Object(i.b)("h2",{id:"online"},"Online"),Object(i.b)("p",null,"Online demo version can be visited on: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://lab.kraken.ci/"}),"http://lab.kraken.ci/")),Object(i.b)("h2",{id:"under-your-desk"},"Under your desk"),Object(i.b)("p",null,"To start demo instance run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-console"}),"rake docker_up\n")),Object(i.b)("p",null,"Then open http://localhost:8080/"))}s.isMDXComponent=!0},86:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return t?o.a.createElement(m,c(c({ref:n},u),{},{components:t})):o.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);