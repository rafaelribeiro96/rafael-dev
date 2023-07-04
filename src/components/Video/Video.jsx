import React from 'react';
import './Video.css';
import video from '../../assets/videos/video-featured.mp4';

const Video = () => {
  return (
    <div className="video">
      <video src={video} autoPlay loop muted className="video" />
    </div>
  );
};

export default Video;
