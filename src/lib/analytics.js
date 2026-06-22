import { track } from '@vercel/analytics';

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-9GTNQ0EG2M';

function currentPath() {
  if (typeof window === 'undefined') return undefined;
  return window.location.pathname;
}

function trackGoogleAnalyticsEvent(eventName, properties = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, {
    page_path: currentPath(),
    ...properties
  });
}

export function trackGoogleAnalyticsPageview(url) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url
  });
}

export function trackEvent(eventName, properties = {}) {
  try {
    track(eventName, {
      path: currentPath(),
      ...properties
    });

    trackGoogleAnalyticsEvent(eventName, properties);
  } catch (_error) {
    // Analytics must never block navigation or CTA clicks.
  }
}

export function trackWhatsAppClick(properties = {}) {
  trackEvent('whatsapp_cta_click', properties);
}
