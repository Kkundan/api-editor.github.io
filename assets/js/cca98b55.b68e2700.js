"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7595],{37081:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var i=n(74848),s=n(28453),r=n(3514),c=n(84142);const o={id:"endpoints",title:"Endpoints",description:"Endpoints",custom_edit_url:null},a=void 0,d={id:"saviynt/endpoints",title:"Endpoints",description:"Endpoints",source:"@site/docs/saviynt/endpoints.tag.mdx",sourceDirName:"saviynt",slug:"/saviynt/endpoints",permalink:"/saviynt/endpoints",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"endpoints",title:"Endpoints",description:"Endpoints",custom_edit_url:null},sidebar:"saviyntSidebar",previous:{title:"Remove Role",permalink:"/saviynt/remove-role"},next:{title:"Create Endpoint",permalink:"/saviynt/create-endpoint"}},l={},u=[];function p(t){return(0,i.jsx)(r.A,{items:(0,c.$S)().items})}function m(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(p,{...t})}):p()}},3514:(t,e,n)=>{n.d(e,{A:()=>v});n(96540);var i=n(18215),s=n(84142),r=n(28774),c=n(16654),o=n(21312),a=n(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(74848);function u(t){let{href:e,children:n}=t;return(0,l.jsx)(r.default,{href:e,className:(0,i.A)("card padding--lg",d.cardContainer),children:n})}function p(t){let{href:e,icon:n,title:s,description:r}=t;return(0,l.jsxs)(u,{href:e,children:[(0,l.jsxs)(a.default,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),r&&(0,l.jsx)("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function m(t){let{item:e}=t;const n=(0,s.Nr)(e);return n?(0,l.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const n=(0,c.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.cC)(e.docId??void 0);return(0,l.jsx)(p,{href:e.href,icon:n,title:e.label,description:e.description??i?.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return(0,l.jsx)(f,{item:e});case"category":return(0,l.jsx)(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const n=(0,s.$S)();return(0,l.jsx)(v,{items:n.items,className:e})}function v(t){const{items:e,className:n}=t;if(!e)return(0,l.jsx)(x,{...t});const r=(0,s.d1)(e);return(0,l.jsx)("section",{className:(0,i.A)("row",n),children:r.map(((t,e)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:t})},e)))})}}}]);