import React from 'react';
import './Video.css';
import video from '../../assets/videos/video-featured.mp4';


const Video = () => {
  return (
    <div className="video">
      <video autoPlay loop muted className="video-background">
        <source src={video} type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
    </div>
  );
};

export default Video;
