"use strict";(self.webpackChunkcheckpoint_doc=self.webpackChunkcheckpoint_doc||[]).push([[5643],{7627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"quivio/components/bottomSheets/sheetWithCustomerFilters","title":"SheetWithCustomerFilters","description":"The SheetWithCustomerFilters component provides a user-friendly interface to apply filters, including date and multi-select options, within a sheet-like layout. This component integrates multiple sub-components like buttons, modals, and calendars to create a cohesive user experience.","source":"@site/docs/quivio/components/bottomSheets/sheetWithCustomerFilters.md","sourceDirName":"quivio/components/bottomSheets","slug":"/quivio/components/bottomSheets/sheetWithCustomerFilters","permalink":"/quivio/components/bottomSheets/sheetWithCustomerFilters","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quivio/components/bottomSheets/sheetWithCustomerFilters.md","tags":[],"version":"current","frontMatter":{},"sidebar":"quivioSidebar","previous":{"title":"SheetWithBasicSelectors","permalink":"/quivio/components/bottomSheets/sheetWithBasicSelectors"},"next":{"title":"SheetWithFilters","permalink":"/quivio/components/bottomSheets/sheetWithFilters"}}');var i=n(4848),r=n(8453);const l={},d="SheetWithCustomerFilters",o={},c=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:3},{value:"Props",id:"props",level:2},{value:"Sub-Components",id:"sub-components",level:2},{value:"Calendar Integration",id:"calendar-integration",level:3},{value:"Buttons",id:"buttons",level:3},{value:"Modal",id:"modal",level:3},{value:"Internal Logic",id:"internal-logic",level:2},{value:"Filter State Management",id:"filter-state-management",level:3},{value:"Helper Functions",id:"helper-functions",level:3},{value:"Dynamic Rendering",id:"dynamic-rendering",level:3},{value:"Notes",id:"notes",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"sheetwithcustomerfilters",children:"SheetWithCustomerFilters"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"SheetWithCustomerFilters"})," component provides a user-friendly interface to apply filters, including date and multi-select options, within a sheet-like layout. This component integrates multiple sub-components like buttons, modals, and calendars to create a cohesive user experience."]}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'import React from "react";\nimport SheetWithCustomerFilters from "./SheetWithCustomerFilters";\n\nconst MyComponent = () => {\n  const handleReset = () => {\n    console.log("Filters Reset");\n  };\n\n  const handleSubmit = (filters) => {\n    console.log("Filters Submitted:", filters);\n  };\n\n  const handleCross = () => {\n    console.log("Close Filter Sheet");\n  };\n\n  const sampleFilters = [\n    {\n      filter_type: "Category",\n      multiselect: true,\n      list: [\n        { id: "1", name: "Option 1" },\n        { id: "2", name: "Option 2" },\n      ],\n    },\n  ];\n\n  return (\n    <SheetWithCustomerFilters\n      label="Apply Filters"\n      subLabel="Select your preferences"\n      _data={sampleFilters}\n      onPressReset={handleReset}\n      onPressSubmit={handleSubmit}\n      onPressCross={handleCross}\n    />\n  );\n};\n\nexport default MyComponent;\n'})}),"\n",(0,i.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Prop Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"label"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Required"})}),(0,i.jsx)(t.td,{children:"The title of the sheet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"subLabel"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Required"})}),(0,i.jsx)(t.td,{children:"The subtitle or description of the sheet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"_data"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"FilterType[]"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Required"})}),(0,i.jsx)(t.td,{children:"The array of filter data containing types and lists."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"filters"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"any"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"undefined"})}),(0,i.jsx)(t.td,{children:"Current applied filters."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"onPressReset"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"() => void"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"() => {}"})}),(0,i.jsx)(t.td,{children:"Callback for reset action."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"onPressCross"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"() => void"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"() => {}"})}),(0,i.jsx)(t.td,{children:"Callback for closing the sheet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"onPressSubmit"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"(args) => void"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Required"})}),(0,i.jsx)(t.td,{children:"Callback to handle filter submission."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"primaryButtonLabel"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"RESET"'})}),(0,i.jsx)(t.td,{children:"Label for the primary (reset) button."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"secondaryButtonLabel"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"APPLY"'})}),(0,i.jsx)(t.td,{children:"Label for the secondary (apply) button."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"sub-components",children:"Sub-Components"}),"\n",(0,i.jsx)(t.h3,{id:"calendar-integration",children:"Calendar Integration"}),"\n",(0,i.jsxs)(t.p,{children:["The component uses a ",(0,i.jsx)(t.code,{children:"CustomCalendar"})," to handle date-specific filters. The ",(0,i.jsx)(t.code,{children:"CustomCalendar"})," provides features like date selection, min/max date constraints, and default date handling."]}),"\n",(0,i.jsx)(t.h3,{id:"buttons",children:"Buttons"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Primary Button:"})," Used for resetting filters."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Secondary Button:"})," Used for applying filters."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"modal",children:"Modal"}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.code,{children:"PopUpModal"})," is used to display the calendar for date selection."]}),"\n",(0,i.jsx)(t.h2,{id:"internal-logic",children:"Internal Logic"}),"\n",(0,i.jsx)(t.h3,{id:"filter-state-management",children:"Filter State Management"}),"\n",(0,i.jsxs)(t.p,{children:["The component maintains a state for selected filters and updates them dynamically as the user interacts with the UI. Filters are categorized by type (e.g., ",(0,i.jsx)(t.code,{children:"Date"}),", ",(0,i.jsx)(t.code,{children:"Status"}),")."]}),"\n",(0,i.jsx)(t.h3,{id:"helper-functions",children:"Helper Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"determineAvailableStatus:"})," Checks if a filter option is already selected."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"containsDateWord:"})," Determines if a filter type relates to dates."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"determineDateValue:"})," Fetches the value of a selected date."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"determineMaxDate / determineMinDate:"})," Calculates valid date ranges based on the current selection."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"dynamic-rendering",children:"Dynamic Rendering"}),"\n",(0,i.jsxs)(t.p,{children:["The component dynamically renders filter options and handles both multi-select and date-related filters using ",(0,i.jsx)(t.code,{children:"_listRenderItem"})," and ",(0,i.jsx)(t.code,{children:"_renderItem"})," functions."]}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Ensure ",(0,i.jsx)(t.code,{children:"CustomCalendar"}),", ",(0,i.jsx)(t.code,{children:"BaseButton"}),", ",(0,i.jsx)(t.code,{children:"PopUpModal"}),", and other sub-components are correctly imported and styled."]}),"\n",(0,i.jsxs)(t.li,{children:["Use appropriate styling through the provided ",(0,i.jsx)(t.code,{children:"styles"})," object for a cohesive design."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var s=n(6540);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);