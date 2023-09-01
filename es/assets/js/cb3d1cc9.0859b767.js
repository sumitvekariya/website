"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[6824],{3905:function(e,r,a){a.d(r,{Zo:function(){return i},kt:function(){return h}});var t=a(7294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function p(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=t.createContext({}),l=function(e){var r=t.useContext(u),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},i=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=l(a),d=o,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||n;return a?t.createElement(h,s(s({ref:r},i),{},{components:a})):t.createElement(h,s({ref:r},i))}));function h(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=d;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p[m]="string"==typeof e?e:o,s[1]=p;for(var l=2;l<n;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:function(e,r,a){a.d(r,{Z:function(){return s}});var t=a(7294),o=a(6010),n="tabItem_Ymn6";function s(e){let{children:r,hidden:a,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,o.Z)(n,s),hidden:a},r)}},5488:function(e,r,a){a.d(r,{Z:function(){return d}});var t=a(3117),o=a(7294),n=a(6010),s=a(2389),p=a(7392),u=a(7094),l=a(2466),i="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:r,block:a,defaultValue:s,values:c,groupId:d,className:h}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??b.map((e=>{let{props:{value:r,label:a,attributes:t}}=e;return{value:r,label:a,attributes:t}})),f=(0,p.l)(g,((e,r)=>e.value===r.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===s?s:s??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,u.U)(),[N,S]=(0,o.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,l.o5)();if(null!=d){const e=v[d];null!=e&&e!==N&&g.some((r=>r.value===e))&&S(e)}const E=e=>{const r=e.currentTarget,a=O.indexOf(r),t=g[a].value;t!==N&&(w(r),S(t),null!=d&&y(d,String(t)))},P=e=>{let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;r=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;r=O[a]??O[O.length-1];break}}r?.focus()};return o.createElement("div",{className:(0,n.Z)("tabs-container",i)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},h)},g.map((e=>{let{value:r,label:a,attributes:s}=e;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:N===r?0:-1,"aria-selected":N===r,key:r,ref:e=>O.push(e),onKeyDown:P,onClick:E},s,{className:(0,n.Z)("tabs__item",m,s?.className,{"tabs__item--active":N===r})}),a??r)}))),r?(0,o.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,r)=>(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==N})))))}function d(e){const r=(0,s.Z)();return o.createElement(c,(0,t.Z)({key:String(r)},e))}},3086:function(e,r,a){a.r(r),a.d(r,{assets:function(){return i},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var t=a(3117),o=(a(7294),a(3905)),n=a(5488),s=a(5162);const p={sidebar_position:4,title:"Obteniendo datos"},u="Semaphore data",l={unversionedId:"guides/fetching-data",id:"version-V3/guides/fetching-data",title:"Obteniendo datos",description:"Para obtener datos on-chain del contrato Semaphore.sol, puedes usar la librer\xeda @semaphore-protocol/data.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-V3/guides/fetching-data.mdx",sourceDirName:"guides",slug:"/guides/fetching-data",permalink:"/es/docs/guides/fetching-data",draft:!1,editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V3/guides/fetching-data.mdx",tags:[],version:"V3",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Obteniendo datos"},sidebar:"version-V3/mySidebar",previous:{title:"Pruebas",permalink:"/es/docs/guides/proofs"},next:{title:"Circuitos",permalink:"/es/docs/technical-reference/circuits"}},i={},m=[{value:"Instalar librer\xeda",id:"instalar-librer\xeda",level:2},{value:"Obtener datos usando SemaphoreSubgraph",id:"obtener-datos-usando-semaphoresubgraph",level:2},{value:"Obtener Ids de los grupos",id:"obtener-ids-de-los-grupos",level:3},{value:"Obtener los grupos",id:"obtener-los-grupos",level:3},{value:"Obtener un grupo",id:"obtener-un-grupo",level:3},{value:"Comprueba si un identity commitment es miembro de un grupo",id:"comprueba-si-un-identity-commitment-es-miembro-de-un-grupo",level:3},{value:"Obtener datos usando SemaphoreEthers",id:"obtener-datos-usando-semaphoreethers",level:2},{value:"Obtener Ids de los grupos",id:"obtener-ids-de-los-grupos-1",level:3},{value:"Obtener un grupo",id:"obtener-un-grupo-1",level:3},{value:"Obtener el admin de un grupo",id:"obtener-el-admin-de-un-grupo",level:3},{value:"Obtener los miembros de un grupo",id:"obtener-los-miembros-de-un-grupo",level:3},{value:"Obtener las pruebas verificadas de un grupo",id:"obtener-las-pruebas-verificadas-de-un-grupo",level:3}],c={toc:m};function d(e){let{components:r,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"semaphore-data"},"Semaphore data"),(0,o.kt)("p",null,"Para obtener datos on-chain del contrato ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/contracts/contracts/Semaphore.sol"},"Semaphore.sol"),", puedes usar la librer\xeda ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/main/packages/data"},"@semaphore-protocol/data"),". "),(0,o.kt)("p",null,"Hay dos formas para hacer esto, usando ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/data/src/subgraph.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"SemaphoreSubgraph"))," o ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/data/src/ethers.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"SemaphoreEthers")),". La clase ",(0,o.kt)("inlineCode",{parentName:"p"},"SemaphoreSubgraph")," usa el ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/subgraph"},"subgrafo de Semaphore"),", el cual usa ",(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/"},"The Graph Protocol")," detr\xe1s del tel\xf3n, y la clase ",(0,o.kt)("inlineCode",{parentName:"p"},"SemaphoreEthers")," usa ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethers-io/ethers.js/"},"Ethers"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#obtener-datos-usando-semaphoresubgraph"},(0,o.kt)("strong",{parentName:"a"},"Obtener datos usando SemaphoreSubgraph"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#obtener-datos-usando-semaphoreethers"},(0,o.kt)("strong",{parentName:"a"},"Obtener datos usando SemaphoreEthers")))),(0,o.kt)("h2",{id:"instalar-librer\xeda"},"Instalar librer\xeda"),(0,o.kt)(n.Z,{defaultValue:"npm",groupId:"package-managers",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @semaphore-protocol/data\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @semaphore-protocol/data\n")))),(0,o.kt)("h2",{id:"obtener-datos-usando-semaphoresubgraph"},"Obtener datos usando SemaphoreSubgraph"),(0,o.kt)("p",null,"Para obtener datos usando el subgrafo de Semaphore puedes usar la clase ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/data/src/subgraph.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"SemaphoreSubgraph"))," del paquete ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/main/packages/data"},"@semaphore-protocol/data"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { SemaphoreSubgraph } from "@semaphore-protocol/data"\n\nconst semaphoreSubgraph = new SemaphoreSubgraph()\n\n// or:\nconst semaphoreSubgraph = new SemaphoreSubgraph("arbitrum")\n\n// or:\nconst semaphoreSubgraph = new SemaphoreSubgraph(\n    "https://api.studio.thegraph.com/query/14377/<your-subgraph>/<your-version>"\n)\n')),(0,o.kt)("h3",{id:"obtener-ids-de-los-grupos"},"Obtener Ids de los grupos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const groupIds = await semaphoreSubgraph.getGroupIds()\n")),(0,o.kt)("h3",{id:"obtener-los-grupos"},"Obtener los grupos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const groups = await semaphoreSubgraph.getGroups()\n\n// or\n\nconst groups = await semaphoreSubgraph.getGroups({ members: true, verifiedProofs: true })\n")),(0,o.kt)("h3",{id:"obtener-un-grupo"},"Obtener un grupo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const group = await semaphoreSubgraph.getGroup("42")\n\n// or\n\nconst { members, verifiedProofs } = semaphoreSubgraph.getGroup("42", { members: true, verifiedProofs: true })\n')),(0,o.kt)("h3",{id:"comprueba-si-un-identity-commitment-es-miembro-de-un-grupo"},"Comprueba si un identity commitment es miembro de un grupo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'await semaphoreSubgraph.isGroupMember(\n    "42",\n    "16948514235341957898454876473214737047419402240398321289450170535251226167324"\n)\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Puedes crear un grupo off-chain usando la clase SemaphoreSubgraph para obtener los miembros de la siguiente forma:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Group } from "@semaphore-protocol/group"\nimport { SemaphoreSubgraph } from "@semaphore-protocol/data"\n\nconst groupId = "3"\nconst semaphoreSubgraph = new SemaphoreSubgraph("sepolia")\nconst { members } = await semaphoreSubgraph.getGroup(groupId, { members: true })\nconst group = new Group(groupId, 20, members)\n'))),(0,o.kt)("h2",{id:"obtener-datos-usando-semaphoreethers"},"Obtener datos usando SemaphoreEthers"),(0,o.kt)("p",null,"Para obtener datos usando Ethers puedes usar la clase ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/data/src/ethers.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"SemaphoreEthers"))," del paquete ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/main/packages/data"},"@semaphore-protocol/data"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { SemaphoreEthers } from "@semaphore-protocol/data"\n\nconst semaphoreEthers = new SemaphoreEthers()\n\n// or:\nconst semaphoreEthers = new SemaphoreEthers("homestead", {\n    address: "semaphore-address",\n    startBlock: 0\n})\n\n// or:\nconst semaphoreEthers = new SemaphoreEthers("http://localhost:8545", {\n    address: "semaphore-address"\n})\n')),(0,o.kt)("h3",{id:"obtener-ids-de-los-grupos-1"},"Obtener Ids de los grupos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const groupIds = await semaphoreEthers.getGroupIds()\n")),(0,o.kt)("h3",{id:"obtener-un-grupo-1"},"Obtener un grupo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const group = await semaphoreEthers.getGroup("42")\n')),(0,o.kt)("h3",{id:"obtener-el-admin-de-un-grupo"},"Obtener el admin de un grupo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const admin = await semaphoreEthers.getGroupAdmin("42")\n')),(0,o.kt)("h3",{id:"obtener-los-miembros-de-un-grupo"},"Obtener los miembros de un grupo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const members = await semaphoreEthers.getGroupMembers("42")\n')),(0,o.kt)("h3",{id:"obtener-las-pruebas-verificadas-de-un-grupo"},"Obtener las pruebas verificadas de un grupo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const verifiedProofs = await semaphoreEthers.getGroupVerifiedProofs("42")\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Puedes crear un grupo off-chain usando la clase SemaphoreEthers para obtener los miembros de la siguiente forma:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Group } from "@semaphore-protocol/group"\nimport { SemaphoreEthers } from "@semaphore-protocol/data"\n\nconst groupId = "3"\nconst semaphoreEthers = new SemaphoreEthers("sepolia")\nconst members = await semaphoreEthers.getGroupMembers(groupId)\nconst group = new Group(groupId, 20, members)\n'))))}d.isMDXComponent=!0}}]);