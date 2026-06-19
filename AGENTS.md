# AGENTS.md

Instrucoes para Codex e outros agentes ao trabalhar neste repositorio.

## Bootstrap minimo de contexto

Ao iniciar uma nova conversa ou tarefa neste projeto, leia primeiro, nesta ordem:

1. `.specs/project/PROJECT.md` - visao, escopo e objetivo da SoftLuna.
2. `.specs/project/STATE.md` - decisoes recentes, blockers, aprendizados e pendencias.
3. `.specs/codebase/STRUCTURE.md` - onde cada coisa vive.
4. `.specs/codebase/ARCHITECTURE.md` - como o site, admin e Git-CMS funcionam.

Depois leia sob demanda:

- `.specs/project/ROADMAP.md` para priorizacao e proximos passos.
- `.specs/codebase/STACK.md` para stack e dependencias.
- `.specs/codebase/INTEGRATIONS.md` para GitHub, Vercel, dominio, WhatsApp e integracoes futuras.
- `.specs/codebase/CONCERNS.md` antes de mexer em auth, CMS, pricing, deploy ou arquitetura.
- `.specs/codebase/TESTING.md` antes de implementar ou validar mudancas.
- `docs/business/softluna/business-model.md` para oferta, precificacao, posicionamento e modelo comercial.
- `docs/business/softluna/operating-system.md` para fluxo operacional, briefing, QA e prospeccao.
- `docs/brand/softluna/social-style-guide.md` para redes sociais, imagens geradas por IA e tom visual.
- `docs/brand/softluna/softluna-design-system.md` para tokens e sistema visual tecnico.
- `GIT-CMS.md` quando a tarefa envolver admin, conteudo editavel ou persistencia via GitHub.

Evite reler PDFs grandes se os pontos necessarios ja estiverem consolidados nos docs acima.

## Resumo do projeto

SoftLuna e um estudio de engenharia web premium/acessivel para criar sites rapidos, elegantes e editaveis para negocios locais e prestadores de servico.

O repositorio serve para duas coisas:

- desenvolver o site publico da SoftLuna;
- manter a documentacao do negocio, marca, oferta, operacao e arquitetura para orientar decisoes futuras.

## Arquitetura atual

- Next.js 14 Pages Router em `src/pages`.
- Homepage em `src/pages/index.jsx`.
- Secoes publicas em `src/components/Home/*`.
- Conteudo editavel em JSON dentro de `content/`.
- Admin em `src/pages/admin.jsx` e `src/components/Admin/*`.
- APIs em `src/pages/api/*`.
- Auth admin em `src/lib/auth.js`.
- Persistencia Git-CMS em `src/lib/github.js`.
- Leitura publica de conteudo em `src/lib/content.js`.
- Design tokens da SoftLuna em `docs/brand/softluna`.

Importante: o codigo atual usa um Git-CMS customizado. Keystatic/TinaCMS aparecem como direcao possivel no plano de negocio, mas nao estao implementados neste repositorio.

## Regras de trabalho

- Preserve comportamento existente salvo pedido explicito.
- Nao faca commit ou push sem pedido explicito.
- Antes de mudancas de UI, confira os guias de marca em `docs/brand/softluna`.
- Antes de mudancas de oferta, precos ou copy comercial, confira `docs/business/softluna`.
- Antes de mudancas em CMS/admin/auth, confira `GIT-CMS.md` e `.specs/codebase/CONCERNS.md`.
- Para mudancas de comportamento, inclua testes quando houver infraestrutura; hoje o projeto ainda nao tem runner de testes configurado.
- No minimo rode `npm run lint` apos alteracoes em JS/React.
- Rode `npm run build` antes de considerar pronta qualquer alteracao que afete build, paginas, rotas API, Tailwind ou conteudo carregado no build.

## Preferencias de economia de contexto

- Evitar `git diff` completo quando `git diff --stat` ou `git status --short` resolve.
- Usar `rg`/`rg --files` para localizar codigo e docs.
- Nao reler arquivos grandes/PDFs quando a informacao ja estiver extraida em `.specs/` ou `docs/`.
- Evitar screenshots longos se inspecao DOM/CSS ou teste de build/lint for suficiente.
- Ler apenas a skill indispensavel para o turno.
- Ao explorar, amostrar arquivos representativos em vez de carregar o projeto inteiro.

## Pontos de atencao conhecidos

- `ADMIN_PASSWORD` tem fallback inseguro para `admin123`; corrigir antes de producao real.
- Ha diferenca entre precos atuais em `content/pricing/*.json` e os precos estrategicos do plano de negocio.
- O projeto tem contexto atual de Vercel, mas o plano de negocio aponta Cloudflare Pages como alvo estrategico para sites comerciais estaticos.
- Existem arquivos/servicos legados apontando para `NEXT_PUBLIC_API_URL`; confirme uso real antes de reaproveitar.
- O README ainda parece template de create-next-app e pode ficar desatualizado frente aos specs.
