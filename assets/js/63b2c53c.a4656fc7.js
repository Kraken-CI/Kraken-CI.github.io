"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[7233],{9639:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var s=a(3117),n=a(102),o=(a(7294),a(4137)),r=a(8742),i=(a(5944),["components"]),l={slug:"last-few-releases",title:"The Last Few Releases",authors:"mike",tags:["kraken","results","charts","secrets","logs"]},m=void 0,p={permalink:"/blog/last-few-releases",editUrl:"https://github.com/kraken-ci/website/edit/master/blog/blog/2022-04-11-last-few-releases.mdx",source:"@site/blog/2022-04-11-last-few-releases.mdx",title:"The Last Few Releases",description:"The last mentioned Kraken CI release on the blog was",date:"2022-04-11T00:00:00.000Z",formattedDate:"April 11, 2022",tags:[{label:"kraken",permalink:"/blog/tags/kraken"},{label:"results",permalink:"/blog/tags/results"},{label:"charts",permalink:"/blog/tags/charts"},{label:"secrets",permalink:"/blog/tags/secrets"},{label:"logs",permalink:"/blog/tags/logs"}],readingTime:2.075,truncated:!0,authors:[{name:"Michal Nowikowski",title:"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.",url:"https://www.linkedin.com/in/godfryd",imageURL:"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4",key:"mike"}],frontMatter:{slug:"last-few-releases",title:"The Last Few Releases",authors:"mike",tags:["kraken","results","charts","secrets","logs"]},nextItem:{title:"Commenting Test Results",permalink:"/blog/commenting-test-results"}},h={authorsImageUrls:[void 0]},d=[{value:"Chart with Pass Ratio History",id:"chart-with-pass-ratio-history",level:3},{value:"Pass Ratio Stats of Flow",id:"pass-ratio-stats-of-flow",level:3},{value:"Secrets Masking",id:"secrets-masking",level:3},{value:"Log Panel Improvements",id:"log-panel-improvements",level:3},{value:"Flow Navigation Improved",id:"flow-navigation-improved",level:3}],g={toc:d};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The last mentioned Kraken CI release on the blog was\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v0.854"},"0.854"),".\nSince then there was several releases:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v0.868"},"0.868"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/releases/tag/v0.909"},"0.909")," and\nthe last one:\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/Kraken-CI/kraken/releases/tag/v0.933"},"0.933")),".\nThey introduce various new features and lots of fixes."),(0,o.kt)("p",null,"The changes include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"added a chart with results history on a flow page"),(0,o.kt)("li",{parentName:"ul"},"added a multi-dimentional table with pass ratio stats of a flow"),(0,o.kt)("li",{parentName:"ul"},"added masking secrets in logs"),(0,o.kt)("li",{parentName:"ul"},"many improvements to the job's log panel like coloring and timestamps on/off"),(0,o.kt)("li",{parentName:"ul"},"added navigation to prev and next flow in breadcrumb on the flow page")),(0,o.kt)("p",null,"More information about these changes is below."),(0,o.kt)("h3",{id:"chart-with-pass-ratio-history"},"Chart with Pass Ratio History"),(0,o.kt)("p",null,"The flow page has now two new tabs. One of them is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Results Charts"),"\ntab.  On this tab, a results history chart can be found.  It presents\na pass ratio line in % units and two more lines: passed and total that\nshows the number of passed tests and the total number of tests over time."),(0,o.kt)(r.Z,{img:"screen-flow-pass-ratio-history.png",mdxType:"Screen"}),(0,o.kt)("h3",{id:"pass-ratio-stats-of-flow"},"Pass Ratio Stats of Flow"),(0,o.kt)("p",null,"On the other tab, ",(0,o.kt)("inlineCode",{parentName:"p"},"Results Stats"),", a table shows tests passing\nstats. The dimensions of the table are dynamic. They can be selected\nfrom dropdowns available over the table. There can be chosen:\n",(0,o.kt)("inlineCode",{parentName:"p"},"Stage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Agents Group")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"System"),"."),(0,o.kt)(r.Z,{img:"screen-flow-pass-ratio-stats.png",mdxType:"Screen"}),(0,o.kt)("h3",{id:"secrets-masking"},"Secrets Masking"),(0,o.kt)("p",null,"Another feature is related to security. Quite often, a password or\nsome access key needs to be passed during build or test\nexecution. Sometimes this secret is revealed in logs. Now Kraken knows\nsecrets defined in a project and it masks them in the logs. The\nsecrets are caught quite early and they do not leave a machine that\ntraced them to logs. The log database stores only masked passwords."),(0,o.kt)("p",null,"There is one interesting property of this masking that cannot be found\nin other CI systems: it can mask multiline secrets like SSH private\nkey."),(0,o.kt)(r.Z,{img:"screen-logs-masked-secrets.png",mdxType:"Screen"}),(0,o.kt)("h3",{id:"log-panel-improvements"},"Log Panel Improvements"),(0,o.kt)("p",null,"There were added several improvements to the log panel:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"coloring ANSI color codes in HTML log box"),(0,o.kt)("li",{parentName:"ul"},"turning timestamps on/off"),(0,o.kt)("li",{parentName:"ul"},"showing missing timestamps"),(0,o.kt)("li",{parentName:"ul"},"log loading indicator")),(0,o.kt)("p",null,"The screens below show colored logs and timestamps that are either\nswitched off or switched on."),(0,o.kt)(r.Z,{img:"screen-log-box-timestamps-off.png",mdxType:"Screen"}),(0,o.kt)(r.Z,{img:"screen-log-box-timestamps-on.png",mdxType:"Screen"}),(0,o.kt)("h3",{id:"flow-navigation-improved"},"Flow Navigation Improved"),(0,o.kt)("p",null,"The last feature presented here is flows navigation. In the breadcrumb\nbar there are shown two arrows that allow for navigating to the\nprevious flow and to the next flow."),(0,o.kt)(r.Z,{img:"screen-flow-navigation.png",mdxType:"Screen"}))}u.isMDXComponent=!0},8742:function(e,t,a){var s=a(7294);t.Z=function(e){var t=e.img;return s.createElement("a",{href:"/img/"+t,target:"blank"},s.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}}))}}}]);