import React, { useEffect, useCallback } from "react";
import '../assets/css/components/allProdutcs.css';
import data from '../../../backend/models/site/allProdutcs.json';
import { Link } from "react-router-dom";

const AllProducts = React.memo(() => {
  const { sections } = data;

  const handleIntersection = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${Array.from(document.querySelectorAll('.all-products-card')).indexOf(entry.target) * 0.3}s`;
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    const cards = document.querySelectorAll('.all-products-card');

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [handleIntersection]);

  return (
    <div className="all-products-section">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <div className="title-with-lines">
            <span className='catalog-line'></span>
            <p>{section.sectionTitle}</p>
            <span className='catalog-line'></span>
          </div>
          <div className="all-products-container">
            {section.productsData.map((product, productIndex) => (
              <div className="all-products-card" key={productIndex}>
                <Link to="/ProductDetails">
                  <img src={product.imgSrc} alt={product.title} loading="lazy" />
                  <div className="all-products-card-body">
                    <p className="all-products-card-title">{product.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

export default AllProducts;