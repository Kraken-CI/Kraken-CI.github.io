(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(6),r=(a(0),a(85)),s={id:"overview",title:"Overview"},o={unversionedId:"overview",id:"overview",isDocsHomePage:!0,title:"Overview",description:"Kraken CI is a continuous integration and testing system.",source:"@site/docs/overview.md",permalink:"/docs/",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/overview.md",sidebar:"someSidebar",next:{title:"Philosophy",permalink:"/docs/philosophy"}},l=[{value:"Features",id:"features",children:[]}],c={rightToc:l};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Kraken CI is a continuous integration and testing system."),Object(r.b)("p",null,"Kraken CI takes as input build scripts and different kinds of testing and validations tools\nand outputs build artifacts, test results, found regression and fixes, and other issues."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/kraken-diagram.png",alt:"Kraken Diagram"}))),Object(r.b)("p",null,"The whole work needs to be defined in workflow schema in Kraken CI that is arranged in stages and jobs.\nThen Kraken CI is executing it for production branches (like main branch or release branches)\nor for developer branches to validate the changes before merging them."),Object(r.b)("h2",{id:"features"},"Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"jobs can report or return 3 kinds of entities:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"build artifacts - any files like packages, tarballs, RPMs, generated HTML reports"),Object(r.b)("li",{parentName:"ul"},"test results - they have several states (",Object(r.b)("inlineCode",{parentName:"li"},"not-run"),", ",Object(r.b)("inlineCode",{parentName:"li"},"passed"),", ",Object(r.b)("inlineCode",{parentName:"li"},"failed"),", ",Object(r.b)("inlineCode",{parentName:"li"},"error"),", ",Object(r.b)("inlineCode",{parentName:"li"},"disabled"),", ",Object(r.b)("inlineCode",{parentName:"li"},"unsupported"),")\nand key-value pairs that storing e.g. performance results (e.g. FPS or MPS)"),Object(r.b)("li",{parentName:"ul"},"issues - returned by static analyzers, linters, etc"))),Object(r.b)("li",{parentName:"ul"},"test results and issues are monitored over time, compared to previous ones and then ",Object(r.b)("inlineCode",{parentName:"li"},"regressions")," and ",Object(r.b)("inlineCode",{parentName:"li"},"fixes")," are reported\nas well as ",Object(r.b)("inlineCode",{parentName:"li"},"stability")," of test cases"),Object(r.b)("li",{parentName:"ul"},"charts with test case history so it can be observed how given test case behaved in the past"),Object(r.b)("li",{parentName:"ul"},"support for performance tests so multiple iterations of the same tests are comprehended\nand statistical values are estimated like average, median, standard deviation, covariance and more"),Object(r.b)("li",{parentName:"ul"},"performance results are tracked over time and regressions are detected and reported"),Object(r.b)("li",{parentName:"ul"},"builds and tests execution is dynamically distributed to multiple machines"),Object(r.b)("li",{parentName:"ul"},"stores build artifacts internally"),Object(r.b)("li",{parentName:"ul"},"supports massive testing: hunderds tousands of unit tests"),Object(r.b)("li",{parentName:"ul"},"executors:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"direct"),Object(r.b)("li",{parentName:"ul"},"Docker"),Object(r.b)("li",{parentName:"ul"},"LXD"))),Object(r.b)("li",{parentName:"ul"},"and much more")))}d.isMDXComponent=!0}}]);