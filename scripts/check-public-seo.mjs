const urls = [
  'https://softluna.com.br/',
  'https://softluna.com.br/blog',
  'https://softluna.com.br/blog/quanto-custa-site-profissional-empresas-brasil-2026',
  'https://softluna.com.br/site-para-clinicas-medicas',
  'https://softluna.com.br/desenvolvimento-de-sistemas-sob-medida'
];

function extractJsonLd(html) {
  const scripts = [];
  const pattern =
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match = pattern.exec(html);

  while (match) {
    scripts.push(match[1].trim());
    match = pattern.exec(html);
  }

  return scripts;
}

function hasMeta(html, attribute, value) {
  return html.includes(`${attribute}="${value}"`);
}

async function checkUrl(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'SoftLuna SEO closeout check'
    }
  });

  if (!response.ok) {
    throw new Error(`${url} returned HTTP ${response.status}`);
  }

  const html = await response.text();
  const jsonLdScripts = extractJsonLd(html);

  for (const script of jsonLdScripts) {
    JSON.parse(script);
  }

  return {
    url,
    status: response.status,
    jsonLdCount: jsonLdScripts.length,
    hasCanonical: html.includes('rel="canonical"'),
    hasOgImage: hasMeta(html, 'property', 'og:image'),
    hasTwitterImage: hasMeta(html, 'name', 'twitter:image')
  };
}

const results = await Promise.all(urls.map(checkUrl));

for (const result of results) {
  console.log(
    [
      result.url,
      `status=${result.status}`,
      `jsonLd=${result.jsonLdCount}`,
      `canonical=${result.hasCanonical}`,
      `ogImage=${result.hasOgImage}`,
      `twitterImage=${result.hasTwitterImage}`
    ].join(' | ')
  );
}
