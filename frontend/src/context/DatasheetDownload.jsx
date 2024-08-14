import React, { useState } from 'react';
import { useModal } from '../context/ModalContext.jsx'; // Ajusta la ruta según tu estructura de archivos

const PoppupForm = () => {
  const { closeModal } = useModal();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('URL_DEL_SERVIDOR', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, action: 'register' }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        // Descargar el archivo PDF
        const link = document.createElement('a');
        link.href = '/pdf/catalogo.pdf';
        link.download = 'catalogo.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Cerrar el modal
        closeModal();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Cargando...' : 'Enviar'}
      </button>
    </form>
  );
};

export default PoppupForm;