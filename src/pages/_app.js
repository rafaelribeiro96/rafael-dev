/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import { AuthProvider } from 'src/context/AuthContext';
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
      <Component {...pageProps} />
      <FloatingButton />
      <Analytics />
    </AuthProvider>
  );
}

export default MyApp;
