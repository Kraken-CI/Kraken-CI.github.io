(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[1381],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},790:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=n(2122),r=n(9756),i=(n(7294),n(4137)),a=["components"],s={id:"tools",title:"Tools"},l=void 0,p={unversionedId:"tools",id:"tools",isDocsHomePage:!1,title:"Tools",description:"Tools Overview",source:"@site/docs/tools.md",sourceDirName:".",slug:"/tools",permalink:"/docs/tools",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/tools.md",version:"current",frontMatter:{id:"tools",title:"Tools"},sidebar:"someSidebar",previous:{title:"Schema Variables",permalink:"/docs/schema-vars"},next:{title:"Secrets",permalink:"/docs/secrets"}},c=[{value:"Tools Overview",id:"tools-overview",children:[]},{value:"Custom Tools",id:"custom-tools",children:[{value:"Protocol Overview",id:"protocol-overview",children:[]},{value:"Tool Framework",id:"tool-framework",children:[]},{value:"Example of Simple Tool",id:"example-of-simple-tool",children:[]},{value:"Example of Testing Tool",id:"example-of-testing-tool",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tools-overview"},"Tools Overview"),(0,i.kt)("p",null,"Tools are used to execute steps in a job. Each step indicates what\ntools should be used to its execution. It can be a ",(0,i.kt)("inlineCode",{parentName:"p"},"shell")," to execute\ncommands, other programs, or a ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," tool for cloning Git\nrepository. A step can have several fields with values defined that\nare required by a tool or are optional."),(0,i.kt)("p",null,"A tool communicates with Kraken agent using specific protocol. Thanks\nto this it is possible to write your own custom tools."),(0,i.kt)("p",null,"There are several ways a tool can get in interaction with Kraken\nserver via Kraken agent. Tools can be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"do nothing, just do its job and that's it"),(0,i.kt)("li",{parentName:"ul"},"return list of all available test cases (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"pytest")," tool); this\nallows pre-storing all test case results as ",(0,i.kt)("inlineCode",{parentName:"li"},"not run")," initially and\nalso splitting execution of test cases to several jobs"),(0,i.kt)("li",{parentName:"ul"},"report continuously test results (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"pytest")," tool)"),(0,i.kt)("li",{parentName:"ul"},"report continuously issues (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"pylint")," tool)"),(0,i.kt)("li",{parentName:"ul"},"report stored artifacts (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"artifacts")," tool)")),(0,i.kt)("p",null,"More about particular tools can be found\nin ",(0,i.kt)("a",{parentName:"p",href:"schema#built-in-step-tools"},"Workflow Schema chapter, in Tools section"),"."),(0,i.kt)("h2",{id:"custom-tools"},"Custom Tools"),(0,i.kt)("p",null,"Tools can be written in Python. It is possible to write them in other\nlanguages but for Python there is already a framework that makes some\nactions easier."),(0,i.kt)("h3",{id:"protocol-overview"},"Protocol Overview"),(0,i.kt)("p",null,"There is defined a protocol between Kraken agent and a tool. It works\ndifferently depending on the direction. Generally an agent invokes one\nof predefined commands of a tool and then a tool responds to the agent\nvia an HTTP connection using JSON as a response format."),(0,i.kt)("p",null,"The commands expected by Kraken agent:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get_commands")," - it should return list of commands exposed by a tool;\nthis command must be provided by every tool"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collect_tests")," - it returns list of available tests according to\nspecification provided by step definition; optional"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"run")," - it should just execute a step; optional"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"run_tests")," - it executes tests according to specification provided\nby step definition and report results live, progresively, one by one\nif possible; optional"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"run_analysis")," - it should perform an analysis and report issues\nlive, progresively, one by one if possible")),(0,i.kt)("p",null,"One of ",(0,i.kt)("inlineCode",{parentName:"p"},"run*")," commands must be provided by a tool."),(0,i.kt)("h3",{id:"tool-framework"},"Tool Framework"),(0,i.kt)("p",null,"Handling of commands and sending reponses are quite automated by a\nPython tool framework. The framework required defining one of ",(0,i.kt)("inlineCode",{parentName:"p"},"run*"),"\nfunctions and ",(0,i.kt)("inlineCode",{parentName:"p"},"collect_tests")," function if wanted."),(0,i.kt)("h3",{id:"example-of-simple-tool"},"Example of Simple Tool"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import os\nfrom . import utils\n\ndef run(step, **kwargs):\n    cmd = step['cmd']\n    cwd = step.get('cwd', None)\n    timeout = int(step.get('timeout', 60))\n    ret = utils.execute(cmd, cwd=cwd, timeout=timeout)\n    if ret != 0:\n        return ret, 'cmd exited with non-zero retcode: %s' % ret\n    return 0, ''\n")),(0,i.kt)("p",null,"This is a simplified implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"shell")," tool. It just executes\na ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd")," command provided in a step. It uses also optional ",(0,i.kt)("inlineCode",{parentName:"p"},"cwd")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"timeout")," parameters provided in a step."),(0,i.kt)("p",null,"Tool framework provides several helper modules. One of them is ",(0,i.kt)("inlineCode",{parentName:"p"},"utils"),"\nthat offers an ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," function. To use it impot the module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from . import utils\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," functions must return an exit code (0 means all is ok) and a\nmessage that in case of an error describes the error (otherwise it\nreturns '' empty string)."),(0,i.kt)("h3",{id:"example-of-testing-tool"},"Example of Testing Tool"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import random\n\ndef collect_tests(step):\n    # return list of available tests\n    tests = ['test.aaa', 'test.bbb', 'test.ccc']\n    return tests\n\ndef run_tests(step, report_result=None):\n    # Now the step contains list of tests reported\n    # by collect_tests function. If there is no collect_tests\n    # function then the run_tests function should determine\n    # on its own scope of tests based of step definition.\n    tests = step['tests']\n\n    for test in tests:\n        cmd = 'command to execute a test'\n        # status should indicate test result: 0 - not run, 1 - passed, 2 - failed,\n        # 3 - error, 4 - disabled/skip, 5 - unsupported\n        result = dict(cmd=cmd, test=test, status=random.choice([0, 1, 2, 3, 4, 5]))\n        # report_result is a callback provided by Kraken tool framework that sends back\n        # the test result to the server\n        report_result(result)\n\n    return 0, ''\n")),(0,i.kt)("p",null,"The tool has hardcoded list of tests to execute regardless of step\ndefinition. Generally ",(0,i.kt)("inlineCode",{parentName:"p"},"collect_tests")," function should return list of\ntests based of step definition. Then the ",(0,i.kt)("inlineCode",{parentName:"p"},"run_tests"),' function receives\nlist of tests in step definition and then it "executes" them one by\none, and then reports them using ',(0,i.kt)("inlineCode",{parentName:"p"},"report_result")," callback from Kraken\ntool framework."))}d.isMDXComponent=!0}}]);