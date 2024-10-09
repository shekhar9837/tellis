import Image from 'next/image';
import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    { name: 'DAVID', role: 'Hair Cut Specialist', image:'/assets/businessman-watching-time-his-watch-hipster-jacket-looks-clock-129263211.webp' },
    { name: 'CHARLIE', role: 'Hair Color Specialist', image:'/assets/standing-holding-equipment-handsome-barber-salon-standing-holding-equipment-handsome-barber-salon-296415721.webp' },
    { name: 'PAUL', role: 'Beard & Trimming' , image:'/assets/male-barber-portrait-men-hair-salon-male-barber-portrait-men-hair-salon-handsome-man-hairdresser-working-place-modern-121114592.webp' },
    { name: 'PAUL', role: 'Beard & Trimming' , image:'/assets/male-barber-portrait-men-hair-salon-male-barber-portrait-men-hair-salon-handsome-man-hairdresser-working-place-modern-121114592.webp' },
    { name: 'Putin', role: 'Hair Color Specialist', image:'/assets/standing-holding-equipment-handsome-barber-salon-standing-holding-equipment-handsome-barber-salon-296415721.webp' },
    // { name: 'SAM', role: 'Hair Cut Specialist' },
    // { name: 'DAVID', role: 'Hair Cut Specialist', image:'/assets/businessman-watching-time-his-watch-hipster-jacket-looks-clock-129263211.webp' },
    // { name: 'RICHARD', role: 'Beard & Trimming' },
  ];

  return (
    <section className="py-16 bg-gray-50">
       
      <div className="flex items-center flex-col mx-auto px-4 text-center mb-8">
       
        <p className="text-lg text-text">Specialists</p>
        <h2 className="text-3xl font-bold text-black ">Our Team</h2>
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

      <div className="container mx-auto px-4 flex flex-row items-center justify-center gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className=" bg-[#B78E36]  text-center">
            <Image
              src={member.image}
              width={200}
              height={200}
              alt={member.name}
              className='w-auto h-[20rem]'
              />
            <div className="text-2xl font-bold text-white mt-2">{member.name}</div>
            <p className="text-white text-sm mb-2">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
