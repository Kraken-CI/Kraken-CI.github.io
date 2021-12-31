"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[5927],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7754:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(3117),i=n(102),a=(n(7294),n(4137)),l=["components"],o={id:"architecture",title:"Architecture"},c=void 0,s={unversionedId:"architecture",id:"architecture",title:"Architecture",description:"Kraken Architecture",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/docs/architecture",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/architecture.md",tags:[],version:"current",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"someSidebar",previous:{title:"Entities & Terminology",permalink:"/docs/entities"},next:{title:"Projects and Branches",permalink:"/docs/proj-branches"}},u=[{value:"Server",id:"server",children:[],level:2},{value:"UI",id:"ui",children:[],level:2},{value:"Controller",id:"controller",children:[],level:2},{value:"RQ",id:"rq",children:[],level:2},{value:"ClickHouse &amp; its Proxy",id:"clickhouse--its-proxy",children:[],level:2},{value:"MinIO",id:"minio",children:[],level:2},{value:"Agent",id:"agent",children:[],level:2}],p={toc:u};function d(e){var t=e.components,o=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Kraken Architecture",src:n(5468).Z})),(0,a.kt)("h2",{id:"server"},"Server"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Server")," exposes Kraken ReST API"),(0,a.kt)("h2",{id:"ui"},"UI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UI")," is an Angular application that can be served by NGINX. Unicorn can be used to maintain ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," instances."),(0,a.kt)("h2",{id:"controller"},"Controller"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Controller")," is made of 4 services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Planner")," - it triggers new flows based on indicated rule in given project's branch"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Scheduler")," - it assigns jobs to agents"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Watchdog")," - it checks runs and their jobs if they are in their time limits, it also monitors agents and their machines health")),(0,a.kt)("h2",{id:"rq"},"RQ"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RQ")," executes background tasks like processing results reported by\nan agent. Any service in ",(0,a.kt)("inlineCode",{parentName:"p"},"Controller")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"RQ")," tasks can enqueue\nnew ",(0,a.kt)("inlineCode",{parentName:"p"},"RQ")," tasks. Current tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"analyze_results_history"),(0,a.kt)("li",{parentName:"ul"},"notify_about_completed_run"),(0,a.kt)("li",{parentName:"ul"},"trigger_stages"),(0,a.kt)("li",{parentName:"ul"},"job_completed"),(0,a.kt)("li",{parentName:"ul"},"trigger_run"),(0,a.kt)("li",{parentName:"ul"},"trigger_flow")),(0,a.kt)("h2",{id:"clickhouse--its-proxy"},"ClickHouse & its Proxy"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ClickHouse")," is a database that is used for storing logs from all\nKraken services and from all agents, ",(0,a.kt)("inlineCode",{parentName:"p"},"ClickHouse Proxy")," is used to\ncollect logs, aggregate them and send in batches to ",(0,a.kt)("inlineCode",{parentName:"p"},"ClickHouse"),"\ndatabase."),(0,a.kt)("h2",{id:"minio"},"MinIO"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MinIO")," is an object storage database. It is used in Kraken to store\nartifact that are created during jobs execution, to store cache files\nand to store Git repository bundles."),(0,a.kt)("h2",{id:"agent"},"Agent"),(0,a.kt)("p",null,"Agent is a service that is run on a machine that is expected to\nexecute jobs. Agent can execute jobs directly on the system (locally),\nor it can encapulate them in e.g. container. Currently there are\nexecutors for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"local"),(0,a.kt)("li",{parentName:"ul"},"Docker"),(0,a.kt)("li",{parentName:"ul"},"LXD")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"pathname:///arch-ppt/index.html"},"Presentation about Kraken Architecture")))}d.isMDXComponent=!0},5468:function(e,t,n){t.Z=n.p+"assets/images/arch-overview-0d7cba28a51901f3cf6be2e94e4ce339.svg"}}]);