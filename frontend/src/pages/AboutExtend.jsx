import React from "react";
import Footer from "../components/Footer";

const AboutExtend= () => {
    return (
      <section>
          
          

          {/* inserta imagen con tailwind en pantalla completa */}
          <div className="bg-cover bg-center h-screen" style={{backgroundImage: 'url("https://i.ibb.co/89mYdDc/back02.jpg")'}}></div>

          <Footer />
      </section>
    );
  };

export default AboutExtend;