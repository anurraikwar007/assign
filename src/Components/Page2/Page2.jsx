import React from 'react';

const Page2 = () => {
  return (
    <div className="p-6 gap-10 mt-[5%]">
      {/* Container Div */}
      <div className="flex bg-[#FAFAFA] rounded-2xl p-6">
        {/* Left Div  */}
        <div className="h-full w-1/2 flex-1">
          
          <img src="/image/ProfileG.png" alt="Image 1" className=" top-56 w-500 h-100 object-cover rounded-lg  transform translate-x-[-2%]  hover:scale-125
             transition-transform duration-500" />
        </div>

        {/* Right Div  */}
        <div className="h-full w-1/2 pl-6">
          <p className="font-bold text-4xl text-center ">Benefits of selling your</p>
          <p className="font-bold text-4xl text-center ">business with AcquiSell</p>
          <ul className="space-y-4 mt-10">
            <li className="flex items-center text-black p-4">
              <div className="w-4 h-4 bg-[#32D3A5] rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm m-4">&#10003;</span> {/* Right Checkmark Icon */}
              </div>
              You don’t pay anything. The buyers compensate us if a transaction occurs.
            </li>
            <li className="flex items-center text-black p-4">
              <div className="w-6 h-4 bg-[#32D3A5] rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">&#10003;</span> {/* Right Checkmark Icon */}
              </div>
              We have a very large database of buyers (100K+) and their specific search criteria; we will only introduce you to buyers you fit best with.
            </li>
            <li className="flex items-center text-black p-4">
              <div className="w-8 h-4 bg-[#32D3A5] rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">&#10003;</span> {/* Right Checkmark Icon */}
              </div>
              You won’t waste any time with tire kickers as all of our buyers are either
              accredited investors or institutional buyers and have budgets
              committed to making business acquisitions.
            </li>
            <li className="flex items-center text-black p-4">
              <div className="w-6 h-4 bg-[#32D3A5] rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">&#10003;</span> {/* Right Checkmark Icon */}
              </div>
              Everything will be transparent; you get to screen all buyers so none of your partners, clients, or employees will know you’re selling.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page2;
