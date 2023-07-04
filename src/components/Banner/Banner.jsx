import React from 'react';
import './Banner.css';
import ButtonLayout from '../ButtonLayout/ButtonLayout';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h3 className="mini-title-banner">ENTRE EM CONTATO</h3>
        <h1 className="main-title-banner">Pronto para iniciar o seu projeto digital?</h1>
        <ButtonLayout textoBotao="Entre em contato" />
      </div>
    </div>
  );
};

export default Banner;
