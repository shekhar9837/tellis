import Image from 'next/image';
import React from 'react';

const OurWorkSection = () => {
  const works = [
    { id: 1, image: '/assets/72139bc34adce7c4d522e016e0c5280e.jpeg', title: 'Stylish Haircut' },
    { id: 2, image: '/assets/72139bc34adce7c4d522e016e0c5280e.jpeg', title: 'Stylish Haircut' },
    { id: 3, image: '/assets/72139bc34adce7c4d522e016e0c5280e.jpeg', title: 'Stylish Haircut' },
    { id: 4, image: '/assets/72139bc34adce7c4d522e016e0c5280e.jpeg', title: 'Stylish Haircut' },
    { id: 5, image: '/assets/72139bc34adce7c4d522e016e0c5280e.jpeg', title: 'Stylish Haircut' },
    { id: 6, image: '/assets/72139bc34adce7c4d522e016e0c5280e.jpeg', title: 'Stylish Haircut' },
    { id: 7, image: '/assets/72139bc34adce7c4d522e016e0c5280e.jpeg', title: 'Stylish Haircut' },
    { id: 8, image: '/assets/72139bc34adce7c4d522e016e0c5280e.jpeg', title: 'Stylish Haircut' },

  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Work</h2>
        <div className='flex items-center justify-center w-full'>
          <div className='w-20 h-[1px] bg-text'></div>
          <div><Image
            src='/assets/single-mustache.png'
            width={300}
            height={300}
            alt='mustache'
            className='w-12 '
          /></div>
          <div className='w-20 h-[1px] bg-text'></div>
        </div>      </div>

      <div className="container mx-auto px-4 flex items-center justify-center flex-wrap gap-8">
        {works.map((work) => (
          <div key={work.id} className="group overflow-hidden">
            <img src={work.image} alt={work.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorkSection;
