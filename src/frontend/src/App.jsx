// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/public/Navigation";
import Footer from "./components/public/Footer";

import HomePage from "./pages/public/HomePage";
import ContactPage from "./pages/public/ContactPage";
import ServicesPage from "./pages/public/ServicesPage";
import AboutPage from "./pages/public/AboutPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<HomePage />} />
          {/* Ruta para la página de Contacto */}
          <Route path="/contact" element={<ContactPage />} />
          {/* Ruta para Servicios */}
          <Route path="/services" element={<ServicesPage />} />
          {/* Ruta para "Acerca de" */}
          <Route path="/about" element={<AboutPage />} />
          {/* Ruta por defecto (404 opcional) */}
          <Route
            path="*"
            element={<div className="container py-5">Página no encontrada</div>}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
