import React from 'react';
import styles from './Footer.module.css';
import instasvg from '../../assets/images/insta.svg';
import linkedinsvg from '../../assets/images/linkedin.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles['footer-content']}>
        <span className={styles['copyright-content']}>
          <span className={styles['color-copyright']}>Copyright © 2023 </span>
          <span className={styles['color-autor']}>rafaeltech.com </span>
          <span className={styles['color-copyright']}>by </span>
          <span className={styles['color-autor']}>
            <Link
              href="https://rafaelribeiro96.github.io/"
              target="_blank"
              rel="noreferrer"
              className={styles['color-autor']['footer-link']}
            >
              Rafael Ribeiro Tech
            </Link>
          </span>
        </span>
        <div className={styles['social-media-footer']}>
          <Link
            href="https://www.instagram.com/rafaelribeirotech/"
            target="_blank"
            rel="noreferrer"
            className={styles['footer-link']}
          >
            <Image src={instasvg} alt="Instagram" width={24} height={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rafaelfeliperibeiro/"
            target="_blank"
            rel="noreferrer"
            className={styles['footer-link']}
          >
            <Image
              src={linkedinsvg}
              alt="Linkedin"
              width={24}
              height={24}
              className={styles.footer_image}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
