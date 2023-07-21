import React from 'react';
import styles from './Services.module.css';
import ButtonLayout from '../ButtonLayout/ButtonLayout';
import image from '../../assets/images/hero-content.png';
import Image from 'next/image';

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles['left-section-services']}>
        <Image src={image} alt="Serviços" className={styles['service-image']} />
      </div>
      <div className={styles['right-section-services']}>
        <h3 className={styles['h3-services']}>NOSSOS SERVIÇOS</h3>
        <h1 className={styles['h1-services']}>Crie o seu site sob medida</h1>
        <p className={styles['p-services']}>
          Nosso serviço de desenvolvimento web altamente personalizado é
          projetado para transformar suas ideias em sites elegantes, responsivos
          e funcionais. Utilizando tecnologias modernas, como React, NextJs,
          Node.js e muito mais, a Rafael Ribeiro Tech entrega soluções sob
          medida para atender às suas necessidades exclusivas. Além de tudo
          oferecemos um gestor de conteúdo, onde poderá gerenciar as imagens e
          os posts do seu site. E conta também com uma ferramenta de
          Inteligencia Artificial, que irá auxiliar na criação de conteúdo para
          seu site e Instagram.
        </p>
        <ButtonLayout textoBotao="Saiba mais" linkBotao="#banner" />
      </div>
    </div>
  );
};

export default Services;
