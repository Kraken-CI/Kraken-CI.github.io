(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(6),a=(n(0),n(84)),c={id:"architecture",title:"Architecture"},l={unversionedId:"architecture",id:"architecture",isDocsHomePage:!1,title:"Architecture",description:"Kraken Architecture",source:"@site/docs/architecture.md",permalink:"/docs/architecture",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/architecture.md",sidebar:"someSidebar",previous:{title:"Entities & Terminology",permalink:"/docs/entities"}},b=[{value:"Server",id:"server",children:[]},{value:"UI",id:"ui",children:[]},{value:"Controller",id:"controller",children:[]},{value:"Celery",id:"celery",children:[]},{value:"ELK",id:"elk",children:[]},{value:"Agent",id:"agent",children:[]}],o={rightToc:b};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/S11Lyfj.png",alt:"Kraken Architecture"}))),Object(a.b)("h2",{id:"server"},"Server"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Server")," exposes Kraken ReST API"),Object(a.b)("h2",{id:"ui"},"UI"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"UI")," is an Angular application that can be served by NGINX. Unicorn can be used to maintain ",Object(a.b)("inlineCode",{parentName:"p"},"Server")," instances."),Object(a.b)("h2",{id:"controller"},"Controller"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Controller")," is made of 4 services:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Planner")," - it triggers new flows based on indicated rule in given project's branch"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Scheduler")," - it assigns jobs to executors"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Watchdog")," - it checks runs and their jobs if they are in their time limits, it also monitors executors health"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Storage")," - it stores and serves artifacts which can be uploaded or downloaded by agents")),Object(a.b)("h2",{id:"celery"},"Celery"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Celery")," executes background tasks like processing results reported by an agent. Any service in ",Object(a.b)("inlineCode",{parentName:"p"},"Controller"),"\nor ",Object(a.b)("inlineCode",{parentName:"p"},"Celery")," tasks can enqueue new ",Object(a.b)("inlineCode",{parentName:"p"},"Celery")," tasks. Current tasks:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"analyze_results_history"),Object(a.b)("li",{parentName:"ul"},"notify_about_completed_run"),Object(a.b)("li",{parentName:"ul"},"trigger_stages"),Object(a.b)("li",{parentName:"ul"},"job_completed"),Object(a.b)("li",{parentName:"ul"},"trigger_run"),Object(a.b)("li",{parentName:"ul"},"trigger_flow")),Object(a.b)("h2",{id:"elk"},"ELK"),Object(a.b)("p",null,"This is ",Object(a.b)("inlineCode",{parentName:"p"},"ELK")," stack ie. ",Object(a.b)("inlineCode",{parentName:"p"},"Elasticsearch"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Logstash")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Kibana"),". ",Object(a.b)("inlineCode",{parentName:"p"},"Logstash")," is used for collecting logs from all agents,\n",Object(a.b)("inlineCode",{parentName:"p"},"Elasticsearch")," is used for storing these logs and exposing them to the ",Object(a.b)("inlineCode",{parentName:"p"},"Server")," for example for presentin in ",Object(a.b)("inlineCode",{parentName:"p"},"UI"),".\n",Object(a.b)("inlineCode",{parentName:"p"},"Kibana")," is an internal dashboard to ",Object(a.b)("inlineCode",{parentName:"p"},"Elasticsearch"),"."),Object(a.b)("h2",{id:"agent"},"Agent"),Object(a.b)("p",null,"Agent is a service that is run on a machine that is expected to execute jobs. Agent can execute jobs directly on the system,\nor it can encapulate them in e.g. container. Currently there are executors for:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"direct/bare"),Object(a.b)("li",{parentName:"ul"},"Docker"),Object(a.b)("li",{parentName:"ul"},"LXD")))}s.isMDXComponent=!0}}]);