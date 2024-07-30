import React from 'react';

// Importar los componentes necesarios
import Cover from '../components/Cover.jsx';
import Footer from '../components/Footer.jsx'; /* Ojos los estilos del footer alteran a los demas */
import About from '../components/About.jsx';
import SocialWall from '../components/SocialWall.jsx';
import ConctactWall from '../components/ConctactWall.jsx';
import Products from '../components/Products.jsx';
import Infodecoration from '../components/Infodecoraction.jsx';
import SwiperWall from '../components/SwiperWall.jsx';
import SwiperCover from '../components/SwiperCover.jsx';


// Importar el JSON de configuración de generacion de la pagina
import config from '../config.json';


// Mapeo de componentes a es donde se importan los componentes nuevos
const componentMap = {
  Cover: Cover,
  Footer: Footer,
  Products: Products,
  About: About,
  SwiperWall: SwiperWall,
  SocialWall: SocialWall,
  ConctactWall: ConctactWall,
  Infodecoration: Infodecoration,
  SwiperCover: SwiperCover
};

const Home = () => {
  // Filtrar y ordenar los componentes basados en el JSON
  const componentsToRender = config.components
    .filter(component => component.show)
    .sort((a, b) => a.order - b.order)
    .map(component => {
      const Component = componentMap[component.name];
      return <Component key={component.name} />;
    });

  return (
    <div>
      
      {componentsToRender}
      
      
    </div>
  );
};

export default Home;