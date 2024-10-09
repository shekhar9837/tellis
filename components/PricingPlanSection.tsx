import Image from 'next/image';
import React from 'react';

const PricingPlanSection = () => {
  const services = [
    {
      name: 'Hair Cut',
      price: '$10',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
      name: 'Shaving',
      price: '$40',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
      name: 'Hair Styling',
      price: '$25',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
      name: 'Beard Trimming',
      price: '$25',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
      name: 'Hair Trimming',
      price: '$30',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
      name: 'Face Cleaning',
      price: '$60',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
      name: 'Kids Hair Cut',
      price: '$15',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
      name: 'Mustache Trim',
      price: '$12',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
  ];

  return (
    <section className="py-16 bg-[#FDF8E9]">
      <div className="container mx-auto px-4 flex flex-col items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Barbershop Pricing Plan</h2>
        <div className='flex items-center'>
          <div className='w-20 h-[1px] bg-text'></div>
          <div><Image
            src='/assets/single-mustache.png'
            width={300}
            height={300}
            alt='mustache'
            className='w-12 '
          /></div>
          <div className='w-20 h-[1px] bg-text'></div>
        </div>
      </div>

      <div className="container  px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-rows-3 mx-8">
        {services.map((service) => (
          <div key={service.name} className=" p-6 mx-16 ">
            <div className='flex justify-between items-center'>

            <h3 className="text-xl font-semibold text-gray-800 ">{service.name}</h3>
            <div className='text-text font-bold'>

            .........................................................
            </div>
            <p className="text-2xl font-bold text-gray-900 ">{service.price}</p>
            </div>
            <p className="text-xs text-gray-800">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-text text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
          VIEW MORE
        </button>
      </div>
    </section>
  );
};

export default PricingPlanSection;
