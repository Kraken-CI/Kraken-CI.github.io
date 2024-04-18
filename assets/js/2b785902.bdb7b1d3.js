"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[4806],{8387:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=o(4848),s=o(8453);o(4074);const i={id:"tools",title:"Tools"},l=void 0,r={id:"tools",title:"Tools",description:"Overview",source:"@site/docs/tools.md",sourceDirName:".",slug:"/tools",permalink:"/docs/tools",draft:!1,unlisted:!1,editUrl:"https://github.com/kraken-ci/website/edit/master/docs/tools.md",tags:[],version:"current",frontMatter:{id:"tools",title:"Tools"},sidebar:"someSidebar",previous:{title:"Test Results Tracking",permalink:"/docs/test-results-tracking"},next:{title:"Kraken Client Tool",permalink:"/docs/kkci"}},a={},c=[{value:"Overview",id:"overview",level:2},{value:"Custom Tools",id:"custom-tools",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Interaction Between a Tool and Kraken Agent",id:"interaction-between-a-tool-and-kraken-agent",level:2},{value:"Protocol Overview",id:"protocol-overview",level:3},{value:"Tool Framework",id:"tool-framework",level:3},{value:"Example of Simple Tool",id:"example-of-simple-tool",level:3},{value:"Example of Testing Tool",id:"example-of-testing-tool",level:3},{value:"Adding Custom Tool to Kraken Server",id:"adding-custom-tool-to-kraken-server",level:2},{value:"kkci - Kraken Client Tool",id:"kkci---kraken-client-tool",level:3},{value:"Tool Meta File",id:"tool-meta-file",level:3},{value:"Local Tools",id:"local-tools",level:3},{value:"Tools Stored in Kraken Server",id:"tools-stored-in-kraken-server",level:3},{value:"Tools from Remote Git Repo",id:"tools-from-remote-git-repo",level:3},{value:"List Registered Tool",id:"list-registered-tool",level:3},{value:"Running a Tool Locally",id:"running-a-tool-locally",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["Tools are used for executing steps in a job. Each step indicates what\ntool should be used for its execution. It can be e.g. a ",(0,t.jsx)(n.code,{children:"shell"})," tool\nto execute commands, other programs or a ",(0,t.jsx)(n.code,{children:"git"})," tool for cloning Git\nrepository. A step can have several input fields with values that are\nused by a tool."]}),"\n",(0,t.jsx)(n.p,{children:"There are several built-in tools. It is also possible to create\nyour own custom tool."}),"\n",(0,t.jsx)(n.p,{children:"Built-in tools:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"git"}),"\n",(0,t.jsx)(n.li,{children:"shell"}),"\n",(0,t.jsx)(n.li,{children:"artifacts"}),"\n",(0,t.jsx)(n.li,{children:"cache"}),"\n",(0,t.jsx)(n.li,{children:"pytest"}),"\n",(0,t.jsx)(n.li,{children:"pylint"}),"\n",(0,t.jsx)(n.li,{children:"gotest"}),"\n",(0,t.jsx)(n.li,{children:"junit_collect"}),"\n",(0,t.jsx)(n.li,{children:"values_collect"}),"\n",(0,t.jsx)(n.li,{children:"cloc"}),"\n",(0,t.jsx)(n.li,{children:"nglint"}),"\n",(0,t.jsx)(n.li,{children:"rndtest"}),"\n",(0,t.jsx)(n.li,{children:"local_tool"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These tools are described in detail in ",(0,t.jsx)(n.a,{href:"schema#built-in-step-tools",children:"Workflow Schema chapter, Built-in Step Tools section"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"custom-tools",children:"Custom Tools"}),"\n",(0,t.jsx)(n.p,{children:"Tools can be written in Python. It is possible to write them in other\nlanguages, but for Python there is already a framework that makes some\nactions easier."}),"\n",(0,t.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(n.p,{children:"The picture below shows the architecture around Kraken tools."}),"\n",(0,t.jsx)("img",{src:"/img/tool-arch.png",style:{margin:"0 20% 15px 20%"}}),"\n",(0,t.jsx)(n.p,{children:"Kraken Agent asks Kraken Server for a job using REST API. In the\nreceived job, there are defined multiple steps. For each step, a tool\nis indicated for its execution. Kraken Agent takes the tool and spawns\nit in a separate process. In arguments passed to the tool, the agent\ngives a special command and a path to a JSON file with step\ndetails. The tool, during its execution, sends the progress of\nexecution using TCP and JSON messages. These messages may contain\nchunks of executed tests with their results or chunks of discovered\nissues. In the end, the tool returns the exit code. If it is non-zero,\nthen this means that some error occurred."}),"\n",(0,t.jsx)(n.h2,{id:"interaction-between-a-tool-and-kraken-agent",children:"Interaction Between a Tool and Kraken Agent"}),"\n",(0,t.jsx)(n.p,{children:"A tool communicates with Kraken Agent using a specific protocol using\nJSON messages. Thanks to this it is possible to write your own custom\ntools."}),"\n",(0,t.jsx)(n.p,{children:"There are several ways a tool can get in interaction with Kraken\nServer via Kraken Agent. Tools can:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"do nothing, just do its job and that's it"}),"\n",(0,t.jsxs)(n.li,{children:["return list of all available test cases (eg. ",(0,t.jsx)(n.code,{children:"pytest"})," tool); this\nallows pre-storing all test case results as ",(0,t.jsx)(n.code,{children:"not run"})," initially and\nalso splitting execution of test cases to several jobs"]}),"\n",(0,t.jsxs)(n.li,{children:["report continuously test results (eg. ",(0,t.jsx)(n.code,{children:"pytest"})," tool)"]}),"\n",(0,t.jsxs)(n.li,{children:["report continuously issues (eg. ",(0,t.jsx)(n.code,{children:"pylint"})," tool)"]}),"\n",(0,t.jsxs)(n.li,{children:["report stored artifacts (eg. ",(0,t.jsx)(n.code,{children:"artifacts"})," tool)"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"protocol-overview",children:"Protocol Overview"}),"\n",(0,t.jsx)(n.p,{children:"There is a defined protocol between Kraken Agent and a tool. It works\ndifferently depending on the direction. Generally, an agent invokes one\nof predefined commands of a tool and then a tool responds to the agent\nvia an HTTP connection using JSON as a response format, and at the end\nthe tool exits with an exit code."}),"\n",(0,t.jsx)(n.p,{children:"The commands expected by Kraken Agent:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"get_commands"})," - it should return a list of commands exposed by a tool;\nthis command must be provided by every tool"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collect_tests"})," - it returns a list of available tests according to\nthe specification provided by the step definition; optional"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"run"})," - it should just execute a step; optional"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"run_tests"})," - it executes tests according to specification provided\nby step definition and report results live, progressively, one by one\nif possible; optional"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"run_analysis"})," - it should perform an analysis and report issues\nlive, progressively, one by one if possible"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["One of ",(0,t.jsx)(n.code,{children:"run*"})," commands must be provided by a tool."]}),"\n",(0,t.jsx)(n.h3,{id:"tool-framework",children:"Tool Framework"}),"\n",(0,t.jsxs)(n.p,{children:["Handling of commands and sending responses are quite automated by a\nPython tool framework. The framework requires defining one of ",(0,t.jsx)(n.code,{children:"run*"}),"\nfunctions and ",(0,t.jsx)(n.code,{children:"collect_tests"})," function if wanted."]}),"\n",(0,t.jsx)(n.h3,{id:"example-of-simple-tool",children:"Example of Simple Tool"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import os\nfrom . import utils\n\ndef run(step, **kwargs):\n    cmd = step['cmd']\n    cwd = step.get('cwd', None)\n    timeout = int(step.get('timeout', 60))\n    ret = utils.execute(cmd, cwd=cwd, timeout=timeout)\n    if ret != 0:\n        return ret, 'cmd exited with non-zero retcode: %s' % ret\n    return 0, ''\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This is a simplified implementation of ",(0,t.jsx)(n.code,{children:"shell"})," tool. It just executes\na ",(0,t.jsx)(n.code,{children:"cmd"})," command provided in a step. It also uses optional ",(0,t.jsx)(n.code,{children:"cwd"})," and\n",(0,t.jsx)(n.code,{children:"timeout"})," parameters provided in a step."]}),"\n",(0,t.jsxs)(n.p,{children:["The tool framework provides several helper modules. One of them is ",(0,t.jsx)(n.code,{children:"utils"}),"\nthat offers an ",(0,t.jsx)(n.code,{children:"execute"})," function. To use it import the module:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from . import utils\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"run"})," function must return an exit code (0 means all is ok) and a\nmessage that, in case of an error, describes the error (otherwise it\nreturns '' empty string)."]}),"\n",(0,t.jsx)(n.h3,{id:"example-of-testing-tool",children:"Example of Testing Tool"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import random\n\ndef collect_tests(step):\n    # return list of available tests\n    tests = ['test.aaa', 'test.bbb', 'test.ccc']\n    return tests\n\ndef run_tests(step, report_result=None):\n    # Now, the step contains a list of tests reported\n    # by collect_tests function. If there is no collect_tests\n    # function then the run_tests function should determine\n    # on its own scope of tests based of the step definition.\n    tests = step['tests']\n\n    for test in tests:\n        cmd = 'command to execute a test'\n        # status should indicate test result: 0 - not run, 1 - passed, 2 - failed,\n        # 3 - error, 4 - disabled/skip, 5 - unsupported\n        result = dict(cmd=cmd, test=test, status=random.choice([0, 1, 2, 3, 4, 5]))\n        # report_result is a callback provided by Kraken tool framework that sends back\n        # the test result to the server\n        report_result(result)\n\n    return 0, ''\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The tool has a hardcoded list of tests to execute regardless of the\nstep definition. Generally, ",(0,t.jsx)(n.code,{children:"collect_tests"})," function should return a\nlist of tests based on the step definition. Then the ",(0,t.jsx)(n.code,{children:"run_tests"}),' function\nreceives a list of tests in step definition and then it "executes" them\none by one, and then reports them using ',(0,t.jsx)(n.code,{children:"report_result"})," callback from\nKraken tool framework."]}),"\n",(0,t.jsx)(n.h2,{id:"adding-custom-tool-to-kraken-server",children:"Adding Custom Tool to Kraken Server"}),"\n",(0,t.jsx)(n.p,{children:"There are numerous ways to add a new tool to Kraken Server. After\nadding a tool to Kraken Server, it can be used in user-defined\nworkflows with stages and jobs."}),"\n",(0,t.jsx)(n.p,{children:"The ways for adding a tool to Kraken Server are as follows:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Adding a tool that is stored locally in a system"}),"\n",(0,t.jsx)(n.li,{children:"Uploading a tool to Kraken Server"}),"\n",(0,t.jsx)(n.li,{children:"Adding a tool from remote Git repository to Kraken Server"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In all these scenarios, a helper Kraken client tool ",(0,t.jsx)(n.code,{children:"kkci"})," is used."]}),"\n",(0,t.jsx)(n.h3,{id:"kkci---kraken-client-tool",children:"kkci - Kraken Client Tool"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kkci"})," provides multiple commands that help in various aspects related\nto Kraken CI. One of key areas is support for the develepment and\nmanagement of custom tools for Kraken."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kkci"})," installation instruction can be found\nhere: ",(0,t.jsx)(n.a,{href:"kkci#installation",children:"kkci#installation"}),". The detailed list of\ncommands that help with custom tools are available\nhere: ",(0,t.jsx)(n.a,{href:"kkci#tools-commands",children:"kkci#tools-commands"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"tool-meta-file",children:"Tool Meta File"}),"\n",(0,t.jsx)(n.p,{children:"Before adding a tool to Kraken Server, there needs to be prepared a\nmeta file for a tool. It defines the capabilities of a tool like:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"})," - a name of a tool;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"description"})," - a description of a tool, a few lines of text that\ntells what a tool can do;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"location"})," - relative location, folder, of a tool main Python module\nlooking from meta tool file, it will be used for invoking a tool,\ne.g. ",(0,t.jsx)(n.code,{children:"."})," or ",(0,t.jsx)(n.code,{children:"src"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"entry"})," - a name of a tool main Python module, e.g. ",(0,t.jsx)(n.code,{children:"main"}),"; it is\nassumed that this module is stored in a file ",(0,t.jsx)(n.code,{children:"entry"})," + ",(0,t.jsx)(n.code,{children:".py"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"parameters"})," a definition in ",(0,t.jsx)(n.a,{href:"https://json-schema.org/",children:"JSON Schema"}),"\nof input parameters that are expected in\na ",(0,t.jsx)(n.a,{href:"schema#steps-in-job",children:"step definition"})," for this tool"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The format of a tool meta file is JSON. Here is an example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "pkg_install",\n    "description": "A tool that allows for installing packages using various providers.",\n    "location": ".",\n    "entry": "main",\n    "parameters": {\n        "additionalProperties": false,\n        "required": ["pkgs"],\n        "properties": {\n            "pkgs": {\n                "description": "A list of packages to install.",\n                "type": "string"\n            },\n            "provider": {\n                "description": "A provider to be used to do installation.",\n                "enum": ["apt", "yum", "dnf", "apk"]\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["More examples can be found in Kraken's tools repository:\n",(0,t.jsx)(n.a,{href:"https://github.com/Kraken-CI/kraken-tools",children:"https://github.com/Kraken-CI/kraken-tools"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"local-tools",children:"Local Tools"}),"\n",(0,t.jsx)(n.p,{children:"In the case of local tools, they are stored already in a system where\nKraken Agent is running (e.g. on baremetal system or inside Docker\nimage). So the only missing piece is informing Kraken Server about\nthis fact."}),"\n",(0,t.jsxs)(n.p,{children:["For that purpose, ",(0,t.jsx)(n.code,{children:"kkci"})," is used and ",(0,t.jsx)(n.code,{children:"tools register"})," command. It needs\na tool meta file that indicates the location of the tool on a local system."]}),"\n",(0,t.jsxs)(n.p,{children:["The meta file ",(0,t.jsx)(n.code,{children:"tool.json"})," example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "pkg_install",\n    "description": "A tool that allows for installing packages using various providers.",\n    "location": "/opt/kraken-tools/pkg_install",\n    "entry": "main",\n    "parameters": {\n        "additionalProperties": false,\n        "required": ["pkgs"],\n        "properties": {\n            "pkgs": {\n                "description": "A list of packages to install.",\n                "type": "string"\n            },\n            "provider": {\n                "description": "A provider to be used to do installation.",\n                "enum": ["apt", "yum", "dnf", "apk"]\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This file says that the tool is located in\n",(0,t.jsx)(n.code,{children:"/opt/kraken-tools/pkg_install"})," directory, in ",(0,t.jsx)(n.code,{children:"main.py"})," module."]}),"\n",(0,t.jsx)(n.p,{children:"The register command example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ kkci -s http://admin:admin@localhost:8080 tools register tool.json\nStored tool pkg_install@dev5\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now the tool may be used in a step in a workflow schema:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"parent": "root",\n"triggers": {\n    "parent": True\n},\n"parameters": [],\n"configs": [],\n"jobs": [{\n    "name": "hello",\n    "steps": [{\n        "tool": "pkg_install@dev5",\n        "pkgs": "mc"\n    }],\n    "environments": [{\n        "system": "any",\n        "agents_group": "all",\n        "config": "default"\n    }]\n}]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, a tool version ",(0,t.jsx)(n.code,{children:"dev5"})," is used directly. It could be\njust:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'    "steps": [{\n        "tool": "pkg_install",\n        "pkgs": "mc"\n    }],\n'})}),"\n",(0,t.jsxs)(n.p,{children:["that says that the latest version of ",(0,t.jsx)(n.code,{children:"pkg_install"})," tool should be used."]}),"\n",(0,t.jsx)(n.h3,{id:"tools-stored-in-kraken-server",children:"Tools Stored in Kraken Server"}),"\n",(0,t.jsxs)(n.p,{children:["Another way to provide a tool in Kraken is to store it on Kraken\nServer in Minio. For that purpose, another ",(0,t.jsx)(n.code,{children:"kkci"})," command can be used:\n",(0,t.jsx)(n.code,{children:"tools upload"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The meta file ",(0,t.jsx)(n.code,{children:"tool.json"})," example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "pkg_install",\n    "description": "A tool that allows for installing packages using various providers.",\n    "location": ".",\n    "entry": "main",\n    "parameters": {\n        "additionalProperties": false,\n        "required": ["pkgs"],\n        "properties": {\n            "pkgs": {\n                "description": "A list of packages to install.",\n                "type": "string"\n            },\n            "provider": {\n                "description": "A provider to be used to do installation.",\n                "enum": ["apt", "yum", "dnf", "apk"]\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, the location parameter is not important as it is\noverwritten by Kraken Server to a proper location to Minio, where the\ntool will be stored. Still, it is important to indicate the main\nmodule name and, in the example, it points to ",(0,t.jsx)(n.code,{children:"main.py"})," again."]}),"\n",(0,t.jsx)(n.p,{children:"And now the upload command example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ kkci -s http://admin:admin@localhost:8080 tools upload ./pkg-tool/tool.json\nexecute 'python3 -m pip install -r requirements.txt --target=./vendor' in '/home/godfryd/repos/kraken/pkg-tool'\nCollecting pycvs\n  Using cached pycvs-0.0.3-py3-none-any.whl (8.8 kB)\nCollecting colorama\n  Using cached colorama-0.4.5-py2.py3-none-any.whl (16 kB)\nCollecting pexpect\n  Using cached pexpect-4.8.0-py2.py3-none-any.whl (59 kB)\nCollecting ptyprocess>=0.5\n  Using cached ptyprocess-0.7.0-py2.py3-none-any.whl (13 kB)\nInstalling collected packages: ptyprocess, pexpect, colorama, pycvs\nSuccessfully installed colorama-0.4.5 pexpect-4.8.0 ptyprocess-0.7.0 pycvs-0.0.3\nWARNING: You are using pip version 22.0.4; however, version 22.1.2 is available.\nYou should consider upgrading via the '/home/godfryd/.cache/pypoetry/virtualenvs/krakenci-client-gzjv3aIZ-py3.10/bin/python3 -m pip install --upgrade pip' command.\nUploaded tool pkg_install@dev6\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here ",(0,t.jsx)(n.code,{children:"kkci"})," assumes that the tool source code is located in the same\nfolder as the meta file ",(0,t.jsx)(n.code,{children:"tool.json"})," (it is called the tool\ndirectory). So first, if in this folder there is ",(0,t.jsx)(n.code,{children:"requirements.txt"}),"\nfile then ",(0,t.jsx)(n.code,{children:"kkci"})," install all dependencies to the temporary ",(0,t.jsx)(n.code,{children:"vendor"}),"\ndirectory. Then ",(0,t.jsx)(n.code,{children:"kkci"})," packs all files from the tool directory\ntogether with the vendor directory into a zip package. In the end, the\npackage is uploaded to Kraken Server together with tool meta file\n",(0,t.jsx)(n.code,{children:"tool.json"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This way if there are any dependencies indicated in ",(0,t.jsx)(n.code,{children:"requirements.txt"}),"\nfile then they are stored together with a tool in Kraken Server and\nare always the same during tool usage."]}),"\n",(0,t.jsx)(n.h3,{id:"tools-from-remote-git-repo",children:"Tools from Remote Git Repo"}),"\n",(0,t.jsxs)(n.p,{children:["The last way for storing a custom tool is keeping it in Git\nrepository. ",(0,t.jsx)(n.code,{children:"kkci"})," provides a command that allows registering\nremotely stored custom tool."]}),"\n",(0,t.jsxs)(n.p,{children:["The meta file ",(0,t.jsx)(n.code,{children:"tool.json"})," example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "pkg_install",\n    "description": "A tool that allows for installing packages using various providers.",\n    "location": ".",\n    "entry": "main",\n    "parameters": {\n        "additionalProperties": false,\n        "required": ["pkgs"],\n        "properties": {\n            "pkgs": {\n                "description": "A list of packages to install.",\n                "type": "string"\n            },\n            "provider": {\n                "description": "A provider to be used to do installation.",\n                "enum": ["apt", "yum", "dnf", "apk"]\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The location field needs to be a relative path to a directory with an\nentry source module."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"tools register-remote"})," looks as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ kkci -s http://admin:admin@localhost:8080 tools register-remote \\\n       -f pkg_install/tool.json https://github.com/Kraken-CI/kraken-tools\nStored tool pkg_install@48d4c5e\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-f"})," parameter indicates a path in the repo to the tool meta file."]}),"\n",(0,t.jsx)(n.h3,{id:"list-registered-tool",children:"List Registered Tool"}),"\n",(0,t.jsxs)(n.p,{children:["When a custom tool is registered in Kraken Server using one of the\nabove commands, it is possible to check if our tool is in the list of\nall tools in Kraken Server. For that purpose, there is a ",(0,t.jsx)(n.code,{children:"tools list"}),"\ncommand:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ kkci -s http://admin:admin@localhost:8080 tools list\n  Id  Name            Location                 Entry    Last Version\n----  --------------  -----------------------  -------  --------------\n   5  artifacts                                         1\n   9  cache                                             1\n   7  cloc                                              1\n   1  git                                               1\n  10  gotest                                            1\n  11  junit_collect                                     1\n  16  local                                             1\n  17  local_tool                                        1\n   8  nglint                                            1\n 133  pkg_install     minio:tool-133/tool.zip  main     dev6\n   6  pylint                                            1\n   3  pytest                                            1\n   4  rndtest                                           1\n   2  shell                                             1\n  12  values_collect                                    1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Yes, on the list, there is our tool, ",(0,t.jsx)(n.code,{children:"pkg_install"}),". The last version is ",(0,t.jsx)(n.code,{children:"dev6"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To list all versions of a given tool there is ",(0,t.jsx)(n.code,{children:"tools list-versions"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ kkci -s http://admin:admin@localhost:8080 tools list-versions pkg_install\n  Id  Name         Location                             Entry    Version\n----  -----------  -----------------------------------  -------  ---------\n 133  pkg_install  minio:tool-133/tool.zip              main     dev6\n 132  pkg_install  /home/godfryd/repos/kraken/pkg-tool  main     dev5\n 131  pkg_install  minio:tool-131/tool.zip              main     48d4c5e\n 130  pkg_install  /home/godfryd/repos/kraken/pkg-tool  main     dev4\n...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"running-a-tool-locally",children:"Running a Tool Locally"}),"\n",(0,t.jsx)(n.p,{children:"Developing a new tool by uploading it after each code change would be tiresome.\nIt is quicker to run the tool locally and check if all works before uploading\nthe tool to Kraken Server."}),"\n",(0,t.jsx)(n.p,{children:"A step file needs to be prepared to run the tool locally. This file\ncontains information on how the tool should be run i.e. it contains all\nthe arguments that the tool is expecting."}),"\n",(0,t.jsxs)(n.p,{children:["To make it easy, the step file can be generated semi-automatically based\non the meta tool file. This can be done in the following way using\n",(0,t.jsx)(n.code,{children:"kkci"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ kkci tools generate-step-file ./pkg-tool/tool.json\nPlease, enter values for pkg_install tool parameters\n  pkgs (string): mc\n  provider (string, one of ['apt', 'yum', 'dnf', 'apk']): apt\nStep file stored to /home/godfryd/repos/kraken/pkg-tool/step.json\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As can be seen in the log, ",(0,t.jsx)(n.code,{children:"kkci"})," asks for values for the required\nparameters. The meta tool file defines such parameters: ",(0,t.jsx)(n.code,{children:"pkgs"})," and\n",(0,t.jsx)(n.code,{children:"provider"}),". If the parameter type is too complex (e.g. a structure)\nthen it needs to be set manually in the generated step file. The last\nline in the log indicates the location of the generated step file."]}),"\n",(0,t.jsxs)(n.p,{children:["Having the step file, we can run our tool locally. Again using ",(0,t.jsx)(n.code,{children:"kkci"}),"\nit can be made in the following way:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ kkci tools run ./pkg_tool/tool.json -f ./pkg_tool/step.json\nexecute 'python3 -m pip install -r requirements.txt --target=./vendor' in '/home/godfryd/repos/kraken/pkg-tool'\nCollecting pycvs\n  Using cached pycvs-0.0.3-py3-none-any.whl (8.8 kB)\nCollecting colorama\n  Using cached colorama-0.4.5-py2.py3-none-any.whl (16 kB)\nCollecting pexpect\n  Using cached pexpect-4.8.0-py2.py3-none-any.whl (59 kB)\nCollecting ptyprocess>=0.5\n  Using cached ptyprocess-0.7.0-py2.py3-none-any.whl (13 kB)\nInstalling collected packages: ptyprocess, pexpect, colorama, pycvs\nSuccessfully installed colorama-0.4.5 pexpect-4.8.0 ptyprocess-0.7.0 pycvs-0.0.3\nYou should consider upgrading via the '/home/godfryd/.cache/pypoetry/virtualenvs/krakenci-client-gzjv3aIZ-py3.10/bin/python3 -m pip install --upgrade pip' command.\nexecute 'PYTHONPATH=/home/godfryd/repos/kraken/pkg-tool:/home/godfryd/repos/kraken/pkg-tool/vendor /home/godfryd/.cache/pypoetry/virtualenvs/krakenci-client-gzjv3aIZ-py3.10/bin/python -m kraken.agent.tool -m main -s ../pkg-tool/step.json check-integrity' in 'None'\nexecute 'PYTHONPATH=/home/godfryd/repos/kraken/pkg-tool:/home/godfryd/repos/kraken/pkg-tool/vendor /home/godfryd/.cache/pypoetry/virtualenvs/krakenci-client-gzjv3aIZ-py3.10/bin/python -m kraken.agent.tool -m main -s ../pkg-tool/step.json get_commands' in 'None'\nexecute 'PYTHONPATH=/home/godfryd/repos/kraken/pkg-tool:/home/godfryd/repos/kraken/pkg-tool/vendor /home/godfryd/.cache/pypoetry/virtualenvs/krakenci-client-gzjv3aIZ-py3.10/bin/python -m kraken.agent.tool -m main -s ../pkg-tool/step.json run' in 'None'\n\n2022-08-11 08:07:41,871 run step tool pkg_install, cmd run\n2022-08-11 08:07:41,992 exec: 'sudo apt install --no-install-recommends -y mc' in '/home/godfryd/repos/kraken/client'\n2022-08-11 08:07:42,085 output:\nReading package lists...\n2022-08-11 08:07:42,583 output: Building dependency tree...\nReading state information...\nmc is already the newest version (3:4.8.27-1).\n2022-08-11 08:07:42,675 output: 0 upgraded, 0 newly installed, 0 to remove and 16 not upgraded.\n2022-08-11 08:07:42,757 step tool pkg_install, cmd run done with retcode 0 in 1secs\n2022-08-11 08:07:42,757 tool response: {\"status\": \"done\"}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"This is all in terms of custom tool development. This section presented:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"what is the custom tool and how it interacts with Kraken Server"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kkci"})," - CLI that provides useful operations around custom tools"]}),"\n",(0,t.jsx)(n.li,{children:"a meta tool file that describes a custom tool"}),"\n",(0,t.jsxs)(n.li,{children:["the three ways for storing custom tool for Kraken Server:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"in a local system"}),"\n",(0,t.jsx)(n.li,{children:"in Kraken Server"}),"\n",(0,t.jsx)(n.li,{children:"in a Git repository"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"listing stored tools in Kraken Server"}),"\n",(0,t.jsx)(n.li,{children:"running the custom tool locally"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4074:(e,n,o)=>{o.d(n,{A:()=>s});o(6540);var t=o(4848);const s=e=>{let{img:n}=e;return(0,t.jsx)("a",{href:"/img/"+n,target:"blank",children:(0,t.jsx)("img",{src:"/img/"+n,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}})})}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>r});var t=o(6540);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);