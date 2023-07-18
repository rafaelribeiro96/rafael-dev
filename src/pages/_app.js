import { Analytics } from '@vercel/analytics/react';
import { AuthProvider } from 'src/context/AuthContext'
import '../components/GESTOR/chat/chat.css'
import '../components/GESTOR/chat/post/PostSuggestion.css'
import '../components/GESTOR/chat/post/PostSuggestion.css'
import '../components/GESTOR/chat/theme/PostThemeSuggestion.css'
import '../components/GESTOR/PostsPage/PostsPage.css'
import '../components/GESTOR/editingPost/index.css'
import '../components/GESTOR/extras/ButtonDelete.css'
import '../components/GESTOR/extras/ButtonGenerate.css'
import '../components/GESTOR/extras/ButtonNewPost.css'
import '../components/GESTOR/extras/ButtonSlide.css'
import '../components/GESTOR/extras/cubeLoader.css'
import '../components/GESTOR/gestorBlog/GestorBlog.css'
import '../components/GESTOR/gestorHome/GestorHome.css'
import '../components/GESTOR/headerGestor/HeaderGestor.css'
import '../components/GESTOR/imageManager/index.css'
import '../components/botaoContato/FloatingButton.css'
import '../components/redesSociais/RedesSociais.css'
import '../components/InstaFeed/InstaFeed.css'
import '../components/carrosselJs/carrosselJs.css'
import '../components/carousel/Carousel.css'
import '../components/carrosselImageUplodaded/carrosselImageUplodaded.css'
import '../components/gallery/Gallery.css'
import '../pages/login/index.css'
import '../styles/global.css'



function MyApp({ Component, pageProps }) {

  return (
  <AuthProvider>
  <Component {...pageProps} />
  <Analytics />
  </AuthProvider>
  )
}

export default MyApp
