// Utility to handle Google Analytics events safely
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

export const trackPageView = (pageName: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_path: `/${pageName}`,
    });
  }
};

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
  }
};