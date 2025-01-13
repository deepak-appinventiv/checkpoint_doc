"use strict";(self.webpackChunkcheckpoint_doc=self.webpackChunkcheckpoint_doc||[]).push([[551],{3828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"quivio/components/modals/popup","title":"PopupCard","description":"The PopupCard is a reusable and customizable popup component designed to display a combination of text, images, and action buttons. It provides flexibility through various props for styling and functionality.","source":"@site/docs/quivio/components/modals/popup.md","sourceDirName":"quivio/components/modals","slug":"/quivio/components/modals/popup","permalink":"/checkpoint_doc/quivio/components/modals/popup","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quivio/components/modals/popup.md","tags":[],"version":"current","frontMatter":{},"sidebar":"quivioSidebar","previous":{"title":"BottomBaseSheet","permalink":"/checkpoint_doc/quivio/components/modals/bottomSheet"},"next":{"title":"PopUpModal","permalink":"/checkpoint_doc/quivio/components/modals/popupModal"}}');var i=t(4848),d=t(8453);const r={},l="PopupCard",o={},c=[{value:"Usage",id:"usage",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Props",id:"props",level:2},{value:"Features",id:"features",level:2},{value:"Default Behavior",id:"default-behavior",level:2},{value:"Example: Custom Styling",id:"example-custom-styling",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Styling",id:"styling",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"popupcard",children:"PopupCard"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"PopupCard"})," is a reusable and customizable popup component designed to display a combination of text, images, and action buttons. It provides flexibility through various props for styling and functionality."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'import React from "react";\nimport PopupCard from "./PopupCard";\n\nconst MyComponent = () => {\n  const handleButtonPress = () => {\n    console.log("Primary button pressed");\n  };\n\n  const handleSecondaryButtonPress = () => {\n    console.log("Secondary button pressed");\n  };\n\n  return (\n    <PopupCard\n      title="Popup Title"\n      subTitle="This is a subtitle for the popup."\n      imageSource={require("../../assets/example.png")}\n      buttonTitle="Confirm"\n      buttonTitle2="Cancel"\n      onPressButton={handleButtonPress}\n      onPressButton2={handleSecondaryButtonPress}\n    />\n  );\n};\n\nexport default MyComponent;\n'})}),"\n",(0,i.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"title"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Required"})}),(0,i.jsx)(n.td,{children:"The main title displayed in the popup."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"subTitle"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:"The subtitle displayed below the title."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"titleStyle"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"TextStyle"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:"Custom styles for the title text."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"subTitleStyle"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"TextStyle"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:"Custom styles for the subtitle text."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"isLoading"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"Displays a loading indicator on the primary button."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"isDisabled"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsxs)(n.td,{children:["Disables the primary button when ",(0,i.jsx)(n.code,{children:"true"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"imageSource"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ImageSourcePropType"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Required"})}),(0,i.jsx)(n.td,{children:"The source for the image displayed in the popup."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"onPressButton"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"() => void"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Required"})}),(0,i.jsx)(n.td,{children:"Callback triggered when the primary button is pressed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"onPressButton2"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"() => void"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:"Callback triggered when the secondary button is pressed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"buttonTitle"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"''"})}),(0,i.jsx)(n.td,{children:"Title for the primary button."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"buttonTitle2"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"''"})}),(0,i.jsx)(n.td,{children:"Title for the secondary button (optional)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"buttonStyle"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ViewStyle"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:"Custom styles for the primary button."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"buttonStyle1"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ViewStyle"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:"Additional styles for the primary button."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"testID"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:"Test ID for the image in the popup (useful for testing)."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Customizable Content:"})," Provides customizable titles, subtitles, and button styles."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Dual Buttons:"})," Supports two action buttons with independent callbacks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Image Support:"})," Displays an image above the popup content."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Loading State:"})," Includes a loading state for the primary button."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Accessibility:"})," Supports ",(0,i.jsx)(n.code,{children:"testID"})," for testing purposes."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"default-behavior",children:"Default Behavior"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The popup ensures alignment and spacing for single or dual button setups."}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"buttonTitle2"})," is provided, both buttons are displayed side by side with equal spacing."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-custom-styling",children:"Example: Custom Styling"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'<PopupCard\n  title="Custom Popup"\n  subTitle="This popup uses custom styles."\n  imageSource={require("../../assets/custom-image.png")}\n  buttonTitle="OK"\n  buttonTitle2="Cancel"\n  onPressButton={() => console.log("OK pressed")}\n  onPressButton2={() => console.log("Cancel pressed")}\n  titleStyle={{ fontSize: 20, color: "blue" }}\n  subTitleStyle={{ fontSize: 16, color: "gray" }}\n  buttonStyle={{ backgroundColor: "green" }}\n/>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"React"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@primitives/typography"})," (for ",(0,i.jsx)(n.code,{children:"H11"}),", ",(0,i.jsx)(n.code,{children:"H4"}),", ",(0,i.jsx)(n.code,{children:"H6"})," typography components)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ImageWrapper"}),", ",(0,i.jsx)(n.code,{children:"ViewWrapper"})," (for layout and image rendering)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BaseButton"})," (for buttons)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@quivio/utils"})," (for colors and dimensions utilities)"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"styling",children:"Styling"}),"\n",(0,i.jsxs)(n.p,{children:["Styles for the component are imported from ",(0,i.jsx)(n.code,{children:"./styles"})," and include:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"modalContainer"}),": Styles for the outermost container of the popup."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"modalInnerContainer"}),": Styles for the content inside the popup."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"iconStyle"}),": Styles for the image displayed in the popup."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"buttonContainer"}),": Styles for the container holding the buttons."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"buttonText"}),": Default styles for the button text."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"title"}),": Default styles for the title text."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"subtitleView"}),": Default styles for the subtitle text."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const i={},d=s.createContext(i);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);