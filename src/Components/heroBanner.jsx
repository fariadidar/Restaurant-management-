import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToMenu = () => {
    if (location.pathname !== '/') {
      navigate('/#menu');
    } else {
      const el = document.getElementById('menu');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.hash = '#menu';
      }
    }
  };

  return (
    <section
      id="hero"
      style={{ backgroundImage: 'url(https://i.ibb.co/0vWj5gp/background.jpg)' }}
      className="relative h-screen !w-full bg-cover bg-center flex justify-center bg-gray-500"
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4 text-white">
        <p className="text-lg italic tracking-widest mb-2">welcome to our delicious corner</p>
        <h1 className="text-6xl sm:text-7xl font-fancy tracking-widest mb-6">THE BEST DISHES</h1>
        <p className="text-lg sm:text-xl font-light mb-8">
          We have a proper passion for cooking. Love is the secret ingredient that makes all our meals taste better and magical.
        </p>
        <div className="flex gap-10 border-white text-white">
          <button
            onClick={handleScrollToMenu}
            className="border px-6 py-2 uppercase tracking-widest hover:bg-white hover:text-black transition"
          >
            View Menu
          </button>
          <button
            onClick={handleScrollToMenu}
            className="border px-6 py-2 uppercase tracking-widest hover:bg-white hover:text-black transition"
          >
            View Shop
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
