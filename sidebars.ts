import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: ['quivio/intro'],
  realTimeSidebar: [
    {
      type: "category",
      label: "Components",
      items: [
        "realtime/components/baseInput",
        "realtime/components/customButton",
        "realtime/components/customBottomSheet",
        "realtime/components/customGeneralHeader",
        "realtime/components/customHomeHeader",
        "realtime/components/customLoader",
        "realtime/components/calendarComponent",
        "realtime/components/customWeatherCard",
        "realtime/components/customLoader",
      ],
    },
  ],
  quivioSidebar: [
    "quivio/inventory",
    {
      type: "category",
      label: "Components",
      items: [
        "quivio/components/intro",
        "quivio/components/baseButton",
        "quivio/components/iconButton",
        "quivio/components/calendarView",
        {
          type: "category",
          label: "BottomSheets",
          items: [
            "quivio/components/bottomSheets/multifiledModal",
            "quivio/components/bottomSheets/sheetWithBasicSelectors",
            "quivio/components/bottomSheets/sheetWithCustomerFilters",
            "quivio/components/bottomSheets/sheetWithFilters",
            "quivio/components/bottomSheets/sheetWithModulesFilters",
            "quivio/components/bottomSheets/sheetWithOneTimeFilters",
            "quivio/components/bottomSheets/sheetWithRoles",
          ],
        },
        "quivio/components/collapsibleContainer",
        "quivio/components/customerListContentCard",
        "quivio/components/customLoader",
        "quivio/components/customVideo",
        {
          type: "category",
          label: "Headers",
          items: [
            "quivio/components/headers/baseHeader",
            "quivio/components/headers/customHeader",
            "quivio/components/headers/customHeaderNew",
            "quivio/components/headers/onBoardingHeader",
          ],
        },
        "quivio/components/imageBackgroundWrap",
        "quivio/components/imageCarousel",
        "quivio/components/imageWrapper",
        {
          type: "category",
          label: "Inputs",
          items: [
            "quivio/components/inputs/customInput",
            "quivio/components/inputs/customTouchableInput",
          ],
        },
        "quivio/components/listContentCard",
        {
          type: "category",
          label: "Modals",
          items: [
            "quivio/components/modals/customModalWrapper",
            "quivio/components/modals/bottomSheet",
            "quivio/components/modals/popup",
            "quivio/components/modals/popupModal",
          ],
        },
        "quivio/components/profileBadge",
        "quivio/components/radioButton",
      ],
    },
    {
      type: "category",
      label: "Primitives",
      items: [
        "quivio/primitives/baseView",
        "quivio/primitives/spacer",
        "quivio/primitives/touchable",
        {
          type: "category",
          label: "Typography",
          items: [
            "quivio/primitives/typography/base",
            "quivio/primitives/typography/h1",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Navigation",
      items: ["quivio/navigation/utilities"],
    },
    {
      type: "category",
      label: "Custom Hooks",
      items: [
        "quivio/hooks/refs",
        "quivio/hooks/state",
        "quivio/hooks/useDebouncing",
        "quivio/hooks/useFormHandler",
      ],
    },
    {
      type: "category",
      label: "Utils",
      items: [
        "quivio/utils/colors",
        "quivio/utils/array-helper",
        "quivio/utils/dateFormatters",
        "quivio/utils/dimensions",
        "quivio/utils/object",
        "quivio/utils/profileHelper",
        "quivio/utils/string",
        "quivio/utils/token",
        "quivio/utils/validators",
      ],
    },
    {
      type: "category",
      label: "Services",
      items: [
        "quivio/services/analytics/analytics",
        "quivio/services/apis/apis",
      ],
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
