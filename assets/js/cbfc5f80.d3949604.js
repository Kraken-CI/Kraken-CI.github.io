(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[3854],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6813:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(4034),a=n(9973),i=(n(7294),n(4137)),o=n(8742),s=["components"],l={slug:"kraken-release-0-557",title:"Kraken Release 0.557",author:"Michal Nowikowski",author_title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",author_url:"https://www.linkedin.com/in/godfryd",author_image_url:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4",tags:["kraken","release"]},c=void 0,u={permalink:"/blog/kraken-release-0-557",editUrl:"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-05-227-kraken-release-0-557.mdx",source:"@site/blog/2021-05-227-kraken-release-0-557.mdx",title:"Kraken Release 0.557",description:"The 0.557 release contains several new features and improvements and some fixes.",date:"2021-05-22T00:00:00.000Z",formattedDate:"May 22, 2021",tags:[{label:"kraken",permalink:"/blog/tags/kraken"},{label:"release",permalink:"/blog/tags/release"}],readingTime:2.37,truncated:!0,authors:[{name:"Michal Nowikowski",title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",url:"https://www.linkedin.com/in/godfryd",imageURL:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],prevItem:{title:"Kraken Release 0.645",permalink:"/blog/kraken-release-0-645"},nextItem:{title:"Kraken Release 0.492",permalink:"/blog/kraken-release-0-492"}},d={authorsImageUrls:[void 0]},p=[{value:"The list of changes",id:"the-list-of-changes",children:[],level:2},{value:"Improved diagnostics",id:"improved-diagnostics",children:[{value:"Logs",id:"logs",children:[],level:3},{value:"Error Indicator",id:"error-indicator",children:[],level:3}],level:2},{value:"Preliminary AWS EC2 integration",id:"preliminary-aws-ec2-integration",children:[],level:2}],g={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v0.557"},"0.557 release")," contains several new features and improvements and some fixes.\nThe most noteworthy changes are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"improved diagnostics capabilities, i.e. browsing internal logs from Kraken services"),(0,i.kt)("li",{parentName:"ul"},"integration with AWS EC2 - this is in beta state")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/quick-start"},"Quick Start")," guide shows how to install Kraken CI."),(0,i.kt)("h2",{id:"the-list-of-changes"},"The list of changes"),(0,i.kt)("p",null,"The complete list of changes looks as follows."),(0,i.kt)("p",null,"Features & improvements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#105 added browsing Kraken logs in diagnostics page"),(0,i.kt)("li",{parentName:"ul"},"added errors number indicator in the top menu bar"),(0,i.kt)("li",{parentName:"ul"},"added integration with AWS EC2 - spawning VMs for jobs (beta/preview)"),(0,i.kt)("li",{parentName:"ul"},"added loading status with a spinner to submit, refresh and other buttons"),(0,i.kt)("li",{parentName:"ul"},"added interpolating variables in system and agents_group names in a workflow schema"),(0,i.kt)("li",{parentName:"ul"},"added adding kraken user to docker group and configuring sudo in agent installer"),(0,i.kt)("li",{parentName:"ul"},"kraken workflow: switched to AWS agents in build and static analysis jobs"),(0,i.kt)("li",{parentName:"ul"},"added codebeat badge to readme")),(0,i.kt)("p",null,"Fixes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fixed preparing repo changes data"),(0,i.kt)("li",{parentName:"ul"},"fixed counting agents in agents group"),(0,i.kt)("li",{parentName:"ul"},"fixed updating schema_from_repo_enabled"),(0,i.kt)("li",{parentName:"ul"},"fixed colors of top menu items")),(0,i.kt)("h2",{id:"improved-diagnostics"},"Improved diagnostics"),(0,i.kt)("h3",{id:"logs"},"Logs"),(0,i.kt)("p",null,"The diagnostics page accessible from the top menu bar got a\nnew feature: browser of Kraken services logs. The second tab on the\ndiagnostics page, called ",(0,i.kt)("inlineCode",{parentName:"p"},"Logs"),", now contains filters and a\nlogs window."),(0,i.kt)(o.Z,{img:"screen-diagnostics-logs.png",mdxType:"Screen"}),(0,i.kt)("p",null,"The list of select buttons at the top allows selecting Kraken services\nlike server/api, celery or watchdog. Below, there is a dropbox with\nlog level selection, from info level to error level. When the celery\nservice is selected, selecting task type from the dropbox list is also\npossible."),(0,i.kt)("h3",{id:"error-indicator"},"Error Indicator"),(0,i.kt)("p",null,"To make it easier to reach logs with some problems, there have been\nadded an error indicator in the top menu bar."),(0,i.kt)(o.Z,{img:"screen-error-indicator.png",mdxType:"Screen"}),(0,i.kt)("p",null,"It is visible on all Kraken pages. If it is greater than 0, it is\ndisplayed in reddish color to get user attention. The count indicates\nthe number of errors in Kraken services logs in the last hour.\nWhen clicked, it leads to the logs page."),(0,i.kt)("h2",{id:"preliminary-aws-ec2-integration"},"Preliminary AWS EC2 integration"),(0,i.kt)("p",null,"The second, quite exciting feature, is integration with AWS EC2. The\nintegration allows for autoscaling Kraken's agents. If no jobs are\nwaiting for execution, then there are no waitng agents on EC2\nVMs. When they appear, new VMs in EC2 are spawned immediately. If the\nnumber of jobs grows, the number of VMs can grow as well. There is\npossible to set a limit for the number of VMs. VMs can be reused or\nreclaimed after a given period of idle time or after an indicated\nnumber of executed jobs."),(0,i.kt)("p",null,"The configuration in Kraken for AWS EC2 integration is 1) in global\nsettings (credentials) and 2) on the agent's group page."),(0,i.kt)("p",null,"More details will be presented when the feature is completed."))}m.isMDXComponent=!0},8742:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.img;return r.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})}}}]);