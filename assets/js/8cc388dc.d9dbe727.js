"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4321],{85889:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(74848),s=n(28453),r=n(3514),c=n(84142);const a={id:"entitlements-1",title:"Entitlements1",description:"Entitlements1",custom_edit_url:null},l=void 0,o={id:"saviynt/entitlements-1",title:"Entitlements1",description:"Entitlements1",source:"@site/docs/saviynt/entitlements-1.tag.mdx",sourceDirName:"saviynt",slug:"/saviynt/entitlements-1",permalink:"/saviynt/entitlements-1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"entitlements-1",title:"Entitlements1",description:"Entitlements1",custom_edit_url:null},sidebar:"saviyntSidebar",previous:{title:"Update Role Request",permalink:"/saviynt/update-role-request"},next:{title:"Get User Requestable Entitlements",permalink:"/saviynt/get-user-requestable-entitlements"}},d={},u=[];function m(t){return(0,i.jsx)(r.A,{items:(0,c.$S)().items})}function p(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(m,{...t})}):m()}},3514:(t,e,n)=>{n.d(e,{A:()=>g});n(96540);var i=n(18215),s=n(84142),r=n(28774),c=n(16654),a=n(21312),l=n(51107);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function u(t){let{href:e,children:n}=t;return(0,d.jsx)(r.default,{href:e,className:(0,i.A)("card padding--lg",o.cardContainer),children:n})}function m(t){let{href:e,icon:n,title:s,description:r}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(l.default,{as:"h2",className:(0,i.A)("text--truncate",o.cardTitle),title:s,children:[n," ",s]}),r&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",o.cardDescription),title:r,children:r})]})}function p(t){let{item:e}=t;const n=(0,s.Nr)(e);return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,a.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const n=(0,c.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.cC)(e.docId??void 0);return(0,d.jsx)(m,{href:e.href,icon:n,title:e.label,description:e.description??i?.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(f,{item:e});case"category":return(0,d.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const n=(0,s.$S)();return(0,d.jsx)(g,{items:n.items,className:e})}function g(t){const{items:e,className:n}=t;if(!e)return(0,d.jsx)(x,{...t});const r=(0,s.d1)(e);return(0,d.jsx)("section",{className:(0,i.A)("row",n),children:r.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:t})},e)))})}}}]);