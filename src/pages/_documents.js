import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="Rafael Ribeiro Tech" />
          <meta
            name="description"
            content="Rafael Ribeiro Tech é um desenvolvedor de software experiente desenvolvimento de sites para empresas. Especializado em tecnologias web, como NodeJS, ReactJS, React Native, NextJs, MySQL e MongoDB. Oferecemos um serviço de desenvolvimento web altamente personalizado para transformar suas ideias em sites elegantes, responsivos e funcionais. Além de tudo oferecemos um gestor de conteúdo, onde poderá gerenciar as imagens e os posts do seu site. E conta também com uma ferramenta de Inteligencia Artificial, que irá auxiliar na criação de conteúdo para seu site e Instagram."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="UTF-8" />
          <meta
            name="keywords"
            content="Desenvolvimento Web, NodeJS, ReactJS, React Native, NextJs, MySQL, MongoDB, Rafael Tech, Rafael Ribeiro Tech, Criação de Sites, Sites, Sites para Empresas"
          />
          <meta name="author" content="Rafael Ribeiro Tech" />
          <meta property="og:url" content="https://www.rafaeltech.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="http://www.rafaeltech.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
