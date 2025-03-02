import React, { useEffect } from 'react';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles

const JoinUs = () => {
  useEffect(() => {
    // Initialize AOS with settings
    AOS.init({
      duration: 1000,  // Animation duration in ms
      once: false,  // Keep animations active on every scroll
      offset: 200,  // Trigger animation 200px before it reaches the viewport
    });
  }, []);

  return (
    <div className="px-4 py-8" style={{ marginTop: '15px', marginLeft: '15px', marginRight: '15px' }}>
      {/* Main Box */}
      <div
        className="flex items-center p-8 bg-[#18181B] rounded-3xl shadow-xl relative overflow-hidden"
        style={{ width: '100%', height: '500px' }}
        data-aos="fade-up"  // Add AOS data attribute for animation
      >
        {/* Left Section: Text Content */}
        <div className="flex-1 text-white">
          {/* Heading */}
          <h2 className="text-4xl font-semibold leading-tight mb-8">
            Join 100K+ sellers and buyers already<br />doing business on AcquiSell
          </h2>
          {/* Paragraph */}
          <p className="text-lg mb-12">
            AcquiSell is M&A’s largest AI-powered marketplace, connecting buyers and sellers efficiently and securely.
          </p>
          
          {/* Buttons */}
          <div className="flex gap-6">
            {/* Button 1 */}
            <button
              className="bg-[#5567FF] text-white py-3 px-8 rounded-[8px] flex items-center gap-2 hover:bg-[#4457D5] transition-all duration-300"
              style={{ fontSize: '16px' }}
            >
              As a Seller
              <span>&#8594;</span>
            </button>

            {/* Button 2 */}
            <button
              className="border border-[#5567FF] text-[#5567FF] py-3 px-8 rounded-[8px] flex items-center gap-2 hover:bg-[#5567FF] hover:text-white transition-all duration-300"
              style={{ fontSize: '16px' }}
            >
              As a Buyer
              <span>&#8594;</span>
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div
          className="absolute top-25 right-[-50px] transform -translate-y-1/2"
          data-aos="fade-left"  // AOS animation for image (fade from left)
        >
          <img
            src="public/image/logo2.png"  // Replace with your image URL
            alt="Join AcquiSell"
            className="w-[300px] h-auto rounded-lg opacity-80 transition-all duration-500 hover:opacity-100 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
