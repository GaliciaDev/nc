import Footer from "../components/Footer";
import React from "react";
import galleryData from "../../../backend/models/site/gallery.json";
import "../assets/css/views/gallery.css";
import { Link } from "react-router-dom";


const Gallery= () => {
    return (
      
      <div className="site-container gallery-component"> {/* Añadido .gallery-component */}
            
            <div className="gallery-container">
            <h2>{galleryData.galleryTitle}</h2>
                <div className="gallery-image">
                    {galleryData.images.map((image, index) => (
                        <Link to={image.urlView} key={index} className="img-box">
                        <img src={image.src} alt={image.alt} />
                        <div className="transparent-box">
                            <div className="caption">
                                <p>{image.caption}</p>
                                <p className="opacity-low">{image.subCaption}</p>
                            </div>
                        </div>
                    </Link>
                    ))}
            
                </div>
                <div className="view-more">
                    {/* Envolver a en un link  <a href="/gallery">Ver mas</a>*/}
                    <Link to="/gallery">Ver mas</Link>
                    
                </div>
                
            </div>

            
            <Footer />    
        </div>
        
        
    );
  };

export default Gallery;