import React from 'react';
import { useModal } from '../../context/ModalContext';

const ButtonDatasheet = () => {
  const { openModal } = useModal();

  return (
    <button
      type="button"
      onClick={openModal.form} // Cambia esto a `openModal.form` si quieres abrir el formulario
      className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-[var(--color-buttons)] rounded-lg hover:bg-[var(--color-hover-buttons)] focus:ring-4 focus:outline-none focus:ring-[var(--color-buttons)] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg
        className="fill-current w-4 h-3 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      Bajar ficha
    </button>
  );
};

export default ButtonDatasheet;