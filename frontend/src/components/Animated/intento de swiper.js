import React, { useState, useEffect, useRef } from 'react';

const images = [
  { src: 'https://i.ibb.co/x366td7/nibe-2.jpg', alt: 'Main' },
  { src: 'https://i.ibb.co/RQgqVds/nibe-1.jpg', alt: 'Left' },
  { src: 'https://i.ibb.co/S7h66LP/nibe-3.jpg', alt: 'Right' },
];

const ViewProductDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else if (startX.current < endX.current) {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      }
      isDragging.current = false;
    }
  };

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
              {images.map((image, index) => (
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
        
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:mt-[-6vh]">
  <div className="col-span-1 h-65"> {/* Establece un alto fijo */}
    <img src="https://i.ibb.co/S7h66LP/nibe-3.jpg" alt="vista Izquierda" className="w-full h-full object-cover object-center pt-2 pb-5 overflow-hidden" /> {/* Usa h-full y object-cover */}
  </div>
  <div className="col-span-1 h-65"> {/* Establece un alto fijo */}
    <img src="https://i.ibb.co/x366td7/nibe-2.jpg" alt="Vista central" className="w-full h-full object-cover object-center overflow-hidden" /> {/* Usa h-full y object-cover */}
  </div>
  <div className="col-span-1 h-65"> {/* Establece un alto fijo */}
    <img src="https://i.ibb.co/RQgqVds/nibe-1.jpg" alt="Vista Derecha" className="w-full h-full object-cover object-center overflow-hidden" /> {/* Usa h-full y object-cover */}
  </div>
</div>
      </div>
    </div>
  );
}

export default ViewProductDetails;