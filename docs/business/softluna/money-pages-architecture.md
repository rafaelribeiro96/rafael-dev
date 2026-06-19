# Arquitetura SEO e Money Pages

Execucao: 2026-06-19

## Template comum

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

## Dados estruturados

O helper `src/lib/seoSchema.js` gera o schema das money pages com:

- `Organization` + `LocalBusiness` para a SoftLuna.
- `Service` para a oferta da pagina.
- `BreadcrumbList` para a URL interna.
- `FAQPage` quando a pagina tiver perguntas especificas.

Validacao externa pendente antes de publicacao definitiva: Rich Results Test ou Schema Validator.

## Pagina piloto

Rota piloto implementada:

- `/site-para-clinicas-medicas`

Justificativa: valida o template no nicho mais sensivel da lista, exigindo copy sobria, FAQ, CTA especifico, cautela com LGPD/CFM e ausencia de promessa absoluta.

Pesquisa rapida em 2026-06-19 indicou padroes recorrentes na SERP: agendamento online, WhatsApp, SEO local, paginas de especialidades/equipe, conteudo institucional e mencoes a LGPD/CFM. A copy da pagina piloto usa esses pontos como direcao editorial, sem depender de promessas de ranking.

## Matriz de keywords e intencao

As titles e metas abaixo sao provisorias. Antes de publicar cada rota em lote, revisar SERP/PAA atual e ajustar copy, FAQ e links internos.

| Rota                                      | Keyword primaria                       | Intencao                          | Oferta                             | H1 proposto                                                                | Title provisoria                                   | Meta provisoria                                                                                              | CTA WhatsApp                                       |
| ----------------------------------------- | -------------------------------------- | --------------------------------- | ---------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| `/site-para-clinicas-medicas`             | site para clinicas medicas             | Contratar site para clinica       | Site institucional completo        | Site para clinicas medicas com estrutura para receber pacientes            | Site para Clinicas Medicas \| SoftLuna             | Site para clinicas medicas com especialidades, SEO local, WhatsApp, agendamento e base tecnica cuidada.      | Quero criar um site para clinica medica.           |
| `/site-para-dentistas-e-consultorios`     | site para dentistas e consultorios     | Contratar site odontologico       | Site institucional completo        | Site para dentistas e consultorios com agenda e autoridade local           | Site para Dentistas e Consultorios \| SoftLuna     | Site para dentistas com servicos, equipe, WhatsApp, SEO local e estrutura para novos conteudos.              | Quero criar um site para consultorio odontologico. |
| `/site-para-clinicas-de-estetica`         | site para clinicas de estetica         | Contratar site para estetica      | Site institucional completo        | Site para clinicas de estetica com servicos claros e contato direto        | Site para Clinicas de Estetica \| SoftLuna         | Site para clinica de estetica com catalogo de servicos, fotos, WhatsApp, SEO local e performance mobile.     | Quero criar um site para clinica de estetica.      |
| `/site-para-psicologos`                   | site para psicologos                   | Contratar site profissional       | Site institucional completo        | Site para psicologos com apresentacao sobria e acolhedora                  | Site para Psicologos \| SoftLuna                   | Site para psicologos com abordagem profissional, pagina de atendimento, WhatsApp e estrutura para SEO local. | Quero criar um site para psicologia.               |
| `/site-para-barbearias`                   | site para barbearias                   | Contratar site local              | Landing page ou site institucional | Site para barbearias com agenda, estilo e busca local                      | Site para Barbearias \| SoftLuna                   | Site para barbearia com servicos, barbeiros, unidade, WhatsApp, agendamento e SEO local.                     | Quero criar um site para barbearia.                |
| `/site-para-saloes-de-beleza`             | site para saloes de beleza             | Contratar site local              | Site institucional completo        | Site para saloes de beleza com servicos, equipe e agendamento              | Site para Saloes de Beleza \| SoftLuna             | Site para salao de beleza com servicos, equipe, fotos, WhatsApp, agendamento e SEO local.                    | Quero criar um site para salao de beleza.          |
| `/site-para-tatuadores-e-estudios`        | site para tatuadores e estudios        | Contratar portfolio/site          | Site institucional completo        | Site para tatuadores e estudios com portfolio e contato direto             | Site para Tatuadores e Estudios \| SoftLuna        | Site para tatuador com portfolio, estilos, agenda, WhatsApp, SEO local e visual sob medida.                  | Quero criar um site para estudio de tatuagem.      |
| `/site-para-advogados-e-escritorios`      | site para advogados e escritorios      | Contratar site juridico           | Site institucional completo        | Site para advogados e escritorios com autoridade e sobriedade              | Site para Advogados e Escritorios \| SoftLuna      | Site para escritorio de advocacia com areas de atuacao, perfil profissional, contato e SEO local.            | Quero criar um site para escritorio de advocacia.  |
| `/site-para-contabilidade`                | site para contabilidade                | Contratar site contabilidade      | Site institucional completo        | Site para contabilidade com servicos e captacao organizada                 | Site para Contabilidade \| SoftLuna                | Site para escritorio de contabilidade com servicos, segmentos atendidos, WhatsApp e SEO local.               | Quero criar um site para contabilidade.            |
| `/site-para-arquitetos`                   | site para arquitetos                   | Contratar portfolio/site          | Site institucional completo        | Site para arquitetos com portfolio elegante e contato qualificado          | Site para Arquitetos \| SoftLuna                   | Site para arquiteto com portfolio, servicos, processos, formulario, WhatsApp e performance mobile.           | Quero criar um site para arquitetura.              |
| `/site-para-corretores-e-imobiliarias`    | site para corretores e imobiliarias    | Contratar site imobiliario        | Projeto personalizado              | Site para corretores e imobiliarias com imoveis e atendimento direto       | Site para Corretores e Imobiliarias \| SoftLuna    | Site para imobiliaria ou corretor com vitrine de imoveis, contato, SEO local e base para integracoes.        | Quero criar um site imobiliario.                   |
| `/site-para-lojas-de-varejo`              | site para lojas de varejo              | Contratar site comercial          | Site institucional ou ecommerce    | Site para lojas de varejo com catalogo, busca local e WhatsApp             | Site para Lojas de Varejo \| SoftLuna              | Site para loja de varejo com catalogo, endereco, WhatsApp, SEO local e caminho para ecommerce.               | Quero criar um site para loja.                     |
| `/site-para-oficinas-mecanicas`           | site para oficinas mecanicas           | Contratar site local              | Site institucional completo        | Site para oficinas mecanicas com servicos e orcamentos pelo WhatsApp       | Site para Oficinas Mecanicas \| SoftLuna           | Site para oficina mecanica com servicos, localizacao, WhatsApp, prova de confianca e SEO local.              | Quero criar um site para oficina mecanica.         |
| `/site-para-restaurantes-e-deliveries`    | site para restaurantes e deliveries    | Contratar site restaurante        | Site institucional ou landing page | Site para restaurantes e deliveries com cardapio e pedidos direcionados    | Site para Restaurantes e Deliveries \| SoftLuna    | Site para restaurante com cardapio, endereco, WhatsApp, delivery, SEO local e performance mobile.            | Quero criar um site para restaurante.              |
| `/site-para-petshops-e-veterinarias`      | site para petshops e veterinarias      | Contratar site local              | Site institucional completo        | Site para petshops e veterinarias com servicos e atendimento local         | Site para Petshops e Veterinarias \| SoftLuna      | Site para petshop ou veterinaria com servicos, equipe, unidade, WhatsApp e SEO local.                        | Quero criar um site para petshop ou veterinaria.   |
| `/landing-page-para-gestores-de-trafego`  | landing page para gestores de trafego  | Contratar pagina para campanha    | Landing page de conversao          | Landing page para gestores de trafego com estrutura para campanhas         | Landing Page para Gestores de Trafego \| SoftLuna  | Landing page para campanhas com copy, velocidade, WhatsApp, eventos de conversao e SEO basico.               | Quero uma landing page para campanha.              |
| `/landing-page-para-infoprodutos`         | landing page para infoprodutos         | Contratar pagina de venda/captura | Landing page de conversao          | Landing page para infoprodutos com oferta clara e checkout encaminhado     | Landing Page para Infoprodutos \| SoftLuna         | Landing page para infoproduto com narrativa de oferta, FAQ, prova social, CTA e performance mobile.          | Quero uma landing page para infoproduto.           |
| `/criacao-de-lojas-virtuais-ecommerce`    | criacao de lojas virtuais ecommerce    | Contratar ecommerce               | Projeto personalizado              | Criacao de lojas virtuais ecommerce com vitrine e operacao planejada       | Criacao de Lojas Virtuais Ecommerce \| SoftLuna    | Criacao de ecommerce com catalogo, paginas comerciais, checkout encaminhado, SEO tecnico e suporte.          | Quero criar uma loja virtual.                      |
| `/sistemas-de-agendamento-online`         | sistemas de agendamento online         | Contratar sistema/agendamento     | Projeto personalizado              | Sistemas de agendamento online para organizar horarios e atendimentos      | Sistemas de Agendamento Online \| SoftLuna         | Sistema de agendamento online com fluxo sob medida, notificacoes, painel e integracoes quando necessario.    | Quero criar um sistema de agendamento.             |
| `/desenvolvimento-de-sistemas-sob-medida` | desenvolvimento de sistemas sob medida | Contratar sistema customizado     | Projeto personalizado              | Desenvolvimento de sistemas sob medida para operacoes que precisam escalar | Desenvolvimento de Sistemas Sob Medida \| SoftLuna | Desenvolvimento de sistema sob medida com descoberta tecnica, interface, banco de dados e integracoes.       | Quero desenvolver um sistema sob medida.           |

## Pendencias para lotes F1-005 a F1-009

- Executar pesquisa SERP/PAA por rota antes de publicar o lote correspondente.
- Criar JSON individual em `content/money-pages/`.
- Revisar FAQ especifica e links internos de cada nicho.
- Rodar `npm run lint`, `npm run build` e smoke mobile/desktop por lote.
