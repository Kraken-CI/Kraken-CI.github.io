(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[8030],{4137:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4893:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=t(4034),o=t(9973),a=(t(7294),t(4137)),i=["components"],s={id:"contrib-docs",title:"Contributing to Documentation"},l=void 0,p={unversionedId:"contrib-docs",id:"contrib-docs",isDocsHomePage:!1,title:"Contributing to Documentation",description:"Kraken website and documentation are kept in separate repository:",source:"@site/docs/contrib-docs.md",sourceDirName:".",slug:"/contrib-docs",permalink:"/docs/contrib-docs",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/contrib-docs.md",tags:[],version:"current",frontMatter:{id:"contrib-docs",title:"Contributing to Documentation"},sidebar:"someSidebar",previous:{title:"Development Guide",permalink:"/docs/dev-guide"},next:{title:"Workflow Schema Reference",permalink:"/docs/schema-ref"}},c=[{value:"Reporting Problems and Enhancements Proposals",id:"reporting-problems-and-enhancements-proposals",children:[],level:2},{value:"Preparing Website and Docs Changes",id:"preparing-website-and-docs-changes",children:[{value:"Setting up Environment",id:"setting-up-environment",children:[{value:"Step 1: Install npm",id:"step-1-install-npm",children:[],level:4},{value:"Step 2: Clone reposirory",id:"step-2-clone-reposirory",children:[],level:4},{value:"Step 3: Install Docusaurus dependencies",id:"step-3-install-docusaurus-dependencies",children:[],level:4}],level:3},{value:"Local Development",id:"local-development",children:[],level:3},{value:"Build",id:"build",children:[],level:3}],level:2},{value:"Submitting Changes",id:"submitting-changes",children:[],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kraken website and documentation are kept in separate repository:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/website"},"https://github.com/Kraken-CI/website"),"."),(0,a.kt)("h2",{id:"reporting-problems-and-enhancements-proposals"},"Reporting Problems and Enhancements Proposals"),(0,a.kt)("p",null,"If you find any problem in the website or in the documentation, or\nthere is missing anything then please go to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/website/issues"},"issue tracker on GitHub"),"\nand look around if the problem is already reported and if no then\ncreate a new issue (problem or an improvement request)."),(0,a.kt)("h2",{id:"preparing-website-and-docs-changes"},"Preparing Website and Docs Changes"),(0,a.kt)("p",null,"Kraken website and documentation are built using ",(0,a.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"Docusaurus 2"),", a modern static website generator."),(0,a.kt)("h3",{id:"setting-up-environment"},"Setting up Environment"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/installation"},"Docusaurus web page"),"\nadvices to install and use ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),". There is a defect that on some\ninstallations ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," may hang during package resolve or\nfetch. Therefore it is recommended to not install ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," and use only\n",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),". All commands below use ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),". However, if you\nhave succesfully installed ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),", you can use it instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),"\nwith the same command syntax."),(0,a.kt)("h4",{id:"step-1-install-npm"},"Step 1: Install npm"),(0,a.kt)("p",null,"Follow your operating system's method to install ",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),", for example for ",(0,a.kt)("em",{parentName:"p"},"Ubuntu"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ sudo apt install npm\n")),(0,a.kt)("h4",{id:"step-2-clone-reposirory"},"Step 2: Clone reposirory"),(0,a.kt)("p",null,"Fork repository and clony your own copy::"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ git clone git@github.com:<username>/website.git\n")),(0,a.kt)("h4",{id:"step-3-install-docusaurus-dependencies"},"Step 3: Install Docusaurus dependencies"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"kraken.ci")," website repository and execute ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," command, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ cd website\n$ npm install\n")),(0,a.kt)("p",null,"It has been observed that ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," may have problems with installing dependencies on ",(0,a.kt)("em",{parentName:"p"},"Ubuntu 18.04")," - upgrading to ",(0,a.kt)("em",{parentName:"p"},"Ubuntu 20.04")," resolves this issue."),(0,a.kt)("h3",{id:"local-development"},"Local Development"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ npm start\n")),(0,a.kt)("p",null,"This command starts a local development server and open up a browser window. Most changes to the website are reflected live without having to restart the server."),(0,a.kt)("h3",{id:"build"},"Build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ npm run build\n")),(0,a.kt)("p",null,"This command generates static content into the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," directory. This directory can be served using any static contents hosting service."),(0,a.kt)("h2",{id:"submitting-changes"},"Submitting Changes"),(0,a.kt)("p",null,"When you have your changes ready then follow these steps."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Push your changes to your repository."),(0,a.kt)("li",{parentName:"ol"},"Submit a pull request, referencing any issues it addresses.")),(0,a.kt)("p",null,"We will review your pull request as soon as possible. Thank you for contributing!"))}d.isMDXComponent=!0}}]);