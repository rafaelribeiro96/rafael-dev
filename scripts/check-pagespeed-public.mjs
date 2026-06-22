const url = 'https://softluna.com.br/';
const strategies = ['mobile', 'desktop'];

function metric(audit, field) {
  const item = audit?.details?.items?.[0];
  return item ? item[field] : undefined;
}

async function checkStrategy(strategy) {
  const endpoint = new URL(
    'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'
  );
  endpoint.searchParams.set('url', url);
  endpoint.searchParams.set('strategy', strategy);
  endpoint.searchParams.set('category', 'performance');

  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(
      `PageSpeed ${strategy} returned HTTP ${response.status}: ${await response.text()}`
    );
  }

  const data = await response.json();
  const lighthouse = data.lighthouseResult;
  const audits = lighthouse.audits;
  const score = Math.round(
    lighthouse.categories.performance.score * 100
  );

  return {
    strategy,
    score,
    lcp: audits['largest-contentful-paint']?.displayValue,
    cls: audits['cumulative-layout-shift']?.displayValue,
    tbt: audits['total-blocking-time']?.displayValue,
    fcp: audits['first-contentful-paint']?.displayValue,
    finalUrl: lighthouse.finalUrl,
    fetchTime: lighthouse.fetchTime,
    coreWebVitals: data.loadingExperience?.overall_category || 'NO_FIELD_DATA',
    fieldLcp: metric(
      data.loadingExperience?.metrics?.LARGEST_CONTENTFUL_PAINT_MS,
      'percentile'
    ),
    fieldCls: metric(
      data.loadingExperience?.metrics?.CUMULATIVE_LAYOUT_SHIFT_SCORE,
      'percentile'
    ),
    fieldInp: metric(
      data.loadingExperience?.metrics?.INTERACTION_TO_NEXT_PAINT,
      'percentile'
    )
  };
}

const results = await Promise.all(strategies.map(checkStrategy));

for (const result of results) {
  console.log(
    [
      result.strategy,
      `score=${result.score}`,
      `lcp=${result.lcp}`,
      `cls=${result.cls}`,
      `tbt=${result.tbt}`,
      `fcp=${result.fcp}`,
      `cwv=${result.coreWebVitals}`,
      `fieldLcpMs=${result.fieldLcp ?? 'n/a'}`,
      `fieldCls=${result.fieldCls ?? 'n/a'}`,
      `fieldInpMs=${result.fieldInp ?? 'n/a'}`,
      `finalUrl=${result.finalUrl}`,
      `fetchTime=${result.fetchTime}`
    ].join(' | ')
  );
}
