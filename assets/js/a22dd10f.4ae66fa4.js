"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[2917],{4137:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),g=r,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return t?i.createElement(f,a(a({ref:n},u),{},{components:t})):i.createElement(f,a({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8742:function(e,n,t){var i=t(7294);n.Z=function(e){var n=e.img;return i.createElement("a",{href:"/img/"+n,target:"blank"},i.createElement("img",{src:"/img/"+n,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}}))}},575:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var i=t(3117),r=t(102),o=(t(7294),t(4137)),a=t(8742),s=["components"],c={id:"guide-autoscale",title:"Autoscale Guide"},l=void 0,u={unversionedId:"guide-autoscale",id:"guide-autoscale",title:"Autoscale Guide",description:"Intro",source:"@site/docs/guide-autoscale.mdx",sourceDirName:".",slug:"/guide-autoscale",permalink:"/docs/guide-autoscale",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/guide-autoscale.mdx",tags:[],version:"current",frontMatter:{id:"guide-autoscale",title:"Autoscale Guide"},sidebar:"someSidebar",previous:{title:"Introductory Guide",permalink:"/docs/guide-intro"},next:{title:"Webhooks Guide",permalink:"/docs/guide-webhooks"}},p={},d=[{value:"Intro",id:"intro",level:2},{value:"Global Cloud Settings",id:"global-cloud-settings",level:2},{value:"Preparing Cloud Environment",id:"preparing-cloud-environment",level:2},{value:"Configuration in Agents Groups",id:"configuration-in-agents-groups",level:2},{value:"Job Definition",id:"job-definition",level:2},{value:"Run",id:"run",level:2}],g={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Maintaining a fixed number of machines for Kraken CI can be costly. If\nthere is no high traffic of builds, then some machines sit idle and\nwaste power. The solution to this problem is autoscaling ie. spawning\nmachines with Kraken Agents dynamically depending on the current needs\nin the Kraken CI. If there is submitted a new flow with many building\nor testing jobs, then new machines are spawned. When the flow\ncompletes, machines are terminated and no costs are incurred."),(0,o.kt)("p",null,"Currently, Kraken CI autoscaling is supporting AWS EC2 virtual\nmachines, AWS ECS containers and Azure virtual machines."),(0,o.kt)("p",null,"The following chapters show how to configure access to AWS, then how\nto configure parameters and behaviour of spawned machines in case of\nAWS EC2. In the end, the usage in job definitions is presented."),(0,o.kt)("p",null,"Details about configuration for AWS as well as for Azure VMs can be\nfound in ",(0,o.kt)("a",{parentName:"p",href:"autoscale-in-cloud"},"the Kraken docs"),"."),(0,o.kt)("h2",{id:"global-cloud-settings"},"Global Cloud Settings"),(0,o.kt)("p",null,"First, global settings have to be set to allow access to a given cloud\nprovider. In Web UI, on Kraken -> Settings page, in Cloud tab,\nthere is a form for collecting credentials to cloud providers:"),(0,o.kt)(a.Z,{img:"screen-settings-cloud.png",mdxType:"Screen"}),(0,o.kt)("p",null,"In the case of AWS, there are required ",(0,o.kt)("inlineCode",{parentName:"p"},"Access Key")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret Access\nKey"),". After filling in the values and saving settings, it is possible\nto check if it works by clicking ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Access")," button."),(0,o.kt)("h2",{id:"preparing-cloud-environment"},"Preparing Cloud Environment"),(0,o.kt)("p",null,"In the case of AWS it is also required to assign proper permissions so\nthat Kraken can create or destroy EC2 instances. The list of all requires\npermissions looks as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:AuthorizeSecurityGroupIngress",\n                "ec2:CreateKeyPair",\n                "ec2:CreateSecurityGroup",\n                "ec2:CreateTags",\n                "ec2:DeleteKeyPair",\n                "ec2:DescribeInstances",\n                "ec2:DescribeInstanceStatus"\n                "ec2:DescribeInstanceTypeOfferings",\n                "ec2:DescribeRegions",\n                "ec2:DescribeSecurityGroups",\n                "ec2:DescribeVpcs",\n                "ec2:RunInstances",\n                "ec2:TerminateInstances",\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"configuration-in-agents-groups"},"Configuration in Agents Groups"),(0,o.kt)("p",null,"Having set credentials to cloud providers, it is possible now to\nconfigure aspects of spawning new machines. This can be done on Kraken\n-> Agents -> Groups page.  Let's create a new Agents Group by clicking\n",(0,o.kt)("inlineCode",{parentName:"p"},"Add New Group")," button and naming it ",(0,o.kt)("inlineCode",{parentName:"p"},"aws-t2-micro"),". The newly created\ndetails will be presented on a separate tab. On this tab, there is a\nsection ",(0,o.kt)("inlineCode",{parentName:"p"},"Agents Deployment"),". So the deployment can be manual (default)\nor automated to a particular cloud provider. In the case of Amazon Web\nServices, there are the following options that can be set:"),(0,o.kt)(a.Z,{img:"screen-agents-groups-cloud-aws.png",mdxType:"Screen"}),(0,o.kt)("p",null,"Select any region that fits you. Limit of instances can be set to\n2. This will not allow having more running machines than 2. For now,\nthe default AMI can be empty."),(0,o.kt)("p",null,"Then in VM options, let's stick to AWS free tier and select t2.micro\ninstance type. The rest of the checkboxes leave empty. Init script\nalso can be blank."),(0,o.kt)("p",null,"To ensure that dangling instances do not eat up our budget, let's set\nthe options in Destruction section to 1 job and 10 minutes. So a\nspawned machine will be terminated after executing 1 job. And even\nthen, if it sits idle for more than 10 minutes, it will be destroyed as\nwell."),(0,o.kt)("h2",{id:"job-definition"},"Job Definition"),(0,o.kt)("p",null,"Now, to use the defined ",(0,o.kt)("inlineCode",{parentName:"p"},"aws-t2-micro")," Agents Group, we need to prepare\na project with a branch and a stage. More details about that can be\nfound in ",(0,o.kt)("a",{parentName:"p",href:"/docs/guide-intro"},"Introductory Guide"),". So let's concentrate\nnow on defining a job."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "parent": "root",\n    "triggers": {\n        "parent": True\n    },\n    "configs": [],\n    "jobs": [{\n        "name": "hello",\n        "timeout": 500,\n        "steps": [{\n            "tool": "shell",\n            "cmd": "echo \'hello world\'"\n        }],\n        "environments": [{\n            "system": "ami-0967f290f3533e5a8",\n            "agents_group": "aws-t2-micro",\n            "config": "default"\n        }]\n    }]\n}\n')),(0,o.kt)("p",null,"There is no much difference comparing to regular Kraken jobs. The job\nhas a defined environments section where we are pointing to out\n",(0,o.kt)("inlineCode",{parentName:"p"},"aws-t2-micro")," Agents Group. What's is new is ",(0,o.kt)("inlineCode",{parentName:"p"},"system")," field which\npoints to ",(0,o.kt)("inlineCode",{parentName:"p"},"AMI")," identifier - this indicates AWS EC2 image."),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"Now when a job is assigned to an agents group with configured Agents\nDeployment then a new machine will be spawned for that job if agents\nare no available in the Kraken."),(0,o.kt)("p",null,"Let's change the view to Branch Results view and trigger a new flow by\nclicking ",(0,o.kt)("inlineCode",{parentName:"p"},"Run Flow")," button. On the run page, the list of jobs shows our\nAWS job:"),(0,o.kt)(a.Z,{img:"screen-aws-job.png",mdxType:"Screen"}),(0,o.kt)("p",null,"That's it!"))}f.isMDXComponent=!0}}]);