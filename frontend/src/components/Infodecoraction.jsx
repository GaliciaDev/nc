import React, { useEffect, useRef } from "react";
import '../assets/css/components/infodecoration.css';
import data from '../../../backend/models/site/infodecoration.json'; // Asegúrate de que la ruta sea correcta

const Infodecoration = () => {
  const linksRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${linksRef.current.indexOf(entry.target) * 0.5}s`; // Añade un retraso incremental
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 }); // Ajusta el umbral según sea necesario

    linksRef.current.forEach((link) => {
      if (link) observer.observe(link);
    });

    return () => {
      linksRef.current.forEach((link) => {
        if (link) observer.unobserve(link);
      });
    };
  }, []);

  return (
    <div className="infodecoration-container">
      <div className="infodecoration-section-title">
        <h2>{data['sectionTitle-Network']}</h2>
      </div>
      <div className="infodecoration-social-media-container">
        {data.socialMediaData.map((social, index) => (
          <a
            key={index}
            href={social.link}
            className="infodecoration-social-media-link"
            ref={(el) => (linksRef.current[index] = el)}
          >
            <p>{social.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Infodecoration;