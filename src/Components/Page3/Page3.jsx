import React, { useEffect } from 'react';
import AOS from 'aos';                // Import AOS for animations
import 'aos/dist/aos.css';           // Import AOS CSS

const Page3 = () => {
  useEffect(() => {
    // Initialize AOS for animation on scroll
    AOS.init({
      duration: 1000,  // Duration for each animation
      once: false,     // Allow animation to trigger every time the element enters the viewport
      offset: 120,     // The trigger point for animation
    });
  }, []);

  // Define text and image data 
  const rowsData = [
    {
      text: "Upload business details",
      paragraph: "Either call our AI agent that will walk you through all the information we need to be able to present your business to our buyer network or simply click on our button below to upload all your information on our platform.",
      imageSrc: "/image/row1.png",
      textStyles: "text-xl font-semibold text-black", 
      paragraphStyles: "text-base text-gray-600",
    },
    {
      text: "Valuation process & promotion to buyers",
      paragraph: "We will consult with you on a fair asking price and we will prepare your listing on our website. Only our buyers will get visibility to the high level details of your business and you will have visibility into all the buyers that will inquire about your business.",
      imageSrc: "/image/row2.png",
      textStyles: "text-2xl font-bold text-black", 
      paragraphStyles: "text-lg text-gray-700",
    },
    {
      text: "Screening of buyers",
      paragraph: "You will have the opportunity to see the buyer’s profile before any information will be shared with the interested party so that no competitors, clients or employees can see your company for sale.",
      imageSrc: "/image/row3.png",
      textStyles: "text-3xl font-medium text-black",
      paragraphStyles: "text-base text-gray-600",
    },
    {
      text: "Answering inquiries",
      paragraph: "We will collect as much information from you up front as possible and we will conduct all initial meetings with all interested parties.",
      imageSrc: "/image/row4.png",
      textStyles: "text-2xl font-semibold text-black", 
      paragraphStyles: "text-base text-gray-700",
    },
    {
      text: "Negotiations and offers",
      paragraph: "Our advisors will support in negotiations, will help you review and assess offers, and more.",
      imageSrc: "/image/row5.png",
      textStyles: "text-2xl font-bold text-black", 
      paragraphStyles: "text-lg text-gray-600",
    },
    {
      text: "Due Diligence",
      paragraph: "We will help you gather all the documents the buyers will need during the due diligence phase and we’ll address all questions/concerns to maintain momentum towards closing.",
      imageSrc: "/image/row6.png",
      textStyles: "text-xl font-medium text-black",
      paragraphStyles: "text-base text-gray-500",
    },
    {
      text: "Closing and transition",
      paragraph: "The closing represents the culmination of our journey together. We will work with you and the buyer to ensure a seamless transition.",
      imageSrc: "/image/row7.png",
      imageHeight: '275px',  
      imageWidth: '400px',   
      textStyles: "text-2xl font-bold text-black", 
      paragraphStyles: "text-lg text-gray-700",
    },
  ];

  return (
    <div className="min-h-screen p-6 mt-5 gap-10 flex justify-center">
      {/* Content Wrapper */}
      <div className="w-full max-w-[1067.2px]">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-semibold">How We Help You Sell</h1>
          <p className="text-4xl font-semibold mt-2">Your Business</p>
        </header>

        {/* Rows Section */}
        <div className="space-y-16">
          {rowsData.map((row, index) => (
            <div
              key={index}
              className={`flex justify-between gap-20`}  
              style={{ marginBottom: '40px' }}
            >
              {index % 2 === 0 ? (
                // Text on the left and image on the right for even index (1st, 3rd, 5th row)
                <>
                  <div
                    className="flex-1 p-6 bg-white rounded-lg shadow-md"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    style={{
                      width: '48%', 
                      height: '300px',
                    }}
                  >
                    <h2 className={`mb-4 ${row.textStyles}`}>{row.text}</h2>
                    <p className={`mb-6 ${row.paragraphStyles}`}>{row.paragraph}</p>

                    {index === 0 && (
                      <button
                        className="bg-[#5567FF] text-white py-2 px-6 rounded-full flex items-center gap-2 hover:bg-[#4457d5]"
                        style={{ fontSize: '16px' }}
                      >
                        Sign Up
                        <span>&#8594;</span>
                      </button>
                    )}
                  </div>

                  {/* Right Column (Image Column) */}
                  <div
                    className="flex-1 p-6 hover:scale-105 hover:shadow-lg" 
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                    style={{
                      backgroundColor: '#ECF3FF', 
                      borderRadius: '20px', 
                      transition: 'transform 0.3s ease-in-out', 
                      width: '48%', 
                      height: '300px',
                      overflow: 'visible', // Allow the image to overflow its container
                    }}
                  >
                    <div className="w-full h-full">
                      <img
                        src={row.imageSrc}
                        alt="Sample"
                        className="w-full h-full object-cover rounded-lg" 
                        style={{
                          height: row.imageHeight || 'auto',
                          width: row.imageWidth || 'auto',
                          marginRight: '-50px',  // Negative margin to push the image outside of the container
                        }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                // Image on the left and text on the right for odd index (2nd, 4th, 6th row)
                <>
                  <div
                    className="flex-1 p-6 hover:scale-105 hover:shadow-lg"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    style={{
                      backgroundColor: '#ECF3FF', 
                      borderRadius: '20px', 
                      transition: 'transform 0.3s ease-in-out', 
                      width: '48%', 
                      height: '300px',
                    }}
                  >
                    <div className="w-full h-full">
                      <img
                        src={row.imageSrc}
                        alt="Sample"
                        className="w-full h-full object-cover rounded-lg"
                        style={{
                          height: row.imageHeight || 'auto',
                          width: row.imageWidth || 'auto',
                          
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="flex-1 p-6 bg-white rounded-lg shadow-md"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                    style={{
                      width: '48%', 
                      height: '300px',
                    }}
                  >
                    <h2 className={`mb-4 ${row.textStyles}`}>{row.text}</h2>
                    <p className={`mb-6 ${row.paragraphStyles}`}>{row.paragraph}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page3;
