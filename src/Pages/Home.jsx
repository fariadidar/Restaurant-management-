import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import Reservation from '../Components/Reservation';
import Products from '../Components/Products';
import About from '../Components/About';

import Navbar from "../Components/Shared/Navbar";


const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <HeroBanner />
      <Reservation />
      <Products />
      <About />
      
    </div>
  );
};

export default Home;
