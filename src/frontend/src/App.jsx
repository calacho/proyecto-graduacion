// src/App.jsx
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

export default App;