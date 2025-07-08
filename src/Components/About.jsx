import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>


      {/* About Us Section */}
      <section id="about" className="bg-[#0f1311] text-[#d6b179] py-20 px-6 md:px-20 text-center relative">
        <h4 className="text-xl italic mb-2 font-serif">Our Story</h4>
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="border-t border-[#d6b179] w-10"></span>
          <h2 className="text-4xl font-bold tracking-[0.3em]">ABOUT US</h2>
          <span className="border-t border-[#d6b179] w-10"></span>
        </div>
        <p className="text-white max-w-3xl mx-auto text-base md:text-lg leading-7 font-light mt-6">
          Welcome to <strong>Flavours by Sahiba</strong> – where every bite celebrates culture, comfort, and creativity. Located in the heart of Chittagong, our journey began with a simple goal: to serve soulful food with a unique twist. From crispy South Indian delicacies and flavorful appetizers to rich, aromatic coffees and refreshing drinks, every item on our menu is thoughtfully prepared to delight your senses. Whether you're here for a cozy meal or a quick sip with friends, we’re proud to offer a welcoming space filled with great taste and warm hospitality. Thank you for being part of our story — we look forward to serving you again and again.
        </p>
        <Link to="#" className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center border border-[#d6b179] rounded-full text-[#d6b179] hover:bg-[#d6b179] hover:text-black transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1311] text-white text-center py-10 px-4">
        <div className="space-y-2 text-sm leading-relaxed font-light">
          <p>Sanmer Elvera</p>
          <p>SS Khaled Road,<br /> Chattogram 4203</p>
          <p className="mt-2">+880987644433</p>
          <p className="text-[#d6b179]">Reservations</p>
          <p className="mt-2">Open: 12:30 pm – 12:00 am</p>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-6">
          <Link to="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:bg-[#d6b179] hover:text-black transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22,12A10,10,0,1,0,10.9,21.95V14.89H8v-3H10.9V9.11c0-2.86,1.7-4.44,4.3-4.44a17.52,17.52,0,0,1,2.54.22V7.9H16.71c-1.24,0-1.63.77-1.63,1.56v1.43h2.78l-.44,3H15.08v7.06A10,10,0,0,0,22,12Z" />
            </svg>
          </Link>
          <Link to="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:bg-[#d6b179] hover:text-black transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M7,2A5,5,0,0,0,2,7V17a5,5,0,0,0,5,5H17a5,5,0,0,0,5-5V7a5,5,0,0,0-5-5ZM12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm6-9a1.25,1.25,0,1,1-1.25-1.25A1.25,1.25,0,0,1,18,8Z" />
            </svg>
          </Link>
        </div>

        <p className="text-xs mt-6">Copyright © 2024 Flavours by Sahiba. All Rights Reserved</p>
      </footer>
    </>
  );
};

export default About;
