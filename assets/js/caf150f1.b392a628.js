(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[5795],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4265:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"contrib-kraken",title:"Contributing to Kraken"},s={unversionedId:"contrib-kraken",id:"contrib-kraken",isDocsHomePage:!1,title:"Contributing to Kraken",description:"We welcome any contributions to Kraken project. You can contribute to",source:"@site/docs/contrib-kraken.md",sourceDirName:".",slug:"/contrib-kraken",permalink:"/docs/contrib-kraken",editUrl:"https://github.com/kraken-ci/website/edit/master/docs/contrib-kraken.md",version:"current",frontMatter:{id:"contrib-kraken",title:"Contributing to Kraken"},sidebar:"someSidebar",previous:{title:"Introductory Guide",permalink:"/docs/guide-intro"},next:{title:"Development Guide",permalink:"/docs/dev-guide"}},c=[{value:"Reporting Problems and Enhancements Proposals",id:"reporting-problems-and-enhancements-proposals",children:[]},{value:"Submitting Changes",id:"submitting-changes",children:[]}],u={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We welcome any contributions to Kraken project. You can contribute to\nKraken tool itself by submitting issues or providing code changes\n(read below) but also by\nimproving ",(0,a.kt)("a",{parentName:"p",href:"/docs/contrib-docs"},"Kraken's documentation and website"),"."),(0,a.kt)("h2",{id:"reporting-problems-and-enhancements-proposals"},"Reporting Problems and Enhancements Proposals"),(0,a.kt)("p",null,"Please search\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kraken-CI/kraken/issues"},"issue tracker on GitHub"),"\nbefore creating a new issue (problem or an improvement request). Feel\nfree to add issues related to the project."),(0,a.kt)("h2",{id:"submitting-changes"},"Submitting Changes"),(0,a.kt)("p",null,"If you feel that you can fix some problem in Kraken or implement some\nfeature in Kraken yourself, please read a few paragraphs below to\nlearn how to submit your changes and then\nread ",(0,a.kt)("a",{parentName:"p",href:"/docs/dev-guide"},"Development Guide"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pick an exsiting issue in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Kraken-CI/kraken/issues"},"the GitHub issue tracker")," or create a new one."),(0,a.kt)("li",{parentName:"ol"},"Pull Kraken's sources and setup the development environment according to ",(0,a.kt)("a",{parentName:"li",href:"/docs/dev-guide"},"Development Guide"),"."),(0,a.kt)("li",{parentName:"ol"},"Prepare your changes and add some tests. You can skip adding tests if the effort to create tests for your change is unreasonable. Changes without tests are still going to be considered by us."),(0,a.kt)("li",{parentName:"ol"},"Run tests and make sure all of them pass."),(0,a.kt)("li",{parentName:"ol"},"Submit a pull request, referencing any issues it addresses.")),(0,a.kt)("p",null,"We will review your pull request as soon as possible. Thank you for contributing!"))}l.isMDXComponent=!0}}]);