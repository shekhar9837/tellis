"use client";

import React, { useState } from "react";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    services: "",
    barber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedData = {
      ...formData,
      email: formData.email.trim().toLowerCase(),
    };
    console.log("Appointment request:", sanitizedData);
  };

  const commonInputStyles =
    "w-full p-2 border bg-transparent text-white placeholder-white focus:outline-none";

  return (
    <section
      className="bg-yellow-800 w-full h-full flex justify-between bg-blend-multiply"
      style={{
        backgroundImage: `url("assets/pexels-canik-20785318.jpg")`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundColor: "bg-text",
      }}
    >
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="w-1/2 flex flex-col items-start justify-center">
          <h5 className="text-3xl font-medium text-text">Contact</h5>
          <h1 className="text-3xl font-bold text py-2">Get In Touch</h1>
          <p>
            Suspendisse pretium felis dolor, sed placerat diam blandit vitae. Sed eu nisl massa. Phasellus vehicula tristique orci ut ultrices. Duis eu libero augue. In vulputate sodales tempus. Phasellus dolor orci, consectetur in tincidunt eget, consectetur non orci.
          </p>
        </div>
      </div>

      <div className="bg-[#292727B2] w-1/3">
        <div className="container mx-auto px-4 text-center my-8">
          <h2 className="text-3xl font-bold text-[#CCA34C]">Make an Appointment</h2>
          <p className="text-lg text-white mb-4">
            Barber is a person whose occupation is mainly to cut, dress, and groom.
          </p>
        </div>

        <div className="container mx-auto px-4">
          <form onSubmit={handleSubmit} className="p-8 shadow-md flex items-center flex-col">
            <div className="flex flex-col items-center w-full text-white">
              <div className="my-6 flex gap-4 w-full">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={commonInputStyles}
                  required
                />

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={commonInputStyles}
                  required
                />
              </div>

              <div className="my-6 flex gap-4 w-full">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={commonInputStyles}
                  required
                />

                <input
                  type="text"
                  name="time"
                  id="time"
                  placeholder="Time"
                  value={formData.time}
                  onChange={handleChange}
                  className={commonInputStyles}
                  required
                />
              </div>

              <div className="my-6 flex gap-4 w-full">
                <select
                  name="services"
                  id="services"
                  value={formData.services}
                  onChange={handleChange}
                  className={commonInputStyles}
                  required
                >
                  <option value="">Choose Service</option>
                  <option value="Haircut">Haircut</option>
                  <option value="Shave">Shave</option>
                  <option value="Trim">Trim</option>
                </select>

                <select
                  name="barber"
                  id="barber"
                  value={formData.barber}
                  onChange={handleChange}
                  className={commonInputStyles}
                  required
                >
                  <option value="">Choose Barber</option>
                  <option value="John">John</option>
                  <option value="Mike">Mike</option>
                  <option value="Sarah">Sarah</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 bg-[#CCA34C] text-white font-medium px-6 py-3 hover:bg-gray-700 transition duration-300"
            >
              MAKE AN APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
