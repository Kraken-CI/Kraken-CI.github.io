(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[1700],{4137:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5519:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return p},toc:function(){return f},default:function(){return d}});var n=r(4034),a=r(9973),o=(r(7294),r(4137)),i=r(8742),l=["components"],s={slug:"kraken-release-0-492",title:"Kraken Release 0.492",author:"Michal Nowikowski",author_title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",author_url:"https://www.linkedin.com/in/godfryd",author_image_url:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4",tags:["kraken","release"]},u=void 0,c={permalink:"/blog/kraken-release-0-492",editUrl:"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-04-24-kraken-release-0-492.mdx",source:"@site/blog/2021-04-24-kraken-release-0-492.mdx",title:"Kraken Release 0.492",description:"The 0.492 release contains one feature:",date:"2021-04-24T00:00:00.000Z",formattedDate:"April 24, 2021",tags:[{label:"kraken",permalink:"/blog/tags/kraken"},{label:"release",permalink:"/blog/tags/release"}],readingTime:.545,truncated:!0,authors:[{name:"Michal Nowikowski",title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",url:"https://www.linkedin.com/in/godfryd",imageURL:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],prevItem:{title:"Kraken Release 0.557",permalink:"/blog/kraken-release-0-557"},nextItem:{title:"Kraken's Code Quality",permalink:"/blog/kraken-code-quality"}},p={authorsImageUrls:[void 0]},f=[],m={toc:f};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The 0.492 release contains one feature:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"status badges")),(0,o.kt)("p",null,"and two fixes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fixed collecting commits info in case there are deleted files"),(0,o.kt)("li",{parentName:"ul"},"fixed returning tests results counts - mistake during code cleanup")),(0,o.kt)("p",null,"The status badges indicate the current quality of a branch of a project."),(0,o.kt)(i.Z,{img:"kraken-badges.png",mdxType:"Screen"}),(0,o.kt)("p",null,"There are three types of badges. They are indicating:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"building state (if there are no errors)"),(0,o.kt)("li",{parentName:"ul"},"tests results with fixes and regression counts"),(0,o.kt)("li",{parentName:"ul"},"issues count with a count of newly discovered issues")),(0,o.kt)("p",null,"Links to the badges are available on a branch management page, in the Status Badge tab:"),(0,o.kt)(i.Z,{img:"screen-branch-mgmt-badges.png",mdxType:"Screen"}))}d.isMDXComponent=!0},8742:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.img;return n.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})}}}]);