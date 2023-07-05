import React from 'react';
import './ButtonLayout.css';

const ButtonLayout = ({ textoBotao, linkBotao }) => {
  return (
    <a href={linkBotao} title={textoBotao}><button className="start-button">{textoBotao}</button></a>
  );
};

export default ButtonLayout;
