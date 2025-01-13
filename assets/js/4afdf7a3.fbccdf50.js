"use strict";(self.webpackChunkcheckpoint_doc=self.webpackChunkcheckpoint_doc||[]).push([[2725],{461:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"quivio/components/bottomSheets/sheetWithModulesFilters","title":"ModuleFilterModal","description":"The ModuleFilterModal component is a React Native modal component that provides a customizable filter interface with checkbox selections, apply and reset functionality, and ref-based control for opening and closing the modal.","source":"@site/docs/quivio/components/bottomSheets/sheetWithModulesFilters.md","sourceDirName":"quivio/components/bottomSheets","slug":"/quivio/components/bottomSheets/sheetWithModulesFilters","permalink":"/checkpoint_doc/quivio/components/bottomSheets/sheetWithModulesFilters","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quivio/components/bottomSheets/sheetWithModulesFilters.md","tags":[],"version":"current","frontMatter":{},"sidebar":"quivioSidebar","previous":{"title":"SheetWithFilters","permalink":"/checkpoint_doc/quivio/components/bottomSheets/sheetWithFilters"},"next":{"title":"SheetWithOneTimeFilters","permalink":"/checkpoint_doc/quivio/components/bottomSheets/sheetWithOneTimeFilters"}}');var s=i(4848),l=i(8453);const d={},r="ModuleFilterModal",o={},c=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Types",id:"types",level:2},{value:"Features",id:"features",level:2},{value:"1. Ref-Based Control",id:"1-ref-based-control",level:3},{value:"2. Checkbox Selection",id:"2-checkbox-selection",level:3},{value:"3. Modal Behavior",id:"3-modal-behavior",level:3},{value:"4. Action Buttons",id:"4-action-buttons",level:3},{value:"Imperative Handle Methods",id:"imperative-handle-methods",level:2},{value:"Styling",id:"styling",level:2},{value:"Example: With Pre-selected Filters",id:"example-with-pre-selected-filters",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Notes",id:"notes",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"modulefiltermodal",children:"ModuleFilterModal"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ModuleFilterModal"})," component is a React Native modal component that provides a customizable filter interface with checkbox selections, apply and reset functionality, and ref-based control for opening and closing the modal."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import React, { useRef } from "react";\nimport ModuleFilterModal from "./ModuleFilterModal";\n\nconst MyComponent = () => {\n  const modalRef = useRef(null);\n\n  const fieldData = [\n    {\n      id: "1",\n      name: "Filter Option 1",\n      is_active: true,\n    },\n    {\n      id: "2",\n      name: "Filter Option 2",\n      is_active: false,\n    },\n  ];\n\n  const handleSubmit = (selectedFilters, updatedField) => {\n    console.log("Applied filters:", selectedFilters);\n  };\n\n  return (\n    <>\n      <ModuleFilterModal\n        ref={modalRef}\n        heading="Filters"\n        subHeading="Select options"\n        fieldData={fieldData}\n        onSubmitButtonPress={handleSubmit}\n      />\n      <Button onPress={() => modalRef.current?.open()} title="Open Filter" />\n    </>\n  );\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Prop Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"heading"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Main title of the filter modal"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"subHeading"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Subtitle displayed below the heading"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"fieldData"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Field[]"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Array of filter options"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"filtersApplied"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"any[]"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Currently applied filters"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"testID"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Test identifier for the modal"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"onSubmitButtonPress"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"(moduleFilterApplied: any[], field: any[]) => void"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Callback when apply button is pressed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"onResetButtonPress"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"(activeFilters: any[], updatedArray: any[]) => void"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Callback when reset button is pressed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"onResetFilter"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"() => void"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Callback for filter reset"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"interface Field {\n  id: string;\n  name: string;\n  is_active: boolean;\n}\n\ninterface ModuleFilterModalProps {\n  field?: Field;\n  heading?: string;\n  filtersApplied?: any;\n  fieldData?: any;\n  subHeading?: string;\n  testID?: string;\n  onSubmitButtonPress?: (moduleFilterApplied: any[], field: any[]) => void;\n  onResetFilter?: () => void;\n  onResetButtonPress?: (activeFilters: any[], updatedArray: any[]) => void;\n}\n\ninterface ListType {\n  id: number;\n  name: string;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(n.h3,{id:"1-ref-based-control",children:"1. Ref-Based Control"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Exposes ",(0,s.jsx)(n.code,{children:"open()"})," and ",(0,s.jsx)(n.code,{children:"close()"})," methods through ref"]}),"\n",(0,s.jsx)(n.li,{children:"Allows programmatic control of modal visibility"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-checkbox-selection",children:"2. Checkbox Selection"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Visual feedback for selected/unselected states"}),"\n",(0,s.jsx)(n.li,{children:"Maintains selection state across modal sessions"}),"\n",(0,s.jsx)(n.li,{children:"Updates font weight and color based on selection"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-modal-behavior",children:"3. Modal Behavior"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Backdrop press handling for dismissal"}),"\n",(0,s.jsx)(n.li,{children:"Keyboard avoidance support"}),"\n",(0,s.jsx)(n.li,{children:"Custom styling options"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-action-buttons",children:"4. Action Buttons"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Apply button (enabled when filters are selected)"}),"\n",(0,s.jsx)(n.li,{children:"Reset button (enabled when filters are applied)"}),"\n",(0,s.jsx)(n.li,{children:"Close button in header"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"imperative-handle-methods",children:"Imperative Handle Methods"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"{\n  open: () => void;  // Opens the modal\n  close: () => void; // Closes the modal\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"styling",children:"Styling"}),"\n",(0,s.jsx)(n.p,{children:"The component utilizes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Custom fonts from ",(0,s.jsx)(n.code,{children:"@quivio/assets/fonts"})]}),"\n",(0,s.jsxs)(n.li,{children:["Color system from ",(0,s.jsx)(n.code,{children:"@quivio/utils"})]}),"\n",(0,s.jsxs)(n.li,{children:["Responsive dimensions using ",(0,s.jsx)(n.code,{children:"normalize"})," and ",(0,s.jsx)(n.code,{children:"vh"})]}),"\n",(0,s.jsx)(n.li,{children:"Custom modal wrapper for consistent presentation"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-with-pre-selected-filters",children:"Example: With Pre-selected Filters"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const MyFilterModal = () => {\n  const modalRef = useRef(null);\n\n  const initialData = [\n    {\n      id: "1",\n      name: "Option 1",\n      is_active: true,\n    },\n    {\n      id: "2",\n      name: "Option 2",\n      is_active: true,\n    },\n  ];\n\n  const handleSubmit = (selectedFilters, updatedField) => {\n    console.log("Selected filters:", selectedFilters);\n    console.log("Updated field data:", updatedField);\n  };\n\n  const handleReset = (activeFilters, updatedArray) => {\n    console.log("Reset to:", activeFilters);\n    console.log("Updated array:", updatedArray);\n  };\n\n  return (\n    <ModuleFilterModal\n      ref={modalRef}\n      heading="Filter Options"\n      subHeading="Select your preferences"\n      fieldData={initialData}\n      onSubmitButtonPress={handleSubmit}\n      onResetButtonPress={handleReset}\n      testID="filter-modal"\n    />\n  );\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"React Native"}),"\n",(0,s.jsx)(n.li,{children:"@quivio/utils"}),"\n",(0,s.jsx)(n.li,{children:"@quivio/assets"}),"\n",(0,s.jsx)(n.li,{children:"@quivio/primitives"}),"\n",(0,s.jsx)(n.li,{children:"@quivio/localization"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"State Management:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Internal state for field data"}),"\n",(0,s.jsx)(n.li,{children:"Tracks active filters separately"}),"\n",(0,s.jsx)(n.li,{children:"Maintains modal visibility state"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Reset Behavior:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sets all options to active state"}),"\n",(0,s.jsx)(n.li,{children:"Triggers reset callback with updated data"}),"\n",(0,s.jsx)(n.li,{children:"Automatically closes modal"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Submit Behavior:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Passes selected filters and updated field data"}),"\n",(0,s.jsx)(n.li,{children:"Closes modal after submission"}),"\n",(0,s.jsx)(n.li,{children:"Disabled when no filters are selected"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The component uses the ",(0,s.jsx)(n.code,{children:"forwardRef"})," pattern for external control"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Supports localization through the ",(0,s.jsx)(n.code,{children:"localString"})," utility"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var t=i(6540);const s={},l=t.createContext(s);function d(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);