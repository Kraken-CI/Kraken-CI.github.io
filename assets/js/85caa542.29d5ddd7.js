(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[3638],{4137:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,k=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(k,s(s({ref:t},u),{},{components:r})):n.createElement(k,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3269:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(4137)),s=(r(8742),["components"]),i={slug:"testing-frameworks",title:"Testing Frameworks",author:"Michal Nowikowski",author_title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",author_url:"https://www.linkedin.com/in/godfryd",author_image_url:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4",tags:["kraken","cloud"]},l=void 0,c={permalink:"/blog/testing-frameworks",editUrl:"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-08-06-testing-frameworks.mdx",source:"@site/blog/2021-08-06-testing-frameworks.mdx",title:"Testing Frameworks",description:"There have been added three articles in the Kraken's documentation",date:"2021-08-06T00:00:00.000Z",formattedDate:"August 6, 2021",tags:[{label:"kraken",permalink:"/blog/tags/kraken"},{label:"cloud",permalink:"/blog/tags/cloud"}],readingTime:.8,truncated:!0,nextItem:{title:"Autoscaling with AWS",permalink:"/blog/autoscaling-with-aws"}},u=[{value:"Testing Frameworks",id:"testing-frameworks",children:[]},{value:"Custom Reports",id:"custom-reports",children:[]}],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There have been added three articles in the Kraken's documentation\nabout integration of testing frameworks with Kraken CI:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tf-junit"},"JUnit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tf-pytest"},"Pytest")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tf-robotframework"},"RobotFramework"))),(0,o.kt)("p",null,"The latest release ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v0.698"},"0.698\nrelease"),"\nbrings also a new feature: collecting, storing and presenting custom\ngenerated reports in e.g. HTML."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/quick-start"},"Quick Start")," guide shows how to install Kraken CI."),(0,o.kt)("h3",{id:"testing-frameworks"},"Testing Frameworks"),(0,o.kt)("p",null,"The articles about testing frameworks shows how to use well known\nframeworks like ",(0,o.kt)("a",{parentName:"p",href:"/docs/tf-junit"},"JUnit"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/tf-pytest"},"Pytest")," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/tf-robotframework"},"RobotFramework")," inside Kraken CI. There are\npresented stage workflow schemas with steps that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"execute the tests using particular framework"),(0,o.kt)("li",{parentName:"ol"},"report results to Kraken server"),(0,o.kt)("li",{parentName:"ol"},"store generated custom reports on Kraken server")),(0,o.kt)("h3",{id:"custom-reports"},"Custom Reports"),(0,o.kt)("p",null,"The latest release ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v0.698"},"0.698\nrelease"),"\nallows now for storing and presenting custom reports in e.g. HTML format.\nThe are available along current generic test case results page."),(0,o.kt)("p",null,"More details about step for storing reports can be found in ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema#artifacts"},"the\ndocs")," and example usage on ",(0,o.kt)("a",{parentName:"p",href:"/docs/tf-robotframework"},"RobotFramework\nexample"),"."))}m.isMDXComponent=!0},8742:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.img;return n.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})}}}]);