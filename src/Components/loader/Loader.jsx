import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; 

const Loader = () => {
  return (
    <div className="h-[552px] w-full bg-[#ECF3FF] flex justify-between p-10 relative rounded-lg shadow-lg">
      {/* Left Column */}
      <div className="w-1/2 h-full pt-16">
        <h2 className="text-5xl font-achivo font-semibold">Sell your business on the </h2>
        <h2 className="text-5xl font-semibold">largest AI powered</h2>
        <h2 className="text-5xl font-semibold">marketplace</h2>
        <p className="text-lg mt-10">
          Sell your business for top dollar to our 100K+ qualified buyers while
        </p>
        <p className="text-lg mt-1">
          paying no fees and not having to sign any long term contracts.
        </p>
        
        {/* Button and Call Agent */}
        <div className="flex items-center space-x-4 mt-20 gap-8">
          <button className="py-2 px-6 text-white bg-[#5567FF] flex items-center space-x-2 rounded-lg">
            <span>Sell Now</span>
            <FaArrowRight />
          </button>
          <span className="border-[#5567FF] pt-2 text-[#5567FF] border-2 py-1 px-3 rounded-lg">
            Call Our AI Agent 1-888-325-5968
          </span>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/2 relative">
        {/* First Image */}
        <div className="absolute top-4 right-0 z-10 overflow-hidden">
          <img
            src="/image/Ellipse 336.png"  
            alt="Business Image"
            className="h-[45%] w-[45%] object-cover transform translate-x-[120%] "  
          />
        </div>

        {/* Second Image */}
        <div className="absolute top-2 right-1/4 transform -translate-y-45 z-20">
          <img
            src="/image/react.png"  
            alt="Business Image"
            className="h-82 w-82 object-cover transform translate-x-[-2%]  hover:scale-125
             transition-transform duration-500"
          />
        </div>

        {/* Third Image:  */}
        <div className="absolute top-[75%] left-1/2 transform translate-x-[-25%] z-30">
          <img
            src="/image/main.png"  
            alt="Business Image"
            className="h-40 w-82 object-cover transform scale-110 hover:scale-125 transition-transform duration-500"
          />
        </div>
        <div className="absolute top-[40%] right-20 transform translate-x-[-95%] z-30">
          <img
            src="/image/Vector L.png"  
            alt="Business Image"
            className="h-40 w-50  object-cover transform scale-110 hover:scale-125 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
