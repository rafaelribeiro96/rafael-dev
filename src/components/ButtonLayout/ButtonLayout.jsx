/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ButtonLayout.module.css';
import Link from 'next/link';

const ButtonLayout = ({ textoBotao, linkBotao }) => {
  const isExternalLink = /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(linkBotao);

  return (
    <Link
      href={linkBotao}
      title={textoBotao}
      target={isExternalLink ? '_blank' : null}
    >
      <button className={styles['start-button']}>{textoBotao}</button>
    </Link>
  );
};

export default ButtonLayout;
