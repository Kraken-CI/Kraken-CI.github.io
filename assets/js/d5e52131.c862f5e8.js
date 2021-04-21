(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),i=(n(0),n(130)),a=n(134),c={id:"webhooks",title:"Webhooks"},s={unversionedId:"webhooks",id:"webhooks",isDocsHomePage:!1,title:"Webhooks",description:"Webhooks allows for integration between source code versioning system",source:"@site/docs/webhooks.mdx",sourceDirName:".",slug:"/webhooks",permalink:"/docs/webhooks",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/webhooks.mdx",version:"current",frontMatter:{id:"webhooks",title:"Webhooks"},sidebar:"someSidebar",previous:{title:"Secrets",permalink:"/docs/secrets"},next:{title:"Docker Executor",permalink:"/docs/docker-executor"}},l=[],b={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Webhooks allows for integration between source code versioning system\nand Kraken. This way a push to Git repository may trigger a CI or a\nDev flow. Currently the supported system is Github."),Object(i.b)("p",null,"Webhooks configuration is located in a project web page, under ",Object(i.b)("inlineCode",{parentName:"p"},"Web\nHooks")," tab. There is a switch that enables or disables receiving\nwebhook requests from GitHub."),Object(i.b)(a.a,{img:"screen-webhooks.png",mdxType:"Screen"}),Object(i.b)("p",null,"When GitHub webhook is enabled then there is provided a ",Object(i.b)("inlineCode",{parentName:"p"},"URL")," and a\n",Object(i.b)("inlineCode",{parentName:"p"},"secret")," that should be set in GitHub project settings page for\nwebhooks. This is ",Object(i.b)("inlineCode",{parentName:"p"},"https://github.com/<user>/<project>/settings/hooks"),"."),Object(i.b)("p",null,"On this page there are several fields that should be filled:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Payload URL")," - set to URL from Kraken that was mentioned above,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Content Type")," - set to ",Object(i.b)("inlineCode",{parentName:"li"},"application/json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Secret")," - take from Kraken, it was mentioned above.")),Object(i.b)("p",null,"In section ",Object(i.b)("inlineCode",{parentName:"p"},"Which events would you like to trigger this webhook?"),"\nselect ",Object(i.b)("inlineCode",{parentName:"p"},"Let me select individual events.")," and then check ",Object(i.b)("inlineCode",{parentName:"p"},"Pull\nrequests")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Pushes"),"."),Object(i.b)("p",null,"Now webhook can be saved. You may try to trigger testing request."))}p.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||u[d]||i;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},134:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=({img:e})=>o.a.createElement("img",{src:"/img/"+e,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})}}]);