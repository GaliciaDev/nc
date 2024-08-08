import React, { useState, useEffect, useRef } from 'react';
import imgProducs from '../../../../backend/models/site/viewProductDetails.json';

const ViewProductDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);

  const { imgMain, imgLeft, imgRight, additionalImages } = imgProducs;
  const imageArray = [imgLeft, ...additionalImages.slice(0, 1), imgMain, ...additionalImages.slice(1), imgRight]; // Adjusted order

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageArray.length]);

  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      endX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      if (startX.current > endX.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
      } else if (startX.current < endX.current) {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageArray.length) % imageArray.length);
      }
      isDragging.current = false;
    }
  };

  const getImageIndex = (offset) => (currentIndex + offset) % imageArray.length;

  return (
    <div className=''>
      <div className="container mx-auto md:w-[35vw]">
        {/* Primera fila con una sola columna */}
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            <div
              className="relative w-full h-[20vh] md:h-[32vh]"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {imageArray.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover object-center"/>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Segunda fila con tres columnas */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:">
          <div className={`col-span-1 h-65 ${currentIndex === getImageIndex(0) ? 'opacity-100' : 'opacity-40'}`}>
            <img src={imageArray[getImageIndex(0)].src} alt={imageArray[getImageIndex(0)].alt} className="w-full h-full object-cover object-center overflow-hidden" />
          </div>
          <div className={`col-span-1 h-65 ${currentIndex === getImageIndex(1) ? 'opacity-100' : 'opacity-40'}`}>
            <img src={imageArray[getImageIndex(1)].src} alt={imageArray[getImageIndex(1)].alt} className="w-full h-full object-cover object-center overflow-hidden" />
          </div>
          <div className={`col-span-1 h-65 ${currentIndex === getImageIndex(2) ? 'opacity-100' : 'opacity-40'}`}>
            <img src={imageArray[getImageIndex(2)].src} alt={imageArray[getImageIndex(2)].alt} className="w-full h-full object-cover object-center overflow-hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProductDetails;