"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[3872],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),k=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=k(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=k(n),c=r,m=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var k=2;k<o;k++)l[k]=n[k];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2883:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return k},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(4137)),l=["components"],i={id:"install-docker-compose",title:"Docker Compose"},s=void 0,k={unversionedId:"install-docker-compose",id:"install-docker-compose",title:"Docker Compose",description:"The easiest method for installing Kraken is based on Docker and Docker Compose.",source:"@site/docs/install-docker-compose.mdx",sourceDirName:".",slug:"/install-docker-compose",permalink:"/docs/install-docker-compose",draft:!1,editUrl:"https://github.com/kraken-ci/website/edit/master/docs/install-docker-compose.mdx",tags:[],version:"current",frontMatter:{id:"install-docker-compose",title:"Docker Compose"},sidebar:"someSidebar",previous:{title:"Demo",permalink:"/docs/demo"},next:{title:"Helm and Kubernetes",permalink:"/docs/install-helm"}},p={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Kraken Download",id:"kraken-download",level:2},{value:"Kraken Configuration",id:"kraken-configuration",level:2},{value:"Configuration of ClickHouse",id:"configuration-of-clickhouse",level:3},{value:"Configuration of Minio",id:"configuration-of-minio",level:3},{value:"Configuration of PostgreSQL database",id:"configuration-of-postgresql-database",level:3},{value:"Configuration of Kraken services",id:"configuration-of-kraken-services",level:3},{value:"Kraken Start",id:"kraken-start",level:2},{value:"Kraken Stop",id:"kraken-stop",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The easiest method for installing Kraken is based on ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose"),"."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"There are several things that are required to run Kraken. In short:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Linux-based operating system"),(0,o.kt)("li",{parentName:"ul"},"Docker Engine and Docker Compose")),(0,o.kt)("p",null,"The operating system must be ",(0,o.kt)("strong",{parentName:"p"},"Linux based"),". Kraken was tested on ",(0,o.kt)("strong",{parentName:"p"},"Ubuntu 20.04"),"\nbut other distributions should be ok."),(0,o.kt)("p",null,"The next thing is Docker. ",(0,o.kt)("strong",{parentName:"p"},"Docker Compose")," is used to spawn all the Kraken services.\nThese services are described in ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture"},"Architecture chapter"),"."),(0,o.kt)("h2",{id:"kraken-download"},"Kraken Download"),(0,o.kt)("p",null,"Kraken installation artifacts can be downloaded from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases"},"Kraken GitHub releases page"),".\nThere are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kraken-docker-compose-X.Y.yaml")," - a services configuration file for Docker Compose"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kraken-X.Y.env")," - an example configuration for Kraken services that is used by Docker Compose file")),(0,o.kt)("p",null,"Docker Compose file is using pre-built Kraken container images. On first run, it will download and install Kraken image and all required dependencies."),(0,o.kt)("p",null,"Download these 2 files to your local machine that will host Kraken services. Put them in the same folder."),(0,o.kt)("h2",{id:"kraken-configuration"},"Kraken Configuration"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"kraken-X.Y.env")," file contains Kraken basic configuration that is required to start Kraken services.\nDefault content of this file looks as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Kraken-CI/kraken/master/dot.env",alt:"File"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POSTGRES_USER=kraken\nPOSTGRES_PASSWORD=kk123\nPOSTGRES_DB=kraken\n\nMINIO_ACCESS_KEY=UFSEHRCFU4ACUEWHCHWU\nMINIO_SECRET_KEY=HICSHuhIIUhiuhMIUHIUhGFfUHugy6fGJuyyfiGY\n\nKRAKEN_REDIS_ADDR=redis\nKRAKEN_DB_URL=postgresql://kraken:kk123@postgres:5432/kraken\nKRAKEN_CLICKHOUSE_PORT=9001\nKRAKEN_CLICKHOUSE_ADDR=clickhouse-proxy:9001\nKRAKEN_CLICKHOUSE_URL=http://clickhouse:8123/\nKRAKEN_SERVER_PORT=6000\nKRAKEN_SERVER_ADDR=server:6000\nKRAKEN_PLANNER_URL=http://controller:7997/\nKRAKEN_UI_PUBLIC_PORT=8080\nKRAKEN_MINIO_PORT=9999\nKRAKEN_MINIO_ADDR=minio:9999\n")),(0,o.kt)("h3",{id:"configuration-of-clickhouse"},"Configuration of ClickHouse"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.tech/"},"ClickHouse")," is used to store logs from all\nKraken services and from jobs execution."),(0,o.kt)("p",null,"These parameters are used when ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.tech/"},"ClickHouse"),"\nis run internally in Docker together with Kraken services from the\nsame Docker Compose file. It is possible to set up ClickHouse\nexternally to Kraken services on another machine."),(0,o.kt)("p",null,"No specific configuration."),(0,o.kt)("h3",{id:"configuration-of-minio"},"Configuration of Minio"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://min.io/"},"MinIO")," is object storage database with API\ncompatible with AWS S3.  It is used in Kraken to store build\nartifacts, cache files and Git repositories bundles."),(0,o.kt)("p",null,"These parameters are used when ",(0,o.kt)("a",{parentName:"p",href:"https://min.io/"},"MinIO")," is run\ninternally in Docker together with Kraken services from the same\nDocker Compose file. It is possible to set up MinIO externally to\nKraken services on another machine."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description / Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"MINIO_ACCESS_KEY")),(0,o.kt)("td",{parentName:"tr",align:null},"Access key to MinIO",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"UFSEHRCFU4ACUEWHCHWU"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"MINIO_SECRET_KEY")),(0,o.kt)("td",{parentName:"tr",align:null},"Secret key to MinIO",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"HICSHuhIIUhiuhMIUHIUhGFfUHugy6fGJuyyfiGY"))))),(0,o.kt)("h3",{id:"configuration-of-postgresql-database"},"Configuration of PostgreSQL database"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," is used to store all\nrelational data of Kraken, mainly related to jobs planning, execution\nand reporting."),(0,o.kt)("p",null,"These parameters are used\nwhen ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," is run internally in\nDocker together with Kraken services from the same Docker Compose\nfile. It is possible to set up PostgreSQL externally to Kraken\nservices on another machine."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description / Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"POSTGRES_USER")),(0,o.kt)("td",{parentName:"tr",align:null},"User name used to access PostgreSQL database",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"kraken"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"POSTGRES_PASSWORD")),(0,o.kt)("td",{parentName:"tr",align:null},"Password used to access PostgreSQL database",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"kk123"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"POSTGRES_DB")),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the Kraken's PostgreSQL database",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"kraken"))))),(0,o.kt)("h3",{id:"configuration-of-kraken-services"},"Configuration of Kraken services"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description / Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KRAKEN_REDIS_ADDR")),(0,o.kt)("td",{parentName:"tr",align:null},"Location of Redis in ",(0,o.kt)("em",{parentName:"td"},"address:port")," form",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"redis"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KRAKEN_DB_URL")),(0,o.kt)("td",{parentName:"tr",align:null},"URL of the Kraken's PostgreSQL database",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"postgresql://kraken:kk123@postgres:5432/kraken"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KRAKEN_CLICKHOUSE_PORT")),(0,o.kt)("td",{parentName:"tr",align:null},"Port of ClickHouse Proxy for collection logs, should be the same as in ",(0,o.kt)("inlineCode",{parentName:"td"},"KRAKEN_CLICKHOUSE_ADDR")," ",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"9001"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KRAKEN_CLICKHOUSE_ADDR")),(0,o.kt)("td",{parentName:"tr",align:null},"Location of ClickHouse Proxy ",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"clickhouse-proxy:9001"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KRAKEN_CLICKHOUSE_URL")),(0,o.kt)("td",{parentName:"tr",align:null},"URL to ClickHouse, it is used to query ClickHouse database ",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"http://clickhouse:8123/"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KRAKEN_SERVER_PORT")),(0,o.kt)("td",{parentName:"tr",align:null},"Port of Kraken API Server, should be the same as in ",(0,o.kt)("inlineCode",{parentName:"td"},"KRAKEN_SERVER_ADDR"),(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"6000"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KRAKEN_SERVER_ADDR")),(0,o.kt)("td",{parentName:"tr",align:null},"Location of Kraken API server in ",(0,o.kt)("em",{parentName:"td"},"address:port")," form",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"server:6000"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KRAKEN_PLANNER_URL")),(0,o.kt)("td",{parentName:"tr",align:null},"URL of Kraken Planner",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"http://controller:7997/"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KRAKEN_UI_PUBLIC_PORT")),(0,o.kt)("td",{parentName:"tr",align:null},"Public port of Kraken's web UI that is exposed to users. ",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"8080"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KRAKEN_MINIO_PORT ")),(0,o.kt)("td",{parentName:"tr",align:null},"Port of MinIO, should be the same as in ",(0,o.kt)("inlineCode",{parentName:"td"},"KRAKEN_MINIO_ADDR"),". ",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"9999"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KRAKEN_MINIO_ADDR")),(0,o.kt)("td",{parentName:"tr",align:null},"Location of MinIO in ",(0,o.kt)("em",{parentName:"td"},"address:port")," form",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"minio:9999"))))),(0,o.kt)("p",null,"Most of these variables do not have to be altered. By default all\nservices are defined in one Docker Compose file and they communicate\nwith each other internally. Still, it is possible to divide these\nservices into a few groups and host them on separate machines. This\nallows for handling bigger load by Kraken. The most common approach\nfor dividing services is putting PostgreSQL database, ClickHouse\ndatabase and MinIO on separate machines. Going further it is possible\nto setup Kraken API Server on a separate machine and even put several\ninstances of them to handle and load-balance huge load of API\nrequests."),(0,o.kt)("h2",{id:"kraken-start"},"Kraken Start"),(0,o.kt)("p",null,"After downloading Docker Compose and .env files and tweaking them if needed,\nKraken services can be started by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker-compose --env-file kraken-X.Y.env -f kraken-docker-compose-X.Y.yaml up -d\n")),(0,o.kt)("p",null,"where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"-f")," indicates Docker Compose file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"up")," spins up all Kraken services"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"-d")," runs Docker Compose in detached mode i.e. in background")),(0,o.kt)("p",null,"Check if all started correctly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker-compose -f kraken-docker-compose-X.Y.yaml ps\n")),(0,o.kt)("p",null,"If all is ok then now it is possible to check Kraken web page: ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")),(0,o.kt)("p",null,"There are two built-in users: ",(0,o.kt)("inlineCode",{parentName:"p"},"demo"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"demo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,o.kt)("h2",{id:"kraken-stop"},"Kraken Stop"),(0,o.kt)("p",null,"Kraken services can be stopped with a command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker-compose -f kraken-docker-compose-X.Y.yaml down\n")),(0,o.kt)("p",null,"In case the services can't be gracefully stopped or need to be shut down immediately,\nthey can be killed with a command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker-compose -f kraken-docker-compose-X.Y.yaml kill\n")),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Now there are s everal steps that can be done:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"learn more about Kraken concepts: read ",(0,o.kt)("a",{parentName:"li",href:"/docs/entities"},"Entities & Terminology")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/architecture"},"Architecture")," chapters"),(0,o.kt)("li",{parentName:"ul"},"start using Kraken by creating new project, branches, etc: see ",(0,o.kt)("a",{parentName:"li",href:"/docs/proj-branches"},"Usage chapters")),(0,o.kt)("li",{parentName:"ul"},"install new agents: visit ",(0,o.kt)("a",{parentName:"li",href:"/docs/agents"},"Agents")," chapter in Administraction category")))}c.isMDXComponent=!0}}]);