(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[2050],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),N=p(n),u=r,g=N["".concat(m,".").concat(u)]||N[u]||k[u]||i;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=N;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},1112:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return m},default:function(){return s}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l={},o={unversionedId:"schema-ref-embed",id:"schema-ref-embed",isDocsHomePage:!1,title:"schema-ref-embed",description:"Schema of Kraken Workflow Schema",source:"@site/docs/schema-ref-embed.md",sourceDirName:".",slug:"/schema-ref-embed",permalink:"/docs/schema-ref-embed",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/schema-ref-embed.md",version:"current",frontMatter:{}},m=[{value:"Schema of Kraken Workflow Schema",id:"schema-of-kraken-workflow-schema",children:[]},{value:"Properties",id:"properties",children:[]}],p={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"schema-of-kraken-workflow-schema"},"Schema of Kraken Workflow Schema"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This is a schema that defines format of Kraken Workflow Schema.")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"parent"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A name of the parent stage. ",(0,i.kt)("inlineCode",{parentName:"li"},"'root'")," if there is no parent. This allows chaining stages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"triggers"))," ",(0,i.kt)("em",{parentName:"li"},"(object)"),": One or more triggers that cause starting a new run of this stage.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"parent"))," ",(0,i.kt)("em",{parentName:"li"},"(boolean)"),": A parent stage to current one or 'root'. It allows defining a chain of stages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"interval"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"date"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"cron"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A parent stage to current one or 'root'. It allows defining a chain of stages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"repo"))," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"url"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"branch"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"repos"))," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"url"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"branch"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"interval")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": Minimum: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"manual"))," ",(0,i.kt)("em",{parentName:"li"},"(boolean)")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"parameters"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"name"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"type"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"default"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"configs"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"flow_label"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A custom label format for flows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"run_label"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A custom label format for runs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"jobs"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),": A list of jobs that are executed in the run. Jobs are executed in parallel.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"name"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A name of the job."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"timeout"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": An initial timeout of the job. If there are more than 10 historical succeded jobs then timeout is estimated automatically. Minimum: ",(0,i.kt)("inlineCode",{parentName:"li"},"30"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"steps"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),": An array of steps that are executed by an agent. Each step has indicated tool that is executing it. Steps are executed in given order.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tool")),": Equals ",(0,i.kt)("inlineCode",{parentName:"li"},"'shell'"),". A tool that executes provided command in a shell. The field is ",(0,i.kt)("em",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"cmd"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A command to execute. The field is ",(0,i.kt)("em",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"cwd"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'.'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"user"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A user that is used to execute a command. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'kraken'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"env"))," ",(0,i.kt)("em",{parentName:"li"},"(object)"),": A dictionary with environment variables and their values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"timeout"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A timeout in seconds that limits time of step execution. It is guareded by an agent. If it is exceeded then the step is arbitrarly terminated. Minimum: ",(0,i.kt)("inlineCode",{parentName:"li"},"30"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"attempts"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tool")),": Equals ",(0,i.kt)("inlineCode",{parentName:"li"},"'git'"),". A tool for cloning Git repository. The field is ",(0,i.kt)("em",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"checkout"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": An URL to the repository. The field is ",(0,i.kt)("em",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"branch"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A branch to checkout. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'master'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"destination"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A destination folder for the repository. Default is empty ie. the name of the repository."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ssh-key"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A name of a secret that holds SSH username and key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"access-token"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": An access token for GitLab use case."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"timeout"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A timeout in seconds that limits time of step execution. It is guareded by an agent. If it is exceeded then the step is arbitrarly terminated. Minimum: ",(0,i.kt)("inlineCode",{parentName:"li"},"30"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"attempts"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tool")),": Equals ",(0,i.kt)("inlineCode",{parentName:"li"},"'artifacts'"),". A tool for storing and retrieving artifacts in Kraken global storage. The field is ",(0,i.kt)("em",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"action"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": An action that artifacts tool should execute. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"upload"),". Must be one of: ",(0,i.kt)("inlineCode",{parentName:"li"},"'download'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'upload'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"source")),": A path or list of paths that should be archived or retreived. A path can indicate a folder or a file. A path, in case of upload action, can contain globbing signs ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"**"),". A path can be relative or absolute. The field is ",(0,i.kt)("em",{parentName:"li"},"required"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A single path."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),": A list of paths.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(string)")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"destination"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A path were the artifact(s) should be stored. In case of download action, if the destination folder does not exist then it is created. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'.'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"cwd"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'.'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"public"))," ",(0,i.kt)("em",{parentName:"li"},"(boolean)"),": Determines if artifacts should be public and available to users in web UI (",(0,i.kt)("inlineCode",{parentName:"li"},"True"),") or if they should be only accessible internally to other stages but only in the same flow (",(0,i.kt)("inlineCode",{parentName:"li"},"False"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"False"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"attempts"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tool")),": Equals ",(0,i.kt)("inlineCode",{parentName:"li"},"'cache'"),". A tool for storing and restoring files from cache. The field is ",(0,i.kt)("em",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"action"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": An action that the tool should perform. Must be one of: ",(0,i.kt)("inlineCode",{parentName:"li"},"'save'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'restore'"),". The field is ",(0,i.kt)("em",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"key"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A key under which files are stored in or restored from cache."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"keys"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),": A list of key under which files are restored from cache.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(string)")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"paths"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),": Source paths used in ",(0,i.kt)("inlineCode",{parentName:"li"},"store")," action.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(string)")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"expiry"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": Not implemented yet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"attempts"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tool")),": Equals ",(0,i.kt)("inlineCode",{parentName:"li"},"'pylint'"),". A tool that allows for static analysis of Python source code. The field is ",(0,i.kt)("em",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pylint_exe"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": An alternative path or command to pylint. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'pylint'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"rcfile"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A path to pylint rcfile. The field is ",(0,i.kt)("em",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"modules_or_packages"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A path or paths to Python modules or packages that should be checked. The field is ",(0,i.kt)("em",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"cwd"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'.'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"attempts"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tool")),": Equals ",(0,i.kt)("inlineCode",{parentName:"li"},"'pytest'"),". A tool that allows for running Python tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pytest_exe"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": An alternative path or command to pytest. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'pytest-3'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"params"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": Parameters passed directly to pytest executable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pythonpath"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": Extra paths that are used by Python to look for modules/packages that it wants to load."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"cwd"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'.'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"attempts"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tool")),": Equals ",(0,i.kt)("inlineCode",{parentName:"li"},"'junit_collect'"),". A tool that allows for collecting test results stored in JUnit files. The field is ",(0,i.kt)("em",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"file_glob"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A glob pattern for searching test result files. The field is ",(0,i.kt)("em",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"cwd"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'.'"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tool")),": Equals ",(0,i.kt)("inlineCode",{parentName:"li"},"'gotest'"),". A tool that allows for running Go language tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"go_exe"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": An alternative path or command to ",(0,i.kt)("inlineCode",{parentName:"li"},"go"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"params"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": Parameters passed directly to ",(0,i.kt)("inlineCode",{parentName:"li"},"go test"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"cwd"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'.'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"timeout"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A timeout in seconds that limits time of step execution. It is guareded by an agent. If it is exceeded then the step is arbitrarly terminated. Minimum: ",(0,i.kt)("inlineCode",{parentName:"li"},"30"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"attempts"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tool")),": Equals ",(0,i.kt)("inlineCode",{parentName:"li"},"'nglint'"),". A tool that allows for running Angular ",(0,i.kt)("inlineCode",{parentName:"li"},"ng lint"),", that is performing static analysis of TypeScript in Angular projects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"cwd"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'.'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"attempts"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tool")),": Equals ",(0,i.kt)("inlineCode",{parentName:"li"},"'cloc'"),". A tool that allows for running counting lines of code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"not-match-f"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": Filter out files that match to provided regex."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"exclude-dir"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": Excluded provided list of directories."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"cwd"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A current working directory where the step is executed. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'.'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"attempts"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tool")),": Equals ",(0,i.kt)("inlineCode",{parentName:"li"},"'rndtest'"),". A tool that allows for generating random test case results."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"count")),": A number of expected test cases.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": Minimum: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"attempts"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A number of times the step is retried if if it returns error. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"sleep_time_after_attempt"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)"),": A sleep time between subsequent execution attempts. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"environments"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),": It defines the surroundings of a job execution.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"agents_group"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": A name of agents group. An agent from this group will be used to execute the job. There is a special built-in group, ",(0,i.kt)("inlineCode",{parentName:"li"},"'all'")," that gathers all agents. The field is ",(0,i.kt)("em",{parentName:"li"},"required"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"executor"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": An executor that agent is using to execute a job. Must be one of: ",(0,i.kt)("inlineCode",{parentName:"li"},"'local'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'docker'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'lxd'"),". Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'local'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"system")),": An operating system name or list of such names that should be used for job execution. If this is a list then the number of job instances is multiplied by numer of systems - each instance has its system. There is a special system name, ",(0,i.kt)("inlineCode",{parentName:"li"},"'any'"),", that ignores system selection by jobs scheduler. The field is ",(0,i.kt)("em",{parentName:"li"},"required"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OR"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(string)")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"config"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": Not implemented yet."))))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"notification"))," ",(0,i.kt)("em",{parentName:"li"},"(object)"),": Notification allows for configuring a notification means that are used to pass an information about stage's run result. There are several communication methods supported.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"email"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": It sends run results to indicated email address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"slack"))," ",(0,i.kt)("em",{parentName:"li"},"(object)"),": It sends run results to indicated Slack channel.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"channel"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": Selected Slack channel."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"github"))," ",(0,i.kt)("em",{parentName:"li"},"(object)"),": It sends run results to associated pull request page on GitHub.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"credentials"))," ",(0,i.kt)("em",{parentName:"li"},"(string)"),": Credentials (user:password) that allows access to the project on GitHub.")))))))}s.isMDXComponent=!0}}]);