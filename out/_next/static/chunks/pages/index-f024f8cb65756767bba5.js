(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9863:function(e,r,t){"use strict";var i=t(5318),n=t(862);r.Z=void 0;var o=n(t(7294)),s=(0,i(t(2108)).default)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"}),"PlayCircleFilled");r.Z=s},9660:function(e,r,t){"use strict";var i=t(2809),n=t(219),o=t(7294),s=t(6010),a=t(1163),l=t(1664),c=t(9659),d=t(5893),h=["as","href"],u=["href","activeClassName","className","innerRef","naked"];function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var x=o.forwardRef((function(e,r){var t=e.as,i=e.href,o=(0,n.Z)(e,h);return(0,d.jsx)(l.default,{href:i,as:t,children:(0,d.jsx)("a",p({ref:r},o))})}));function g(e){var r=e.href,t=e.activeClassName,o=void 0===t?"active":t,l=e.className,h=e.innerRef,m=e.naked,g=(0,n.Z)(e,u),y=(0,a.useRouter)(),j="string"===typeof r?r:r.pathname,f=(0,s.Z)(l,(0,i.Z)({},o,y.pathname===j&&o));return m?(0,d.jsx)(x,p({className:f,ref:h,href:r},g)):(0,d.jsx)(c.Z,p({component:x,className:f,ref:h,href:r},g))}r.Z=o.forwardRef((function(e,r){return(0,d.jsx)(g,p(p({},e),{},{innerRef:r}))}))},1045:function(e,r,t){"use strict";t.d(r,{Z:function(){return I}});var i=t(2809),n=t(6311),o=t(1120),s=t(5517),a=t(282),l=t(7812),c=t(3832),d=t(2613),h=t(8680),u=t(2822),m=t(998),p=t(6869),x=t(5757),g=t(2516),y=t(4704),j=t(3792),f=t(7294),v=t(1163),b=t(5447),Z=t(5258),w=t(8358),k=t(8884),N=t(4184),C=t.n(N),T=(t(3426),t(9660)),W=t(7369);var S=function(e){var r=e.children,t=e.window,i=(0,W.Z)({disableHysteresis:!0,threshold:0,target:t?t():void 0});return f.cloneElement(r,{elevation:i?1:0})},H=t(5893),P=(0,o.Z)(b.ZP);function z(e){var r=e.children,t=e.showBorder,i=e.contentMaxWidth,n=e.onDrawerToggle,o=P();(0,v.useRouter)();return(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(S,{children:(0,H.jsx)(Z.Z,{color:"secondary",children:(0,H.jsx)(c.Z,{maxWidth:i||"lg",children:(0,H.jsxs)(w.Z,{style:{paddingLeft:0,borderBottom:(t?1:0)+"px solid #eee"},children:[(0,H.jsx)(l.Z,{edge:"start",onClick:n,className:C()(o.menuButton,o.sectionMobile),color:"inherit","aria-label":"open drawer",children:(0,H.jsx)(k.Z,{})}),(0,H.jsx)("div",{className:C()(o.logoContainer,o.centerVertical),children:(0,H.jsx)(T.Z,{href:"/",style:{flex:1},children:(0,H.jsx)("div",{className:o.logoEl})})}),(0,H.jsx)("div",{className:C()(o.grow)}),(0,H.jsx)("div",{className:o.sectionDesktop,children:(0,H.jsx)("div",{className:o.centerVertical,children:r})})]})})})})})}var D=(0,o.Z)(b.ZP);function I(e){var r=e.secondaryPage,t=e.contentMaxWidth,o=e.highlightedPage,b=e.children,Z=D(),w=f.useState(!1),k=(0,n.Z)(w,2),N=k[0],W=k[1],S=((0,v.useRouter)(),[{text:"Roadmap",id:"roadmap",link:"/roadmap"},{text:"Ecosystem",id:"ecosystem",link:"/ecosystem"},{text:"About Us",id:"about",link:"/about"},{text:"Contact Us",id:"contact",link:"mailto:contact@hurratech.com"},{divider:!0},{text:"Sponsor us on Github",variant:"contained",color:"primary",id:"kickstarter",link:"https://github.com/sponsors/HurraTech"},{text:"Github Repo",justIcon:!0,id:"github",Icon:g.Z,onClick:function(){window.open("https://github.com/HurraTech","_blank").focus()}},{text:"Twitter",justIcon:!0,id:"twitter",Icon:y.Z,onClick:function(){window.open("https://twitter.com/HurraCloud","_blank").focus()}},{text:"Facebook",justIcon:!0,id:"twitter",Icon:j.Z,onClick:function(){window.open("https://facebook.com/hurracloud/","_blank").focus()}}]),P=(0,H.jsx)("div",{children:(0,H.jsx)(u.Z,{children:S.map((function(e,r){var t,n=e.text,a=e.header,l=e.divider,c=e.Icon,d=e.justIcon,h=e.id,u=e.link,g=e.onClick,y=e.color;return(0,H.jsxs)(f.Fragment,{children:[(l||a)&&0!=r&&(0,H.jsx)(s.Z,{style:{marginLeft:15,marginRight:15,marginTop:10,backgroundColor:"rgba(0,0,0,0.04)"}}),!l&&(0,H.jsxs)(m.Z,{button:!a,href:u,onClick:g,component:d?"li":T.Z,className:C()(Z.drawerListItem,(0,i.Z)({},Z.highlightedDrawerItem,!a&&o==h)),children:[null!=c&&(0,H.jsx)(p.Z,{className:Z.drawerIconWrapper,children:(0,H.jsx)(c,{className:C()(Z.drawerIcon,(0,i.Z)({},Z.primaryColor,"primary"==y))})}),!d&&(0,H.jsx)(x.Z,{className:C()(Z.drawerItemText,(t={},(0,i.Z)(t,Z.primaryColor,"primary"==y),(0,i.Z)(t,Z.drawerItemTextHeader,null!=a),t)),primary:n||a})]})]},r)}))})}),I=(0,H.jsx)(H.Fragment,{children:S.map((function(e,r){var t=e.id,n=e.text,s=e.divider,c=e.Icon,d=e.justIcon,h=e.variant,u=e.link,m=e.color,p=e.onClick;return(0,H.jsxs)(f.Fragment,{children:[s&&(0,H.jsx)("div",{className:Z.topNavDivider}),!s&&(0,H.jsx)("div",{children:d?(0,H.jsx)(l.Z,{href:u,onClick:p,className:Z.topNavIconButton,children:(0,H.jsx)(c,{className:C()((0,i.Z)({},Z.primaryColor,"primary"==m))})}):(0,H.jsx)(a.Z,{href:u,component:T.Z,variant:h,color:m,className:Z.topNavButton,children:o==t?(0,H.jsx)("b",{children:n}):n})})]},r)}))});return(0,H.jsxs)("div",{className:Z.root,children:[(0,H.jsx)(z,{showBorder:r,maxWidth:t||"lg",onDrawerToggle:function(){return W(!N)},children:I}),(0,H.jsx)(d.Z,{mdUp:!0,implementation:"js",children:(0,H.jsx)(h.ZP,{variant:"temporary",anchor:"left",open:N,onClose:function(){W(!N)},classes:{paper:Z.drawerPaper},ModalProps:{keepMounted:!0},children:P})}),(0,H.jsxs)("main",{className:Z.mainContent,children:[(0,H.jsx)("div",{className:Z.appBarPlaceholder}),"none"!=t&&(0,H.jsx)(c.Z,{maxWidth:t||"lg",children:b}),"none"==t&&(0,H.jsx)(H.Fragment,{children:b})]})]})}},6124:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var i=t(1120),n=t(2162),o=t(3832),s=t(2613),a=t(2318),l=t(282),c=t(7812),d=t(1749),h=t(9895),u=(t(9008),t(7294)),m=t(9660),p=t(1045),x=t(3426),g=t(5447),y=t(9863),j=t(5406),f=t(5893),v=(0,i.Z)(g.ZP);function b(){var e=v(),r=(0,u.useState)(null),t=r[0],i=r[1];function g(e){i(e)}var b=[[{title:"Secure Remote Access",description:(0,f.jsxs)("span",{children:["Access your cloud and data anywhere from your mobile or computer via ",(0,f.jsx)("b",{children:"encrypted secure VPN"})," to your Hurra Cloud at home."]}),desktopSize:"25%",image:"/images/vpn.png"},{title:"Extensible Apps Support",description:"Extend your Hurra Cloud power by adding additional apps from the decentralized marketplace. Apps provide additional services such as social networking, photos albums sync, password managers, cloud drive, private file sharing, smart home control,..etc",desktopSize:"25%",image:"/images/apps.png"},{title:"Peer-to-peer Cloud",description:"HurraCloud devices can talk to each other directly without a middle man, eliminating any centeralized authority that can censor or eavesdrop on communication with your social network or friends.",desktopSize:"25%",image:"/images/p2pcloud.png"},{title:"Completely Open Source",description:"Both Hurra device and software are open source which means anyone can audit the code, the hardware, contribute and even build the cloud from source",desktopSize:"25%",image:"/images/opensource.png"}]],Z={height:"490",width:"800",playerVars:{autoplay:1}};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(p.Z,{contentMaxWidth:"none",children:[(0,f.jsx)(n.Z,{open:t,className:e.centerVertical,onClick:function(){i(null)},children:(0,f.jsxs)("div",{className:e.centerHorizontal,style:{width:"100%"},children:["cloudRiskVideo"==t&&(0,f.jsx)(j.Z,{opts:Z,videoId:"F-bHm71nVzc"}),"promoVideo"==t&&(0,f.jsx)(j.Z,{opts:Z,videoId:"OTMieNx5ZRI"})]})}),(0,f.jsxs)(o.Z,{maxWidth:"lg",children:[(0,f.jsx)(s.Z,{smDown:!0,children:(0,f.jsx)("div",{style:{paddingTop:100}})}),(0,f.jsx)("div",{className:e.sectionDesktop,children:(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,f.jsxs)("div",{style:{flex:1,paddingRight:90,paddingTop:50},children:[(0,f.jsx)(a.Z,{style:{fontWeight:800},variant:"h3",children:"Decentralizing the cloud"}),(0,f.jsx)(a.Z,{style:{fontSize:"1.45em",color:"#333",marginTop:15},children:"Hurra Cloud is a device you plug in your home to host all your private and personal data under your complete control."}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,f.jsx)(l.Z,{style:{flex:1},color:"primary",variant:"contained",href:"https://demo.hurracloud.io/",size:"large",disableElevation:!0,children:"See a live demo"}),(0,f.jsx)("div",{style:{flex:1}})]})]}),(0,f.jsxs)("div",{style:{position:"relative",textAlign:"center"},children:[(0,f.jsx)("img",{src:"/images/main_scene.svg",style:{minWidth:"40vw",minHeight:450,maxHeight:"calc(100vh - 300px)",width:"auto"}}),(0,f.jsxs)(c.Z,{onClick:function(){return g("promoVideo")},style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},children:[(0,f.jsx)(y.Z,{style:{width:100,height:100}})," "]})]})]})}),(0,f.jsx)("div",{className:e.sectionMobile,children:(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"column",padding:"0px 10px"},children:[(0,f.jsxs)("div",{style:{position:"relative",textAlign:"center"},children:[(0,f.jsx)("img",{src:"/images/main_scene.svg",style:{height:"auto",maxWidth:"100%"}}),(0,f.jsxs)(c.Z,{onClick:function(){return g("promoVideo")},style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},children:[(0,f.jsx)(y.Z,{style:{width:100,height:100}})," "]})]}),(0,f.jsx)(a.Z,{style:{fontWeight:800,marginTop:25,textAlign:"center"},variant:"h4",children:"Decenteralizing the cloud"}),(0,f.jsx)(a.Z,{style:{fontSize:"1.45em",color:"#333",marginTop:15,textAlign:"center"},children:"Hurra Cloud is a device you plug in your home to host all your private and personal data under your complete control"}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)("div",{style:{display:"flex",flexDirection:"column",flex:1},children:(0,f.jsx)(l.Z,{href:"https://demo.hurracloud.io/",size:"large",style:{flex:1},color:"primary",variant:"contained",disableElevation:!0,children:"Try a live demo"})})]})})]}),(0,f.jsx)("div",{style:{marginTop:50,paddingTop:100,paddingBottom:200,backgroundImage:"url(/images/section2bg.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:(0,f.jsxs)(o.Z,{maxWidth:"lg",children:[(0,f.jsx)("div",{className:e.sectionDesktop,children:(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,f.jsx)("img",{src:"/images/bedroom_scene.svg",style:{minWidth:"40vw",minHeight:430,maxHeight:"calc(100vh - 300px)",width:"auto"}}),(0,f.jsxs)("div",{style:{flex:1,paddingLeft:90,paddingTop:50},children:[(0,f.jsx)(a.Z,{style:{fontWeight:700},variant:"h5",children:"Privacy, Security and Custody of your data, under your control"}),(0,f.jsxs)(a.Z,{style:{fontSize:"1.15em",color:"#333",marginTop:15},children:["HurraCloud replaces traditional cloud platforms (e.g. social networks,file hosting, e-mail services,..etc) which own custody of your data in their data centers.",(0,f.jsx)("br",{})," ",(0,f.jsx)("br",{}),"Whether it\u2019s your identity, name, emails, friends list, passwords or any private personal data. Hurra Cloud lets you host all your data in your home under your complete control."]}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsxs)(l.Z,{onClick:function(){return g("cloudRiskVideo")},style:{marginRight:10},color:"primary",variant:"contained",disableElevation:!0,children:[(0,f.jsx)("b",{children:"WATCH:"})," \xa0Why traditional cloud is dangerous!"]})]})]})}),(0,f.jsx)("div",{className:e.sectionMobile,children:(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"column",padding:"0px 10px"},children:[(0,f.jsx)("img",{src:"/images/bedroom_scene.svg",style:{height:"auto",maxWidth:"100%"}}),(0,f.jsx)(a.Z,{style:{fontWeight:700,marginTop:55,textAlign:"center"},variant:"h6",children:"Privacy, Security and Custody of your data, under your control"}),(0,f.jsxs)(a.Z,{style:{fontSize:"1.15em",color:"#333",marginTop:15,textAlign:"justified"},children:["HurraCloud replaces traditional cloud platform (e.g. social networks) which own custody of your data in their data centers.",(0,f.jsx)("br",{})," ",(0,f.jsx)("br",{}),"Whether it\u2019s your identity, name, emails, friends list, passwords or any private personal data. Hurra Cloud lets you host all your data in your home under your complete control."]}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsxs)(l.Z,{onClick:function(){return g("cloudRiskVideo")},style:{marginRight:10},color:"primary",variant:"contained",disableElevation:!0,children:[(0,f.jsx)("b",{children:"WATCH:"})," \xa0Why traditional cloud is dangerous!"]})]})})]})}),(0,f.jsx)("div",{style:{marginTop:-200,paddingTop:150,backgroundImage:"url(/images/section3bg.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:(0,f.jsxs)(o.Z,{maxWidth:"lg",children:[(0,f.jsx)("div",{className:e.sectionDesktop,children:(0,f.jsxs)("div",{style:{width:"100%"},children:[(0,f.jsx)(a.Z,{style:{paddingTop:50,fontWeight:700,marginBottom:60},variant:"h5",children:"A Scalable Ecosystem Designed for Privacy and Security"}),b.map((function(r,t){return(0,f.jsx)(d.Z,{style:{height:"70%"},container:!0,spacing:2,alignItems:"stretch",direction:"row",children:r.map((function(r,t){return(0,f.jsx)(d.Z,{item:!0,xs:12,style:{height:"100%"},md:3,children:(0,f.jsxs)(h.Z,{className:e.featureBox,style:{height:"100%"},children:[r.image&&(0,f.jsx)("div",{style:{padding:10,height:100,marginTop:5},className:e.centerVertical,children:(0,f.jsx)("img",{src:r.image,style:{maxWidth:"90%"}})}),(0,f.jsx)(a.Z,{style:{color:x.f.hurra_red_light,marginTop:10,fontWeight:800,fontSize:"1.25em"},children:r.title}),(0,f.jsx)(a.Z,{style:{fontWeight:400,marginTop:5,fontSize:"1.05em"},children:r.description})]})},t)}))},t)})),(0,f.jsx)(l.Z,{href:"/ecosystem",component:m.Z,style:{marginTop:30},color:"primary",variant:"contained",disableElevation:!0,children:"Learn more about Hurra cloud ecosystem"}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{})]})}),(0,f.jsx)("div",{className:e.sectionMobile,children:(0,f.jsxs)("div",{style:{width:"100%"},children:[(0,f.jsx)(a.Z,{style:{paddingTop:50,fontWeight:700,marginBottom:20,textAlign:"center"},variant:"h6",children:"A Scalable Ecosystem Designed for Privacy and Security"}),(0,f.jsx)(d.Z,{container:!0,spacing:2,children:b.flat().map((function(r,t){return(0,f.jsx)(d.Z,{item:!0,xs:12,children:(0,f.jsxs)(h.Z,{className:e.featureBox,style:{height:"100%",textAlign:"center"},children:[r.image&&(0,f.jsx)("div",{style:{padding:10,height:100,marginTop:5},className:e.centerHorizontal,children:(0,f.jsx)("img",{src:r.image,style:{maxHeight:"100%",maxWidth:"100%"}})}),(0,f.jsx)(a.Z,{style:{color:x.f.hurra_red_light,marginTop:10,fontWeight:800,fontSize:"1.25em"},children:r.title}),(0,f.jsx)(a.Z,{style:{fontWeight:400,marginTop:5,fontSize:"1.05em"},children:r.description})]})},t)}))}),(0,f.jsx)(l.Z,{href:"/ecosystem",component:m.Z,style:{marginTop:30,width:"100%"},color:"primary",variant:"contained",disableElevation:!0,children:"Learn more about Hurra cloud ecosystem"}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{})]})})]})})]})})}},8581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6124)}])}},function(e){e.O(0,[150,406,774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);