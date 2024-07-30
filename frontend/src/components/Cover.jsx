import React from 'react';
import '../assets/css/components/cover.css'
import videoData from '../../../backend/models/site/imagesCover.json';
/* https://cdn.pixabay.com/video/2024/05/16/212213_large.mp4 */

const Cover = () => {
    // Accede a la URL del video desde el archivo JSON importado correctamente
    const videoUrl = videoData.videoData; // Corregido para usar la clave correcta
  
    return (
      <div className="cover-container">
        <video className="videoTag" autoPlay loop muted>
          <source src={videoUrl} type="video/mp4" />
          
        </video>
      </div>
    );
  };
  
  export default Cover;