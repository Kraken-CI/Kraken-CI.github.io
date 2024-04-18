"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[4212],{7989:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=s(4848),t=s(8453);s(4074),s(3012);const r={slug:"data-and-dynamism-in-schema",title:"Data and Dynamism in Schema",authors:"mike",tags:["kraken","devops","cicd"]},i=void 0,o={permalink:"/blog/data-and-dynamism-in-schema",editUrl:"https://github.com/kraken-ci/website/edit/master/blog/blog/2023-04-15-data-and-dynamism-in-schema.mdx",source:"@site/blog/2023-04-15-data-and-dynamism-in-schema.mdx",title:"Data and Dynamism in Schema",description:"The Kraken version 1.1",date:"2023-04-15T00:00:00.000Z",tags:[{label:"kraken",permalink:"/blog/tags/kraken"},{label:"devops",permalink:"/blog/tags/devops"},{label:"cicd",permalink:"/blog/tags/cicd"}],readingTime:1.675,hasTruncateMarker:!0,authors:[{name:"Michal Nowikowski",title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",url:"https://www.linkedin.com/in/godfryd",imageURL:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4",key:"mike"}],frontMatter:{slug:"data-and-dynamism-in-schema",title:"Data and Dynamism in Schema",authors:"mike",tags:["kraken","devops","cicd"]},unlisted:!1,prevItem:{title:"Conditional Steps",permalink:"/blog/conditional-steps"},nextItem:{title:"Further Logging Improvements",permalink:"/blog/further-logging-improvements"}},d={authorsImageUrls:[void 0]},l=[{value:"User Data",id:"user-data",level:3},{value:"Data in Schema Code",id:"data-in-schema-code",level:3},{value:"New OSes Supported",id:"new-oses-supported",level:3}];function c(e){const a={a:"a",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["The Kraken version ",(0,n.jsx)(a.a,{href:"https://github.com/Kraken-CI/kraken/releases/tag/v1.1",children:"1.1"}),"\nintroduces even more improvements in logging."]}),"\n",(0,n.jsx)(a.p,{children:"The major changes are:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"added storing user data server-side"}),"\n",(0,n.jsx)(a.li,{children:"data of internal objects and user data are now exposed in a schema code"}),"\n",(0,n.jsx)(a.li,{children:"added support for several new operating systems"}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["1.1 release brings several more features - check ",(0,n.jsx)(a.a,{href:"https://github.com/Kraken-CI/kraken/releases/tag/v1.1",children:"the release\nnotes"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"More details about the major features are below."}),"\n",(0,n.jsx)(a.h3,{id:"user-data",children:"User Data"}),"\n",(0,n.jsx)(a.p,{children:"This feature enables users to store data in the workflow schema code\non the server-side. For instance, a user can prepare data in JSON\nformat in one step of the schema code. Then, in the subsequent step,\nthe user can upload the data from the prepared file to the Kraken Server. The\ndata can be attached to a flow, branch, or project. If it is attached\nto a flow, its scope is restricted to that particular flow, and it can\nbe used in the next stage of that flow. However, it will not be\nvisible in a new flow. If the data is attached to a branch or project,\nit will be shared by subsequent flows."}),"\n",(0,n.jsxs)(a.p,{children:["Details and examples are described in the\n",(0,n.jsx)(a.a,{href:"/docs/schema#data",children:"Data Tool section of the Workflow Schema documentation"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"data-in-schema-code",children:"Data in Schema Code"}),"\n",(0,n.jsx)(a.p,{children:"The data stored by the user, as well as the data of other internal\nobjects such as jobs, runs, flows, branches, and projects, can be\naccessed in a stage schema code."}),"\n",(0,n.jsx)(a.p,{children:"The data can be accessed via a context that is passed to the stage\nfunction and also through string interpolation of special variables."}),"\n",(0,n.jsx)(a.p,{children:"All of this allows for significant dynamism in a stage schema\ncode. For example, the list of jobs or step details may be based on\nthe data stored by a user in previous stages."}),"\n",(0,n.jsxs)(a.p,{children:["Details are described in the ",(0,n.jsx)(a.a,{href:"/docs/schema-data",children:"Data in Schema"}),"\nchapter in the docs."]}),"\n",(0,n.jsx)(a.h3,{id:"new-oses-supported",children:"New OSes Supported"}),"\n",(0,n.jsxs)(a.p,{children:["The new supported OSes include Rocky Linux 9, AlmaLinux and Debian\nBookworm. The full list is availabled in\n",(0,n.jsx)(a.a,{href:"/docs/docker-executor#tested-vanilla-images",children:"Docker Executor"}),"\ndocs."]})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4074:(e,a,s)=>{s.d(a,{A:()=>t});s(6540);var n=s(4848);const t=e=>{let{img:a}=e;return(0,n.jsx)("a",{href:"/img/"+a,target:"blank",children:(0,n.jsx)("img",{src:"/img/"+a,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})})}}}]);