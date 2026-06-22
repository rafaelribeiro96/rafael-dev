# SoftLuna SEO Operations

Execucao: 2026-06-19

## Inventario de dados estruturados

| Area | Schema atual | Origem | Status |
| --- | --- | --- | --- |
| Homepage | Organization, LocalBusiness, WebSite, WebPage, FAQPage | `src/lib/seoSchema.js` + `src/pages/index.jsx` | Implementado |
| Money pages | Organization, LocalBusiness, Service, BreadcrumbList, FAQPage | `src/lib/seoSchema.js` + `src/pages/[slug].jsx` | Implementado no template |
| Blog posts | Organization, LocalBusiness, Person, Article, BreadcrumbList, FAQPage | `src/lib/seoSchema.js` + `src/pages/blog/[link]/index.jsx` | Implementado |
| Blog index | Title, meta description, canonical e Open Graph | `src/pages/blog/index.jsx` | Implementado sem Article schema, por ser listagem |

Regra: dados estruturados devem descrever o conteudo visivel da pagina. FAQPage so deve usar perguntas e respostas que aparecem na propria rota.

## Regras AEO/GEO para conteudo citavel

- Comecar paginas e artigos com uma resposta direta quando a intencao de busca pedir definicao, comparacao ou decisao.
- Usar H2/H3 em forma de pergunta quando isso refletir a duvida real do usuario.
- Evitar promessas absolutas de ranking, receita, agenda cheia ou resultado garantido.
- Explicar entidades com nome claro: SoftLuna, landing page, site institucional, SEO local, Google Business Profile, PageSpeed, Core Web Vitals.
- Incluir FAQ no fim de paginas comerciais e artigos de decisao.
- Manter links internos para planos, portfolio, blog, money pages e WhatsApp contextual.
- Registrar fontes quando houver dado tecnico, regra profissional, LGPD, Google, PageSpeed ou norma de categoria.
- Atualizar `updatedAt` em artigos quando a revisao alterar conteudo factual ou recomendacao.

## Checklist Google Business Profile

Baseado na documentacao do Google Business Profile, SEO local deve ser tratado por relevancia, distancia e proeminencia. Nao prometer posicao ou topo garantido.

- Nome: usar o nome real da empresa, sem keyword stuffing.
- Categoria: escolher a categoria principal que melhor representa o negocio.
- Area atendida: preencher cidade/regiao com consistencia em relacao ao site.
- Telefone: manter o mesmo numero usado no site e WhatsApp.
- Site: apontar para a URL canonica correta; usar UTM se a campanha exigir medicao.
- Servicos: cadastrar servicos reais com descricoes claras.
- Descricao: explicar oferta, publico e diferenciais sem promessas exageradas.
- Fotos: publicar fotos reais de fachada, equipe, ambiente, produtos ou trabalhos.
- Horarios: manter horario comercial atualizado.
- Reviews: pedir avaliacoes de clientes reais e responder com tom profissional.
- Posts: publicar atualizacoes quando houver oferta, artigo, caso de portfolio ou novidade.
- Consistencia NAP: nome, endereco e telefone devem bater entre site, GBP, redes e diretorios.

## Checklist de publicacao SEO

Aplicar antes de publicar homepage, money page, artigo ou ajuste relevante.

- Title unico e alinhado a intencao principal.
- Meta description clara, sem promessa absoluta.
- Canonical correto e sem conflito com `_document`.
- Open Graph com titulo, descricao, tipo e imagem.
- H1 unico.
- Links internos para pelo menos uma pagina comercial e um proximo passo.
- CTA contextual de WhatsApp com mensagem rastreavel.
- FAQ visivel quando houver FAQPage schema.
- JSON-LD validado por build e amostragem de HTML.
- Imagens com `alt`, dimensoes estaveis ou componente `next/image`.
- Copy revisada em pt-BR, sem mojibake.
- Sem afirmacoes de topo garantido no Google.
- `npm run lint` aprovado.
- `npm run build` aprovado.
- Smoke HTTP da rota publicada.

## Eventos de mensuracao

Eventos padronizados sobre Vercel Analytics:

| Evento | Gatilho | Parametros |
| --- | --- | --- |
| `whatsapp_cta_click` | CTAs globais de WhatsApp | `source`, `label`, `messageContext`, `path` |
| `portfolio_whatsapp_click` | CTA "Quero um site parecido" | `projectId`, `projectTitle`, `category`, `path` |
| `portfolio_live_click` | Clique em projeto publicado | `projectId`, `projectTitle`, `category`, `liveUrl`, `path` |
| `pricing_cta_click` | CTA de plano | `planId`, `planTitle`, `setupPrice`, `maintenancePrice`, `path` |
| `money_page_whatsapp_click` | CTA de money page | `slug`, `niche`, `primaryKeyword`, `ctaPosition`, `path` |
| `blog_whatsapp_click` | CTA de artigo | `slug`, `cluster`, `primaryKeyword`, `ctaPosition`, `path` |

Observacao: eventos customizados da Vercel dependem de plano com suporte a custom events e versao atualizada de `@vercel/analytics`.

## Rotina mensal de metricas

1. Registrar periodo analisado.
2. Vercel Analytics: visitantes, rotas mais acessadas, eventos de CTA, origem dos cliques e paginas com maior conversao.
3. Google Search Console: impressoes, cliques, CTR, posicao media, queries e paginas indexadas.
4. Money pages: verificar rotas com impressao sem clique e ajustar title/meta quando necessario.
5. Blog: revisar artigos com trafego e baixa conversao; reforcar CTA e links internos.
6. Performance: revisar Core Web Vitals no Search Console quando houver volume suficiente.
7. Google Business Profile: revisar acoes, chamadas, rotas, mensagens, fotos, reviews e consistencia do link do site.
8. Registrar decisoes no roadmap ou neste doc quando houver mudanca editorial ou tecnica.

## Baseline de performance

Medição local registrada depois da implementação desta rodada, usando `next build`, `next start -p 3000` e Lighthouse 12.8.2 contra `http://localhost:3000`.

| Data | URL | Ferramenta | Mobile | Desktop | LCP | CLS | INP/TBT | Observacao |
| --- | --- | --- | ---: | ---: | --- | --- | --- | --- |
| 2026-06-19 | `/` local | Lighthouse local | 63 | 93 | Mobile 6.7s / Desktop 1.3s | Mobile 0 / Desktop 0.002 | TBT 0ms | Baseline local; validar PageSpeed publico apos deploy/indexacao |
| 2026-06-22 | `https://softluna.com.br/` | Lighthouse 12.8.2 publico | 83 | 98 | Mobile 3.5s / Desktop 0.9s | Mobile 0.003 / Desktop 0.001 | Mobile TBT 180ms / Desktop TBT 0ms | PageSpeed Insights API publica retornou 429/quota sem chave; Lighthouse publico usado como fallback reproduzivel |

Para baseline publico definitivo, usar PageSpeed Insights ou Search Console quando `https://softluna.com.br` estiver indexado e com dados reais suficientes.

## Validacao publica de SEO tecnico

Execucao: 2026-06-22.

Comando usado: `npm run check:seo-public`.

| URL | HTTP | JSON-LD | Canonical | OG image | Twitter image | Observacao |
| --- | ---: | ---: | --- | --- | --- | --- |
| `https://softluna.com.br/` | 200 | 1 | OK | OK | OK | Homepage publica com schema parseavel. |
| `https://softluna.com.br/blog` | 200 | 1 | OK | OK | OK | Index do blog publico com metadados sociais. |
| `https://softluna.com.br/blog/quanto-custa-site-profissional-empresas-brasil-2026` | 200 | 1 | OK | OK | Pendente no deploy atual | Corrigido localmente em `src/pages/blog/[link]/index.jsx`; publicar para refletir em producao. |
| `https://softluna.com.br/site-para-clinicas-medicas` | 200 | 1 | OK | OK | OK | Money page publica com schema parseavel. |
| `https://softluna.com.br/desenvolvimento-de-sistemas-sob-medida` | 200 | 1 | OK | OK | OK | Money page fora de saude validada como amostra. |

Observacao: Google recomenda Rich Results Test para elegibilidade de rich results e Schema Markup Validator para validacao generica de Schema.org. Como essas ferramentas oficiais sao orientadas a uso web e a API publica do PageSpeed retornou quota 429 neste ambiente, a validacao automatizada do repositorio cobre HTTP publico, canonical, imagens sociais e parse de JSON-LD; apos deploy, repetir a amostra no validador web quando for necessaria uma confirmacao visual/manual.
