import React from 'react';
import './HighlightedTitle.css';
import ButtonLayout from '../ButtonLayout/ButtonLayout';

const HighlightedTitle = () => {
  return (
    <div className="highlighted-title">
      <h1 className="h1-highlighted">Transformando ideias em realidade digital</h1>
      <h2 className="h2-highlighted">Desenvolvimento web personalizado utilizando React, Node.js e muito mais que há de mais moderno digitalmente</h2>
      <ButtonLayout textoBotao="Começar" />
    </div>
  );
};

export default HighlightedTitle;
