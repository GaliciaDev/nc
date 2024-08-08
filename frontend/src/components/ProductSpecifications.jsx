import React, { useEffect, useState } from 'react';
import '../assets/css/components/productSpecifications.css';
import specificationsData from '../../../backend/models/site/specifications.json';
import { useModal } from '../context/ModalContext.jsx';


const ProductSpecifications = () => {
  const [specifications, setSpecifications] = useState([]);

  useEffect(() => {
    // Simulamos la carga de datos desde un archivo JSON
    setSpecifications(specificationsData.specifications);
  }, []);

  const { openModal } = useModal();

  return (
    <div className="details-view-products__container">
      <div className="specifics-product-grid">
        {specifications.map((spec, index) => (
          <React.Fragment key={index}>
            <div>{spec.label}</div>
            {spec.values.map((value, idx) => (
              <div key={idx}>{value}</div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className='button-details__container'>
        <a href='#' onClick={openModal.form} className='button-data'><span></span>Ficha Tecnica</a>
                

      </div>

      
    </div>
  );
};

export default ProductSpecifications;