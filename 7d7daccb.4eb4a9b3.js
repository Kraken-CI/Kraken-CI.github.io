(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(117)),o={id:"secrets",title:"Secrets"},i={unversionedId:"secrets",id:"secrets",isDocsHomePage:!1,title:"Secrets",description:"Secrets are special variables that are protected. Their values are",source:"@site/docs/secrets.md",slug:"/secrets",permalink:"/docs/secrets",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/secrets.md",version:"current",sidebar:"someSidebar",previous:{title:"Tools",permalink:"/docs/tools"},next:{title:"Webhooks",permalink:"/docs/webhooks"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Secrets are special variables that are protected. Their values are\nnever revealed in Kraken UI. They ar defined in projects. They can be\nadded, modified and deleted on project web page, under ",Object(c.b)("inlineCode",{parentName:"p"},"Secrets")," tab."),Object(c.b)("p",null,"New secret can be added by clicking ",Object(c.b)("inlineCode",{parentName:"p"},"New Secret")," button. The form in\nthe center of the web page allows for providing secret details: a name\nof secret, a type and values. There are two types of secrets:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Simple")," secret - there is available just one simple secret value,\nit can be e.g. an access token"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"SSH Username and Key")," secret - there are two values: username and a\nprotected key")),Object(c.b)("p",null,"When the secret is defined then it can be used in stage\ndefinition. They can placed in workflow schema using variable\ninterpolation."),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'{\n    ...\n    steps: [{\n        "tool": "git",\n        "access-token": "#{KK_SECRET_SIMPLE_gitlab_token}",\n        ...\n    }]\n}\n')),Object(c.b)("p",null,"More about secret variables in\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"schema-vars#secret-variables"}),"Schema Variables chapter, in Secret Variables section"),"."))}p.isMDXComponent=!0}}]);