(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},179:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tmux-54d21ea69b4d24f9aa54ec0b207577c1.png"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(122)),i={id:"dev-guide",title:"Development Guide"},l={unversionedId:"dev-guide",id:"dev-guide",isDocsHomePage:!1,title:"Development Guide",description:"Development Depencies",source:"@site/docs/dev-guide.md",slug:"/dev-guide",permalink:"/docs/dev-guide",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/dev-guide.md",version:"current",sidebar:"someSidebar",previous:{title:"Contributing to Kraken",permalink:"/docs/contrib-kraken"},next:{title:"Contributing to Documentation",permalink:"/docs/contrib-docs"}},c=[{value:"Development Depencies",id:"development-depencies",children:[{value:"Ubuntu 20.04",id:"ubuntu-2004",children:[]}]},{value:"Download Sources",id:"download-sources",children:[]},{value:"Start in Docker Compose",id:"start-in-docker-compose",children:[]},{value:"Start Services Individually",id:"start-services-individually",children:[]}],s={toc:c};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"development-depencies"},"Development Depencies"),Object(o.b)("h3",{id:"ubuntu-2004"},"Ubuntu 20.04"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"git"),Object(o.b)("li",{parentName:"ul"},"rake"),Object(o.b)("li",{parentName:"ul"},"python3-venv"),Object(o.b)("li",{parentName:"ul"},"python3-pip"),Object(o.b)("li",{parentName:"ul"},"openjdk-11-jre-headless or newer -- required for swagger-codegen"),Object(o.b)("li",{parentName:"ul"},"docker.io"),Object(o.b)("li",{parentName:"ul"},"docker-compose")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"$ sudo apt update\n$ sudo apt install git rake python3-venv python3-pip openjdk-11-jre-headless \\\n   docker.io docker-compose\n")),Object(o.b)("h2",{id:"download-sources"},"Download Sources"),Object(o.b)("p",null,"Sources are stored in Git repository on GitHub: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken"},"https://github.com/Kraken-CI/kraken"),".\nFirst start with forking the repository and then cloning your own copy of it."),Object(o.b)("p",null,"To clone repository via HTTPS do:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"$ git clone https://github.com/<username>/kraken\n\n")),Object(o.b)("p",null,"or using SSH:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"$ git clone git@github.com:<username>/kraken.git\n")),Object(o.b)("h2",{id:"start-in-docker-compose"},"Start in Docker Compose"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"$ cd kraken\n$ rake docker_up\n")),Object(o.b)("p",null,"This command is using docker-compose.yaml file from the repository.\nThis file defines all the services and how to build them.\nSo this command builds all services and then spins up their containers."),Object(o.b)("p",null,"Now Kraken service is avaiable from ",Object(o.b)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),"."),Object(o.b)("p",null,"All containers can be stopped by ",Object(o.b)("inlineCode",{parentName:"p"},"Ctrl-C"),". You may use this method for\ndevelopment. Prepare changes, then ",Object(o.b)("inlineCode",{parentName:"p"},"rake docker_up"),", check changes\nif all is ok and then stop all with ",Object(o.b)("inlineCode",{parentName:"p"},"Ctrl-C"),"."),Object(o.b)("p",null,"This method is not that convenient for quick development. Building\nand starting all services from scratch takes several minutes.\nThere is a better method"),Object(o.b)("h2",{id:"start-services-individually"},"Start Services Individually"),Object(o.b)("p",null,"Each Kraken service can be run individually. There is a bunch of Rake\ntasks for that:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rake serve_ui")," - start Kraken Angular app"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rake run_server")," - start Kraken web server"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rake run_scheduler")," - start Kraken scheduler service"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rake run_planner")," - start Kraken planner service"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rake run_watchdog")," - start Kraken watchdog service"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rake run_celery")," - start Celery with Kraken background tasks")),Object(o.b)("p",null,"This way all needed services can be started and then developed and restarted individually."),Object(o.b)("p",null,"To avoid running all of them manually, there is a script for ",Object(o.b)("inlineCode",{parentName:"p"},"Tmux")," terminal that\nopens separate window for each service. So first start ",Object(o.b)("inlineCode",{parentName:"p"},"tmux")," and then\nload Kraken script inside ",Object(o.b)("inlineCode",{parentName:"p"},"tmux"),":"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"run ",Object(o.b)("inlineCode",{parentName:"li"},"tmux")),Object(o.b)("li",{parentName:"ol"},"press ",Object(o.b)("inlineCode",{parentName:"li"},"ctrl-b + :")," -- to open tmux prompt"),Object(o.b)("li",{parentName:"ol"},"type ",Object(o.b)("inlineCode",{parentName:"li"},"source-file kraken.tmux"))),Object(o.b)("p",null,"or directly in command line:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"$ tmux new-session \\; source-file kraken.tmux`\n")),Object(o.b)("p",null,"or using a script in the repo:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"$ ./start-tmux.sh`\n")),Object(o.b)("p",null,"The effect should look as follows:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Kraken in Tmux",src:n(179).default})),Object(o.b)("p",null,"Now we can connect directly to Kraken Angular application. It is available\non ",Object(o.b)("a",{parentName:"p",href:"http://localhost:4200"},"http://localhost:4200"),"."))}p.isMDXComponent=!0}}]);