"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[5598],{7993:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>h,toc:()=>c});var t=i(4848),o=i(8453),r=i(4074);const s={id:"guide-webhooks",title:"Webhooks Guide"},a=void 0,h={id:"guide-webhooks",title:"Webhooks Guide",description:"Intro",source:"@site/docs/guide-webhooks.mdx",sourceDirName:".",slug:"/guide-webhooks",permalink:"/docs/guide-webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/kraken-ci/website/edit/master/docs/guide-webhooks.mdx",tags:[],version:"current",frontMatter:{id:"guide-webhooks",title:"Webhooks Guide"},sidebar:"someSidebar",previous:{title:"Autoscale Guide",permalink:"/docs/guide-autoscale"},next:{title:"Deployment in Kubernetes",permalink:"/docs/guide-kubernetes"}},l={},c=[{value:"Intro",id:"intro",level:2},{value:"Enable Webhooks in a Project",id:"enable-webhooks-in-a-project",level:2},{value:"Set Webhook URL in Git Hosting Service",id:"set-webhook-url-in-git-hosting-service",level:2},{value:"GitHub",id:"github",level:3},{value:"GitLab",id:"gitlab",level:3},{value:"Gitea",id:"gitea",level:3},{value:"Radicle",id:"radicle",level:3},{value:"Trigger a Flow",id:"trigger-a-flow",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,t.jsx)(n.p,{children:"Kraken CI allows triggering a flow of a branch in a project using a\nwebhook in a Git hosting service. A push to a regular branch e.g. main\nbranch or to a branch associated with a pull or a merge request will cause\na Git hosting service to call a webhook exposed by Kraken CI. To make\nit happen a webhook URL and a secret have to be stored in a project\nsettings in Git hosting service."}),"\n",(0,t.jsx)(n.p,{children:"Currenty there are support the following Git hosting services:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"GitHub"}),"\n",(0,t.jsx)(n.li,{children:"GitLab"}),"\n",(0,t.jsx)(n.li,{children:"Gitea"}),"\n",(0,t.jsx)(n.li,{children:"Radicle"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following guide shows how to configure webhooks: 1) how to enable\nthem in a project in Kraken CI and then 2) how to set a webhook URL and\na secret in Git hosting service. In the end, the usage of webhooks\nwill be presented by doing a push to Git repository."}),"\n",(0,t.jsx)(n.h2,{id:"enable-webhooks-in-a-project",children:"Enable Webhooks in a Project"}),"\n",(0,t.jsxs)(n.p,{children:["In Kraken CI go to your project page and switch to ",(0,t.jsx)(n.code,{children:"WebHooks"}),"\ntab. There are available webhooks for several Git hosting services.\nEnable the one that you are using for hosting your Git repository.\nEnabled webhooks show an actuall webhook URL and a secret. These\ninformation should be copied and set in you webhooks setting page in\nyour Git hosting service."]}),"\n",(0,t.jsx)(r.A,{img:"screen-webhooks.png"}),"\n",(0,t.jsx)(n.h2,{id:"set-webhook-url-in-git-hosting-service",children:"Set Webhook URL in Git Hosting Service"}),"\n",(0,t.jsx)(n.p,{children:"The following sections show how to set webhook URL to Kraken CI, a\nsecret that is used to authenticate and they show which event types\nshould be selected that will trigger a new flow in you Kraken CI\nproject."}),"\n",(0,t.jsx)(n.h3,{id:"github",children:"GitHub"}),"\n",(0,t.jsx)(r.A,{img:"webhooks-github.png"}),"\n",(0,t.jsx)(n.p,{children:"The arrows on the picture above indicate where the webhook URL and the\nsecret from your Kraken CI project should be pasted on your GitHub\nrepository webhooks settings page. In case of GitHub two event types\nshould be selected:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Pull Requests"})," - they will trigger DEV flows in you Kraken CI\nproject, in a branch indicated in the event"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Pushes"})," - they will trigger CI flows in you Kraken CI project,\nin a branch indicated in the event"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"gitlab",children:"GitLab"}),"\n",(0,t.jsx)(r.A,{img:"webhooks-gitlab.png"}),"\n",(0,t.jsx)(n.p,{children:"The arrows on the picture above indicate where the webhook URL and the\nsecret from your Kraken CI project should be pasted on your GitLab\nrepository webhooks settings page. In case of GitLab two event\ntypes should be selected:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Push events"})," - they will trigger CI flows in you Kraken CI\nproject, in a branch indicated in the event"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Merge Request events"})," - they will trigger DEV flows in you Kraken CI project,\nin a branch indicated in the event"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"gitea",children:"Gitea"}),"\n",(0,t.jsx)(r.A,{img:"webhooks-gitea.png"}),"\n",(0,t.jsx)(n.p,{children:"The arrows on the picture above indicate where the webhook URL and the\nsecret from your Kraken CI project should be pasted on your Gitea\nrepository webhooks settings page. In case of GitLab two event\ntypes should be selected:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Push"})," - they will trigger CI flows in you Kraken CI project,\nin a branch indicated in the event"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Pull Request"})," and ",(0,t.jsx)(n.code,{children:"Pull Request Synchronized"})," - they will trigger\nDEV flows in you Kraken CI project, in a branch indicated in the event"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"radicle",children:"Radicle"}),"\n",(0,t.jsxs)(n.p,{children:["The setup on Radicle side is more complicated. The details can be\nfound in a dedicated article: ",(0,t.jsx)(n.a,{href:"/blog/integration-with-radicle",children:"Integration with\nRadicle"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"trigger-a-flow",children:"Trigger a Flow"}),"\n",(0,t.jsx)(n.p,{children:"Now, in your a folder with source code repository you may invoke git push command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ git push\n"})}),"\n",(0,t.jsx)(n.p,{children:"This should trigger a new flow in CI branch in you Kraken CI project."}),"\n",(0,t.jsx)(n.p,{children:"If you create a new branch, do some commits to it, then push this new\nbranch, and then create a pull request (PR) or merge request (MR) in\nyour Git hosting service UI, then all this will trigger a new DEV flow\nthat is a base branch for the PR or MR:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ git checkout -b my-branch\n$ git push --set-upstream origin my-branch\n"})}),"\n",(0,t.jsx)(n.p,{children:"That's it!"})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4074:(e,n,i)=>{i.d(n,{A:()=>o});i(6540);var t=i(4848);const o=e=>{let{img:n}=e;return(0,t.jsx)("a",{href:"/img/"+n,target:"blank",children:(0,t.jsx)("img",{src:"/img/"+n,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})})}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(6540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);