(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),c=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),p=c(n),O=a,j=p["".concat(b,".").concat(O)]||p[O]||s[O]||i;return n?r.a.createElement(j,l(l({ref:t},o),{},{components:n})):r.a.createElement(j,l({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=O;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var o=2;o<i;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},55:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(112)),b={},l={unversionedId:"schema-ref-embed",id:"schema-ref-embed",isDocsHomePage:!1,title:"schema-ref-embed",description:"Schema of Kraken Workflow Schema",source:"@site/docs/schema-ref-embed.md",slug:"/schema-ref-embed",permalink:"/docs/schema-ref-embed",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/schema-ref-embed.md",version:"current"},m=[{value:"Schema of Kraken Workflow Schema",id:"schema-of-kraken-workflow-schema",children:[]},{value:"Properties",id:"properties",children:[]}],o={toc:m};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"schema-of-kraken-workflow-schema"},"Schema of Kraken Workflow Schema"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"This is a schema that defines format of Kraken Workflow Schema.")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"parent"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A name of the parent stage. ",Object(i.b)("inlineCode",{parentName:"li"},"'root'")," if there is no parent. This allows chaining stages."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"triggers"))," ",Object(i.b)("em",{parentName:"li"},"(object)"),": One or more triggers that cause starting a new run of this stage.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"parent"))," ",Object(i.b)("em",{parentName:"li"},"(boolean)"),": A parent stage to current one or 'root'. It allows defining a chain of stages."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"interval"))," ",Object(i.b)("em",{parentName:"li"},"(string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"date"))," ",Object(i.b)("em",{parentName:"li"},"(string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"cron"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A parent stage to current one or 'root'. It allows defining a chain of stages."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"repo"))," ",Object(i.b)("em",{parentName:"li"},"(object)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"url"))," ",Object(i.b)("em",{parentName:"li"},"(string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"branch"))," ",Object(i.b)("em",{parentName:"li"},"(string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"repos"))," ",Object(i.b)("em",{parentName:"li"},"(object)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"url"))," ",Object(i.b)("em",{parentName:"li"},"(string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"branch"))," ",Object(i.b)("em",{parentName:"li"},"(string)")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"interval")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": Minimum: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR"))," ",Object(i.b)("em",{parentName:"li"},"(string)")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"manual"))," ",Object(i.b)("em",{parentName:"li"},"(boolean)")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"parameters"))," ",Object(i.b)("em",{parentName:"li"},"(array)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Items")," ",Object(i.b)("em",{parentName:"li"},"(object)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"name"))," ",Object(i.b)("em",{parentName:"li"},"(string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"type"))," ",Object(i.b)("em",{parentName:"li"},"(string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"default"))," ",Object(i.b)("em",{parentName:"li"},"(string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"description"))," ",Object(i.b)("em",{parentName:"li"},"(string)")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"configs"))," ",Object(i.b)("em",{parentName:"li"},"(array)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Items")," ",Object(i.b)("em",{parentName:"li"},"(object)")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"flow_label"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A custom label format for flows."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"run_label"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A custom label format for runs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"jobs"))," ",Object(i.b)("em",{parentName:"li"},"(array)"),": A list of jobs that are executed in the run. Jobs are executed in parallel.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Items")," ",Object(i.b)("em",{parentName:"li"},"(object)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"name"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A name of the job."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"timeout"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": An initial timeout of the job. If there are more than 10 historical succeded jobs then timeout is estimated automatically. Minimum: ",Object(i.b)("inlineCode",{parentName:"li"},"30"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"steps"))," ",Object(i.b)("em",{parentName:"li"},"(array)"),": An array of steps that are executed by an agent. Each step has indicated tool that is executing it. Steps are executed in given order.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Items")," ",Object(i.b)("em",{parentName:"li"},"(object)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"tool")),": Equals ",Object(i.b)("inlineCode",{parentName:"li"},"'shell'"),". A tool that executes provided command in a shell. The field is ",Object(i.b)("em",{parentName:"li"},"required"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"cmd"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A command to execute. The field is ",Object(i.b)("em",{parentName:"li"},"required"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"cwd"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"."),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"user"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A user that is used to execute a command. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"kraken"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"env"))," ",Object(i.b)("em",{parentName:"li"},"(object)"),": A dictionary with environment variables and their values."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"timeout"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A timeout in seconds that limits time of step execution. It is guareded by an agent. If it is exceeded then the step is arbitrarly terminated. Minimum: ",Object(i.b)("inlineCode",{parentName:"li"},"30"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"attempts"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"tool")),": Equals ",Object(i.b)("inlineCode",{parentName:"li"},"'git'"),". A tool for cloning Git repository. The field is ",Object(i.b)("em",{parentName:"li"},"required"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"checkout"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": An URL to the repository. The field is ",Object(i.b)("em",{parentName:"li"},"required"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"branch"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A branch to checkout. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"master"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"destination"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A destination folder for the repository. Default is empty ie. the name of the repository."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"timeout"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A timeout in seconds that limits time of step execution. It is guareded by an agent. If it is exceeded then the step is arbitrarly terminated. Minimum: ",Object(i.b)("inlineCode",{parentName:"li"},"30"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"attempts"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"tool")),": Equals ",Object(i.b)("inlineCode",{parentName:"li"},"'artifacts'"),". A tool for storing and retrieving artifacts in Kraken global storage. The field is ",Object(i.b)("em",{parentName:"li"},"required"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"action"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": An action that artifacts tool should execute. Default is ",Object(i.b)("inlineCode",{parentName:"li"},"upload"),". Must be one of: ",Object(i.b)("inlineCode",{parentName:"li"},"'download'"),", ",Object(i.b)("inlineCode",{parentName:"li"},"'upload'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"source")),": A path or list of paths that should be archived or retreived. A path can indicate a folder or a file. A path, in case of upload action, can contain globbing signs ",Object(i.b)("inlineCode",{parentName:"li"},"*")," or ",Object(i.b)("inlineCode",{parentName:"li"},"**"),". A path can be relative or absolute. The field is ",Object(i.b)("em",{parentName:"li"},"required"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A single path."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR"))," ",Object(i.b)("em",{parentName:"li"},"(array)"),": A list of paths.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Items")," ",Object(i.b)("em",{parentName:"li"},"(string)")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"destination"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A path were the artifact(s) should be stored. In case of download action, if the destination folder does not exist then it is created. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"."),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"cwd"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"."),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"public"))," ",Object(i.b)("em",{parentName:"li"},"(boolean)"),": Determines if artifacts should be public and available to users in web UI (",Object(i.b)("inlineCode",{parentName:"li"},"True"),") or if they should be only accessible internally to other stages but only in the same flow (",Object(i.b)("inlineCode",{parentName:"li"},"False"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"False"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"attempts"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"tool")),": Equals ",Object(i.b)("inlineCode",{parentName:"li"},"'cache'"),". A tool for storing and restoring files from cache. The field is ",Object(i.b)("em",{parentName:"li"},"required"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"action"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": An action that the tool should perform. Must be one of: ",Object(i.b)("inlineCode",{parentName:"li"},"'save'"),", ",Object(i.b)("inlineCode",{parentName:"li"},"'restore'"),". The field is ",Object(i.b)("em",{parentName:"li"},"required"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"key"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A key under which files are stored in or restored from cache."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"keys"))," ",Object(i.b)("em",{parentName:"li"},"(array)"),": A list of key under which files are restored from cache.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Items")," ",Object(i.b)("em",{parentName:"li"},"(string)")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"paths"))," ",Object(i.b)("em",{parentName:"li"},"(array)"),": Source paths used in ",Object(i.b)("inlineCode",{parentName:"li"},"store")," action.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Items")," ",Object(i.b)("em",{parentName:"li"},"(string)")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"expiry"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": Not implemented yet."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"attempts"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"tool")),": Equals ",Object(i.b)("inlineCode",{parentName:"li"},"'pylint'"),". A tool that allows for static analysis of Python source code. The field is ",Object(i.b)("em",{parentName:"li"},"required"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"pylint_exe"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": An alternative path or command to pylint. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"pylint"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"rcfile"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A path to pylint rcfile. The field is ",Object(i.b)("em",{parentName:"li"},"required"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"modules_or_packages"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A path or paths to Python modules or packages that should be checked. The field is ",Object(i.b)("em",{parentName:"li"},"required"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"cwd"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"."),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"attempts"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"tool")),": Equals ",Object(i.b)("inlineCode",{parentName:"li"},"'pytest'"),". A tool that allows for running Python tests."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"pytest_exe"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": An alternative path or command to pytest. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"pytest-3"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"params"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": Parameters passed directly to pytest executable."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"pythonpath"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": Extra paths that are used by Python to look for modules/packages that it wants to load."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"cwd"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"."),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"attempts"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"tool")),": Equals ",Object(i.b)("inlineCode",{parentName:"li"},"'junit_collect'"),". A tool that allows for collecting test results stored in JUnit files. The field is ",Object(i.b)("em",{parentName:"li"},"required"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"file_glob"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A glob pattern for searching test result files. The field is ",Object(i.b)("em",{parentName:"li"},"required"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"cwd"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"."),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"tool")),": Equals ",Object(i.b)("inlineCode",{parentName:"li"},"'gotest'"),". A tool that allows for running Go language tests."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"go_exe"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": An alternative path or command to ",Object(i.b)("inlineCode",{parentName:"li"},"go"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"params"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": Parameters passed directly to ",Object(i.b)("inlineCode",{parentName:"li"},"go test"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"cwd"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"."),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"timeout"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A timeout in seconds that limits time of step execution. It is guareded by an agent. If it is exceeded then the step is arbitrarly terminated. Minimum: ",Object(i.b)("inlineCode",{parentName:"li"},"30"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"attempts"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"tool")),": Equals ",Object(i.b)("inlineCode",{parentName:"li"},"'nglint'"),". A tool that allows for running Angular ",Object(i.b)("inlineCode",{parentName:"li"},"ng lint"),", that is performing static analysis of TypeScript in Angular projects."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"cwd"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"."),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"attempts"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"tool")),": Equals ",Object(i.b)("inlineCode",{parentName:"li"},"'cloc'"),". A tool that allows for running counting lines of code."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"not-match-f"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": Filter out files that match to provided regex."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"exclude-dir"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": Excluded provided list of directories."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"cwd"))," ",Object(i.b)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"."),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"attempts"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"tool")),": Equals ",Object(i.b)("inlineCode",{parentName:"li"},"'rndtest'"),". A tool that allows for generating random test case results."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"count")),": A number of expected test cases.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": Minimum: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR"))," ",Object(i.b)("em",{parentName:"li"},"(string)")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"attempts"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",Object(i.b)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"environments"))," ",Object(i.b)("em",{parentName:"li"},"(array)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Items")," ",Object(i.b)("em",{parentName:"li"},"(object)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"system")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR"))," ",Object(i.b)("em",{parentName:"li"},"(string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"OR"))," ",Object(i.b)("em",{parentName:"li"},"(array)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Items")," ",Object(i.b)("em",{parentName:"li"},"(string)")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"executor"))," ",Object(i.b)("em",{parentName:"li"},"(string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"agents_group"))," ",Object(i.b)("em",{parentName:"li"},"(string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"config"))," ",Object(i.b)("em",{parentName:"li"},"(string)")))))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"notification"))," ",Object(i.b)("em",{parentName:"li"},"(object)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"slack"))," ",Object(i.b)("em",{parentName:"li"},"(object)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"channel"))," ",Object(i.b)("em",{parentName:"li"},"(string)")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"email"))," ",Object(i.b)("em",{parentName:"li"},"(string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"github"))," ",Object(i.b)("em",{parentName:"li"},"(object)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"credentials"))," ",Object(i.b)("em",{parentName:"li"},"(string)"))))))))}c.isMDXComponent=!0}}]);