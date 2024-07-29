import React from "react";
import data from '../../../backend/models/site/contactWall.json'; // Asegúrate de que la ruta sea correcta
import '../assets/css/components/contactWall.css'; // Asegúrate de que la ruta sea correcta después de renombrar el archivo CSS

const ContactWall = () => {
  return (
    <div className="cw-container">
      <div className="cw-section-title">
        <h2>{data['sectionTitle-Network']}</h2> {/* Corregido para acceder correctamente al título de la sección */}
      </div>
      <div className="cw-social-media-container">
        {data.socialMediaData.map((social, index) => (
          <a key={index} href={social.link} className="cw-social-media-link">
            <img src={social.imgSrc} alt={social.title} />
            <p>{social.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactWall;