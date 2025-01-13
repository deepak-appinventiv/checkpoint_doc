"use strict";(self.webpackChunkcheckpoint_doc=self.webpackChunkcheckpoint_doc||[]).push([[9829],{4206:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"realtime/components/customCart","title":"Custom Chart","description":"The Chart component is a highly customizable and reusable solution for rendering bar charts with advanced features like tooltips, dynamic data updates, and responsive layouts. It leverages the powerful React Native Gifted Charts library to create visually appealing and interactive charts for applications.","source":"@site/docs/realtime/components/customCart.mdx","sourceDirName":"realtime/components","slug":"/realtime/components/customCart","permalink":"/checkpoint_doc/realtime/components/customCart","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/realtime/components/customCart.mdx","tags":[],"version":"current","frontMatter":{}}');var i=t(4848),r=t(8453);const a={},d="Custom Chart",l={},o=[{value:"Features",id:"features",level:2},{value:"Props",id:"props",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Data Transformation",id:"data-transformation",level:3},{value:"Dynamic Bar Width",id:"dynamic-bar-width",level:3},{value:"Tooltip",id:"tooltip",level:3},{value:"Customization",id:"customization",level:2},{value:"Styling",id:"styling",level:2},{value:"Notes",id:"notes",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"custom-chart",children:"Custom Chart"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Chart"})," component is a highly customizable and reusable solution for rendering bar charts with advanced features like tooltips, dynamic data updates, and responsive layouts. It leverages the powerful ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/react-native-gifted-charts",children:"React Native Gifted Charts"})," library to create visually appealing and interactive charts for applications."]}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Dynamic Data Transformation"}),": Supports converting raw data into meaningful visual representations using date transformations and custom logic."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Customizable Bar Width"}),": Adapts bar width dynamically based on the selected mode (Day, Week, Month, Year) and screen size."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Tooltip Support"}),": Displays detailed information when interacting with chart elements, including comparison data from previous datasets."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Responsive Design"}),": Scales seamlessly across devices, with tablet-specific optimizations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Configurable Axes and Labels"}),": Includes customizable Y-axis sections, labels, and formatting for thousands or dollar-suffix conversions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Theming"}),": Integrates with color and typography themes for a consistent application style."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"selectedMode"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"any"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Defines the mode of the chart (e.g., Day, Week, Month, Year)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"graphData"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"object"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsxs)(n.td,{children:["Contains ",(0,i.jsx)(n.code,{children:"current"})," and ",(0,i.jsx)(n.code,{children:"previous"})," datasets to visualize."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"selectedOption"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"any"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"The selected filter or option for displaying data."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"denotedVal"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"any"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"The unit or value denotation for the chart."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"isChartTypeShow"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{children:"Whether to display the chart type label below the chart."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"isDollarSuffix"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"Whether to append a dollar sign to Y-axis labels."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport Chart from './Chart';\n\nconst App = () => {\n  const graphData = {\n    current: [\n      { label: 'Jan', value: 100 },\n      { label: 'Feb', value: 200 },\n    ],\n    previous: [\n      { label: 'Jan', value: 80 },\n      { label: 'Feb', value: 180 },\n    ],\n  };\n\n  return (\n    <Chart\n      selectedMode={'Month'}\n      graphData={graphData}\n      selectedOption={'Revenue'}\n      denotedVal={'$'}\n      isDollarSuffix={true}\n    />\n  );\n};\n\nexport default App;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"key-functions",children:"Key Functions"}),"\n",(0,i.jsx)(n.h3,{id:"data-transformation",children:"Data Transformation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"transformDates(data, mode)"}),": Converts raw data into a format suitable for the chart based on the selected mode."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"updateAndFilterPrevData(prevData, items)"}),": Filters and updates previous data to ensure alignment with the current dataset."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dynamic-bar-width",children:"Dynamic Bar Width"}),"\n",(0,i.jsx)(n.p,{children:"Bar width is calculated dynamically based on the selected mode and screen width:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const maxBarWidth =\n  selectedMode === 1 || selectedMode === 'Day'\n    ? getWp(18, 36, 36)\n    : selectedMode === 2 || selectedMode === 'Week'\n    ? getWp(40, 80, 80)\n    : ...;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"tooltip",children:"Tooltip"}),"\n",(0,i.jsx)(n.p,{children:"Provides additional data insights through a tooltip rendered dynamically:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"pointerLabelComponent: (items) => (\n  <TooltipDetails\n    isDollarSuffix={isDollarSuffix}\n    denotedVal={denotedVal}\n    item={items[0]}\n    prevData={filteredUpdatedData[0]}\n    selectedOption={selectedOption}\n  />\n);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"customization",children:"Customization"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Chart"})," component supports extensive customization:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Line Configurations"}),": Customize the appearance of line charts using the ",(0,i.jsx)(n.code,{children:"lineConfig"})," prop."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Axis and Label Styles"}),": Adjust text styles, colors, and spacings via ",(0,i.jsx)(n.code,{children:"styles"})," and theme utilities."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pointer Behavior"}),": Modify the behavior and appearance of the pointer using ",(0,i.jsx)(n.code,{children:"pointerConfig"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"styling",children:"Styling"}),"\n",(0,i.jsx)(n.p,{children:"The component uses the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Styles"}),": Centralized styles defined in a ",(0,i.jsx)(n.code,{children:"styles"})," file for reuse."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Colors"}),": Utilizes the application's color palette from ",(0,i.jsx)(n.code,{children:"colors"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typography"}),": Supports custom typography settings via ",(0,i.jsx)(n.code,{children:"H11"})," and other components."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(n.p,{children:["This component is specifically designed for use in this application and may need adjustments for standalone use. It demonstrates seamless integration with the app's theme and utility functions, such as ",(0,i.jsx)(n.code,{children:"getWp"}),", ",(0,i.jsx)(n.code,{children:"getHp"}),", and ",(0,i.jsx)(n.code,{children:"colors"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);