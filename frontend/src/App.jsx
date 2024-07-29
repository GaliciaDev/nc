import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './assets/css/main.css';

/* Contenedores de sitio */
import AboutExtend from './pages/AboutExtend.jsx';
import AddUser from './pages/AddUser.jsx';
import Catalog from './pages/Catalog.jsx';
import ErrorService from './pages/ErrorService.jsx';
import FormContact from './pages/FormContact.jsx';
import Gallery from './pages/Gallery.jsx';
import Home from './pages/Home.jsx';
import MainConcept from './pages/MainConcept.jsx';

import PanelView from './pages/PanelView.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Reviews from './pages/Reviews.jsx';
import SysEmail from './pages/SysEmail.jsx';

function App() {
  const location = useLocation();
  console.log(location.pathname); // Agrega esto para depurar

  return (
    <div>
      <MainConcept /> {/* Siempre muestra la barra de navegación */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Renderiza Home en la ruta raíz */}
        <Route path="/home" element={<Home />} />
        <Route path="/aboutextend" element={<AboutExtend />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/errorservice" element={<ErrorService />} />
        <Route path="/formcontact" element={<FormContact />} />
        <Route path="/gallery" element={<Gallery />} />        
        <Route path="/panelview" element={<PanelView />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/sysemail" element={<SysEmail />} />
      </Routes>
    </div>
  );
}

export default App;