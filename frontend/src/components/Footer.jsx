import React from 'react';
import '../assets/css/components/footer.css';
import data from '../../../backend/models/site/footer.json';
import '../../../backend/models/site/clients.json';
import logo from '../../../backend/assets/icons/settings/logo-nc-sin-fondo.png';
import emailsvg from '../../../backend/assets/icons/forms/email.svg';



const Footer = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"></link>
            
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        
                                        <h4>{data.direccion.titulo}</h4>
                                        <span>{data.direccion.detalle}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>{data.atencionCliente.titulo}</h4>
                                        <span>{data.atencionCliente.detalle}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>{data.correos.titulo}</h4>
                                        <span>{data.correos.detalle}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="index.html"><img src={logo} className="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div className="footer-text">
                                        <p>{data.footerText}</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        {Object.entries(data.iconosURLs).map(([key, value]) => (
                                            <a key={key} href="#"><img src={value} alt={key} /></a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl- col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>{data.conocenosTexto}</h3>
                                    </div>
                                    <ul>
                                        {data.menuSecciones.map(seccion => (
                                            <li key={seccion}><a href="#">{seccion}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>{data.subscripcion.titulo}</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>{data.subscripcion.descripcion}</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button aria-label="Suscribirse">
                                                <img src={emailsvg} alt="Icono de correo" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                    <div className="copyright-text">
                                        <p>{data.subscripcion.aviso} <a href="/Reviews">Aviso de Privacidad</a></p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                    <div className="footer-menu">
                                        <ul>
                                            {data.menuSecciones.map(seccion => (
                                                <li key={seccion}><a href="#">{seccion}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </footer>
        </div>
    );
    }

export default Footer;

