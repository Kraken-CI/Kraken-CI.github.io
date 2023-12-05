"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[397],{8413:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(3117),o=n(102),s=(n(7294),n(4137)),r=(n(8742),n(5944),["components"]),i={slug:"windows-support-in-agent",title:"Windows Support in Kraken Agent",authors:"mike",tags:["kraken","devops","cicd","windows"]},l=void 0,p={permalink:"/blog/windows-support-in-agent",editUrl:"https://github.com/kraken-ci/website/edit/master/blog/blog/2023-10-15-windows-support-in-agent.mdx",source:"@site/blog/2023-10-15-windows-support-in-agent.mdx",title:"Windows Support in Kraken Agent",description:"Kraken version 1.5",date:"2023-10-15T00:00:00.000Z",formattedDate:"October 15, 2023",tags:[{label:"kraken",permalink:"/blog/tags/kraken"},{label:"devops",permalink:"/blog/tags/devops"},{label:"cicd",permalink:"/blog/tags/cicd"},{label:"windows",permalink:"/blog/tags/windows"}],readingTime:1.785,hasTruncateMarker:!0,authors:[{name:"Michal Nowikowski",title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",url:"https://www.linkedin.com/in/godfryd",imageURL:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4",key:"mike"}],frontMatter:{slug:"windows-support-in-agent",title:"Windows Support in Kraken Agent",authors:"mike",tags:["kraken","devops","cicd","windows"]},prevItem:{title:"Windows Support in AWS",permalink:"/blog/windows-support-in-aws"},nextItem:{title:"Environment Variables",permalink:"/blog/env-vars"}},c={authorsImageUrls:[void 0]},u=[],k={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Kraken version ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v1.5"},"1.5"),"\nintroduces support for Windows in the Kraken Agent. This means that it\nis now possible to execute jobs on Windows systems using Kraken CI."),(0,s.kt)("p",null,"The 1.5 release brings several more changes and fixes. To see the details,\nplease check the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v1.5"},"the release notes"),".\nSome of the changes included are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"fixed detecting Kraken Agent environment when it is run inside Docker that is using CGroup v2 - this solves ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/Kraken-CI/kraken/issues/303"},"#303")),(0,s.kt)("li",{parentName:"ul"},"fixed triggering a flow by GitHub webhook when another flow is in progress - this solves ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/Kraken-CI/kraken/issues/296"},"#296")),(0,s.kt)("li",{parentName:"ul"},"fixed handling multiline secrets"),(0,s.kt)("li",{parentName:"ul"},"improved handling agent inactivity - now it is not needed to reenable agent when it was disabled due to inactivity")),(0,s.kt)("p",null,"More details about the support for Windows are provided below."),(0,s.kt)("p",null,"Information about the Kraken Agent installation on Windows can be\nfound in ",(0,s.kt)("a",{parentName:"p",href:"/docs/agents"},"Agent Setup Guide"),"."),(0,s.kt)("p",null,"With enabling Kraken Agent on Windows, support for this system was also added to some Kraken tools:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/schema#shell"},"shell tool")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/schema#artifacts"},"artifacts tool"))),(0,s.kt)("p",null,"This means that now it is possible to execute windows shell commands."),(0,s.kt)("p",null,"The following example shows how to define a shell or, rather, cmd\nbatch script:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'  {\n    "tool": "shell",\n    "script": """\n       rem This is a windows batch comment\n       echo \'hello world\'\n       dir c:\\\\\n    """\n  }\n')),(0,s.kt)("p",null,"or this example showing ",(0,s.kt)("inlineCode",{parentName:"p"},"PowerShell")," as custom shell executable:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'  {\n    "tool": "shell",\n    "shell_exe": "powershell.exe",\n    "script": """\n       Write-Host \'hello\'\n       Get-Service kkagent\n    """\n  }\n')),(0,s.kt)("p",null,"The Artifacts tool is now also working on Windows.\nCheck the following job steps:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'  {\n    // create some content\n    "tool": "shell",\n    "cmd": "mkdir abc && echo \'hello world\' > abc/a.txt"\n  }, {\n    // upload the content to Kraken Storage\n    "tool": "artifacts",\n    "source": "abc"\n  },\n  ...\n  {\n    // download the uploaded content\n    "tool": "artifacts",\n    "action": "download",\n    "source": "abc"\n  }, {\n    // check the content\n    "tool": "shell",\n    "script": """\n       dir\n       type abc\\\\a.txt\n    """\n  }\n')),(0,s.kt)("p",null,"That's all. To get started, simply install or upgrade to the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v1.5"},"1.5 version")," and\nexperience all the benefits firsthand. If you have any questions or\nneed assistance, submit an issue on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/issues"},"GitHub"),"\nor ask for help on ",(0,s.kt)("a",{parentName:"p",href:"https://discord.gg/bEw7Pemn"},"Discord"),"."))}d.isMDXComponent=!0},8742:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.img;return a.createElement("a",{href:"/img/"+t,target:"blank"},a.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}}))}}}]);