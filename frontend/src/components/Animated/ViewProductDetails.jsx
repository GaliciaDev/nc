import React, { useState, useEffect, useRef } from 'react';
import imgProducs from '../../../../backend/models/site/viewProductDetails.json';

import ButtonDatasheet from '../buttons/ButtonDatasheet';
import backPage from '../../../public/backPage.png'

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
        setCurrentIndex((prevIndex - 1 + imageArray.length) % imageArray.length);
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
    <div className='container mx-auto md:w-[70vw]'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Columna izquierda */}
        <div className="col-span-1">
          {/* Título y botón de retroceso */}
          <div className='flex justify-between items-center'>
            <a className="flex animate-palpitar" href="../">
              <img src={backPage} alt="" className="w-8 h-8 mt-[-4vw] md:mt-0" />
            </a>
            <p className='flex font-bold text-[#7878788e] md:hidden'>Modelo 3-2-1</p>
          </div>
          <h2 className="text-[2.2em] font-bold pb-3 ">Nibe</h2>
          
          {/* Contenedor de imágenes */}
          <div className="relative w-full h-[20vh] md:h-[32vh] overflow-hidden"
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
          
          {/* Imágenes adicionales */}
          <div className="grid grid-cols-3 gap-2 mt-4">
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
        
        {/* Columna derecha */}
        <div className="col-span-1">
          <div className='mt-[-2vh]'><img src="" className="w-full h-100"/></div>
          <div className='flex justify-end p-2 mt-[-5vh] md:mr-5'><ButtonDatasheet /></div>
        </div>
      </div>
    </div>
  );
}

export default ViewProductDetails;