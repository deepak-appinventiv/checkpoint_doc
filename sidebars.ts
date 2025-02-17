import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

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
      type: 'category',
      label: 'Components',
      items: ['realtime/components/baseInput', 'realtime/components/customButton', 'realtime/components/customBottomSheet', 'realtime/components/customGeneralHeader', 'realtime/components/customHomeHeader', 'realtime/components/customLoader','realtime/components/calendarComponent', 'realtime/components/customWeatherCard', 'realtime/components/customLoader'],
    },
  ],
  quivioSidebar: [
    'quivio/inventory',
    {
      type: 'category',
      label: 'Components',
      items: ['quivio/components/intro'],
    },
    {
      type: 'category',
      label: 'Primitives',
      items: ['quivio/primitives/intro'],
    },
    {
      type: 'category',
      label: 'Navigation',
      items: ['quivio/navigation/intro'],
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
