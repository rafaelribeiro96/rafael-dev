import React from 'react';
import './ButtonLayout.css';

const ButtonLayout = ({ textoBotao, linkBotao }) => {
  const isExternalLink = /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(linkBotao);

  return (
    <a href={linkBotao} title={textoBotao} target={isExternalLink ? "_blank" : null}>
      <button className="start-button">{textoBotao}</button>
    </a>
  );
};

export default ButtonLayout;
