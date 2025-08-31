// src/frontend/src/components/HeroBanner.jsx
import React from 'react';
import heroBannerImage from '../assets/images/hero_banner.png'; // Asegúrate de que la ruta sea correcta

const HeroBanner = () => {
  return (
    <div className="hero-banner-container position-relative text-white text-center d-flex align-items-center justify-content-center">
      <img src={heroBannerImage} alt="Diagnóstico de Cáncer" className="hero-banner-image position-absolute w-100 h-100" />
      <div className="hero-banner-content position-relative p-5">
        <h1 className="display-4 fw-bold">Diagnóstico Automatizado de Cáncer en El Salvador</h1>
        <p className="lead mt-5">
          HealthVision es una plataforma web innovadora diseñada para mejorar la precisión y eficiencia del diagnóstico de cáncer a través del análisis automatizado del sistema radiológico. Nuestro objetivo es apoyar a los profesionales de la salud en El Salvador, proporcionando herramientas avanzadas para la detección temprana y el tratamiento oportuno del cáncer.
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;