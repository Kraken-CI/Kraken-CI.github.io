"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[8610],{2568:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(7325),l=a(3672);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&n.createElement(l.Z,{permalink:i,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},8389:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(9107),l=a(1116);function i(e){var t=e.items,a=e.component,i=void 0===a?l.Z:a;return n.createElement(n.Fragment,null,t.map((function(e){var t=e.content;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(i,null,n.createElement(t,null)))})))}},4883:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(7294),r=a(6010),l=a(7325),i=a(3777),s=a(9488),o=a(3702),c=a(3699),g=a(2506),u=a(2568),m=a(3647),p=a(8389);function d(e){var t,a=(t=(0,i.c)().selectMessage,function(e){return t(e,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:a(e.count),tagName:e.label})}function h(e){var t=d(e.tag);return n.createElement(n.Fragment,null,n.createElement(s.d,{title:t}),n.createElement(m.Z,{tag:"blog_tags_posts"}))}function b(e){var t=e.tag,a=e.items,r=e.sidebar,i=e.listMetadata,s=d(t);return n.createElement(g.Z,{sidebar:r},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,s),n.createElement(c.Z,{href:t.allTagsPath},n.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:a}),n.createElement(u.Z,{metadata:i}))}function E(e){return n.createElement(s.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(b,e))}}}]);