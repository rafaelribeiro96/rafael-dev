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

### Passo 3: Fluxo de Autenticação Segura por Cookies (Sem Sessão de Estado)
1. **Login Endpoint (`/api/admin/login`)**:
   Valida o password contra a variável `ADMIN_PASSWORD`. Se correto, responde injetando o cookie:
   ```javascript
   res.setHeader(
     'Set-Cookie',
     'admin_session=authenticated; Path=/; HttpOnly; SameSite=Strict' + 
     (process.env.NODE_ENV === 'production' ? '; Secure' : '')
   );
   ```
2. **Check Endpoint (`/api/admin/check`)**:
   Lê as requisições de cookies para validação rápida no frontend.
3. **Logout Endpoint (`/api/admin/logout`)**:
   Invalida o cookie definindo a data de expiração no passado: `Expires=Thu, 01 Jan 1970 00:00:00 GMT`.
4. **Middleware Guard (`getServerSideProps`)**:
   Protege a página `/admin` redirecionando usuários não autorizados para `/admin/login`.

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

### ⚠️ Erros Comuns e Como Evitá-los
1. **Conflito de Scroll do Lenis (Scrollbar Travada)**:
   Se o projeto utilizar o Lenis globalmente, ele irá interceptar a rolagem da tela do admin (que é bloqueada com `overflow: hidden; height: 100vh`).
   *Correção*: No seu `_app.js`, desative a inicialização do Lenis caso `router.pathname.startsWith('/admin')`.
2. **Erro 500 na Vercel (Módulos não encontrados no require)**:
   Se o `outputFileTracing: false` estiver ativo no `next.config.js`, a Vercel não incluirá os arquivos do `node_modules` necessários na Lambda.
   *Correção*: Remova ou defina `outputFileTracing: true` no `next.config.js`.
3. **Importações Dinâmicas no Servidor**:
   Se usar imports dinâmicos (`await import('src/lib/github')`) dentro de `getServerSideProps` na Vercel, o runtime Node do serverless pode falhar ao resolver aliases absolutos como `src/...`.
   *Correção*: Use imports estáticos no topo do arquivo. O Next.js automaticamente remove importações usadas apenas no `getServerSideProps` da build cliente.
</process>
