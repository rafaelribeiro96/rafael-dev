/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import { AuthProvider } from './AuthContext';
// Importe outros contextos que você criar aqui

// Crie um novo contexto para o contexto global
const GlobalContext = createContext();

// Crie um componente de provedor para envolver todos os contextos
const GlobalProvider = ({ children }) => {
  // Use o contexto global para armazenar e fornecer todos os contextos
  return (
    <GlobalContext.Provider value={{}}>
      <AuthProvider>
        {/* Outros provedores de contexto aqui */}
        {children}
      </AuthProvider>
    </GlobalContext.Provider>
  );
};

// Crie um hook personalizado para acessar o contexto global
const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
