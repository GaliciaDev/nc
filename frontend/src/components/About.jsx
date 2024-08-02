import React, { useEffect, useRef, useCallback } from "react";
import '../assets/css/components/about.css';
import data from '../../../backend/models/site/about.json';

const About = () => {
  const { sectionTitle, aboutData } = data;
  const containerRef = useRef(null);

  const handleIntersection = useCallback((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
        observer.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    const items = containerRef.current.querySelectorAll('.about-item-about');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <div ref={containerRef} className="about-section-about">
      {aboutData.map(({ imgSrc, title, description, link }, index) => (
        <div key={index} className="about-item-about">
          <img src={imgSrc} alt={title} />
          <div className="text-container-about">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} className="about-link-about">Ver más</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;