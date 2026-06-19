/**
 * Sitemap dinâmico — SoftLuna
 *
 * Gerado via Next.js getServerSideProps, lê content/ no runtime do servidor.
 * Inclui homepage, blog index, todas as money pages e todos os artigos do blog.
 * Cache: 1h no CDN, revalidado em background por até 24h.
 */

const SITE_URL = 'https://softluna.com.br';

function buildUrl(
  path,
  { lastmod, changefreq = 'monthly', priority = '0.7' } = {}
) {
  const parts = [
    '  <url>',
    `    <loc>${SITE_URL}${path}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>'
  ];
  return parts.filter(Boolean).join('\n');
}

function toDate(dateString) {
  if (!dateString) return undefined;
  try {
    return new Date(dateString).toISOString().split('T')[0];
  } catch {
    return undefined;
  }
}

export async function getServerSideProps({ res }) {
  // Lazy import: estas funções só existem no server side (usam fs/promises)
  const { getMoneyPages, getBlogPosts } = await import('src/lib/content');

  const [moneyPages, blogPosts] = await Promise.all([
    getMoneyPages(),
    getBlogPosts()
  ]);

  const today = new Date().toISOString().split('T')[0];

  const urls = [
    // Homepage
    buildUrl('/', {
      lastmod: today,
      changefreq: 'weekly',
      priority: '1.0'
    }),

    // Blog index
    buildUrl('/blog', {
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.8'
    }),

    // Money pages
    ...moneyPages.map((page) =>
      buildUrl(`/${page.slug}`, {
        lastmod: toDate(page.updatedAt || page.publishedAt) || today,
        changefreq: 'monthly',
        priority: '0.8'
      })
    ),

    // Blog posts
    ...blogPosts.map((post) =>
      buildUrl(`/blog/${post.slug}`, {
        lastmod: toDate(post.updatedAt || post.publishedAt) || today,
        changefreq: 'monthly',
        priority: '0.7'
      })
    )
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urls.join('\n\n')}

</urlset>`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=86400'
  );
  res.write(sitemap);
  res.end();

  return { props: {} };
}

// Next.js requer um componente default exportado, mesmo não sendo usado
export default function SitemapPage() {
  return null;
}
