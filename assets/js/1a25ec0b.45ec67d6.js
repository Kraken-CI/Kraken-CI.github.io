"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[8672],{9409:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=s(4848),r=s(8453);const t={id:"features",title:"Features"},o=void 0,l={id:"features",title:"Features",description:"The main differentiators of Kraken CI are:",source:"@site/docs/features.md",sourceDirName:".",slug:"/features",permalink:"/docs/features",draft:!1,unlisted:!1,editUrl:"https://github.com/kraken-ci/website/edit/master/docs/features.md",tags:[],version:"current",frontMatter:{id:"features",title:"Features"},sidebar:"someSidebar",previous:{title:"Philosophy",permalink:"/docs/philosophy"},next:{title:"Demo",permalink:"/docs/demo"}},a={},c=[{value:"Planning",id:"planning",level:2},{value:"Execution",id:"execution",level:2},{value:"Reporting",id:"reporting",level:2},{value:"Administration",id:"administration",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The main differentiators of Kraken CI are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"massive testing support: hunderds thousands of tests per build"}),"\n",(0,i.jsx)(n.li,{children:"focus on hardware testing were hardware is not stable and requires monitoring, rebooting, etc."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The other features can be grouped in 4 areas: ",(0,i.jsx)(n.a,{href:"#planning",children:"planning"}),", ",(0,i.jsx)(n.a,{href:"#execution",children:"execution"}),",\n",(0,i.jsx)(n.a,{href:"#reporting",children:"reporting"})," and ",(0,i.jsx)(n.a,{href:"#administration",children:"administration"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"planning",children:"Planning"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"schema",children:"workflow schema"})," defines scope of jobs and tests with assigned configuration and\nenvironments"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"schema",children:"workflow schema"})," is using\n",(0,i.jsx)(n.a,{href:"https://www.python.org/",children:"Python"}),"/",(0,i.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark",children:"Starlark"})," language"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"schema",children:"workflow schema"})," can be defined directly in Kraken Web UI or\nfetched from project's or from another Git repository"]}),"\n",(0,i.jsx)(n.li,{children:"configurations allow for running the same set of tests but with different parameters"}),"\n",(0,i.jsx)(n.li,{children:"environments indicate execution agent groups and operating systems that should be used for jobs"}),"\n",(0,i.jsx)(n.li,{children:"groups are defined by assigning execution agents to them"}),"\n",(0,i.jsxs)(n.li,{children:["jobs can be triggered by:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["external triggers via ",(0,i.jsx)(n.a,{href:"/docs/guide-webhooks",children:"webhooks"})," (e.g.: from GitHub, GitLab, Gitea or Radicle)"]}),"\n",(0,i.jsx)(n.li,{children:"by a commit to a repository"}),"\n",(0,i.jsx)(n.li,{children:"on time interval"}),"\n",(0,i.jsx)(n.li,{children:"on CRON rule"}),"\n",(0,i.jsx)(n.li,{children:"on given time in a day"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"scope of jobs can be dynamically adjusted based on various criteria using Python/Starlark"}),"\n",(0,i.jsx)(n.li,{children:"Flows and Runs can have custom labels"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/blog/job-designer-and-more-0-962",children:"Job designer"})," that makes preparing workflow schema much easier"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"execution",children:"Execution"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"jobs are assigned to Kraken Agents for execution by a scheduler using FIFO rule"}),"\n",(0,i.jsxs)(n.li,{children:["Agents are running on machines, they can be set up on:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"bare metal machines"}),"\n",(0,i.jsx)(n.li,{children:"virtual machines"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})," environment\nlike:\n",(0,i.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"Compose"}),",\n",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/swarm/",children:"Swarm"}),"\nor ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/",children:"Kubernetes"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://linuxcontainers.org/lxd/introduction/",children:"LXD"})," environment"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Agents may run on several operating systems:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Linux"}),"\n",(0,i.jsx)(n.li,{children:"Windows"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Agents use executors to execute; there are executors that can run jobs:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"locally on current host"}),"\n",(0,i.jsx)(n.li,{children:"in Docker container"}),"\n",(0,i.jsx)(n.li,{children:"in LXD container"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"builds and tests execution is dynamically distributed to multiple\nmachines with Kraken Agents according to indicated environments"}),"\n",(0,i.jsxs)(n.li,{children:["autoscaling in the cloud - Kraken server connected to ",(0,i.jsx)(n.a,{href:"/blog/autoscaling-with-azure-and-aws-ecs",children:"AWS EC2 or ECS,\nAzure VM"})," or ",(0,i.jsx)(n.a,{href:"/blog/autoscaling-with-kubernetes",children:"Kubernetes"})," environments can spawn new machines with Kraken Agents\nwhen there is not enough agents for jobs"]}),"\n",(0,i.jsxs)(n.li,{children:["jobs can return 3 kinds of entities:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"build artifacts - any files like packages, tarballs, RPMs,\ngenerated HTML reports"}),"\n",(0,i.jsxs)(n.li,{children:["test results - they have several states (",(0,i.jsx)(n.code,{children:"not-run"}),", ",(0,i.jsx)(n.code,{children:"passed"}),",\n",(0,i.jsx)(n.code,{children:"failed"}),", ",(0,i.jsx)(n.code,{children:"error"}),", ",(0,i.jsx)(n.code,{children:"disabled"}),", ",(0,i.jsx)(n.code,{children:"unsupported"}),") and key-value pairs\nthat storing e.g. performance results (e.g. FPS or MPS)"]}),"\n",(0,i.jsx)(n.li,{children:"issues - returned by static analyzers, linters, etc"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"tests results and issues are streamed in realtime to Kraken Server\nso if execution crashes the results are preserved"}),"\n",(0,i.jsx)(n.li,{children:"monitoring of machines and agents: if they do not report alive for\nseveral minutes then they are disconnected from pool of available\nmachines"}),"\n",(0,i.jsx)(n.li,{children:"termination on timeout of stages, jobs and particular commands -\nthis way execution farm is behaving predictably and is not e.g.:\nblocked by some broken build that hangs machine or by an infinite\nloop in tests"}),"\n",(0,i.jsx)(n.li,{children:"automatically estimated timeouts for jobs based on passed execution\nso there is no never ending jobs occupying resources"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/tools#custom-tools",children:"custom tools"})," that can be developed and hosted externally"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reporting",children:"Reporting"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["test results and issues in CI are monitored over time; this allows for:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["comparing to previous results and then reporting ",(0,i.jsx)(n.code,{children:"regressions"})," and\n",(0,i.jsx)(n.code,{children:"fixes"})]}),"\n",(0,i.jsxs)(n.li,{children:["presenting ",(0,i.jsx)(n.code,{children:"stability"})," of test cases so it is easy to spot what\ntest should be improved or removed from testing scope"]}),"\n",(0,i.jsx)(n.li,{children:"presenting charts of test case history so it can be observed how\ngiven test case behaved in the past"}),"\n",(0,i.jsx)(n.li,{children:"aging ie. showing how long given result didn't change (or the time\nof the last change of result of given test case)"}),"\n",(0,i.jsx)(n.li,{children:"adding sticky comments to failing results"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"test results and issues in DEV flows are compared to latest CI\nresults so fixes and regressions in changes on a given developer\nbranch are spotted before a merge to the production branch"}),"\n",(0,i.jsxs)(n.li,{children:["support for performance tests:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"on test case can report multiple iterations with a list values"}),"\n",(0,i.jsx)(n.li,{children:"estimation of statistical values are like average, median,\nstandard deviation, covariance and more"}),"\n",(0,i.jsx)(n.li,{children:"presenting on a chart changes of values of given test case over\ntime with indicating median or average"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"performance results are tracked over time and regressions are\ndetected and reported"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/test-results-basics#comments",children:"commenting"})," test results"]}),"\n",(0,i.jsxs)(n.li,{children:["notifications using:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/schema#email",children:"Email"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/schema#slack",children:"Slack"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/schema#discord",children:"Discord"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/schema#github",children:"GitHub"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"administration",children:"Administration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["installing:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["using ",(0,i.jsx)(n.a,{href:"/docs/install-docker-compose",children:"Docker Compose"})]}),"\n",(0,i.jsxs)(n.li,{children:["to ",(0,i.jsx)(n.a,{href:"/docs/install-helm",children:"Kubernetes"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/users",children:"users management"})," with global and per-project ",(0,i.jsx)(n.a,{href:"/docs/users#user-roles",children:"roles"})]}),"\n",(0,i.jsxs)(n.li,{children:["authentication with:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/users#ldap",children:"LDAP"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/users#openid-connect-and-oauth",children:"OpenID Connect and OAuth"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/blog/dark-mode-in-0-945",children:"dark mode"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(6540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);