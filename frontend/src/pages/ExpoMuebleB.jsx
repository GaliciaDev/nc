import React, { useEffect } from 'react';
import { useModal } from '../context/ModalContext.jsx'; // Ajusta la ruta según tu estructura de archivos

const ExpoMuebleB = () => {
  const { openModal } = useModal();

  useEffect(() => {
    openModal.form(); // Abre el modal automáticamente al cargar la página
  }, [openModal]);

  return (
    <div className="bg-black w-full h-screen">
      <div className='flex justify-center pt-20'>
        <button className="" onClick={openModal.form}></button>
      </div>
    </div>
  );
}

export default ExpoMuebleB;