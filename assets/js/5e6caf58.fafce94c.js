"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[390],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),k=i,m=d["".concat(l,".").concat(k)]||d[k]||c[k]||a;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8742:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.img;return r.createElement("a",{href:"/img/"+n,target:"blank"},r.createElement("img",{src:"/img/"+n,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}}))}},9270:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=t(3117),i=t(102),a=(t(7294),t(4137)),s=t(8742),o=["components"],l={id:"guide-kubernetes",title:"Deployment in Kubernetes"},u=void 0,p={unversionedId:"guide-kubernetes",id:"guide-kubernetes",title:"Deployment in Kubernetes",description:"Intro",source:"@site/docs/guide-kubernetes.mdx",sourceDirName:".",slug:"/guide-kubernetes",permalink:"/docs/guide-kubernetes",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/guide-kubernetes.mdx",tags:[],version:"current",frontMatter:{id:"guide-kubernetes",title:"Deployment in Kubernetes"},sidebar:"someSidebar",previous:{title:"Webhooks Guide",permalink:"/docs/guide-webhooks"},next:{title:"Contributing to Kraken",permalink:"/docs/contrib-kraken"}},c={},d=[{value:"Intro",id:"intro",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Kubernetes Clusters",id:"kubernetes-clusters",level:2},{value:"Install in Minikube",id:"install-in-minikube",level:2},{value:"Global Settings",id:"global-settings",level:2},{value:"Configuration in Agents Groups",id:"configuration-in-agents-groups",level:2},{value:"Job Definition",id:"job-definition",level:2},{value:"Run",id:"run",level:2}],k={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"One of the methods of deploying Kraken CI is installing it into\nKubernetes cluster. Kraken CI is natively divided into several\nservices packed in Docker images so they can be nicely laid\nout in the cluster. The other aspect is running Kraken jobs. In this\ncase, they are run in containers natively scheduled onto Kubernetes\nnodes."),(0,a.kt)("p",null,"This guide shows how to install and configure Kraken CI in Kubernetes\nto leverage its potential."),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("p",null,"Several things are required to install Kraken CI in Kubernetes using Helm.\nIn short:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io"},"Kubernetes")," cluster and kubectl tool"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm tool"))),(0,a.kt)("p",null,"Helm is used to deploy several Kraken services and expose them to an external network.\nThese Kraken services are described in ",(0,a.kt)("a",{parentName:"p",href:"/docs/architecture"},"Architecture chapter"),"."),(0,a.kt)("h2",{id:"kubernetes-clusters"},"Kubernetes Clusters"),(0,a.kt)("p",null,"There are multiple ways for setting up a Kubernetes cluster. One of\nthe easiest ones that is most often used for experimenting is\nMinikube. There are also managed clusters like EKS (Elastic Kubernetes\nService) in AWS."),(0,a.kt)("p",null,"This manual will show how to install Kraken CI in Minikube but the\nsteps are similar for other Kubernetes environments as well."),(0,a.kt)("h2",{id:"install-in-minikube"},"Install in Minikube"),(0,a.kt)("p",null,"First, download minikube from ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/"},"https://minikube.sigs.k8s.io/docs/"),"."),(0,a.kt)("p",null,"And then create a cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ minikube start\n")),(0,a.kt)("p",null,"Now you may install Kraken CI, but first, let's add a repo with Kraken Helm charts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ helm repo add kraken-ci https://kraken.ci/helm-repo/charts\n$ helm repo update\n")),(0,a.kt)("p",null,"and now install Kraken CI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ helm upgrade --install --create-namespace --namespace kraken \\\n  --debug --wait \\\n  --set access.method='external-ips' --set access.external_ips={`minikube ip`} \\\n  kraken-ci kraken-ci/kraken-ci\n")),(0,a.kt)("p",null,"This command actually upgrades Kraken CI if it is already installed\nbut if it was not yet installed, then it installs it."),(0,a.kt)("p",null,"More details about using Helm to install Kraken CI can be found in ",(0,a.kt)("a",{parentName:"p",href:"/docs/install-helm"},"installation docs"),"."),(0,a.kt)("p",null,"When everything completes successfully, then at the end of the whole\noutput there should be presented short instruction about getting\nthe URL of Kraken service like that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'NOTES:\nGet the application URL by running these commands:\n  export NODE_PORT=$(kubectl get --namespace kk-1 -o jsonpath="{.spec.ports[0].port}" services ui)\n  export NODE_IP=$(kubectl get nodes --namespace kk-1 -o jsonpath="{.items[0].status.addresses[0].address}")\n  echo http://$NODE_IP:$NODE_PORT\n')),(0,a.kt)("p",null,"Now you may check if Kraken is working by visiting the URL\ngiven by this code and by checking if Kubernetes is running Kraken's\nservices with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get all -n kraken\n")),(0,a.kt)("p",null,"This will show Kraken's pods, services, deployments and replica sets."),(0,a.kt)("p",null,"At this moment, Kraken CI should be operating. Please visit the\nwebsite on the URL presented above. You should see a login page:"),(0,a.kt)(s.Z,{img:"qs-login-page.png",mdxType:"Screen"}),(0,a.kt)("p",null,"Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," for Username and ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," for Password."),(0,a.kt)("h2",{id:"global-settings"},"Global Settings"),(0,a.kt)("p",null,"First, let's set some global settings. In Web UI, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," in\nthe top menu bar."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"General")," tab, fill the following fields:"),(0,a.kt)(s.Z,{img:"screen-settings-general.png",mdxType:"Screen"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Kraken Server URL")," - an URL with a port of the server that is visible inside the Kubernetes cluster"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MinIO/S3 Address")," - the IP address and port of Kraken's internal artifacts storage address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Clickhouse Proxy Address")," - the IP address and port of Kraken's internal logs storage address")),(0,a.kt)("p",null,"In all these cases minikube IP address can be used. It can be obtained\nusing ",(0,a.kt)("inlineCode",{parentName:"p"},"minikube ip")," command."),(0,a.kt)("p",null,"Having set the ",(0,a.kt)("inlineCode",{parentName:"p"},"General")," settings, let's move to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cloud")," tab."),(0,a.kt)(s.Z,{img:"screen-settings-cloud.png",mdxType:"Screen"}),(0,a.kt)("p",null,"Here, please move to Kubernetes section and set only the ",(0,a.kt)("inlineCode",{parentName:"p"},"Namespace"),"\nfield to the value that was provided in ",(0,a.kt)("inlineCode",{parentName:"p"},"helm")," command above (if it\nwas not changed, then it should be ",(0,a.kt)("inlineCode",{parentName:"p"},"kraken"),")."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"API Server URL")," field must be empty as Kraken CI is installed inside\nKubernetes and it knows where the API server is."),(0,a.kt)("p",null,"After saving the settings, check if connectivity is ok using ",(0,a.kt)("inlineCode",{parentName:"p"},"Test\nKubernetes Access")," button."),(0,a.kt)("h2",{id:"configuration-in-agents-groups"},"Configuration in Agents Groups"),(0,a.kt)("p",null,"After setting global settings, it is possible now to configure aspects\nof spawning Kubernetes pods for Kraken jobs. This can be done on\nKraken -> Agents -> Groups page.  Let's create a new Agents Group by\nclicking ",(0,a.kt)("inlineCode",{parentName:"p"},"Add New Group")," button and naming it ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s"),". The newly created\ngroup's details will be presented on a separate tab. On this tab,\nthere is a section ",(0,a.kt)("inlineCode",{parentName:"p"},"Agents Deployment")," - select Kubernetes. In this\ncase, there is only one field to set: ",(0,a.kt)("inlineCode",{parentName:"p"},"Instances Limit"),"."),(0,a.kt)(s.Z,{img:"screen-agents-groups-cloud-kubernetes.png",mdxType:"Screen"}),(0,a.kt)("p",null,"This limit value will not allow having more running pods than it - here 5."),(0,a.kt)("h2",{id:"job-definition"},"Job Definition"),(0,a.kt)("p",null,"Now, to use the defined ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s")," Agents Group, we need to prepare\na project with a branch and a stage. More details about that can be\nfound in ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide-intro"},"Introductory Guide"),". So let's concentrate\nnow on defining a job."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "parent": "root",\n    "triggers": {\n        "parent": True\n    },\n    "configs": [],\n    "jobs": [{\n        "name": "hello",\n        "timeout": 500,\n        "steps": [{\n            "tool": "shell",\n            "cmd": "echo \'hello world\'"\n        }],\n        "environments": [{\n            "system": "ubuntu:20.04",\n            "agents_group": "k8s",\n            "config": "default"\n        }]\n    }]\n}\n')),(0,a.kt)("p",null,"There is not much difference compared to regular Kraken jobs. The job\nhas a defined environments section where we are pointing to our ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s"),"\nAgents Group. In the case of ",(0,a.kt)("inlineCode",{parentName:"p"},"system")," field here, we have a\n",(0,a.kt)("inlineCode",{parentName:"p"},"Ubuntu:20.04")," Docker image."),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("p",null,"Now when a job is assigned to an agents group with configured Agents\nDeployment then a new pod will be spawned for that job if agents\nare not available in the Kraken."),(0,a.kt)("p",null,"Let's change the view to Branch Results view and trigger a new flow by\nclicking ",(0,a.kt)("inlineCode",{parentName:"p"},"Run Flow")," button. On the run page, the list of jobs shows our\nAWS job:"),(0,a.kt)(s.Z,{img:"screen-k8s-job.png",mdxType:"Screen"}),(0,a.kt)("p",null,"That's it!"))}m.isMDXComponent=!0}}]);