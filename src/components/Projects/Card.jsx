/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ image, title, description, link }) => {
  return (
    <Link href={link} className={styles.card} target="_blank" rel="noreferrer">
      <Image src={image} alt={title} className={styles.card_image} />
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_description}>{description}</p>
      <span
        href={link}
        className={styles.card_link}
        target="_blank"
        rel="noreferrer"
      >
        Ver mais
      </span>
    </Link>
  );
};

export default Card;
