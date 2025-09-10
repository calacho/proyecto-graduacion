// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import PublicLayout from "./assets/layouts/PublicLayout";
import PrivateLayout from "./assets/layouts/PrivateLayout";

// Páginas públicas
import HomePage from "./pages/public/HomePage";
import ContactPage from "./pages/public/ContactPage";
import ServicesPage from "./pages/public/ServicesPage";
import AboutPage from "./pages/public/AboutPage";

// Página privada
import DashboardPage from "./pages/private/DashboardPage";

function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

      {/* Rutas privadas */}
      <Route element={<PrivateLayout />}>
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Route>

      {/* Ruta 404 */}
      <Route
        path="*"
        element={<div className="container py-5">Página no encontrada</div>}
      />
    </Routes>
  );
}

export default App;
