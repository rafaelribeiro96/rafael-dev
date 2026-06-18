import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    const siteUrl = 'https://www.softluna.com.br';
    const siteName = 'SoftLuna';
    const siteTitle = 'SoftLuna | Sites Profissionais de Alta Performance';
    const siteDescription =
      'SoftLuna cria sites profissionais e landing pages de alta performance para empresas em Belo Horizonte e todo o Brasil. Sites ultra-rápidos e otimizados, que dominam o Google e convertem visitantes em clientes. Solicite um orçamento gratuito.';
    const ogImage = `${siteUrl}/og-image.png`;

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'SoftLuna',
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
        'https://www.instagram.com/softlunadigital/'
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
          <link rel="icon" href="/icone%20logo.svg" type="image/svg+xml" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="apple-touch-icon" href="/icone%20logo.svg" />
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
          <meta
            property="og:image:alt"
            content="SoftLuna — Sites Profissionais de Alta Performance"
          />
          <meta property="og:locale" content="pt_BR" />

          {/* Twitter / X Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@softlunadigital" />
          <meta name="twitter:title" content={siteTitle} />
          <meta name="twitter:description" content={siteDescription} />
          <meta name="twitter:image" content={ogImage} />

          {/* Author & Copyright */}
          <meta name="author" content="SoftLuna" />
          <meta name="copyright" content="SoftLuna" />
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />

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
