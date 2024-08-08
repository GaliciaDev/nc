import React, { createContext, useState, useContext } from 'react';
import PoppupForm from '../components/PoppupForm.jsx'; // Asegúrate de ajustar la ruta según tu estructura de archivos
import PoppupError from '../components/PoppupError.jsx';
import DatasheetDownload from './DatasheetDownload.jsx';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = {
    form: () => {
      setModalType('form');
      setIsModalOpen(true);
    },
    error: () => {
      setModalType('error');
      setIsModalOpen(true);
    },

    getDatasheet: () => {
      setModalType('getDatasheet');
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, modalType }}>
      {children}
      {isModalOpen && modalType === 'form' && <PoppupForm />}
      {isModalOpen && modalType === 'error' && <PoppupError />}
      {isModalOpen && modalType === 'getDatasheet' && <DatasheetDownload />}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);