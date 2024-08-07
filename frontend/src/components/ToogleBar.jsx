import React from 'react';
import '../assets/css/components/tooglebar.css';

const ToogleBar = () => {
  return (
    <div className="bg-white text-white p-10 flex flex-col items-center ">
      <h1 className="title__tool text-center text-6xl mb-8 ">Panel de Administración</h1>
      <div className="tool__container bg-[var(--color-navToolsEdit)] w-[53vh] h-[4vh]  gap-10 grid grid-cols-4 text-white rounded-lg shadow-lg">
        <div className="tools__menu flex justify-center items-center">
          <a href="/panelView" className="p-1 w-full h-full flex justify-center items-center">SITIOS</a>
        </div>
        <div className="tools__menu flex justify-center items-center">
          <a href="/addproducts" className="p-0 w-full h-full flex justify-center items-center">PRODUCTOS</a>
        </div>
        <div className="tools__menu flex justify-center items-center">
          <a href="/contactedit" className="p-0 w-full h-full flex justify-center items-center">CONTACTO</a>
        </div>
        <div className="tools__menu flex justify-center items-center">
          <a href="seoedit" className="p-0 w-full h-full flex justify-center items-center">SEO</a>
        </div>
      </div>
    </div>
  );
}

export default ToogleBar;