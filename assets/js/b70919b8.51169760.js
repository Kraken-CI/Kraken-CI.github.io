(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[4990],{4137:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8742:function(e,n,t){"use strict";var a=t(7294);n.Z=function(e){var n=e.img;return a.createElement("img",{src:"/img/"+n,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})}},2713:function(e,n,t){"use strict";var a=(0,t(7294).createContext)(void 0);n.Z=a},3406:function(e,n,t){"use strict";t.r(n),t.d(n,{contentTitle:function(){return v},default:function(){return C},frontMatter:function(){return b},metadata:function(){return y},toc:function(){return w}});var a=t(4034),r=t(9973),s=t(7294),i=t(4137),o=t(1048),l=t(2713);var u=function(){var e=(0,s.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(3106),p=t(6010),d="tabItem_1uMI";function m(e){var n,t,a,r=e.lazy,i=e.block,o=e.defaultValue,l=e.values,m=e.groupId,k=e.className,h=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=l?l:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,c.lx)(f,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===o?o:null!=(n=null!=o?o:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=h[0])?void 0:a.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=u(),y=v.tabGroupChoices,w=v.setTabGroupChoices,N=(0,s.useState)(b),C=N[0],T=N[1],S=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=y[m];null!=x&&x!==C&&f.some((function(e){return e.value===x}))&&T(x)}var A=function(e){var n=e.currentTarget,t=S.indexOf(n),a=f[t].value;a!==C&&(I(n),T(a),null!=m&&w(m,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;t=S[a]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;t=S[r]||S[S.length-1]}null==(n=t)||n.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},k)},f.map((function(e){var n=e.value,t=e.label;return s.createElement("li",{role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,className:(0,p.Z)("tabs__item",d,{"tabs__item--active":C===n}),key:n,ref:function(e){return S.push(e)},onKeyDown:E,onFocus:A,onClick:A},null!=t?t:n)}))),r?(0,s.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function k(e){var n=(0,o.Z)();return s.createElement(m,(0,a.Z)({key:String(n)},e))}var h=function(e){var n=e.children,t=e.hidden,a=e.className;return s.createElement("div",{role:"tabpanel",hidden:t,className:a},n)},f=t(8742),g=["components"],b={id:"autoscale-in-cloud",title:"Autoscale in Cloud"},v=void 0,y={unversionedId:"autoscale-in-cloud",id:"autoscale-in-cloud",isDocsHomePage:!1,title:"Autoscale in Cloud",description:"Kraken CI allows for creating executing machines dynamically in the",source:"@site/docs/autoscale-in-cloud.mdx",sourceDirName:".",slug:"/autoscale-in-cloud",permalink:"/docs/autoscale-in-cloud",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/autoscale-in-cloud.mdx",tags:[],version:"current",frontMatter:{id:"autoscale-in-cloud",title:"Autoscale in Cloud"},sidebar:"someSidebar",previous:{title:"LXD Executor",permalink:"/docs/lxd-executor"},next:{title:"Test Results",permalink:"/docs/test-results"}},w=[{value:"Preparing Cloud Environment",id:"preparing-cloud-environment",children:[],level:2},{value:"Global Cloud Settings",id:"global-cloud-settings",children:[],level:2},{value:"Configuration in Agents Groups",id:"configuration-in-agents-groups",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],N={toc:w};function C(e){var n=e.components,s=(0,r.Z)(e,g);return(0,i.kt)("wrapper",(0,a.Z)({},N,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kraken CI allows for creating executing machines dynamically in the\ncloud when they are needed. They can be either virtual machines or\ncontainers. When new jobs are triggered and there are no agents\navailable for them, new machines with Kraken agents are\nspawned. The configuration of the way of spawning new machines is\nlocated in agent groups."),(0,i.kt)("p",null,"Currently, Kraken CI autoscaling is supporting:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AWS EC2 virtual machines"),(0,i.kt)("li",{parentName:"ul"},"AWS ECS containers"),(0,i.kt)("li",{parentName:"ul"},"Azure virtual machines"),(0,i.kt)("li",{parentName:"ul"},"Kubernetes")),(0,i.kt)("h2",{id:"preparing-cloud-environment"},"Preparing Cloud Environment"),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(h,{value:"aws-ec2",label:"AWS EC2",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"In the case of AWS EC2, it is required to assign proper permissions to the\naccessing user so that Kraken can create or destroy EC2\ninstances. The list of all requires permissions looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:AuthorizeSecurityGroupIngress",\n                "ec2:CreateKeyPair",\n                "ec2:CreateSecurityGroup",\n                "ec2:CreateTags",\n                "ec2:DeleteKeyPair",\n                "ec2:DescribeInstances",\n                "ec2:DescribeInstanceStatus"\n                "ec2:DescribeInstanceTypeOfferings",\n                "ec2:DescribeRegions",\n                "ec2:DescribeSecurityGroups",\n                "ec2:DescribeVpcs",\n                "ec2:RunInstances",\n                "ec2:TerminateInstances",\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n'))),(0,i.kt)(h,{value:"aws-ecs",label:"AWS ECS",mdxType:"TabItem"},(0,i.kt)("p",null,"In the case of AWS ECS, it is required to assign proper permissions to\nthe accessing user so that Kraken can create or destroy ECS\ntasks. The list of all requires permissions looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:DescribeNetworkInterfaces",\n                "ecs:RunTask",\n                "ecs:StopTask",\n                "ecs:DescribeTasks",\n                "ecs:ListTaskDefinitions"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "VisualEditor1",\n            "Effect": "Allow",\n            "Action": "iam:PassRole",\n            "Resource": "arn:aws:iam::*:role/ecsTaskExecutionRole"\n        }\n    ]\n}\n'))),(0,i.kt)(h,{value:"kubernetes",label:"Kubernetes",mdxType:"TabItem"},(0,i.kt)("p",null,"For Kubernetes, there are two accessing variants: Kraken CI is\ninstalled inside Kubernetes cluster or outside. In both cases, a proper\naccess must be configured. When Kraken is installed inside a\nKubernetes cluster then this is made using Helm chart and it also sets\nservice account and proper permissions. When Kraken CI sits outside of\nKubernetes cluster, then the service account and permissions must be\nconfigured in the following way."),(0,i.kt)("p",null,"The content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Namespace\nmetadata:\n  name: <namespace>\n\n---\n\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: kraken\n  namespace: <namespace>\n\n---\n\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\n\nmetadata:\n  name: kraken-role\n\nrules:\n  - apiGroups: [""]\n    resources: ["nodes", "services", "pods", "endpoints", "namespaces"]\n    verbs: ["get", "list", "watch"]\n  - apiGroups: [""]\n    resources: ["pods"]\n    verbs: ["create", "delete"]\n\n---\n\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\n\nmetadata:\n  name: kraken-crb\n\nroleRef:\n  kind: ClusterRole\n  name: kraken-role\n  apiGroup: rbac.authorization.k8s.io\n\nsubjects:\n  - kind: ServiceAccount\n    name: kraken\n    namespace: <namespace>\n')),(0,i.kt)("p",null,"should be copied and pasted to ",(0,i.kt)("inlineCode",{parentName:"p"},"kraken-serviceaccount.yaml")," file or\ndownloaded from ",(0,i.kt)("a",{target:"_blank",href:t(1831).Z},"here"),". Before creating\nthe resources, set your namespace by replacing all occurrences of\n",(0,i.kt)("inlineCode",{parentName:"p"},"<namespace>")," with e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"kraken"),"."),(0,i.kt)("p",null,"And then create these resources using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl apply -f kraken-serviceaccount.yaml\n")),(0,i.kt)("p",null,"This will create:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an indicated namespace (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"kraken"),"),"),(0,i.kt)("li",{parentName:"ul"},"a service account ",(0,i.kt)("inlineCode",{parentName:"li"},"kraken"),","),(0,i.kt)("li",{parentName:"ul"},"a cluster role ",(0,i.kt)("inlineCode",{parentName:"li"},"kraken-role")," that allows browsing nodes, services,\npods, endpoints and namespaces, and creating and deleting pods,"),(0,i.kt)("li",{parentName:"ul"},"cluster role binding ",(0,i.kt)("inlineCode",{parentName:"li"},"kraken-crb")," that assigns ",(0,i.kt)("inlineCode",{parentName:"li"},"kraken-role")," role to ",(0,i.kt)("inlineCode",{parentName:"li"},"kraken"),"\nservice account")),(0,i.kt)("p",null,"Service account's token will be used in the next steps."))),(0,i.kt)("h2",{id:"global-cloud-settings"},"Global Cloud Settings"),(0,i.kt)("p",null,"First, global settings must be set to allow access to a given cloud\nprovider. In Web UI, on Kraken -> Settings page, in Cloud tab,\nthere is a form for collecting credentials to cloud providers:"),(0,i.kt)(f.Z,{img:"screen-settings-cloud.png",mdxType:"Screen"}),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(h,{value:"aws",label:"AWS",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"In the case of AWS, ",(0,i.kt)("inlineCode",{parentName:"p"},"Access Key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Secret Access Key")," are required.")),(0,i.kt)(h,{value:"azure",label:"Azure",mdxType:"TabItem"},(0,i.kt)("p",null,"When Microsoft Azure is used, then there are required ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscription ID"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"Tenant ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Client Secret"),".")),(0,i.kt)(h,{value:"kubernetes",label:"Kubernetes",mdxType:"TabItem"},(0,i.kt)("p",null,"When Kraken is installed inside Kubernetes cluster, then only setting\n",(0,i.kt)("inlineCode",{parentName:"p"},"Namespace")," field is required, ",(0,i.kt)("inlineCode",{parentName:"p"},"API Server URL")," must be empty."),(0,i.kt)("p",null,"When Kraken is running outside of Kubernetes cluster then all fields\nare required: ",(0,i.kt)("inlineCode",{parentName:"p"},"API Server URL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Namespace")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Token"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Namespace"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"Token")," were created in previous steps. The following commands will\nreveal the token."),(0,i.kt)("p",null,"First, check the definition of ",(0,i.kt)("inlineCode",{parentName:"p"},"kraken")," service account:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get serviceaccounts/kraken -n <namespace> -o yaml\n")),(0,i.kt)("p",null,"This should display a list of secrets at the bottom. The token should\nbe stored in a secret with a name in the form ",(0,i.kt)("inlineCode",{parentName:"p"},"kraken-token-XXXXX"),"\nlike e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"kraken-token-5fvcb"),"."),(0,i.kt)("p",null,"Now retrieve the token value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get secret kraken-token-XXXXX -n <namespace> -o yaml\n")),(0,i.kt)("p",null,"The value should be under the token field, and it should be pretty\nlong. It is encoded using base64, and in this form, it should be copied\n& pasted to Kraken CI cloud settings (no decoding is required)."))),(0,i.kt)("h2",{id:"configuration-in-agents-groups"},"Configuration in Agents Groups"),(0,i.kt)("p",null,"Having set credentials to cloud providers, it is possible now to\nconfigure the aspects of spawning new machines. This can be done on Kraken\n-> Agents -> Groups page.  When a particular group is selected, then\nits details will be presented on a separate tab. On this tab, there is\na section ",(0,i.kt)("inlineCode",{parentName:"p"},"Agents Deployment"),". So the deployment can be manual\n(default) or automated to the particular cloud provider."),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(h,{value:"aws-ec2",label:"AWS EC2",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS EC2"),", jobs are executed in AWS EC2 VMs. There are\nthe following options that can be set:"),(0,i.kt)(f.Z,{img:"screen-agents-groups-cloud-aws.png",mdxType:"Screen"}),(0,i.kt)("p",null,"The meaning of the settings is as follows."),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"General")," section:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Region")," - AWS region where a machine will be spawned"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Instances Limit")," - maximum number of spawned machines at a time"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default AMI Image")," - if AMI image is not provided in job definition\nthen this one is used"),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"VM Options")," section:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Instance Type")," - EC2 instance type that should be used for spawned\nmachines, the full list is available on ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/instance-types/"},"AWS web\npage")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Spot Instance")," - indicates where Spot instance should be used (",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/spot/"},"AWS\ndocs"),")"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Monitoring")," - indicates if monitoring should be enabled (",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-new.html"},"AWS\ndocs"),")"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CPU Credits Unlimited")," - this allows having more burst power, more\nin ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode.html"},"AWS\ndocs")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Disk Size")," - the size of root disk, if 0 then default size is used otherwise provided number is counted in GB"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Init Script")," - a value of this text is passed as UserData to EC2\ninstance, generally, this is a script that is executing during the\nfirst boot of instance (",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html"},"AWS docs"),")"),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"Destruction")," section:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Destroy VM after N jobs")," - this indicates that the machine should\nbe destroyed (terminated) after it is used in N Kraken jobs, default\nis 1, ie. machine is used once and then it is destroyed so each time\na new fresh machine is used for each job; 0 means that this\nmechanism is disabled"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Destroy VM after N minutes of idle time")," - this indicates that the\nmachine should be destroyed (terminated) after it is not used in any\nKraken jobs for a given number of minutes, default is 10 minutes,\nie. a machine is destroyed if it sits idle for 10 minutes; 0 means\nthat this mechanism is disabled")),(0,i.kt)(h,{value:"aws-ecs",label:"AWS ECS",mdxType:"TabItem"},(0,i.kt)("p",null,"In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS ECS"),", jobs are executed in containers in AWS ECS\ncluster. There are the following options that can be set:"),(0,i.kt)(f.Z,{img:"screen-agents-groups-cloud-aws-ecs.png",mdxType:"Screen"}),(0,i.kt)("p",null,"The meaning of the settings is as follows."),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"General")," section:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Region")," - AWS region where a machine will be spawned"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Instances Limit")," - maximum number of spawned machines at a time"),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"ECS Task Options")," section:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cluster")," - the name of ECS cluster"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Subnets")," - a list of subnets IDs separated by comma"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Security Group")," - ID of security group used for spawned tasks and their containers")),(0,i.kt)(h,{value:"azure-vm",label:"Azure VM",mdxType:"TabItem"},(0,i.kt)("p",null,"In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"Azure VM"),", jobs are executed in virtual machines, in\nMicrosoft Azure VMs. There are the following options that can be set:"),(0,i.kt)(f.Z,{img:"screen-agents-groups-cloud-azure-vm.png",mdxType:"Screen"}),(0,i.kt)("p",null,"The meaning of the settings is as follows."),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"General")," section:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Location")," - Azure location (region) where a machine will be spawned"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Instances Limit")," - maximum number of spawned machines at a time"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default Image")," - if image is not provided in job definition\nthen this one is used; the expected format is: publisher:offer:sku:version,\ne.g.: Canonical:0001-com-ubuntu-server-focal:20_04-lts:20.04.202109080"),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"VM Options")," section:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"VM Size")," - Azure VM size that should be used for spawned\nmachines; more about VM sizes can be found on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/sizes"},"Azure web\npage")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Init Script")," - a value of this text is passed as user_data to VM\ninstance, generally, this is a script that is executing during the\nfirst boot of instance"),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"Destruction")," section:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Destroy VM after N jobs")," - this indicates that the machine should\nbe destroyed (terminated) after it is used in N Kraken jobs, default\nis 1, ie. machine is used once and then it is destroyed so each time\na new fresh machine is used for each job; 0 means that this\nmechanism is disabled"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Destroy VM after N minutes of idle time")," - this indicates that the\nmachine should be destroyed (terminated) after it is not used in any\nKraken jobs for a given number of minutes, default is 10 minutes,\nie. a machine is destroyed if it sits idle for 10 minutes; 0 means\nthat this mechanism is disabled")),(0,i.kt)(h,{value:"kubernetes",label:"Kubernetes",mdxType:"TabItem"},(0,i.kt)("p",null,"In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubernetes"),", jobs are executed in containers in a\nKubernetes cluster. Kubernetes cluster can be self-hosted or hosted in\na public cloud like AWS EKS. There are the following options that can\nbe set:"),(0,i.kt)(f.Z,{img:"screen-agents-groups-cloud-kubernetes.png",mdxType:"Screen"}),(0,i.kt)("p",null,"The meaning of the settings is as follows."),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"General")," section:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Instances Limit")," - maximum number of spawned containers at a time"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Now when a job is assigned to an agents group with configured Agents\nDeployment then a new machine will be spawned for that job if there\nare no available agents."))}C.isMDXComponent=!0},1831:function(e,n,t){"use strict";n.Z=t.p+"assets/files/kraken-serviceaccount-bd8f51df760fdd9340742705154f3f28.yaml"}}]);