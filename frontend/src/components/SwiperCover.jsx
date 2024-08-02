import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import '../assets/css/components/swiperCover.css'; // Importa el archivo CSS

// Importar imágenes
import Img1 from '../../../backend/assets/img/site/sections/cover/back01.png';
import Img2 from '../../../backend/assets/img/site/sections/cover/back02.jpg';
import Img3 from '../../../backend/assets/img/site/sections/cover/back03.jpg';

const SwiperCover = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (swiperRef.current) {
            observer.observe(swiperRef.current);
        }

        return () => {
            if (swiperRef.current) {
                observer.unobserve(swiperRef.current);
            }
        };
    }, []);

    const handleSlideChange = () => {
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach((slide) => {
            slide.classList.remove('fade-in');
        });
        const activeSlide = document.querySelector('.swiper-slide-active');
        if (activeSlide) {
            activeSlide.classList.add('fade-in');
        }
    };

    return (
        <div className='swiper__component'>
            <Swiper
                ref={swiperRef}
                className="swiper-container" // Añade la clase swiper-container
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 100,
                    disableOnInteraction: false
                }}
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className="swiper-slide">
                    <img src={Img3} alt="Imagen de portada 1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src={Img2} alt="Imagen de portada 2" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src={Img1} alt="Imagen de portada 3" loading="lazy" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SwiperCover;