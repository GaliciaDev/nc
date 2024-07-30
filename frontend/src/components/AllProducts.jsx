import React from "react";
import '../assets/css/components/allProdutcs.css';
import data from '../../../backend/models/site/allProdutcs.json';
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { sections } = data;
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
                <img src={product.imgSrc} alt={product.title} />

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
}

export default AllProducts;