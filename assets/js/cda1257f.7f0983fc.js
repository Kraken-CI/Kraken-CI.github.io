"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[3231],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return n?s.createElement(m,a(a({ref:t},c),{},{components:n})):s.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<r;u++)a[u]=n[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8742:function(e,t,n){var s=n(7294);t.Z=function(e){var t=e.img;return s.createElement("a",{href:"/img/"+t,target:"blank"},s.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}}))}},181:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var s=n(3117),i=n(102),r=(n(7294),n(4137)),a=n(8742),o=["components"],l={id:"test-results-tracking",title:"Test Results Tracking"},u=void 0,c={unversionedId:"test-results-tracking",id:"test-results-tracking",title:"Test Results Tracking",description:"Intro",source:"@site/docs/test-results-tracking.mdx",sourceDirName:".",slug:"/test-results-tracking",permalink:"/docs/test-results-tracking",draft:!1,editUrl:"https://github.com/kraken-ci/website/edit/master/docs/test-results-tracking.mdx",tags:[],version:"current",frontMatter:{id:"test-results-tracking",title:"Test Results Tracking"},sidebar:"someSidebar",previous:{title:"Test Results Basics",permalink:"/docs/test-results-basics"},next:{title:"JUnit",permalink:"/docs/tf-junit"}},h={},p=[{value:"Intro",id:"intro",level:2},{value:"Result Changes in the Last Flow",id:"result-changes-in-the-last-flow",level:2},{value:"New button",id:"new-button",level:3},{value:"Filter by Result Change",id:"filter-by-result-change",level:3},{value:"Instability",id:"instability",level:3},{value:"Relevancy",id:"relevancy",level:3},{value:"Comments",id:"comments",level:3},{value:"Finding Changes in the Past",id:"finding-changes-in-the-past",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.istqb.org/"},"ISTQB")," defines several goals for testing. Two\nof them that are pretty important are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To find defects and failures thus reduce the level of risk of\ninadequate software quality."),(0,r.kt)("li",{parentName:"ol"},"To provide sufficient information to stakeholders to allow them to\nmake informed decisions, especially regarding the level of quality of\nthe test object.")),(0,r.kt)("p",null,"At first glance, these goals do not seem that hard. In small projects,\nit is pretty easy to achieve. Not many tests and not many code changes\ndo not generate much work to analyze and reason."),(0,r.kt)("p",null,"In the case of bigger projects, where testing is performed even several\ntimes a day, and where test content contains thousands or tens of\nthousands of test cases and where the number of combinations of\nenvironments (like operating systems and various types of hardware)\nand configurations is high, tracking and monitoring tests results\ngets really difficult."),(0,r.kt)("p",null,"Proper tools must be employed to match these expectations that will\nautomatically do much of this analytical work. Basic tests results\nreporting is not enough. More sophisticated analysis is required. The\nfollowing sections present tools and features in Kraken CI that help in\nthis area."),(0,r.kt)("h2",{id:"result-changes-in-the-last-flow"},"Result Changes in the Last Flow"),(0,r.kt)("p",null,"The basic approach to testing is observing results. The results\ninclude passes, failures, errors and sometimes some other types of\nstatus.  Looking at failures and errors allows for finding some\nproblems, these lead to some debugging, root-casing, defect\nsubmission and fixing eventually."),(0,r.kt)("p",null,"Observing a list of results from subsequent test sessions for\nsubsequent product builds is not easy anymore. Again, there are some\nfailures, but which were also present in the previous build and which\nare new regressions? In the case of small projects with a handful of\ntests, it is easy to go back to previous results and compare and\nmanually find out what has changed. If there are tens or hundreds of\nfailures, then a feature is needed to spot regression or fixes\ncompared to the previous build."),(0,r.kt)("h3",{id:"new-button"},"New button"),(0,r.kt)("p",null,"In the case of Kraken CI, the table with test case results allows\nimmediately for filtering and showing only these results that are\nregressions or fixes. For that purpose, a ",(0,r.kt)("inlineCode",{parentName:"p"},"New"),' button shows only the\ntest cases that changed the status in the current build compared to\nthe previous one, i.e. shows "new", interesting results that require\nsome attention.'),(0,r.kt)(a.Z,{img:"screen-tcr-tracking-new.png",mdxType:"Screen"}),(0,r.kt)("p",null,"The screenshot above shows the ",(0,r.kt)("inlineCode",{parentName:"p"},"New")," button and filtered results list.\nThe two first test case results indicate a ",(0,r.kt)("inlineCode",{parentName:"p"},"regression")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"fix"),".\nThis way, we can focus only on results that indicate some changes and\nignore the failures that are there for weeks or months because they\nwere not fixed yet."),(0,r.kt)("h3",{id:"filter-by-result-change"},"Filter by Result Change"),(0,r.kt)("p",null,"It is possible to do more fine-grain filtering and select a particular\nchange, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"regression")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"fix"),". For this purpose, there is a\ndropdown ",(0,r.kt)("inlineCode",{parentName:"p"},"Result Change"),"."),(0,r.kt)(a.Z,{img:"screen-tcr-tracking-result-change.png",mdxType:"Screen"}),(0,r.kt)("p",null,"The screenshot shows selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"regressions")," only. So now we can focus\nonly on a negative aspect of result changes."),(0,r.kt)("h3",{id:"instability"},"Instability"),(0,r.kt)("p",null,"Even if only the regressions are presented, some tests are still not\ninteresting or maybe interesting but for different reasons. These not\ninteresting results are sporadic or unstable tests. Sometimes a test\ncase passes, sometimes it fails. It changes its results status quite\noften. It can be concluded that this is all the time the same problem:\neither there is a bug in the product or in the test. If this is a\nknown problem, it is better to filter out such results. This is\npossible by filtering results by their instability. There is a column\ncalled ",(0,r.kt)("inlineCode",{parentName:"p"},"Ins.")," (for instability) that shows a count of status changes\nin the last 10 builds. If it is equal to 9 it means that it was\nflipping from passed to failed, back and forth. So using a slider in\nthe filtering pane, the instability can be narrowed to, e.g. 0-3\nrange."),(0,r.kt)(a.Z,{img:"screen-tcr-tracking-instability.png",mdxType:"Screen"}),(0,r.kt)("p",null,"This screenshot shows results filtered by instability that is set to\nrange 0-3.  Now it is visible in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Instability")," column that it is 1\ni.e. the regression is new, and in the past 10 builds, the test cases\nwere stable and passed."),(0,r.kt)("p",null,"In the previous case and previous screenshot, this column was\nshowing 9. Let's get back to this situation and click such\na test case to check its details."),(0,r.kt)(a.Z,{img:"screen-tcr-tracking-instability-history-table.png",mdxType:"Screen"}),(0,r.kt)("p",null,"This screenshot presents a table with the historical results of the\nselected test case. At the top, there is the latest result in the\nfirst row. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," column shows result statuses. It is visible\nnow that the status was constantly changing in the last results. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"Age")," column shows 0, i.e. every time the result was new. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"Instability")," column is all the time high. Such test case require some\ninvestigation and either fixing or removing from the test scope."),(0,r.kt)(a.Z,{img:"screen-tcr-tracking-instability-history-chart.png",mdxType:"Screen"}),(0,r.kt)("p",null,"It is possible to switch the view to a chart by selecting the second\ntab at the top of the page: ",(0,r.kt)("inlineCode",{parentName:"p"},"Charts"),". Here it is also visible that the\nresults are pretty unstable."),(0,r.kt)("h3",{id:"relevancy"},"Relevancy"),(0,r.kt)("p",null,"Another way for getting important results is sorting them by\n",(0,r.kt)("inlineCode",{parentName:"p"},"relevancy"),".  This is a metric built on properties of particular\nresults. The higher the ",(0,r.kt)("inlineCode",{parentName:"p"},"relevancy")," is, the more important the result\nis."),(0,r.kt)(a.Z,{img:"screen-tcr-tracking-relevancy.png",mdxType:"Screen"}),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"relevancy")," score is calculated as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+1")," if the result is not passed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+1")," if there is no comment attached to the result ie. it is not root-caused yet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+1")," if the result is failure"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+1")," if the result was pretty stable (so it is the same over several test runs), ie. instability is <= 3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+1")," if the result is rather recent (the age is < 5) ie. ignore old failures"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+1")," if this is a regression")),(0,r.kt)("p",null,"Max ",(0,r.kt)("inlineCode",{parentName:"p"},"relevancy")," is 6. So more interesting results are recent\nregressions that till now were pretty stable and are not root-caused\nyet."),(0,r.kt)("h3",{id:"comments"},"Comments"),(0,r.kt)("p",null,"To remember the conclusions of investigation of given failure it is\ngood to store them. For that purpose, there are test case comments."),(0,r.kt)(a.Z,{img:"screen-run-test-results-comments-1.png",mdxType:"Screen"}),(0,r.kt)("p",null,"There are two columns on the right side of the results table related\nto comments. Clicking a given cell allows for entering a comment a\nstate. The state may indicate if the problem has been root-cased or\nnot. This way, the next we get the results for this same test case, we\nwill already see the comment and conclusions we made previously."),(0,r.kt)("h2",{id:"finding-changes-in-the-past"},"Finding Changes in the Past"),(0,r.kt)("p",null,"It is hard to spot regressions if the results are not analyzed\nimmediately after tests execution. The failures are getting stable, so\nit is not visible as regressions anymore. To find such results,\nresults that were regressions during, e.g. last week, we need to\nfilter by age. Age allows filtering results that are not recent but\nhappened in the near past. If, e.g. we set age to 1-5 range, then the\ntest case results table will show results that persist (are stable in\nthe last 1-5 runs) the change happened in the previous 1-5\nexecutions. This allows for filtering out recent failures (because\ne.g. we already have analyzed them) and very old, stable results\n(because e.g. no one cares about them anymore)."),(0,r.kt)(a.Z,{img:"screen-tcr-tracking-age.png",mdxType:"Screen"}),(0,r.kt)("p",null,"This screen shows results filtered by age from 2 (since 2 builds ago)\nto let's say infinity. The table at the bottom contains now only a\nhandful of results with age 2 or 3. This way, we can find not current\nregressions but still quite recent."))}m.isMDXComponent=!0}}]);