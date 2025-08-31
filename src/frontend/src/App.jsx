/*// src/App.jsx
import React from 'react'; 
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import BenefitsSection from './components/BenefitsSection';


import './App.css'; // Si tienes estilos globales en este archivo

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <HeroBanner />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;*/

// src/App.jsx
import React from 'react'; 
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import BenefitsSection from './components/BenefitsSection';
import ContactPage from './pages/ContactPage';    // 3. Importar la página de Contacto
import ServicesPage from './pages/ServicesPage';  // 2. Importar la página de Servicios
import AboutPage from './pages/AboutPage';        // 1. Importar la página "Acerca de" 

import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route 
            path="/" 
            element={
              <>
                <HeroBanner />
                <BenefitsSection />
              </>
            } 
          />
          {/* 3. Añadir la Nueva ruta para la página de Contacto */}
          <Route path="/contact" element={<ContactPage />} />
          {/* 2. Añadir la nueva ruta para Servicios */}
          <Route path="/services" element={<ServicesPage />} />
          {/* 1. Añadir la nueva ruta para "Acerca de" */}
          <Route path="/about" element={<AboutPage />} />
          {/* Ruta por defecto (404 opcional) */}
          <Route path="*" element={<div className="container py-5">Página no encontrada</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
