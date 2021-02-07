(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var p=n(0),o=n.n(p);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,p)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,p,o=function(e,t){if(null==e)return{};var n,p,o={},a=Object.keys(e);for(p=0;p<a.length;p++)n=a[p],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)n=a[p],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=o.a.createContext({}),c=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return o.a.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,s=e.parentName,r=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=p,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?o.a.createElement(g,l(l({ref:t},r),{},{components:n})):o.a.createElement(g,l({ref:t},r))}));function g(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:p,s[1]=l;for(var r=2;r<a;r++)s[r]=n[r];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return c}));var p=n(3),o=n(7),a=(n(0),n(112)),s={id:"guide-intro",title:"Introductory Guide"},l={unversionedId:"guide-intro",id:"guide-intro",isDocsHomePage:!1,title:"Introductory Guide",description:"Assumptions",source:"@site/docs/guide-intro.md",slug:"/guide-intro",permalink:"/docs/guide-intro",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/guide-intro.md",version:"current",sidebar:"someSidebar",previous:{title:"Global Storage",permalink:"/docs/storage"},next:{title:"Contributing to Kraken",permalink:"/docs/contrib-kraken"}},i=[{value:"Assumptions",id:"assumptions",children:[]},{value:"Project Preparation",id:"project-preparation",children:[]},{value:"Stage Hello World",id:"stage-hello-world",children:[]},{value:"Git Repo Checkout Step",id:"git-repo-checkout-step",children:[]},{value:"Run Tests Step",id:"run-tests-step",children:[]},{value:"Building Step",id:"building-step",children:[]},{value:"Storing Artifacts Step",id:"storing-artifacts-step",children:[]}],r={toc:i};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(p.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"assumptions"},"Assumptions"),Object(a.b)("p",null,"We are using fresh Kraken installation using Docker Compose with built-in Agent running in Docker as well.\nInstallation instruction can be found in ",Object(a.b)("a",Object(p.a)({parentName:"p"},{href:"/docs/installation"}),"Installation chapter"),"."),Object(a.b)("h2",{id:"project-preparation"},"Project Preparation"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create a project"),Object(a.b)("p",{parentName:"li"},"name: ",Object(a.b)("inlineCode",{parentName:"p"},"Demo"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create a branch"),Object(a.b)("p",{parentName:"li"},"name: ",Object(a.b)("inlineCode",{parentName:"p"},"master"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create a stage"),Object(a.b)("p",{parentName:"li"},"name: ",Object(a.b)("inlineCode",{parentName:"p"},"Stage 1")))),Object(a.b)("h2",{id:"stage-hello-world"},"Stage Hello World"),Object(a.b)("p",null,"Edit schema:"),Object(a.b)("pre",null,Object(a.b)("code",Object(p.a)({parentName:"pre"},{className:"language-python"}),'def stage(ctx):\n    return {\n        "parent": "root",\n        "triggers": {\n            "parent": True,\n        },\n        "parameters": [],\n        "configs": [],\n        "jobs": [{\n            "name": "hello",\n            "steps": [{\n                "tool": "shell",\n                "cmd": "echo \'hello world\'"\n            }],\n            "environments": [{\n                "system": "ubuntu-18.04",\n                "agents_group": "all",\n                "config": "c1"\n            }]\n        }],\n    }\n')),Object(a.b)("p",null,"Now run CI flow."),Object(a.b)("pre",null,Object(a.b)("code",Object(p.a)({parentName:"pre"},{className:"language-console"}),"* shell\nexec: 'echo 'hello world'' in '/tmp/kk-jobs/jobs/570'\nhello world\n")),Object(a.b)("h2",{id:"git-repo-checkout-step"},"Git Repo Checkout Step"),Object(a.b)("p",null,"Add step for checking out a Git repository"),Object(a.b)("pre",null,Object(a.b)("code",Object(p.a)({parentName:"pre"},{className:"language-python"}),'   "steps": [{\n       "tool": "git",\n       "checkout": "https://github.com/Kraken-CI/sample-project-python.git"\n   }, {\n       "tool": "shell",\n       "cmd": "ls -al"\n   }],\n')),Object(a.b)("p",null,"Now run CI flow again. The output should look like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(p.a)({parentName:"pre"},{className:"language-console"}),"* git\nexec: 'git clone https://github.com/Kraken-CI/sample-project-python.git ' in '/tmp/kk-jobs/jobs/571'\nCloning into 'sample-project-python'...\nStep succeeded\n* shell\nexec: 'ls -al' in '/tmp/kk-jobs/jobs/571'\ntotal 20\ndrwxrwxr-x  3 godfryd godfryd 4096 wrz  3 10:21 .\ndrwxrwxr-x 11 godfryd godfryd 4096 wrz  3 10:21 ..\ndrwxrwxr-x  7 godfryd godfryd 4096 wrz  3 10:21 sample-project-python\n-rw-rw-r--  1 godfryd godfryd  267 wrz  3 10:21 step_0.json\n-rw-rw-r--  1 godfryd godfryd  172 wrz  3 10:21 step_1.json\nStep succeeded\n")),Object(a.b)("h2",{id:"run-tests-step"},"Run Tests Step"),Object(a.b)("p",null,"There are several built-in steps for running tests. In case of our Python sample project we will use ",Object(a.b)("inlineCode",{parentName:"p"},"pytest")," built-in step."),Object(a.b)("pre",null,Object(a.b)("code",Object(p.a)({parentName:"pre"},{className:"language-python"}),'   "steps": [{\n       "tool": "git",\n       "checkout": "https://github.com/Kraken-CI/sample-project-python.git"\n   }, {\n       "tool": "pytest",\n       "cwd": "sample-project-python",\n       "params": "-vv",\n       "pythonpath": "src"\n   }],\n')),Object(a.b)("p",null,"And the job output:"),Object(a.b)("pre",null,Object(a.b)("code",Object(p.a)({parentName:"pre"},{className:"language-console"}),"* git\nexec: 'git clone https://github.com/Kraken-CI/sample-project-python.git ' in '/tmp/kk-jobs/jobs/590'\nCloning into 'sample-project-python'...\nStep succeeded\n* pytest\nexec: 'PYTHONPATH=`pwd`:src pytest-3 --collect-only -q   | head -n -2' in 'sample-project-python'\ntests/test_simple.py::TestSimple::test_add_one\nexec: 'PYTHONPATH=`pwd`:src pytest-3 -vv -r ap --junit-xml=result.xml -vv tests/test_simple.py::TestSimple::test_add_one' in 'sample-project-python'\n============================= test session starts ==============================\n\nplatform linux -- Python 3.7.5, pytest-3.10.1, py-1.8.0, pluggy-0.12.0 -- /usr/bin/python3\ncachedir: .pytest_cache\nrootdir: /tmp/kk-jobs/jobs/590/sample-project-python, inifile:\ncollecting ...\ncollected 1 item\ntests/test_simple.py::TestSimple::test_add_one\nPASSED\n                    [100%]\n=========================== short test summary info ============================\nPASSED tests/test_simple.py::TestSimple::test_add_one\n=========================== 1 passed in 0.02 seconds ===========================\n\n-- generated xml file: /tmp/kk-jobs/jobs/590/sample-project-python/result.xml --\nStep succeeded\n")),Object(a.b)("h2",{id:"building-step"},"Building Step"),Object(a.b)("p",null,"Add step for checking out a Git repository"),Object(a.b)("pre",null,Object(a.b)("code",Object(p.a)({parentName:"pre"},{className:"language-python"}),'   "steps": [{\n       "tool": "git",\n       "checkout": "https://github.com/Kraken-CI/sample-project-python.git"\n   }, {\n       "tool": "pytest",\n       "cwd": "sample-project-python",\n       "params": "-vv",\n       "pythonpath": "src"\n   }, {\n       "tool": "shell",\n       "cwd": "sample-project-python",\n       "cmd": "python3 setup.py sdist bdist_wheel"\n   }],\n')),Object(a.b)("p",null,"Now run CI flow again. The output should look as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(p.a)({parentName:"pre"},{className:"language-console"}),"* git\nexec: 'git clone https://github.com/Kraken-CI/sample-project-python.git ' in '/tmp/kk-jobs/jobs/572'\nCloning into 'sample-project-python'...\nStep succeeded\n* pytest\nexec: 'PYTHONPATH=`pwd`:src pytest-3 --collect-only -q   | head -n -2' in 'sample-project-python'\n...\nStep succeeded\n* shell\nexec: 'python3 setup.py sdist bdist_wheel' in 'sample-project-python'\nusage: setup.py [global_opts] cmd1 [cmd1_opts] [cmd2 [cmd2_opts] ...]\n   or: setup.py --help [cmd1 cmd2 ...]\n   or: setup.py --help-commands\n   or: setup.py cmd --help\n\nerror: invalid command 'bdist_wheel'\nStep error\n")),Object(a.b)("p",null,"It seems that there is missing package that provides wheel support for Python.\nLet's install it."),Object(a.b)("pre",null,Object(a.b)("code",Object(p.a)({parentName:"pre"},{className:"language-python"}),'   "steps": [{\n       "tool": "git",\n       "checkout": "https://github.com/Kraken-CI/sample-project-python.git"\n   }, {\n       "tool": "pytest",\n       "cwd": "sample-project-python",\n       "params": "-vv",\n       "pythonpath": "src"\n   }, {\n       "tool": "shell",\n       "cmd": "sudo DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends python3-wheel python3-setuptools"\n   }, {\n       "tool": "shell",\n       "cwd": "sample-project-python",\n       "cmd": "python3 setup.py sdist bdist_wheel"\n   }],\n')),Object(a.b)("p",null,"New output with building:"),Object(a.b)("pre",null,Object(a.b)("code",Object(p.a)({parentName:"pre"},{className:"language-console"}),"* git\nexec: 'git clone https://github.com/Kraken-CI/sample-project-python.git ' in '/tmp/kk-jobs/jobs/590'\nCloning into 'sample-project-python'...\nStep succeeded\n* pytest\nexec: 'PYTHONPATH=`pwd`:src pytest-3 --collect-only -q   | head -n -2' in 'sample-project-python'\n...\nStep succeeded\n* shell\nexec: 'sudo DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends python3-wheel python3-setuptools' in '/tmp/kk-jobs/jobs/590'\nCzytanie list pakiet\xf3w...\nBudowanie drzewa zale\u017cno\u015bci...\nOdczyt informacji o stanie...\npython3-setuptools is already the newest version (41.1.0-1).\npython3-wheel is already the newest version (0.32.3-2).\nNast\u0119puj\u0105ce pakiety zosta\u0142y zainstalowane automatycznie i nie s\u0105 ju\u017c wi\u0119cej wymagane:\n  linu\nx-headers-5.3.0-53 linux-headers-5.3.0-53-generic\n  linux-image-5.3.0-53-generic linux-modules-5.3.0-53-generic\n  linux-modules-extra-5.3.0-53-generic python-appindicator\nAby je usun\u0105\u0107 nale\u017cy u\u017cy\u0107 \"sudo apt autoremove\".\n0 aktualizowanych, 0 nowo instalowanych, 0 usuwanych i 13 nieaktualizowanych.\nStep succeeded\n* shell\nexec: 'python3 setup.py sdist bdist_wheel' in 'sample-project-python'\nrunning sdist\nrunning egg_info\ncreating src/sampleproject.egg-info\nwriting entry points to src/sampleproject.egg-info/entry_points.txt\nwriting src/sampleproject.egg-info/PKG-INFO\nwriting dependency_links to src/sampleproject.egg-info/dependency_links.txt\nwriting requirements to src/sampleproject.egg-info/requires.txt\nwriting top-level names to src/sampleproject.egg-info/top_level.txt\nwriting manifest file 'src/sampleproject.egg-info/SOURCES.txt'\nreading manifest file 'src/sampleproject.egg-info/SOURCES.txt'\nreading manifest template 'MANIFEST.in'\nrunning check\nwriting manifest file 'src/sampleproject.egg-info/SOURCES.txt'\ncreating sampleproject-2.0.0/src/sample\ncreating sampleproject-2.0.0/src/sampleproject.egg-info\ncopying files to sampleproject-2.0.0...\ncopying LICENSE.txt -> sampleproject-2.0.0\ncreating sampleproject-2.0.0\ncreating sampleproject-2.0.0/data\ncreating sampleproject-2.0.0/src\ncopying MANIFEST.in -> sampleproject-2.0.0\ncopying setup.cfg -> sampleproject-2.0.0\ncopying setup.py -> sampleproject-2.0.0\ncopying README.md -> sampleproject-2.0.0\ncopying pyproject.toml -> sampleproject-2.0.0\ncopying data/data_file -> sampleproject-2.0.0/data\ncopying src/sample/__init__.py -> sampleproject-2.0.0/src/sample\ncopying src/sample/package_data.dat -> sampleproject-2.0.0/src/sample\ncopying src/sampleproject.egg-info/dependency_links.txt -> sampleproject-2.0.0/src/sampleproject.egg-info\ncopying src/sampleproject.egg-info/entry_points.txt -> sampleproject-2.0.0/src/sampleproject.egg-info\ncopying src/sampleproject.egg-info/SOURCES.txt -> sampleproject-2.0.0/src/sampleproject.egg-info\ncopying src/sample/simple.py -> sampleproject-2.0.0/src/sample\ncopying src/sampleproject.egg-info/PKG-INFO -> sampleproject-2.0.0/src/sampleproject.egg-info\ncopying src/sampleproject.egg-info/requires.txt -> sampleproject-2.0.0/src/sampleproject.egg-info\ncopying src/sampleproject.egg-info/top_level.txt -> sampleproject-2.0.0/src/sampleproject.egg-info\nWriting sampleproject-2.0.0/setup.cfg\ncreating dist\nCreating tar archive\nremoving 'sampleproject-2.0.0' (and everything under it)\nrunning bdist_wheel\nrunning build_py\ncreating build\nrunning build\ncopying src/sample/__init__.py -> build/lib/sample\ncreating build/lib\ncreating build/lib/sample\ncopying src/sample/simple.py -> build/lib/sample\ncopying src/sample/package_data.dat -> build/lib/sample\ninstalling to build/bdist.linux-x86_64/wheel\nrunning install_lib\nrunning install\ncreating build/bdist.linux-x86_64/wheel\ncreating build/bdist.linux-x86_64/wheel/sample\ncreating build/bdist.linux-x86_64\ncopying build/lib/sample/package_data.dat -> build/bdist.linux-x86_64/wheel/sample\ncopying build/lib/sample/simple.py -> build/bdist.linux-x86_64/wheel/sample\ncopying build/lib/sample/__init__.py -> build/bdist.linux-x86_64/wheel/sample\nrunning install_data\ncreating build/bdist.linux-x86_64/wheel/sampleproject-2.0.0.data/data\ncreating build/bdist.linux-x86_64/wheel/sampleproject-2.0.0.data/data/my_data\ncopying data/data_file -> build/bdist.linux-x86_64/wheel/sampleproject-2.0.0.data/data/my_data\ncreating build/bdist.linux-x86_64/wheel/sampleproject-2.0.0.data\nrunning install_egg_info\nCopying src/sampleproject.egg-info to build/bdist.linux-x86_64/wheel/sampleproject-2.0.0.egg-info\nrunning install_scripts\nadding license file \"LICENSE.txt\" (matched pattern \"LICENSE.txt\")\ncreating 'dist/sampleproject-2.0.0-py3-none-any.whl' and adding 'build/bdist.linux-x86_64/wheel' to it\ncreating build/bdist.linux-x86_64/wheel/sampleproject-2.0.0.dist-info/WHEEL\nadding 'sample/package_data.dat'\nadding 'sample/__init__.py'\nadding 'sample/simple.py'\nadding 'sampleproject-2.0.0.data/data/my_data/data_file'\nadding 'sampleproject-2.0.0.dist-info/LICENSE.txt'\nadding 'sampleproject-2.0.0.dist-info/METADATA'\nadding 'sampleproject-2.0.0.dist-info/entry_points.txt'\nadding 'sampleproject-2.0.0.dist-info/WHEEL'\nremoving build/bdist.linux-x86_64/wheel\nadding 'sampleproject-2.0.0.dist-info/RECORD'\nadding 'sampleproject-2.0.0.dist-info/top_level.txt'\nStep succeeded\n")),Object(a.b)("h2",{id:"storing-artifacts-step"},"Storing Artifacts Step"),Object(a.b)("p",null,"The results of building the sample projects are two packages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"dist/sampleproject-2.0.0-py3-none-any.whl")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"dist/sampleproject-2.0.0.tar.gz"))),Object(a.b)("p",null,"For that purpose there is another built-in step: ",Object(a.b)("inlineCode",{parentName:"p"},"artifacts"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(p.a)({parentName:"pre"},{className:"language-python"}),'   "steps": [{\n       "tool": "git",\n       "checkout": "https://github.com/Kraken-CI/sample-project-python.git"\n   }, {\n       "tool": "pytest",\n       "cwd": "sample-project-python",\n       "params": "-vv",\n       "pythonpath": "src"\n   }, {\n       "tool": "shell",\n       "cmd": "sudo DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends python3-wheel python3-setuptools"\n   }, {\n       "tool": "shell",\n       "cwd": "sample-project-python",\n       "cmd": "python3 setup.py sdist bdist_wheel"\n   }, {\n       "tool": "artifacts",\n       "action": "upload",\n       "cwd": "sample-project-python/dist",\n       "source": [\n           "sampleproject-2.0.0-py3-none-any.whl",\n           "sampleproject-2.0.0.tar.gz"\n       ],\n       "public": True\n   }],\n')),Object(a.b)("p",null,"And the job output:"),Object(a.b)("pre",null,Object(a.b)("code",Object(p.a)({parentName:"pre"},{className:"language-console"}),"* git\nexec: 'git clone https://github.com/Kraken-CI/sample-project-python.git ' in '/tmp/kk-jobs/jobs/590'\nCloning into 'sample-project-python'...\nStep succeeded\n* pytest\nexec: 'PYTHONPATH=`pwd`:src pytest-3 --collect-only -q   | head -n -2' in 'sample-project-python'\ntests/test_simple.py::TestSimple::test_add_one\nexec: 'PYTHONPATH=`pwd`:src pytest-3 -vv -r ap --junit-xml=result.xml -vv tests/test_simple.py::TestSimple::test_add_one' in 'sample-project-python'\n...\nStep succeeded\n* shell\nexec: 'sudo DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends python3-wheel python3-setuptools' in '/tmp/kk-jobs/jobs/590'\n...\nStep succeeded\n* shell\nexec: 'python3 setup.py sdist bdist_wheel' in 'sample-project-python'\n...\nStep succeeded\n* artifacts\nupload: source: ['sampleproject-2.0.0-py3-none-any.whl', 'sampleproject-2.0.0.tar.gz'], dest: /\nstore /tmp/kk-jobs/jobs/590/sample-project-python/dist/sampleproject-2.0.0-py3-none-any.whl -> /sampleproject-2.0.0-py3-none-any.whl\nstore /tmp/kk-jobs/jobs/590/sample-project-python/dist/sampleproject-2.0.0.tar.gz -> /sampleproject-2.0.0.tar.gz\n")))}c.isMDXComponent=!0}}]);