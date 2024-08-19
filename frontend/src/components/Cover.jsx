import React from 'react';
import '../assets/css/components/cover.css';
import videoData from '../../../backend/models/site/imagesCover.json';

const Cover = () => {
  const videoUrl = videoData.videoData; // URL del video en formato MP4
  const posterImage = 'https://i.ibb.co/BBD0nXY/back04.jpg'; // URL de la imagen de poster

  return (
    <div className="cover-container">
      <video
        className="videoTag"
        autoPlay
        playsInline
        loop
        muted
        preload="auto"
        poster={posterImage}
        onCanPlayThrough={() => console.log('Video can play through')}
        onError={(e) => console.error('Video error:', e)}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Cover;