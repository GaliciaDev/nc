import React, { useEffect } from 'react';
import '../assets/css/components/AddEvent.css';
import eventData from '../../../backend/models/site/events.json';
import CompanyLogo from '../../../backend/assets/icons/settings/logo-nc-sin-fondo.png';

const AddEvent = () => {
    useEffect(() => {
        const logoContainer = document.getElementById('logoContainer');
        const infoContainer = document.querySelector('.info__container');

        const handleAnimationEnd = () => {
            logoContainer.remove();
            infoContainer.style.opacity = '1';
        };

        const startAnimation = () => {
            logoContainer.classList.add('explode');
            logoContainer.addEventListener('animationend', handleAnimationEnd);
        };

        const timer = setTimeout(startAnimation, 2000);

        return () => {
            clearTimeout(timer);
            logoContainer.removeEventListener('animationend', handleAnimationEnd);
        };
    }, []);

    return (
        <div className="page__container">
            <div className="logo__container" id="logoContainer">
                <img src={CompanyLogo} alt={eventData.title} />
            </div>
            <div className="info__container">
                <h1>{eventData.title}</h1>
                <div className="line"></div>
                <p>{eventData.date}</p>
                <div className="socialWall-container">
                    {eventData.socialLinks.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                            <img src={link.imgSrc} alt={link.alt} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddEvent;