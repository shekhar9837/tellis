import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react'; // Import icons from Lucide React (or replace with your preferred icons)

const Header = () => {
  return (
    <header className="bg-[#292727B2]  shadow-md fixed w-full">
      {/* Top bar with contact info and social icons */}
      <div className=" py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm text-white">
          {/* Contact Info */}
          <div className="flex space-x-6">
            <span>+123456789</span>
            <span>barberz.123@info.com</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-white hover:text-black" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-white hover:text-black" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-white hover:text-black" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar with logo and navigation links */}
      {/* <div className="container mx-auto px-4 py-4 flex flex-col items-center justify-between md:flex-row"> */}
        {/* Logo */}
        <div className="container mx-auto px-12 py-2 flex items-center justify-between">
        {/* Left-side Navigation Links */}
        <nav className="flex space-x-8 text-white">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#about" className="hover:text-black">About Us</a>
        </nav>

        {/* Logo in the middle */}
        <div className="text-3xl font-bold text-white">
          BARBERZ
        </div>

        {/* Right-side Navigation Links */}
        <nav className="flex space-x-8 text-white">
          <a href="#team" className="hover:text-black">Team</a>
          <a href="#booking" className="hover:text-black">Booking</a>
          <a href="#contact" className="hover:text-black">Contact Us</a>
        </nav>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
