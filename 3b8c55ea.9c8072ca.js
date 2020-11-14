(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),b=(a(0),a(92)),l={id:"installation",title:"Installation",sidebar_label:"Installation"},o={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"The easiest method for installing Kraken is based on Docker and Docker Compose.",source:"@site/docs/installation.md",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/installation.md",version:"current",sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"Demo",permalink:"/docs/demo"},next:{title:"Entities & Terminology",permalink:"/docs/entities"}},c=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Kraken Download",id:"kraken-download",children:[]},{value:"Kraken Configuration",id:"kraken-configuration",children:[{value:"Configuration of ELK stack",id:"configuration-of-elk-stack",children:[]},{value:"Configuration of PostgreSQL database",id:"configuration-of-postgresql-database",children:[]},{value:"Configuration of Kraken services",id:"configuration-of-kraken-services",children:[]}]},{value:"Kraken Start",id:"kraken-start",children:[]},{value:"Kraken Stop",id:"kraken-stop",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],i={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The easiest method for installing Kraken is based on ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker")," and ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/compose/"}),"Docker Compose"),"."),Object(b.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(b.b)("p",null,"There are several things that are required to run Kraken. In short:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Linux-based operating system"),Object(b.b)("li",{parentName:"ul"},"Docker Engine and Docker Compose")),Object(b.b)("p",null,"The operating system must be ",Object(b.b)("strong",{parentName:"p"},"Linux based"),". Kraken was tested on ",Object(b.b)("strong",{parentName:"p"},"Ubuntu 20.04"),"\nbut other distributions should be ok."),Object(b.b)("p",null,"The next thing is Docker. ",Object(b.b)("strong",{parentName:"p"},"Docker Compose")," is used to spawn all the Kraken services.\nThese services are described in ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/architecture"}),"Architecture chapter"),"."),Object(b.b)("h2",{id:"kraken-download"},"Kraken Download"),Object(b.b)("p",null,"Kraken installation artifacts can be downloaded from ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Kraken-CI/kraken/releases"}),"Kraken GitHub releases page"),".\nThere are:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"kraken-docker-compose-X.Y.yaml")," - a services configuration file for Docker Compose"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"dot-X.Y.env")," - an example configuration for Kraken services that is used by Docker Compose file")),Object(b.b)("p",null,"Docker Compose file is using pre-built Kraken container images. On first run, it will download and install Kraken image and all required dependencies."),Object(b.b)("p",null,"Download these 2 files to your local machine that will host Kraken services. Put them in the same folder.\nRename ",Object(b.b)("inlineCode",{parentName:"p"},"dot-X.Y.env")," to ",Object(b.b)("inlineCode",{parentName:"p"},".env")," - this is the only way to make it visible to ",Object(b.b)("inlineCode",{parentName:"p"},"docker-compose"),"."),Object(b.b)("h2",{id:"kraken-configuration"},"Kraken Configuration"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},".env")," file contains Kraken basic configuration that is required to start Kraken services.\nDefault content of this file looks as follows:"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/Kraken-CI/kraken/master/.env",alt:"File"}))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"ELASTIC_PASSWORD=changeme\n\nPOSTGRES_USER=kraken\nPOSTGRES_PASSWORD=kk123\nPOSTGRES_DB=kraken\n\nKRAKEN_REDIS_ADDR=redis\nKRAKEN_DB_URL=postgresql://kraken:kk123@postgres:5432/kraken\nKRAKEN_LOGSTASH_PORT=5959\nKRAKEN_LOGSTASH_ADDR=logstash:5959\nKRAKEN_ELASTICSEARCH_PORT=9200\nKRAKEN_ELASTICSEARCH_URL=http://elastic:changeme@elasticsearch:9200\nKRAKEN_SERVER_PORT=6000\nKRAKEN_SERVER_ADDR=server:6000\nKRAKEN_PLANNER_URL=http://controller:7997/\nKRAKEN_STORAGE_ADDR=controller:2121\nKRAKEN_STORAGE_DIR=/var/kraken_storage\nKRAKEN_UI_PUBLIC_PORT=8080\n")),Object(b.b)("h3",{id:"configuration-of-elk-stack"},"Configuration of ELK stack"),Object(b.b)("p",null,"These parameters are used when ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.elastic.co/"}),"ELK stack")," is run\ninternally in Docker together with Kraken services from the same Docker\nCompose file. It is possible to set up ELK externally to Kraken\nservices on another machine."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description / Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ELASTIC_PASSWORD")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password used to access ELK stack",Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"changeme"))))),Object(b.b)("h3",{id:"configuration-of-postgresql-database"},"Configuration of PostgreSQL database"),Object(b.b)("p",null,"These parameters are used when ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org/"}),"PostgreSQL")," is run internally in Docker together with\nKraken services from the same Docker Compose file. It is possible to\nset up PostgreSQL externally to Kraken services on another machine."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description / Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"POSTGRES_USER")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User name used to access PostgreSQL database",Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"kraken"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"POSTGRES_PASSWORD")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password used to access PostgreSQL database",Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"kk123"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"POSTGRES_DB")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the Kraken's PostgreSQL database",Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"kraken"))))),Object(b.b)("h3",{id:"configuration-of-kraken-services"},"Configuration of Kraken services"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description / Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_REDIS_ADDR")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Location of Redis in ",Object(b.b)("em",{parentName:"td"},"address:port")," form",Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"redis"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_DB_URL")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL of the Kraken's PostgreSQL database",Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"postgresql://kraken:kk123@postgres:5432/kraken"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_LOGSTASH_PORT")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Port of ELK Logstash, should be the same as in ",Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_LOGSTASH_ADDR"),Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"5959"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_LOGSTASH_ADDR")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Location of ELK Logstash in ",Object(b.b)("em",{parentName:"td"},"address:port")," form",Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"logstash:5959"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_ELASTICSEARCH_PORT")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Port of ELK Elasticsearch, should be the same as in ",Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_ELASTICSEARCH_URL"),Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"9200"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_ELASTICSEARCH_URL")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL of ELK Elasticsearch",Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"http://elastic:changeme@elasticsearch:9200"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_SERVER_PORT")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Port of Kraken API Server, should be the same as in ",Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_SERVER_ADDR"),Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"6000"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_SERVER_ADDR")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Location of Kraken API server in ",Object(b.b)("em",{parentName:"td"},"address:port")," form",Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"server:6000"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_PLANNER_URL")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL of Kraken Planner",Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"http://controller:7997/"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_STORAGE_ADDR")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Location of Kraken Storage in ",Object(b.b)("em",{parentName:"td"},"address:port")," form",Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"controller:2121"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_STORAGE_DIR")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Location of directory for storing artifacts, used by Kraken Storage",Object(b.b)("br",null),"Default: ",Object(b.b)("inlineCode",{parentName:"td"},"/var/kraken_storage"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"KRAKEN_UI_PUBLIC_PORT")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Public port of Kraken's web UI")))),Object(b.b)("p",null,"Most of these variables do not have to be altered. By default all\nservices are defined in one Docker Compose file and they communicate\nwith each other internally. Still, it is possible to divide these\nservices into a few groups and host them on separate machines. This\nallows for handling bigger load by Kraken. The most common approach for\ndividing services is putting PostgreSQL database and ELK stack on\nseparate machines. Going further it is possible to setup Kraken API Server\non a separate machine and even put several instances of them to handle\nand load-balance huge load of API requests."),Object(b.b)("h2",{id:"kraken-start"},"Kraken Start"),Object(b.b)("p",null,"After downloading Docker Compose and .env files and tweaking them if needed,\nKraken services can be started by:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"$ docker-compose -f kraken-docker-compose-X.Y.yaml up -d\n")),Object(b.b)("p",null,"where:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"-f")," indicates Docker Compose file"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"up")," spins up all Kraken services"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"-d")," runs Docker Compose in detached mode i.e. in background")),Object(b.b)("p",null,"Check if all started correctly:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"docker-compose -f kraken-docker-compose-X.Y.yaml ps\n")),Object(b.b)("p",null,"If all is ok then now it is possible to check Kraken web page: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:8080"}),"http://localhost:8080")),Object(b.b)("h2",{id:"kraken-stop"},"Kraken Stop"),Object(b.b)("p",null,"Kraken services can be stopped with a command:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"$ docker-compose -f kraken-docker-compose-X.Y.yaml down\n")),Object(b.b)("p",null,"In case the services can't be gracefully stopped or need to be shut down immediately,\nthey can be killed with a command:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"$ docker-compose -f kraken-docker-compose-X.Y.yaml kill\n")),Object(b.b)("h2",{id:"next-steps"},"Next Steps"),Object(b.b)("p",null,"Now there are s everal steps that can be done:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"learn more about Kraken concepts: read ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"entities"}),"Entities & Terminology")," and ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"architecture"}),"Architecture")," chapters"),Object(b.b)("li",{parentName:"ul"},"start using Kraken by creating new project, branches, etc: see ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"proj-branches"}),"Usage chapters")),Object(b.b)("li",{parentName:"ul"},"install new agents: visit ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"agents"}),"Agents")," chapter in Administraction category")))}s.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(a),O=n,m=p["".concat(l,".").concat(O)]||p[O]||d[O]||b;return a?r.a.createElement(m,o(o({ref:t},i),{},{components:a})):r.a.createElement(m,o({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=O;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<b;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);