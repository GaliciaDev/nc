import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../assets/css/views/productDetails.css';
import Footer from '../components/Footer.jsx';

const Carousel = () => {
  const images = [
    { src: 'https://i.ibb.co/fFvyPkJ/struer-2.jpg', alt: 'Main' },
    { src: 'https://i.ibb.co/VT1dzF7/struer-1.jpg', alt: 'Left' },
    { src: 'https://i.ibb.co/fFvyPkJ/struer-2.jpg', alt: 'Right' },
    
  ];

  return (
    <div>
      <div className="product-details__container">
        <div className='details__container'>
          <div className='data-product'>
            <div className='left__container'>
              <div className='name-product'>
                <h3>STRUER</h3>
              </div>
              <div className='img-bottom__container'>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className='img-large__container'>
                <div className='img-large'>
                  {images.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
            <div className='right__container'>
              <div className='material__container'>
                <h3>Materiales</h3>
                <span className='line-details'></span>
                <div className='all-materials'>
                  <div className='mtd' id='p1'>
                    <img src='https://cdn.pixabay.com/photo/2019/10/28/23/34/textile-4585901_1280.jpg' alt='material' />
                  </div>
                  <div className='mtd' id='p2'>
                    <img src='https://img.freepik.com/foto-gratis/textura-abstracta-blanca-fondo_1373-106.jpg?t=st=1721406222~exp=1721409822~hmac=55bca02a180676c564b72055b968499603378870f76d7248fcccc8ff82fbf6fa&w=826' alt='material' />
                  </div>
                  <div className='mtd' id='p3'>
                    <img src='https://img.freepik.com/foto-gratis/fondo-texturizado-textil-tejido-negro_53876-108368.jpg?t=st=1721406247~exp=1721409847~hmac=0926dd6936851f9b7d17aea8f0949768c59f498fa4820558588aace62b3b6c0f&w=1380' alt='material' />
                  </div>
                  <div className='mtd' id='p4'>
                    <img src='https://img.freepik.com/foto-gratis/fondo-textura-tela-vista-superior_23-2148934897.jpg?t=st=1721402314~exp=1721405914~hmac=4d36182c3a82ae67d439e3333d145f2de95e0e884b3cb84bb40109e952078088&w=1380' alt='material' />
                  </div>
                  <div className='mtd' id='p5'>
                    <img src='https://cdn.pixabay.com/photo/2016/01/25/16/53/jeans-1161035_960_720.jpg' alt='material' />
                  </div>
                  <div className='mtd' id='p6'>
                    <img src='https://cdn.pixabay.com/photo/2017/07/24/01/26/jute-2533318_1280.jpg' alt='material' />
                  </div>
                  <div className='mtd' id='p7'>
                    <img src='https://cdn.pixabay.com/photo/2012/12/07/11/47/cloth-68946_960_720.jpg' alt='material' />
                  </div>
                </div>
              </div>
              <div className="details-view-products__container">
                <div className="specifics-product-grid">
                  <div>Medidas</div>
                  <div>Largo</div>
                  <div>Length</div>
                  <div>Fondo</div>
                  <div>Width</div>
                  <div>Altura</div>
                  <div>High</div>
                  <div>Peso</div>
                  <div>Weight</div>
                  <div>Measure</div>
                  <div>[mts.]</div>
                  <div>[in.]</div>
                  <div>[mts.]</div>
                  <div>[in.]</div>
                  <div>[mts.]</div>
                  <div>[in.]</div>
                  <div>[mts.]</div>
                  <div>[in.]</div>
                  <div>Sofa</div>
                  <div>2</div>
                  <div>78.74</div>
                  <div>0.90</div>
                  <div>35.43</div>
                  <div>0.80</div>
                  <div>31.49</div>
                  <div>0.00</div>
                  <div>0.00</div>
                  <div>Respaldo</div>
                  <div>0.00</div>
                  <div>0.00</div>
                  <div>0.00</div>
                  <div>0.00</div>
                  <div>0.00</div>
                  <div>0.00</div>
                  <div>0.00</div>
                  <div>0.00</div>
                  <div>Frente</div>
                  <div>0.00</div>
                  <div>0.00</div>
                  <div>0.00</div>
                  <div>0.00</div>
                  <div>0.00</div>
                  <div>0.00</div>
                  <div>0.00</div>
                  <div>0.00</div>
                </div>
                <div className='button-details__container'>
                  <a href='/' className='button-data'><span></span>Ficha Tecnica</a>
                  <a href='/' className='button-cost'>Cotizar</a>
                </div>
              </div>
            </div>   
          </div>
        </div>
      </div>
      <Footer />  
    </div>
  );
};

export default Carousel;