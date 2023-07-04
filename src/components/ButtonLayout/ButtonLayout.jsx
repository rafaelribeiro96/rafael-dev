import React from 'react';
import './ButtonLayout.css';

const ButtonLayout = ({ textoBotao }) => {
  return (
      <button className="start-button">{textoBotao}</button>
  );
};

export default ButtonLayout;
