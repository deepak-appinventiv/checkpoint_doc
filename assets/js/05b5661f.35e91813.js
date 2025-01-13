"use strict";(self.webpackChunkcheckpoint_doc=self.webpackChunkcheckpoint_doc||[]).push([[4232],{4232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"realtime/components/customWeatherCard","title":"WeatherCard","description":"The WeatherCard component is a beautifully designed UI element used to display weather information dynamically. This component is optimized for our app, ensuring seamless integration and accurate representation of weather data.","source":"@site/docs/realtime/components/customWeatherCard.mdx","sourceDirName":"realtime/components","slug":"/realtime/components/customWeatherCard","permalink":"/realtime/components/customWeatherCard","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/realtime/components/customWeatherCard.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"realTimeSidebar","previous":{"title":"CustomCalendar","permalink":"/realtime/components/calendarComponent"},"next":{"title":"CustomLoader","permalink":"/realtime/components/customLoader"}}');var i=n(4848),a=n(8453);const s={},d="WeatherCard",o={},c=[{value:"Props",id:"props",level:2},{value:"Data Extraction",id:"data-extraction",level:2},{value:"Methods and Utilities",id:"methods-and-utilities",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Implementation",id:"basic-implementation",level:3},{value:"Customizing the Weather Card",id:"customizing-the-weather-card",level:3},{value:"Features",id:"features",level:2},{value:"Notes",id:"notes",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"weathercard",children:"WeatherCard"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"WeatherCard"})," component is a beautifully designed UI element used to display weather information dynamically. This component is optimized for our app, ensuring seamless integration and accurate representation of weather data."]}),"\n",(0,i.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Prop"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"weatherData"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Object"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{}"})}),(0,i.jsx)(t.td,{children:"Contains all the weather-related information to be displayed in the component."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"backgroundImage"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ImageSource"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"null"})}),(0,i.jsx)(t.td,{children:"The background image for the weather card, enhancing visual appeal."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"data-extraction",children:"Data Extraction"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"WeatherCard"})," fetches and displays the following details from ",(0,i.jsx)(t.code,{children:"weatherData"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Temperature"}),": Average temperature for the day."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Precipitation Probability"}),": Maximum precipitation probability."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Weather Code"}),": Used to determine the weather condition and fetch appropriate icons."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Sunrise and Sunset"}),": Determines whether the current time is daytime or nighttime."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"methods-and-utilities",children:"Methods and Utilities"}),"\n",(0,i.jsx)(t.p,{children:"The component utilizes several utility functions for enhanced functionality:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"isDaytime(sunrise, sunset)"})}),": Determines whether it is currently daytime based on sunrise and sunset times."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"fetchWeatherCodeIcon(weatherCode)"})}),": Fetches the appropriate weather icon based on the weather code."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"getWeatherCodeDescription(weatherCode)"})}),": Provides a descriptive label for the weather condition."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.h3,{id:"basic-implementation",children:"Basic Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"import React from 'react';\nimport WeatherCard from './WeatherCard';\nimport backgroundImage from '../assets/weather-background.jpg';\n\nconst weatherData = {\n  daily: {\n    temperature_2m_mean: 72,\n    precipitation_probability_max: 20,\n    weather_code: 3,\n    sunrise: '2024-12-23T07:12:00',\n    sunset: '2024-12-23T17:45:00',\n  },\n};\n\nconst App = () => (\n  <WeatherCard weatherData={weatherData} backgroundImage={backgroundImage} />\n);\n\nexport default App;\n"})}),"\n",(0,i.jsx)(t.h3,{id:"customizing-the-weather-card",children:"Customizing the Weather Card"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"<WeatherCard\n  weatherData={customWeatherData}\n  backgroundImage={require('../assets/custom-bg.jpg')}\n/>\n"})}),"\n",(0,i.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Dynamic Weather Information"}),": Displays real-time weather data, including temperature, precipitation, and conditions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Day/Night Awareness"}),": Adjusts icons based on whether it is daytime or nighttime."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Responsive Design"}),": Looks great on different screen sizes and orientations."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Customizable Background"}),": Easily set a custom background image to suit your app's theme."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Ensure that the ",(0,i.jsx)(t.code,{children:"weatherData"})," prop includes valid and complete data for accurate rendering."]}),"\n",(0,i.jsx)(t.li,{children:"The component is optimized for both Android and iOS platforms."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var r=n(6540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);