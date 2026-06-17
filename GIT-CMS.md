# Git-CMS Architecture & Reference Manual

Este documento serve como referência de arquitetura para o **Git-CMS Serverless** implementado neste projeto. O sistema permite que o cliente edite todo o conteúdo do site através de um painel administrativo seguro (`/admin`), salvando as alterações diretamente no repositório do GitHub (via API REST) em produção, e no sistema de arquivos local (`fs`) em desenvolvimento, eliminando a necessidade de um banco de dados ou backend dedicado.

---

## 🗺️ Visão Geral da Arquitetura

O Git-CMS opera de forma híbrida e adaptativa:

```mermaid
graph TD
    A[Painel Admin UI /admin] --> B{Possui GITHUB_PAT?}
    B -- Não (Local Dev) --> C[Leitura/Escrita via fs/promises]
    B -- Sim (Produção Vercel) --> D[Leitura/Escrita via GitHub REST API]
    C --> E[Arquivos Locais em content/]
    D --> F[Repositório Master no GitHub]
    F --> G[Rebuild & Deploy Automático na Vercel]
```

- **Ambiente Local (Desenvolvimento)**: Lê e escreve arquivos JSON diretamente no diretório `content/` do computador usando a API do Node.js (`fs/promises`).
- **Ambiente de Produção (Vercel)**: Utiliza a API REST do GitHub para buscar os arquivos, atualizar seu conteúdo e commitar as alterações diretamente na branch principal (`master`), disparando um novo deploy automático da Vercel para atualizar o site público.

---

## 📂 Estrutura de Diretórios e Componentes

A estrutura de arquivos do Git-CMS está organizada da seguinte forma:

```
├── content/                    # Arquivos JSON de dados (flat-file database)
│   ├── global/
│   │   └── site.json           # SEO global, Headings e textos estáticos
│   ├── pricing/
│   │   └── plano-*.json        # Detalhes e recursos de cada plano
│   └── portfolio/
│   │   └── projeto-*.json      # Projetos do portfólio
│
├── src/
│   ├── lib/
│   │   └── github.js           # Cliente de API REST do GitHub com fallback para FS
│   │
│   ├── pages/
│   │   ├── admin.jsx           # Rota do Painel Admin (Container com Route Guard)
│   │   ├── admin/
│   │   │   └── login.jsx       # Interface visual de Login Administrativo
│   │   │
│   │   └── api/
│   │       ├── admin/
│   │       │   ├── login.js    # Injeta cookie HTTP-Only seguro
│   │       │   ├── check.js    # Valida sessão atual
│   │       │   └── logout.js   # Expirador de cookie
│   │       └── content/        # Endpoints de leitura/escrita do CMS
│   │           ├── global.js
│   │           ├── pricing.js
│   │           ├── pricing/[id].js
│   │           ├── portfolio.js
│   │           └── portfolio/[id].js
│   │
│   └── components/
│       └── Admin/              # Componentes isolados do Painel Admin (SOLID)
│           ├── ui.jsx          # Design Tokens (Dark Studio), Inputs primitivos e botões
│           ├── Sidebar.jsx     # Menu lateral e botão de publicar
│           ├── GlobalSEOSection.jsx # Edição de Textos Globais & SEO
│           ├── PricingSection.jsx   # Listagem e formulário de planos
│           ├── PortfolioSection.jsx # Grade de projetos e filtros
│           └── ProjectModal.jsx     # Modal de edição/criação de projetos com thumbnail preview
```

---

## 🔒 Fluxo de Autenticação Segura (Route Guard & Assinatura)

Para proteger o acesso ao painel e às APIs contra falsificação e ataques automatizados:

1. **Geração do Cookie de Sessão Criptográfico**:
   Ao digitar a senha correta (definida no servidor pela variável `ADMIN_PASSWORD`), a API `/api/admin/login` gera um token criptográfico no formato `expiresAt:signature` (assinado via HMAC SHA-256 no backend usando a chave derivada da senha) e injeta o cookie chamado `admin_session`:
   - `HttpOnly`: Impede acesso ao cookie via JavaScript do navegador (mitiga ataques XSS).
   - `SameSite=Strict`: Impede o envio do cookie em requisições cross-site (mitiga ataques CSRF).
   - `Secure`: Força o tráfego do cookie apenas sob HTTPS (ativo em produção).
   - `Path=/`: Válido para todo o domínio.

2. **Proteção de Força Bruta (Brute-Force & Lockout)**:
   O endpoint `/api/admin/login` possui um limite em memória de no máximo 5 tentativas de login por IP de cliente. Caso o limite seja excedido, o IP é bloqueado por 15 minutos (retornando HTTP 429). Além disso, cada tentativa incorreta introduz um atraso artificial de 1.5 segundos na resposta para desacelerar robôs.

3. **Middleware Guard na Rota (`getServerSideProps`)**:
   No arquivo `src/pages/admin.jsx`, a verificação de sessão ocorre no servidor antes da página ser renderizada chamando a validação de assinatura HMAC:
   ```javascript
   export async function getServerSideProps(ctx) {
     const { verifySessionFromRequest } = await import('src/lib/auth');
     const isAuthenticated = verifySessionFromRequest(ctx.req);

     if (!isAuthenticated) {
       return {
         redirect: {
           destination: '/admin/login',
           permanent: false
         }
       };
     }
     
     // Carrega os dados para o painel...
     return { props: { ... } };
   }
   ```

4. **Proteção nos Endpoints de API**:
   Todos os endpoints em `/api/content/*` e `/api/admin/*` validam a assinatura digital do cookie `admin_session` em todas as requisições de leitura/escrita. Requisições não autorizadas retornam `401 Unauthorized`.

---

## ⚙️ Funcionamento das Operações de Escrita via GitHub API

Para salvar ou excluir arquivos diretamente no GitHub através do servidor serverless, realizamos o seguinte fluxo:

1. **Obtenção do SHA do Arquivo**:
   O GitHub exige o hash SHA do arquivo atual antes de permitir qualquer alteração ou deleção. Fazer isso garante que não sobrescrevamos alterações concorrentes acidentalmente.
   - Chamamos a API de conteúdo do GitHub: `GET /repos/{owner}/{repo}/contents/{path}`.
   - Extraímos o campo `sha` da resposta.

2. **Commit e Envio de Dados**:
   - O conteúdo do arquivo JSON é serializado e codificado em **Base64**.
   - Chamamos a API do GitHub: `PUT /repos/{owner}/{repo}/contents/{path}` enviando o `sha`, o conteúdo em Base64 e uma mensagem de commit (ex: `chore(cms): update content`).
   - O GitHub cria o commit diretamente na branch (ex: `master`).

3. **Integração Serverless**:
   Implementado no arquivo [github.js](file:///c:/Users/rafaelRibeiro/Documents/Pessoal/Rafael%20Tech/src/lib/github.js):
   - `getFile(path)`: Retorna `{ content, sha }`.
   - `writeFile(path, content, message)`: Obtém o SHA atual (se existir) e envia o commit de escrita.
   - `writeBinaryFile(path, base64Content, message)`: Obtém o SHA atual e envia o commit de escrita binária (base64).
   - `deleteFile(path, message)`: Obtém o SHA e envia a requisição de remoção.

---

## 🖼️ Tratamento e Upload de Imagens do Dispositivo

Para permitir que o usuário faça o upload de fotos de seu próprio computador ou celular sem sobrecarregar o repositório Git com arquivos gigantes, implementamos uma pipeline de otimização no lado do cliente:

1. **Otimização no Cliente ([imageOptimizer.js](file:///c:/Users/rafaelRibeiro/Documents/Pessoal/Rafael%20Tech/src/lib/imageOptimizer.js))**:
   - Resolução máxima de largura/altura travada em `1200px` mantendo a proporção.
   - Compressão de qualidade em `82%` e conversão automática para formato **WebP** (com fallback automático para JPEG se o navegador não for compatível).
   - Sanitização de nome de arquivos (remove acentos, espaços e caracteres especiais) e adiciona um timestamp para evitar colisões no Git.

2. **Segurança no Endpoint ([upload.js](file:///c:/Users/rafaelRibeiro/Documents/Pessoal/Rafael%20Tech/src/pages/api/admin/upload.js))**:
   - Limitador rígido de tamanho: arquivos maiores que 1MB após compressão são rejeitados no backend.
   - Route guard de cookie de sessão criptográfico ativo.
   - Validação estrita por expressão regular allowlist (`/^[a-zA-Z0-9_-]+\.(jpg|jpeg|png|gif|webp|svg)$/i`) para mitigar ataques de Path Traversal (impedindo escrita fora da pasta `public/uploads`) e impedir a gravação de extensões executáveis maliciosas.

---

## 🛡️ Validação de Entradas & Prevenção de Vulnerabilidades

- **Validação de ID em Coleções:** Os arquivos criados ou modificados de forma dinâmica nas rotas `/api/content/portfolio` e `/api/content/pricing` (incluindo as rotas com parâmetro dinâmico `[id]`) validam o ID recebido contra a regex de allowlist `/^[a-zA-Z0-9_-]+$/` para banir qualquer tentativa de *directory/path traversal* (como uso de caracteres `../` para acessar/sobrescrever pastas do sistema).
- **Sanitização de Comando no Git:** A rota `/api/content/publish` filtra a mensagem de commit recebida para eliminar qualquer caractere de controle especial do terminal (`/[^a-zA-Z0-9\s\-_()[\]:.,]/g`), impedindo injeções de comandos no shell do servidor (command injection).

---

## 🎨 Princípios Visuais do Admin (Dark Studio Design)

Todo o layout do painel administrativo segue a estética **Dark Studio**:
- **Background Principal**: `#09101f` (azul profundo escuro).
- **Cards & Sidebar**: `#0f1828` e `#06c018` para criar profundidade visual.
- **Bordas finas translúcidas**: `1px solid rgba(255, 255, 255, 0.07)`.
- **Destaques em Degradê / Neon**: Tons de ciano (`#06b6d4`) e esmeralda (`#10b981`).
- **Nenhum Estilo Inline Ad-hoc**: Todos os botões, inputs, toggles e cabeçalhos devem ser importados do primitivo [ui.jsx](file:///c:/Users/rafaelRibeiro/Documents/Pessoal/Rafael%20Tech/src/components/Admin/ui.jsx) para manter a consistência da interface.
