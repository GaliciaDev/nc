import React from "react";
import '../assets/css/components/infodecoration.css';
import data from '../../../backend/models/site/infodecoration.json'; // Asegúrate de que la ruta sea correcta

const Infodecoration = () => {
  return (
    <div className="infodecoration-container">
      <div className="infodecoration-section-title">
        <h2>{data['sectionTitle-Network']}</h2>
      </div>
      <div className="infodecoration-social-media-container">
        {data.socialMediaData.map((social, index) => (
          <a key={index} href={social.link} className="infodecoration-social-media-link">
            
            <p>{social.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Infodecoration;