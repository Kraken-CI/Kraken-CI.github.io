"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[8327],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(s,".").concat(d)]||p[d]||h[d]||i;return n?o.createElement(b,a(a({ref:t},c),{},{components:n})):o.createElement(b,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8742:function(e,t,n){var o=n(7294);t.Z=function(e){var t=e.img;return o.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})}},6350:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return h},default:function(){return d}});var o=n(3117),r=n(102),i=(n(7294),n(4137)),a=n(8742),l=["components"],s={id:"guide-webhooks",title:"Webhooks Guide"},u=void 0,c={unversionedId:"guide-webhooks",id:"guide-webhooks",title:"Webhooks Guide",description:"Intro",source:"@site/docs/guide-webhooks.mdx",sourceDirName:".",slug:"/guide-webhooks",permalink:"/docs/guide-webhooks",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/guide-webhooks.mdx",tags:[],version:"current",frontMatter:{id:"guide-webhooks",title:"Webhooks Guide"},sidebar:"someSidebar",previous:{title:"Autoscale Guide",permalink:"/docs/guide-autoscale"},next:{title:"Deployment in Kubernetes",permalink:"/docs/guide-kubernetes"}},h=[{value:"Intro",id:"intro",children:[],level:2},{value:"Enable Webhooks in a Project",id:"enable-webhooks-in-a-project",children:[],level:2},{value:"Set Webhook URL in Git Hosting Service",id:"set-webhook-url-in-git-hosting-service",children:[{value:"GitHub",id:"github",children:[],level:3},{value:"GitLab",id:"gitlab",children:[],level:3},{value:"Gitea",id:"gitea",children:[],level:3}],level:2},{value:"Trigger a Flow",id:"trigger-a-flow",children:[],level:2}],p={toc:h};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"Kraken CI allows triggering a flow of a branch in a project using a\nwebhook in a Git hosting service. A push to a regular branch e.g. main\nbranch or to a branch associated with a pull or a merge request will cause\na Git hosting service to call a webhook exposed by Kraken CI. To make\nit happen a webhook URL and a secret have to be stored in a project\nsettings in Git hosting service."),(0,i.kt)("p",null,"Currenty there are support the following Git hosting services:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GitHub"),(0,i.kt)("li",{parentName:"ul"},"GitLab"),(0,i.kt)("li",{parentName:"ul"},"Gitea")),(0,i.kt)("p",null,"The following guide shows how to configure webhooks: 1) how to enable\nthem in a project in Kraken CI and then 2) how to set a webhook URL and\na secret in Git hosting service. In the end, the usage of webhooks\nwill be presented by doing a push to Git repository."),(0,i.kt)("h2",{id:"enable-webhooks-in-a-project"},"Enable Webhooks in a Project"),(0,i.kt)("p",null,"In Kraken CI go to your project page and switch to ",(0,i.kt)("inlineCode",{parentName:"p"},"WebHooks"),"\ntab. There are available webhooks for several Git hosting services.\nEnable the one that you are using for hosting your Git repository.\nEnabled webhooks show an actuall webhook URL and a secret. These\ninformation should be copied and set in you webhooks setting page in\nyour Git hosting service."),(0,i.kt)(a.Z,{img:"screen-webhooks.png",mdxType:"Screen"}),(0,i.kt)("h2",{id:"set-webhook-url-in-git-hosting-service"},"Set Webhook URL in Git Hosting Service"),(0,i.kt)("p",null,"The following sections show how to set webhook URL to Kraken CI, a\nsecret that is used to authenticate and they show which event types\nshould be selected that will trigger a new flow in you Kraken CI\nproject."),(0,i.kt)("h3",{id:"github"},"GitHub"),(0,i.kt)(a.Z,{img:"webhooks-github.png",mdxType:"Screen"}),(0,i.kt)("p",null,"The arrows on the picture above indicate where the webhook URL and the\nsecret from your Kraken CI project should be pasted on your GitHub\nrepository webhooks settings page. In case of GitHub two event types\nshould be selected:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pull Requests")," - they will trigger DEV flows in you Kraken CI\nproject, in a branch indicated in the event"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pushes")," - they will trigger CI flows in you Kraken CI project,\nin a branch indicated in the event")),(0,i.kt)("h3",{id:"gitlab"},"GitLab"),(0,i.kt)(a.Z,{img:"webhooks-gitlab.png",mdxType:"Screen"}),(0,i.kt)("p",null,"The arrows on the picture above indicate where the webhook URL and the\nsecret from your Kraken CI project should be pasted on your GitLab\nrepository webhooks settings page. In case of GitLab two event\ntypes should be selected:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Push events")," - they will trigger CI flows in you Kraken CI\nproject, in a branch indicated in the event"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Merge Request events")," - they will trigger DEV flows in you Kraken CI project,\nin a branch indicated in the event")),(0,i.kt)("h3",{id:"gitea"},"Gitea"),(0,i.kt)(a.Z,{img:"webhooks-gitea.png",mdxType:"Screen"}),(0,i.kt)("p",null,"The arrows on the picture above indicate where the webhook URL and the\nsecret from your Kraken CI project should be pasted on your Gitea\nrepository webhooks settings page. In case of GitLab two event\ntypes should be selected:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Push")," - they will trigger CI flows in you Kraken CI project,\nin a branch indicated in the event"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pull Request")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Pull Request Synchronized")," - they will trigger\nDEV flows in you Kraken CI project, in a branch indicated in the event")),(0,i.kt)("h2",{id:"trigger-a-flow"},"Trigger a Flow"),(0,i.kt)("p",null,"Now, in your a folder with source code repository you may invoke git push command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ git push\n")),(0,i.kt)("p",null,"This should trigger a new flow in CI branch in you Kraken CI project."),(0,i.kt)("p",null,"If you create a new branch, do some commits to it, then push this new\nbranch, and then create a pull request (PR) or merge request (MR) in\nyour Git hosting service UI, then all this will trigger a new DEV flow\nthat is a base branch for the PR or MR:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ git checkout -b my-branch\n$ git push --set-upstream origin my-branch\n")),(0,i.kt)("p",null,"That's it!"))}d.isMDXComponent=!0}}]);