import React, { useEffect, useRef, useMemo, useCallback } from "react";
import '../assets/css/components/products.css';
import data from '../../../backend/models/site/products.json';

// Importar las imágenes
import sedurre from '../../public/catalogo2024/img/sedurre.png';
import anotherImage from '../../public/catalogo2024/img/andes.png'; // Importa otras imágenes según sea necesario

const Products = () => {
  const { sectionTitle, productsData } = data;
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

  const productCards = useMemo(() => (
    productsData.map((product, index) => (
      <ProductCard
        key={index}
        product={product}
        ref={(el) => (cardsRef.current[index] = el)}
        index={index}
      />
    ))
  ), [productsData]);

  return (
    <div className="products-section">
      <div className="products-container">
        <h1 className="products-section-title">{sectionTitle}</h1>
        {productCards}
      </div>
    </div>
  );
}

const ProductCard = React.memo(React.forwardRef(({ product, index }, ref) => {
  // Asignar la imagen importada según el producto
  let imgSrc;
  switch (product.title) {
    case 'Sedurre':
      imgSrc = sedurre;
      break;
    case 'Another Product':
      imgSrc = anotherImage;
      break;
    // Añadir más casos según sea necesario
    default:
      imgSrc = ''; // O una imagen por defecto
  }

  return (
    <div
      className="products-card"
      ref={ref}
      data-index={index}
    >
      <img src={imgSrc} alt={product.title} loading="lazy" />
      <div className="products-card-body">
        <h5 className="products-card-title">{product.title}</h5>
        <p className="products-card-text">{product.description}</p>
      </div>
    </div>
  );
}));

export default Products;