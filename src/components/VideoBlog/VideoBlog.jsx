/* eslint-disable react/prop-types */
import React from 'react';
import styles from './VideoBlog.module.css';
import Link from 'next/link';

const VideoBlog = ({ post }) => {
  return (
    <div className={styles.video}>
      <video autoPlay loop muted className={styles.video_background}>
        <source src="/videos/video-featured.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
      <div className={styles.video_overlay}></div>
      <div className={styles.video_content}>
        <Link href={`/blog/${post.link}`} className="">
          <h1 className={styles.video_title}>{post.title}</h1>
        </Link>
        <Link href={`/blog/${post.link}`} className="">
          <p className={styles.video_description}>{post.description}</p>
        </Link>
      </div>
    </div>
  );
};

export default VideoBlog;
