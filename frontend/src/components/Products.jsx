import React from "react";
import '../assets/css/components/products.css'
import data from '../../../backend/models/site/products.json';



const Products = () => {
  const { sectionTitle, productsData } = data;
  return (
    <div className="products-section"> {/* Cambiado para reflejar el nuevo prefijo */}
      <div className="products-container">
      <h1 className="products-section-title">{sectionTitle}</h1>
        {productsData.map((product, index) => (
          <div className="products-card" key={index}>
            <img src={product.imgSrc} alt={product.title} />
            <div className="products-card-body">
              <h5 className="products-card-title">{product.title}</h5>
              <p className="products-card-text">{product.description}</p>
            </div>

            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;