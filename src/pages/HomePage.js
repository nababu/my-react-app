import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Header from '../components/Header';
import { ThemeProvider } from '../context/ThemeContext';
import FlashNews from '../components/FlashNews';
import PromotionalBanners from '../components/PromotionalBanners';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <ThemeProvider>
    <div>
      <Header />
      <Navigation />
      <FlashNews />
      <Hero />
      <PromotionalBanners />
      {/* <Categories />
      <SpecialOffers /> */}
      <Footer />
    </div>
    </ThemeProvider>
  );
};

export default HomePage;
