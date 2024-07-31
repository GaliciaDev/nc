import { useEffect } from 'react';
import '../assets/css/views/errorService.css'; // Importar el archivo CSS

const ErrorService = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 3000); // 10 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, []);

  return (
    <section className="flex items-center justify-center h-screen">
      {/* Mensaje de error con letras blancas usando Tailwind */}
      <div className="flex flex-col items-center text-white text-center">
        <div className="flex flex-col space-y-6">
          <div className="bg-orange-500 h-16 w-16 irradiate"></div>
          <div className="bg-orange-500 h-16 w-16 irradiate"></div>
          <div className="bg-orange-500 h-16 w-16 irradiate"></div>

        </div>
        <h1 className="text-9xl mt-6"></h1> {/* Añadido mt-6 para espacio entre cuadros y texto */}
        <h2 className="text-4xl irradiatetxt">Contenido no disponible</h2>
        <p className="text-4x2 irradiatetxt">Esta seccion no es publica o fue transladada</p>
        
      </div>
    </section>
  );
};

export default ErrorService;