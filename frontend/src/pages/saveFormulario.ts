import React, { useState } from 'react';

const EditProductForm = ({}) => {


  return (
    <form className='bg-white'>

        <h1 className='font-bold'>Esquema de producto</h1>

        {/* El id debe ser auto incremental */}
        
        {/* Cetegoria, debe ser un select que busque en el archivo las categorias y las muestre */}

        <div className='category'>
        <label htmlFor="">Categoria</label>
        <select name="categorias" id="categorias">
            <option value="3-2-1">3-2-1</option>
            <option value="esquineras">esquineras</option>

            <option value="nc">nc</option>
            <option value="sofas">sofas</option>
            <option value="camas">camas</option>
            <option value="sillones">sillones</option>
        </select>

        {/* Check */}
        <label htmlFor="">Registrar una nueva</label> <input type="checkbox" />
        <input type="text" placeholder='Nueva categoria' />

        </div>

        <div>
        <h4 className='font-bold'>Detalles del producto</h4>
        <label htmlFor="">Nombre del producto</label>
        <input className='rounded-md' placeholder='txt' type="text"/>
        <div>
       {/*  <label htmlFor="">Imagen principal</label>
        <input type='file' />
        </div>

        <div>
        <label htmlFor="">Imagenes complementarias</label>
        <input type='file' /> */}
        </div>

        <div>
            
            </div>

        </div>

        <div className='status'>
        <label htmlFor="">Estado</label>
        <select name="status" id="status">
            <option value="true">En produccion</option>
            <option value="false">Descontinuado</option>
        </select>
        </div>

        <div>
            <h4 className='font-bold'>Detalles</h4>

            <label htmlFor="">Dimensiones</label>

            <div className='dimensions grid grid-cols-2'>
                <p>largo</p>
                <input type="number" placeholder='0'/>
                


                <p>fondo</p>
                <input type="number" placeholder='0'/>
                <p>fondo asiento</p>
                <input type="number" placeholder='0'/>
                <p>ancho brazo</p>
                <input type="number" placeholder='0'/>
                <p>ancho respaldo</p>
                <input type="number" placeholder='0'/>
                <p>altura</p>
                <input type="number" placeholder='0'/>
                <p>altura casco</p>
                <input type="number" placeholder='0'/>
                <p>altura brazo</p>
                <input type="number" placeholder='0'/>
                <p>altura asiento</p>
                <input type="number" placeholder='0'/>
                <p>altura pata</p>
                <input type="number" placeholder='0'/>
                <p>altura respaldo</p>
                <input type="number" placeholder='0'/>
                </div>

                <div>
                    <h4 className='font-bold'>
                        Peso
                    </h4>

                    <input type="number" placeholder='0'/>
                    
                </div>

                <div>
                    <h4 className='font-bold'>Descripcion</h4>
                    <textarea name="" id="" cols="30" rows="10"></textarea>                    
                </div>

                <div>
                    <h4 className='font-bold'>Materiales</h4>
                    <select name="materiales" id="materiales">
                        <option value="madera">Madera</option>
                        <option value="tela">Tela</option>
                        <option value="espuma">Espuma</option>                        
                    </select>

                    <label htmlFor="">Registrar un nuevo material</label> <input type="checkbox" />
                    <input type="text" placeholder='nombre'/>
                    </div>

                    <div>
                        <h4 className='font-bold'>Colores</h4>
                        <select name="colores" id="colores">
                            <option value="blanco">Blanco</option>

                        </select>

                        <label htmlFor="">Registrar un nuevo color</label> <input type="checkbox" />
                        <input type="text" placeholder='nombre'/>

                        </div>


                        <div>
                            <h4 className='font-bold'>Precios</h4>

                            <div className='grid grid-cols-2'>
                                <label htmlFor="">PrecioVenta</label>
                                <input type="number" placeholder='0'/>

                                <label htmlFor="">PrecioFabricacion</label>
                                <input type="number" placeholder='0'/>

                                
                                <label htmlFor="">stock</label>
                                <input type="number" placeholder='0'/>
                                
                                <label htmlFor="">Provedor</label>
                                <input type="text" placeholder='New Concept'/>

                                <label htmlFor="">Garantia</label>
                                <input type="text" placeholder='1'/>

                            </div>

                            <div>
                                <h4 className='font-bold'>Comentarios</h4>
                                <textarea name="comentarios" id="" placeholder='txt'></textarea>
                            </div>

                            

                            </div>


        </div>








      
    </form>
  );
};

export default EditProductForm;