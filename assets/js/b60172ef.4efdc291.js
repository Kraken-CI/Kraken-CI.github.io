"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[1813],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=u(n),p=o,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||s;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var u=2;u<s;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8742:function(e,t,n){var i=n(7294);t.Z=function(e){var t=e.img;return i.createElement("a",{href:"/img/"+t,target:"blank"},i.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}}))}},6731:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var i=n(3117),o=n(102),s=(n(7294),n(4137)),a=(n(8742),n(3944)),r=["components"],l={id:"other-ci-systems",title:"Other CI Systems"},u=void 0,c={unversionedId:"other-ci-systems",id:"other-ci-systems",title:"Other CI Systems",description:"Introduction",source:"@site/docs/other-ci-systems.mdx",sourceDirName:".",slug:"/other-ci-systems",permalink:"/docs/other-ci-systems",draft:!1,editUrl:"https://github.com/kraken-ci/website/edit/master/docs/other-ci-systems.mdx",tags:[],version:"current",frontMatter:{id:"other-ci-systems",title:"Other CI Systems"},sidebar:"someSidebar",previous:{title:"Others",permalink:"/docs/others"},next:{title:"Other Test Results Analysis Tools",permalink:"/docs/other-test-results-analysis-tools"}},d={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Jenkins",id:"jenkins",level:2},{value:"Bright Side",id:"bright-side",level:3},{value:"Dark Side",id:"dark-side",level:3},{value:"1. Plugin Overload and Compatibility Issues",id:"1-plugin-overload-and-compatibility-issues",level:4},{value:"2. Bad User Experience in UI",id:"2-bad-user-experience-in-ui",level:4},{value:"3. Reliance on Groovy Scripting",id:"3-reliance-on-groovy-scripting",level:4},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Bright Side",id:"bright-side-1",level:3},{value:"Dark Side",id:"dark-side-1",level:3},{value:"1. Poor, not Scalable UI/UX",id:"1-poor-not-scalable-uiux",level:4},{value:"2. Reusability Is Quite Hard",id:"2-reusability-is-quite-hard",level:4},{value:"3. Cloud and Security",id:"3-cloud-and-security",level:4},{value:"GitLab CI",id:"gitlab-ci",level:2},{value:"Bright Side",id:"bright-side-2",level:3},{value:"Dark Side",id:"dark-side-2",level:3},{value:"1. Too complex in advanced cases",id:"1-too-complex-in-advanced-cases",level:4}],p={toc:h};function f(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"In this section, three CI/CD tools will be compared with Kraken\nCI. These tools are among the most popular systems:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://www.jenkins.io/"},"Jenkins")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/features/actions"},"GitHub Actions")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://about.gitlab.com/features/continuous-integration/"},"GitLab CI"))),(0,s.kt)("p",null,"The most significant difference between Kraken CI and these three\nsystems, as well as other CI/CD systems, is that they lack test result\nanalytics. All three systems barely touch upon the topic and are only\nable to report results acquired during a build."),(0,s.kt)("p",null,"Having only information about passes and failures, it is difficult to\nmake a decision. It is not known if this failure has appeared\nbefore. Maybe it has been failing for several months, or perhaps it is\nsporadic and only fails from time to time. Alternatively, it could be\na significant regression that requires urgent fixing."),(0,s.kt)("p",null,"This requires either using other third-party tools that can fill this\ngap or developing custom scripts that can analyze the results and\ngenerate comprehensive reports."),(0,s.kt)("p",null,"In contrast, Kraken CI focuses on this topic and excels in both\nexecution and results analytics. It can show:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"fixes and regressions,"),(0,s.kt)("li",{parentName:"ul"},"age of test result,"),(0,s.kt)("li",{parentName:"ul"},"stability of a test case,"),(0,s.kt)("li",{parentName:"ul"},"importance of negative test result,"),(0,s.kt)("li",{parentName:"ul"},"history of a test case in a table and in a chart,"),(0,s.kt)("li",{parentName:"ul"},"total results chart ie. pass ratio over time,"),(0,s.kt)("li",{parentName:"ul"},"pass ratio chart for selected subset of tests (e.g. tests results obtain on particular operating system).")),(0,s.kt)("p",null,"Furthermore, it allows users to comment on test results, such as\nreferencing a submitted bug or identifying the root cause, among other\nthings."),(0,s.kt)("p",null,"The details are presented\nin ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-results-basics"},"Test Results Basics"),"\nand ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-results-tracking"},"Test Results Tracking"),"\nof Kraken CI docs."),(0,s.kt)("p",null,"But now let's discuss the differences between specific CI/CD systems."),(0,s.kt)("h2",{id:"jenkins"},"Jenkins"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.jenkins.io/"},"Jenkins")," is an open-source on-premises\nautomation server used for building, testing, and deploying\nsoftware. It offers a broad range of plugins and integrations that\nsupport continuous integration and continuous delivery\nworkflows. Jenkins is widely used in software development and is\nrecognized for its flexibility and extensibility."),(0,s.kt)("h3",{id:"bright-side"},"Bright Side"),(0,s.kt)("p",null,"Jenkins has many powerful features, with one of the most prominent\nbeing its flexible and convenient method for defining pipelines using\nscripting code."),(0,s.kt)("p",null,"Another very positive aspect of Jenkins is its community. The\ncommunity, besides providing lots of blog posts and tutorials about\nJenkins, also develops many plugins that greatly improve Jenkins."),(0,s.kt)("h3",{id:"dark-side"},"Dark Side"),(0,s.kt)("h4",{id:"1-plugin-overload-and-compatibility-issues"},"1. Plugin Overload and Compatibility Issues"),(0,s.kt)("p",null,"Jenkins relies heavily on plugins for extended functionality. However,\nthe sheer number of plugins available can make it challenging to\nselect, manage, and maintain the right set of plugins. Plugin\ncompatibility and stability issues can also arise, leading often to\nconflicts or performance problems."),(0,s.kt)("p",null,"Kraken CI has a different approach. All of its features are built-in,\nwhich ensures compatibility and thorough cross testing. Users are\nencouraged to contribute directly to the core of Kraken CI. The only\nextensions available to users are ",(0,s.kt)("a",{parentName:"p",href:"/docs/tools"},"tools"),", which enable\nthe integration of third-party tools with Kraken CI. This is similar\nto third-party actions in GitHub Actions."),(0,s.kt)("h4",{id:"2-bad-user-experience-in-ui"},"2. Bad User Experience in UI"),(0,s.kt)("p",null,"Jenkins' user interface (UI) is often criticized for being outdated\nand not user-friendly. There is a dichotomy between the classic UI and\nthe Ocean Blue UI. Both show more or less the same things, but one is\nbetter in some areas, while the other is better in other areas. This\nleads to confusion."),(0,s.kt)("p",null,"Many UI pages in Jenkins lack usability. Some areas are exceptionally\nbad, such as presenting logs. When the logs are very large, Jenkins\nshows them very slowly, especially if timestamps are\nenabled. Sometimes the UI freezes completely and cannot show\nanything. There is also a page called ",(0,s.kt)("inlineCode",{parentName:"p"},"Pipeline Steps")," that shows logs\nfor each step separately, but there are so many internal steps\npresented that it is very hard to navigate."),(0,s.kt)("p",null,"Presenting logs in Kraken CI is impressive. They are divided by\ndefault into steps that the user has defined in a workflow, or they\nare displayed in a flat format. Users can enable internal logs to see\ndetails, and loading logs is paged, so it is not necessary to load the\nentire log at once. However, it is still possible to download the\nentire log in raw format. Logs can be filtered by multiple fields and\nviewed at the individual step level, job level, run, flow, branch, or\nproject levels. ANSI codes are colored, and there are many more\nfeatures. Check out these two blog posts that present these features:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/blog/standing-out-logs-handling"},"Standing out Logs Handling"),"\nand\n",(0,s.kt)("a",{parentName:"p",href:"/blog/further-logging-improvements"},"Further Logging Improvements"),"."),(0,s.kt)("p",null,"There are more examples like that. For instance, navigation, browsing\ntest results, and so on. In Kraken CI, all of these aspects were\nthoughtfully reevaluated and engineered with user experience (UX) in\nmind."),(0,s.kt)("h4",{id:"3-reliance-on-groovy-scripting"},"3. Reliance on Groovy Scripting"),(0,s.kt)("p",null,"Jenkins pipelines, which are used to define CI/CD workflows, are\nwritten in Groovy scripting language. While this provides flexibility\nand extensibility, it requires from developers to learn and use Groovy,\nwhich can be an additional learning curve for teams not familiar with\nGroovy."),(0,s.kt)("p",null,"In the case of Kraken CI, Python is used as the language to define\nworkflows. According to the ",(0,s.kt)("a",{parentName:"p",href:"https://www.tiobe.com/tiobe-index/"},"TIOBE Index"),",\nPython is ranked number 1, making it the most popular programming language,\nwhile Groovy is ranked 44th."),(0,s.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions")," is a powerful\nand flexible automation platform that allows you to streamline and\noptimize your software development workflows. With GitHub Actions, you\ncan automate tasks, build, test, and deploy your applications directly\nfrom your GitHub repositories."),(0,s.kt)("h3",{id:"bright-side-1"},"Bright Side"),(0,s.kt)("p",null,"The biggest advantage of GH Actions is that it is integrated with\nGitHub repositories, and it is free up to a certain usage level. In\naddition, it allows for the extension of defined workflows by using\ncommunity-developed actions. The number of available third-party\nactions is quite substantial."),(0,s.kt)("p",null,'It is also possible to expand the computing power by connecting your\nown "self-hosted" machines to the pool of all machines. Therefore,\nworkflows can run on both GitHub\'s machine cluster and on your own\non-premises machines.'),(0,s.kt)("p",null,"Aside from that, GitHub Actions can do more than just CI/CD. Workflows\ncan be triggered for various project events, such as a new issue being\nsubmitted, a new comment being added to an issue, a repository being\nforked, a release being created, and more."),(0,s.kt)("h3",{id:"dark-side-1"},"Dark Side"),(0,s.kt)("h4",{id:"1-poor-not-scalable-uiux"},"1. Poor, not Scalable UI/UX"),(0,s.kt)("p",null,"The user interface is cluttered and does not scale well for larger\nprojects. When a workflow reuses other workflows, the job names become\nexcessively long and are frequently truncated in multiple areas within\nthe UI. This makes it difficult to identify which jobs we are\ncurrently viewing. The problem is further compounded when nested\nworkflows are utilized."),(0,s.kt)("p",null,"The UI also does not scale well for a larger number of jobs. If there\nare more than 30 jobs in a workflow, it becomes impossible to filter,\nsort, or list them in pages. Instead, all jobs are just presented to\nyou in a flat list."),(0,s.kt)("p",null,"One more weakness is the logs panel. Initially, it appears to be\nsleek. Nonetheless, if there are numerous steps and the logs are quite\nextensive, containing thousands of lines, then navigation becomes\ndifficult. While jobs are in progress, the UI attempts to predict what\nto display, causing it to jump from one location to another, making it\ndifficult to choose the correct step. Additionally, paging through the\nlogs is not feasible. They are all displayed at once and are\nprogressively loaded while scrolling down. This is a pretty\nineffective method of finding the appropriate location in the log if\nthe log contains hundreds of pages."),(0,s.kt)("p",null,"Kraken's logging facilities in the UI were already described in the\nJenkins section. In terms of UI scalability, this is one of Kraken's\ngoals. It is designed from the ground up to handle multiple jobs, up\nto thousands or even tens of thousands. It provides means for\nfiltering and sorting jobs, and presenting workflows, even those that\nare more complicated and involve multiple forks, in a more scalable\nway than GH Actions."),(0,s.kt)("h4",{id:"2-reusability-is-quite-hard"},"2. Reusability Is Quite Hard"),(0,s.kt)("p",null,"Initially, it seems that reusability is well supported in GH Actions\nworkflow using third-party actions and reusable workflows. However,\nupon closer inspection, it is not as seamless as it\nappears. Externalizing some parts of the workflow into reusable\nactions or workflows can be quite tedious. If there is a need to\nlocally reuse a fragment of code, one would like to use the YAML\nfeature called anchors and aliases. Unfortunately, GH Actions does not\nsupport this feature."),(0,s.kt)("p",null,"The situation becomes complicated if a user needs to maintain multiple\nrepositories. Certain parts of workflows can be reused, but the\nframework of the workflow, including trigger definitions, global\nenvironment variables, and main jobs (which may reference reusable\nworkflows), must be present in every repository. Ideally, one would\nlike to fully externalize the entire workflow to a single repository\nand simply reference it in every other repository."),(0,s.kt)("p",null,"Kraken allows for defining a workflow for particular repository in\nseveral way. The workflow definition can be stored"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"in Kraken server,"),(0,s.kt)("li",{parentName:"ol"},"in the same repository,"),(0,s.kt)("li",{parentName:"ol"},"in another repository.")),(0,s.kt)("p",null,"In the first case, the entire workflow definition resides in the\nKraken server's database. It is then possible to link the workflow\ndefinition to any Git repository - whether it is the repository that\nneeds to be built and tested or any other repository. This makes it\neasy to experiment with a workflow for any repository without the need\nto make changes. Later on, it is easy to transfer that workflow to the\nrelevant repository. Furthermore, the entire workflow definition can\nbe extracted to a separate repository and reused in multiple other\nrepositories."),(0,s.kt)("h4",{id:"3-cloud-and-security"},"3. Cloud and Security"),(0,s.kt)("p",null,"GitHub Actions is a cloud-based CI/CD tool, which means that its\nreliability and availability are out of your control. If an outage\noccurs, the only thing left for you to do is wait until GitHub's team\nfixes their services. This may last from a few minutes to a few hours."),(0,s.kt)("p",null,"Although GitHub Actions provides security features like access\ncontrols, secrets management, and vulnerability scanning, it may not\nfulfill the specific security or compliance requirements of all\norganizations or industries. Organizations with stringent security or\ncompliance needs must evaluate GitHub Actions' security features\ncarefully and ensure that they align with their requirements."),(0,s.kt)("h2",{id:"gitlab-ci"},"GitLab CI"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://about.gitlab.com/features/continuous-integration/"},"GitLab CI"),"\nis a comprehensive DevOps platform that combines source code\nmanagement, CI/CD pipelines, issue tracking, and more in a single\nintegrated solution. It enables organizations to streamline their\nsoftware development processes, promote collaboration, and achieve\nfaster and more efficient delivery of high-quality software."),(0,s.kt)("h3",{id:"bright-side-2"},"Bright Side"),(0,s.kt)("p",null,"GitLab CI enables the definition of pipelines as code by using a\nYAML configuration file. This approach makes the CI/CD process\nversion-controlled, easily replicable, and auditable. Infrastructure\nmodifications, test scripts, and deployment steps can be defined\nalongside the code, promoting transparency and collaboration."),(0,s.kt)("p",null,"Furthermore, GitLab is offered as software that can be installed\non-premises, as well as a service that can be used in the cloud. This\nway, it combines the software aspect of Jenkins with the cloud service\naspect of GitHub Actions in one solution. The choice belongs to the user."),(0,s.kt)("p",null,"GitLab offers a wide range of features and integrations, with most of\nthem only available in the Enterprise Edition. These features include\ncode quality checks. Another strong aspect of GitLab is its\nreusability, as it is easy to reuse fragments of YAML definitions\nthanks to anchors in the language."),(0,s.kt)("h3",{id:"dark-side-2"},"Dark Side"),(0,s.kt)("h4",{id:"1-too-complex-in-advanced-cases"},"1. Too complex in advanced cases"),(0,s.kt)("p",null,"The learning curve for GitLab CI/CD is rather steep, and some poor\ndesign decisions have made configuring CI/CD pipelines in the\n",(0,s.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml")," file quite complex. The documentation is full of\nnotes that certain aspects are not obvious, discouraged, or may\nbehave unexpectedly. Furthermore, the issue tracker is filled with\nproblems related to excessively complicated features."),(0,s.kt)("p",null,"One of the problems is that a CI pipeline is triggered by all possible\nevents. Then it is user role to explicitly exclude which jobs should\nbe run or not for particular event. Sometimes it leads to situations\nthat a pipeline is triggered multiple times. There is a dedicated\nsection in the docs how to avoid such cases:\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/jobs/job_control.html#avoid-duplicate-pipelines"},"https://docs.gitlab.com/ee/ci/jobs/job_control.html#avoid-duplicate-pipelines")),(0,s.kt)("p",null,"All of these factors make developing more advanced workflows quite\nchallenging."),(0,s.kt)("p",null,"In contrast, Kraken is more deterministic. Workflows are triggered by\nuser-indicated events, and it is clear why a given workflow was\nstarted - this information is presented in the UI."),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)(a.qw,{shortname:"kraken-ci",config:{url:"https://kraken.ci/docs/other-ci-systems",identifier:"other-ci-systems",title:"Other CI Systems"},mdxType:"DiscussionEmbed"}))}f.isMDXComponent=!0}}]);