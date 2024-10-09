"use client";

import React from "react";
import { Star } from "lucide-react"; // Assuming you're using the Lucide icon library
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Robert Fox",
      profession: "Writer",
      quote: "Just came back home and should say that it is definitely a great experience. I would recommend it for everyone who needs a bike for a short term or wants to try something new",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
      rating: 5,
    },
    {
      name: "Marvin McKinney",
      profession: "Businessman",
      quote:"Amazing service Claire helped me reduce the shipping price a little and shipped it immediately after purchasing. The amethyst cave I got is a beauty, and I could not be happier",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
      rating: 4,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (v, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-500" : "text-gray-300"
        }`}
        fill={i < rating ? "currentColor" : "none"}
      />
    ));
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4 flex flex-col items-center  mb-16">
          <h2 className="text-2xl font-bold text-text mb-4">Testimonials</h2>
          <p className="text-4xl text-gray-600">Hear from our customers</p>
          <div className="flex items-center">
            <div className="w-20 h-[1px] bg-text"></div>
            <div>
              <Image
                src="/assets/single-mustache.png"
                width={300}
                height={300}
                alt="mustache"
                className="w-12 "
              />
            </div>
            <div className="w-20 h-[1px] bg-text"></div>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#252424] p-6 shadow-md rounded-lg flex flex-row items-start "
            >
              <div className="w-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
              </div>
              <div>
                <p className="text-lg  mb-4">&quot;{testimonial.quote}&quot;</p>

                <h4 className="text-xl text-text font-bold">
                  {testimonial.name}
                </h4>
                <p className="text-white my-2 text-sm">
                  {testimonial.profession}
                </p>
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
