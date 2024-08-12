import React, { useState } from 'react';

const EditProductForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    Descontinuado: false,
    imagen: '',
    dimensiones: {
      largo: 0,
      largo_asiento: 0,
      fondo: 0,
      fondo_asiento: 0,
      ancho_brazo: 0,
      ancho_respaldo: 0,
      altura: 0,
      altura_casco: 0,
      altura_brazo: 0,
      altura_asiento: 0,
      altura_pata: 0,
      altura_respaldo: 0
    },
    peso: 0,
    descripcion: '',
    materiales: [],
    color: '',
    precioVenta: 0,
    precioFabricacion: 0,
    stock: 0,
    fecha_fabricacion: '',
    proveedor: '',
    garantia: 0,
    comentarios: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDimensionChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      dimensiones: {
        ...formData.dimensiones,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category: 'someCategory', newProduct: formData }),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Product added successfully');
        onAdd(formData);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow-md rounded-md">
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="p-2 border rounded-md" />
      </div>
      <div className="flex items-center space-x-2">
        <label className="font-semibold">Descontinuado:</label>
        <input type="checkbox" name="Descontinuado" checked={formData.Descontinuado} onChange={(e) => setFormData({ ...formData, Descontinuado: e.target.checked })} className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Imagen:</label>
        <input type="text" name="imagen" value={formData.imagen} onChange={handleChange} className="p-2 border rounded-md" />
      </div>
      <fieldset className="border p-4 rounded-md">
        <legend className="font-semibold">Dimensiones</legend>
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(formData.dimensiones).map((key) => (
            <div key={key} className="flex flex-col">
              <label className="mb-2 font-semibold">{key}:</label>
              <input type="number" name={key} value={formData.dimensiones[key]} onChange={handleDimensionChange} className="p-2 border rounded-md" />
            </div>
          ))}
        </div>
      </fieldset>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Peso:</label>
        <input type="number" name="peso" value={formData.peso} onChange={handleChange} className="p-2 border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Descripción:</label>
        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} className="p-2 border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Materiales:</label>
        <input type="text" name="materiales" value={formData.materiales.join(', ')} onChange={(e) => setFormData({ ...formData, materiales: e.target.value.split(', ') })} className="p-2 border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Color:</label>
        <input type="text" name="color" value={formData.color} onChange={handleChange} className="p-2 border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Precio de Venta:</label>
        <input type="number" name="precioVenta" value={formData.precioVenta} onChange={handleChange} className="p-2 border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Precio de Fabricación:</label>
        <input type="number" name="precioFabricacion" value={formData.precioFabricacion} onChange={handleChange} className="p-2 border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Stock:</label>
        <input type="number" name="stock" value={formData.stock} onChange={handleChange} className="p-2 border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Fecha de Fabricación:</label>
        <input type="date" name="fecha_fabricacion" value={formData.fecha_fabricacion} onChange={handleChange} className="p-2 border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Proveedor:</label>
        <input type="text" name="proveedor" value={formData.proveedor} onChange={handleChange} className="p-2 border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Garantía:</label>
        <input type="number" name="garantia" value={formData.garantia} onChange={handleChange} className="p-2 border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Comentarios:</label>
        <textarea name="comentarios" value={formData.comentarios} onChange={handleChange} className="p-2 border rounded-md" />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">Guardar</button>
    </form>
  );
};

export default EditProductForm;