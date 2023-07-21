// apiUpload.js
import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const uploadImages = async (imageDataArray) => {
  try {
    for (let i = 0; i < imageDataArray.length; i++) {
      const { images, title, description, price, category } = imageDataArray[i];

      const formData = new FormData();
      formData.append('images', images);

      if (title) {
        formData.append('title', title);
      }

      if (description) {
        formData.append('description', description);
      }

      if (price) {
        formData.append('price', price);
      }

      formData.append('category', category);

      await axios.post(`${API_URL}/api/images/images`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    }
  } catch (error) {
    console.error('Erro ao enviar as imagens:', error);
    throw new Error(
      'Erro ao enviar as imagens. Por favor, tente novamente mais tarde.'
    );
  }
};

export const updateImage = async (id, title, description, price) => {
  try {
    const data = {};
    data.title = title;
    data.description = description;
    data.price = price;
    await axios.put(`${API_URL}/api/images/images/${id}`, data);
  } catch (error) {
    console.error('Erro ao atualizar a imagem:', error);
    throw new Error(
      'Erro ao atualizar a imagem. Por favor, tente novamente mais tarde.'
    );
  }
};

export const deleteImage = async (id) => {
  try {
    await axios.delete(`${API_URL}/api/images/images/${id}`);
  } catch (error) {
    console.error('Erro ao remover a imagem:', error);
    throw new Error(
      'Erro ao remover a imagem. Por favor, tente novamente mais tarde.'
    );
  }
};

export const fetchImages = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/images/images`);
    return response; // Retorna a resposta completa
  } catch (error) {
    console.error('Erro ao obter as imagens:', error);
    throw new Error(
      'Erro ao obter as imagens. Por favor, tente novamente mais tarde.'
    );
  }
};

export const fetchCategoriesData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/images/categories`);
    return response.data.categories;
  } catch (error) {
    console.error('Erro ao obter as categorias:', error);
    throw new Error(
      'Erro ao obter as categorias. Por favor, tente novamente mais tarde.'
    );
  }
};
