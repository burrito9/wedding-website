import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Location from './components/Location';
import Footer from './components/Footer';
import Heart from './components/Heart';
import FAQ from './components/FAQ';
import Stay from './components/Stay';
import Weekend from './components/Weekend';
import WeddingDay from './components/WeddingDay';
import RSVP from './components/RSVP';
import Gift from './components/Gift';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="font-montserrat text-gray-800 flex flex-col items-center px-4 sm:px-6 md:px-8 pt-24 pb-12 overflow-x-hidden">
        <div className="w-full max-w-3xl mx-auto space-y-16 sm:space-y-24 text-center">
          <section id="home" className="scroll-mt-20">
            <Hero />
          </section>

          <Location />

          <div className="flex justify-center items-center space-x-4">
            <Heart className="w-8 h-8 text-brand-orange" />
            <Heart className="w-12 h-12 text-brand-orange" />
            <Heart className="w-8 h-8 text-brand-orange" />
          </div>
          
          <section id="stay" className="scroll-mt-20">
            <Stay />
          </section>

          <div className="flex justify-center items-center space-x-4">
            <Heart className="w-6 h-6 text-brand-orange opacity-70" />
            <Heart className="w-10 h-10 text-brand-orange" />
            <Heart className="w-6 h-6 text-brand-orange opacity-70" />
          </div>

          <section id="weekend" className="scroll-mt-20">
            <Weekend />
          </section>
          
          <section id="wedding-day" className="scroll-mt-20">
            <WeddingDay />
          </section>

          <section id="rsvp" className="scroll-mt-20">
            <RSVP />
          </section>

          <div className="flex justify-center items-center space-x-4">
            <Heart className="w-6 h-6 text-brand-orange opacity-70" />
            <Heart className="w-10 h-10 text-brand-orange" />
            <Heart className="w-6 h-6 text-brand-orange opacity-70" />
          </div>

          <section id="registry" className="scroll-mt-20">
            <Gift />
          </section>
          
          <FAQ />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;