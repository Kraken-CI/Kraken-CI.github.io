"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[5953],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=s.createContext({}),u=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||a;return n?s.createElement(h,i(i({ref:t},c),{},{components:n})):s.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8742:function(e,t,n){var s=n(7294);t.Z=function(e){var t=e.img;return s.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})}},6792:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var s=n(3117),r=n(102),a=(n(7294),n(4137)),i=n(8742),l=["components"],o={id:"test-results",title:"Test Results"},u=void 0,c={unversionedId:"test-results",id:"test-results",title:"Test Results",description:"Branch Results",source:"@site/docs/test-results.mdx",sourceDirName:".",slug:"/test-results",permalink:"/docs/test-results",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/test-results.mdx",tags:[],version:"current",frontMatter:{id:"test-results",title:"Test Results"},sidebar:"someSidebar",previous:{title:"Autoscale in Cloud",permalink:"/docs/autoscale-in-cloud"},next:{title:"JUnit",permalink:"/docs/tf-junit"}},p=[{value:"Branch Results",id:"branch-results",children:[],level:2},{value:"Run Box",id:"run-box",children:[],level:2},{value:"Test Case Results Table",id:"test-case-results-table",children:[],level:2},{value:"Filtering Test Case Results",id:"filtering-test-case-results",children:[],level:2},{value:"Sorting Test Case Results",id:"sorting-test-case-results",children:[],level:2},{value:"Comments",id:"comments",children:[],level:2},{value:"Test Case History",id:"test-case-history",children:[],level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"branch-results"},"Branch Results"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Branch Results")," page presents high level information about flows\nand runs of given branch.. It organizes flows in rows. The top row\ncontains the latest flow. Each flow row contains list of boxes. Each\nbox contains information about a run of given stage. The order of\nboxes with runs is chronological according to their start time."),(0,a.kt)(i.Z,{img:"screen-branch-results-2.png",mdxType:"Screen"}),(0,a.kt)("h2",{id:"run-box"},"Run Box"),(0,a.kt)("p",null,"The color of run box indicates final status of the run:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"red: one or more jobs finished with an error"),(0,a.kt)("li",{parentName:"ul"},"yellow: no errors in jobs but some test results failed or there are\nissues discovered in the code"),(0,a.kt)("li",{parentName:"ul"},"green: all jobs finished without error and there is no failures in\ntests and no issues in the code")),(0,a.kt)("p",null,"A run box contains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"data about execution: total number of scheduled jobs, number of\nerred jobs, etc."),(0,a.kt)("li",{parentName:"ul"},"summary of testing: pass ratio, total, regressions and fixes counts, etc"),(0,a.kt)("li",{parentName:"ul"},"issues summary: total number of discovered issues, number of new issues")),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)(i.Z,{img:"screen-run-box-1.png",mdxType:"Screen"}),(0,a.kt)("p",null,"This run has 1 successful job that reported tests results. There were\nrun 100 test cases, where 16 did not passed, so pass ratio is\n16%. There were detected 15 regressions and 13 fixes. There are\nfailures so the box is yellow."),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)(i.Z,{img:"screen-run-box-2.png",mdxType:"Screen"}),(0,a.kt)("p",null,"This run has 4 job with no errors. Some of them that reported tests\nresults, the other ones reported issues. There were run 17 test\ncases, where all passed, so pass ratio is 100%. There were\ndetected 15 issues in the code. There are issues so the box is yellow."),(0,a.kt)("p",null,"Example 3:"),(0,a.kt)(i.Z,{img:"screen-run-box-3.png",mdxType:"Screen"}),(0,a.kt)("p",null,"This run has 2 job with no errors. In the reported tests results,\nthere are 100% passed test cases. No failures and no issues so the box\nis green."),(0,a.kt)("p",null,"Example 4:"),(0,a.kt)(i.Z,{img:"screen-run-box-4.png",mdxType:"Screen"}),(0,a.kt)("p",null,"This run has 4 job with 1 error. All tests reported are passed but\nthere could be not reported tests due to error in job execution. There\nwere detected 6 issues in the code. There is one erred job so the box\nis red."),(0,a.kt)("h2",{id:"test-case-results-table"},"Test Case Results Table"),(0,a.kt)("p",null,"A job that performs testing reports test results. The test results are\nvisible on a ",(0,a.kt)("inlineCode",{parentName:"p"},"Run Results")," page, in ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Results")," tab. They are\npresented in a table."),(0,a.kt)(i.Z,{img:"screen-run-test-results.png",mdxType:"Screen"}),(0,a.kt)("p",null,"The table presents test case results in each row. They contain a details of the test case result:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the result status"),(0,a.kt)("li",{parentName:"ul"},"a name of the test case"),(0,a.kt)("li",{parentName:"ul"},"job name and ID"),(0,a.kt)("li",{parentName:"ul"},"age, instability and relevancy"),(0,a.kt)("li",{parentName:"ul"},"values"),(0,a.kt)("li",{parentName:"ul"},"execution environment: system, agent group and actual agent and config")),(0,a.kt)("p",null,"In Kraken test case result beside status can contain values. Valuas\nare pairs: attribute and its value. They are also a result of a test\ncase but hold numbers. They can hold e.g. performance data or anything\nsimilar to performance. These values are tracked over time. Kraken can\ndraw charts of values and do more things with them."),(0,a.kt)("h2",{id:"filtering-test-case-results"},"Filtering Test Case Results"),(0,a.kt)("p",null,"It is possible to filter test results by various attributes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"by ",(0,a.kt)("inlineCode",{parentName:"li"},"Results Status")," ie. ",(0,a.kt)("inlineCode",{parentName:"li"},"Passed"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Failed"),", etc."),(0,a.kt)("li",{parentName:"ul"},"by ",(0,a.kt)("inlineCode",{parentName:"li"},"Result Change")," ie. ",(0,a.kt)("inlineCode",{parentName:"li"},"Fixes"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Regressions"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"New")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"No\nChanges"),"; the change is determined between current result and\nprevious result from previous run"),(0,a.kt)("li",{parentName:"ul"},"by ",(0,a.kt)("inlineCode",{parentName:"li"},"Age")," where age is a number of previous runs with the same result\nas in current run; so e.g. age 0 means that in previous run test\ncase had different result than it has now (so these are regressions\nand fixes); age 1 means that current run and previous run has the\nsame result but the result before previous one is different"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"New")," is a shortcut to set ",(0,a.kt)("inlineCode",{parentName:"li"},"Age")," between 0 and 0, ie. show changes\nthat happend in last run (fixes + regressions)"),(0,a.kt)("li",{parentName:"ul"},"by ",(0,a.kt)("inlineCode",{parentName:"li"},"Instability")," where instability is a count of result status\nchanges in last 10 runs; if this is 0 then in the last 10 runs test\ncase has the same result (it was pretty stable); if this is 10 then\nit means that in every run of the last 10 runs the status was\nchanging comparing to previous one (it was very unstable)"),(0,a.kt)("li",{parentName:"ul"},"by ",(0,a.kt)("inlineCode",{parentName:"li"},"Test Case")," name"),(0,a.kt)("li",{parentName:"ul"},"by ",(0,a.kt)("inlineCode",{parentName:"li"},"Job")," name of ID")),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)(i.Z,{img:"screen-run-test-results-regressions.png",mdxType:"Screen"}),(0,a.kt)("p",null,"Filtering by ",(0,a.kt)("inlineCode",{parentName:"p"},"Result Changes"),": show only regressions. Regression means\na change from non-passed status to passed status."),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)(i.Z,{img:"screen-run-test-results-regressions-failures.png",mdxType:"Screen"}),(0,a.kt)("p",null,"Filtering by ",(0,a.kt)("inlineCode",{parentName:"p"},"Result Status")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Result Changes"),": show only failures\nthat are regressions."),(0,a.kt)("p",null,"Example 3:"),(0,a.kt)(i.Z,{img:"screen-run-test-results-age.png",mdxType:"Screen"}),(0,a.kt)("p",null,"Filtering by ",(0,a.kt)("inlineCode",{parentName:"p"},"Age"),": show only results in age between 2 and 3."),(0,a.kt)("p",null,"Example 4:"),(0,a.kt)(i.Z,{img:"screen-run-test-results-instability.png",mdxType:"Screen"}),(0,a.kt)("p",null,"Filtering by ",(0,a.kt)("inlineCode",{parentName:"p"},"Instability"),": show only results that have instability\ngreater than 7 i.e. very unstable test cases."),(0,a.kt)("h2",{id:"sorting-test-case-results"},"Sorting Test Case Results"),(0,a.kt)("p",null,"Test case results can be sorted. This can be done using several columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name"),(0,a.kt)("li",{parentName:"ul"},"result"),(0,a.kt)("li",{parentName:"ul"},"change"),(0,a.kt)("li",{parentName:"ul"},"age"),(0,a.kt)("li",{parentName:"ul"},"instability"),(0,a.kt)("li",{parentName:"ul"},"relevancy")),(0,a.kt)(i.Z,{img:"screen-run-test-results-sort-name.png",mdxType:"Screen"}),(0,a.kt)("p",null,"By default results are sorted by test case name."),(0,a.kt)("p",null,"One of the most important sorting order is by ",(0,a.kt)("inlineCode",{parentName:"p"},"relevancy"),".\nRelevancy is estimated according to this rules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0 is initial"),(0,a.kt)("li",{parentName:"ul"},"+1 for not passed"),(0,a.kt)("li",{parentName:"ul"},"+1 for not root caused problem"),(0,a.kt)("li",{parentName:"ul"},"+1 for failure"),(0,a.kt)("li",{parentName:"ul"},"+1 for instability <= 3"),(0,a.kt)("li",{parentName:"ul"},"+1 for age < 5"),(0,a.kt)("li",{parentName:"ul"},"+1 for regression")),(0,a.kt)("p",null,"This way the most relevant results get the highest score. They need an\nattention."),(0,a.kt)(i.Z,{img:"screen-run-test-results-sort-relevancy.png",mdxType:"Screen"}),(0,a.kt)("h2",{id:"comments"},"Comments"),(0,a.kt)("p",null,"In the test case results table it is possible to add sticky comments\nto test case results. When a new failure is spotted, a comment\nstating, e.g. the reason for the failure or link to a bug in a bug\ntracker may be added."),(0,a.kt)("p",null,"To add a comment click on the cell of particular test case result in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Comment")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Comment State")," columns."),(0,a.kt)(i.Z,{img:"screen-run-test-results-comments-1.png",mdxType:"Screen"}),(0,a.kt)("p",null,"This will reveal a dialog box that shows a form for introducing new\ncomment and a history of previous comments related with this test\ncase."),(0,a.kt)(i.Z,{img:"screen-run-test-results-comments-2.png",mdxType:"Screen"}),(0,a.kt)("p",null,"Each comment has a state. It can be one of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"new")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"investigating")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bug in product")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bug in test"))),(0,a.kt)("p",null,"The state allows to quickly conclude if given failure has been analyzed\nand it is known where is the root cause and what needs to be fixed or\nif the failure still requires some investigation."),(0,a.kt)("p",null,"If a failure is root-caused then its relevancy is decreased by 1."),(0,a.kt)("p",null,"If the failure persists in the subsequent test runs, the added comment\nis still presented next to the new results. If new facts about the\nfailure are revealed, you may extend the comment."),(0,a.kt)("h2",{id:"test-case-history"},"Test Case History"),(0,a.kt)("p",null,"Each test case has its history of results. In the table with test case\nresults a link under test case name leads to a page dedicated to given\ntest case. This page presents a table with historical results of the\ntest case."),(0,a.kt)(i.Z,{img:"screen-test-case-history.png",mdxType:"Screen"}),(0,a.kt)("p",null,"There is another tab called ",(0,a.kt)("inlineCode",{parentName:"p"},"Charts")," that shows these results on charts."),(0,a.kt)(i.Z,{img:"screen-test-case-charts.png",mdxType:"Screen"}),(0,a.kt)("p",null,"The left chart shows history of result status. The right one presents\nhistory of values in time. Error bars are shown if there were run\nmultiple iterations and there were reported multiple values for given\nattribute."))}d.isMDXComponent=!0}}]);