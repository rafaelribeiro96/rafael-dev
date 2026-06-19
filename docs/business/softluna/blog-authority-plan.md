# Blog e Autoridade SEO

Execucao: 2026-06-19

## Arquitetura tecnica

O blog novo usa conteudo estatico versionado em `content/blog/*.json`.

Rotas publicas:

- `/blog`: listagem estatica dos posts publicados.
- `/blog/[slug]`: detalhe estatico do artigo, usando o parametro existente `[link]` na arvore de `src/pages`.

Arquivos principais:

- `content/blog/*.json`: fonte dos artigos.
- `src/lib/content.js`: `getBlogPosts` e `getBlogPostBySlug`.
- `src/pages/blog/index.jsx`: listagem dos clusters.
- `src/pages/blog/[link]/index.jsx`: detalhe do artigo.
- `src/lib/seoSchema.js`: Article, Person, Organization/LocalBusiness, BreadcrumbList e FAQPage.

O blog nao usa mais `NEXT_PUBLIC_API_URL` nem os posts mockados de `src/services/apiBlog.js` para renderizar as rotas publicas.

## Modelo de post

Campos usados na primeira publicacao:

| Campo | Uso |
| --- | --- |
| `slug` | Rota publica do artigo. |
| `status` | `published` ou `draft`. |
| `order` | Ordem editorial. |
| `clusterKey` | Agrupamento interno: `custos`, `performance`, `nichos`. |
| `cluster` | Nome publico do cluster. |
| `primaryKeyword` | Keyword principal. |
| `secondaryKeywords` | Variacoes semanticas. |
| `intent` | Intencao de busca. |
| `funnelStage` | ToFu, MoFu ou BoFu. |
| `title` | H1 editorial. |
| `seoTitle` | Title tag. |
| `metaDescription` | Meta description. |
| `excerpt` | Resumo de listagem. |
| `answerFirst` | Resposta direta no inicio do artigo. |
| `publishedAt` | Data de publicacao. |
| `updatedAt` | Data de revisao. |
| `author` | Autor editorial. |
| `authorBio` | Bio curta para E-E-A-T. |
| `heroImage` | Imagem Open Graph/hero. |
| `sections` | Conteudo estruturado por H2. |
| `faqs` | FAQ final e schema. |
| `sources` | Fontes usadas no brief. |
| `internalLinks` | Links para money pages, home e artigos correlatos. |
| `cta` | CTA contextual para WhatsApp. |

## Calendario editorial inicial

| Ordem | Data alvo | Cluster | Artigo | Keyword primaria | Funil | CTA | Pagina destino |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-06-19 | Custos | Quanto custa um site profissional para empresas no Brasil em 2026? | quanto custa um site profissional | MoFu | Falar sobre meu site | `/#planos` |
| 2 | 2026-06-19 | Custos | O barato que sai caro: riscos de fazer um site de graca | site gratis para empresa | ToFu | Pedir avaliacao do site | `/#planos` |
| 3 | 2026-06-19 | Custos | Landing Page ou Site Institucional: onde investir primeiro? | landing page ou site institucional | MoFu | Escolher meu formato | `/landing-page-para-gestores-de-trafego` |
| 4 | 2026-06-19 | Performance | Por que o site da sua empresa demora tanto para abrir no celular? | site lento no celular | ToFu | Avaliar performance | `/#planos` |
| 5 | 2026-06-19 | Performance | O que e a nota do Google PageSpeed e por que sites lentos fazem voce perder clientes? | nota Google PageSpeed | ToFu | Conversar sobre performance | `/#planos` |
| 6 | 2026-06-19 | Performance | Como posicionar o seu negocio local no topo do Google na sua cidade | SEO local para empresas | MoFu | Planejar SEO local | `/site-para-clinicas-medicas` |
| 7 | 2026-06-19 | Nichos | A importancia de um sistema de agendamento proprio para sua clinica ou barbearia | sistema de agendamento online | MoFu | Planejar agendamento | `/sistemas-de-agendamento-online` |
| 8 | 2026-06-19 | Nichos | Como escritorios de advocacia atraem clientes de alto valor atraves do Google | site para advogados | MoFu | Conversar sobre site juridico | `/#portfolio` |
| 9 | 2026-06-19 | Nichos | O que nao pode faltar no site de uma oficina mecanica para passar confianca | site para oficina mecanica | MoFu | Criar site da oficina | `/#planos` |

## Briefs iniciais

### 1. Quanto custa um site profissional para empresas no Brasil em 2026?

- Intencao: comparar investimento e decidir entre landing page, site institucional ou projeto personalizado.
- Persona: dono de pequena empresa ou prestador de servico avaliando contratacao.
- SERP/PAA observada: buscas trazem faixas de preco, custo de manutencao, diferenca entre site simples e profissional e riscos de plataformas gratuitas.
- Fontes: Google Search Central SEO Starter Guide, Wix Brasil sobre custo de site em 2026, AG Sao Paulo sobre faixas de preco.
- Links internos: planos, portfolio, landing page para campanhas.
- FAQ: preco unico, manutencao mensal, site barato.
- Advertorial: SoftLuna ajuda a escolher escopo sem inflar projeto.

### 2. O barato que sai caro: riscos de fazer um site de graca

- Intencao: entender limites de site gratuito ou amador.
- Persona: empresario com site improvisado ou sem dominio proprio.
- SERP/PAA observada: perguntas sobre site gratuito aparecer no Google, dominio, migracao e limites de SEO.
- Fontes: Google Search Central SEO Starter Guide, Google Core Web Vitals.
- Links internos: planos, artigo de site lento, servicos.
- FAQ: indexacao, momento de migrar, necessidade de refazer.
- Advertorial: SoftLuna audita se vale ajustar ou reconstruir.

### 3. Landing Page ou Site Institucional: onde investir primeiro?

- Intencao: escolher formato inicial.
- Persona: empresa com verba limitada e uma decisao comercial urgente.
- SERP/PAA observada: comparacoes entre landing page, site institucional, one page e site completo.
- Fontes: Google SEO Starter Guide, Search Gallery de structured data.
- Links internos: money page de clinicas, landing page para gestores, planos.
- FAQ: evolucao de landing para site, conversao, SEO.
- Advertorial: SoftLuna recomenda escopo por objetivo.

### 4. Por que o site da sua empresa demora tanto para abrir no celular?

- Intencao: diagnosticar causas de lentidao mobile.
- Persona: empresario que sente queda de contato ou campanha com pagina lenta.
- SERP/PAA observada: causas comuns incluem imagem pesada, scripts, hospedagem, cache e plugins.
- Fontes: web.dev Web Vitals, Google Core Web Vitals and Search.
- Links internos: riscos de site gratis, planos, portfolio.
- FAQ: refazer ou otimizar, impacto em ranking, imagem pesada.
- Advertorial: SoftLuna avalia base e recomenda otimizacao ou reconstrucao.

### 5. O que e a nota do Google PageSpeed?

- Intencao: interpretar PageSpeed sem supersticao.
- Persona: dono de site com nota baixa ou fornecedor prometendo nota 100.
- SERP/PAA observada: diferenca entre PageSpeed, Core Web Vitals, dados reais e laboratorio.
- Fontes: web.dev Learn Core Web Vitals, Search Console Help Core Web Vitals report.
- Links internos: artigo de site lento, custo de site, planos.
- FAQ: nota 100, dados reais, SEO.
- Advertorial: SoftLuna usa PageSpeed como validacao, nao como promessa isolada.

### 6. Como posicionar o seu negocio local no topo do Google na sua cidade

- Intencao: entender SEO local e Google Business Profile.
- Persona: negocio local com perfil no Google e site fraco.
- SERP/PAA observada: perguntas sobre Google Maps, perfil completo, categorias, avaliacoes e site.
- Fontes: Google Business Profile, dicas de ranking local do Google, guidelines do GBP.
- Links internos: money page de clinicas, portfolio, planos.
- FAQ: site e Maps, garantia de topo, URL no perfil.
- Advertorial: SoftLuna alinha site, schema e CTAs com busca local.

### 7. A importancia de um sistema de agendamento proprio

- Intencao: decidir entre WhatsApp, agenda integrada ou sistema proprio.
- Persona: clinica, barbearia, salao ou prestador com agenda manual.
- SERP/PAA observada: beneficios recorrentes sao agendamento 24h, confirmacao, equipe, reducao de faltas e integracao com WhatsApp.
- Fontes: ANPD, Ministerio da Saude sobre LGPD, Reservio para agendamento em barbearia.
- Links internos: site para clinicas, sistemas de agendamento, SEO local.
- FAQ: toda clinica precisa, substitui recepcao, LGPD.
- Advertorial: SoftLuna mapeia fluxo antes de construir sistema.

### 8. Como escritorios de advocacia atraem clientes de alto valor atraves do Google

- Intencao: entender presenca digital juridica sobria.
- Persona: advogado ou escritorio que quer atrair consultas qualificadas sem ferir regras eticas.
- SERP/PAA observada: regras de marketing juridico, Provimento 205/2021, SEO para advogados e conteudo educativo.
- Fontes: CFOAB Provimento 205/2021, OAB/SP PDF do provimento.
- Links internos: portfolio, SEO local, planos.
- FAQ: advogado pode ter site, artigos de SEO, WhatsApp.
- Advertorial: SoftLuna cria site juridico com revisao final do escritorio.

### 9. O que nao pode faltar no site de uma oficina mecanica

- Intencao: estruturar pagina local de confianca.
- Persona: dono de oficina que depende de indicacao, Maps e WhatsApp.
- SERP/PAA observada: usuarios buscam servicos, endereco, avaliacoes, orcamento, especialidades e fotos reais.
- Fontes: Google Business Profile local ranking, Google SEO Starter Guide.
- Links internos: SEO local, custo de site, planos.
- FAQ: site vs Google Maps, preco no site, fotos reais.
- Advertorial: SoftLuna cria pagina objetiva para pedidos de orcamento.

## Rotina de atualizacao e auditoria

Cadencia mensal:

1. Revisar Search Console quando houver dados: impressoes, CTR, posicao media, queries e paginas.
2. Revisar Vercel Analytics: visitas em `/blog`, artigos mais vistos e cliques quando F6 implementar tracking.
3. Reavaliar fontes dos artigos com mais trafego ou maior risco de obsolescencia.
4. Atualizar `updatedAt`, fontes e FAQ quando houver mudanca relevante.
5. Verificar links internos para money pages novas.
6. Rodar `npm run lint` e `npm run build` antes de publicar ajustes.

Criterios de melhoria:

- Artigo com impressoes e CTR baixo: testar title/meta sem mudar a intencao.
- Artigo com visitas e pouco contato: revisar CTA, links internos e resposta inicial.
- Artigo com fonte normativa ou tecnica: revisar quando houver mudanca em Google, CFM, OAB, ANPD ou web.dev.
- Artigo que apoiar money page nova: incluir link contextual para a rota correspondente.

## Validacao da primeira publicacao

- Nove artigos publicados em `content/blog/*.json`.
- `/blog` renderiza listagem por cluster.
- `/blog/[slug]` renderiza Article, BreadcrumbList e FAQPage.
- Validacao local obrigatoria: `npm run lint`, `npm run build` e smoke das rotas principais.
