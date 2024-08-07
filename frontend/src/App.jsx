import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/css/main.css';
import './App.css';

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
import GalleryViews from './pages/GalleryViews.jsx';
import Ncpanel from './pages/Ncpanel.jsx';
import AddEvent from './components/AddEvent.jsx'; // Importar AddEvent
import AddProducts from './pages/AddProducts.jsx';
import FormMeasure from './pages/FormMeasure.jsx';
import ContactEdit from './pages/ContactEdit.jsx';
import SeoEdit from './pages/SeoEdit.jsx';

function App() {
  const [showAddEvent, setShowAddEvent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAddEvent(false);
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Routes>
        {/* Rutas que usan MainConcept */}
        <Route element={showAddEvent ? <AddEvent /> : <MainConcept />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutextend" element={<AboutExtend />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/formcontact" element={<FormContact />} />
          <Route path="/galleryviews" element={<GalleryViews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
        </Route>

        {/* Rutas que no usan MainConcept */}
        <Route path="/adduser" element={<AddUser />} />        
        <Route path="/panelview" element={<PanelView />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/sysemail" element={<SysEmail />} />
        <Route path="*" element={<ErrorService />} />
        <Route path="/ncpanel" element={<Ncpanel />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/FormMeasure" element={<FormMeasure />} />
        <Route path="/contactedit" element={<ContactEdit />} />
        <Route path="/seoedit" element={<SeoEdit />} />

      </Routes>
    </div>
  );
}

export default App;