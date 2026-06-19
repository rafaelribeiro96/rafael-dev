import { track } from '@vercel/analytics';

function currentPath() {
  if (typeof window === 'undefined') return undefined;
  return window.location.pathname;
}

export function trackEvent(eventName, properties = {}) {
  try {
    track(eventName, {
      path: currentPath(),
      ...properties
    });
  } catch (_error) {
    // Analytics must never block navigation or CTA clicks.
  }
}

export function trackWhatsAppClick(properties = {}) {
  trackEvent('whatsapp_cta_click', properties);
}
