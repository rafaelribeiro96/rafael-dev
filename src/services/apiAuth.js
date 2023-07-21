import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Função para realizar o login do usuário
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, credentials);
    return response.data; // Retorna os dados do usuário (token, etc.)
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw new Error(
      'Erro ao fazer login. Por favor, verifique suas credenciais e tente novamente.'
    );
  }
};

// Função para realizar o registro de um novo usuário
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, userData);
    return response.data; // Retorna os dados do usuário registrado (token, etc.)
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw new Error(
      'Erro ao registrar usuário. Por favor, verifique os dados informados e tente novamente.'
    );
  }
};

// Função para obter os dados do usuário autenticado
export const getAuthenticatedUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/auth/me`);
    return response.data; // Retorna os dados do usuário autenticado
  } catch (error) {
    console.error('Erro ao obter usuário autenticado:', error);
    throw new Error(
      'Erro ao obter usuário autenticado. Por favor, faça login novamente.'
    );
  }
};

// Função para realizar o logout do usuário
export const logout = async () => {
  try {
    await axios.post(`${API_URL}/api/auth/logout`);
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    throw new Error('Erro ao fazer logout. Por favor, tente novamente.');
  }
};
