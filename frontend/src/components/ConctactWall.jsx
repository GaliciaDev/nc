import React, { useEffect, useRef, useCallback } from "react";
import data from '../../../backend/models/site/contactWall.json'; // Asegúrate de que la ruta sea correcta
import '../assets/css/components/contactWall.css'; // Asegúrate de que la ruta sea correcta después de renombrar el archivo CSS

const ContactWall = React.memo(() => {
  const socialMediaRefs = useRef([]);

  const handleIntersection = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transition = `opacity 1s ${entry.target.style.getPropertyValue('--animation-order') * 0.5}s`;
        observer.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    socialMediaRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      socialMediaRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [handleIntersection]);

  return (
    <div className="contact-wall-container">
      <div className="contact-wall-section-title">
        <h2>{data['sectionTitle-Network']}</h2> {/* Corregido para acceder correctamente al título de la sección */}
      </div>
      <div className="contact-wall-social-media-container">
        {data.socialMediaData.map((social, index) => (
          <a
            key={index}
            href={social.link}
            className="contact-wall-social-media-link"
            style={{ '--animation-order': index }}
            ref={(el) => (socialMediaRefs.current[index] = el)}
          >
            <img src={social.imgSrc} alt={social.title} loading="lazy" />
            <p>{social.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
});

export default ContactWall;