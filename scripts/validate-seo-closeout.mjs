import fs from 'fs';
import path from 'path';

const root = process.cwd();

const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), 'utf8');

const listJson = (relativePath) =>
  fs
    .readdirSync(path.join(root, relativePath))
    .filter((file) => file.endsWith('.json'));

const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

const moneyPages = listJson('content/money-pages');
const moneyPageTemplate = read('src/pages/[slug].jsx');
const blogPostTemplate = read('src/pages/blog/[link]/index.jsx');
const robots = read('public/robots.txt');
const roadmap = read('ROADMAP-SEO.md');
const state = read('.specs/project/STATE.md');

assert(
  moneyPages.length === 20,
  `Expected 20 money-page JSON files, found ${moneyPages.length}.`
);

assert(
  !moneyPageTemplate.includes('site da clinica') &&
    !moneyPageTemplate.includes('sua clinica') &&
    !moneyPageTemplate.includes('Especialidades e servicos'),
  'Money-page template still contains clinic-specific hardcoded copy.'
);

assert(
  !robots.includes('Disallow: /_next/'),
  'robots.txt must not block /_next/ assets.'
);

assert(
  blogPostTemplate.includes('name="twitter:image"'),
  'Blog post detail must include twitter:image metadata.'
);

assert(
  !roadmap.includes('19 rotas') && !roadmap.includes('19 rota'),
  'ROADMAP-SEO.md still references 19 routes.'
);

assert(
  !roadmap.includes('Revisar/aprovar a money page piloto') &&
    !roadmap.includes('Depois executar F1-005 a F1-009'),
  'ROADMAP-SEO.md still contains outdated next-execution guidance.'
);

assert(
  state.includes(
    '[x] Validate new homepage/blog/money page schemas in Rich Results Test or Schema Validator after deploy.'
  ) &&
    state.includes(
      '[x] Re-run PageSpeed Insights on production after deploy and compare with the local Lighthouse baseline in `docs/business/softluna/seo-operations.md`.'
    ),
  'Post-deploy SEO validation todos in STATE.md are not closed.'
);

if (failures.length > 0) {
  console.error('SEO closeout validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('SEO closeout validation passed.');
