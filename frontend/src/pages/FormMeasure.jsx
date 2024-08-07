import React, { useState, useEffect } from 'react';
import LogoInternal from '../components/LogoInternal.jsx';
import '../assets/css/views/FormMeasure.css';
import productsData from '../../../backend/models/products/products.model.json';

const FormMeasure = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [showNewProductInput, setShowNewProductInput] = useState(false);
  
    useEffect(() => {
      // Flatten the products from all categories into a single array
      const allProducts = Object.values(productsData.categorias).flat();
      setProducts(allProducts);
    }, []);
  
    const handleProductChange = (e) => {
      const productId = parseInt(e.target.value, 10);
      const product = products.find(p => p.id === productId);
      setSelectedProduct(product);
      console.log(product); // Verifica que el producto seleccionado sea el correcto
    };
  
    const handleCheckboxChange = (e) => {
      setShowNewProductInput(e.target.checked);
    };

    return (

        <div className="bg-white min-h-screen w-full p-4 md:p-10">
      
        <div className="container__measure grid grid-cols-1 md:grid-cols-2 bg-white h-full w-full p-4 md:p-8 rounded-md shadow-lg">
          <LogoInternal />
  
          <h2 className="font-bold text-white mb-5 text-center text-lg">Registro de medidas</h2>
          <div className=''>
          <div className='w-full h-50 pl-7 pr-7'>
            <img className="drop_efect pb-5" src="https://i.ibb.co/F4TV65v/nibe-1.png" alt="Nibe" />
            
          </div>
          
            <select
                className={`w-full md:max-w-[97%] text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] ${showNewProductInput ? 'hidden' : ''}`}
                onChange={handleProductChange}
              >
                <option value="">Seleccione un producto</option>
                {products.map(product => (
                  <option key={product.id} value={product.id}>{product.nombre}</option>
                ))}
              </select>  
  
              <p className='text-gray-400'>Registrar nuevo producto
                    <input className="ml-2 mt-2 mb-5" type="checkbox" onChange={handleCheckboxChange} />
                  </p>
  
                  <input
                    type="text"
                    placeholder="Nombre del producto"
                    className={`w-full md:max-w-[97%] text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] mb-5 ${showNewProductInput ? '' : 'hidden'}`}
                  />
  
          </div>
          
          <form method="GET" className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              
              <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
              
              <h3 className="font-bold text-black text-md">Informacion del producto</h3>
              
                  
               
  
              </div>
            </div>
  
            {/* Alturas */}
            <div>
              <h4 className="font-bold text-black text-sm pb-2">Altura</h4>
              <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                
                <div>
                  <p className='text-[.9rem] text-gray-600'>General</p>
                <div className="relative">
                 
                 <input
                   type="number"
                   placeholder={selectedProduct && selectedProduct.dimensiones.altura !== 0 ? selectedProduct.dimensiones.altura : ""}
                   className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] pr-12"
                 />
                 <span className="absolute w-f right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-buttons)] text-white px-2 py-3 text-xs border-r-0 border-[var(--color-buttons)] rounded-tr-md rounded-br-md">cm</span>
                   </div>
                </div>
  
                <div>
                <p className='text-[.9rem] text-gray-600'>Al asiento</p>
                <div className='relative'>
                <input
                  type="number"
                  placeholder={selectedProduct && selectedProduct.dimensiones.altura_asiento !== 0 ? selectedProduct.dimensiones.altura_asiento : ""}
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] pr-12"
                />
                <span className="absolute w-f right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-buttons)] text-white px-2 py-3 text-xs border-r-0 border-[var(--color-buttons)] rounded-tr-md rounded-br-md">cm</span>
                </div>
                </div>
  
                <div>
                <p className='text-[.9rem] text-gray-600'>Al brazo</p>
                <div className='relative'>  
                <input
                  type="number"
                  placeholder={selectedProduct && selectedProduct.dimensiones.altura_brazo !== 0 ? selectedProduct.dimensiones.altura_brazo : ""}
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] pr-12"
                />
                <span className="absolute w-f right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-buttons)] text-white px-2 py-3 text-xs border-r-0 border-[var(--color-buttons)] rounded-tr-md rounded-br-md">cm</span>
                </div>
                </div>
  
                <div>
                <p className='text-[.9rem] text-gray-600'>Del respaldo</p>
                <div className='relative'>
                <input
                  type="number"
                  placeholder={selectedProduct && selectedProduct.dimensiones.altura_respaldo !== 0 ? selectedProduct.dimensiones.altura_respaldo : ""}
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] pr-12"
                />
                <span className="absolute w-f right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-buttons)] text-white px-2 py-3 text-xs border-r-0 border-[var(--color-buttons)] rounded-tr-md rounded-br-md">cm</span>
                </div>
                </div>
  
                <div>
                <p className='text-[.9rem] text-gray-600'>De la pata</p>  
                <div className='relative'>
                <input
                  type="number"
                  placeholder={selectedProduct && selectedProduct.dimensiones.altura_pata !== 0 ? selectedProduct.dimensiones.altura_pata : ""}
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] pr-12"
                />
                <span className="absolute w-f right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-buttons)] text-white px-2 py-3 text-xs border-r-0 border-[var(--color-buttons)] rounded-tr-md rounded-br-md">cm</span>
                </div>
                </div>
  
                <div>
                <p className='text-[.9rem] text-gray-600'>Al casco</p>
                <div className='relative'>
                <input
                  type="number"
                  placeholder={selectedProduct && selectedProduct.dimensiones.altura_casco !== 0 ? selectedProduct.dimensiones.altura_casco : ""}
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] pr-12"
                />
                <span className="absolute w-f right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-buttons)] text-white px-2 py-3 text-xs border-r-0 border-[var(--color-buttons)] rounded-tr-md rounded-br-md">cm</span>
                </div>
                </div>  
              </div>
            </div>
  
            {/* Largos */}
            <div>
              <h4 className="font-bold text-black text-sm pb-2">Largo</h4>            
              <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
  
                <div>
                <p className='text-[.9rem] text-gray-600'>General</p>
                <div className="relative">
                <input
                  type="number"
                  placeholder={selectedProduct && selectedProduct.dimensiones.largo !== 0 ? selectedProduct.dimensiones.largo : ""}
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] pr-12"
                />
                <span className="absolute w-f right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-buttons)] text-white px-2 py-3 text-xs border-r-0 border-[var(--color-buttons)] rounded-tr-md rounded-br-md">cm</span>
                </div>
                </div>
  
                <div>
                <p className='text-[.9rem] text-gray-600'>Del asiento</p>
                <div className='relative'>
                <input
                  type="number"
                  placeholder={selectedProduct && selectedProduct.dimensiones.largo_asiento !== 0 ? selectedProduct.dimensiones.largo_asiento : ""}
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] pr-12"
                />
                <span className="absolute w-f right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-buttons)] text-white px-2 py-3 text-xs border-r-0 border-[var(--color-buttons)] rounded-tr-md rounded-br-md">cm</span>
                </div>
                </div>
              </div>
            </div>
  
            {/* Fondos */}
            <div>
              <h4 className="font-bold text-black text-sm pb-2">Fondo</h4>
              <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                <div>
                <p className='text-[.9rem] text-gray-600'>General</p>
                <div className="relative">
                <input
                  type="number"
                  placeholder={selectedProduct && selectedProduct.dimensiones.fondo !== 0 ? selectedProduct.dimensiones.fondo : ""}
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] pr-12"                
                />
                <span className="absolute w-f right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-buttons)] text-white px-2 py-3 text-xs border-r-0 border-[var(--color-buttons)] rounded-tr-md rounded-br-md">cm</span>
                </div>
                </div>
  
                <div>
                <p className='text-[.9rem] text-gray-600'>Del asiento</p>
                <div className='relative'>
                <input
                  type="number"
                  placeholder={selectedProduct && selectedProduct.dimensiones.fondo_asiento !== 0 ? selectedProduct.dimensiones.fondo_asiento : ""}
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] pr-12"
                />
                <span className="absolute w-f right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-buttons)] text-white px-2 py-3 text-xs border-r-0 border-[var(--color-buttons)] rounded-tr-md rounded-br-md">cm</span>
                </div>
                </div>  
              </div>
            </div>
  
            {/* Anchos */}
            <div>
              <h4 className="font-bold text-black text-sm pb-2">Ancho</h4>
              <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                <div>
                <p className='text-[.9rem] text-gray-600'>General</p>
                <div className="relative">
                <input
                  type="number"
                  placeholder={selectedProduct && selectedProduct.dimensiones.ancho_brazo !== 0 ? selectedProduct.dimensiones.ancho_brazo : ""}
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] pr-12"
                />
                <span className="absolute w-f right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-buttons)] text-white px-2 py-3 text-xs border-r-0 border-[var(--color-buttons)] rounded-tr-md rounded-br-md">cm</span>
                </div>
                </div>
  
                <div>
                <p className='text-[.9rem] text-gray-600'>Del respaldo</p>
                <div className='relative'>
                <input
                  type="number"
                  placeholder={selectedProduct && selectedProduct.dimensiones.ancho_respaldo !== 0 ? selectedProduct.dimensiones.ancho_respaldo : ""}
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] pr-12"
                />
                <span className="absolute w-f right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-buttons)] text-white px-2 py-3 text-xs border-r-0 border-[var(--color-buttons)] rounded-tr-md rounded-br-md">cm</span>
                </div>
                </div>
              </div>
            </div>
  
            {/* Peso */}
            
            <div>
              <h4 className="font-bold text-black text-sm pb-2">Peso</h4>
              <div className="relative">
                <input
                  type="number"
                  placeholder={selectedProduct && selectedProduct.peso !== 0 ? selectedProduct.peso : "Peso del producto"}
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)] pr-12"
                />
                <span className="absolute w-f right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-buttons)] text-white px-2 py-3 text-xs border-r-0 border-[var(--color-buttons)] rounded-tr-md rounded-br-md">Kg</span>
              </div>
            </div>
  
            <button className="w-full bg-[var(--color-buttons)] text-white rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)]">Actualizar</button>
          </form>
        </div>
        
      </div>
      
    )


}

export default FormMeasure;

            