"use strict";(self.webpackChunkcheckpoint_doc=self.webpackChunkcheckpoint_doc||[]).push([[9895],{3505:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"quivio/components/profileBadge","title":"ProfileBadge Component","description":"The ProfileBadge component renders a customizable circular profile badge with user initials and an optional status indicator. This component is flexible and can adapt to various design and functional requirements.","source":"@site/docs/quivio/components/profileBadge.md","sourceDirName":"quivio/components","slug":"/quivio/components/profileBadge","permalink":"/quivio/components/profileBadge","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quivio/components/profileBadge.md","tags":[],"version":"current","frontMatter":{},"sidebar":"quivioSidebar","previous":{"title":"PopUpModal","permalink":"/quivio/components/modals/popupModal"},"next":{"title":"RadioButton Component","permalink":"/quivio/components/radioButton"}}');var d=i(4848),t=i(8453);const r={},l="ProfileBadge Component",o={},c=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:3},{value:"Components",id:"components",level:2},{value:"ProfileBadge",id:"profilebadge",level:3},{value:"Props",id:"props",level:4},{value:"ProfileStatusIndicator",id:"profilestatusindicator",level:3},{value:"Props",id:"props-1",level:4},{value:"Features",id:"features",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Initials Generation",id:"initials-generation",level:3},{value:"Custom Styling",id:"custom-styling",level:3},{value:"Example: Custom Badge",id:"example-custom-badge",level:2},{value:"Default Styles",id:"default-styles",level:2},{value:"Notes",id:"notes",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"profilebadge-component",children:"ProfileBadge Component"})}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"ProfileBadge"})," component renders a customizable circular profile badge with user initials and an optional status indicator. This component is flexible and can adapt to various design and functional requirements."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,d.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:'import React from "react";\nimport ProfileBadge from "./ProfileBadge";\n\nconst App = () => {\n  return (\n    <ProfileBadge\n      name="John Doe"\n      badgeBgColor="blue"\n      textColor="white"\n      badgeRadius={40}\n      showIndicator={true}\n      indicatorRadius={10}\n    />\n  );\n};\n\nexport default App;\n'})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,d.jsx)(n.h3,{id:"profilebadge",children:"ProfileBadge"}),"\n",(0,d.jsx)(n.p,{children:"Renders the main profile badge with user initials."}),"\n",(0,d.jsx)(n.h4,{id:"props",children:"Props"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Prop Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"Required"})}),(0,d.jsx)(n.td,{children:"The name of the user to generate initials from."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"textColor"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})}),(0,d.jsx)(n.td,{children:"Sets the text color of the initials."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"badgeBgColor"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})}),(0,d.jsx)(n.td,{children:"Sets the background color of the badge."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"showIndicator"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"Determines if a status indicator should be displayed."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"fontSize"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"number"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"20"})}),(0,d.jsx)(n.td,{children:"Sets the font size of the initials text."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"badgeRadius"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"number"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"36"})}),(0,d.jsx)(n.td,{children:"Defines the radius of the circular badge."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"indicatorRadius"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"number"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})}),(0,d.jsx)(n.td,{children:"Defines the radius of the status indicator."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"numberOfInitials"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"number"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"2"})}),(0,d.jsx)(n.td,{children:"Maximum number of initials to display from the name."})]})]})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"profilestatusindicator",children:"ProfileStatusIndicator"}),"\n",(0,d.jsx)(n.p,{children:"A helper component to render a status indicator below the profile badge."}),"\n",(0,d.jsx)(n.h4,{id:"props-1",children:"Props"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Prop Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"showIndicator"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"Required"})}),(0,d.jsx)(n.td,{children:"Determines whether the status indicator should be displayed."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"indicatorRadius"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"number"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})}),(0,d.jsx)(n.td,{children:"Customizes the radius of the status indicator."})]})]})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Customizable Appearance:"})," Configure the badge size, background color, text color, and font size."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Initials Display:"})," Automatically generates initials from a user's full name."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Status Indicator:"})," Optionally display a circular status indicator."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Dynamic Sizing:"})," Adjust sizes for both the badge and the status indicator."]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,d.jsx)(n.h3,{id:"initials-generation",children:"Initials Generation"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"getInitials"})," function extracts initials from a provided full name. It supports dynamic lengths based on the ",(0,d.jsx)(n.code,{children:"numberOfInitials"})," prop."]}),"\n",(0,d.jsx)(n.h3,{id:"custom-styling",children:"Custom Styling"}),"\n",(0,d.jsxs)(n.p,{children:["The badge and indicator styles can be customized by overriding default styles using props such as ",(0,d.jsx)(n.code,{children:"badgeRadius"}),", ",(0,d.jsx)(n.code,{children:"indicatorRadius"}),", ",(0,d.jsx)(n.code,{children:"badgeBgColor"}),", and ",(0,d.jsx)(n.code,{children:"textColor"}),"."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"example-custom-badge",children:"Example: Custom Badge"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:'<ProfileBadge\n  name="Jane Smith"\n  badgeRadius={50}\n  badgeBgColor="green"\n  textColor="white"\n  fontSize={25}\n  showIndicator={true}\n  indicatorRadius={12}\n/>\n'})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"default-styles",children:"Default Styles"}),"\n",(0,d.jsxs)(n.p,{children:["The component uses default styles provided in the ",(0,d.jsx)(n.code,{children:"Style"})," module. These can be overridden by passing custom props."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Ensure ",(0,d.jsx)(n.code,{children:"name"})," is passed as a non-empty string to generate meaningful initials."]}),"\n",(0,d.jsxs)(n.li,{children:["Use ",(0,d.jsx)(n.code,{children:"indicatorRadius"})," to maintain proportionality with the badge size when enabling the status indicator."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const d={},t=s.createContext(d);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);