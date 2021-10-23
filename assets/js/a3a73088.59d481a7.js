(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[4034],{4137:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},488:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(4034),i=t(9973),r=(t(7294),t(4137)),o=["components"],l={id:"entities",title:"Entities & Terminology"},s=void 0,p={unversionedId:"entities",id:"entities",isDocsHomePage:!1,title:"Entities & Terminology",description:"Project",source:"@site/docs/entities.md",sourceDirName:".",slug:"/entities",permalink:"/docs/entities",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/entities.md",tags:[],version:"current",frontMatter:{id:"entities",title:"Entities & Terminology"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Architecture",permalink:"/docs/architecture"}},c=[{value:"Project",id:"project",children:[],level:3},{value:"Branch",id:"branch",children:[],level:3},{value:"Stage",id:"stage",children:[],level:3},{value:"Jobs",id:"jobs",children:[{value:"Job Steps",id:"job-steps",children:[],level:4},{value:"Job Environments",id:"job-environments",children:[],level:4}],level:3},{value:"Flows &amp; Runs",id:"flows--runs",children:[],level:3},{value:"Example of a Workflow Schema",id:"example-of-a-workflow-schema",children:[],level:3}],m={toc:c};function u(e){var n=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"project"},"Project"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Project")," is the highest level entity, which separates things from other ",(0,r.kt)("inlineCode",{parentName:"p"},"projects"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Projects",src:t(3209).Z})),(0,r.kt)("h3",{id:"branch"},"Branch"),(0,r.kt)("p",null,"A project can contain multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"branches"),". Kraken ",(0,r.kt)("inlineCode",{parentName:"p"},"Branch")," can represent a real source code\nrepository branch of a ",(0,r.kt)("inlineCode",{parentName:"p"},"project"),", but it does not have to. ",(0,r.kt)("inlineCode",{parentName:"p"},"Branches")," are usually used to model\nmultiple parallel, often independent, activity streams of a ",(0,r.kt)("inlineCode",{parentName:"p"},"project"),". For example a customer-focused maintenance release\nor a future-oriented development work. ",(0,r.kt)("inlineCode",{parentName:"p"},"Branches")," may have different views of the source code repository,\nuse different sets of tools, have different scopes of tests, etc."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Branches",src:t(1271).Z})),(0,r.kt)("h3",{id:"stage"},"Stage"),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"branch")," can contain multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"stages"),". A ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," is used to define the detailed activities that will happen when a ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," is executed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Stages")," can be linked together to make one ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," run after another ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," is completed.\nAll ",(0,r.kt)("inlineCode",{parentName:"p"},"stages")," that are not dependent (linked) and are ready to run, can be executed in parallel."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stages",src:t(741).Z})),(0,r.kt)("p",null,"What is happening in a ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," is defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"stage's")," ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow schema")," or just ",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),".\nIn ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," there can be defines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"one or more ",(0,r.kt)("inlineCode",{parentName:"li"},"stage")," parents"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"triggers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"configs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jobs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"notifications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Stage")," linking is defined by parents property in a ",(0,r.kt)("inlineCode",{parentName:"p"},"stage"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Parameters")," can be used to differentiate and parametrize ",(0,r.kt)("inlineCode",{parentName:"p"},"jobs"),";\ntheir values can be provided by user while starting a ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," manually otherwise default values are used.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Configs")," allow for defining set of key-value pairs that statically define set of tests variants for execution.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Notifications")," can be used to inform users about ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," result. There are several media available like email or Slack.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Timeout")," limits the time of whole ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," executions. These assure us that the ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," will be terminated if something really\nbad is happening in ",(0,r.kt)("inlineCode",{parentName:"p"},"jobs")," execution (e.g. they are hanging the machines)."),(0,r.kt)("p",null,"More details about these ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," properties are available in chapter ",(0,r.kt)("a",{parentName:"p",href:"schema"},"Schema"),"."),(0,r.kt)("h3",{id:"jobs"},"Jobs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Jobs")," describe what should be done in a ",(0,r.kt)("inlineCode",{parentName:"p"},"stage"),". A ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," can define multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"jobs")," and they all are run in parallel."),(0,r.kt)("h4",{id:"job-steps"},"Job Steps"),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"job")," contains one or more ",(0,r.kt)("inlineCode",{parentName:"p"},"steps")," that describe operations to be run sequentially. A single ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," can be for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"execution of a shell command"),(0,r.kt)("li",{parentName:"ul"},"checking out sources from a repository"),(0,r.kt)("li",{parentName:"ul"},"running tests by a test tool"),(0,r.kt)("li",{parentName:"ul"},"running static checks by a linter"),(0,r.kt)("li",{parentName:"ul"},"and many more")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Jobs-Steps",src:t(143).Z})),(0,r.kt)("h4",{id:"job-environments"},"Job Environments"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Job")," contains definition of multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"environments"),". An ",(0,r.kt)("inlineCode",{parentName:"p"},"environment")," specifies the following conditions for the execution of a ",(0,r.kt)("inlineCode",{parentName:"p"},"job"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"agents group")," - pointing to machines with agents which will be used to run the steps"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"operating system")," - OS that will be used on the machines"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"configuration")," - one of ",(0,r.kt)("inlineCode",{parentName:"li"},"configurations")," defined in the ",(0,r.kt)("inlineCode",{parentName:"li"},"stage"))),(0,r.kt)("p",null,"With the help of ",(0,r.kt)("inlineCode",{parentName:"p"},"environments"),", the same ",(0,r.kt)("inlineCode",{parentName:"p"},"job")," can be run on various combinations of target machines, operating systems and configuration parameters.\nSo environments allow for running the same job:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"on several different operating system;"),(0,r.kt)("li",{parentName:"ul"},"on several different hardware, e.g.: one with AMD CPU, another one with Intel CPU;"),(0,r.kt)("li",{parentName:"ul"},"with different tests configurations, e.g.: running the same benchmark but in several different resolutions.")),(0,r.kt)("h3",{id:"flows--runs"},"Flows & Runs"),(0,r.kt)("p",null,"When Kraken triggers execution of stages, it starts a ",(0,r.kt)("inlineCode",{parentName:"p"},"flow"),". A ",(0,r.kt)("inlineCode",{parentName:"p"},"flow")," begins with the first ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," (or group of ",(0,r.kt)("inlineCode",{parentName:"p"},"stages"),") in the ",(0,r.kt)("inlineCode",{parentName:"p"},"branch"),".\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," that has been triggered and is executing, is called a ",(0,r.kt)("inlineCode",{parentName:"p"},"run"),"."),(0,r.kt)("p",null,"Subsequent ",(0,r.kt)("inlineCode",{parentName:"p"},"runs")," are triggered by one of prior ",(0,r.kt)("inlineCode",{parentName:"p"},"runs"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Runs")," can also be triggered manually."),(0,r.kt)("p",null,"There can be two kinds of flows that are predefined by Kraken (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/philosophy"},"Kraken's Philosophy"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DEV flow")," - it represents ",(0,r.kt)("em",{parentName:"li"},"pre-commit")," activities, for example it can be triggered by developer on demand"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CI flow")," - it represents ",(0,r.kt)("em",{parentName:"li"},"post-commit")," activities, for example it can be triggered by commits to the production source code (master)")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," can dynamically determine in the context of which ",(0,r.kt)("inlineCode",{parentName:"p"},"flow")," it is running - ",(0,r.kt)("inlineCode",{parentName:"p"},"CI")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DEV"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"job")," that is being executed as part of a ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," is called ",(0,r.kt)("inlineCode",{parentName:"p"},"job in\nrun"),". It has an individual execution status. Upon completion, it can\nalso have multiple test results or issues."),(0,r.kt)("p",null,"Similarily, a ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," that is being executed as part of a ",(0,r.kt)("inlineCode",{parentName:"p"},"job in run")," is called ",(0,r.kt)("inlineCode",{parentName:"p"},"step in run"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"job in run")," is executed (multiplied) for each of the ",(0,r.kt)("inlineCode",{parentName:"p"},"environments")," defined in a ",(0,r.kt)("inlineCode",{parentName:"p"},"stage"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Jobs-Steps",src:t(2213).Z})),(0,r.kt)("h3",{id:"example-of-a-workflow-schema"},"Example of a Workflow Schema"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Stage")," is defined in Python-like syntax."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def stage(ctx):\n    return {\n        "parent": "Unit Tests",\n        "triggers": {\n            "parent": True,\n            "cron": "1 * * * *",\n            "interval": "10m",\n            "repository": True,\n            "webhook": True\n        },\n        "parameters": [],\n        "configs": [{\n            "name": "c1",\n            "p1": "1",\n            "p2": "3"\n        }, {\n            "name": "c2",\n            "n3": "33",\n            "t2": "asdf"\n        }],\n        "jobs": [{\n            "name": "make dist",\n            "steps": [{\n                "tool": "git",\n                "checkout": "https://github.com/frankhjung/python-helloworld.git",\n                "branch": "master"\n            }, {\n                "tool": "pytest",\n                "params": "tests/testhelloworld.py",\n                "cwd": "python-helloworld"\n            }],\n            "environments": [{\n                "system": "ubuntu-18.04",\n                "agents_group": "all",\n                "config": "c1"\n            }]\n        }],\n        "notification": {\n            "slack": {"channel": "kk-results"},\n            "email": "godfryd@gmail.com"\n        }\n    }\n')))}u.isMDXComponent=!0},1271:function(e,n,t){"use strict";n.Z=t.p+"assets/images/kraken-branches-ff1cfc375576c71881292e0ae8a6cc7d.png"},2213:function(e,n,t){"use strict";n.Z=t.p+"assets/images/kraken-flows-4e0d747d54136cc22026a7e4ebe6ea23.png"},143:function(e,n,t){"use strict";n.Z=t.p+"assets/images/kraken-jobs-steps-4af264c74c8685cfb91864dd700130b6.png"},3209:function(e,n,t){"use strict";n.Z=t.p+"assets/images/kraken-projects-6eba2e4b9ec14a082451cbae893dadf1.png"},741:function(e,n,t){"use strict";n.Z=t.p+"assets/images/kraken-stages-2c3fd7a9951665b5a6d067915ab2360a.png"}}]);