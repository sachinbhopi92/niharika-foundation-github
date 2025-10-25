// Utility to remove unwanted navigation widgets that might be injected by browser extensions
export const cleanupNavigationWidgets = () => {
  // List of potential unwanted selectors
  const unwantedSelectors = [
    // Navigation widget patterns
    '[class*="navigation-widget"]',
    '[id*="navigation-widget"]',
    '[class*="home-navigation"]',
    '[id*="home-navigation"]',
    '[class*="onehome-navigation"]',
    '[id*="onehome-navigation"]',
    '[data-widget*="navigation"]',
    '[data-widget*="home"]',
    
    // Translation widgets
    '[class*="translate"]',
    '[class*="translation"]',
    '.goog-te-banner-frame',
    '.goog-te-menu-frame',
    '.skiptranslate',
    
    // Browser extension patterns
    '[class*="extension-"]',
    '[id*="extension-"]',
    '[class*="chrome-"]',
    '[id*="chrome-"]',
    '[class*="browser-"]',
    '[id*="browser-"]',
    
    // Suspicious overlay elements
    'div[style*="position: fixed"][style*="z-index"]',
    'div[style*="position: absolute"][style*="top: 0"]',
    
    // Iframe widgets
    'iframe[src*="widget"]',
    'iframe[src*="navigation"]',
  ];

  let removedCount = 0;

  unwantedSelectors.forEach(selector => {
    try {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        // Additional checks to avoid removing legitimate content
        const isLegitimate = element.closest('#root') || 
                           element.closest('header') || 
                           element.closest('nav') ||
                           element.hasAttribute('data-legitimate');
        
        if (!isLegitimate && element && element.parentNode) {
          element.parentNode.removeChild(element);
          removedCount++;
          console.log(`Removed unwanted element: ${selector}`, element);
        }
      });
    } catch (error) {
      console.warn(`Error processing selector ${selector}:`, error);
    }
  });

  if (removedCount > 0) {
    console.log(`Cleanup completed: removed ${removedCount} unwanted elements`);
  }
};

// Run cleanup on DOM content loaded
export const initCleanup = () => {
  // Run immediately
  cleanupNavigationWidgets();
  
  // Run after a short delay to catch dynamically injected content
  setTimeout(cleanupNavigationWidgets, 1000);
  
  // Set up a mutation observer to watch for new unwanted elements
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        cleanupNavigationWidgets();
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  return observer;
};
