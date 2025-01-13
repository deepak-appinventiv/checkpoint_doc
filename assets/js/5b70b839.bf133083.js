"use strict";(self.webpackChunkcheckpoint_doc=self.webpackChunkcheckpoint_doc||[]).push([[905],{6465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"quivio/components/bottomSheets/sheetWithBasicSelectors","title":"SheetWithBasicSelectors","description":"The SheetWithBasicSelectors component is a versatile and customizable sheet designed to display a list of selectable items. Each item includes an icon and a title, with optional separators between entries.","source":"@site/docs/quivio/components/bottomSheets/sheetWithBasicSelectors.md","sourceDirName":"quivio/components/bottomSheets","slug":"/quivio/components/bottomSheets/sheetWithBasicSelectors","permalink":"/quivio/components/bottomSheets/sheetWithBasicSelectors","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quivio/components/bottomSheets/sheetWithBasicSelectors.md","tags":[],"version":"current","frontMatter":{},"sidebar":"quivioSidebar","previous":{"title":"MultiFieldModal","permalink":"/quivio/components/bottomSheets/multifiledModal"},"next":{"title":"SheetWithCustomerFilters","permalink":"/quivio/components/bottomSheets/sheetWithCustomerFilters"}}');var s=n(4848),o=n(8453);const c={},l="SheetWithBasicSelectors",r={},a=[{value:"Usage",id:"usage",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Props",id:"props",level:2},{value:"Features",id:"features",level:2},{value:"Example: Custom Styling",id:"example-custom-styling",level:2},{value:"Notes",id:"notes",level:2},{value:"Example Data",id:"example-data",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"sheetwithbasicselectors",children:"SheetWithBasicSelectors"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SheetWithBasicSelectors"})," component is a versatile and customizable sheet designed to display a list of selectable items. Each item includes an icon and a title, with optional separators between entries."]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'import React from "react";\nimport SheetWithBasicSelectors from "./SheetWithBasicSelectors";\n\nconst MyComponent = () => {\n  const data = [\n    { id: "1", icon: require("./path-to-icon1.png"), title: "Option 1" },\n    { id: "2", icon: require("./path-to-icon2.png"), title: "Option 2" },\n  ];\n\n  const handlePressOption = (item) => {\n    console.log("Selected Item:", item);\n  };\n\n  return (\n    <SheetWithBasicSelectors\n      data={data}\n      onPressOption={handlePressOption}\n      customContainerStyle={{ padding: 10 }}\n    />\n  );\n};\n\nexport default MyComponent;\n'})}),"\n",(0,s.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prop Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"data"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"any"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"undefined"})}),(0,s.jsx)(t.td,{children:"Array of objects representing the selectable items."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"customContainerStyle"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ViewStyle"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"undefined"})}),(0,s.jsx)(t.td,{children:"Custom styles to apply to the container."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"onPressOption"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"(item) => void"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"undefined"})}),(0,s.jsx)(t.td,{children:"Callback function triggered when an item is selected."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Selectable Items:"})," Displays a list of items, each with an icon and title."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Custom Styling:"})," Supports custom container styles for flexibility."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Actionable Items:"})," Includes a callback to handle item selection."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Dynamic Rendering:"})," Automatically adds separators between items, excluding the last item."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example-custom-styling",children:"Example: Custom Styling"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'<SheetWithBasicSelectors\n  data={[\n    { id: "1", icon: require("./icon1.png"), title: "Option A" },\n    { id: "2", icon: require("./icon2.png"), title: "Option B" },\n  ]}\n  customContainerStyle={{ backgroundColor: "lightgray" }}\n  onPressOption={(item) => console.log("Pressed:", item)}\n/>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Ensure that each item in the ",(0,s.jsx)(t.code,{children:"data"})," array includes an ",(0,s.jsx)(t.code,{children:"id"}),", ",(0,s.jsx)(t.code,{children:"icon"}),", and ",(0,s.jsx)(t.code,{children:"title"})," property."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"onPressOption"})," callback receives the selected item as an argument."]}),"\n",(0,s.jsxs)(t.li,{children:["Custom styles can be passed to the ",(0,s.jsx)(t.code,{children:"customContainerStyle"})," prop to override default container styling."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example-data",children:"Example Data"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'const sampleData = [\n  { id: "1", icon: require("./icon1.png"), title: "Item 1" },\n  { id: "2", icon: require("./icon2.png"), title: "Item 2" },\n  { id: "3", icon: require("./icon3.png"), title: "Item 3" },\n];\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var i=n(6540);const s={},o=i.createContext(s);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);