import React from "react";
import "./custom.css"; // Ensure your custom CSS is imported
import useBaseUrl from '@docusaurus/useBaseUrl';

const GridView = () => {
  return (
    <div className="grid-container">
      <a
        href="/quivio/components/intro"
        target="_self"
        rel="noopener noreferrer"
      >
        <div className="grid-item">
          <img src={useBaseUrl("/img/inventory/button.png")} />
        </div>
      </a>

      <a
        href="/quivio/components/intro"
        target="_self"
        rel="noopener noreferrer"
      >
        <div className="grid-item">
          <img src={useBaseUrl("/img/inventory/button.png")} />
        </div>
      </a>
      <a
        href="/quivio/components/intro"
        target="_self"
        rel="noopener noreferrer"
      >
        <div className="grid-item">
        <img src={useBaseUrl("/img/inventory/button.png")} />
        </div>
      </a>
    </div>
  );
};

export default GridView;
