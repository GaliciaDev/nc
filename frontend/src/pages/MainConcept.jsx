import React, { useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import '../assets/css/views/MainConcept.css';
import CompanyLogo from '../../../backend/assets/icons/settings/logo-nc-sin-fondo.png';

const MainConcept = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleHamburger = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 300); // Ajusta el tiempo según la duración de tu animación
    };

    const getLinkClass = (path) => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <div>
            <nav className="mainConcept-nav">
                <div className={`logo-hiden ${isOpen ? "logo-hidden" : ""}`}>
                    <img src={CompanyLogo} alt="Company Logo" />
                </div>
                <div className={`mainConcept-hamburger ${isOpen ? "mainConcept-toggle" : ""}`} onClick={toggleHamburger}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className={`mainConcept-nav-links ${isOpen ? "open" : ""}`}>
                    <li className={`${isOpen ? "fade" : ""}`}><Link to="/home" className={getLinkClass("/home")} onClick={handleLinkClick}>Inicio</Link></li>
                    <li className={`${isOpen ? "fade" : ""}`}><Link to="/catalog" className={getLinkClass("/catalog")} onClick={handleLinkClick}>Catalogo</Link></li>
                    <li className={`${isOpen ? "fade" : ""}`}><Link to="/aboutextend" className={getLinkClass("/aboutextend")} onClick={handleLinkClick}>Nosotros</Link></li>
                    <li className={`${isOpen ? "fade" : ""}`}><Link to="/" onClick={handleLinkClick}><img className="mainConcept-logo" src={CompanyLogo} alt="Logo" /></Link></li>
                    <li className={`${isOpen ? "fade" : ""}`}><Link to="/Gallery" className={getLinkClass("/gallery")} onClick={handleLinkClick}>Galeria</Link></li>
                    <li className={`${isOpen ? "fade" : ""}`}><Link to="/FormContact" className={getLinkClass("/formcontact")} onClick={handleLinkClick}>Contacto</Link></li>
                    <li className={`${isOpen ? "fade" : ""}`}><Link to="/reviews" className={getLinkClass("/reviews")} onClick={handleLinkClick}>Reseñas</Link></li>
                </ul>
            </nav>
            
            <Outlet />
        </div>
    );
}

export default MainConcept;