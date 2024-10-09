import { Mail, MapPinHouse, Phone } from 'lucide-react';
import React from 'react';
import Mustache from './Mustache';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BARBERZ</h3>
            <p className="text-gray-400 mb-4">
              There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.
            </p>
            <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Email*"
              className="p-2  border border-gray-300 w-full my-2"
              required
            />
            <button type="submit" className="bg-text text-white p-2 my-2 w-48 rounded-3xl border border-white ">
              Subscribe
            </button>
          {/* <h3 className="text-xl font-bold mb-4">Subscribe</h3> */}
          </form>
            <div className="mt-8 flex flex-col items-center">
          
        </div>
          </div>
          <div className='flex gap-10 items-start justify-center'>
            <div>

            <h3 className="text-xl font-bold ">Quick Links</h3>
            <div className='w-28  h-auto mb-4'>

            <Mustache/>
            </div>
            <ul className="text-white uppercase text-sm">
              <li className='mb-2'><a href="#contact" className="hover:underline ">Contact Us</a></li>
              <li  className='mb-2'><a href="#home" className="hover:underline">Home</a></li>
              <li  className='mb-2'><a href="#gallery" className="hover:underline">Gallery</a></li>
              <li  className='mb-2'><a href="#about" className="hover:underline">About Us</a></li>
            </ul>
            </div>
            <div>

            <h3 className="text-xl font-bold ">Services</h3>
            
            <div className='w-28  h-auto mb-4'>

<Mustache/>
</div>
            <ul className="text-white uppercase text-sm" >
              <li  className='mb-2'><a href="#services" className="hover:underline">Hairs</a></li>
              <li  className='mb-2'><a href="#contact" className="hover:underline">Beauty </a></li>
              <li  className='mb-2'><a href="#home" className="hover:underline">SPA</a></li>
              <li  className='mb-2'><a href="#gallery" className="hover:underline">Massage</a></li>
              
            </ul>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className='flex flex-col'>

            <p className="mb-6 flex "><Phone className='mx-2 text-text' /> +4125987645</p>
            <p className="mb-6 flex"><Mail className='mx-2 text-text' /> <a href="mailto:barberz.123@info.com" className="hover:underline">barberz.123@info.com</a></p>
            <p className="mb-6 flex"><MapPinHouse className='mx-2 text-text' /> Golden Street, Chinatown, San Francisco</p>
            </div>
          </div>
        </div>

      
      </div>

      <div className="text-center text-gray-400 ">
        <p>Copyright &copy; 2021. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
