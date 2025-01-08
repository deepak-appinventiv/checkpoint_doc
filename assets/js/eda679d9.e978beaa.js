"use strict";(self.webpackChunkcheckpoint_doc=self.webpackChunkcheckpoint_doc||[]).push([[1864],{5897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"components/customLoader","title":"Custom Loader","description":"The CustomLoader component is a flexible and customizable loading indicator designed for use within our app. It leverages React Native\'s ActivityIndicator to display a spinner while content is being loaded or an operation is in progress.","source":"@site/docs/components/customLoader.mdx","sourceDirName":"components","slug":"/components/customLoader","permalink":"/checkpoint_doc/docs/components/customLoader","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/customLoader.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Custom Home Header","permalink":"/checkpoint_doc/docs/components/customHomeHeader"},"next":{"title":"Custom Weather Card","permalink":"/checkpoint_doc/docs/components/customWeatherCard"}}');var s=n(4848),r=n(8453);const i={},d="Custom Loader",c={},l=[{value:"Props",id:"props",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Customizing the Loader",id:"customizing-the-loader",level:3},{value:"Features",id:"features",level:2},{value:"Notes",id:"notes",level:2},{value:"Contributing",id:"contributing",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"custom-loader",children:"Custom Loader"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CustomLoader"})," component is a flexible and customizable loading indicator designed for use within our app. It leverages React Native's ",(0,s.jsx)(t.code,{children:"ActivityIndicator"})," to display a spinner while content is being loaded or an operation is in progress."]}),"\n",(0,s.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prop Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"color"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"colors.green"})}),(0,s.jsx)(t.td,{children:"Specifies the color of the loader."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"loaderSize"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'small' | 'large'"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'large'"})}),(0,s.jsx)(t.td,{children:"Determines the size of the loader."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"customStyle"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ViewStyle"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"undefined"})}),(0,s.jsx)(t.td,{children:"Custom styles for the loader's container."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"import React from 'react';\nimport CustomLoader from './CustomLoader';\n\nconst App = () => {\n  return <CustomLoader />;\n};\n\nexport default App;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"customizing-the-loader",children:"Customizing the Loader"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'<CustomLoader\n  color="red"\n  loaderSize="small"\n  customStyle={{ top: 50, left: 50 }}\n/>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Customizable Appearance"}),": You can set the color, size, and position of the loader."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Easy Integration"}),": Drop the component into any screen to display a spinner."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Ensure that the ",(0,s.jsx)(t.code,{children:"color"})," prop is a valid color string supported by React Native."]}),"\n",(0,s.jsxs)(t.li,{children:["Use ",(0,s.jsx)(t.code,{children:"customStyle"})," to position the loader appropriately in your layout."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"contributing",children:"Contributing"}),"\n",(0,s.jsxs)(t.p,{children:["If you'd like to enhance or suggest improvements for the ",(0,s.jsx)(t.code,{children:"CustomLoader"}),", feel free to contribute by submitting a pull request or providing feedback!"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var o=n(6540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);