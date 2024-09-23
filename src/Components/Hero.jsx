import React from 'react'
import ivoj from '../assets/ivoj.jpg'

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row border border-gray-400">
      {/* Hero left side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-10 lg:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img className="w-full" src={ivoj} alt="" />
      </div>
    </div>
  );
}

export default Hero