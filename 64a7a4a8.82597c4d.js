(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var l=n(2),a=n(6),i=(n(0),n(90)),r={id:"schema",title:"Schema"},c={unversionedId:"schema",id:"schema",isDocsHomePage:!1,title:"Schema",description:"Overview",source:"@site/docs/schema.md",slug:"/schema",permalink:"/docs/schema",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/schema.md",version:"current",sidebar:"someSidebar",previous:{title:"Projects and Branches",permalink:"/docs/proj-branches"},next:{title:"Docker Executor",permalink:"/docs/docker-executor"}},b=[{value:"Overview",id:"overview",children:[]},{value:"Schema Elements",id:"schema-elements",children:[{value:"Step",id:"step",children:[]},{value:"Built-in Step Tools",id:"built-in-step-tools",children:[]}]}],o={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(l.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Stage have a schema that defines what should be done. Schema generally defines jobs for execution,\nexecution environment, triggers that start the execution of whole schema, optional parameters\nand execution configuration."),Object(i.b)("h2",{id:"schema-elements"},"Schema Elements"),Object(i.b)("p",null,"There are defined several things in the schema:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"parent")," stage"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"triggers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"parameters")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"configs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"jobs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"notification")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timeout"))),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-json"}),'        "parent": "root",\n        "triggers": {\n            "parent": True\n        },\n        "parameters": [],\n        "configs": [],\n        "jobs": [{\n            "name": "hello",\n            "steps": [{\n                "tool": "shell",\n                "cmd": "echo \'Hello World\'"\n            }],\n            "environments": [{\n                "system": "centos-7",\n                "agents_group": "all",\n                "config": "default"\n            }]\n        }]\n')),Object(i.b)("h3",{id:"step"},"Step"),Object(i.b)("p",null,"Common step fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tool")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cwd")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timeout")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"attempts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sleep_time_after_attempt"))),Object(i.b)("h3",{id:"built-in-step-tools"},"Built-in Step Tools"),Object(i.b)("h4",{id:"shell"},"Shell"),Object(i.b)("p",null,"Fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cmd")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timeout")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"user")," - by default kraken ",Object(i.b)("inlineCode",{parentName:"li"},"user")," is used, this field allows changing user e.g. to ",Object(i.b)("inlineCode",{parentName:"li"},"root"))),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-python"}),'   "steps": [{\n       "tool": "shell",\n       "cmd": "echo \'Hello World\'"\n   }]\n')),Object(i.b)("h4",{id:"git"},"Git"),Object(i.b)("p",null,"Fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"checkout")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"destination")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ssh-key")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"access-token"))),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-python"}),'   "steps": [{\n       "tool": "git",\n       "checkout": "https://github.com/Kraken-CI/kraken.git",\n       "branch": "master"\n   }]\n')),Object(i.b)("h4",{id:"artifacts"},"Artifacts"),Object(i.b)("p",null,"Fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"action")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"public")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"source")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"destination"))),Object(i.b)("h4",{id:"pylint"},"PyLint"),Object(i.b)("p",null,"Fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rcfile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"modules_or_packages"))),Object(i.b)("h4",{id:"pytest"},"PyTest"),Object(i.b)("p",null,"Fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"params"))),Object(i.b)("h4",{id:"nglint"},"NgLint"),Object(i.b)("p",null,"No specific fields."),Object(i.b)("h4",{id:"cloc"},"Cloc"),Object(i.b)("p",null,"Fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"not-match-f")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"exclude-dir"))),Object(i.b)("h4",{id:"rndtest"},"RndTest"),Object(i.b)("p",null,"Fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"count"))))}p.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var l=n(0),a=n.n(l);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),m=l,O=u["".concat(r,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(O,c(c({ref:t},o),{},{components:n})):a.a.createElement(O,c({ref:t},o))}));function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var o=2;o<i;o++)r[o]=n[o];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);