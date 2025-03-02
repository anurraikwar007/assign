import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md  ">
      {/* Logo */}
      <div className="flex items-center">
        
        <img 
          src="/image/Group 2.png" 
          className="w-8px h-[36.52px] relative top-[5px]" 
          alt="logo" 
        />

      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <a href="#sellers" className="text-sm text-black hover:text-blue-500">Sellers</a>
        <a href="#buyers" className="text-sm text-black hover:text-blue-500">Buyers</a>
        <a href="#viewlistings" className="text-sm text-black hover:text-blue-500">View Listings</a>
      </div>

      {/* Authentication Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2  hover:bg-gray-100">Login</button>
        <button className="px-6 py-2 bg-[#5567FF] text-white rounded hover:bg-[#4358e1]">Get Started</button>
      </div>
    </nav>
  );
}

export default NavBar;
