import Image from 'next/image';
import React from 'react';

const StatisticsSection = () => {
  return (
    <section className="bg-[#FDF8E9] py-16">
     

      <div className="container mx-auto px-10 flex  items-center  justify-between">
        <div className=" text-center ">
          <div className="text-5xl font-bold text-gray-800 mb-2">2000+</div>
          <h3 className="text-lg text-gray-600">HAPPY CLIENTS</h3>
       
         </div>
         
        <Image
          src="/assets/scissor.png"
          alt="Happy clients"
          className="w-16 h-auto mx-4"
          width="300" 
          height="300"

        />

        <div className=" p-6  text-center">
          <div className="text-5xl font-bold text-gray-800 mb-2">500</div>
          <h3 className="text-lg text-gray-600">HAIR CUTS</h3>
        </div>
         
        <Image
          src="/assets/scissor.png"
          alt="Happy clients"
          className="w-16 h-auto"
          width="300" 
          height="300"

        />

        <div className="bg-white p-6text-center">
          <div className="text-5xl font-bold text-gray-800 mb-2">150</div>
          <h3 className="text-lg text-gray-600">STYLERS</h3>
        </div>
         
        <Image
          src="/assets/scissor.png"
          alt="Happy clients"
          className="w-16 h-auto"
          width="300" 
          height="300"

        />

        <div className="bg-white p-6  text-center">
          <div className="text-5xl font-bold text-gray-800 mb-2">35</div>
          <h3 className="text-lg text-gray-600">BRANCHES</h3>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
