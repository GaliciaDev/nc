import React, { useState } from 'react';

const AllModels = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      action: 'register',
    };

    console.log('Payload:', payload);

    try {
      const response = await fetch('https://newconcept.com.mx/view.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (data.status === 'success' || data.status === 'exists') {
        window.location.href = data.redirect;
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.message === 'Failed to fetch') {
        alert('No se pudo conectar al servidor. Por favor, verifica tu conexión a Internet.');
      } else {
        alert('Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.');
      }
    }
  };

  return (
    <div className='bg-black pt-[10vh] md:pt-0'>
      <section className="bg-black dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Regístrate para ver nuestro catálogo
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo electrónico</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="name@company.com" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="w-full text-white bg-orange-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Ver catálogo</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllModels;