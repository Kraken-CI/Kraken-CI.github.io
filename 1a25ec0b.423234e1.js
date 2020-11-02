(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(91)),o={id:"features",title:"Features"},s={unversionedId:"features",id:"features",isDocsHomePage:!1,title:"Features",description:"The main differentiators of Kraken CI are:",source:"@site/docs/features.md",slug:"/features",permalink:"/docs/features",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/features.md",version:"current",sidebar:"someSidebar",previous:{title:"Philosophy",permalink:"/docs/philosophy"},next:{title:"Demo",permalink:"/docs/demo"}},l=[{value:"Planning",id:"planning",children:[]},{value:"Execution",id:"execution",children:[]},{value:"Reporting",id:"reporting",children:[]}],c={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The main differentiators of Kraken CI are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"massive testing support: hunderds thousands of tests per build"),Object(i.b)("li",{parentName:"ul"},"focus on hardware testing were hardware is not stable and requires monitoring, rebooting, etc.")),Object(i.b)("p",null,"The other features can be grouped in 3 areas: planning, execution and reporting."),Object(i.b)("h2",{id:"planning"},"Planning"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"schema"}),"workflow schema")," defines scope of jobs and tests with assigned configuration and\nenvironments"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"schema"}),"workflow schema")," is using\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.python.org/"}),"Python"),"/",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bazelbuild/starlark"}),"Starlark")," language"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"schema"}),"workflow schema")," can be defined directly in Kraken Web UI or\nfetched from project's repositor or from another repository"),Object(i.b)("li",{parentName:"ul"},"configurations allow for running the same set of tests but with different parameters"),Object(i.b)("li",{parentName:"ul"},"environments indicate execution machines groups and operating systems that should be used for jobs"),Object(i.b)("li",{parentName:"ul"},"groups can be defined:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"statically by manual assignment"),Object(i.b)("li",{parentName:"ul"},"dynamically based on machine capabilities and classification expression defined in dynamic group"))),Object(i.b)("li",{parentName:"ul"},"jobs can be triggered by:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"external triggers via webhooks (e.g.: from GitHub or GitLab)"),Object(i.b)("li",{parentName:"ul"},"on time interval"),Object(i.b)("li",{parentName:"ul"},"on given time in a day"),Object(i.b)("li",{parentName:"ul"},"on CRON rule")))),Object(i.b)("h2",{id:"execution"},"Execution"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"jobs are assigned to Kraken Agents for execution"),Object(i.b)("li",{parentName:"ul"},"Agents are running on machines, they can be set up on:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"bare metal machines"),Object(i.b)("li",{parentName:"ul"},"virtual machines"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.docker.com/"}),"Docker")," environment\nlike:\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/compose/"}),"Compose"),",\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/engine/swarm/"}),"Swarm"),"\nor ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/"}),"Kubernetes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://linuxcontainers.org/lxd/introduction/"}),"LXD")," environment"))),Object(i.b)("li",{parentName:"ul"},"Agents use executors to execute; there are executors that can run jobs:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"locally on current host"),Object(i.b)("li",{parentName:"ul"},"in Docker container"),Object(i.b)("li",{parentName:"ul"},"in LXD container"))),Object(i.b)("li",{parentName:"ul"},"builds and tests execution is dynamically distributed to multiple machines with Kraken Agents according to indicated environments"),Object(i.b)("li",{parentName:"ul"},"jobs can return 3 kinds of entities:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"build artifacts - any files like packages, tarballs, RPMs, generated HTML reports"),Object(i.b)("li",{parentName:"ul"},"test results - they have several states (",Object(i.b)("inlineCode",{parentName:"li"},"not-run"),", ",Object(i.b)("inlineCode",{parentName:"li"},"passed"),", ",Object(i.b)("inlineCode",{parentName:"li"},"failed"),", ",Object(i.b)("inlineCode",{parentName:"li"},"error"),", ",Object(i.b)("inlineCode",{parentName:"li"},"disabled"),", ",Object(i.b)("inlineCode",{parentName:"li"},"unsupported"),")\nand key-value pairs that storing e.g. performance results (e.g. FPS or MPS)"),Object(i.b)("li",{parentName:"ul"},"issues - returned by static analyzers, linters, etc"))),Object(i.b)("li",{parentName:"ul"},"tests results and issues are streamed in realtime to Kraken Server so if execution crashes the results are preserved"),Object(i.b)("li",{parentName:"ul"},"monitoring of machines and agents: if they do not report alive for several minutes then they are disconnected from pool of available\nmachines"),Object(i.b)("li",{parentName:"ul"},"termination on timeout of stages, jobs and particular commands - this way execution farm is behaving predictably and is not e.g.: blocked\nby some broken build that hangs machine or by an infinite loop in tests"),Object(i.b)("li",{parentName:"ul"},"automatically estimated timeouts for jobs based on passed execution")),Object(i.b)("h2",{id:"reporting"},"Reporting"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"test results and issues are monitored over time; this allows for:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"comparing to previous results and then reporting ",Object(i.b)("inlineCode",{parentName:"li"},"regressions")," and ",Object(i.b)("inlineCode",{parentName:"li"},"fixes")),Object(i.b)("li",{parentName:"ul"},"presenting ",Object(i.b)("inlineCode",{parentName:"li"},"stability")," of test cases so it is easy to spot what test should be improved or removed from testing scope"),Object(i.b)("li",{parentName:"ul"},"presenting charts of test case history so it can be observed how given test case behaved in the past"),Object(i.b)("li",{parentName:"ul"},"aging ie. showing how long given result didn't change (or the time of the last change of result of given test case)"))),Object(i.b)("li",{parentName:"ul"},"support for performance tests:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"on test case can report multiple iterations with a list values"),Object(i.b)("li",{parentName:"ul"},"estimation of statistical values are like average, median, standard deviation, covariance and more"),Object(i.b)("li",{parentName:"ul"},"presenting on a chart changes of values of given test case over time with indicating median or average"))),Object(i.b)("li",{parentName:"ul"},"performance results are tracked over time and regressions are detected and reported")))}b.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?r.a.createElement(d,s(s({ref:t},c),{},{components:n})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);