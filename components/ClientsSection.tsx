import Image from 'next/image';
import React from 'react';

const ClientsSection = () => {
  const clients = [
    { name: 'Client 1', logo: '/assets/client.jpeg' },
    { name: 'Client 1', logo: '/assets/client1.jpeg' },
    { name: 'Client 1', logo: '/assets/client1.jpeg' },
    { name: 'Client 1', logo: '/assets/4.jpeg' },
    // { name: 'Client 1', logo: '/assets/client3.png' },
    // { name: 'Client 2', logo: 'path/to/logo2.png' },
   
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Clients</h2>
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
        </div>
      </div>

      <div className="container mx-auto px-4 flex items-center justify-center gap-8">
        {clients.map((client, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image src={client.logo} alt={client.name} className="h-32 w-auto" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
