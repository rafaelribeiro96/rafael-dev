const SITE_URL = 'https://softluna.com.br';

function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function buildMoneyPageSchema({
  page,
  pricingTiers = [],
  globalData = {}
}) {
  const seo = globalData?.seo || {};
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
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': organizationId,
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
      priceRange: minPrice ? `A partir de R$ ${minPrice}` : undefined
    },
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
    graph.push({
      '@type': 'FAQPage',
      '@id': faqId,
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}
