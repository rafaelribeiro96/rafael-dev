// pages/login.js

import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/router';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import HeaderGestor from 'src/components/GESTOR/headerGestor/HeaderGestor';

const Login = () => {
  const { user, login, error } = useContext(AuthContext);
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  useEffect(() => {
    const savedUsername = localStorage.getItem('savedUsername');
    if (savedUsername && !user) {
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        username: savedUsername
      }));
    }
  }, [user]);

  useEffect(() => {
    const isInputFilled = credentials.username.trim() !== '' && credentials.password.trim() !== '';
    setIsButtonDisabled(!isInputFilled);
  }, [credentials.username, credentials.password]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoadingLogin(true);
      const lowercaseUsername = credentials.username.toLowerCase();
      const lowercaseCredentials = { ...credentials, username: lowercaseUsername };
      await login(lowercaseCredentials);
    } catch (error) {
      console.log('Erro ao fazer o login', error);
      // Aqui você pode exibir uma mensagem de erro para o usuário, se desejar
    } finally {
      setIsLoadingLogin(false);
    }
  };

  useEffect(() => {
    if (user) {
      router.push('/gestor');
      localStorage.setItem('savedUsername', credentials.username.toLowerCase());
    }
  }, [user, router, credentials.username]);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="login-container">
      <HeaderGestor />
      <div className="login-body">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="username"
            placeholder="usuário"
            value={credentials.username}
            onChange={handleInputChange}
            className="login-input"
          />
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="senha"
              value={credentials.password}
              onChange={handleInputChange}
              className="login-input"
            />
            <button
              type="button"
              className="password-toggle-button"
              onClick={handleTogglePassword}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <button
            className="button-login"
            type="submit"
            disabled={isButtonDisabled || isLoadingLogin}
          >
            {isLoadingLogin ? 'Entrando...' : 'Entrar'}
          </button>
          {error && <p className="error-message-login">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
