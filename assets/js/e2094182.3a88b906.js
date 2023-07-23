"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[4427],{7769:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});var n=t(3117),s=t(102),r=(t(7294),t(4137)),o=(t(8742),t(5944),["components"]),i={slug:"data-and-dynamism-in-schema",title:"Data and Dynamism in Schema",authors:"mike",tags:["kraken","devops","cicd"]},l=void 0,d={permalink:"/blog/data-and-dynamism-in-schema",editUrl:"https://github.com/kraken-ci/website/edit/master/blog/blog/2023-04-15-data-and-dynamism-in-schema.mdx",source:"@site/blog/2023-04-15-data-and-dynamism-in-schema.mdx",title:"Data and Dynamism in Schema",description:"The Kraken version 1.1",date:"2023-04-15T00:00:00.000Z",formattedDate:"April 15, 2023",tags:[{label:"kraken",permalink:"/blog/tags/kraken"},{label:"devops",permalink:"/blog/tags/devops"},{label:"cicd",permalink:"/blog/tags/cicd"}],readingTime:1.675,hasTruncateMarker:!0,authors:[{name:"Michal Nowikowski",title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",url:"https://www.linkedin.com/in/godfryd",imageURL:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4",key:"mike"}],frontMatter:{slug:"data-and-dynamism-in-schema",title:"Data and Dynamism in Schema",authors:"mike",tags:["kraken","devops","cicd"]},prevItem:{title:"Conditional Steps",permalink:"/blog/conditional-steps"},nextItem:{title:"Further Logging Improvements",permalink:"/blog/further-logging-improvements"}},c={authorsImageUrls:[void 0]},m=[{value:"User Data",id:"user-data",level:3},{value:"Data in Schema Code",id:"data-in-schema-code",level:3},{value:"New OSes Supported",id:"new-oses-supported",level:3}],u={toc:m};function h(e){var a=e.components,t=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Kraken version ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v1.1"},"1.1"),"\nintroduces even more improvements in logging."),(0,r.kt)("p",null,"The major changes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"added storing user data server-side"),(0,r.kt)("li",{parentName:"ul"},"data of internal objects and user data are now exposed in a schema code"),(0,r.kt)("li",{parentName:"ul"},"added support for several new operating systems")),(0,r.kt)("p",null,"1.1 release brings several more features - check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v1.1"},"the release\nnotes"),"."),(0,r.kt)("p",null,"More details about the major features are below."),(0,r.kt)("h3",{id:"user-data"},"User Data"),(0,r.kt)("p",null,"This feature enables users to store data in the workflow schema code\non the server-side. For instance, a user can prepare data in JSON\nformat in one step of the schema code. Then, in the subsequent step,\nthe user can upload the data from the prepared file to the Kraken Server. The\ndata can be attached to a flow, branch, or project. If it is attached\nto a flow, its scope is restricted to that particular flow, and it can\nbe used in the next stage of that flow. However, it will not be\nvisible in a new flow. If the data is attached to a branch or project,\nit will be shared by subsequent flows."),(0,r.kt)("p",null,"Details and examples are described in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/schema#data"},"Data Tool section of the Workflow Schema documentation"),"."),(0,r.kt)("h3",{id:"data-in-schema-code"},"Data in Schema Code"),(0,r.kt)("p",null,"The data stored by the user, as well as the data of other internal\nobjects such as jobs, runs, flows, branches, and projects, can be\naccessed in a stage schema code."),(0,r.kt)("p",null,"The data can be accessed via a context that is passed to the stage\nfunction and also through string interpolation of special variables."),(0,r.kt)("p",null,"All of this allows for significant dynamism in a stage schema\ncode. For example, the list of jobs or step details may be based on\nthe data stored by a user in previous stages."),(0,r.kt)("p",null,"Details are described in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/schema-data"},"Data in Schema"),"\nchapter in the docs."),(0,r.kt)("h3",{id:"new-oses-supported"},"New OSes Supported"),(0,r.kt)("p",null,"The new supported OSes include Rocky Linux 9, AlmaLinux and Debian\nBookworm. The full list is availabled in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/docker-executor#tested-vanilla-images"},"Docker Executor"),"\ndocs."))}h.isMDXComponent=!0},8742:function(e,a,t){var n=t(7294);a.Z=function(e){var a=e.img;return n.createElement("a",{href:"/img/"+a,target:"blank"},n.createElement("img",{src:"/img/"+a,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}}))}}}]);