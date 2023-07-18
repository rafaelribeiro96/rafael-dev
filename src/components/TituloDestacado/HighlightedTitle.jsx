import React from 'react';
import styles from './HighlightedTitle.module.css';
import ButtonLayout from '../ButtonLayout/ButtonLayout';

const HighlightedTitle = () => {
  return (
    <div className={styles['highlighted-title']}>
      <h1 className={styles['h1-highlighted']}>
        Transformando <span className={styles['h1-highlighted-destaque']}>ideias</span>
        <br />
        em realidade digital
      </h1>
      <h2 className={styles['h2-highlighted']}>
        Desenvolvimento web personalizado utilizando React, Node.js e muito mais que há de mais moderno digitalmente
      </h2>
      <ButtonLayout textoBotao="Começar" linkBotao="#services" />
    </div>
  );
};

export default HighlightedTitle;
