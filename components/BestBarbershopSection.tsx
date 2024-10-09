import React from 'react';

const BestBarbershopSection = () => {
  return (
    <section className=" bg-gray-700 bg-blend-multiply flex items-center justify-center flex-col" style={{ backgroundImage: `url(${'/assets/accesories.jpeg'})`, height: '80vh', backgroundSize: 'cover' }}>
      <div className="  px-4 flex items-center justify-center flex-col text-center">
        <h2 className="text-4xl font-bold text-text mb-4 uppercase">Best Barbershop In The City</h2>
        <p className="text-5xl text-white mb-6 capitalize">Making you look good <br/> is in our heritage.</p>
        <p className="text-lg text-white mb-8 capitalize font-light">
          Barber is a person whose occupation is mainly to cut, dress, groom, style<br/> and shave men’s and boy’s hair.
        </p>
        <button className="bg-text text-white px-16 py-4 transition duration-300">
          MAKE AN APPOINTMENT
        </button>
      </div>
    </section>
  );
};

export default BestBarbershopSection;
