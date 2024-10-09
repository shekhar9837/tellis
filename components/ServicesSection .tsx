import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Hair Cut",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien."
    },
    {
      title: "Shaving",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien."
    },
    {
      title: "Hair Color",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien."
    },
    {
      title: "Beard Trim",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien."
    },
  ];

  return (
    <section className="bg-[#FDF8E9] w-full h-screen py-16">
      <div className=" mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
      </div>
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
            <a
              href="#"
              className="inline-block border border-[#CCA34C] text-[#CCA34C] px-4 py-2 rounded-md  transition duration-300"
            >
              READ MORE
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
