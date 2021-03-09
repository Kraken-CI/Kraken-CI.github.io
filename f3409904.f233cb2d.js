(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"Screen",(function(){return b})),n.d(t,"default",(function(){return u}));var s=n(3),r=n(7),a=(n(0),n(119)),i={id:"test-results",title:"Test Results"},l={unversionedId:"test-results",id:"test-results",isDocsHomePage:!1,title:"Test Results",description:"<img",source:"@site/docs/test-results.mdx",slug:"/test-results",permalink:"/docs/test-results",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/test-results.mdx",version:"current",sidebar:"someSidebar",previous:{title:"LXD Executor",permalink:"/docs/lxd-executor"},next:{title:"Agents",permalink:"/docs/agents"}},o=[{value:"Branch Results",id:"branch-results",children:[]},{value:"Run Box",id:"run-box",children:[]},{value:"Test Case Results Table",id:"test-case-results-table",children:[]},{value:"Filtering Test Case Results",id:"filtering-test-case-results",children:[]},{value:"Sorting Test Case Results",id:"sorting-test-case-results",children:[]},{value:"Test Case History",id:"test-case-history",children:[]}],b=function(e){var t=e.img;return Object(a.b)("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})},c={toc:o,Screen:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"branch-results"},"Branch Results"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Branch Results")," page presents high level information about flows\nand runs of given branch.. It organizes flows in rows. The top row\ncontains the latest flow. Each flow row contains list of boxes. Each\nbox contains information about a run of given stage. The order of\nboxes with runs is chronological according to their start time."),Object(a.b)(b,{img:"screen-branch-results-2.png",mdxType:"Screen"}),Object(a.b)("h2",{id:"run-box"},"Run Box"),Object(a.b)("p",null,"The color of run box indicates final status of the run:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"red: one or more jobs finished with an error"),Object(a.b)("li",{parentName:"ul"},"yellow: no errors in jobs but some test results failed or there are\nissues discovered in the code"),Object(a.b)("li",{parentName:"ul"},"green: all jobs finished without error and there is no failures in\ntests and no issues in the code")),Object(a.b)("p",null,"A run box contains:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"data about execution: total number of scheduled jobs, number of\nerred jobs, etc."),Object(a.b)("li",{parentName:"ul"},"summary of testing: pass ratio, total, regressions and fixes counts, etc"),Object(a.b)("li",{parentName:"ul"},"issues summary: total number of discovered issues, number of new issues")),Object(a.b)("p",null,"Example 1:"),Object(a.b)(b,{img:"screen-run-box-1.png",mdxType:"Screen"}),Object(a.b)("p",null,"This run has 1 successful job that reported tests results. There were\nrun 100 test cases, where 16 did not passed, so pass ratio is\n16%. There were detected 15 regressions and 13 fixes. There are\nfailures so the box is yellow."),Object(a.b)("p",null,"Example 2:"),Object(a.b)(b,{img:"screen-run-box-2.png",mdxType:"Screen"}),Object(a.b)("p",null,"This run has 4 job with no errors. Some of them that reported tests\nresults, the other ones reported issues. There were run 17 test\ncases, where all passed, so pass ratio is 100%. There were\ndetected 15 issues in the code. There are issues so the box is yellow."),Object(a.b)("p",null,"Example 3:"),Object(a.b)(b,{img:"screen-run-box-3.png",mdxType:"Screen"}),Object(a.b)("p",null,"This run has 2 job with no errors. In the reported tests results,\nthere are 100% passed test cases. No failures and no issues so the box\nis green."),Object(a.b)("p",null,"Example 4:"),Object(a.b)(b,{img:"screen-run-box-4.png",mdxType:"Screen"}),Object(a.b)("p",null,"This run has 4 job with 1 error. All tests reported are passed but\nthere could be not reported tests due to error in job execution. There\nwere detected 6 issues in the code. There is one erred job so the box\nis red."),Object(a.b)("h2",{id:"test-case-results-table"},"Test Case Results Table"),Object(a.b)("p",null,"A job that performs testing reports test results. The test results are\nvisible on a ",Object(a.b)("inlineCode",{parentName:"p"},"Run Results")," page, in ",Object(a.b)("inlineCode",{parentName:"p"},"Test Results")," tab. They are\npresented in a table."),Object(a.b)(b,{img:"screen-run-test-results.png",mdxType:"Screen"}),Object(a.b)("p",null,"The table presents test case results in each row. They contain a details of the test case result:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the result status"),Object(a.b)("li",{parentName:"ul"},"a name of the test case"),Object(a.b)("li",{parentName:"ul"},"job name and ID"),Object(a.b)("li",{parentName:"ul"},"age, instability and relevancy"),Object(a.b)("li",{parentName:"ul"},"values"),Object(a.b)("li",{parentName:"ul"},"execution environment: system, agent group and actual agent and config")),Object(a.b)("p",null,"In Kraken test case result beside status can contain values. Valuas\nare pairs: attribute and its value. They are also a result of a test\ncase but hold numbers. They can hold e.g. performance data or anything\nsimilar to performance. These values are tracked over time. Kraken can\ndraw charts of values and do more things with them."),Object(a.b)("h2",{id:"filtering-test-case-results"},"Filtering Test Case Results"),Object(a.b)("p",null,"It is possible to filter test results by various attributes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"by ",Object(a.b)("inlineCode",{parentName:"li"},"Results Status")," ie. ",Object(a.b)("inlineCode",{parentName:"li"},"Passed"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Failed"),", etc."),Object(a.b)("li",{parentName:"ul"},"by ",Object(a.b)("inlineCode",{parentName:"li"},"Result Change")," ie. ",Object(a.b)("inlineCode",{parentName:"li"},"Fixes"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Regressions"),", ",Object(a.b)("inlineCode",{parentName:"li"},"New")," and ",Object(a.b)("inlineCode",{parentName:"li"},"No\nChanges"),"; the change is determined between current result and\nprevious result from previous run"),Object(a.b)("li",{parentName:"ul"},"by ",Object(a.b)("inlineCode",{parentName:"li"},"Age")," where age is a number of previous runs with the same result\nas in current run; so e.g. age 0 means that in previous run test\ncase had different result than it has now (so these are regressions\nand fixes); age 1 means that current run and previous run has the\nsame result but the result before previous one is different"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"New")," is a shortcut to set ",Object(a.b)("inlineCode",{parentName:"li"},"Age")," between 0 and 0, ie. show changes\nthat happend in last run (fixes + regressions)"),Object(a.b)("li",{parentName:"ul"},"by ",Object(a.b)("inlineCode",{parentName:"li"},"Instability")," where instability is a count of result status\nchanges in last 10 runs; if this is 0 then in the last 10 runs test\ncase has the same result (it was pretty stable); if this is 10 then\nit means that in every run of the last 10 runs the status was\nchanging comparing to previous one (it was very unstable)"),Object(a.b)("li",{parentName:"ul"},"by ",Object(a.b)("inlineCode",{parentName:"li"},"Test Case")," name"),Object(a.b)("li",{parentName:"ul"},"by ",Object(a.b)("inlineCode",{parentName:"li"},"Job")," name of ID")),Object(a.b)("p",null,"Example 1:"),Object(a.b)(b,{img:"screen-run-test-results-regressions.png",mdxType:"Screen"}),Object(a.b)("p",null,"Filtering by ",Object(a.b)("inlineCode",{parentName:"p"},"Result Changes"),": show only regressions. Regression means\na change from non-passed status to passed status."),Object(a.b)("p",null,"Example 2:"),Object(a.b)(b,{img:"screen-run-test-results-regressions-failures.png",mdxType:"Screen"}),Object(a.b)("p",null,"Filtering by ",Object(a.b)("inlineCode",{parentName:"p"},"Result Status")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Result Changes"),": show only failures\nthat are regressions."),Object(a.b)("p",null,"Example 3:"),Object(a.b)(b,{img:"screen-run-test-results-age.png",mdxType:"Screen"}),Object(a.b)("p",null,"Filtering by ",Object(a.b)("inlineCode",{parentName:"p"},"Age"),": show only results in age between 2 and 3."),Object(a.b)("p",null,"Example 4:"),Object(a.b)(b,{img:"screen-run-test-results-instability.png",mdxType:"Screen"}),Object(a.b)("p",null,"Filtering by ",Object(a.b)("inlineCode",{parentName:"p"},"Instability"),": show only results that have instability\ngreater than 7 i.e. very unstable test cases."),Object(a.b)("h2",{id:"sorting-test-case-results"},"Sorting Test Case Results"),Object(a.b)("p",null,"Test case results can be sorted. This can be done using several columns:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"name"),Object(a.b)("li",{parentName:"ul"},"result"),Object(a.b)("li",{parentName:"ul"},"change"),Object(a.b)("li",{parentName:"ul"},"age"),Object(a.b)("li",{parentName:"ul"},"instability"),Object(a.b)("li",{parentName:"ul"},"relevancy")),Object(a.b)(b,{img:"screen-run-test-results-sort-name.png",mdxType:"Screen"}),Object(a.b)("p",null,"By default results are sorted by test case name."),Object(a.b)("p",null,"One of the most important sorting order is by ",Object(a.b)("inlineCode",{parentName:"p"},"relevancy"),".\nRelevancy is estimated according to this rules:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"0 is initial"),Object(a.b)("li",{parentName:"ul"},"+1 for not passed"),Object(a.b)("li",{parentName:"ul"},"+1 for failure"),Object(a.b)("li",{parentName:"ul"},"+1 for instability <= 3"),Object(a.b)("li",{parentName:"ul"},"+1 for age < 5"),Object(a.b)("li",{parentName:"ul"},"+1 for regression")),Object(a.b)("p",null,"This way the most relevant results get the highest score. They need an\nattention."),Object(a.b)(b,{img:"screen-run-test-results-sort-relevancy.png",mdxType:"Screen"}),Object(a.b)("h2",{id:"test-case-history"},"Test Case History"),Object(a.b)("p",null,"Each test case has its history of results. In the table with test case\nresults a link under test case name leads to a page dedicated to given\ntest case. This page presents a table with historical results of the\ntest case."),Object(a.b)(b,{img:"screen-test-case-history.png",mdxType:"Screen"}),Object(a.b)("p",null,"There is another tab called ",Object(a.b)("inlineCode",{parentName:"p"},"Charts")," that shows these results on charts."),Object(a.b)(b,{img:"screen-test-case-charts.png",mdxType:"Screen"}),Object(a.b)("p",null,"The left chart shows history of result status. The right one presents\nhistory of values in time. Error bars are shown if there were run\nmultiple iterations and there were reported multiple values for given\nattribute."))}u.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var s=n(0),r=n.n(s);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=s,h=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return n?r.a.createElement(h,l(l({ref:t},b),{},{components:n})):r.a.createElement(h,l({ref:t},b))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var b=2;b<a;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);