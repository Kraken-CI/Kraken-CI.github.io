(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[2019],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},192:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(4137)),o=["components"],s={id:"features",title:"Features"},l=void 0,u={unversionedId:"features",id:"features",isDocsHomePage:!1,title:"Features",description:"The main differentiators of Kraken CI are:",source:"@site/docs/features.md",sourceDirName:".",slug:"/features",permalink:"/docs/features",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/features.md",version:"current",frontMatter:{id:"features",title:"Features"},sidebar:"someSidebar",previous:{title:"Philosophy",permalink:"/docs/philosophy"},next:{title:"Demo",permalink:"/docs/demo"}},c=[{value:"Planning",id:"planning",children:[]},{value:"Execution",id:"execution",children:[]},{value:"Reporting",id:"reporting",children:[]}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The main differentiators of Kraken CI are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"massive testing support: hunderds thousands of tests per build"),(0,i.kt)("li",{parentName:"ul"},"focus on hardware testing were hardware is not stable and requires monitoring, rebooting, etc.")),(0,i.kt)("p",null,"The other features can be grouped in 3 areas: planning, execution and reporting."),(0,i.kt)("h2",{id:"planning"},"Planning"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"schema"},"workflow schema")," defines scope of jobs and tests with assigned configuration and\nenvironments"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"schema"},"workflow schema")," is using\n",(0,i.kt)("a",{parentName:"li",href:"https://www.python.org/"},"Python"),"/",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bazelbuild/starlark"},"Starlark")," language"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"schema"},"workflow schema")," can be defined directly in Kraken Web UI or\nfetched from project's or from another Git repository"),(0,i.kt)("li",{parentName:"ul"},"configurations allow for running the same set of tests but with different parameters"),(0,i.kt)("li",{parentName:"ul"},"environments indicate execution agent groups and operating systems that should be used for jobs"),(0,i.kt)("li",{parentName:"ul"},"groups are defined by assigning execution agents to them"),(0,i.kt)("li",{parentName:"ul"},"jobs can be triggered by:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"external triggers via webhooks (e.g.: from GitHub or GitLab)"),(0,i.kt)("li",{parentName:"ul"},"by a commit to a repository"),(0,i.kt)("li",{parentName:"ul"},"on time interval"),(0,i.kt)("li",{parentName:"ul"},"on CRON rule"),(0,i.kt)("li",{parentName:"ul"},"on given time in a day"))),(0,i.kt)("li",{parentName:"ul"},"scope of jobs can be dynamically adjusted based on various criteria using Python/Starlark"),(0,i.kt)("li",{parentName:"ul"},"Flows and Runs can have custom labels")),(0,i.kt)("h2",{id:"execution"},"Execution"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"jobs are assigned to Kraken Agents for execution"),(0,i.kt)("li",{parentName:"ul"},"Agents are running on machines, they can be set up on:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"bare metal machines"),(0,i.kt)("li",{parentName:"ul"},"virtual machines"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," environment\nlike:\n",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Compose"),",\n",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/swarm/"},"Swarm"),"\nor ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://linuxcontainers.org/lxd/introduction/"},"LXD")," environment"))),(0,i.kt)("li",{parentName:"ul"},"Agents use executors to execute; there are executors that can run jobs:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"locally on current host"),(0,i.kt)("li",{parentName:"ul"},"in Docker container"),(0,i.kt)("li",{parentName:"ul"},"in LXD container"))),(0,i.kt)("li",{parentName:"ul"},"builds and tests execution is dynamically distributed to multiple\nmachines with Kraken Agents according to indicated environments"),(0,i.kt)("li",{parentName:"ul"},"jobs can return 3 kinds of entities:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"build artifacts - any files like packages, tarballs, RPMs,\ngenerated HTML reports"),(0,i.kt)("li",{parentName:"ul"},"test results - they have several states (",(0,i.kt)("inlineCode",{parentName:"li"},"not-run"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"passed"),",\n",(0,i.kt)("inlineCode",{parentName:"li"},"failed"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"disabled"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"unsupported"),") and key-value pairs\nthat storing e.g. performance results (e.g. FPS or MPS)"),(0,i.kt)("li",{parentName:"ul"},"issues - returned by static analyzers, linters, etc"))),(0,i.kt)("li",{parentName:"ul"},"tests results and issues are streamed in realtime to Kraken Server\nso if execution crashes the results are preserved"),(0,i.kt)("li",{parentName:"ul"},"monitoring of machines and agents: if they do not report alive for\nseveral minutes then they are disconnected from pool of available\nmachines"),(0,i.kt)("li",{parentName:"ul"},"termination on timeout of stages, jobs and particular commands -\nthis way execution farm is behaving predictably and is not e.g.:\nblocked by some broken build that hangs machine or by an infinite\nloop in tests"),(0,i.kt)("li",{parentName:"ul"},"automatically estimated timeouts for jobs based on passed execution")),(0,i.kt)("h2",{id:"reporting"},"Reporting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"test results and issues in CI are monitored over time; this allows for:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"comparing to previous results and then reporting ",(0,i.kt)("inlineCode",{parentName:"li"},"regressions")," and\n",(0,i.kt)("inlineCode",{parentName:"li"},"fixes")),(0,i.kt)("li",{parentName:"ul"},"presenting ",(0,i.kt)("inlineCode",{parentName:"li"},"stability")," of test cases so it is easy to spot what\ntest should be improved or removed from testing scope"),(0,i.kt)("li",{parentName:"ul"},"presenting charts of test case history so it can be observed how\ngiven test case behaved in the past"),(0,i.kt)("li",{parentName:"ul"},"aging ie. showing how long given result didn't change (or the time\nof the last change of result of given test case)"))),(0,i.kt)("li",{parentName:"ul"},"test results and issues in DEV flows are compared to latest CI\nresults so fixes and regressions in changes on a given developer\nbranch are spotted before a merge to the production branch"),(0,i.kt)("li",{parentName:"ul"},"support for performance tests:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"on test case can report multiple iterations with a list values"),(0,i.kt)("li",{parentName:"ul"},"estimation of statistical values are like average, median,\nstandard deviation, covariance and more"),(0,i.kt)("li",{parentName:"ul"},"presenting on a chart changes of values of given test case over\ntime with indicating median or average"))),(0,i.kt)("li",{parentName:"ul"},"performance results are tracked over time and regressions are\ndetected and reported")))}m.isMDXComponent=!0}}]);