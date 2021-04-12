(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,d=u["".concat(i,".").concat(g)]||u[g]||b[g]||o;return n?a.a.createElement(d,s(s({ref:t},c),{},{components:n})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},130:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=({img:e})=>a.a.createElement("img",{src:"/img/"+e,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(125)),i=n(130),s={slug:"kraken-release-0-475",title:"Kraken Release 0.475",author:"Michal Nowikowski",author_title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",author_url:"https://www.linkedin.com/in/godfryd",author_image_url:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4",tags:["kraken","release"],description:"kraken,continuous integration,continuous testing"},l={permalink:"/blog/kraken-release-0-475",editUrl:"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-04-12-kraken-release-0-475.mdx",source:"@site/blog/2021-04-12-kraken-release-0-475.mdx",description:"kraken,continuous integration,continuous testing",date:"2021-04-12T00:00:00.000Z",formattedDate:"April 12, 2021",tags:[{label:"kraken",permalink:"/blog/tags/kraken"},{label:"release",permalink:"/blog/tags/release"}],title:"Kraken Release 0.475",readingTime:1.24,truncated:!0,nextItem:{title:"Hello World!",permalink:"/blog/hello-world"}},c=[{value:"The last flows status on the Kraken main page",id:"the-last-flows-status-on-the-kraken-main-page",children:[]},{value:"Git repo changes on a flow page",id:"git-repo-changes-on-a-flow-page",children:[]},{value:"Step duration on Run page",id:"step-duration-on-run-page",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The 0.475 release contains three main features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"presenting ",Object(o.b)("strong",{parentName:"li"},"the status of the last flows")," on the Kraken main page"),Object(o.b)("li",{parentName:"ul"},"presenting ",Object(o.b)("strong",{parentName:"li"},"changes in Git repository")," that got into a given flow"),Object(o.b)("li",{parentName:"ul"},"presenting ",Object(o.b)("strong",{parentName:"li"},"step duration")," on Run page, on the selected job, on Steps tab")),Object(o.b)("h2",{id:"the-last-flows-status-on-the-kraken-main-page"},"The last flows status on the Kraken main page"),Object(o.b)("p",null,"The Kraken main page presents a list of branches for each\nproject.  On the Demo project shown below, there are multiple\nbranches. Now under each branch, there are exposed the last completed\nflow and the last in-progress flow. On the side, there is added a time\nin grey how long ago the flow was completed or created."),Object(o.b)(i.a,{img:"screen-main-last-flows.png",mdxType:"Screen"}),Object(o.b)("h2",{id:"git-repo-changes-on-a-flow-page"},"Git repo changes on a flow page"),Object(o.b)("p",null,"The flow can be triggered by a push to Github PR or a Git branch. Now\nthe flow page presents information about these Git changes."),Object(o.b)("p",null,"If a push to Github PR triggered a flow, then it is presented\nin ",Object(o.b)("strong",{parentName:"p"},"Repo Changes")," tab on the flow page."),Object(o.b)(i.a,{img:"screen-flow-repo-trigger.png",mdxType:"Screen"}),Object(o.b)("p",null,"If a stage has a repository defined in a trigger section, then the changes\ndetected since previous flow are presented on another ",Object(o.b)("strong",{parentName:"p"},"Repo Changes"),"\ntab for the selected stage."),Object(o.b)(i.a,{img:"screen-flow-run-repo-changes.png",mdxType:"Screen"}),Object(o.b)("h2",{id:"step-duration-on-run-page"},"Step duration on Run page"),Object(o.b)("p",null,"The run page show steps' status for the selected job on the Steps\ntab. Now besides the current state of a step, there is included its\nduration in seconds."),Object(o.b)(i.a,{img:"screen-run-step-duration.png",mdxType:"Screen"}))}u.isMDXComponent=!0}}]);