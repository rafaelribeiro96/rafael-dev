import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: `${API_URL}/api/posts`
});

function handleRequestError(error) {
  console.error('API request error:', error);
  throw error;
}

export async function getPosts() {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
}

export async function getPost(postId) {
  try {
    const response = await api.get(`/${postId}`);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
}

export async function getPostLink(link) {
  try {
    console.log(link);
    const response = await api.get(`/link/${link}`);
    return response.data;
  } catch (error) {
    handleRequestError(error);
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
