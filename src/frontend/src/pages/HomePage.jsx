// src/frontend/src/pages/HomePage.jsx
// src/pages/HomePage.jsx
import React from 'react';

import Navigation from '../components/Navigation';
import HeroBanner from '../components/HeroBanner';
import BenefitsSection from '../components/BenefitsSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navigation />
      <HeroBanner />
      <BenefitsSection />
      <Footer />
    </>
  );
};

export default HomePage;