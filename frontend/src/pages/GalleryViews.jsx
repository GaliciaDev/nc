import React from "react";
import Footer from "../components/Footer";
import galleryData from "../../../backend/models/site/galleryViews.json";
import '../assets/css/views/galleryViews.css';


const GalleryViews = () => {
    const [expandedImage, setExpandedImage] = React.useState(null);

    const openImage = (image, event) => {
        event.stopPropagation(); // Detiene la propagación del evento
        setExpandedImage(image);
        
    };

    const closeExpandedView = () => {
        setExpandedImage(null);
        
    };

    // Añade esta función para manejar el clic fuera de .contain__imgExpanded
    const handleClickOutside = (event) => {
        // Verifica si el clic fue directamente en el contenedor .expanded-image-container
        if (event.target.className === "expanded-image-container") {
            closeExpandedView();
        }
    };

    return (
        <div className="site-container view-gallery-component" onClick={closeExpandedView}>
            {expandedImage && (
                <div className="expanded-image-container" onClick={handleClickOutside}>
                    <div className="contain__imgExpanded" onClick={e => e.stopPropagation()}>
                        <img src={expandedImage.src} alt={expandedImage.alt} />
                    </div>
                    <span className="close-icon" onClick={closeExpandedView}>X</span>
                </div>
            )}
            <div className="gallery-container">
                <h2>{galleryData.galleryTitle}</h2>
                <div className="view-gallery-image">
                    {galleryData.images.map((image, index) => (
                        <div key={index} className="view-img-box" onClick={(e) => openImage(image, e)}>
                            <img src={image.src} alt={image.alt} />
                            <div className="view-transparent-box"></div>
                        </div>
                    ))}
                </div>
                <div className="view-view-more">
                    <a href="/gallery">Regresar</a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GalleryViews;