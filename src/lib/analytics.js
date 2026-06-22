import { track } from '@vercel/analytics';

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-9GTNQ0EG2M';

export const ANALYTICS_EVENTS = {
  PAGE_VIEW: 'site_page_view',
  SECTION_VIEW: 'section_view',
  SCROLL_DEPTH: 'scroll_depth',
  NAVIGATION_CLICK: 'navigation_click',
  EXTERNAL_LINK_CLICK: 'external_link_click',
  FAQ_TOGGLE: 'faq_toggle',
  WHATSAPP_CTA_CLICK: 'whatsapp_cta_click',
  HERO_SECONDARY_CTA_CLICK: 'hero_secondary_cta_click',
  SERVICE_CARD_CLICK: 'service_card_click',
  PORTFOLIO_LIVE_CLICK: 'portfolio_live_click',
  PORTFOLIO_WHATSAPP_CLICK: 'portfolio_whatsapp_click',
  PORTFOLIO_CAROUSEL_CONTROL_CLICK: 'portfolio_carousel_control_click',
  PRICING_CTA_CLICK: 'pricing_cta_click',
  BLOG_CARD_CLICK: 'blog_card_click',
  BLOG_INTERNAL_LINK_CLICK: 'blog_internal_link_click',
  BLOG_SOURCE_CLICK: 'blog_source_click',
  BLOG_WHATSAPP_CLICK: 'blog_whatsapp_click',
  MONEY_PAGE_WHATSAPP_CLICK: 'money_page_whatsapp_click',
  MONEY_PAGE_PLAN_WHATSAPP_CLICK: 'money_page_plan_whatsapp_click',
  MONEY_PAGE_SECONDARY_CTA_CLICK: 'money_page_secondary_cta_click',
  ADMIN_LOGIN_ATTEMPT: 'admin_login_attempt',
  ADMIN_LOGIN_SUCCESS: 'admin_login_success',
  ADMIN_LOGIN_ERROR: 'admin_login_error',
  ADMIN_SECTION_CHANGE: 'admin_section_change',
  ADMIN_PUBLISH_ATTEMPT: 'admin_publish_attempt',
  ADMIN_PUBLISH_SUCCESS: 'admin_publish_success',
  ADMIN_PUBLISH_ERROR: 'admin_publish_error'
};

function currentPath() {
  if (typeof window === 'undefined') return undefined;
  return window.location.pathname;
}

function cleanProperties(properties = {}) {
  return Object.fromEntries(
    Object.entries(properties).filter(
      ([, value]) => value !== undefined && value !== null && value !== ''
    )
  );
}

function trackGoogleAnalyticsEvent(eventName, properties = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, {
    page_path: currentPath(),
    ...cleanProperties(properties)
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
    const eventProperties = cleanProperties({
      path: currentPath(),
      ...properties
    });

    track(eventName, {
      ...eventProperties
    });

    trackGoogleAnalyticsEvent(eventName, eventProperties);
  } catch (_error) {
    // Analytics must never block navigation or CTA clicks.
  }
}

export function trackWhatsAppClick(properties = {}) {
  trackEvent(ANALYTICS_EVENTS.WHATSAPP_CTA_CLICK, properties);
}

export function inferPageType(pathname = '') {
  const cleanPath = pathname.split('?')[0].split('#')[0] || '/';

  if (cleanPath === '/') return 'home';
  if (cleanPath === '/blog') return 'blog_index';
  if (cleanPath.startsWith('/blog/')) return 'blog_post';
  if (cleanPath.startsWith('/admin/login')) return 'admin_login';
  if (cleanPath.startsWith('/admin')) return 'admin';
  return 'money_page';
}

export function trackPageView(url, properties = {}) {
  trackEvent(ANALYTICS_EVENTS.PAGE_VIEW, {
    url,
    pageType: inferPageType(url),
    ...properties
  });
}

export function trackNavigationClick(properties = {}) {
  trackEvent(ANALYTICS_EVENTS.NAVIGATION_CLICK, properties);
}

export function trackExternalLinkClick(properties = {}) {
  trackEvent(ANALYTICS_EVENTS.EXTERNAL_LINK_CLICK, properties);
}

export function trackFAQToggle(properties = {}) {
  trackEvent(ANALYTICS_EVENTS.FAQ_TOGGLE, properties);
}
