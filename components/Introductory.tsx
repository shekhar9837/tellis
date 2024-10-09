import Image from 'next/image';
import React from 'react';

const Introductory = () => {
  return (
    <section className="bg-[#FDF8E9] w-full h-screen flex  justify-center items-center">
      <div className="w-1/2  px-4 text-center">
        {/* Introducing Title */}
        <h2 className="text-lg md:text-xl text-[#CCA34C] mb-2">Introducing</h2>

        {/* BARBERZ Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          BARBERZ..The Barbershop Since 1990
        </h1>

        {/* Since Year */}
        {/* <h3 className="text-xl text-gray-700 mb-6">Since 1990</h3> */}
        <div className=' flex items-center justify-center  '>
          <Image
          src='/assets/mustache.png'
          width={500}
          height={500}
          alt='mustache'
          className=' w-12 h-12'
          
          />
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Barber is a person whose occupation is mainly to cut, dress, groom, style, and shave men's and boys' hair. A barber's place of work is known as a "barbershop" or a "barber's." Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="#about"
          className="inline-block bg-[#CCA34C] text-white text-lg px-8 py-3 rounded-md hover:bg-[#94722a] transition duration-300"
        >
          MORE ABOUT US
        </a>
      </div>
      <div className='w-1/3 '>
        <Image
          src='/assets/intro.png'
          alt='Barbershop'
          width={1920}
          height={1080}
          className=' w-full p-6'
        />
       
      </div>
    </section>
  );
};

export default Introductory;
