import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: `${API_URL}/api/posts`
});

function handleRequestError(error) {
  console.error('API request error:', error);
  throw error;
}

const MOCK_POSTS = [
  {
    _id: '1',
    title: 'Como Acelerar seu Site para um Carregamento Ultra-Rápido',
    link: 'como-acelerar-seu-site',
    description:
      'A velocidade de carregamento é o fator principal para manter clientes em sua página. Conheça as técnicas modernas que garantem desempenho extremo.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCxqhiPNbO1I8fRGMzja8pOWWqcwtqlSQxMAPC8idHpi8pe1LbT3XUGOWNNRBLwWJeDXHzNq4JoYWERXaUWnxe6sF6wYrqThniwn1-IDM4vDXTQj0BAUPR_lM-SGiGxv9RcUncaMVrcpVSn9z6UbpH-6JCAGIKsZoYEMlv8n7YyzIOMj3F62_Yct5g_PnDsydlh0Xzl0ftO_iJ86gU9ZNskoY4HF4kgx2RNXrNhozdmGzGJ9VEf4UyafC9Q6U0teEgK0oYGo4DdB2fr',
    content: `
      <p>Você sabia que mais de 50% dos visitantes abandonam um site se ele demorar mais de 3 segundos para carregar? Na economia digital de hoje, velocidade não é apenas conveniência — é conversão.</p>
      <br/>
      <h2 style="font-size: 20px; font-weight: bold; color: #4cd7f6; margin-top: 20px; margin-bottom: 10px;">Por que os sites ficam lentos?</h2>
      <p>A maioria dos sites tradicionais (como WordPress mal otimizados) carrega dezenas de scripts desnecessários, imagens pesadas e faz consultas lentas ao banco de dados cada vez que um usuário entra na página.</p>
      <br/>
      <h2 style="font-size: 20px; font-weight: bold; color: #4cd7f6; margin-top: 20px; margin-bottom: 10px;">A Solução: Edge-First e Código Limpo</h2>
      <p>Ao utilizar tecnologias modernas como Next.js com renderização estática e CDN na borda (Edge CDNs), o site já está pré-renderizado e é entregue instantaneamente ao visitante a partir do servidor mais próximo dele. O resultado é um carregamento ultra-rápido e excelente pontuação no Google PageSpeed Insights.</p>
    `,
    status: 'publicado'
  },
  {
    _id: '2',
    title: 'A Importância do Google Meu Negócio para Empresas Locais',
    link: 'importancia-do-google-meu-negocio',
    description:
      'Saiba como o posicionamento local pode atrair dezenas de novos clientes diariamente sem gastar nada com anúncios pagos.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-iEpo0UQhz37g5XL4MLHc0zXqJ3sa1M3LvEMHSrYdOiq1N_R_kWQwdJ6HSi04QY5HOlupKJljgPnLwTtdWNboW5Pn_DKHmnhqWespAA-1jjOWmtA8ayRtuQXYZZH-Wl8-NK6ehhYRYayUN7Sc8HBHi475OdP318E6F0pdlWBtyG38GG8w0BaIP0oo-JANEdGk2bkeuHPdAU2yY4Iuiq7Grc9d8k9HcYXlB8h9nL5K9XuHe7R3wHKVMD3br9SGMQVDLf1Eh6VLlKPh',
    content: `
      <p>Se você tem um consultório, escritório ou comércio local e não está no topo do Google Maps, você está perdendo clientes ativos para os concorrentes.</p>
      <br/>
      <h2 style="font-size: 20px; font-weight: bold; color: #4cd7f6; margin-top: 20px; margin-bottom: 10px;">O que é o Google Meu Negócio?</h2>
      <p>É a ferramenta oficial do Google que exibe o perfil de empresas locais quando alguém pesquisa por serviços próximos (ex: 'dentista em São Paulo' ou 'advogado perto de mim').</p>
      <br/>
      <h2 style="font-size: 20px; font-weight: bold; color: #4cd7f6; margin-top: 20px; margin-bottom: 10px;">Otimização para Conversão</h2>
      <p>Ter apenas o perfil criado não basta. É necessário otimizar imagens, descrições com palavras-chave corretas, responder a avaliações de forma consistente e integrar o perfil com um site rápido. Um site institucional otimizado impulsiona seu ranking local de forma drástica.</p>
    `,
    status: 'publicado'
  },
  {
    _id: '3',
    title: 'Otimização para AI Search: O Novo SEO',
    link: 'otimizacao-para-ai-search',
    description:
      'Entenda o que é o Search Generative Experience (SGE) e como posicionar sua marca nas respostas diretas da Inteligência Artificial.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-iEpo0UQhz37g5XL4MLHc0zXqJ3sa1M3LvEMHSrYdOiq1N_R_kWQwdJ6HSi04QY5HOlupKJljgPnLwTtdWNboW5Pn_DKHmnhqWespAA-1jjOWmtA8ayRtuQXYZZH-Wl8-NK6ehhYRYayUN7Sc8HBHi475OdP318E6F0pdlWBtyG38GG8w0BaIP0oo-JANEdGk2bkeuHPdAU2yY4Iuiq7Grc9d8k9HcYXlB8h9nL5K9XuHe7R3wHKVMD3br9SGMQVDLf1Eh6VLlKPh',
    content: `
      <p>O Google Search está mudando. Com a IA integrada (Search Generative Experience), os usuários agora recebem respostas em texto geradas por IA resumindo as melhores opções da web.</p>
      <br/>
      <h2 style="font-size: 20px; font-weight: bold; color: #4cd7f6; margin-top: 20px; margin-bottom: 10px;">Como a IA escolhe quais sites referenciar?</h2>
      <p>As ferramentas de busca baseadas em IA (Google Gemini, OpenAI Search, Perplexity) priorizam fontes de alta autoridade, com dados estruturados corretos, sites ultrarrápidos e conteúdo de valor real.</p>
      <br/>
      <h2 style="font-size: 20px; font-weight: bold; color: #4cd7f6; margin-top: 20px; margin-bottom: 10px;">Fique pronto para a nova era da busca</h2>
      <p>Na Rafael Tech, desenvolvemos toda a arquitetura semântica e estrutural necessária (schema markup) para que os robôs de inteligência artificial compreendam perfeitamente os serviços da sua empresa e a destaquem como recomendação principal.</p>
    `,
    status: 'publicado'
  }
];

export async function getPosts() {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.warn('API Blog offline. Utilizando dados locais simulados.', error);
    return MOCK_POSTS;
  }
}

export async function getPost(postId) {
  try {
    const response = await api.get(`/${postId}`);
    return response.data;
  } catch (error) {
    console.warn('API Blog offline. Utilizando dados locais simulados.', error);
    return MOCK_POSTS.find((post) => post._id === postId) || MOCK_POSTS[0];
  }
}

export async function getPostLink(link) {
  try {
    const response = await api.get(`/link/${link}`);
    return response.data;
  } catch (error) {
    console.warn('API Blog offline. Utilizando dados locais simulados.', error);
    return MOCK_POSTS.find((post) => post.link === link) || MOCK_POSTS[0];
  }
}

export const createPost = async (data) => {
  try {
    const { title, description, image, content, status } = data;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('content', content);
    formData.append('status', status);

    const response = await api.post('/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar as imagens:', error);
    throw new Error(
      'Erro ao enviar as imagens. Por favor, tente novamente mais tarde.'
    );
  }
};

export const updatePost = async (postId, data) => {
  try {
    const { title, description, image, content, status } = data;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('content', content);
    formData.append('status', status);

    const response = await api.put(`/${postId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar as imagens:', error);
    throw new Error(
      'Erro ao enviar as imagens. Por favor, tente novamente mais tarde.'
    );
  }
};

export async function deletePost(postId) {
  try {
    const response = await api.delete(`/${postId}`);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
}

export async function deleteMultiplePosts(postIds) {
  try {
    const response = await api.delete('/', { data: { postIds } });
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
}
