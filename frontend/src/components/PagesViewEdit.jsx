import React, { useRef, useState } from 'react';
import navItems from '../../../backend/models/site/navItems.json';
import '../assets/css/components/pagesviewedit.css';

const PagesViewEdit = () => {
    const [lastMouseX, setLastMouseX] = useState(0);
    const cardsContainerRef = useRef(null);
  
    const handleMouseMove = (e) => {
      const currentMouseX = e.clientX;
      // Ajusta el valor aquí para aumentar la sensibilidad
      const diffX = (currentMouseX - lastMouseX) * -20; // Valor incrementado de -10 a -20
      if (cardsContainerRef.current) {
        cardsContainerRef.current.scrollBy({ left: diffX, behavior: 'smooth' });
      }
      setLastMouseX(currentMouseX);
    };
  
    const cardItems = navItems.filter(item => item.type === 'link');
  
    return (
      <section>
        <div className="cards-container" ref={cardsContainerRef} onMouseMove={handleMouseMove}>
          {cardItems.map((item, index) => (
            <article key={index} className="dinamic__card">
              <a href={item.url}><div className="content__image">
                <img src={item.imgSrc} alt={item.title} />
              </div>
              <div className="content__card">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div> </a>
            </article>
          ))}
        </div>
       
      </section>
      
    );
    }

export default PagesViewEdit;
