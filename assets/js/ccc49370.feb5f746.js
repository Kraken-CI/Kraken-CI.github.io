"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[3249],{1917:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(6540);var a=n(4164),i=n(7153),o=n(8630),r=n(8322),l=n(1866),s=n(8181),c=n(3230),d=n(3555),u=n(4848);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){var e;const{assets:t,metadata:n}=(0,r.e)(),{title:a,description:o,date:l,tags:s,authors:c,frontMatter:d}=n,{keywords:m}=d,g=null!=(e=t.image)?e:d.image;return(0,u.jsxs)(i.be,{title:a,description:o,keywords:m,image:g,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:l}),c.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")})]})}var h=n(1141),f=n(8806);function p(){const e=(0,f.J)();return(0,u.jsx)(h.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var v=n(8793),x=n(6057);function b(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:i}=(0,r.e)(),{nextItem:o,prevItem:c,frontMatter:d,unlisted:g}=a,{hide_table_of_contents:h,toc_min_heading_level:f,toc_max_heading_level:p}=d;return(0,u.jsxs)(l.A,{sidebar:t,toc:!h&&i.length>0?(0,u.jsx)(v.A,{toc:i,minHeadingLevel:f,maxHeadingLevel:p}):void 0,children:[g&&(0,u.jsx)(x.A,{}),(0,u.jsx)(s.A,{children:n}),(o||c)&&(0,u.jsx)(m,{nextItem:o,prevItem:c})]})}function j(e){const t=e.content;return(0,u.jsx)(r.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.e3,{className:(0,a.A)(o.G.wrapper.blogPages,o.G.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(p,{}),(0,u.jsx)(b,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},8793:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),i=n(1507);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=n(4848);const l="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,a.A)(o.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(i.A,{...n,linkClassName:l,linkActiveClassName:s})})}},1507:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(6540),i=n(6957);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):a.push(i)})),a}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function s(e,t){var n;let{anchorTopOffset:a}=t;const i=e.find((e=>l(e).top>=a));if(i){var o;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(i))?i:null!=(o=e[e.indexOf(i)-1])?o:null}return null!=(n=e[e.length-1])?n:null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:o,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let i=t;i<=n;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=s(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(4783),m=n(4848);function g(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const h=a.memo(g);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const f=(0,i.p)(),p=null!=c?c:f.tableOfContents.minHeadingLevel,v=null!=u?u:f.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>r({toc:o(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:p,maxHeadingLevel:v});return d((0,a.useMemo)((()=>{if(l&&s)return{linkClassName:l,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:v}}),[l,s,p,v])),(0,m.jsx)(h,{toc:x,className:n,linkClassName:l,...g})}},6057:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var a=n(4164),i=n(3230),o=n(1141),r=n(4848);function l(){return(0,r.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,r.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(o.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(8630),u=n(4182);function m(e){let{className:t}=e;return(0,r.jsx)(u.A,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.A)(t,d.G.common.unlistedBanner),children:(0,r.jsx)(s,{})})}function g(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(m,{...e})]})}},8806:(e,t,n)=>{n.d(t,{k:()=>d,J:()=>u});var a=n(8180),i=n(7639),o=n(3512);var r=n(8322);const l=e=>new Date(e).toISOString();function s(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:"title image for the blog post: "+n})}:{}}function d(e){const{siteConfig:t}=(0,i.A)(),{withBaseUrl:n}=(0,a.h)(),{metadata:{blogDescription:o,blogTitle:r,permalink:d}}=e,u=""+t.url+d;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:r,description:o,blogPost:e.items.map((e=>function(e,t,n){var a,i;const{assets:o,frontMatter:r,metadata:d}=e,{date:u,title:m,description:g,lastUpdatedAt:h}=d,f=null!=(a=o.image)?a:r.image,p=null!=(i=r.keywords)?i:[],v=""+t.url+d.permalink,x=h?l(h):void 0;return{"@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:m,name:m,description:g,datePublished:u,...x?{dateModified:x}:{},...s(d.authors),...c(f,n,m),...p?{keywords:p}:{}}}(e.content,t,n)))}}function u(){var e,t;const n=function(){var e;const t=(0,o.A)(),n=null==t||null==(e=t.data)?void 0:e.blogMetadata;if(!n)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return n}(),{assets:d,metadata:u}=(0,r.e)(),{siteConfig:m}=(0,i.A)(),{withBaseUrl:g}=(0,a.h)(),{date:h,title:f,description:p,frontMatter:v,lastUpdatedAt:x}=u,b=null!=(e=d.image)?e:v.image,j=null!=(t=v.keywords)?t:[],A=x?l(x):void 0,k=""+m.url+u.permalink;return{"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:f,name:f,description:p,datePublished:h,...A?{dateModified:A}:{},...s(u.authors),...c(b,g,f),...j?{keywords:j}:{},isPartOf:{"@type":"Blog","@id":""+m.url+n.blogBasePath,name:n.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},9842:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(8023),i=n(8322),o=n(1392),r=n(4848);function l(e){const t=(0,i.e)().metadata;return console.info("props",t),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(o.Mq,{shortname:"kraken-ci",config:{url:"https://kraken.ci"+t.permalink,identifier:"blog-"+t.frontMatter.slug,title:"Blog - "+t.title}}),(0,r.jsx)(a.A,{...e})]})}}}]);