import React, { useEffect, useState } from "react";

interface DebugWidgetProps {
  enabled?: boolean;
}

const DebugWidget: React.FC<DebugWidgetProps> = ({ enabled = false }) => {
  const [suspiciousElements, setSuspiciousElements] = useState<
    Array<{ selector: string; count: number; elements: Element[] }>
  >([]);

  useEffect(() => {
    if (!enabled) return;

    const findSuspiciousElements = () => {
      const suspiciousSelectors = [
        '[class*="navigation"]',
        '[id*="navigation"]',
        '[class*="home"]',
        '[id*="home"]',
        '[class*="widget"]',
        '[id*="widget"]',
        '[class*="translate"]',
        '[id*="translate"]',
        "iframe",
        '[style*="position: fixed"]',
        '[style*="position: absolute"]',
      ];

      const found: Array<{
        selector: string;
        count: number;
        elements: Element[];
      }> = [];

      suspiciousSelectors.forEach((selector) => {
        const elements = Array.from(document.querySelectorAll(selector));
        if (elements.length > 0) {
          found.push({
            selector,
            count: elements.length,
            elements: elements.slice(0, 5), // Limit to first 5 elements
          });
        }
      });

      setSuspiciousElements(found);
    };

    findSuspiciousElements();
    const interval = setInterval(findSuspiciousElements, 2000);

    return () => clearInterval(interval);
  }, [enabled]);

  if (!enabled || suspiciousElements.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        background: "red",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        zIndex: 9999,
        fontSize: "12px",
        maxWidth: "300px",
        maxHeight: "400px",
        overflow: "auto",
      }}
    >
      <h3>🔍 Debug: Suspicious Elements Found</h3>
      {suspiciousElements.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "10px",
            borderBottom: "1px solid white",
            paddingBottom: "5px",
          }}
        >
          <strong>{item.selector}</strong> ({item.count} found)
          {item.elements.map((el, elIndex) => (
            <div key={elIndex} style={{ marginLeft: "10px", fontSize: "10px" }}>
              • {el.tagName.toLowerCase()}
              {el.className && ` class="${el.className}"`}
              {el.id && ` id="${el.id}"`}
              {el.textContent &&
                el.textContent.length < 50 &&
                ` text="${el.textContent.trim()}"`}
            </div>
          ))}
        </div>
      ))}
      <button
        onClick={() => {
          suspiciousElements.forEach((item) => {
            item.elements.forEach((el) => {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
                console.log("Removed element:", el);
              }
            });
          });
          setSuspiciousElements([]);
        }}
        style={{
          background: "white",
          color: "red",
          border: "none",
          padding: "5px 10px",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        Remove All
      </button>
    </div>
  );
};

export default DebugWidget;
