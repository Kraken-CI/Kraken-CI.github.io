"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[7942],{6640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var s=t(4848),r=t(8453),a=t(9489),i=t(7227),o=t(4074);const l={id:"agents",title:"Agents"},c=void 0,d={id:"agents",title:"Agents",description:"Agent is a part of Kraken system. The place of agents in Kraken is",source:"@site/docs/agents.mdx",sourceDirName:".",slug:"/agents",permalink:"/docs/agents",draft:!1,unlisted:!1,editUrl:"https://github.com/kraken-ci/website/edit/master/docs/agents.mdx",tags:[],version:"current",frontMatter:{id:"agents",title:"Agents"},sidebar:"someSidebar",previous:{title:"RobotFramework",permalink:"/docs/tf-robotframework"},next:{title:"Users",permalink:"/docs/users"}},h={},u=[{value:"Browsing Agents",id:"browsing-agents",level:2},{value:"Agents Groups",id:"agents-groups",level:2},{value:"Discovered Agents",id:"discovered-agents",level:2},{value:"Setting up a New Agent",id:"setting-up-a-new-agent",level:2},{value:"Network Connections",id:"network-connections",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing by a Script",id:"installing-by-a-script",level:3},{value:"Starting in Docker Container",id:"starting-in-docker-container",level:3},{value:"Starting in Docker Compose from QuickStart",id:"starting-in-docker-compose-from-quickstart",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Agent is a part of Kraken system. The place of agents in Kraken is\nvisualized in ",(0,s.jsx)(n.a,{href:"/docs/architecture",children:"Architecture chapter"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Agent is a piece of software that is installed on separate system.\nIt connects to Kraken server, gets jobs to execution and executes\nthem. A job can be executed in several ways. It depends on selected\nexecutor indicated in job definition. A job may be executed:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"locally on current host system,"}),"\n",(0,s.jsx)(n.li,{children:"inside Docker container,"}),"\n",(0,s.jsx)(n.li,{children:"inside LXD container."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"browsing-agents",children:"Browsing Agents"}),"\n",(0,s.jsxs)(n.p,{children:["In the top bar of UI, on right side, there is an ",(0,s.jsx)(n.code,{children:"Agents"})," menu.\nIt can be used to find and manage agents."]}),"\n",(0,s.jsxs)(n.p,{children:["The first position, ",(0,s.jsx)(n.code,{children:"Agents"}),", allows for browsing active agents that\ncan execute jobs. The table of agents shows their address, the current\nsystem where they are running, whether they are running on a\nbare-metal host or in a Docker container, the capabilities of the host\nsystem, and the currently running job, etc."]}),"\n",(0,s.jsx)(o.A,{img:"screen-agents.png"}),"\n",(0,s.jsxs)(n.p,{children:["Clicking on the agent address leads to the agent page, which displays\nthe details of the agent. Here, it is also possible to assign an agent\nto ",(0,s.jsx)(n.code,{children:"Agent Groups"}),". These groups are used in job definitions in the\nworkflow schema to indicate which group an agent should be selected\nfrom to execute the specified job."]}),"\n",(0,s.jsx)(n.h2,{id:"agents-groups",children:"Agents Groups"}),"\n",(0,s.jsxs)(n.p,{children:["The next menu option, ",(0,s.jsx)(n.code,{children:"Groups"}),", allows for organizing agents into\ngroups. Grouping can be done arbitrarily and managed manually by an\nadministrator. This can be based on hardware features, host system\ncapabilities, and so on."]}),"\n",(0,s.jsx)(n.h2,{id:"discovered-agents",children:"Discovered Agents"}),"\n",(0,s.jsxs)(n.p,{children:["The last menu option, ",(0,s.jsx)(n.code,{children:"Discovered"}),", shows a list of agents that have\ntried to connect to the Kraken server but are not authorized to do\nso. Here, we can find newly set up agents and authorize them. Once\nauthorized, these agents can execute jobs, but it is recommended to\nassign them to the appropriate groups first."]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-a-new-agent",children:"Setting up a New Agent"}),"\n",(0,s.jsx)(n.p,{children:"There are several methods for setting up a new Kraken Agent. It can be\ninstalled on a host system using an installation script. It can be\nstarted as a Docker container. It is also possible to copy agent\nbinaries and set it up manually."}),"\n",(0,s.jsx)(n.h3,{id:"network-connections",children:"Network Connections"}),"\n",(0,s.jsxs)(n.p,{children:["While setting up a new agent, network connections need to be\nconsidered. The Kraken Agent needs to have connections to several\nservices, which are outlined in the ",(0,s.jsx)(n.a,{href:"/docs/architecture",children:"Architecture\nchapter"}),". The required services include ",(0,s.jsx)(n.code,{children:"Kraken Server"}),", ",(0,s.jsx)(n.code,{children:"MinIO"}),", and ",(0,s.jsx)(n.code,{children:"ClickHouse"}),"."]}),"\n",(0,s.jsx)(o.A,{img:"agent-connections.png"}),"\n",(0,s.jsxs)(n.p,{children:["The address of the server must be passed to the agent binary using the\n",(0,s.jsx)(n.code,{children:"-s"})," switch or via the ",(0,s.jsx)(n.code,{children:"KRAKEN_SERVER_ADDR"})," environment variable. This\nis handled by the installation script or is already embedded into the\nDocker image with Kraken Agent."]}),"\n",(0,s.jsxs)(n.p,{children:["In that moment, the addresses of MinIO and ClickHouse should be\nacquired from the server. Unfortunately, if the Kraken Server is\nstarted by Docker Compose, then the addresses of these services are\ninternal, i.e., from a subnet that was created by Docker Compose. The\nservices are published to the host using defined ports in the Docker\nCompose YAML configuration file. Therefore, when the Kraken Agent is\nstarted externally, the addresses for MinIO and ClickHouse need to be\nprovided manually. This can be done by defining environment variables:\n",(0,s.jsx)(n.code,{children:"KRAKEN_CLICKHOUSE_ADDR"})," and ",(0,s.jsx)(n.code,{children:"KRAKEN_MINIO_ADDR"}),". More details about\nsetting them are provided in the next sections."]}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before installing the Kraken Agent, the system needs to be\nprepared. Actually, there are two dependencies that need to be\ninstalled:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.python.org/",children:"Python"}),", at least version 3.8"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://git-scm.com/",children:"Git"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once these dependencies are installed, we can proceed to install the\nKraken Agent."}),"\n",(0,s.jsx)(n.h3,{id:"installing-by-a-script",children:"Installing by a Script"}),"\n",(0,s.jsx)(n.p,{children:"This method relies on an installation script that is hosted on the\nKraken server."}),"\n",(0,s.jsx)(n.p,{children:"Make sure that in the Kraken Web UI, on the Kraken -> Settings page,\nthere is a URL to the Kraken Server set. Please copy and paste the URL\nfrom the web browser into this field."}),"\n",(0,s.jsx)(n.p,{children:"So now, a new agent can be installed. It involves downloading an agent\ninstaller and running it. That's all."}),"\n",(0,s.jsxs)(n.p,{children:["The installation script can be downloaded from the Kraken Web UI ->\nAgents -> Downloads menu option. There are two options: ",(0,s.jsx)(n.code,{children:"For Linux"}),"\nand ",(0,s.jsx)(n.code,{children:"For Windows"}),"."]}),"\n",(0,s.jsx)(o.A,{img:"screen-agents-download.png"}),"\n",(0,s.jsxs)(n.p,{children:["or via command line using ",(0,s.jsx)(n.code,{children:"wget"})," - see below."]}),"\n",(0,s.jsx)(n.p,{children:"Agent Install steps:"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsxs)(i.A,{value:"linux",label:"Linux",default:!0,children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Download Kraken agent installer."}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ wget http://<kraken-server-address>/install/kraken-agent-install.sh\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Execute installer. It will use ",(0,s.jsx)(n.code,{children:"sudo"})," internally so it requires rights to invoke ",(0,s.jsx)(n.code,{children:"sudo"}),"."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ chmod a+x kraken-agent-install.sh\n$ ./kraken-agent-install.sh\n"})}),(0,s.jsxs)(n.p,{children:["This will download the latest agent from the Kraken server and install\nit as a SystemD service on the host. The agent's files are installed\ninto the ",(0,s.jsx)(n.code,{children:"/opt/kraken"})," directory. The state of the service can be\nchecked using ",(0,s.jsx)(n.code,{children:"systemctl"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ sudo systemctl status kraken-agent\n\u25cf kraken-agent.service - Kraken Agent\n   Loaded: loaded (/lib/systemd/system/kraken-agent.service; enabled; vendor preset: enabled)\n   Active: active (running) since Thu 2021-03-11 17:09:16 UTC; 1 weeks 0 days ago\n Main PID: 699 (python3)\n    Tasks: 1 (limit: 6998)\n   Memory: 14.5M\n   CGroup: /system.slice/kraken-agent.service\n           \u2514\u2500699 python3 /opt/kraken/kkagent -s http://localhost:6000/ -d /opt/kraken/data run\n"})}),(0,s.jsxs)(n.p,{children:["The Kraken Agent service is running but it may not see ",(0,s.jsx)(n.code,{children:"MinIO"})," and\n",(0,s.jsx)(n.code,{children:"ClickHouse"})," services. This can be configured in\n",(0,s.jsx)(n.code,{children:"/opt/kraken/kraken.env"})," file."]}),(0,s.jsxs)(n.p,{children:["Set ",(0,s.jsx)(n.code,{children:"KRAKEN_CLICKHOUSE_ADDR"})," to the host where ",(0,s.jsx)(n.code,{children:"clickhouse-proxy"})," is\nrunning and add its listening port. If Kraken Server is started by\nDocker Compose then use the address of the host. The port to\n",(0,s.jsx)(n.code,{children:"clickhouse-proxy"})," should be taken from .env file or from docker\ncompose yaml file. Example:\n",(0,s.jsx)(n.code,{children:"KRAKEN_CLICKHOUSE_ADDR=192.168.0.12:9001"}),"."]}),(0,s.jsxs)(n.p,{children:["Set ",(0,s.jsx)(n.code,{children:"KRAKEN_MINIO_ADDR"})," to the host where ",(0,s.jsx)(n.code,{children:"minio"})," is running and add\nits listening port. If Kraken Server is started by Docker Compose then\nuse the address of the host. The port to ",(0,s.jsx)(n.code,{children:"minio"})," should be\ntaken from .env file or from docker compose yaml file. Example:\n",(0,s.jsx)(n.code,{children:"KRAKEN_MINIO_ADDR=192.168.0.12:9999"}),"."]}),(0,s.jsxs)(n.p,{children:["If Kraken Server was started by docker compose then the ports of these\nservices can be determined using ",(0,s.jsx)(n.code,{children:"docker ps"}),". Example:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ docker ps | grep 'chproxy\\|minio'\nc17deb0b8fb7   127.0.0.1:5000/kkchproxy:kk_ver           ....  0.0.0.0:9001->9001/udp            kraken_clickhouse-proxy_1\nb3e7c3aeeeb3   minio/minio:RELEASE.2020-12-18T03-27-42Z  ....  9000/tcp, 0.0.0.0:9999->9999/tcp  kraken_minio_1\n"})}),(0,s.jsxs)(n.p,{children:["where we can see that ",(0,s.jsx)(n.code,{children:"clickhouse proxy"})," is exposed on 9001 port and\n",(0,s.jsx)(n.code,{children:"minio"})," on 9999."]})]}),(0,s.jsxs)(i.A,{value:"windows",label:"Windows",children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Download Kraken agent installer."}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"> powershell wget http://<kraken-server-address>/install/kraken-agent-install.bat\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Execute installer. Run it as an ",(0,s.jsx)(n.code,{children:"Administrator"}),"."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"> kraken-agent-install.bat\n"})}),(0,s.jsxs)(n.p,{children:["This will download the latest agent from the Kraken server and install\nit as a regular Windows service on the host. The agent's files are installed\ninto the ",(0,s.jsx)(n.code,{children:"c:\\kraken"})," directory. The state of the service can be\nchecked in PowerShell:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"PS> Get-Service kkagent\n\nStatus   Name               DisplayName\n------   ----               -----------\nRunning  kkagent            kkagent\n\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:['Now the new agent can be authorized on the Kraken server. On the\n"Discovered Agents" page, the IP address of the host with the new\nagent should be visible. Select the checkbox and click the ',(0,s.jsx)(n.code,{children:"Authorize"}),"\nbutton. Then, add the agent to the appropriate agent group. Now the\nnew agent will receive jobs for execution."]}),"\n",(0,s.jsx)(n.h3,{id:"starting-in-docker-container",children:"Starting in Docker Container"}),"\n",(0,s.jsx)(n.p,{children:"In this case Kraken Agent is packed into Docker image and can be\nstarted as Docker container."}),"\n",(0,s.jsx)(n.p,{children:"The command to start a container is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ docker run -e KRAKEN_SERVER_ADDR=<host-addr>:6363 \\\n             -e KRAKEN_CLICKHOUSE_ADDR=<host-addr>:9001 \\\n             -e KRAKEN_MINIO_ADDR=<host-addr>:9999 \\\n             --rm \\\n             us-docker.pkg.dev/kraken-261806/kkagent:<version>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["where ",(0,s.jsx)(n.code,{children:"<host-addr>"})," is a host address where given service is running.\nIf Kraken Server was started by ",(0,s.jsx)(n.code,{children:"docker-compose"})," then the\n",(0,s.jsx)(n.code,{children:"<host-addr>"})," is an address of the host where docker-compose has been\nstarted. The ports above are default ports if the ports where changed\ne.g. in docker compose .env file then the same ones should be used\nhere."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"us-docker.pkg.dev/kraken-261806/kkagent:<version>"})," is a location of Docker\nimage with Kraken Agent. The ",(0,s.jsx)(n.code,{children:"<version>"})," identifies particular Kraken\nversion. The latest Kraken ",(0,s.jsx)(n.code,{children:"<version>"})," can be found on a Kraken's\nreleases page in GitHub: ",(0,s.jsx)(n.a,{href:"https://github.com/Kraken-CI/kraken/releases",children:"https://github.com/Kraken-CI/kraken/releases"}),".\nExample image URL: ",(0,s.jsx)(n.code,{children:"us-docker.pkg.dev/kraken-261806/kkagent:0.406"}),".  Notice\nthat the version in the image URL does not have ",(0,s.jsx)(n.code,{children:"v"})," prefix as on\nGitHub page (v0.406)."]}),"\n",(0,s.jsx)(n.h3,{id:"starting-in-docker-compose-from-quickstart",children:"Starting in Docker Compose from QuickStart"}),"\n",(0,s.jsxs)(n.p,{children:["It is also possible to extend Docker Compose from\n",(0,s.jsx)(n.a,{href:"quick-start",children:"QuickStart"})," and add there an agent or more."]}),"\n",(0,s.jsx)(n.p,{children:"There is already defined one built-in agent. But first, several\nmodifications are needed to solve IP addressing issues. The problem is\nthat it may get a different IP address after a container restart than\nbefore. Kraken Server requires that the addresses do not change\notherwise it is not possible to identify agents by the Kraken Server."}),"\n",(0,s.jsxs)(n.p,{children:["First, open your compose file (e.g. kraken-docker-compose-X.Y.yaml)\nand enable IP Address Management (IPAM) in the ",(0,s.jsx)(n.code,{children:"lab_net"})," where all\nagents reside:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  ...\n  lab_net:\n    driver: bridge\n    # add the following lines at the end of compose file\n    ipam:\n      config:\n        - subnet: 172.20.0.0/16\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here is added a subnet with particular addresses class,\n",(0,s.jsx)(n.code,{children:"172.20.0.0/16"}),". You can define any subnet definition you need."]}),"\n",(0,s.jsxs)(n.p,{children:["And now add extra agents by copy-pasting ",(0,s.jsx)(n.code,{children:"agent"})," service:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  agent1:\n    restart: always\n    image: us-docker.pkg.dev/kraken-261806/kk/kkagent:0.998\n    environment:\n      - KRAKEN_CLICKHOUSE_ADDR\n      - KRAKEN_SERVER_ADDR\n    networks:\n      lab_net:\n        ipv4_address: 172.20.0.11\n    depends_on:\n      - server\n      - minio\n      - clickhouse-proxy\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n"})}),"\n",(0,s.jsx)(n.p,{children:"Important things:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["New agent service name should be different e.g. ",(0,s.jsx)(n.code,{children:"agent1"}),", ",(0,s.jsx)(n.code,{children:"agent2"}),", etc."]}),"\n",(0,s.jsxs)(n.li,{children:["Remove ",(0,s.jsx)(n.code,{children:" - KRAKEN_AGENT_BUILTIN=1"})," environment variable that can be only in one agent."]}),"\n",(0,s.jsxs)(n.li,{children:["Add explicit IP address in ",(0,s.jsx)(n.code,{children:"networks"})," section: ",(0,s.jsx)(n.code,{children:"ipv4_address: 172.20.0.11"}),".\nEvery new agent needs to have a different IP address."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Before running such a modified compose file, shut down the currently\nrunning compose and delete ",(0,s.jsx)(n.code,{children:"lab_net"}),".  To delete this network, first,\ncheck if it exists:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ docker network ls\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It should have name like this ",(0,s.jsx)(n.code,{children:"<current-folder-name>_lab_net"}),". Please delete it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ docker network rm <current-folder-name>_lab_net\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now you can start Docker Compose again. ",(0,s.jsx)(n.code,{children:"lab_net"})," network will be\nrecreated with proper new settings:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ docker-compose --env-file kraken-X.Y.env -f kraken-docker-compose-X.Y.yaml up\n"})}),"\n",(0,s.jsx)(n.p,{children:"Go to Discovered Agents page in Kraken Web UI and check if new agents\nare present there."})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},4074:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var s=t(4848);const r=e=>{let{img:n}=e;return(0,s.jsx)("a",{href:"/img/"+n,target:"blank",children:(0,s.jsx)("img",{src:"/img/"+n,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})})}},7227:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var s=t(4164);const r={tabItem:"tabItem_Ymn6"};var a=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(6540),r=t(4164),a=t(4245),i=t(6347),o=t(6494),l=t(2814),c=t(5167),d=t(1269);function h(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=u(e),[i,l]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=s.find((e=>e.default)))?n:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,h]=g({queryString:t,groupId:r}),[k,m]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,a]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),x=(()=>{const e=null!=c?c:k;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);l(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=t(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function f(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==s&&(c(n),i(r))},h=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const n=l.indexOf(e.currentTarget)+1;t=null!=(s=l[n])?s:l[0];break}case"ArrowLeft":{var r;const n=l.indexOf(e.currentTarget)-1;t=null!=(r=l[n])?r:l[l.length-1];break}}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.A)("tabs__item",x.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=k(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,b.jsx)(f,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function w(e){const n=(0,m.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);