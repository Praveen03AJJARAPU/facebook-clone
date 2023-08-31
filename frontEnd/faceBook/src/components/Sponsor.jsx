import React from 'react'
import one from '../assets/earphones_c_2.webp';
import two from '../assets/earphones_c_3.webp';
import three from '../assets/headphones_c_2.webp';
import four from '../assets/headphones_c_3.webp';

const Sponsor = () => {
  return (
    <div className='px-3 py-2 mx-2 mt-3 rounded-md h-full sticky top-20 bg-white hidden md:block'>
      <p className='text-xl font-bold ml-5 text-blue-800  lg:mb-5'>Sponsored</p>
      <a
        href="https://e-commerce-website-woad.vercel.app/"
        className="flex items-center hover:bg-slate-300 ease duration-100 rounded-md p-3"
      >
        <img src={one} className="w-20 lg:w-32" alt="" />
        <div>
          <p className='font-bold'>Electro neckband</p>
          <p className='text-xs'>e-commerce-website-woad.vercel.app</p>
        </div>
      </a>
      <a
        href="https://e-commerce-website-woad.vercel.app/"
        className="flex items-center hover:bg-slate-300 ease duration-100 rounded-md"
      >
        <img src={two} className="w-20 lg:w-40" alt="" />
        <div>
          <p className='font-bold'>Electro neckband</p>
          <p className='text-xs'>e-commerce-website-woad.vercel.app</p>
        </div>
      </a>
      <a
        href="https://e-commerce-website-woad.vercel.app/"
        className="flex items-center hover:bg-slate-300 ease duration-100 rounded-md"
      >
        <img src={three} className="w-20 lg:w-40" alt="" />
        <div>
          <p className='font-bold'>Electro neckband</p>
          <p className='text-xs'>e-commerce-website-woad.vercel.app</p>
        </div>
      </a>
    </div>
  );
}

export default Sponsor