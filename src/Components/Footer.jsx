import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <Link to="/">
            <h1 className="text-green-500 font-bold text-2xl">
              OLu-<span className="text-orange-400 font-mono">SeLLz</span>
            </h1>
            <p className="md:w-2/3 flex sm:flex w-1/1 text-gray-600 gap-1">
              The<h1 className="text-green-500 font-bold text-1xl">OLu-</h1>
              <span className="text-orange-400 font-mono">SeLLz</span> way:
              innovation, quality, and excellence.
            </p>
          </Link>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                  <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+234-91-656-426-55</li>
                    <li>olusellz@gmail.com</li>  
          </ul>
        </div>
          </div>

          <div>
              <hr />
              <p className='py-5 text-sm text-center'>Copyright 2024@ olusellz.com- All Right Reserved</p>
          </div>
    </div>
  );
}

export default Footer