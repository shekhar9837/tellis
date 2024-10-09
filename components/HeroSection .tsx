import React from 'react';
import Header from './Header';

const HeroSection = () => {
  return (
    <section className="bg-gray-100  "   style={{ backgroundImage: `url(${'assets/pexels-thgusstavo-1813272.jpg'})`, height: '100vh', backgroundSize: 'cover' }}>
   
      
<Header/>
      <div className="container mx-auto px-4 text-center w-full h-screen flex flex-col justify-center items-center ">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Hairstyle Enhances Your Smile!!
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white mb-8">
          Our barbershop is the territory created purely for males who
          appreciate premium quality, time, and a flawless look.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="#booking"
          className="inline-block  text-white text-lg px-8 py-3 rounded-md bg-[#CCA34C] hover:bg-gray-700 transition duration-300"
        >
          MAKE AN APPOINTMENT
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
