import React, { useEffect } from 'react';
import datasheet from '../../../backend/assets/content/pdf/products/ficha_bran.pdf';

const DatasheetDownload = () => {
  useEffect(() => {
    // Crear un enlace temporal para descargar el archivo
    const link = document.createElement('a');
    link.href = datasheet;
    link.download = 'ficha_bran.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  
};

export default DatasheetDownload;