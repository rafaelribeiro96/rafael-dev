/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { AuthProvider } from 'src/context/AuthContext';
import {
  ANALYTICS_EVENTS,
  GA_MEASUREMENT_ID,
  inferPageType,
  trackEvent,
  trackExternalLinkClick,
  trackGoogleAnalyticsPageview,
  trackPageView
} from 'src/lib/analytics';
import Lenis from 'lenis';
import FloatingButton from 'src/components/botaoContato/FloatingButton';
import '../components/botaoContato/FloatingButton.css';
import '../components/redesSociais/RedesSociais.css';
import '../components/carrosselJs/carrosselJs.css';
import '../components/carousel/Carousel.css';
import '../components/carrosselImageUplodaded/carrosselImageUplodaded.css';
import '../components/gallery/Gallery.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      trackGoogleAnalyticsPageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    trackPageView(router.asPath, {
      route: router.pathname
    });
  }, [router.asPath, router.pathname]);

  useEffect(() => {
    const viewedSections = new Set();

    const observeSections = () => {
      if (typeof IntersectionObserver === 'undefined') return undefined;

      const sections = Array.from(document.querySelectorAll('section[id]'));
      if (sections.length === 0) return undefined;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const sectionId = entry.target.getAttribute('id');
            if (!sectionId || viewedSections.has(sectionId)) return;

            viewedSections.add(sectionId);
            trackEvent(ANALYTICS_EVENTS.SECTION_VIEW, {
              sectionId,
              sectionLabel: entry.target
                .querySelector('h1, h2, h3')
                ?.textContent?.trim(),
              pageType: inferPageType(router.asPath)
            });
          });
        },
        { threshold: 0.45 }
      );

      sections.forEach((section) => observer.observe(section));
      return () => observer.disconnect();
    };

    let cleanupObserver;
    const frameId = window.requestAnimationFrame(() => {
      cleanupObserver = observeSections();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      cleanupObserver?.();
    };
  }, [router.asPath, router.pathname]);

  useEffect(() => {
    const thresholds = [25, 50, 75, 90];
    const reached = new Set();

    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const percent = Math.round((window.scrollY / scrollableHeight) * 100);
      thresholds.forEach((threshold) => {
        if (percent < threshold || reached.has(threshold)) return;
        reached.add(threshold);
        trackEvent(ANALYTICS_EVENTS.SCROLL_DEPTH, {
          percent: threshold,
          pageType: inferPageType(router.asPath)
        });
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.asPath, router.pathname]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const link = event.target.closest?.('a[href]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) return;

      const url = new URL(href, window.location.href);
      const isSameOrigin = url.origin === window.location.origin;
      const isWhatsapp = url.hostname.includes('wa.me');

      if (isSameOrigin || isWhatsapp) return;

      trackExternalLinkClick({
        href: url.href,
        hostname: url.hostname,
        label: link.textContent?.trim(),
        pageType: inferPageType(router.asPath)
      });
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [router.asPath]);

  useEffect(() => {
    // Disable Lenis on admin paths to prevent scrolling conflicts inside scrollable panels
    if (router.pathname.startsWith('/admin')) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [router.pathname]);

  return (
    <AuthProvider>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname
          });
        `}
      </Script>
      <Component {...pageProps} />
      <FloatingButton />
      <Analytics />
    </AuthProvider>
  );
}

export default MyApp;
