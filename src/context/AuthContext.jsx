/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { login, logout } from '../services/apiAuth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoading] = useState(true); // Adicionar estado de carregamento
  const [error, setError] = useState(null); // Estado para a mensagem de erro

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && isValidToken(token)) {
      const username = getUsernameFromToken(token);
      setUser({ username, decodedToken: jwt_decode(token) });
    } else {
      setUser(null);
      localStorage.removeItem('token');
    }
    setIsLoading(false); // Definir o carregamento como concluído
  }, []);

  const handleLogin = async (credentials) => {
    try {
      const userData = await login(credentials);
      const { token } = userData;
      const decodedToken = jwt_decode(token);
      const authenticatedUser = {
        username: decodedToken.username
        // Outras informações do usuário, se necessário
      };
      setUser({ ...authenticatedUser, decodedToken });
      localStorage.setItem('user', JSON.stringify(authenticatedUser)); // Armazena o usuário no localStorage
      localStorage.setItem('token', token); // Armazena o token no localStorage
    } catch (error) {
      console.log('Erro ao fazer o login', error);
      setError('Usuário ou senha incorretos'); // Define a mensagem de erro no estado
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      setError(null); // Redefine o estado de erro para null
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      throw new Error('Erro ao fazer logout. Por favor, tente novamente.');
    }
  };

  const isValidToken = (token) => {
    try {
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000; // Obter o tempo atual em segundos
      return decoded.exp > currentTime; // Verificar se o token expirou
    } catch (error) {
      return false;
    }
  };

  const getUsernameFromToken = (token) => {
    try {
      const decoded = jwt_decode(token);
      return decoded.username;
    } catch (error) {
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: handleLogin,
        logout: handleLogout,
        isLoadingUser,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
