"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[8479],{4137:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=k(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,s=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(s,l(l({ref:t},u),{},{components:r})):a.createElement(s,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var k={};for(var i in t)hasOwnProperty.call(t,i)&&(k[i]=t[i]);k.originalType=e,k.mdxType="string"==typeof e?e:n,l[1]=k;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4608:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return k},metadata:function(){return c},toc:function(){return m}});var a=r(3117),n=r(102),o=(r(7294),r(4137)),l=["components"],k={id:"docker-executor",title:"Docker Executor"},i=void 0,c={unversionedId:"docker-executor",id:"docker-executor",title:"Docker Executor",description:"Images",source:"@site/docs/docker-executor.md",sourceDirName:".",slug:"/docker-executor",permalink:"/docs/docker-executor",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/docker-executor.md",tags:[],version:"current",frontMatter:{id:"docker-executor",title:"Docker Executor"},sidebar:"someSidebar",previous:{title:"Webhooks",permalink:"/docs/webhooks"},next:{title:"LXD Executor",permalink:"/docs/lxd-executor"}},u={},m=[{value:"Images",id:"images",level:2},{value:"Language Images",id:"language-images",level:3},{value:"System Images",id:"system-images",level:3}],p={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"images"},"Images"),(0,o.kt)("p",null,"All images for Kraken CI Docker executor are available on ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/krakenci/"},"Docker Hub"),":"),(0,o.kt)("h3",{id:"language-images"},"Language Images"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Language"),(0,o.kt)("th",{parentName:"tr",align:null},"Docker Hub"),(0,o.kt)("th",{parentName:"tr",align:null},"Dockerfile"),(0,o.kt)("th",{parentName:"tr",align:null},"Base Image"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Python")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/krakenci/python"},"krakenci/python")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/Kraken-CI/kraken/blob/master/base-images/docker-python.txt"},"Dockerfile")),(0,o.kt)("td",{parentName:"tr",align:null},"python:3.8.5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Go")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/krakenci/golang"},"krakenci/golang")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/Kraken-CI/kraken/blob/master/base-images/docker-go.txt"},"Dockerfile")),(0,o.kt)("td",{parentName:"tr",align:null},"golang:1.15.7-buster")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Java")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/krakenci/openjdk"},"krakenci/openjdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/Kraken-CI/kraken/blob/master/base-images/docker-openjdk.txt"},"Dockerfile")),(0,o.kt)("td",{parentName:"tr",align:null},"openjdk:11.0-jdk-buster")))),(0,o.kt)("h3",{id:"system-images"},"System Images"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"System"),(0,o.kt)("th",{parentName:"tr",align:null},"Tags / Versions"),(0,o.kt)("th",{parentName:"tr",align:null},"Dockerfile"),(0,o.kt)("th",{parentName:"tr",align:null},"Base Image"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Ubuntu 20.04")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/krakenci/ubuntu"},"krakenci/ubuntu:20.04")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/Kraken-CI/kraken/blob/master/base-images/docker-ubuntu.txt"},"Dockerfile")),(0,o.kt)("td",{parentName:"tr",align:null},"ubuntu:20.04")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"CentOS 8")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/krakenci/centos"},"krakenci/centos:8")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/Kraken-CI/kraken/blob/master/base-images/docker-centos.txt"},"Dockerfile")),(0,o.kt)("td",{parentName:"tr",align:null},"centos:8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Fedora 33")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/krakenci/fedora"},"krakenci/fedora:33")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/Kraken-CI/kraken/blob/master/base-images/docker-fedora.txt"},"Dockerfile")),(0,o.kt)("td",{parentName:"tr",align:null},"fedora:32")))))}d.isMDXComponent=!0}}]);