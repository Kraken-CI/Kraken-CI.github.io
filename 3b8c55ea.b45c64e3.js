(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=(a(0),a(86)),i={id:"installation",title:"Installation",sidebar_label:"Installation"},s={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"The easiest method for installing Kraken is based on Docker and Docker Compose.",source:"@site/docs/installation.md",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/installation.md",version:"current",sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"Demo",permalink:"/docs/demo"},next:{title:"Entities & Terminology",permalink:"/docs/entities"}},l=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Kraken Download",id:"kraken-download",children:[]},{value:"Kraken Configuration",id:"kraken-configuration",children:[{value:"Configuration for ELK stack",id:"configuration-for-elk-stack",children:[]},{value:"Configuration for PostgreSQL database",id:"configuration-for-postgresql-database",children:[]},{value:"Configuration for Kraken services",id:"configuration-for-kraken-services",children:[]}]},{value:"Kraken Start",id:"kraken-start",children:[]}],c={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The easiest method for installing Kraken is based on Docker and Docker Compose."),Object(o.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(o.b)("p",null,"There are several things that are required to run Kraken. In short:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Linux-based operating system"),Object(o.b)("li",{parentName:"ul"},"Docker Engine and Docker Compose")),Object(o.b)("p",null,"The operating system must be ",Object(o.b)("strong",{parentName:"p"},"Linux based"),". Kraken was tested on ",Object(o.b)("strong",{parentName:"p"},"Ubuntu 20.04"),"\nbut other distributions should be ok."),Object(o.b)("p",null,"The next thing is Docker. ",Object(o.b)("strong",{parentName:"p"},"Docker Compose")," is used to spawn all the Kraken services.\nThey are described in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/architecture"}),"Architecture chapter"),"."),Object(o.b)("h2",{id:"kraken-download"},"Kraken Download"),Object(o.b)("p",null,"Kraken installation artifacts can be downloaded from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Kraken-CI/kraken/releases"}),"Kraken GitHub releases page"),".\nThere are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"kraken-docker-compose-X.Y.yaml")," - a services configuration file for Docker Compose"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},".env")," - an example configuration for Kraken services that is used by Docker Compose file")),Object(o.b)("p",null,"Docker Compose file is using pre-built Kraken container images."),Object(o.b)("p",null,"Download these 2 files to your local machine that will host Kraken services. Put them in the same folder."),Object(o.b)("h2",{id:"kraken-configuration"},"Kraken Configuration"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},".env")," file contains Kraken basic configuration that is required to start Kraken services.\nDefault content of this file looks as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"ELASTIC_PASSWORD=changeme\n\nPOSTGRES_USER=kraken\nPOSTGRES_PASSWORD=kk123\nPOSTGRES_DB=kraken\n\nKRAKEN_REDIS_ADDR=redis\nKRAKEN_DB_URL=postgresql://kraken:kk123@postgres:5432/kraken\nKRAKEN_LOGSTASH_PORT=5959\nKRAKEN_LOGSTASH_ADDR=logstash:5959\nKRAKEN_ELASTICSEARCH_PORT=9200\nKRAKEN_ELASTICSEARCH_URL=http://elastic:changeme@elasticsearch:9200\nKRAKEN_SERVER_PORT=6000\nKRAKEN_SERVER_ADDR=server:6000\nKRAKEN_PLANNER_URL=http://controller:7997/\nKRAKEN_STORAGE_ADDR=controller:2121\nKRAKEN_STORAGE_DIR=/var/kraken_storage\n")),Object(o.b)("h3",{id:"configuration-for-elk-stack"},"Configuration for ELK stack"),Object(o.b)("p",null,"This is used when ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.elastic.co/"}),"ELK stack")," is run\ninternally in Docker together with Kraken services from the same Docker\nCompose file. It is possible to set up ELK externally to Kraken\nservices on another machine."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ELASTIC_PASSWORD - defines a password that is used to access ELK stack")),Object(o.b)("h3",{id:"configuration-for-postgresql-database"},"Configuration for PostgreSQL database"),Object(o.b)("p",null,"This is used when PostgreSQL is run internally in Docker together with\nKraken services from the same Docker Compose file. It is possible to\nset up ELK externally to Kraken services on another machine."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"POSTGRES_USER - defines a user that is used to access PostgreSQL database"),Object(o.b)("li",{parentName:"ul"},"POSTGRES_PASSWORD - defines a user that is used to access PostgreSQL database"),Object(o.b)("li",{parentName:"ul"},"POSTGRES_DB - defines a user that is used to access PostgreSQL database")),Object(o.b)("h3",{id:"configuration-for-kraken-services"},"Configuration for Kraken services"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"KRAKEN","_","REDIS","_","ADDR - location of Redis in ",Object(o.b)("em",{parentName:"li"},"address:port")," form"),Object(o.b)("li",{parentName:"ul"},"KRAKEN","_","DB","_","URL - location of PostgreSQL database in URL form ie. ",Object(o.b)("inlineCode",{parentName:"li"},"postgresql://<user>:<password>@<address>:<port>/<db-name>")," e.g.: ",Object(o.b)("inlineCode",{parentName:"li"},"postgresql://kraken:kk123@postgres:5432/kraken")),Object(o.b)("li",{parentName:"ul"},"KRAKEN","_","LOGSTASH","_","ADDR - location of ELK Logstash in ",Object(o.b)("em",{parentName:"li"},"address:port")," form"),Object(o.b)("li",{parentName:"ul"},"KRAKEN","_","LOGSTASH","_","PORT - port to ELK Logstash, should be the same as in ",Object(o.b)("inlineCode",{parentName:"li"},"KRAKEN_LOGSTASH_ADDR")),Object(o.b)("li",{parentName:"ul"},"KRAKEN","_","ELASTICSEARCH","_","URL - location of ELK Elasticsearch in URL form, e.g.: ",Object(o.b)("inlineCode",{parentName:"li"},"http://elastic:changeme@elasticsearch:9200")),Object(o.b)("li",{parentName:"ul"},"KRAKEN","_","ELASTICSEARCH","_","PORT - port to ELK Elasticsearch, should be the same as in ",Object(o.b)("inlineCode",{parentName:"li"},"KRAKEN_ELASTICSEARCH_URL")),Object(o.b)("li",{parentName:"ul"},"KRAKEN","_","SERVER","_","ADDR - location of Kraken API server in ",Object(o.b)("em",{parentName:"li"},"address:port")," form, it is used by other Kraken services"),Object(o.b)("li",{parentName:"ul"},"KRAKEN","_","SERVER","_","PORT - port to Kraken API Server, should be the same as in ",Object(o.b)("inlineCode",{parentName:"li"},"KRAKEN_SERVER_ADDR")),Object(o.b)("li",{parentName:"ul"},"KRAKEN","_","PLANNER","_","URL - location of Kraken Planner in URL form, it is used by other Kraken services, e.g.: ",Object(o.b)("inlineCode",{parentName:"li"},"http://controller:7997/")),Object(o.b)("li",{parentName:"ul"},"KRAKEN","_","STORAGE","_","ADDR - location of Kraken Storage in ",Object(o.b)("em",{parentName:"li"},"address:port")," form, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"controller:2121")),Object(o.b)("li",{parentName:"ul"},"KRAKEN","_","STORAGE","_","DIR - location of directory for storing artifacts, used by Kraken Storage, e.g.: ",Object(o.b)("inlineCode",{parentName:"li"},"/var/kraken_storage"))),Object(o.b)("p",null,"Most of these variables do not have to be altered. By default all\nservices are defined in one Docker Compose file and they communicate\nwith each other internally. Still, it is possible to divide these\nservices into a few groups and host them on separate machines. This\nallows handling bigger load by Kraken. The most common approach for\ndividing services is putting on separate machine PostgreSQL database\nand ELK stack. Going further it is possible to setup Kraken API Server\non separate machine and even put several instances of them to handle\nand load balance huge load of API requests."),Object(o.b)("h2",{id:"kraken-start"},"Kraken Start"),Object(o.b)("p",null,"So after downloading Docker Compose file and .env file, and doing some tweaks in these file if needed,\none can start Kraken services:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"$ docker-compose -f kraken-docker-compose-X.Y.yaml up -d\n")),Object(o.b)("p",null,"where:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"-f")," indicates Docker Compose file"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"up")," spins up all Kraken services"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"-d")," runs Docker Compose in detached mode i.e. in background")),Object(o.b)("p",null,"Check if all started correctly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"docker-compose -f kraken-docker-compose-X.Y.yaml ps\n")),Object(o.b)("p",null,"If all is ok then now it is possible to check Kraken web page: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:8080"}),"http://localhost:8080")))}b.isMDXComponent=!0}}]);