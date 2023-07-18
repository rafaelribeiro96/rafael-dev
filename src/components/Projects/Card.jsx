import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ image, title, description, link }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} className={styles.card_image} />
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_description}>{description}</p>
      <Link href={link} className={styles.card_link} target="_blank" rel="noreferrer">
        Ver mais
      </Link>
    </div>
  );
};

export default Card;
