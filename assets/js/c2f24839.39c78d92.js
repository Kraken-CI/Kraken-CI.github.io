"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[29],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8742:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.img;return r.createElement("a",{href:"/img/"+t,target:"blank"},r.createElement("img",{src:"/img/"+t,style:{boxShadow:"0 10px 10px 5px #777",marginBottom:"30px"}}))}},6393:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(4137)),o=n(8742),c=["components"],s={id:"notifications",title:"Notifications"},l=void 0,u={unversionedId:"notifications",id:"notifications",title:"Notifications",description:"Kraken CI can provide information about the state of the last build of",source:"@site/docs/notifications.mdx",sourceDirName:".",slug:"/notifications",permalink:"/docs/notifications",draft:!1,editUrl:"https://github.com/kraken-ci/website/edit/master/docs/notifications.mdx",tags:[],version:"current",frontMatter:{id:"notifications",title:"Notifications"},sidebar:"someSidebar",previous:{title:"LXD Executor",permalink:"/docs/lxd-executor"},next:{title:"Webhooks",permalink:"/docs/webhooks"}},p={},d=[{value:"Notifications Sent per Build",id:"notifications-sent-per-build",level:2},{value:"Email",id:"email",level:3},{value:"Slack",id:"slack",level:3},{value:"Discord",id:"discord",level:3},{value:"GitHub PR",id:"github-pr",level:3},{value:"Presenting Current State",id:"presenting-current-state",level:2},{value:"Badges",id:"badges",level:3},{value:"CCTray",id:"cctray",level:3}],f={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kraken CI can provide information about the state of the last build of\na branch in a project. It can either send notifications over Email,\nSlack or GitHub PR, or present the current state using badges or\nCCTray protocol."),(0,i.kt)("h2",{id:"notifications-sent-per-build"},"Notifications Sent per Build"),(0,i.kt)("h3",{id:"email"},"Email"),(0,i.kt)("p",null,"More on ",(0,i.kt)("a",{parentName:"p",href:"/docs/schema#email"},"Email Notifications in Workflow Schema docs"),"."),(0,i.kt)("h3",{id:"slack"},"Slack"),(0,i.kt)("p",null,"More on ",(0,i.kt)("a",{parentName:"p",href:"/docs/schema#slack"},"Slack Notifications in Workflow Schema docs"),"."),(0,i.kt)("h3",{id:"discord"},"Discord"),(0,i.kt)("p",null,"More on ",(0,i.kt)("a",{parentName:"p",href:"/docs/schema#discord"},"Discord Notifications in Workflow Schema docs"),"."),(0,i.kt)("h3",{id:"github-pr"},"GitHub PR"),(0,i.kt)("p",null,"More on ",(0,i.kt)("a",{parentName:"p",href:"/docs/schema#github"},"GitHub PR integration in Workflow Schema docs"),"."),(0,i.kt)("h2",{id:"presenting-current-state"},"Presenting Current State"),(0,i.kt)("h3",{id:"badges"},"Badges"),(0,i.kt)("p",null,"The status badges indicate the current quality of a branch in a project."),(0,i.kt)(o.Z,{img:"kraken-badges.png",mdxType:"Screen"}),(0,i.kt)("p",null,"There are three types of badges. They are indicating:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"building state (if there are no errors)"),(0,i.kt)("li",{parentName:"ul"},"tests results with fixes and regression counts"),(0,i.kt)("li",{parentName:"ul"},"issues count with a count of newly discovered issues")),(0,i.kt)("p",null,"Links to the badges are available on a branch management page, in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Status Badge & CCTray")," tab:"),(0,i.kt)(o.Z,{img:"screen-branch-mgmt-badges.png",mdxType:"Screen"}),(0,i.kt)("h3",{id:"cctray"},"CCTray"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cctray.org"},"CCTray")," is a protocol that allows users to fetch\nthe current state of a branch using ",(0,i.kt)("a",{parentName:"p",href:"https://cctray.org/clients/"},"dedicated\nclientes"),"."),(0,i.kt)("p",null,"Kraken CI exposes a URL for a given branch that can be put to such a\nclient. This URL is available on the same page as for badges i.e. on\na branch management page, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Status Badge & CCTray")," tab:"),(0,i.kt)(o.Z,{img:"screen-branch-mgmt-badges.png",mdxType:"Screen"}),(0,i.kt)("p",null,"Copy CCTray URL and paste it to a client e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://anaynayak.github.io/buildnotify/"},"BuildNotify"),":"),(0,i.kt)(o.Z,{img:"screen-cctray-in-buildnotify.png",mdxType:"Screen"}))}m.isMDXComponent=!0}}]);