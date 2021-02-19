(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),u=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=u(a),O=r,j=m["".concat(b,".").concat(O)]||m[O]||p[O]||c;return a?n.a.createElement(j,o(o({ref:t},i),{},{components:a})):n.a.createElement(j,o({ref:t},i))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var i=2;i<c;i++)b[i]=a[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),c=(a(0),a(119)),b={id:"docker-executor",title:"Docker Executor"},o={unversionedId:"docker-executor",id:"docker-executor",isDocsHomePage:!1,title:"Docker Executor",description:"Images",source:"@site/docs/docker-executor.md",slug:"/docker-executor",permalink:"/docs/docker-executor",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/docker-executor.md",version:"current",sidebar:"someSidebar",previous:{title:"Webhooks",permalink:"/docs/webhooks"},next:{title:"LXD Executor",permalink:"/docs/lxd-executor"}},l=[{value:"Images",id:"images",children:[{value:"Language Images",id:"language-images",children:[]},{value:"System Images",id:"system-images",children:[]}]}],i={toc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"images"},"Images"),Object(c.b)("p",null,"All images for Kraken CI Docker executor are available on ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/krakenci/"}),"Docker Hub"),":"),Object(c.b)("h3",{id:"language-images"},"Language Images"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Language"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Docker Hub"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Dockerfile"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Base Image"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Python")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://hub.docker.com/r/krakenci/python"}),"krakenci/python")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/Kraken-CI/kraken/blob/master/base-images/docker-python.txt"}),"Dockerfile")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"python:3.8.5")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Go")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://hub.docker.com/r/krakenci/golang"}),"krakenci/golang")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/Kraken-CI/kraken/blob/master/base-images/docker-go.txt"}),"Dockerfile")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"golang:1.15.7-buster")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Java")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://hub.docker.com/r/krakenci/openjdk"}),"krakenci/openjdk")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/Kraken-CI/kraken/blob/master/base-images/docker-openjdk.txt"}),"Dockerfile")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openjdk:11.0-jdk-buster")))),Object(c.b)("h3",{id:"system-images"},"System Images"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"System"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Tags / Versions"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Dockerfile"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Base Image"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Ubuntu 20.04")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://hub.docker.com/r/krakenci/ubuntu"}),"krakenci/ubuntu:20.04")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/Kraken-CI/kraken/blob/master/base-images/docker-ubuntu.txt"}),"Dockerfile")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ubuntu:20.04")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"CentOS 8")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://hub.docker.com/r/krakenci/centos"}),"krakenci/centos:8")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/Kraken-CI/kraken/blob/master/base-images/docker-centos.txt"}),"Dockerfile")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"centos:8")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Fedora 33")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://hub.docker.com/r/krakenci/fedora"}),"krakenci/fedora:33")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/Kraken-CI/kraken/blob/master/base-images/docker-fedora.txt"}),"Dockerfile")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"fedora:32")))))}u.isMDXComponent=!0}}]);