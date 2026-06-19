# SoftLuna SEO Foundation

**Status:** Fase 0 executada em 2026-06-19.
**Escopo:** Decisoes e inventario antes de criar money pages, blog, copy em escala e tracking.

## Decisoes

### Precos

O conteudo publicado em `content/pricing/*.json` e a fonte de verdade para novas paginas, CTAs e copy publica ate haver uma decisao comercial explicita de migrar para os precos estrategicos do plano de negocio.

Precos publicados em 2026-06-19:

| Plano | Setup | Manutencao |
| --- | ---: | ---: |
| Landing Page de Conversao | R$ 749 | R$ 40/mes |
| Site Institucional Completo | R$ 1.299 | R$ 75/mes |
| Projetos Personalizados | A partir de R$ 2.499 | A partir de R$ 120/mes |

O plano de negocio permanece como recomendacao estrategica. Qualquer mudanca de preco deve atualizar `content/pricing/*.json`, FAQs de preco, copy de planos e docs de negocio no mesmo lote.

### Money pages

As money pages devem usar conteudo estatico versionado em JSON dentro de `content/money-pages/`, lido em build por `src/lib/content.js` e renderizado por uma rota dinamica em `src/pages/[slug].jsx` ou equivalente.

Campos minimos por pagina:

| Campo | Uso |
| --- | --- |
| `slug` | Rota publica sem barra inicial |
| `niche` | Nicho ou tipo de solucao |
| `primaryKeyword` | Keyword principal da pagina |
| `secondaryKeywords` | Variações relevantes |
| `h1` | Palavra-chave transacional + nicho |
| `seoTitle` | Title tag |
| `metaDescription` | Meta description |
| `hero` | Headline, subtitulo, CTA e mensagem WhatsApp |
| `painPoints` | Dores especificas do nicho |
| `solution` | Como a SoftLuna resolve o problema |
| `benefits` | Beneficios comerciais e tecnicos |
| `process` | Passos de entrega |
| `pricingRefs` | Planos relacionados |
| `portfolioRefs` | Projetos relacionados, quando houver |
| `faqs` | Perguntas especificas da pagina |
| `internalLinks` | Links para home, planos, portfolio, FAQ, contato e paginas correlatas |
| `schema` | Dados para Service, FAQPage e BreadcrumbList |

O admin/Git-CMS nao sera expandido na primeira money page piloto. A expansao do admin para `content/money-pages/` pode ser uma fase posterior depois que o template estiver validado.

### Blog

O blog novo deve abandonar a dependencia de `NEXT_PUBLIC_API_URL` e posts mockados de `src/services/apiBlog.js`. O modelo alvo e conteudo estatico versionado em `content/blog/`, com listagem em `/blog` e detalhes em `/blog/[slug]`.

Campos minimos por post:

| Campo | Uso |
| --- | --- |
| `slug` | Rota publica |
| `status` | `draft` ou `published` |
| `cluster` | Cluster editorial |
| `primaryKeyword` | Keyword principal |
| `intent` | Intencao de busca |
| `funnelStage` | ToFu, MoFu ou BoFu |
| `title` | Titulo editorial |
| `seoTitle` | Title tag |
| `metaDescription` | Meta description |
| `excerpt` | Resumo para listagem |
| `publishedAt` | Data de publicacao |
| `updatedAt` | Data de atualizacao |
| `author` | Autor editorial |
| `authorBio` | Bio curta para E-E-A-T |
| `heroImage` | Imagem principal |
| `sections` | Conteudo estruturado do artigo |
| `faqs` | FAQ final |
| `sources` | Fontes usadas no brief |
| `internalLinks` | Links para money pages, home e artigos relacionados |
| `cta` | CTA contextual para WhatsApp |
| `schema` | Dados para Article, FAQPage e BreadcrumbList |

Nao e obrigatorio criar uma pagina publica de autor antes dos primeiros artigos. O primeiro lote deve ter autor e bio editorial no proprio post.

Fluxo editorial:

1. Brief com SERP/PAA atual e fontes.
2. Escrita do artigo.
3. Revisao pt-BR e checagem de promessas.
4. Validacao SEO/schema.
5. Publicacao somente depois de `npm run lint` e `npm run build`.

### Hospedagem e analytics

Para a implementacao SEO imediata, a SoftLuna continua usando a base atual em Vercel e `@vercel/analytics`. Cloudflare Pages segue como estrategia possivel para sites de clientes ou migracao futura, mas nao bloqueia money pages, blog ou tracking.

### Ordem de publicacao

Ordem escolhida para o roadmap:

1. Fase 0 concluida.
2. Money page piloto: F1-001 a F1-004.
3. Blog preparado em paralelo: F2-001 a F2-003, sem publicar artigos antes da arquitetura.
4. Depois homepage, FAQs, lotes de money pages, lotes de artigos e rotinas de medicao.

## Inventario de Conteudo Atual

### Editavel pelo Git-CMS atual

| Area | Arquivos | Observacao |
| --- | --- | --- |
| Hero e SEO global | `content/global/site.json` | Usado em `src/pages/index.jsx` e `src/components/Home/Hero.jsx` |
| Precos | `content/pricing/*.json` | Usado em `src/components/Home/Pricing.jsx` |
| Portfolio | `content/portfolio/*.json` | Usado em `src/components/Home/Portfolio.jsx`; mensagens WhatsApp ja existem |
| FAQ | `content/faq/*.json` | Usado em `src/components/Home/FAQ.jsx` |
| Imagens do carrossel | `content/carousel-images/*.json` | Gerenciado pelo admin |

### Em codigo na homepage

| Area | Arquivo |
| --- | --- |
| Ecossistema digital | `src/components/Home/DigitalEcosystem.jsx` |
| Servicos | `src/components/Home/Services.jsx` |
| Comparativo | `src/components/Home/ComparisonMatrix.jsx` |
| Workflow | `src/components/Home/Workflow.jsx` |
| Garantia/propriedade | `src/components/Home/OwnershipGuarantee.jsx` |
| Depoimentos | `src/components/Home/Testimonials.jsx` |

### Blog legado

`src/pages/blog/*`, `src/components/PostsPage/*` e `src/services/apiBlog.js` ainda existem, mas dependem de `NEXT_PUBLIC_API_URL` com fallback para posts mockados. Esse fluxo nao deve ser usado como fonte de verdade para o novo plano editorial.

### Schema atual

`src/pages/index.jsx` ja injeta um JSON-LD basico `ProfessionalService` com nome, descricao, telefone e endereco. Ainda faltam Organization/LocalBusiness mais completo, FAQPage, BreadcrumbList e schema por money page/artigo.

## Padrao de Tracking

Implementar eventos sobre a base atual de Vercel Analytics, preferencialmente por helper unico para evitar nomes divergentes.

| Evento | Gatilho | Parametros minimos | Local provavel |
| --- | --- | --- | --- |
| `whatsapp_cta_click` | Clique em CTA geral de WhatsApp | `source`, `label`, `path`, `messageContext` | Header, Hero, Pricing, Footer |
| `portfolio_whatsapp_click` | Clique em "Quero um assim" | `projectId`, `projectTitle`, `category`, `path` | `src/components/Home/Portfolio.jsx` |
| `portfolio_live_click` | Clique em site publicado do portfolio | `projectId`, `projectTitle`, `liveUrl`, `path` | `src/components/Home/Portfolio.jsx` |
| `pricing_cta_click` | Clique em CTA de plano | `planId`, `planTitle`, `setupPrice`, `maintenancePrice`, `path` | `src/components/Home/Pricing.jsx` |
| `money_page_whatsapp_click` | Clique em CTA de money page | `slug`, `niche`, `primaryKeyword`, `ctaPosition` | Futuras money pages |
| `blog_whatsapp_click` | Clique em CTA de artigo | `slug`, `cluster`, `primaryKeyword`, `ctaPosition` | Futuro blog |
| `blog_post_view` | Renderizacao de artigo publicado | `slug`, `cluster`, `primaryKeyword` | Futuro `/blog/[slug]` |

Antes de implementar os eventos, confirmar a API disponivel de `@vercel/analytics` no projeto e validar em dev com cliques reais.

