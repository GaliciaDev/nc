import React, { useEffect, useRef, useMemo, useCallback } from "react";
import '../assets/css/components/products.css';
import data from '../../../backend/models/site/allProdutcs.json';

const Products = () => {
  const { sections } = data;
  const cardsRef = useRef([]);
  const observerRef = useRef(null);
  const observerNormalRef = useRef(null);

  const observerCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, []);

  const observerNormalCallback = useCallback((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible-normal');
        const delay = index * 0.2;
        entry.target.style.setProperty('--delay', `${delay}s`);
      } else {
        entry.target.classList.remove('visible-normal');
      }
    });
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(observerCallback, { threshold: 0.1 });
    observerNormalRef.current = new IntersectionObserver(observerNormalCallback, { threshold: 0.1 });

    const isResponsive = window.matchMedia("(max-width: 768px)").matches;

    cardsRef.current.forEach((card) => {
      if (card) {
        if (isResponsive) {
          observerRef.current.observe(card);
        } else {
          observerNormalRef.current.observe(card);
        }
      }
    });

    return () => {
      if (cardsRef.current) {
        cardsRef.current.forEach((card) => {
          if (card) {
            observerRef.current.unobserve(card);
            observerNormalRef.current.unobserve(card);
          }
        });
      }
    };
  }, [observerCallback, observerNormalCallback]);

  const sectionCards = useMemo(() => (
    sections.map((section, sectionIndex) => (
      <div key={sectionIndex} className="products-section">
        <div className="products-container">
          {section.productsData
            .filter(product => product.promocionar)
            .map((product, productIndex) => (
              <ProductCard
                key={productIndex}
                product={product}
                ref={(el) => (cardsRef.current[sectionIndex * 100 + productIndex] = el)}
                index={productIndex}
              />
            ))}
        </div>
      </div>
    ))
  ), [sections]);

  return (
    <div>
      {sectionCards}
    </div>
  );
}

const ProductCard = React.memo(React.forwardRef(({ product, index }, ref) => (
  <div
    className="products-card"
    ref={ref}
    data-index={index}
  >
    <img src={product.imgSrc} alt={product.title} loading="lazy" />
    <div className="products-card-body">
      <h5 className="products-card-title">{product.title}</h5>
    </div>
  </div>
)));

export default Products;