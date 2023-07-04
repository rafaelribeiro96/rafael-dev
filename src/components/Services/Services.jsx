import React from 'react';
import './Services.css';
import ButtonLayout from '../ButtonLayout/ButtonLayout';
import image from '../../assets/images/hero-content.png';

const Services = () => {
  return (
    <div className="services">
      <div className="left-section-services">
        <img src={image} alt="Serviços" className="service-image" />
      </div>
      <div className="right-section-services">
        <h3 className="h3-services">NOSSOS SERVIÇOS</h3>
        <h1 className="h1-services">Crie o seu site sob medida</h1>
        <p className="p-services">
          Nosso serviço de desenvolvimento web altamente personalizado é projetado para transformar suas ideias em sites
          elegantes, responsivos e funcionais. Utilizando tecnologias modernas, como React, Node.js e muito mais,
          entregamos soluções sob medida para atender às suas necessidades exclusivas.
        </p>
        <ButtonLayout textoBotao="Começar" />
      </div>
    </div>
  );
};

export default Services;
