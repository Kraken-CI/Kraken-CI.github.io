"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[7999],{4137:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8135:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return m},default:function(){return f}});var n=r(3117),a=r(102),o=(r(7294),r(4137)),i=r(8742),l=["components"],c={slug:"kraken-code-quality",title:"Kraken's Code Quality",author:"Michal Nowikowski",author_title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",author_url:"https://www.linkedin.com/in/godfryd",author_image_url:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4",tags:["kraken","code","quality"]},u=void 0,s={permalink:"/blog/kraken-code-quality",editUrl:"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-04-22-kraken-code-quality.mdx",source:"@site/blog/2021-04-22-kraken-code-quality.mdx",title:"Kraken's Code Quality",description:"The last week brings to Kraken's source code many quality",date:"2021-04-22T00:00:00.000Z",formattedDate:"April 22, 2021",tags:[{label:"kraken",permalink:"/blog/tags/kraken"},{label:"code",permalink:"/blog/tags/code"},{label:"quality",permalink:"/blog/tags/quality"}],readingTime:.315,truncated:!1,authors:[{name:"Michal Nowikowski",title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",url:"https://www.linkedin.com/in/godfryd",imageURL:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],frontMatter:{slug:"kraken-code-quality",title:"Kraken's Code Quality",author:"Michal Nowikowski",author_title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",author_url:"https://www.linkedin.com/in/godfryd",author_image_url:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4",tags:["kraken","code","quality"]},prevItem:{title:"Kraken Release 0.492",permalink:"/blog/kraken-release-0-492"},nextItem:{title:"Kraken Release 0.475",permalink:"/blog/kraken-release-0-475"}},p={authorsImageUrls:[void 0]},m=[],d={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The last week brings to Kraken's source code many quality\nimprovements. Services like\n",(0,o.kt)("a",{parentName:"p",href:"https://lgtm.com/projects/g/Kraken-CI/kraken/"},"LGTM")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://app.codacy.com/gh/Kraken-CI/kraken/dashboard"},"Codacy")," help\nfixing code smells but also serious problems. So during that week in\nKraken's repository, many commits have landed that refactor the\ncode, fix issues and do code cleanup."),(0,o.kt)("p",null,"Thanks to all these changes, the project earned these quality badges:"),(0,o.kt)(i.Z,{img:"quality-badges.png",mdxType:"Screen"}))}f.isMDXComponent=!0},8742:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.img;return n.createElement("a",{href:"/img/"+t,target:"blank"},n.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}}))}}}]);