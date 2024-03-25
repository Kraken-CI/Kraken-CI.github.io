"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[5162],{2616:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(3117),i=n(102),r=(n(7294),n(4137)),s=(n(8742),n(5944),["components"]),o={slug:"windows-support-in-aws",title:"Windows Support in AWS",authors:"mike",tags:["kraken","devops","cicd","windows"]},l=void 0,p={permalink:"/blog/windows-support-in-aws",editUrl:"https://github.com/kraken-ci/website/edit/master/blog/blog/2023-12-05-windows-support-in-aws.mdx",source:"@site/blog/2023-12-05-windows-support-in-aws.mdx",title:"Windows Support in AWS",description:"Kraken version 1.6",date:"2023-12-05T00:00:00.000Z",formattedDate:"December 5, 2023",tags:[{label:"kraken",permalink:"/blog/tags/kraken"},{label:"devops",permalink:"/blog/tags/devops"},{label:"cicd",permalink:"/blog/tags/cicd"},{label:"windows",permalink:"/blog/tags/windows"}],readingTime:1.26,hasTruncateMarker:!0,authors:[{name:"Michal Nowikowski",title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",url:"https://www.linkedin.com/in/godfryd",imageURL:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4",key:"mike"}],frontMatter:{slug:"windows-support-in-aws",title:"Windows Support in AWS",authors:"mike",tags:["kraken","devops","cicd","windows"]},prevItem:{title:"Integration with Radicle",permalink:"/blog/integration-with-radicle"},nextItem:{title:"Windows Support in Kraken Agent",permalink:"/blog/windows-support-in-agent"}},u={authorsImageUrls:[void 0]},d=[],c={toc:d};function k(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kraken version ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v1.6"},"1.6"),"\nintroduces support for Windows in deploying a virtual machine with the\nKraken Agent on AWS EC2. This means that it is now possible to execute\njobs on Windows systems in the AWS EC2 environment."),(0,r.kt)("p",null,"The 1.6 release brings several more changes and fixes. To see the details,\nplease check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v1.6"},"the release notes"),".\nSome of the changes included are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"added link to docs page in the top bar"),(0,r.kt)("li",{parentName:"ul"},"added checking agents group correctness provided in schema"),(0,r.kt)("li",{parentName:"ul"},"several fixes")),(0,r.kt)("p",null,"More details about the support for Windows in AWS EC2 are provided below (",(0,r.kt)("a",{parentName:"p",href:"/blog/windows-support-in-aws"},"Read More"),")."),(0,r.kt)("p",null,"There are a few requirements for an AWS AMI Windows image to make it\nwork with Kraken CI. It should have preinstalled Python and Git. The\ngenerated image should also have the ability to run a ",(0,r.kt)("inlineCode",{parentName:"p"},"user data"),"\nscript on the first boot. This script is used to install the Kraken\nAgent and your own init script (which can be passed via Kraken)."),(0,r.kt)("p",null,"Here, you can find an example script for Ansible that prepares an AWS\nAMI image for Windows with all the dependencies included:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/tree/master/base-images/aws-ec2-win-ansible"},"https://github.com/Kraken-CI/kraken/tree/master/base-images/aws-ec2-win-ansible")),(0,r.kt)("p",null,"The full guide about setting up Kraken execution agents in AWS EC2 can\nbe found in ",(0,r.kt)("a",{parentName:"p",href:"/docs/autoscale-in-cloud"},"Autoscale in Cloud docs"),"."),(0,r.kt)("p",null,"That's all. To get started, simply install or upgrade to the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v1.6"},"1.6 version")," and\nexperience all the benefits firsthand. If you have any questions or\nneed assistance, submit an issue on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/issues"},"GitHub"),"\nor ask for help on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/bEw7Pemn"},"Discord"),"."))}k.isMDXComponent=!0},8742:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.img;return a.createElement("a",{href:"/img/"+t,target:"blank"},a.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}}))}}}]);