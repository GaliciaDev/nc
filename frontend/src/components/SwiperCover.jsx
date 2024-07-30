import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import '../assets/css/components/swiperCover.css'; // Importa el archivo CSS

// Importar imágenes
import Img1 from '../../../backend/assets/img/site/sections/cover/back01.png';
import Img2 from '../../../backend/assets/img/site/sections/cover/back02.jpg';
import Img3 from '../../../backend/assets/img/site/sections/cover/back03.jpg';


const SwiperCover = () => {
    useEffect(() => {
        console.log('SwiperCover component mounted');
    }, []);

    return (
        <Swiper
            className="swiper-container" // Añade la clase swiper-container
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 100,
                disableOnInteraction: false
            }}
            onSlideChange={() => console.log('slide change')}
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
    );
}

export default SwiperCover;