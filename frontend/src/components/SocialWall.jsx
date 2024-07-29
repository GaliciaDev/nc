import React, { useState, useEffect } from 'react';
import socialData from '../../../backend/models/site/socialWall.json';
import '../assets/css/components/socialWall.css';


const SocialWall = () => {
  const [socialItems, setSocialItems] = useState([]);

  useEffect(() => {
    // Cargar los datos del JSON
    setSocialItems(socialData);
  }, []);

  // Calcular el número de filas necesarias (asumiendo 2 elementos por fila)
  const rows = Math.ceil(socialItems.length / 2);
  // Calcular el alto total del contenedor basado en el número de filas
  const containerHeight = `${rows * 50}vh`;

  return (
    <div className="social-wall-container" style={{ height: containerHeight }}>
      {socialItems.map((item, index) => (
        <div key={index} className="social-item">
          <img src={item.image} alt={item.name} className="social-image" />
          <div className="social-info">
            <img src={item.logo} alt={`${item.name} logo`} className="social-logo" />
            <p className="social-text">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialWall;