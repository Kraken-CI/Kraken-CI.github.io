(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[8311],{4137:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),h=o,b=f["".concat(u,".").concat(h)]||f[h]||p[h]||a;return r?n.createElement(b,i(i({ref:t},l),{},{components:r})):n.createElement(b,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2510:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return l},toc:function(){return p},default:function(){return h}});var n=r(4034),o=r(9973),a=(r(7294),r(4137)),i=(r(8742),["components"]),s={slug:"webhooks-for-gitlab-and-gitea",title:"Webhooks for GitLab and Gitea",author:"Michal Nowikowski",author_title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",author_url:"https://www.linkedin.com/in/godfryd",author_image_url:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4",tags:["kraken","git","webhooks"]},u=void 0,c={permalink:"/blog/webhooks-for-gitlab-and-gitea",editUrl:"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-11-12-webhooks-for-gitlab-and-gitea.mdx",source:"@site/blog/2021-11-12-webhooks-for-gitlab-and-gitea.mdx",title:"Webhooks for GitLab and Gitea",description:"The latest release 0.753 release",date:"2021-11-12T00:00:00.000Z",formattedDate:"November 12, 2021",tags:[{label:"kraken",permalink:"/blog/tags/kraken"},{label:"git",permalink:"/blog/tags/git"},{label:"webhooks",permalink:"/blog/tags/webhooks"}],readingTime:.905,truncated:!0,authors:[{name:"Michal Nowikowski",title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",url:"https://www.linkedin.com/in/godfryd",imageURL:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],nextItem:{title:"Autoscaling with Azure and AWS ECS",permalink:"/blog/autoscaling-with-azure-and-aws-ecs"}},l={authorsImageUrls:[void 0]},p=[],f={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The latest release ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v0.753"},"0.753 release"),"\nbrings support for webhooks for 2 new Git hosting services: ",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.org"},"GitLab"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://gitea.io/"},"Gitea"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/quick-start"},"Quick Start")," guide shows how to install Kraken CI."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/guide-webhooks"},"Webhooks Guide")," shows how to use webhooks,\nnow in GitLab, Gitea and GitHub."),(0,a.kt)("p",null,"Webhooks allows for triggering a flow in a branch. The webhook may\ncome now from 3 Git hosting services: GitLab, Gitea and GitHub.  There\nare two kinds of webhook events supported: push and pull request (in\nthe case of GitHub and Gitea) and merge request (in the case of\nGitLab). A push even to a given branch causes a CI flow to be\nstarted. If this is a pull request or a merge request, then a DEV flow\nis started. If a workflow schema checks out sources from this\nrepository, a version indicated in the push or the pull/merge request is\nchecked out."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide-webhooks"},"Webhook Guide")," shows how to configure\nwebhooks in a project, and then how to configure a Git hosting\nservice. In the end, checking out the repository in the workflow\nschema is presented."))}h.isMDXComponent=!0},8742:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.img;return n.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})}}}]);