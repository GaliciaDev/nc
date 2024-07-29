import React from "react";
import '../assets/css/components/about.css'; // Asegúrate de que la ruta sea correcta
import data from '../../../backend/models/site/about.json'; 

const About = () => {
  const { sectionTitle, aboutData } = data;

  return (
    <div className="about-section-about">
      {aboutData.map((item, index) => (
        <div key={index} className="about-item-about">
          <img src={item.imgSrc} alt={item.title} />
          <div className="text-container-about">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} className="about-link-about">Ver más</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;