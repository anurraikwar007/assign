import React from 'react';

const Faq = () => {
  return (
    <div className="px-4 py-4" style={{ marginTop: '15px', marginLeft: '15px', marginRight: '15px' }}>
      {/* FAQ Box Section */}
      <div
        className="w-full p-6 bg-white border border-[#D3D3D3] rounded-lg shadow-md"
        style={{ paddingBottom: '20px' }}
      >
        {/* FAQ Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
        </div>

        {/* FAQ Items Section */}
        <div className="space-y-4"> {/* Adjusting the gap between boxes */}
          {/* FAQ Box 1 */}
          <div className="flex justify-between items-center p-5 border border-[#D3D3D3] rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-[90%] mx-auto">
            <div className="flex-1">
              <p className="text-lg font-semibold">1. What does AcquiSell do?</p>
            </div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-[#D3D3D3] text-[#D3D3D3] hover:bg-[#f0f0f0] cursor-pointer transition-all duration-300">
              <span className="text-sm">+</span>
            </div>
          </div>

          {/* FAQ Box 2 */}
          <div className="flex justify-between items-center p-5 border border-[#D3D3D3] rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-[90%] mx-auto">
            <div className="flex-1">
              <p className="text-lg font-semibold">2. How long does it take to sell a company?</p>
            </div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-[#D3D3D3] text-[#D3D3D3] hover:bg-[#f0f0f0] cursor-pointer transition-all duration-300">
              <span className="text-sm">+</span>
            </div>
          </div>

          {/* FAQ Box 3 */}
          <div className="flex justify-between items-center p-5 border border-[#D3D3D3] rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-[90%] mx-auto">
            <div className="flex-1">
              <p className="text-lg font-semibold">3. How do buyers find companies?</p>
            </div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-[#D3D3D3] text-[#D3D3D3] hover:bg-[#f0f0f0] cursor-pointer transition-all duration-300">
              <span className="text-sm">+</span>
            </div>
          </div>

          {/* FAQ Box 4 */}
          <div className="flex justify-between items-center p-5 border border-[#D3D3D3] rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-[90%] mx-auto">
            <div className="flex-1">
              <p className="text-lg font-semibold">4. Do you help with NDAs and LOIs?</p>
            </div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-[#D3D3D3] text-[#D3D3D3] hover:bg-[#f0f0f0] cursor-pointer transition-all duration-300">
              <span className="text-sm">+</span>
            </div>
          </div>

          {/* FAQ Box 5 */}
          <div className="flex justify-between items-center p-5 border border-[#D3D3D3] rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-[90%] mx-auto">
            <div className="flex-1">
              <p className="text-lg font-semibold">5. Is my data kept private?</p>
            </div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-[#D3D3D3] text-[#D3D3D3] hover:bg-[#f0f0f0] cursor-pointer transition-all duration-300">
              <span className="text-sm">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
