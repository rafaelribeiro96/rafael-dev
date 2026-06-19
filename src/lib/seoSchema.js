const SITE_URL = 'https://softluna.com.br';

function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

function buildSoftLunaIdentity({ globalData = {}, priceRange } = {}) {
  const seo = globalData?.seo || {};

  return {
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${SITE_URL}#organization`,
    name: seo.businessName || 'SoftLuna',
    url: SITE_URL,
    telephone: seo.businessPhone || undefined,
    email: seo.businessEmail || undefined,
    address: {
      '@type': 'PostalAddress',
      addressLocality: seo.businessCity || 'Belo Horizonte',
      addressRegion: seo.businessState || 'MG',
      addressCountry: 'BR'
    },
    areaServed: ['Belo Horizonte', 'Minas Gerais', 'Brasil'],
    priceRange,
    sameAs: ['https://www.instagram.com/softlunadigital/'],
    knowsAbout: [
      'Sites profissionais',
      'Landing pages',
      'SEO local',
      'Performance web',
      'Git-CMS',
      'Conversao por WhatsApp'
    ]
  };
}

function buildFaqSchema({ id, faqs = [] }) {
  if (!faqs.length) return undefined;

  return {
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function buildHomePageSchema({
  globalData = {},
  faqItems = [],
  pricingTiers = []
}) {
  const seo = globalData?.seo || {};
  const activePrices = pricingTiers
    .filter((tier) => tier.active !== false)
    .map((tier) => Number(tier.setupPrice || 0))
    .filter(Boolean);
  const minPrice = activePrices.length ? Math.min(...activePrices) : undefined;
  const maxPrice = activePrices.length ? Math.max(...activePrices) : undefined;
  const priceRange =
    minPrice && maxPrice ? `R$ ${minPrice} - R$ ${maxPrice}+` : undefined;
  const organizationId = `${SITE_URL}#organization`;
  const websiteId = `${SITE_URL}#website`;
  const faqId = `${SITE_URL}#faq`;

  const graph = [
    buildSoftLunaIdentity({ globalData, priceRange }),
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: seo.businessName || 'SoftLuna',
      url: SITE_URL,
      publisher: { '@id': organizationId },
      inLanguage: 'pt-BR',
      description: seo.metaDescription
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}#webpage`,
      url: SITE_URL,
      name: seo.metaTitle || 'SoftLuna',
      description: seo.metaDescription,
      isPartOf: { '@id': websiteId },
      about: { '@id': organizationId },
      inLanguage: 'pt-BR'
    }
  ];

  const faqSchema = buildFaqSchema({ id: faqId, faqs: faqItems });
  if (faqSchema) graph.push(faqSchema);

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}

export function buildMoneyPageSchema({
  page,
  pricingTiers = [],
  globalData = {}
}) {
  const pageUrl = absoluteUrl(`/${page.slug}`);
  const organizationId = `${SITE_URL}#organization`;
  const serviceId = `${pageUrl}#service`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;
  const activePlans = pricingTiers.filter((tier) =>
    page.recommendedPlanIds?.includes(tier.id)
  );
  const minPrice = activePlans.length
    ? Math.min(...activePlans.map((tier) => Number(tier.setupPrice || 0)))
    : undefined;

  const graph = [
    buildSoftLunaIdentity({
      globalData,
      priceRange: minPrice ? `A partir de R$ ${minPrice}` : undefined
    }),
    {
      '@type': 'Service',
      '@id': serviceId,
      name: page.hero?.h1 || page.seo?.title,
      description: page.seo?.description,
      provider: { '@id': organizationId },
      serviceType: page.category,
      areaServed: 'Brasil',
      url: pageUrl,
      offers: minPrice
        ? {
            '@type': 'Offer',
            priceCurrency: 'BRL',
            price: minPrice,
            availability: 'https://schema.org/InStock',
            url: pageUrl
          }
        : undefined
    },
    {
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: SITE_URL
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: page.category || 'Servicos',
          item: pageUrl
        }
      ]
    }
  ];

  if (page.faqs?.length) {
    graph.push(buildFaqSchema({ id: faqId, faqs: page.faqs }));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}

export function buildBlogPostSchema({ post, globalData = {} }) {
  const postUrl = absoluteUrl(`/blog/${post.slug}`);
  const blogUrl = absoluteUrl('/blog');
  const organizationId = `${SITE_URL}#organization`;
  const articleId = `${postUrl}#article`;
  const breadcrumbId = `${postUrl}#breadcrumb`;
  const faqId = `${postUrl}#faq`;
  const authorId = `${SITE_URL}#author-${(post.author || 'softluna')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')}`;

  const graph = [
    buildSoftLunaIdentity({ globalData }),
    {
      '@type': 'Person',
      '@id': authorId,
      name: post.author || 'Equipe SoftLuna',
      description: post.authorBio || undefined
    },
    {
      '@type': 'Article',
      '@id': articleId,
      mainEntityOfPage: postUrl,
      headline: post.title,
      description: post.metaDescription || post.excerpt,
      image: absoluteUrl(post.heroImage || '/og-image.png'),
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      author: { '@id': authorId },
      publisher: { '@id': organizationId },
      about: post.primaryKeyword,
      articleSection: post.cluster,
      keywords: [post.primaryKeyword, ...(post.secondaryKeywords || [])]
        .filter(Boolean)
        .join(', ')
    },
    {
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: SITE_URL
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: blogUrl
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: postUrl
        }
      ]
    }
  ];

  if (post.faqs?.length) {
    graph.push(buildFaqSchema({ id: faqId, faqs: post.faqs }));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}
