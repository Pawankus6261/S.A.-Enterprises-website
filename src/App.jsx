import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WaterComposition from './components/WaterComposition';
import Products from './components/Products';
import DeliveryService from './components/DeliveryService';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-sky selection:text-white">
      <Navbar />
      <Hero />
      <WaterComposition />
      <DeliveryService />
      <Products />

      {/* Kept existing sections as secondary info */}
      <Services />
      <div className="bg-gray-50 py-8">
        <TrustStrip />
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
