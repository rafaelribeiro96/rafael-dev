import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ image, title, description, link }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} className={styles['card-image']} />
      <h2 className={styles['card-title']}>{title}</h2>
      <p className={styles['card-description']}>{description}</p>
      <Link href={link} className={styles['card-link']} target="_blank" rel="noreferrer">
        Ver mais
      </Link>
    </div>
  );
};

export default Card;
