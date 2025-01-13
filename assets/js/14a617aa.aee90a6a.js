"use strict";(self.webpackChunkcheckpoint_doc=self.webpackChunkcheckpoint_doc||[]).push([[67],{9144:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"quivio/components/headers/baseHeader","title":"BaseHeader","description":"The BaseHeader component is a customizable header component for applications. It provides a flexible layout with optional left and right icons, a centered heading, and extensive styling options.","source":"@site/docs/quivio/components/headers/baseHeader.md","sourceDirName":"quivio/components/headers","slug":"/quivio/components/headers/baseHeader","permalink":"/checkpoint_doc/quivio/components/headers/baseHeader","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quivio/components/headers/baseHeader.md","tags":[],"version":"current","frontMatter":{},"sidebar":"quivioSidebar","previous":{"title":"CustomVideo","permalink":"/checkpoint_doc/quivio/components/customVideo"},"next":{"title":"CustomHeaderView","permalink":"/checkpoint_doc/quivio/components/headers/customHeader"}}');var t=s(4848),d=s(8453);const r={},c="BaseHeader",o={},l=[{value:"Usage",id:"usage",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Props",id:"props",level:2},{value:"Features",id:"features",level:2},{value:"Example: Custom Styled Header",id:"example-custom-styled-header",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Component Structure",id:"component-structure",level:2},{value:"Notes",id:"notes",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"baseheader",children:"BaseHeader"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"BaseHeader"})," component is a customizable header component for applications. It provides a flexible layout with optional left and right icons, a centered heading, and extensive styling options."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import React from "react";\nimport BaseHeader from "./BaseHeader";\n\nconst MyComponent = () => {\n  return (\n    <BaseHeader\n      heading="My Screen Title"\n      leftIcon={require("./back-icon.png")}\n      onLeftIconPress={() => console.log("Back pressed")}\n      testID="screen-header"\n    />\n  );\n};\n\nexport default MyComponent;\n'})}),"\n",(0,t.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Prop Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"leftIcon"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ImageSourcePropType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{children:"Source for the left icon image."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"onLeftIconPress"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"() => void"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{children:"Function to handle left icon press."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"heading"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{children:"Text to display as the header title."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"headerStyle"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ViewStyle"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{children:"Custom styles for the header container."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rightIcon"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ImageSourcePropType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{children:"Source for the right icon image."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"onRightIconPress"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"() => void"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{children:"Function to handle right icon press."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"disabled"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Disables the right icon button when true."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"leftIconTestID"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{children:"Test ID for the left icon container."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rightIconTestID"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{children:"Test ID for the right icon container."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"containerTestID"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{children:"Test ID for the main container."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"headingContainerTestID"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{children:"Test ID for the heading container."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Flexible Layout:"})," Supports left icon, heading, and right icon placement"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Icon Handling:"})," Optional left and right icons with press handlers"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Customizable Styling:"})," Supports custom styles for header container"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Accessibility:"})," Comprehensive test IDs for all components"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Text Overflow:"})," Handles long headings with ellipsis"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Optional Elements:"})," Gracefully handles missing icons with placeholder spaces"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-custom-styled-header",children:"Example: Custom Styled Header"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import React from "react";\nimport BaseHeader from "./BaseHeader";\n\nconst MyComponent = () => {\n  return (\n    <BaseHeader\n      heading="Screen Title"\n      leftIcon={require("./back.png")}\n      rightIcon={require("./menu.png")}\n      onLeftIconPress={() => console.log("Back")}\n      onRightIconPress={() => console.log("Menu")}\n      headerStyle={{ backgroundColor: "white" }}\n      disabled={false}\n      containerTestID="custom-header"\n    />\n  );\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"interface BaseHeaderProps {\n  leftIcon?: ImageSourcePropType;\n  onLeftIconPress?: () => void;\n  heading?: string;\n  headerStyle?: ViewStyle;\n  rightIcon?: ImageSourcePropType;\n  onRightIconPress?: () => void;\n  disabled?: boolean;\n  leftIconTestID?: string;\n  rightIconTestID?: string;\n  containerTestID?: string;\n  headingContainerTestID?: string;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"component-structure",children:"Component Structure"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Main container (",(0,t.jsx)(n.code,{children:"ViewWrapper"}),")","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Left section (Either ",(0,t.jsx)(n.code,{children:"IconButtons"})," or placeholder)"]}),"\n",(0,t.jsxs)(n.li,{children:["Center section (Heading in ",(0,t.jsx)(n.code,{children:"H1"})," component)"]}),"\n",(0,t.jsxs)(n.li,{children:["Right section (Either ",(0,t.jsx)(n.code,{children:"IconButtons"})," or placeholder)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Requires ",(0,t.jsx)(n.code,{children:"@quivio/utils/dimensions"})," for viewport-based sizing"]}),"\n",(0,t.jsxs)(n.li,{children:["Uses custom components: ",(0,t.jsx)(n.code,{children:"IconButtons"}),", ",(0,t.jsx)(n.code,{children:"H1"}),", ",(0,t.jsx)(n.code,{children:"ViewWrapper"})]}),"\n",(0,t.jsx)(n.li,{children:"Left and right icons have default sizing based on viewport height"}),"\n",(0,t.jsx)(n.li,{children:"Heading text is limited to one line with ellipsis overflow"}),"\n",(0,t.jsx)(n.li,{children:"Empty icon slots are filled with placeholder views to maintain layout"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(6540);const t={},d=i.createContext(t);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);