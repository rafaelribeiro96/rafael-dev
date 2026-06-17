import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    const siteUrl = 'https://www.rafaeltech.com.br';
    const siteName = 'Rafael Tech';
    const siteTitle = 'Rafael Tech | Sites Profissionais de Alta Performance';
    const siteDescription =
      'Rafael Tech cria sites profissionais e landing pages de alta performance para empresas em Belo Horizonte e todo o Brasil. Sites que carregam em menos de 1s, dominam o Google e convertem visitantes em clientes. Solicite um orçamento gratuito.';
    const ogImage = `${siteUrl}/og-image.png`;

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Rafael Tech',
      description: siteDescription,
      url: siteUrl,
      telephone: '+55-31-99186-9943',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Belo Horizonte',
        addressRegion: 'MG',
        addressCountry: 'BR'
      },
      areaServed: {
        '@type': 'Country',
        name: 'Brasil'
      },
      serviceType: [
        'Criação de Sites',
        'Desenvolvimento Web',
        'Landing Pages',
        'Sites Institucionais',
        'Otimização SEO'
      ],
      priceRange: 'R$ 750 – R$ 1.500',
      sameAs: [
        'https://www.linkedin.com/in/rafaelfeliperibeiro/',
        'https://www.instagram.com/rafaelribeirotech/'
      ]
    };

    const webSiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/blog?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    };

    return (
      <Html lang="pt-BR">
        <Head>
          {/* Favicon & Icons */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <meta name="theme-color" content="#0B0F19" />

          {/* Canonical */}
          <link rel="canonical" href={siteUrl} />

          {/* Open Graph — Facebook, WhatsApp, LinkedIn */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:description" content={siteDescription} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Rafael Tech — Sites Profissionais de Alta Performance" />
          <meta property="og:locale" content="pt_BR" />

          {/* Twitter / X Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@rafaelribeirotech" />
          <meta name="twitter:title" content={siteTitle} />
          <meta name="twitter:description" content={siteDescription} />
          <meta name="twitter:image" content={ogImage} />

          {/* Author & Copyright */}
          <meta name="author" content="Rafael Tech" />
          <meta name="copyright" content="Rafael Tech" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

          {/* Charset & Viewport (redundant with Next but safe to keep) */}
          <meta charSet="UTF-8" />

          {/* Fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          />

          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessSchema)
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(webSiteSchema)
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
