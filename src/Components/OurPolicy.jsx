import React from 'react'
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          src={assets.exchange_icon}
          className="w-12 m-auto mb-5"
          alt="Exchange Icon"
        />
        <p className="font-semibold">Hassle-Free Exchanges</p>
        <p className="text-gray-400">
          Enjoy a smooth and simple exchange process. We've got you covered.
        </p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          className="w-12 m-auto mb-5"
          alt="Exchange Icon"
        />
        <p className="font-semibold">3 dayz exchange policy</p>
        <p className="text-gray-400">We provide 3days return policy</p>
      </div>
      <div>
        <img
          src={assets.support_img}
          className="w-12 m-auto mb-5"
          alt="Exchange Icon"
        />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
}

export default OurPolicy