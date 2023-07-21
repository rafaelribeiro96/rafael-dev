import React from 'react';
import styles from './Video.module.css';

const Video = () => {
  return (
    <div className={styles.video}>
      <video autoPlay loop muted className={styles.video_background}>
        <source src="/videos/video-featured.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
    </div>
  );
};

export default Video;
