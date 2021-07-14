(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[4990],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8742:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.img;return a.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})}},3147:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(4137)),o=n(8742),s=["components"],l={id:"autoscale-in-cloud",title:"Autoscale in Cloud"},c=void 0,u={unversionedId:"autoscale-in-cloud",id:"autoscale-in-cloud",isDocsHomePage:!1,title:"Autoscale in Cloud",description:"Kraken CI allows for creating executing machines dynamically in the",source:"@site/docs/autoscale-in-cloud.mdx",sourceDirName:".",slug:"/autoscale-in-cloud",permalink:"/docs/autoscale-in-cloud",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/autoscale-in-cloud.mdx",version:"current",frontMatter:{id:"autoscale-in-cloud",title:"Autoscale in Cloud"},sidebar:"someSidebar",previous:{title:"LXD Executor",permalink:"/docs/lxd-executor"},next:{title:"Test Results",permalink:"/docs/test-results"}},p=[{value:"Global Cloud Settings",id:"global-cloud-settings",children:[]},{value:"Configuration in Agents Groups",id:"configuration-in-agents-groups",children:[]},{value:"Usage",id:"usage",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kraken CI allows for creating executing machines dynamically in the\ncloud when they are needed. They can be either virtual machines or\ncontainers. When new jobs are triggered and there are no agents\navailable for them, new machines with Kraken agents are\nspawned. The configuration of the way of spawning new machines is\nlocated in agent groups."),(0,i.kt)("p",null,"Currently, Kraken CI autoscaling is supporting:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AWS EC2 virtual machines")),(0,i.kt)("h2",{id:"global-cloud-settings"},"Global Cloud Settings"),(0,i.kt)("p",null,"First, global settings have to be set to allow access to a given cloud\nprovider. Kraken In Web UI, on Kraken -> Settings page, in Cloud tab,\nthere is a form for collecting credentials to cloud providers:"),(0,i.kt)(o.Z,{img:"screen-settings-cloud.png",mdxType:"Screen"}),(0,i.kt)("p",null,"In the case of AWS, there are required ",(0,i.kt)("inlineCode",{parentName:"p"},"Access Key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Secret Access Key"),"."),(0,i.kt)("h2",{id:"configuration-in-agents-groups"},"Configuration in Agents Groups"),(0,i.kt)("p",null,"Having set credentials to cloud providers, it is possible now to\nconfigure aspects of spawning new machines. This can be done on Kraken\n-> Agents -> Groups page.  When a particular group is selected, then\nits details will be presented on a separate tab. On this tab, there is\na section ",(0,i.kt)("inlineCode",{parentName:"p"},"Agents Deployment"),". So the deployment can be manual\n(default) or automated to particular cloud providers.  In the case of\nAmazon Web Services, there are the following options that can be set:"),(0,i.kt)(o.Z,{img:"screen-agents-groups-cloud-aws.png",mdxType:"Screen"}),(0,i.kt)("p",null,"The meaning of the settings is as follows."),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"General")," section:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Region")," - AWS region where a machine will be spawned"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Instances Limit")," - maximum number of spawned machines at a time"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default AMI Image")," - if AMI image is not provided in job definition\nthat this one is used"),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"VM Options")," section:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Instance Type")," - EC2 instance type that should be used for spawned\nmachines, the full list is available on ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/instance-types/"},"AWS web\npage")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Spot Instance")," - indicates where Spot instance should be used (",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/spot/"},"AWS\ndocs"),")"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Monitoring")," - indicates if monitoring should be enabled (",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-new.html"},"AWS\ndocs"),")"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CPU Credits Unlimited")," - this allows having more burst power, more\nin ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode.html"},"AWS\ndocs")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Init Script")," - a value of this text is passed as UserData to EC2\ninstance, generally, this is a script that is executing during the\nfirst boot of instance (",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html"},"AWS docs"),")"),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"Destruction")," section:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Destroy VM after N jobs")," - this indicates that the machine should\nbe destroyed (terminated) after it is used in N Kraken jobs, default\nis 1, ie. machine is used once and then it is destroyed so each time\na new fresh machine is used for each job; 0 means that this\nmechanism is disabled"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Destroy VM after N minutes of idle time")," - this indicates that the\nmachine should be destroyed (terminated) after it is not used in any\nKraken jobs for a given number of minutes, default is 10 minutes,\nie. a machine is destroyed if it sits idle for 10 minutes; 0 means\nthat this mechanism is disabled"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Now when a job is assigned to an agents group with configured Agents\nDeployment then a new machine will be spawned for that job if there\nare no available agents."))}m.isMDXComponent=!0}}]);