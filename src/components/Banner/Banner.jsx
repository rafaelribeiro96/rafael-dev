import React from 'react';
import ButtonLayout from '../ButtonLayout/ButtonLayout';
import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles['banner-content']}>
        <h3 className={styles['mini-title-banner']}>ENTRE EM CONTATO</h3>
        <h1 className={styles['main-title-banner']}>Pronto para iniciar o seu projeto digital?</h1>
        <ButtonLayout textoBotao="Entre em contato" linkBotao="https://www.instagram.com/rafaelribeirodev/" />
      </div>
    </div>
  );
}
