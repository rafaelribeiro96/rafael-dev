/* eslint-disable react/prop-types */
import { Analytics } from '@vercel/analytics/react';
import { AuthProvider } from 'src/context/AuthContext';
import '../components/botaoContato/FloatingButton.css';
import '../components/redesSociais/RedesSociais.css';
import '../components/InstaFeed/InstaFeed.css';
import '../components/carrosselJs/carrosselJs.css';
import '../components/carousel/Carousel.css';
import '../components/carrosselImageUplodaded/carrosselImageUplodaded.css';
import '../components/gallery/Gallery.css';
import '../components/PostsPage/PostsPage.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Analytics />
    </AuthProvider>
  );
}

export default MyApp;
