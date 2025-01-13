"use strict";(self.webpackChunkcheckpoint_doc=self.webpackChunkcheckpoint_doc||[]).push([[7286],{5236:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>o});const d=JSON.parse('{"id":"realtime/components/baseInput","title":"CustomInput","description":"The Input component is a customizable text input field. It is designed to be reusable and includes various features like icons, error handling, and styling options.","source":"@site/docs/realtime/components/baseInput.mdx","sourceDirName":"realtime/components","slug":"/realtime/components/baseInput","permalink":"/checkpoint_doc/realtime/components/baseInput","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/realtime/components/baseInput.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"realTimeSidebar","next":{"title":"CustomButton","permalink":"/checkpoint_doc/realtime/components/customButton"}}');var s=t(4848),i=t(8453);const r={},c="CustomInput",l={},o=[{value:"Usage",id:"usage",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Props",id:"props",level:2},{value:"Features",id:"features",level:2},{value:"Styling",id:"styling",level:2},{value:"Testing",id:"testing",level:2},{value:"Default Props",id:"default-props",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"custominput",children:"CustomInput"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Input"})," component is a customizable text input field. It is designed to be reusable and includes various features like icons, error handling, and styling options."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import React from 'react';\nimport CustomInput from './CustomInput';\n\nconst MyComponent = () => {\n  const handleTextChange = (text) => {\n    console.log('Input value:', text);\n  };\n\n  return (\n    <CustomInput\n      label=\"Enter your name\"\n      value=\"\"\n      onChangeText={handleTextChange}\n    />\n  );\n};\n\nexport default MyComponent;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Prop Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"label"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"''"})}),(0,s.jsx)(n.td,{children:"Placeholder text for the input field."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"value"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"''"})}),(0,s.jsx)(n.td,{children:"Current value of the input field."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"leftIcon"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ImageSource"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Icon to display on the left side of the input field."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rightIcon"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ImageSource"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Icon to display on the right side of the input field."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"errorText"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"''"})}),(0,s.jsx)(n.td,{children:"Error message to show below the input."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"iconStyle"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"styles.iconStyle"})}),(0,s.jsx)(n.td,{children:"Style for the icons."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rightLabel"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Text label to display on the right side of the input."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"onChangeText"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"function"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"() => {}"})}),(0,s.jsx)(n.td,{children:"Callback function triggered when the text changes."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"leftIconContainer"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Custom style for the left icon container."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rightIconContainer"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Custom style for the right icon container."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"maxLength"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"40"})}),(0,s.jsx)(n.td,{children:"Maximum length of the input text."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"textContainerStyle"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Style for the input's container."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"testID"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"${label}-text-input"})}),(0,s.jsx)(n.td,{children:"Test ID for the input field (useful for testing purposes)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rightLabelStyle"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Style for the right label."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rightIconStyle"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Style for the right icon."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"onPressRightIcon"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"function"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Callback function for right icon press."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"inputCustomStyle"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Custom style for the text input."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rest"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsxs)(n.td,{children:["Additional props passed to the ",(0,s.jsx)(n.code,{children:"TextInput"})," component."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Left and Right Icons:"})," Supports icons on both sides of the input field."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Error Handling:"})," Displays an error message and changes the border color when ",(0,s.jsx)(n.code,{children:"errorText"})," is provided."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Customizable Styles:"})," Provides extensive styling options for various parts of the component."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Platform-Specific Behavior:"})," Uses ",(0,s.jsx)(n.code,{children:"ascii-capable"})," keyboard on iOS and ",(0,s.jsx)(n.code,{children:"visible-password"})," on Android for better compatibility."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"styling",children:"Styling"}),"\n",(0,s.jsxs)(n.p,{children:["The component uses default styles defined in the ",(0,s.jsx)(n.code,{children:"styles"})," file. You can override these styles using props like ",(0,s.jsx)(n.code,{children:"iconStyle"}),", ",(0,s.jsx)(n.code,{children:"textContainerStyle"}),", ",(0,s.jsx)(n.code,{children:"inputCustomStyle"}),", etc."]}),"\n",(0,s.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"testID"})," prop allows you to set a unique identifier for testing purposes. By default, it is set to ",(0,s.jsx)(n.code,{children:"${label}-text-input"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"default-props",children:"Default Props"}),"\n",(0,s.jsx)(n.p,{children:"The following default props are provided:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"CustomInput.defaultProps = {\n  value: '',\n  testID: '',\n  maxLength: 40,\n  errorText: '',\n  label: '',\n  onChangeText: () => {},\n};\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var d=t(6540);const s={},i=d.createContext(s);function r(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);