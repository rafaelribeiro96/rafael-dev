---
name: git-cms
description: "Processo de criação de Git-CMS Serverless do zero, sincronização com GitHub API e UI Dark Studio componentizada"
---

<objective>
Este skill ensina como projetar e construir um Git-CMS Serverless completo do zero em Next.js (Pages Router ou App Router). Ele serve de guia prático para criar painéis administrativos que gerenciam conteúdos armazenados em arquivos JSON locais (flat-files) e os sincronizam diretamente com repositórios GitHub, eliminando custos de banco de dados e de hospedagem backend.
</objective>

<execution_context>
Referência de arquitetura: [GIT-CMS.md](file:///c:/Users/rafaelRibeiro/Documents/Pessoal/Rafael%20Tech/GIT-CMS.md)
</execution_context>

<process>

### Passo 1: Definição dos Dados (Flat-File DB)
Armazene os dados estruturados do site em arquivos JSON dentro da pasta `content/` na raiz do projeto:
- Objetos únicos (ex: `content/global/site.json`) para SEO, headlines, links estáticos.
- Coleções indexadas (ex: `content/pricing/plano-1.json`, `content/portfolio/projeto-a.json`) para itens dinâmicos.

### Passo 2: O Cliente de Integração com o GitHub (`src/lib/github.js`)
Crie um helper modular para lidar com as chamadas da API REST do GitHub.
O cliente deve suportar:
1. **Verificação de Ambiente (`isGitHubConfigured`)**: Verifica se `GITHUB_PAT` (Personal Access Token) está setado.
2. **Fallback Local**: Se o token não estiver presente, lê/escreve de forma síncrona/assíncrona no sistema de arquivos local (`fs/promises`).
3. **Fluxo de Escrita no GitHub (Essencial para Produção)**:
   - Fazer um request `GET` para obter o hash SHA do arquivo atual: `https://api.github.com/repos/{repo}/contents/{path}`.
   - Enviar um request `PUT` contendo a mensagem de commit, o conteúdo em Base64 e o hash `sha`.

Exemplo de implementação base do método de escrita:
```javascript
export async function writeFile(filePath, data, commitMessage = 'chore(cms): update') {
  if (!isGitHubConfigured()) {
    // Escrita Local
    const fs = require('fs/promises');
    const path = require('path');
    const fullPath = path.join(process.cwd(), filePath);
    await fs.mkdir(path.dirname(fullPath), { recursive: true });
    await fs.writeFile(fullPath, JSON.stringify(data, null, 2), 'utf-8');
    return;
  }
  // Escrita em Produção via API REST do GitHub
  const contentBase64 = Buffer.from(JSON.stringify(data, null, 2)).toString('base64');
  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_PAT}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  };

  // 1. Tentar obter o SHA do arquivo existente
  let sha;
  try {
    const res = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPO}/contents/${filePath}?ref=${process.env.GITHUB_BRANCH}`, { headers });
    if (res.ok) {
      const fileInfo = await res.json();
      sha = fileInfo.sha;
    }
  } catch (e) {
    console.warn('Arquivo novo ou inexistente:', e);
  }

  // 2. Commitar o novo arquivo
  const body = {
    message: commitMessage,
    content: contentBase64,
    branch: process.env.GITHUB_BRANCH,
    ...(sha && { sha })
  };

  const putRes = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPO}/contents/${filePath}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body)
  });
  if (!putRes.ok) throw new Error(`Erro ao salvar no GitHub: ${putRes.statusText}`);
}
```

### Passo 3: Fluxo de Autenticação Segura e Resiliente (Assinatura Criptográfica)
1. **Helper de Autenticação (`src/lib/auth.js`)**:
   Nunca utilize cookies de autenticação estáticos e expostos. Use assinaturas criptográficas baseadas em HMAC SHA-256:
   ```javascript
   import crypto from 'crypto';

   // Chave secreta derivada do ADMIN_PASSWORD
   function getSessionSecret() {
     const password = process.env.ADMIN_PASSWORD || 'admin123';
     return crypto.createHash('sha256').update(password).digest();
   }

   // Criação do Token: expiração de 24h + assinatura HMAC
   export function createSessionToken() {
     const expiresAt = Date.now() + 24 * 60 * 60 * 1000;
     const payload = `authenticated:${expiresAt}`;
     const secret = getSessionSecret();
     const signature = crypto.createHmac('sha256', secret).update(payload).digest('hex');
     return `${expiresAt}:${signature}`;
   }

   // Validação segura com comparação em tempo constante (timingSafeEqual)
   export function verifySessionToken(token) {
     if (!token || typeof token !== 'string') return false;
     const [expiresAtStr, signature] = token.split(':');
     const expiresAt = parseInt(expiresAtStr, 10);
     if (isNaN(expiresAt) || Date.now() > expiresAt) return false;

     const payload = `authenticated:${expiresAt}`;
     const secret = getSessionSecret();
     const expectedSignature = crypto.createHmac('sha256', secret).update(payload).digest('hex');
     
     try {
       return crypto.timingSafeEqual(Buffer.from(signature, 'hex'), Buffer.from(expectedSignature, 'hex'));
     } catch {
       return false;
     }
   }
   ```

2. **Login Endpoint com Proteção contra Brute Force (`/api/admin/login`)**:
   Limite as tentativas falhas por IP (ex: máx 5 tentativas a cada 15 min em memória) e adicione um delay artificial de `1.5s` na resposta de senhas incorretas para mitigar scripts automatizados:
   ```javascript
   const loginAttempts = new Map();
   // Dentro do handler:
   // 1. Verificar se o IP do cliente está bloqueado
   // 2. Se a senha estiver incorreta, registrar tentativa falha, bloquear se atingir limite, atrasar resposta por 1.5s e retornar erro.
   ```

3. **Check/Logout Endpoints & Middleware Guard**:
   - Utilize a validação do token assinado extraído do header Cookie em todas as rotas e em `getServerSideProps` para o Route Guard.
   - O logout invalida o cookie definindo a expiração no passado.

### Passo 4: Construindo o Layout Componentizado Premium (Dark Studio)
Evite arquivos massivos. Crie componentes específicos e reutilizáveis na pasta `src/components/Admin/`:
1. **Design Tokens & UI Primitives (`ui.jsx`)**:
   Centralize os estilos do tema do painel (Zinc/Slate + Neon accents) em primitivos como `Input`, `Textarea`, `Toggle`, `DynamicList` (para listas dinâmicas como arrays de features), e `SaveBtn`.
2. **Navegação (`Sidebar.jsx`)**:
   Menu lateral com controle de abas de conteúdo.
3. **Seções de Edição Isoladas**:
   - `GlobalSEOSection.jsx`: Inputs simples para strings estruturadas de textos.
   - `PricingSection.jsx`: Master-Detail com barra lateral contendo os itens cadastrados e um formulário dinâmico.
   - `PortfolioSection.jsx`: Grade visual dos projetos com filtros e modal de inserção com visualizador de link de imagem ao vivo (thumbnail).

### Passo 5: Pipeline de Upload e Otimização de Imagens
Para suportar upload de fotos do dispositivo sem inchar o repositório Git com arquivos pesados:
1. **Otimização Client-side com Canvas (`src/lib/imageOptimizer.js`)**:
   Carregue o arquivo de imagem em um canvas do navegador, redimensione para um limite máximo (ex: 1200px) e exporte como `image/webp` com qualidade `0.82`. Retorne os dados codificados em Base64 e o nome do arquivo sanitizado.
2. **Salvamento Binário no GitHub API (`src/lib/github.js`)**:
   Implemente a função `writeBinaryFile` no cliente do GitHub para enviar o payload base64 diretamente via chamada `PUT` para a API de conteúdos do GitHub.
3. **Endpoint Seguro de Upload (`src/pages/api/admin/upload.js`)**:
   Valide a sessão administrativa e salve o arquivo base64 recebido (em `public/uploads/`) usando `writeBinaryFile` em produção ou `fs/promises` em desenvolvimento local.
4. **Formulário de Entrada (`ProjectModal.jsx`)**:
   Acrescente um input oculto `<input type="file" accept="image/*" />` e um botão customizado. Execute a otimização no `onChange` e faça o POST para a rota de upload. Defina o link resultante no campo de imagem do formulário.

### ⚠️ Erros Comuns e Boas Práticas de Segurança
1. **Directory/Path Traversal em Flat-Files**:
   Ao salvar ou ler arquivos dinâmicos (como coleções do portfólio) usando caminhos compostos por parâmetros recebidos da requisição (ex: `req.query.id`), sempre valide o parâmetro com uma regex restrita `/^[a-zA-Z0-9_-]+$/` para evitar injeções como `../../`.
2. **Upload de Extensões Arbitrárias**:
   Nunca use apenas exclusão ou listas negras na sanitização de uploads. Enforce validação de nome de arquivo contra uma allowlist estrita baseada em extensões permitidas de imagem (ex: `/^[a-zA-Z0-9_-]+\.(jpg|jpeg|png|gif|webp|svg)$/i`).
3. **Injeção de Comando no Git**:
   Caso chame `git commit` via subprocesso do Node.js (`exec`), garanta que a mensagem recebida pelo usuário passe por uma sanitização estrita para remover caracteres de controle de shell (ex: crases, ponto-e-vírgula, cifrões, etc.), permitindo apenas caracteres seguros (`/[^a-zA-Z0-9\s\-_()[\]:.,]/g`).
4. **Conflito de Scroll do Lenis (Scrollbar Travada)**:
   Se o projeto utilizar o Lenis globalmente, ele irá interceptar a rolagem da tela do admin (que é bloqueada com `overflow: hidden; height: 100vh`).
   *Correção*: No seu `_app.js`, desative a inicialização do Lenis caso `router.pathname.startsWith('/admin')`.
5. **Erro 500 na Vercel (Módulos não encontrados no require)**:
   Se o `outputFileTracing: false` estiver ativo no `next.config.js`, a Vercel não incluirá os arquivos do `node_modules` necessários na Lambda.
   *Correção*: Remova ou defina `outputFileTracing: true` no `next.config.js`.
6. **Importações Dinâmicas no Servidor**:
   Se usar imports dinâmicos (`await import('src/lib/github')`) dentro de `getServerSideProps` na Vercel, o runtime Node do serverless pode falhar ao resolver aliases absolutos como `src/...`.
   *Correção*: Use imports estáticos no topo do arquivo. O Next.js automaticamente remove importações usadas apenas no `getServerSideProps` da build cliente.
</process>
