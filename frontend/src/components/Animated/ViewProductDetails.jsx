import React, { useState, useEffect, useRef } from 'react';
import imgProducs from '../../../../backend/models/site/viewProductDetails.json';

const ViewProductDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInitialDelay, setIsInitialDelay] = useState(true);
  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);
  const intervalRef = useRef(null);

  const { imgMain, imgLeft, imgRight, additionalImages, settings } = imgProducs;
  const { initialDelay, transitionSpeed, intervalTime } = settings;
  const imageArray = [imgLeft, ...additionalImages.slice(0, 1), imgMain, ...additionalImages.slice(1), imgRight]; // Adjusted order

  useEffect(() => {
    const initialDelayTimeout = setTimeout(() => {
      setIsInitialDelay(false);
      if (!isPaused) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
        }, intervalTime);
      }
    }, initialDelay);

    return () => {
      clearTimeout(initialDelayTimeout);
      clearInterval(intervalRef.current);
    };
  }, [isPaused, imageArray.length, initialDelay, intervalTime]);

  useEffect(() => {
    if (!isInitialDelay && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
      }, intervalTime);
    }
    return () => clearInterval(intervalRef.current);
  }, [isInitialDelay, isPaused, imageArray.length, intervalTime]);

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

  const handleImageClick = (index) => {
    setIsPaused(true);
    setCurrentIndex(index);
  };

  const getImageIndex = (offset) => (currentIndex + offset + imageArray.length) % imageArray.length;

  return (
    <div className=''>
      <div className="container mx-auto md:w-[35vw]">
        {/* Primera fila con una sola columna */}
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            <div
              className="relative w-full h-[20vh] md:h-[32vh] overflow-hidden"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {imageArray.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-${transitionSpeed} ease-in-out ${
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
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
          {isInitialDelay ? (
            [imgLeft, imgMain, imgRight].map((image, index) => (
              <div
                key={index}
                className="col-span-1 h-65 opacity-100"
              >
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover object-center overflow-hidden" />
              </div>
            ))
          ) : (
            [getImageIndex(-1), currentIndex, getImageIndex(1)].map((index, i) => (
              <div
                key={i}
                className={`col-span-1 h-65 ${i === 1 ? 'opacity-100' : 'opacity-40'}`}
                onClick={() => handleImageClick(index)}
              >
                <img src={imageArray[index].src} alt={imageArray[index].alt} className="w-full h-full object-cover object-center overflow-hidden" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewProductDetails;