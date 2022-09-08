"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[1381],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var p=2;p<l;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8742:function(e,t,n){var o=n(7294);t.Z=function(e){var t=e.img;return o.createElement("a",{href:"/img/"+t,target:"blank"},o.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}}))}},7254:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});var o=n(3117),a=n(102),l=(n(7294),n(4137)),i=(n(8742),["components"]),r={id:"tools",title:"Tools"},s=void 0,p={unversionedId:"tools",id:"tools",title:"Tools",description:"Overview",source:"@site/docs/tools.md",sourceDirName:".",slug:"/tools",permalink:"/docs/tools",draft:!1,editUrl:"https://github.com/kraken-ci/website/edit/master/docs/tools.md",tags:[],version:"current",frontMatter:{id:"tools",title:"Tools"},sidebar:"someSidebar",previous:{title:"Schema Variables",permalink:"/docs/schema-vars"},next:{title:"Secrets",permalink:"/docs/secrets"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Custom Tools",id:"custom-tools",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Interaction Between a Tool and Kraken Agent",id:"interaction-between-a-tool-and-kraken-agent",level:2},{value:"Protocol Overview",id:"protocol-overview",level:3},{value:"Tool Framework",id:"tool-framework",level:3},{value:"Example of Simple Tool",id:"example-of-simple-tool",level:3},{value:"Example of Testing Tool",id:"example-of-testing-tool",level:3},{value:"Adding Custom Tool to Kraken Server",id:"adding-custom-tool-to-kraken-server",level:2},{value:"kkci - Kraken Client Tool",id:"kkci---kraken-client-tool",level:3},{value:"Tool Meta File",id:"tool-meta-file",level:3},{value:"Local Tools",id:"local-tools",level:3},{value:"Tools Stored in Kraken Server",id:"tools-stored-in-kraken-server",level:3},{value:"Tools from Remote Git Repo",id:"tools-from-remote-git-repo",level:3},{value:"List Registered Tool",id:"list-registered-tool",level:3},{value:"Running a Tool Locally",id:"running-a-tool-locally",level:2},{value:"Summary",id:"summary",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Tools are used to execute steps in a job. Each step indicates what\ntool should be used to its execution. It can be e.g. a ",(0,l.kt)("inlineCode",{parentName:"p"},"shell")," tool to\nexecute commands, other programs, or a ",(0,l.kt)("inlineCode",{parentName:"p"},"git")," tool for cloning Git\nrepository. A step can have several input fields with values that are\nused by a tool."),(0,l.kt)("p",null,"There are a number of built-in tools. It is also possible to create\nyour own custom tool."),(0,l.kt)("p",null,"Built-in tools:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"git"),(0,l.kt)("li",{parentName:"ul"},"shell"),(0,l.kt)("li",{parentName:"ul"},"artifacts"),(0,l.kt)("li",{parentName:"ul"},"cache"),(0,l.kt)("li",{parentName:"ul"},"pytest"),(0,l.kt)("li",{parentName:"ul"},"pylint"),(0,l.kt)("li",{parentName:"ul"},"gotest"),(0,l.kt)("li",{parentName:"ul"},"junit_collect"),(0,l.kt)("li",{parentName:"ul"},"values_collect"),(0,l.kt)("li",{parentName:"ul"},"cloc"),(0,l.kt)("li",{parentName:"ul"},"nglint"),(0,l.kt)("li",{parentName:"ul"},"rndtest"),(0,l.kt)("li",{parentName:"ul"},"local_tool")),(0,l.kt)("p",null,"These tools are described in detail in ",(0,l.kt)("a",{parentName:"p",href:"schema#built-in-step-tools"},"Workflow Schema chapter, Built-in Step Tools section"),"."),(0,l.kt)("h2",{id:"custom-tools"},"Custom Tools"),(0,l.kt)("p",null,"Tools can be written in Python. It is possible to write them in other\nlanguages but for Python there is already a framework that makes some\nactions easier."),(0,l.kt)("h2",{id:"architecture"},"Architecture"),(0,l.kt)("p",null,"The picture below shows the architecture around Kraken tools."),(0,l.kt)("img",{src:"/img/tool-arch.png",style:{margin:"0 20% 15px 20%"}}),(0,l.kt)("p",null,"Kraken Agent asks Kraken Server for a job using REST API. In the\nreceived job there are defined multiple steps. For each step a tool is\nindicated for its execution. Kraken Agent takes the tool and spawns it\nin separate process. In arguments passed to the tool, the agent passes\na special command and a path to a JSON file with step details. The\ntool during its execution sends progress of execution using TCP and\nJSON messages. These messages may contain chunks of executed tests\nwith their results or chunks of discovered issues. At the end, the tool\nreturns exit code. If it is non-zero, then this means that some error\noccured."),(0,l.kt)("h2",{id:"interaction-between-a-tool-and-kraken-agent"},"Interaction Between a Tool and Kraken Agent"),(0,l.kt)("p",null,"A tool communicates with Kraken Agent using specific protocol using\nJSON messages. Thanks to this it is possible to write your own custom\ntools."),(0,l.kt)("p",null,"There are several ways a tool can get in interaction with Kraken\nServer via Kraken Agent. Tools can:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"do nothing, just do its job and that's it"),(0,l.kt)("li",{parentName:"ul"},"return list of all available test cases (eg. ",(0,l.kt)("inlineCode",{parentName:"li"},"pytest")," tool); this\nallows pre-storing all test case results as ",(0,l.kt)("inlineCode",{parentName:"li"},"not run")," initially and\nalso splitting execution of test cases to several jobs"),(0,l.kt)("li",{parentName:"ul"},"report continuously test results (eg. ",(0,l.kt)("inlineCode",{parentName:"li"},"pytest")," tool)"),(0,l.kt)("li",{parentName:"ul"},"report continuously issues (eg. ",(0,l.kt)("inlineCode",{parentName:"li"},"pylint")," tool)"),(0,l.kt)("li",{parentName:"ul"},"report stored artifacts (eg. ",(0,l.kt)("inlineCode",{parentName:"li"},"artifacts")," tool)")),(0,l.kt)("h3",{id:"protocol-overview"},"Protocol Overview"),(0,l.kt)("p",null,"There is defined a protocol between Kraken Agent and a tool. It works\ndifferently depending on the direction. Generally an agent invokes one\nof predefined commands of a tool and then a tool responds to the agent\nvia an HTTP connection using JSON as a response format, and at the end\nthe tool exits with exit code."),(0,l.kt)("p",null,"The commands expected by Kraken Agent:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"get_commands")," - it should return list of commands exposed by a tool;\nthis command must be provided by every tool"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"collect_tests")," - it returns list of available tests according to\nspecification provided by step definition; optional"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"run")," - it should just execute a step; optional"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"run_tests")," - it executes tests according to specification provided\nby step definition and report results live, progresively, one by one\nif possible; optional"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"run_analysis")," - it should perform an analysis and report issues\nlive, progresively, one by one if possible")),(0,l.kt)("p",null,"One of ",(0,l.kt)("inlineCode",{parentName:"p"},"run*")," commands must be provided by a tool."),(0,l.kt)("h3",{id:"tool-framework"},"Tool Framework"),(0,l.kt)("p",null,"Handling of commands and sending reponses are quite automated by a\nPython tool framework. The framework requires defining one of ",(0,l.kt)("inlineCode",{parentName:"p"},"run*"),"\nfunctions and ",(0,l.kt)("inlineCode",{parentName:"p"},"collect_tests")," function if wanted."),(0,l.kt)("h3",{id:"example-of-simple-tool"},"Example of Simple Tool"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import os\nfrom . import utils\n\ndef run(step, **kwargs):\n    cmd = step['cmd']\n    cwd = step.get('cwd', None)\n    timeout = int(step.get('timeout', 60))\n    ret = utils.execute(cmd, cwd=cwd, timeout=timeout)\n    if ret != 0:\n        return ret, 'cmd exited with non-zero retcode: %s' % ret\n    return 0, ''\n")),(0,l.kt)("p",null,"This is a simplified implementation of ",(0,l.kt)("inlineCode",{parentName:"p"},"shell")," tool. It just executes\na ",(0,l.kt)("inlineCode",{parentName:"p"},"cmd")," command provided in a step. It uses also optional ",(0,l.kt)("inlineCode",{parentName:"p"},"cwd")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"timeout")," parameters provided in a step."),(0,l.kt)("p",null,"The tool framework provides several helper modules. One of them is ",(0,l.kt)("inlineCode",{parentName:"p"},"utils"),"\nthat offers an ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")," function. To use it import the module:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from . import utils\n")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," functions must return an exit code (0 means all is ok) and a\nmessage that in case of an error describes the error (otherwise it\nreturns '' empty string)."),(0,l.kt)("h3",{id:"example-of-testing-tool"},"Example of Testing Tool"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import random\n\ndef collect_tests(step):\n    # return list of available tests\n    tests = ['test.aaa', 'test.bbb', 'test.ccc']\n    return tests\n\ndef run_tests(step, report_result=None):\n    # Now the step contains list of tests reported\n    # by collect_tests function. If there is no collect_tests\n    # function then the run_tests function should determine\n    # on its own scope of tests based of step definition.\n    tests = step['tests']\n\n    for test in tests:\n        cmd = 'command to execute a test'\n        # status should indicate test result: 0 - not run, 1 - passed, 2 - failed,\n        # 3 - error, 4 - disabled/skip, 5 - unsupported\n        result = dict(cmd=cmd, test=test, status=random.choice([0, 1, 2, 3, 4, 5]))\n        # report_result is a callback provided by Kraken tool framework that sends back\n        # the test result to the server\n        report_result(result)\n\n    return 0, ''\n")),(0,l.kt)("p",null,"The tool has hardcoded list of tests to execute regardless of step\ndefinition. Generally ",(0,l.kt)("inlineCode",{parentName:"p"},"collect_tests")," function should return list of\ntests based of step definition. Then the ",(0,l.kt)("inlineCode",{parentName:"p"},"run_tests"),' function receives\nlist of tests in step definition and then it "executes" them one by\none, and then reports them using ',(0,l.kt)("inlineCode",{parentName:"p"},"report_result")," callback from Kraken\ntool framework."),(0,l.kt)("h2",{id:"adding-custom-tool-to-kraken-server"},"Adding Custom Tool to Kraken Server"),(0,l.kt)("p",null,"There are numerous ways to add a new tool to Kraken Server. After\nadding a tool to Kraken Server it can be used in user defined\nworkflows with stages and jobs."),(0,l.kt)("p",null,"The ways for adding a tool to Kraken Server are as follows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Adding a tool that is stored locally in a system"),(0,l.kt)("li",{parentName:"ol"},"Uploading a tool to Kraken Server"),(0,l.kt)("li",{parentName:"ol"},"Adding a tool from remote Git repository to Kraken Server")),(0,l.kt)("p",null,"In all these scenarious there is used a helper Kraken client tool ",(0,l.kt)("inlineCode",{parentName:"p"},"kkci"),"."),(0,l.kt)("h3",{id:"kkci---kraken-client-tool"},"kkci - Kraken Client Tool"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kkci")," provides multiple commands that help in various aspects related\nto Kraken CI. One of key area is support for develepment and\nmanagement of custom tools for Kraken."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kkci")," installation instruction can be found\nhere: ",(0,l.kt)("a",{parentName:"p",href:"kkci#installation"},"kkci#installation"),". The detailed list of\ncommands that help with custom tools are available\nhere: ",(0,l.kt)("a",{parentName:"p",href:"kkci#tools-commands"},"kkci#tools-commands"),"."),(0,l.kt)("h3",{id:"tool-meta-file"},"Tool Meta File"),(0,l.kt)("p",null,"Before adding a tool to Kraken Server, there needs to be prepared a\nmeta file for a tool. It defines capabilities of a tool like:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," - a name of a tool;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description")," - a description of a tool, a few lines of text that\ntells what a tool can do;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"location")," - relative location, folder, of a tool main Python module\nlooking from meta tool file, it will be used for invoking a tool,\ne.g. ",(0,l.kt)("inlineCode",{parentName:"li"},".")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"src"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"entry")," - a name of a tool main Python module, e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"main"),"; it is\nassumed that this module is stored in a file ",(0,l.kt)("inlineCode",{parentName:"li"},"entry")," + ",(0,l.kt)("inlineCode",{parentName:"li"},".py")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"parameters")," a definition in ",(0,l.kt)("a",{parentName:"li",href:"https://json-schema.org/"},"JSON Schema"),"\nof input parameters that are expected in\na ",(0,l.kt)("a",{parentName:"li",href:"schema#steps-in-job"},"step definition")," for this tool")),(0,l.kt)("p",null,"The format of a tool meta file is JSON. Here is an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "pkg_install",\n    "description": "A tool that allows for installing packages using various providers.",\n    "location": ".",\n    "entry": "main",\n    "parameters": {\n        "additionalProperties": false,\n        "required": ["pkgs"],\n        "properties": {\n            "pkgs": {\n                "description": "A list of packages to install.",\n                "type": "string"\n            },\n            "provider": {\n                "description": "A provider to be used to do installation.",\n                "enum": ["apt", "yum", "dnf", "apk"]\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,"More examples can be found in Kraken's tools repository:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken-tools"},"https://github.com/Kraken-CI/kraken-tools"),"."),(0,l.kt)("h3",{id:"local-tools"},"Local Tools"),(0,l.kt)("p",null,"In the case of local tools, they are stored already in a system where\nKraken Agent is running (e.g. on baremetal system or inside Docker\nimage). So the only missing piece is informing Kraken Server about\nthis fact."),(0,l.kt)("p",null,"For that purpose ",(0,l.kt)("inlineCode",{parentName:"p"},"kkci")," is used and ",(0,l.kt)("inlineCode",{parentName:"p"},"tools register")," command. It needs\na tool meta file that indicates location of the tool on local system."),(0,l.kt)("p",null,"The meta file ",(0,l.kt)("inlineCode",{parentName:"p"},"tool.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "pkg_install",\n    "description": "A tool that allows for installing packages using various providers.",\n    "location": "/opt/kraken-tools/pkg_install",\n    "entry": "main",\n    "parameters": {\n        "additionalProperties": false,\n        "required": ["pkgs"],\n        "properties": {\n            "pkgs": {\n                "description": "A list of packages to install.",\n                "type": "string"\n            },\n            "provider": {\n                "description": "A provider to be used to do installation.",\n                "enum": ["apt", "yum", "dnf", "apk"]\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,"This file says that the tool is located in\n",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/kraken-tools/pkg_install")," directory, in ",(0,l.kt)("inlineCode",{parentName:"p"},"main.py")," module."),(0,l.kt)("p",null,"The register command example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ kkci -s http://admin:admin@localhost:8080 tools register tool.json\nStored tool pkg_install@dev5\n")),(0,l.kt)("p",null,"Now the tool may be used in a step in a workflow schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"parent": "root",\n"triggers": {\n    "parent": True\n},\n"parameters": [],\n"configs": [],\n"jobs": [{\n    "name": "hello",\n    "steps": [{\n        "tool": "pkg_install@dev5",\n        "pkgs": "mc"\n    }],\n    "environments": [{\n        "system": "any",\n        "agents_group": "all",\n        "config": "default"\n    }]\n}]\n')),(0,l.kt)("p",null,"In this example a tool version ",(0,l.kt)("inlineCode",{parentName:"p"},"dev5")," is used directly. It could be\njust:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    "steps": [{\n        "tool": "pkg_install",\n        "pkgs": "mc"\n    }],\n')),(0,l.kt)("p",null,"that says that the latest version of ",(0,l.kt)("inlineCode",{parentName:"p"},"pkg_install")," tool should be used."),(0,l.kt)("h3",{id:"tools-stored-in-kraken-server"},"Tools Stored in Kraken Server"),(0,l.kt)("p",null,"Another approach for providing a tool in Kraken is storing it on Kraken Server in Minio.\nFor that purpose another ",(0,l.kt)("inlineCode",{parentName:"p"},"kkci")," command can be used: ",(0,l.kt)("inlineCode",{parentName:"p"},"tools upload"),"."),(0,l.kt)("p",null,"The meta file ",(0,l.kt)("inlineCode",{parentName:"p"},"tool.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "pkg_install",\n    "description": "A tool that allows for installing packages using various providers.",\n    "location": ".",\n    "entry": "main",\n    "parameters": {\n        "additionalProperties": false,\n        "required": ["pkgs"],\n        "properties": {\n            "pkgs": {\n                "description": "A list of packages to install.",\n                "type": "string"\n            },\n            "provider": {\n                "description": "A provider to be used to do installation.",\n                "enum": ["apt", "yum", "dnf", "apk"]\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,"In this case, the location parpameter is not important as it is\noverwritten by Kraken Server to a proper location to Minio where the\ntool will be stored. Still, it is import to indicate main module name\nand in the example it points to ",(0,l.kt)("inlineCode",{parentName:"p"},"main.py")," again."),(0,l.kt)("p",null,"And now the upload command example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ kkci -s http://admin:admin@localhost:8080 tools upload ./pkg-tool/tool.json\nexecute 'python3 -m pip install -r requirements.txt --target=./vendor' in '/home/godfryd/repos/kraken/pkg-tool'\nCollecting pycvs\n  Using cached pycvs-0.0.3-py3-none-any.whl (8.8 kB)\nCollecting colorama\n  Using cached colorama-0.4.5-py2.py3-none-any.whl (16 kB)\nCollecting pexpect\n  Using cached pexpect-4.8.0-py2.py3-none-any.whl (59 kB)\nCollecting ptyprocess>=0.5\n  Using cached ptyprocess-0.7.0-py2.py3-none-any.whl (13 kB)\nInstalling collected packages: ptyprocess, pexpect, colorama, pycvs\nSuccessfully installed colorama-0.4.5 pexpect-4.8.0 ptyprocess-0.7.0 pycvs-0.0.3\nWARNING: You are using pip version 22.0.4; however, version 22.1.2 is available.\nYou should consider upgrading via the '/home/godfryd/.cache/pypoetry/virtualenvs/krakenci-client-gzjv3aIZ-py3.10/bin/python3 -m pip install --upgrade pip' command.\nUploaded tool pkg_install@dev6\n")),(0,l.kt)("p",null,"Here ",(0,l.kt)("inlineCode",{parentName:"p"},"kkci")," assumes that the tool source code is located in the same\nfolder as meta file ",(0,l.kt)("inlineCode",{parentName:"p"},"tool.json")," (it is called tool directory). So\nfirst, if in this folder there is ",(0,l.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file then ",(0,l.kt)("inlineCode",{parentName:"p"},"kkci"),"\ninstall all dependencies to temporary ",(0,l.kt)("inlineCode",{parentName:"p"},"vendor")," directory. Then ",(0,l.kt)("inlineCode",{parentName:"p"},"kkci"),"\npacks all files from tool directory together with vendor directory\ninto a zip package. At the end the package is uploaded to Kraken\nServer together with tool meta file ",(0,l.kt)("inlineCode",{parentName:"p"},"tool.json"),"."),(0,l.kt)("p",null,"This way if there are any dependencies indicated in ",(0,l.kt)("inlineCode",{parentName:"p"},"requirements.txt"),"\nfile then they are stored together with a tool in Kraken Server and\nare always the same during tool usage."),(0,l.kt)("h3",{id:"tools-from-remote-git-repo"},"Tools from Remote Git Repo"),(0,l.kt)("p",null,"The last way for storing a custom tool is keeping it in Git\nrepository. ",(0,l.kt)("inlineCode",{parentName:"p"},"kkci")," provides a command that allows registering\nremotely stored custom tool."),(0,l.kt)("p",null,"The meta file ",(0,l.kt)("inlineCode",{parentName:"p"},"tool.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "pkg_install",\n    "description": "A tool that allows for installing packages using various providers.",\n    "location": ".",\n    "entry": "main",\n    "parameters": {\n        "additionalProperties": false,\n        "required": ["pkgs"],\n        "properties": {\n            "pkgs": {\n                "description": "A list of packages to install.",\n                "type": "string"\n            },\n            "provider": {\n                "description": "A provider to be used to do installation.",\n                "enum": ["apt", "yum", "dnf", "apk"]\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,"The location field needs to be a relative path to a directory with entry source module."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"tools register-remote")," looks as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ kkci -s http://admin:admin@localhost:8080 tools register-remote \\\n       -f pkg_install/tool.json https://github.com/Kraken-CI/kraken-tools\nStored tool pkg_install@48d4c5e\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-f")," parameter indicates a path in the repo to tool meta file."),(0,l.kt)("h3",{id:"list-registered-tool"},"List Registered Tool"),(0,l.kt)("p",null,"When a custom tool is registered in Kraken Server using one of the\nabove commands it is possible to check if our tools is in the list of\nall tools in Kraken Server. For that purpose there is a ",(0,l.kt)("inlineCode",{parentName:"p"},"tools list"),"\ncommand:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ kkci -s http://admin:admin@localhost:8080 tools list\n  Id  Name            Location                 Entry    Last Version\n----  --------------  -----------------------  -------  --------------\n   5  artifacts                                         1\n   9  cache                                             1\n   7  cloc                                              1\n   1  git                                               1\n  10  gotest                                            1\n  11  junit_collect                                     1\n  16  local                                             1\n  17  local_tool                                        1\n   8  nglint                                            1\n 133  pkg_install     minio:tool-133/tool.zip  main     dev6\n   6  pylint                                            1\n   3  pytest                                            1\n   4  rndtest                                           1\n   2  shell                                             1\n  12  values_collect                                    1\n")),(0,l.kt)("p",null,"Yes, on the list there is our tool, ",(0,l.kt)("inlineCode",{parentName:"p"},"pkg_install"),". The last version is ",(0,l.kt)("inlineCode",{parentName:"p"},"dev6"),"."),(0,l.kt)("p",null,"To list all versions of given tool there is command ",(0,l.kt)("inlineCode",{parentName:"p"},"tools list-versions"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ kkci -s http://admin:admin@localhost:8080 tools list-versions pkg_install\n  Id  Name         Location                             Entry    Version\n----  -----------  -----------------------------------  -------  ---------\n 133  pkg_install  minio:tool-133/tool.zip              main     dev6\n 132  pkg_install  /home/godfryd/repos/kraken/pkg-tool  main     dev5\n 131  pkg_install  minio:tool-131/tool.zip              main     48d4c5e\n 130  pkg_install  /home/godfryd/repos/kraken/pkg-tool  main     dev4\n...\n")),(0,l.kt)("h2",{id:"running-a-tool-locally"},"Running a Tool Locally"),(0,l.kt)("p",null,"Developing a new tool by uploading it after each code change would tiresome.\nIt is quicker to run the tool locally and check if all works before uploading\nthe tool to Kraken Server."),(0,l.kt)("p",null,"To run the tool locally, first a step file needs to be prepared. This\nfile contains information how the tool should be run i.e. it contains\nall the arguments that the tool is expecting."),(0,l.kt)("p",null,"To make it easy, the step file can be generated semi-automatically based\non the meta tool file. This can be done in the following way using\n",(0,l.kt)("inlineCode",{parentName:"p"},"kkci"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ kkci tools generate-step-file ./pkg-tool/tool.json\nPlease, enter values for pkg_install tool parameters\n  pkgs (string): mc\n  provider (string, one of ['apt', 'yum', 'dnf', 'apk']): apt\nStep file stored to /home/godfryd/repos/kraken/pkg-tool/step.json\n")),(0,l.kt)("p",null,"As can be seen in the log, ",(0,l.kt)("inlineCode",{parentName:"p"},"kkci")," asks for values for required\nparameters. The meta tool file defines to such files ",(0,l.kt)("inlineCode",{parentName:"p"},"pkgs")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"provider"),". If the paramter type is too complex (e.g. a structure)\nthen it needs to be set manually in the generated step file. The last\nline in the log indicates the location of the generated step file."),(0,l.kt)("p",null,"Having the step file, we can run our tool locally. Again using ",(0,l.kt)("inlineCode",{parentName:"p"},"kkci"),"\nit can be made in the following way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ kkci tools run ./pkg_tool/tool.json -f ./pkg_tool/step.json\nexecute 'python3 -m pip install -r requirements.txt --target=./vendor' in '/home/godfryd/repos/kraken/pkg-tool'\nCollecting pycvs\n  Using cached pycvs-0.0.3-py3-none-any.whl (8.8 kB)\nCollecting colorama\n  Using cached colorama-0.4.5-py2.py3-none-any.whl (16 kB)\nCollecting pexpect\n  Using cached pexpect-4.8.0-py2.py3-none-any.whl (59 kB)\nCollecting ptyprocess>=0.5\n  Using cached ptyprocess-0.7.0-py2.py3-none-any.whl (13 kB)\nInstalling collected packages: ptyprocess, pexpect, colorama, pycvs\nSuccessfully installed colorama-0.4.5 pexpect-4.8.0 ptyprocess-0.7.0 pycvs-0.0.3\nYou should consider upgrading via the '/home/godfryd/.cache/pypoetry/virtualenvs/krakenci-client-gzjv3aIZ-py3.10/bin/python3 -m pip install --upgrade pip' command.\nexecute 'PYTHONPATH=/home/godfryd/repos/kraken/pkg-tool:/home/godfryd/repos/kraken/pkg-tool/vendor /home/godfryd/.cache/pypoetry/virtualenvs/krakenci-client-gzjv3aIZ-py3.10/bin/python -m kraken.agent.tool -m main -s ../pkg-tool/step.json check-integrity' in 'None'\nexecute 'PYTHONPATH=/home/godfryd/repos/kraken/pkg-tool:/home/godfryd/repos/kraken/pkg-tool/vendor /home/godfryd/.cache/pypoetry/virtualenvs/krakenci-client-gzjv3aIZ-py3.10/bin/python -m kraken.agent.tool -m main -s ../pkg-tool/step.json get_commands' in 'None'\nexecute 'PYTHONPATH=/home/godfryd/repos/kraken/pkg-tool:/home/godfryd/repos/kraken/pkg-tool/vendor /home/godfryd/.cache/pypoetry/virtualenvs/krakenci-client-gzjv3aIZ-py3.10/bin/python -m kraken.agent.tool -m main -s ../pkg-tool/step.json run' in 'None'\n\n2022-08-11 08:07:41,871 run step tool pkg_install, cmd run\n2022-08-11 08:07:41,992 exec: 'sudo apt install --no-install-recommends -y mc' in '/home/godfryd/repos/kraken/client'\n2022-08-11 08:07:42,085 output:\nReading package lists...\n2022-08-11 08:07:42,583 output: Building dependency tree...\nReading state information...\nmc is already the newest version (3:4.8.27-1).\n2022-08-11 08:07:42,675 output: 0 upgraded, 0 newly installed, 0 to remove and 16 not upgraded.\n2022-08-11 08:07:42,757 step tool pkg_install, cmd run done with retcode 0 in 1secs\n2022-08-11 08:07:42,757 tool response: {\"status\": \"done\"}\n")),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,"This is all in terms of a custom tool development. This section presented:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"what is custom tool and how it interacts with Kraken Server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kkci")," - CLI that provides useful operations around custom tools"),(0,l.kt)("li",{parentName:"ul"},"a meta tool file that describes a custom tool"),(0,l.kt)("li",{parentName:"ul"},"three ways for storing custom tool for Kraken Server:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"in local system"),(0,l.kt)("li",{parentName:"ul"},"in Kraken Server"),(0,l.kt)("li",{parentName:"ul"},"in Git repository"))),(0,l.kt)("li",{parentName:"ul"},"listing stored tools in Kraken Server"),(0,l.kt)("li",{parentName:"ul"},"running custom tool locally")))}u.isMDXComponent=!0}}]);