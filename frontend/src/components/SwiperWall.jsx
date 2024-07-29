import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import '../assets/css/components/swiperwall.css';
import slidesData from '../../../backend/models/site/swiperwall.json';

const SwiperWall = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const swiper = new Swiper('.carousel-slider', {
      spaceBetween: 0,
      slidesPerView: 3,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      loop: true,
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        },
      },
      on: {
        slideChange: function () {
          setCurrentIndex(this.realIndex);
        },
        slideChange: function () {
            setCurrentIndex(this.realIndex);
          },
      },
    });
  }, []);

  const fillPercentage = ((currentIndex + 1) / slidesData.length) * 100;

  return (
    <section className="creative-carousal--hero">
      <div className="carousel-slider swiper-container-horizontal">
        <div className="swiper-wrapper">
          {slidesData.map(slide => (
            <div key={slide.id} className="swiper-slide" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="inner">
                <h2>{slide.title}</h2>
                <a href={slide.link}>{slide.Description}</a>
              </div>
            </div>
          ))}
        </div>
        <div className="slide-progress">
            <span>{"0"+slidesData[0].id}</span>
            <div className="swiper-pagination swiper-pagination-progressbar">
            <span className="swiper-pagination-progressbar-fill" style={{ width: `${fillPercentage}%` }}></span>
            </div>
            <span>{"0"+slidesData[slidesData.length - 1].id}</span>
        </div>
      </div>
    </section>
  );
};

export default SwiperWall;