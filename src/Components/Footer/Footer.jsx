import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#18181B] text-white py-16 px-4 relative">
      {/* Footer Main Content */}
      <div className="max-w-screen-lg mx-auto flex justify-between px-4">
        {/* First Column */}
        <div className="w-1/4">
          <div className="flex items-center mb-6">
            <img src="/image/Group 3.png" alt="AcquiSell Logo" className="w-13 h-8 mr-4" />
          </div>
          <p className="text-xs gap-5">
            AcquiSell is M&A’s largest AI powered marketplace. Sellers <br /> sell for free and buyers have access to an exclusive flow of opportunities not found anywhere else.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-12">
            <a href="https://facebook.com" className="bg-[#5567FF] p-2 rounded-full hover:bg-[#4457D5] transition-all duration-300">
              <FaFacebook className="text-white" />
            </a>
            <a href="https://instagram.com" className="bg-[#5567FF] p-2 rounded-full hover:bg-[#4457D5] transition-all duration-300">
              <FaInstagram className="text-white" />
            </a>
            <a href="https://twitter.com" className="bg-[#5567FF] p-2 rounded-full hover:bg-[#4457D5] transition-all duration-300">
              <FaTwitter className="text-white" />
            </a>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-1/4">
          <h3 className="text-xl font-semibold mb-4">Seller</h3>
          <p className="text-xs mb-2">Sell your online business</p>
          <p className="text-xs">Seller pricing</p>
        </div>

        {/* Third Column */}
        <div className="w-1/4">
          <h3 className="text-xl font-semibold mb-4">Buyer</h3>
          <p className="text-xs mb-2">Online businesses for sale</p>
          <p className="text-xs">Buyer pricing</p>
        </div>

        {/* Fourth Column */}
        <div className="w-1/4">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-xs mb-2">100, Tech City, CA 94043</p>
          <p className="text-xs mb-2">(123) 456-7890</p>
          <p className="text-xs">support@AcquiSell.com</p>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="mt-10">
        <hr className="border-t-2 border-[#3A3A41] w-[75%] mx-auto" />
      </div>

      {/* Copyright Text */}
      <div className="absolute left-[25%] mt-4">
        <p className="text-xs">Copyright&copy; AcquiSell 2025</p>
      </div>

      {/* Footer Corner Images */}
      <div className="absolute bottom-4 left-4">
        <img src="/image/gray.png" alt="Footer Left Image" className="w-60 h-60 opacity-70 hover:opacity-100 transition-all duration-300" />
      </div>

      <div className="absolute top-4 right-4">
        <img src="/image/blue.png" alt="Footer Right Image" className="w-20 h-20 opacity-70 hover:opacity-100 transition-all duration-300" />
      </div>
    </div>
  );
};

export default Footer;
