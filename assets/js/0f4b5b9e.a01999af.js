"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[3941],{5942:function(e,n,a){a.r(n),a.d(n,{assets:function(){return p},contentTitle:function(){return k},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return g}});var o=a(3117),t=a(102),r=(a(7294),a(4137)),l=a(8742),s=(a(5944),["components"]),i={slug:"hello-worlds-in-22-langs-on-kraken-ci",title:"Hello Worlds in 22 Langs on Kraken CI",authors:"mike",tags:["kraken","devops","cicd"]},k=void 0,u={permalink:"/blog/hello-worlds-in-22-langs-on-kraken-ci",editUrl:"https://github.com/kraken-ci/website/edit/master/blog/blog/2022-05-13-hello-worlds-in-22-langs-on-kraken-ci.mdx",source:"@site/blog/2022-05-13-hello-worlds-in-22-langs-on-kraken-ci.mdx",title:"Hello Worlds in 22 Langs on Kraken CI",description:"There is a new, quite funny workflow example for Kraken CI. It shows",date:"2022-05-13T00:00:00.000Z",formattedDate:"May 13, 2022",tags:[{label:"kraken",permalink:"/blog/tags/kraken"},{label:"devops",permalink:"/blog/tags/devops"},{label:"cicd",permalink:"/blog/tags/cicd"}],readingTime:2.485,truncated:!0,authors:[{name:"Michal Nowikowski",title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",url:"https://www.linkedin.com/in/godfryd",imageURL:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4",key:"mike"}],frontMatter:{slug:"hello-worlds-in-22-langs-on-kraken-ci",title:"Hello Worlds in 22 Langs on Kraken CI",authors:"mike",tags:["kraken","devops","cicd"]},prevItem:{title:"Custom Tools",permalink:"/blog/custom-tools"},nextItem:{title:"Job Designer and More - 0.962 Release",permalink:"/blog/job-designer-and-more-0-962"}},p={authorsImageUrls:[void 0]},g=[{value:"Hello World Programs",id:"hello-world-programs",level:3},{value:"Kraken Base Language Images",id:"kraken-base-language-images",level:3},{value:"The Workflow",id:"the-workflow",level:3},{value:"Summary",id:"summary",level:3}],m={toc:g};function c(e){var n=e.components,a=(0,t.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There is a new, quite funny workflow example for Kraken CI. It shows\nhow to compile and run ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World")," programs in various programming\nlanguages, 22 languages."),(0,r.kt)("h3",{id:"hello-world-programs"},"Hello World Programs"),(0,r.kt)("p",null,"Every programmer knows what does ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World")," program looks like."),(0,r.kt)("p",null,"Here is an example in C language:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include<stdio.h>\n\nint main(){\n  printf("Hello World\\n");\n  return 0;\n}\n')),(0,r.kt)("p",null,"But 22? These 22 can be seen in Kraken's repo on GitHub:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kraken-CI/hello-worlds"},"https://github.com/kraken-CI/hello-worlds")),(0,r.kt)("p",null,"Still, there are more languages with ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello Worlds"),".\nThe biggest collection can be found here:\n",(0,r.kt)("a",{parentName:"p",href:"http://helloworldcollection.de/"},"http://helloworldcollection.de/"),"."),(0,r.kt)("p",null,"These are just examples. In our case, they can be compiled and run.\nAfter downloading the repo you may run ",(0,r.kt)("inlineCode",{parentName:"p"},"./run.sh")," script providing\nthe language folder, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./run.sh C\n")),(0,r.kt)("p",null,"This will display, compile and run a C example."),(0,r.kt)("p",null,"In Kraken's case, there is defined a workflow that does it for us for\neach language. But first, we need to have systems with a compiler or a\nruntime for these languages. Docker to the rescue."),(0,r.kt)("h3",{id:"kraken-base-language-images"},"Kraken Base Language Images"),(0,r.kt)("p",null,"For each language, there is prepared a Docker image. They are based on\nofficial images for these languages. For Kraken, they got some extras\nlike Kraken Agent that is running using kraken user (not root)."),(0,r.kt)("p",null,"The list of all lang images is available in ",(0,r.kt)("a",{parentName:"p",href:"/docs/docker-executor#language-images"},"the docs"),"."),(0,r.kt)("h3",{id:"the-workflow"},"The Workflow"),(0,r.kt)("p",null,"The mentioned workflow can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/hello-worlds/blob/main/kraken-workflow.py"},"kraken-workflow.py")," file."),(0,r.kt)("p",null,"In short, it looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def stage(ctx):\n    langs = [\n        (\'C\', \'gcc:11.3\'),\n        (\'C++\', \'gcc:11.3\'),\n        (\'C#\', \'mono:6.12\'),\n        # and more...\n    ]\n\n    jobs = []\n\n    for lang_name, lang_image in langs:\n        jobs.append({\n            "name": "hello world %s" % lang_name,\n            "steps": [{\n            "tool": "git",\n                "checkout": "https://github.com/Kraken-CI/hello-worlds.git",\n                "branch": "main"\n            }, {\n                "tool": "shell",\n                "cmd": "./run.sh %s" % lang_name,\n                "cwd": "hello-worlds"\n            }],\n            "environments": [{\n                "executor": "docker",\n                "system": "krakenci/%s" % lang_image,\n                "agents_group": "all",\n                "config": "default"\n            }]\n        })\n\n    return {\n        "parent": "root",\n        "triggers": {\n            "parent": True,\n        },\n        "parameters": [],\n        "configs": [],\n        "jobs": jobs\n    }\n')),(0,r.kt)("p",null,"As you may notice, the list of jobs is built dynamically.  For each\nentry of the list of tuples (",(0,r.kt)("inlineCode",{parentName:"p"},"lang-name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-image"),"), a job is\ndefined with the same steps but various values for language and Docker\nimage name. The lang name is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"./run.sh")," script in ",(0,r.kt)("inlineCode",{parentName:"p"},"shell"),"\nstep.  And Docker image name is used in the environments section, in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"system")," field. Such a list of jobs is then returned in the whole\nworkflow definition. Each job will be run in parallel in separate\nDocker containers."),(0,r.kt)("p",null,"The example of workflow execution is present in Kraken lab:\n",(0,r.kt)("a",{parentName:"p",href:"https://lab.kraken.ci/runs/5009/jobs"},"https://lab.kraken.ci/runs/5009/jobs"),". Check the workflow definitions in\n",(0,r.kt)("a",{parentName:"p",href:"https://lab.kraken.ci/branches/33"},"branch management page"),"."),(0,r.kt)("p",null,"This screenshot shows the execution of this workflow:"),(0,r.kt)(l.Z,{img:"screen-hello-worlds-execution.png",mdxType:"Screen"}),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This article shows how Kraken CI can build programs written in various\nlanguages. Kraken provides prepared Docker images for many\nlanguages. It is easy to define sophisticated workflows that\ndynamically define jobs that can be run in parallel. In the end, it is\nnice to observe the results of workflow execution in Kraken UI."))}c.isMDXComponent=!0},8742:function(e,n,a){var o=a(7294);n.Z=function(e){var n=e.img;return o.createElement("a",{href:"/img/"+n,target:"blank"},o.createElement("img",{src:"/img/"+n,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}}))}}}]);