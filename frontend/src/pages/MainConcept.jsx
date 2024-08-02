import React, { useState, useEffect, useCallback } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import '../assets/css/views/MainConcept.css';
import CompanyLogo from '../../../backend/assets/icons/settings/logo-nc-sin-fondo.png';

const MainConcept = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleHamburger = useCallback(() => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }, []);

    const handleLinkClick = useCallback(() => {
        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    }, []);

    const getLinkClass = useCallback((path) => {
        return location.pathname === path ? "active" : "";
    }, [location.pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    // Detect changes in location and close the menu if open
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Force update on location change to ensure content loads
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on location change
    }, [location]);

    return (
        <div className="fade-in">
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
                    <li className={`${isOpen ? "fade" : ""}`}><Link to="/catalog" className={getLinkClass("/catalog")} onClick={handleLinkClick}>Catálogo</Link></li>
                    <li className={`${isOpen ? "fade" : ""}`}><Link to="/aboutextend" className={getLinkClass("/aboutextend")} onClick={handleLinkClick}>Nosotros</Link></li>
                    <li className={`${isOpen ? "fade" : ""}`}><Link to="/" onClick={handleLinkClick}><img className="mainConcept-logo" src={CompanyLogo} alt="Logo" /></Link></li>
                    <li className={`${isOpen ? "fade" : ""}`}><Link to="/Gallery" className={getLinkClass("/gallery")} onClick={handleLinkClick}>Galería</Link></li>
                    <li className={`${isOpen ? "fade" : ""}`}><Link to="/FormContact" className={getLinkClass("/formcontact")} onClick={handleLinkClick}>Contacto</Link></li>
                    <li className={`${isOpen ? "fade" : ""}`}><Link to="/reviews" className={getLinkClass("/reviews")} onClick={handleLinkClick}>Blog</Link></li>
                </ul>
            </nav>
             
            <Outlet />
        </div>
    );
}

export default React.memo(MainConcept);