// Utility to handle Google Analytics events safely
// This avoids errors if the script is blocked by adblockers or not loaded yet

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track Virtual Pageviews (Essential for SPAs like this)
export const trackPageView = (pageName: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_path: `/${pageName}`,
    });
  }
};

// Track Specific Actions (Downloads, Clicks)
export const trackEvent = (
  action: string, 
  category: string, 
  label: string, 
  value?: number
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    // Fallback for debugging (optional)
    // console.log(`[Analytics] ${action} - ${category} - ${label}`);
  }
};