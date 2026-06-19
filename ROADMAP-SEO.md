# ROADMAP SEO e Crescimento SoftLuna

Plano mestre de implementacao das melhorias de SEO, conteudo, copy, performance e AEO da SoftLuna.

Este arquivo e um checklist operacional. Ele deve permitir que qualquer IA ou pessoa continue o trabalho sem precisar reinterpretar o estudo original.

## Como usar este plano

- Antes de executar qualquer tarefa, leia as fontes obrigatorias da secao seguinte.
- Nao implemente tudo de uma vez. Escolha uma fase ou um grupo pequeno de tarefas, execute, valide e marque os checkboxes.
- Ao concluir uma tarefa, troque `[ ]` por `[x]` e registre a data, a IA/pessoa responsavel e links/arquivos alterados no campo `Registro de execucao`.
- Preserve comportamento existente salvo decisao explicita registrada aqui ou em `.specs/project/STATE.md`.
- Nao faca commit ou push sem pedido explicito.
- Para mudancas de JS/React, rode `npm run lint`.
- Para paginas, rotas, Tailwind, schema, conteudo carregado em build ou mudancas que possam quebrar o site publico, rode `npm run build`.
- Para copy, artigos, FAQs e paginas publicas, revise pt-BR, acentos, clareza comercial e ausencia de promessa absoluta de ranking/receita.
- Para pesquisa SERP, Google, PageSpeed, dependencias ou informacoes instaveis, valide com fontes atuais antes de publicar.
- Se encontrar decisao estrutural nao prevista, pause a implementacao, registre a duvida em "Decisoes pendentes" e peca confirmacao.

## Fontes obrigatorias

Leia nesta ordem antes de executar tarefas:

1. `Melhorias SoftLuna.txt`
2. `.specs/project/PROJECT.md`
3. `.specs/project/STATE.md`
4. `.specs/project/ROADMAP.md`
5. `.specs/codebase/STRUCTURE.md`
6. `.specs/codebase/ARCHITECTURE.md`
7. `.specs/codebase/CONCERNS.md`
8. `.specs/codebase/TESTING.md`
9. `docs/business/softluna/business-model.md`
10. `docs/business/softluna/operating-system.md`
11. `docs/brand/softluna/softluna-design-system.md`
12. `docs/brand/softluna/social-style-guide.md`
13. `GIT-CMS.md`

Leia sob demanda:

- `content/pricing/*.json` para precos reais publicados.
- `content/faq/*.json` para FAQs atuais.
- `content/portfolio/*.json` para CTAs e portfolio.
- `content/global/site.json` para SEO global e textos editaveis.
- `src/pages/index.jsx` e `src/components/Home/*` para homepage.
- `src/lib/content.js` para leitura publica de conteudo.
- `src/pages/admin.jsx`, `src/components/Admin/*` e `src/pages/api/content/*` para admin/Git-CMS.

## Skills recomendadas por tipo de tarefa

Use apenas as skills necessarias para a tarefa em execucao:

| Tipo de trabalho | Skill recomendada | Quando usar |
| --- | --- | --- |
| Planejamento e quebra em subtarefas | `tlc-spec-driven` | Fases grandes, decisoes estruturais, tarefas com dependencias |
| Estrategia de blog e clusters | `blog-strategy` | Calendario editorial, pilares, hub-and-spoke, GEO |
| Briefing de artigo | `blog-brief` | Antes de escrever qualquer artigo |
| Escrita de artigo | `blog-write` | Depois de brief aprovado e pesquisa atualizada |
| Reescrita/otimizacao | `blog-rewrite` | Melhorar post, copy ou pagina existente |
| Validacao SEO de post/pagina | `blog-seo-check` | Antes de publicar conteudo indexavel |
| Schema/JSON-LD | `blog-schema` | Article, FAQ, LocalBusiness, Service, Breadcrumb |
| Auditoria de qualidade | `blog-analyze` | Checar E-E-A-T, citabilidade e qualidade antes de publicar |
| Calendario editorial | `blog-calendar` | Transformar clusters em agenda de producao |
| Imagens de blog/social | `blog-image` | Criar imagens coerentes com Lunar Day |
| UI/copy visual do site | `frontend-design` | Alteracoes visuais na homepage, cards, CTAs e secoes |
| Praticas web atuais | `modern-web-guidance` | Duvidas atuais de SEO tecnico, performance, web vitals e frameworks |

## Formato padrao das tarefas

Cada tarefa executavel deve seguir este formato:

```md
- [ ] ID - Titulo curto
  - Objetivo:
  - Arquivos provaveis:
  - Dependencias:
  - Skill indicada:
  - Criterios de aceite:
  - Validacao:
  - Registro de execucao:
```

## Decisoes pendentes

- [x] D-001 - Definir fonte de verdade de precos: manter conteudo atual em `content/pricing/*.json` ou migrar para precos estrategicos do plano de negocio.
  - Decisao 2026-06-19: usar `content/pricing/*.json` como fonte publicada atual; precos estrategicos seguem como recomendacao futura. Registro: `docs/business/softluna/seo-foundation.md`, `.specs/project/STATE.md`.
- [x] D-002 - Definir se money pages e blog serao conteudo estatico em codigo/arquivos markdown/JSON ou se o Git-CMS atual sera expandido para gerenciar essas colecoes.
  - Decisao 2026-06-19: usar JSON versionado em `content/money-pages/` e `content/blog/`, lido em build; admin pode ser expandido depois do piloto. Registro: `docs/business/softluna/seo-foundation.md`, `.specs/project/STATE.md`.
- [x] D-003 - Definir se a SoftLuna continuara no Vercel ou se havera plano separado para Cloudflare Pages em producao e/ou sites de clientes.
  - Decisao 2026-06-19: manter Vercel e `@vercel/analytics` para a implementacao SEO imediata; Cloudflare Pages fica como decisao futura separada. Registro: `docs/business/softluna/seo-foundation.md`, `.specs/project/STATE.md`.
- [x] D-004 - Definir ordem de publicacao: primeiro homepage/FAQs, primeiro money pages, ou primeiro blog.
  - Decisao 2026-06-19: money page piloto primeiro; arquitetura/briefs do blog em paralelo; homepage/FAQs e lotes depois. Registro: `docs/business/softluna/seo-foundation.md`.
- [x] D-005 - Definir se havera autores, bio editorial e pagina de blog antes dos artigos serem publicados.
  - Decisao 2026-06-19: artigos terao autor e bio editorial; pagina publica de autor nao e obrigatoria para o primeiro lote. Registro: `docs/business/softluna/seo-foundation.md`.

## Riscos conhecidos

- Encoding: `Melhorias SoftLuna.txt` e alguns docs podem aparecer com mojibake no terminal. Antes de copiar texto final para producao, revisar acentos manualmente.
- Testes: o projeto nao tem runner de testes automatizados configurado. Usar `npm run lint`, `npm run build` e smoke tests manuais ate haver infraestrutura.
- Precos: ha divergencia entre precos atuais do site e precos estrategicos do plano de negocio.
- CMS: o repo usa Git-CMS customizado. Keystatic/TinaCMS sao direcoes possiveis, nao implementacao atual.
- SEO: nao prometer ranking garantido, "topo do Google" garantido ou receita garantida. Preferir linguagem de potencial, fundamentos e vantagem tecnica.
- Performance: nao declarar nota PageSpeed/Core Web Vitals sem medicao real.

## Fase 0 - Fundacao e decisoes

Objetivo: remover ambiguidades estruturais antes de criar paginas, blog e copy em escala.

- [x] F0-001 - Consolidar fonte de verdade de precos
  - Objetivo: decidir se os precos publicados devem continuar iguais ou seguir o plano estrategico.
  - Arquivos provaveis: `content/pricing/*.json`, `docs/business/softluna/business-model.md`, `.specs/project/STATE.md`.
  - Dependencias: D-001.
  - Skill indicada: `tlc-spec-driven`.
  - Criterios de aceite: decisao registrada; discrepancias documentadas; nenhuma copy nova contradiz a fonte escolhida.
  - Validacao: revisar conteudo publicado e docs; se alterar JSON, rodar `npm run build`.
  - Registro de execucao: 2026-06-19, Codex. Decisao registrada em `docs/business/softluna/seo-foundation.md` e `.specs/project/STATE.md`. Nenhum JSON de preco foi alterado; build nao foi necessario.

- [x] F0-002 - Decidir modelo de conteudo para money pages
  - Objetivo: escolher entre paginas estaticas em Next.js, JSON em `content/`, markdown/MDX ou expansao do Git-CMS.
  - Arquivos provaveis: `src/pages`, `content/`, `src/lib/content.js`, `GIT-CMS.md`.
  - Dependencias: D-002.
  - Skill indicada: `tlc-spec-driven`.
  - Criterios de aceite: modelo definido com campos minimos de slug, H1, SEO title, meta description, nicho, CTA, FAQs, schema e links internos.
  - Validacao: documentar decisao antes de criar a primeira pagina.
  - Registro de execucao: 2026-06-19, Codex. Modelo escolhido: `content/money-pages/*.json` + helper em `src/lib/content.js` + rota/template dinamico. Campos minimos registrados em `docs/business/softluna/seo-foundation.md`.

- [x] F0-003 - Decidir modelo de conteudo para blog
  - Objetivo: definir onde os posts viverao, como serao listados e como receberao schema Article/FAQ.
  - Arquivos provaveis: `src/pages`, `content/`, `src/lib/content.js`.
  - Dependencias: D-002, D-005.
  - Skill indicada: `blog-strategy`, `tlc-spec-driven`.
  - Criterios de aceite: estrutura escolhida; campos minimos definidos; fluxo de criacao de brief, escrita, revisao e publicacao documentado.
  - Validacao: nenhuma implementacao de artigo antes da decisao.
  - Registro de execucao: 2026-06-19, Codex. Modelo escolhido: substituir fluxo legado dependente de `NEXT_PUBLIC_API_URL` por `content/blog/*.json`, listagem `/blog` e detalhe `/blog/[slug]`. Campos e fluxo editorial registrados em `docs/business/softluna/seo-foundation.md`.

- [x] F0-004 - Criar inventario do conteudo atual
  - Objetivo: mapear hero, secoes, portfolio, planos, FAQ e SEO global antes das mudancas.
  - Arquivos provaveis: `src/components/Home/*`, `content/*`, `src/pages/index.jsx`.
  - Dependencias: nenhuma.
  - Skill indicada: `tlc-spec-driven`.
  - Criterios de aceite: lista curta do que esta em codigo vs CMS; pontos que precisam migrar para conteudo editavel identificados.
  - Validacao: `rg`/leitura dos arquivos, sem editar.
  - Registro de execucao: 2026-06-19, Codex. Inventario registrado em `docs/business/softluna/seo-foundation.md`: hero/SEO, pricing, portfolio, FAQ e carousel estao em `content/`; varias secoes da home seguem em codigo; blog atual e legado/mockado.

- [x] F0-005 - Definir padrao de tracking e conversoes
  - Objetivo: padronizar nomes de eventos para WhatsApp, portfolio CTA, money pages e blog.
  - Arquivos provaveis: `src/pages/_app.*`, `src/components/*`, `src/components/Home/*`.
  - Dependencias: D-003 se houver mudanca de analytics/plataforma.
  - Skill indicada: `tlc-spec-driven`, `modern-web-guidance`.
  - Criterios de aceite: tabela de eventos com nome, gatilho, parametros e local de implementacao.
  - Validacao: apos implementar eventos, testar cliques em dev e revisar console/network.
  - Registro de execucao: 2026-06-19, Codex. Padrao inicial de eventos registrado em `docs/business/softluna/seo-foundation.md`, partindo da stack atual de Vercel Analytics. Implementacao ficou para F6-002.

## Fase 1 - Arquitetura SEO e Money Pages

Objetivo: criar a estrutura para capturar buscas transacionais de fundo de funil por nicho e tipo de solucao.

### Regras para todas as money pages

- H1 deve seguir: palavra-chave transacional + nicho.
- Cada pagina deve ter CTA principal para WhatsApp com mensagem contextual.
- Cada pagina deve ter title, meta description, canonical, Open Graph, schema adequado e links internos.
- Cada copy final exige pesquisa SERP/PAA atual antes de publicacao.
- Cada pagina deve evitar promessa absoluta de ranking ou resultado financeiro.
- Cada pagina deve linkar para planos, portfolio quando houver exemplo relevante, FAQ e contato.

### Lista base de rotas

Saude e bem-estar:

- `/site-para-clinicas-medicas`
- `/site-para-dentistas-e-consultorios`
- `/site-para-clinicas-de-estetica`
- `/site-para-psicologos`

Beleza e estilo:

- `/site-para-barbearias`
- `/site-para-saloes-de-beleza`
- `/site-para-tatuadores-e-estudios`

Servicos profissionais:

- `/site-para-advogados-e-escritorios`
- `/site-para-contabilidade`
- `/site-para-arquitetos`
- `/site-para-corretores-e-imobiliarias`

Comercio e varejo:

- `/site-para-lojas-de-varejo`
- `/site-para-oficinas-mecanicas`
- `/site-para-restaurantes-e-deliveries`
- `/site-para-petshops-e-veterinarias`

Marketing e tech:

- `/landing-page-para-gestores-de-trafego`
- `/landing-page-para-infoprodutos`

Solucoes sob medida:

- `/criacao-de-lojas-virtuais-ecommerce`
- `/sistemas-de-agendamento-online`
- `/desenvolvimento-de-sistemas-sob-medida`

### Tarefas

- [x] F1-001 - Definir template comum das money pages
  - Objetivo: criar a estrutura padrao de secoes para todas as paginas.
  - Arquivos provaveis: depende de F0-002; provavel `src/pages/[slug].jsx` ou template em `src/components`.
  - Dependencias: F0-002, F0-004.
  - Skill indicada: `tlc-spec-driven`, `frontend-design`.
  - Criterios de aceite: template inclui hero, dores do nicho, solucao SoftLuna, beneficios, processo, planos/CTA, FAQ, portfolio relacionado e schema.
  - Validacao: revisao de design contra Lunar Day; build quando implementado.
  - Registro de execucao: executado em 2026-06-19 com JSON versionado em `content/money-pages/`, template em `src/pages/[slug].jsx` e documentacao em `docs/business/softluna/money-pages-architecture.md`.

- [x] F1-002 - Criar matriz de keywords e intencao por rota
  - Objetivo: para cada rota, registrar keyword primaria, secundarias, intencao, oferta e CTA.
  - Arquivos provaveis: `ROADMAP-SEO.md` ou doc auxiliar em `docs/business/softluna/`.
  - Dependencias: lista base de rotas.
  - Skill indicada: `blog-strategy`, `modern-web-guidance`.
  - Criterios de aceite: todas as 19 rotas com H1 proposto, title provisoria, meta description provisoria e mensagem de WhatsApp.
  - Validacao: pesquisa atual de SERP/PAA antes de considerar final.
  - Registro de execucao: executado em 2026-06-19 em `docs/business/softluna/money-pages-architecture.md`; todas as 19 rotas possuem keyword primaria, intencao, oferta, H1, title, meta e CTA provisoria.

- [x] F1-003 - Planejar dados estruturados das money pages
  - Objetivo: definir schema por tipo de pagina.
  - Arquivos provaveis: `src/pages`, `src/lib`, possivel componente de JSON-LD.
  - Dependencias: F1-001.
  - Skill indicada: `blog-schema`.
  - Criterios de aceite: Service schema para servicos, FAQ schema para perguntas da pagina, BreadcrumbList para navegacao e Organization/LocalBusiness quando aplicavel.
  - Validacao: testar JSON-LD em Rich Results Test/Schema Validator antes de publicar.
  - Registro de execucao: executado em 2026-06-19 com helper `src/lib/seoSchema.js` gerando Organization/LocalBusiness, Service, BreadcrumbList e FAQPage em `@graph`.

- [x] F1-004 - Criar primeira money page piloto
  - Objetivo: implementar uma pagina piloto para validar template, copy, schema, responsividade e build.
  - Arquivos provaveis: definidos em F0-002 e F1-001.
  - Dependencias: F1-001, F1-002, F1-003.
  - Skill indicada: `frontend-design`, `blog-seo-check`, `blog-schema`.
  - Criterios de aceite: pagina indexavel, responsiva, com CTA contextual, schema valido e copy revisada.
  - Validacao: `npm run lint`, `npm run build`, smoke mobile/desktop.
  - Registro de execucao: executado em 2026-06-19 com piloto `/site-para-clinicas-medicas` em `content/money-pages/site-para-clinicas-medicas.json` e rota `src/pages/[slug].jsx`.

- [ ] F1-005 - Produzir lote Saude e Bem-Estar
  - Objetivo: criar as 4 rotas de saude com copy e CTAs especificos.
  - Arquivos provaveis: definidos em F0-002.
  - Dependencias: F1-004 aprovado.
  - Skill indicada: `blog-brief`, `blog-write`, `blog-seo-check`, `blog-schema`.
  - Criterios de aceite: todas as rotas publicadas, com links internos e FAQ especifica.
  - Validacao: `npm run lint`, `npm run build`, revisao pt-BR.
  - Registro de execucao: pendente; depende de aprovacao/revisao do piloto F1-004 e pesquisa SERP/PAA por rota antes de publicar o lote.

- [ ] F1-006 - Produzir lote Beleza e Estilo
  - Objetivo: criar as 3 rotas de beleza com copy e CTAs especificos.
  - Arquivos provaveis: definidos em F0-002.
  - Dependencias: F1-004 aprovado.
  - Skill indicada: `blog-brief`, `blog-write`, `blog-seo-check`, `blog-schema`.
  - Criterios de aceite: todas as rotas publicadas, com links internos e FAQ especifica.
  - Validacao: `npm run lint`, `npm run build`, revisao pt-BR.
  - Registro de execucao: pendente; depende de aprovacao/revisao do piloto F1-004 e pesquisa SERP/PAA por rota antes de publicar o lote.

- [ ] F1-007 - Produzir lote Servicos Profissionais
  - Objetivo: criar as 4 rotas de servicos profissionais com copy e CTAs especificos.
  - Arquivos provaveis: definidos em F0-002.
  - Dependencias: F1-004 aprovado.
  - Skill indicada: `blog-brief`, `blog-write`, `blog-seo-check`, `blog-schema`.
  - Criterios de aceite: todas as rotas publicadas, com links internos e FAQ especifica.
  - Validacao: `npm run lint`, `npm run build`, revisao pt-BR.
  - Registro de execucao: pendente; depende de aprovacao/revisao do piloto F1-004 e pesquisa SERP/PAA por rota antes de publicar o lote.

- [ ] F1-008 - Produzir lote Comercio e Varejo
  - Objetivo: criar as 4 rotas de comercio/varejo com copy e CTAs especificos.
  - Arquivos provaveis: definidos em F0-002.
  - Dependencias: F1-004 aprovado.
  - Skill indicada: `blog-brief`, `blog-write`, `blog-seo-check`, `blog-schema`.
  - Criterios de aceite: todas as rotas publicadas, com links internos e FAQ especifica.
  - Validacao: `npm run lint`, `npm run build`, revisao pt-BR.
  - Registro de execucao: pendente; depende de aprovacao/revisao do piloto F1-004 e pesquisa SERP/PAA por rota antes de publicar o lote.

- [ ] F1-009 - Produzir lote Marketing, Tech e Sistemas
  - Objetivo: criar as 4 rotas de landing pages e sistemas sob medida.
  - Arquivos provaveis: definidos em F0-002.
  - Dependencias: F1-004 aprovado.
  - Skill indicada: `blog-brief`, `blog-write`, `blog-seo-check`, `blog-schema`.
  - Criterios de aceite: todas as rotas publicadas, com links internos, FAQ especifica e distincao clara entre landing page, ecommerce, agendamento e sistema sob medida.
  - Validacao: `npm run lint`, `npm run build`, revisao pt-BR.
  - Registro de execucao: pendente; depende de aprovacao/revisao do piloto F1-004 e pesquisa SERP/PAA por rota antes de publicar o lote.

## Fase 2 - Blog e autoridade

Objetivo: transformar os clusters do estudo em uma maquina editorial ToFu/MoFu que gere autoridade, links internos e leads para WhatsApp.

### Regras para todos os artigos

- Todo artigo deve comecar por brief antes da escrita.
- Todo artigo deve ter keyword primaria, intencao, persona, funil, resumo SERP/PAA, outline, fontes e links internos.
- Todo artigo deve terminar com advertorial curto para SoftLuna e CTA de WhatsApp contextual.
- Todo artigo deve ter FAQ final e schema Article/FAQ quando publicado.
- Conteudo final exige revisao pt-BR, fontes atuais e checagem SEO.
- Evitar copiar respostas da SERP. Usar experiencia e posicionamento da SoftLuna.

### Clusters base

Cluster 1: Custos e Investimentos

- Quanto custa um site profissional para empresas no Brasil em 2026?
- O barato que sai caro: os riscos de fazer um site "de graca" ou em plataformas amadoras.
- Landing Page ou Site Institucional: onde sua empresa deve investir primeiro?

Cluster 2: Performance e Otimizacao

- Por que o site da sua empresa demora tanto para abrir no celular?
- O que e a nota do Google PageSpeed e por que sites lentos fazem voce perder clientes?
- Como posicionar o seu negocio local no topo do Google na sua cidade.

Cluster 3: Nichados e Especificos

- A importancia de um sistema de agendamento proprio para a sua clinica ou barbearia.
- Como escritorios de advocacia atraem clientes de alto valor atraves do Google.
- O que nao pode faltar no site de uma oficina mecanica para passar confianca.

### Tarefas

- [ ] F2-001 - Definir arquitetura tecnica do blog
  - Objetivo: decidir rotas, listagem, detalhe, fonte de dados e schema dos posts.
  - Arquivos provaveis: `src/pages`, `content/`, `src/lib/content.js`.
  - Dependencias: F0-003.
  - Skill indicada: `tlc-spec-driven`.
  - Criterios de aceite: modelo de post, rota, campos, listagem e SEO definidos antes do primeiro artigo.
  - Validacao: decisao documentada; build quando implementado.
  - Registro de execucao:

- [ ] F2-002 - Criar calendario editorial inicial
  - Objetivo: transformar os 9 temas em ordem de publicacao com prioridades e links internos.
  - Arquivos provaveis: `ROADMAP-SEO.md` ou `docs/business/softluna/`.
  - Dependencias: F2-001.
  - Skill indicada: `blog-calendar`, `blog-strategy`.
  - Criterios de aceite: calendario com data alvo, cluster, keyword, funil, CTA e pagina de destino.
  - Validacao: revisar coerencia com oferta e prioridades comerciais.
  - Registro de execucao:

- [ ] F2-003 - Produzir briefs dos 9 artigos iniciais
  - Objetivo: criar briefing completo antes de redigir.
  - Arquivos provaveis: local definido em F2-001/F2-002.
  - Dependencias: F2-002.
  - Skill indicada: `blog-brief`.
  - Criterios de aceite: cada brief tem SERP/PAA atual, fontes, outline, links internos, FAQ e advertorial previsto.
  - Validacao: checar fontes e intencao antes de escrever.
  - Registro de execucao:

- [ ] F2-004 - Publicar Cluster Custos e Investimentos
  - Objetivo: escrever e publicar os 3 artigos do cluster de custos.
  - Arquivos provaveis: definidos em F2-001.
  - Dependencias: F2-003.
  - Skill indicada: `blog-write`, `blog-seo-check`, `blog-schema`, `blog-analyze`.
  - Criterios de aceite: artigos publicados com schema, links internos e CTA; qualidade revisada.
  - Validacao: `npm run lint`, `npm run build`, revisao SEO e pt-BR.
  - Registro de execucao:

- [ ] F2-005 - Publicar Cluster Performance e Otimizacao
  - Objetivo: escrever e publicar os 3 artigos do cluster de performance.
  - Arquivos provaveis: definidos em F2-001.
  - Dependencias: F2-003.
  - Skill indicada: `blog-write`, `blog-seo-check`, `blog-schema`, `blog-analyze`.
  - Criterios de aceite: artigos publicados com explicacoes tecnicas claras, sem promessas absolutas de PageSpeed/ranking.
  - Validacao: `npm run lint`, `npm run build`, revisao SEO e pt-BR.
  - Registro de execucao:

- [ ] F2-006 - Publicar Cluster Nichado e Especifico
  - Objetivo: escrever e publicar os 3 artigos de nicho.
  - Arquivos provaveis: definidos em F2-001.
  - Dependencias: F2-003.
  - Skill indicada: `blog-write`, `blog-seo-check`, `blog-schema`, `blog-analyze`.
  - Criterios de aceite: artigos conectam diretamente com money pages correspondentes e CTA contextual.
  - Validacao: `npm run lint`, `npm run build`, revisao SEO e pt-BR.
  - Registro de execucao:

- [ ] F2-007 - Criar rotina de atualizacao e auditoria editorial
  - Objetivo: definir cadencia de revisao, atualizacao de fontes e medicao de resultados.
  - Arquivos provaveis: `ROADMAP-SEO.md`, docs de negocio.
  - Dependencias: F2-004, F2-005, F2-006.
  - Skill indicada: `blog-analyze`, `blog-seo-check`.
  - Criterios de aceite: rotina mensal definida com posts a revisar, metricas e criterios de melhoria.
  - Validacao: primeira auditoria registrada apos publicacao.
  - Registro de execucao:

## Fase 3 - Copy do site institucional

Objetivo: ajustar a homepage para comunicar resultado, velocidade, facilidade de edicao, SEO local e conversao sem jargoes desnecessarios.

- [ ] F3-001 - Atualizar proposta de hero
  - Objetivo: revisar H1, subtitulo e CTA principal da primeira dobra.
  - Arquivos provaveis: `src/components/Home/Hero.jsx`, `content/global/site.json` se o texto for editavel.
  - Dependencias: F0-004, F0-001.
  - Skill indicada: `frontend-design`, `blog-rewrite`.
  - Criterios de aceite: hero comunica negocio, velocidade, escopo nacional e edicao simples; CTA visivel no primeiro viewport.
  - Validacao: `npm run lint`, `npm run build`, smoke mobile/desktop.
  - Registro de execucao:

- [ ] F3-002 - Reposicionar comparativo "site tradicional vs SoftLuna"
  - Objetivo: trocar foco tecnico puro por dores comerciais reais.
  - Arquivos provaveis: `src/components/Home/ComparisonMatrix.jsx` ou secao equivalente.
  - Dependencias: F0-004.
  - Skill indicada: `frontend-design`, `blog-rewrite`.
  - Criterios de aceite: comparar lentidao, plugins, vulnerabilidade, custo de anuncios e manutencao vs performance, seguranca estatica, PageSpeed e autonomia controlada.
  - Validacao: `npm run lint`, `npm run build`, revisao para evitar promessas absolutas.
  - Registro de execucao:

- [ ] F3-003 - Adicionar CTA "Quero um site parecido"
  - Objetivo: incluir CTA direto em cada item de portfolio.
  - Arquivos provaveis: `src/components/Home/Portfolio.jsx`, `content/portfolio/*.json`, possivel admin se CTA for editavel.
  - Dependencias: F0-004, F0-005.
  - Skill indicada: `frontend-design`.
  - Criterios de aceite: cada projeto exposto tem botao "Quero um site parecido com este para minha empresa" ou variante curta equivalente; mensagem WhatsApp identifica o projeto.
  - Validacao: `npm run lint`, `npm run build`, testar clique/URL de WhatsApp.
  - Registro de execucao:

- [ ] F3-004 - Reorganizar apresentacao dos planos
  - Objetivo: deixar claros os tres tiers: Landing Pages, Site Institucional e Projetos Personalizados.
  - Arquivos provaveis: `src/components/Home/Pricing.jsx`, `content/pricing/*.json`.
  - Dependencias: F0-001.
  - Skill indicada: `frontend-design`, `blog-rewrite`.
  - Criterios de aceite: cada plano tem foco, caso de uso, preco conforme fonte de verdade e CTA claro.
  - Validacao: `npm run lint`, `npm run build`, revisar coerencia com business model.
  - Registro de execucao:

- [ ] F3-005 - Revisar consistencia de tom Lunar Day
  - Objetivo: garantir que a copy final pareca premium, direta e tecnica sem ficar generica.
  - Arquivos provaveis: `src/components/Home/*`, `content/*`.
  - Dependencias: F3-001, F3-002, F3-003, F3-004.
  - Skill indicada: `frontend-design`, `blog-seo-check`.
  - Criterios de aceite: copy revisada contra `docs/brand/softluna/*`; sem "transforme sua presenca digital" generico; sem promessa garantida de topo do Google.
  - Validacao: revisao manual pt-BR; smoke visual.
  - Registro de execucao:

## Fase 4 - FAQs estrategicas de conversao

Objetivo: quebrar objecoes comuns antes do contato comercial e melhorar FAQ schema.

### FAQs obrigatorias a cobrir

- Voces atendem empresas fora da sua cidade?
- Preciso de um site mesmo se eu ja tiver Instagram?
- Eu mesmo vou conseguir atualizar meu site?
- Quanto tempo demora para o meu site ficar pronto?
- Qual a diferenca entre uma Landing Page e um Site Completo?

### Tarefas

- [ ] F4-001 - Auditar FAQs existentes
  - Objetivo: comparar `content/faq/*.json` com as novas objecoes.
  - Arquivos provaveis: `content/faq/*.json`, `src/components/Home/FAQ.jsx`, `src/components/Admin/FAQSection.jsx`.
  - Dependencias: F0-004.
  - Skill indicada: `blog-seo-check`.
  - Criterios de aceite: lista do que manter, substituir, adicionar ou reordenar.
  - Validacao: leitura de conteudo atual; sem editar antes da decisao.
  - Registro de execucao:

- [ ] F4-002 - Adicionar FAQs estrategicas no CMS atual
  - Objetivo: criar ou atualizar entradas de FAQ preservando o Git-CMS.
  - Arquivos provaveis: `content/faq/*.json`.
  - Dependencias: F4-001.
  - Skill indicada: `blog-rewrite`, `blog-schema`.
  - Criterios de aceite: 5 perguntas publicadas, com respostas claras, pt-BR revisado e ordem comercial coerente.
  - Validacao: `npm run build`, conferir homepage e admin se aplicavel.
  - Registro de execucao:

- [ ] F4-003 - Validar FAQ schema
  - Objetivo: garantir que as novas perguntas alimentem JSON-LD corretamente.
  - Arquivos provaveis: `src/pages/index.jsx`, componente/helper de schema se existir ou for criado.
  - Dependencias: F4-002, F5-001.
  - Skill indicada: `blog-schema`.
  - Criterios de aceite: FAQPage schema valido para homepage e/ou paginas especificas.
  - Validacao: Schema Validator/Rich Results Test; `npm run build`.
  - Registro de execucao:

## Fase 5 - SEO estrutural e AEO

Objetivo: melhorar compreensao semantica por Google, AI Overviews, ChatGPT Search, Perplexity e outros mecanismos de resposta.

- [ ] F5-001 - Mapear schemas atuais
  - Objetivo: identificar JSON-LD ja existente e lacunas.
  - Arquivos provaveis: `src/pages/index.jsx`, `src/components`, `src/lib`.
  - Dependencias: F0-004.
  - Skill indicada: `blog-schema`.
  - Criterios de aceite: inventario de schemas atuais, campos faltantes e paginas sem schema.
  - Validacao: leitura de codigo e teste de pagina renderizada se necessario.
  - Registro de execucao:

- [ ] F5-002 - Implementar Organization/LocalBusiness base
  - Objetivo: definir entidade SoftLuna com nome, URL, area atendida, servicos, preco/faixa e canais.
  - Arquivos provaveis: `src/pages/index.jsx`, `content/global/site.json`, helper em `src/lib`.
  - Dependencias: F5-001, F0-001.
  - Skill indicada: `blog-schema`.
  - Criterios de aceite: JSON-LD valido, sem dados inventados, com area de atendimento Brasil quando confirmado.
  - Validacao: `npm run lint`, `npm run build`, Schema Validator.
  - Registro de execucao:

- [ ] F5-003 - Implementar BreadcrumbList para paginas internas
  - Objetivo: padronizar breadcrumbs em blog e money pages.
  - Arquivos provaveis: definidos em F1/F2.
  - Dependencias: F1-001, F2-001.
  - Skill indicada: `blog-schema`.
  - Criterios de aceite: cada pagina interna indexavel tem breadcrumb coerente.
  - Validacao: `npm run build`, Schema Validator.
  - Registro de execucao:

- [ ] F5-004 - Criar regras de conteudo citavel para AEO/GEO
  - Objetivo: documentar padrao de resposta direta, definicoes claras e blocos citaveis.
  - Arquivos provaveis: `ROADMAP-SEO.md` ou docs de negocio/editorial.
  - Dependencias: F2-001.
  - Skill indicada: `blog-strategy`, `blog-analyze`.
  - Criterios de aceite: todo artigo/pagina futura deve ter respostas diretas, perguntas H2/H3 quando fizer sentido, FAQ e entidades consistentes.
  - Validacao: aplicar regra em pelo menos um post/pagina piloto.
  - Registro de execucao:

- [ ] F5-005 - Criar checklist Google Business Profile
  - Objetivo: orientar SoftLuna e futuros clientes a alinhar site, GBP e SEO local.
  - Arquivos provaveis: `docs/business/softluna/operating-system.md` ou doc auxiliar.
  - Dependencias: nenhuma.
  - Skill indicada: `blog-strategy`, `modern-web-guidance`.
  - Criterios de aceite: checklist cobre nome, categoria, servicos, area atendida, telefone, site, UTM, fotos, posts, reviews e consistencia NAP.
  - Validacao: revisar contra documentacao atual do Google antes de publicar recomendacoes finais.
  - Registro de execucao:

## Fase 6 - Performance, mensuracao e validacao

Objetivo: garantir que crescimento organico venha acompanhado de performance real, rastreamento e validacao tecnica.

- [ ] F6-001 - Definir baseline de performance
  - Objetivo: medir estado atual antes das mudancas.
  - Arquivos provaveis: nenhum obrigatorio; relatorio pode ir para docs.
  - Dependencias: site local/producao acessivel.
  - Skill indicada: `modern-web-guidance`.
  - Criterios de aceite: registrar Lighthouse/PageSpeed mobile e desktop, LCP, CLS, INP/TBT quando disponivel e data da medicao.
  - Validacao: usar PageSpeed Insights/Lighthouse; nao alterar codigo.
  - Registro de execucao:

- [ ] F6-002 - Implementar tracking de conversoes
  - Objetivo: medir cliques em WhatsApp, CTAs de portfolio, money pages e blog.
  - Arquivos provaveis: `src/components`, `src/pages`, analytics existente.
  - Dependencias: F0-005.
  - Skill indicada: `tlc-spec-driven`, `modern-web-guidance`.
  - Criterios de aceite: eventos padronizados, sem duplicidade obvia e com parametros de origem.
  - Validacao: `npm run lint`, `npm run build`, smoke de cliques em dev.
  - Registro de execucao:

- [ ] F6-003 - Criar checklist de publicacao SEO
  - Objetivo: padronizar validacao antes de publicar pagina ou artigo.
  - Arquivos provaveis: `ROADMAP-SEO.md` ou docs de negocio.
  - Dependencias: F1-004, F2-001.
  - Skill indicada: `blog-seo-check`.
  - Criterios de aceite: checklist inclui title, meta, canonical, OG, schema, links internos, CTA, imagens, performance, revisao pt-BR e build.
  - Validacao: aplicar no piloto de money page e no primeiro artigo.
  - Registro de execucao:

- [ ] F6-004 - Criar rotina mensal de metricas
  - Objetivo: acompanhar impacto de SEO e conteudo.
  - Arquivos provaveis: docs de negocio ou planilha futura.
  - Dependencias: F6-002.
  - Skill indicada: `blog-strategy`, `blog-analyze`.
  - Criterios de aceite: definir metricas de trafego organico, leads WhatsApp, paginas indexadas, queries, CTR, posicao media, conversoes e mencoes por IA quando mensuravel.
  - Validacao: primeira medicao registrada apos 30 dias.
  - Registro de execucao:

## Fase 7 - Matriz, template e pendencias das money pages

Objetivo: manter dentro do roadmap a arquitetura consolidada das money pages, a matriz das 19 rotas e as pendencias necessarias antes de publicar os lotes F1-005 a F1-009.

### Template comum

As money pages usam JSON versionado em `content/money-pages/*.json`, leitura em build por `src/lib/content.js` e renderizacao pela rota dinamica `src/pages/[slug].jsx`.

Estrutura padrao:

1. Hero com H1 transacional, nicho, CTA de WhatsApp contextual e CTA secundario para planos.
2. Dores do nicho, sem promessas absolutas de ranking, receita, cura ou agenda cheia.
3. Solucao SoftLuna com arquitetura de pagina, canais de contato, SEO on-page e performance.
4. Beneficios objetivos para busca, entendimento e contato.
5. Processo de entrega.
6. Planos recomendados usando `content/pricing/*.json` como fonte de verdade.
7. Portfolio relacionado quando houver caso aderente.
8. FAQ especifica da pagina.
9. JSON-LD em `@graph` com Organization/LocalBusiness, Service, BreadcrumbList e FAQPage.

### Dados estruturados

O helper `src/lib/seoSchema.js` gera o schema das money pages com:

- `Organization` + `LocalBusiness` para a SoftLuna.
- `Service` para a oferta da pagina.
- `BreadcrumbList` para a URL interna.
- `FAQPage` quando a pagina tiver perguntas especificas.

Validacao externa pendente antes de publicacao definitiva: Rich Results Test ou Schema Validator.

### Pagina piloto

Rota piloto implementada:

- `/site-para-clinicas-medicas`

Justificativa: valida o template no nicho mais sensivel da lista, exigindo copy sobria, FAQ, CTA especifico, cautela com LGPD/CFM e ausencia de promessa absoluta.

Pesquisa rapida em 2026-06-19 indicou padroes recorrentes na SERP: agendamento online, WhatsApp, SEO local, paginas de especialidades/equipe, conteudo institucional e mencoes a LGPD/CFM. A copy da pagina piloto usa esses pontos como direcao editorial, sem depender de promessas de ranking.

### Matriz de keywords e intencao

As titles e metas abaixo sao provisorias. Antes de publicar cada rota em lote, revisar SERP/PAA atual e ajustar copy, FAQ e links internos.

| Rota | Keyword primaria | Intencao | Oferta | H1 proposto | Title provisoria | Meta provisoria | CTA WhatsApp |
|---|---|---|---|---|---|---|---|
| `/site-para-clinicas-medicas` | site para clinicas medicas | Contratar site para clinica | Site institucional completo | Site para clinicas medicas com estrutura para receber pacientes | Site para Clinicas Medicas \| SoftLuna | Site para clinicas medicas com especialidades, SEO local, WhatsApp, agendamento e base tecnica cuidada. | Quero criar um site para clinica medica. |
| `/site-para-dentistas-e-consultorios` | site para dentistas e consultorios | Contratar site odontologico | Site institucional completo | Site para dentistas e consultorios com agenda e autoridade local | Site para Dentistas e Consultorios \| SoftLuna | Site para dentistas com servicos, equipe, WhatsApp, SEO local e estrutura para novos conteudos. | Quero criar um site para consultorio odontologico. |
| `/site-para-clinicas-de-estetica` | site para clinicas de estetica | Contratar site para estetica | Site institucional completo | Site para clinicas de estetica com servicos claros e contato direto | Site para Clinicas de Estetica \| SoftLuna | Site para clinica de estetica com catalogo de servicos, fotos, WhatsApp, SEO local e performance mobile. | Quero criar um site para clinica de estetica. |
| `/site-para-psicologos` | site para psicologos | Contratar site profissional | Site institucional completo | Site para psicologos com apresentacao sobria e acolhedora | Site para Psicologos \| SoftLuna | Site para psicologos com abordagem profissional, pagina de atendimento, WhatsApp e estrutura para SEO local. | Quero criar um site para psicologia. |
| `/site-para-barbearias` | site para barbearias | Contratar site local | Landing page ou site institucional | Site para barbearias com agenda, estilo e busca local | Site para Barbearias \| SoftLuna | Site para barbearia com servicos, barbeiros, unidade, WhatsApp, agendamento e SEO local. | Quero criar um site para barbearia. |
| `/site-para-saloes-de-beleza` | site para saloes de beleza | Contratar site local | Site institucional completo | Site para saloes de beleza com servicos, equipe e agendamento | Site para Saloes de Beleza \| SoftLuna | Site para salao de beleza com servicos, equipe, fotos, WhatsApp, agendamento e SEO local. | Quero criar um site para salao de beleza. |
| `/site-para-tatuadores-e-estudios` | site para tatuadores e estudios | Contratar portfolio/site | Site institucional completo | Site para tatuadores e estudios com portfolio e contato direto | Site para Tatuadores e Estudios \| SoftLuna | Site para tatuador com portfolio, estilos, agenda, WhatsApp, SEO local e visual sob medida. | Quero criar um site para estudio de tatuagem. |
| `/site-para-advogados-e-escritorios` | site para advogados e escritorios | Contratar site juridico | Site institucional completo | Site para advogados e escritorios com autoridade e sobriedade | Site para Advogados e Escritorios \| SoftLuna | Site para escritorio de advocacia com areas de atuacao, perfil profissional, contato e SEO local. | Quero criar um site para escritorio de advocacia. |
| `/site-para-contabilidade` | site para contabilidade | Contratar site contabilidade | Site institucional completo | Site para contabilidade com servicos e captacao organizada | Site para Contabilidade \| SoftLuna | Site para escritorio de contabilidade com servicos, segmentos atendidos, WhatsApp e SEO local. | Quero criar um site para contabilidade. |
| `/site-para-arquitetos` | site para arquitetos | Contratar portfolio/site | Site institucional completo | Site para arquitetos com portfolio elegante e contato qualificado | Site para Arquitetos \| SoftLuna | Site para arquiteto com portfolio, servicos, processos, formulario, WhatsApp e performance mobile. | Quero criar um site para arquitetura. |
| `/site-para-corretores-e-imobiliarias` | site para corretores e imobiliarias | Contratar site imobiliario | Projeto personalizado | Site para corretores e imobiliarias com imoveis e atendimento direto | Site para Corretores e Imobiliarias \| SoftLuna | Site para imobiliaria ou corretor com vitrine de imoveis, contato, SEO local e base para integracoes. | Quero criar um site imobiliario. |
| `/site-para-lojas-de-varejo` | site para lojas de varejo | Contratar site comercial | Site institucional ou ecommerce | Site para lojas de varejo com catalogo, busca local e WhatsApp | Site para Lojas de Varejo \| SoftLuna | Site para loja de varejo com catalogo, endereco, WhatsApp, SEO local e caminho para ecommerce. | Quero criar um site para loja. |
| `/site-para-oficinas-mecanicas` | site para oficinas mecanicas | Contratar site local | Site institucional completo | Site para oficinas mecanicas com servicos e orcamentos pelo WhatsApp | Site para Oficinas Mecanicas \| SoftLuna | Site para oficina mecanica com servicos, localizacao, WhatsApp, prova de confianca e SEO local. | Quero criar um site para oficina mecanica. |
| `/site-para-restaurantes-e-deliveries` | site para restaurantes e deliveries | Contratar site restaurante | Site institucional ou landing page | Site para restaurantes e deliveries com cardapio e pedidos direcionados | Site para Restaurantes e Deliveries \| SoftLuna | Site para restaurante com cardapio, endereco, WhatsApp, delivery, SEO local e performance mobile. | Quero criar um site para restaurante. |
| `/site-para-petshops-e-veterinarias` | site para petshops e veterinarias | Contratar site local | Site institucional completo | Site para petshops e veterinarias com servicos e atendimento local | Site para Petshops e Veterinarias \| SoftLuna | Site para petshop ou veterinaria com servicos, equipe, unidade, WhatsApp e SEO local. | Quero criar um site para petshop ou veterinaria. |
| `/landing-page-para-gestores-de-trafego` | landing page para gestores de trafego | Contratar pagina para campanha | Landing page de conversao | Landing page para gestores de trafego com estrutura para campanhas | Landing Page para Gestores de Trafego \| SoftLuna | Landing page para campanhas com copy, velocidade, WhatsApp, eventos de conversao e SEO basico. | Quero uma landing page para campanha. |
| `/landing-page-para-infoprodutos` | landing page para infoprodutos | Contratar pagina de venda/captura | Landing page de conversao | Landing page para infoprodutos com oferta clara e checkout encaminhado | Landing Page para Infoprodutos \| SoftLuna | Landing page para infoproduto com narrativa de oferta, FAQ, prova social, CTA e performance mobile. | Quero uma landing page para infoproduto. |
| `/criacao-de-lojas-virtuais-ecommerce` | criacao de lojas virtuais ecommerce | Contratar ecommerce | Projeto personalizado | Criacao de lojas virtuais ecommerce com vitrine e operacao planejada | Criacao de Lojas Virtuais Ecommerce \| SoftLuna | Criacao de ecommerce com catalogo, paginas comerciais, checkout encaminhado, SEO tecnico e suporte. | Quero criar uma loja virtual. |
| `/sistemas-de-agendamento-online` | sistemas de agendamento online | Contratar sistema/agendamento | Projeto personalizado | Sistemas de agendamento online para organizar horarios e atendimentos | Sistemas de Agendamento Online \| SoftLuna | Sistema de agendamento online com fluxo sob medida, notificacoes, painel e integracoes quando necessario. | Quero criar um sistema de agendamento. |
| `/desenvolvimento-de-sistemas-sob-medida` | desenvolvimento de sistemas sob medida | Contratar sistema customizado | Projeto personalizado | Desenvolvimento de sistemas sob medida para operacoes que precisam escalar | Desenvolvimento de Sistemas Sob Medida \| SoftLuna | Desenvolvimento de sistema sob medida com descoberta tecnica, interface, banco de dados e integracoes. | Quero desenvolver um sistema sob medida. |

### Pendencias para lotes F1-005 a F1-009

- Executar pesquisa SERP/PAA por rota antes de publicar o lote correspondente.
- Criar JSON individual em `content/money-pages/`.
- Revisar FAQ especifica e links internos de cada nicho.
- Rodar `npm run lint`, `npm run build` e smoke mobile/desktop por lote.

### Tarefas

- [x] F7-001 - Consolidar template das money pages dentro do roadmap
  - Objetivo: registrar no `ROADMAP-SEO.md` a estrutura comum das money pages.
  - Arquivos provaveis: `ROADMAP-SEO.md`, `docs/business/softluna/money-pages-architecture.md`.
  - Dependencias: F1-001.
  - Skill indicada: nenhuma.
  - Criterios de aceite: template disponivel no roadmap sem depender apenas do doc auxiliar.
  - Validacao: revisao documental.
  - Registro de execucao: executado em 2026-06-19.

- [x] F7-002 - Consolidar matriz das 19 rotas dentro do roadmap
  - Objetivo: registrar keyword primaria, intencao, oferta, H1, title, meta e CTA para todas as rotas.
  - Arquivos provaveis: `ROADMAP-SEO.md`, `docs/business/softluna/money-pages-architecture.md`.
  - Dependencias: F1-002.
  - Skill indicada: nenhuma.
  - Criterios de aceite: 19 rotas documentadas no roadmap.
  - Validacao: revisao documental.
  - Registro de execucao: executado em 2026-06-19.

- [x] F7-003 - Consolidar pendencias dos lotes dentro do roadmap
  - Objetivo: deixar claro que F1-005 a F1-009 exigem pesquisa SERP/PAA, JSON por rota, FAQ especifica, links internos e validacao tecnica.
  - Arquivos provaveis: `ROADMAP-SEO.md`, `docs/business/softluna/money-pages-architecture.md`.
  - Dependencias: F1-004.
  - Skill indicada: nenhuma.
  - Criterios de aceite: pendencias visiveis na Fase 7.
  - Validacao: revisao documental.
  - Registro de execucao: executado em 2026-06-19.

## Checklist de aceite deste plano mestre

- [x] Contem checkboxes executaveis para todas as melhorias de `Melhorias SoftLuna.txt`.
- [x] Cada tarefa tem ID, objetivo, arquivos provaveis, dependencias, skill indicada, criterios de aceite e validacao.
- [x] Separa planejamento, pesquisa, criacao de conteudo, implementacao, validacao e publicacao.
- [x] Referencia os docs corretos do projeto e respeita o Git-CMS atual.
- [x] Inclui gates minimos de revisao pt-BR, SEO/schema, `npm run lint` e `npm run build` quando aplicavel.
- [x] Deixa claro que paginas, artigos e copy final exigem pesquisa atualizada antes de publicacao.

## Proxima execucao recomendada

1. Revisar/aprovar a money page piloto `/site-para-clinicas-medicas`.
2. Depois executar F1-005 a F1-009 em lotes, sempre com pesquisa SERP/PAA atual por rota antes de publicar copy final.
3. Em paralelo, executar F2-001 a F2-003 para preparar blog sem publicar artigos ainda.
4. So entao iniciar artigos, FAQs estrategicas, ajustes de homepage e rotina de metricas.
