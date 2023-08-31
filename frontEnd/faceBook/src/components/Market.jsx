import React from 'react'
import one from '../assets/earphones_c_3.webp';
import two from '../assets/speaker1.webp';
import three from '../assets/headphones_c_2.webp';
import four from '../assets/watch_3.webp';

const Market = () => {
  const link = 'https://e-commerce-website-woad.vercel.app/'
  return (
    <div className='mx-4  md:h-screen h-max'>
      <h1 className='md:text-6xl text-3xl  text-center my-5 font-bold text-orange-500'>Electro</h1>
      <p className='md:text-xl text-base font-semibold mb-10'>Today's pick</p>
      <div className='flex flex-wrap items-center justify-center'>
        <a href={link} className='flex items-center mr-5 bg-white hover:bg-orange-200 w-max px-5 rounded-2xl'>
          <img src={one} className='md:w-52 w-28 mr-10' alt="" />
          <div>
            <p className='font-bold md:text-xl text-lg'>Boat band 300x</p>
            <div className="flex space-x-4">
            <p className='font-bold'>₹1,999</p>
            <p className='line-through'>₹3,999</p>
            </div>
            <p className='text-orange-500 font-bold'>Electro</p>
          </div>
        </a>
        <a className='flex items-center mr-5 mt-5 bg-white hover:bg-orange-200 w-max px-5 rounded-2xl'>
          <img src={two} className='md:w-52 w-28 mr-10' alt="" />
          <div>
            <p className='font-bold md:text-xl text-lg'>Boat Stone 300</p>
            <div className="flex space-x-4">
            <p className='font-bold'>₹3,999</p>
            <p className='line-through'>₹6,999</p>
            </div>
            <p className='text-orange-500 font-bold'>Electro</p>
          </div>
        </a>
        <a className='flex items-center mr-5 mt-5  bg-white hover:bg-orange-200 w-max px-5 rounded-2xl'>
          <img src={three} className='md:w-52 w-28 mr-10' alt="" />
          <div>
            <p className='font-bold md:text-xl text-lg'>Boat Rockerz 300</p>
            <div className="flex space-x-4">
            <p className='font-bold'>₹2,999</p>
            <p className='line-through'>₹5,999</p>
            </div>
            <p className='text-orange-500 font-bold'>Electro</p>
          </div>
        </a>
        <a className='flex items-center mr-5 my-5 bg-white hover:bg-orange-200 w-max px-5 rounded-2xl'>
          <img src={four} className='md:w-52 w-28 mr-10' alt="" />
          <div>
            <p className='font-bold md:text-xl text-lg'>Boat FutureX</p>
            <div className="flex space-x-4">
            <p className='font-bold'>₹1,999</p>
            <p className='line-through'>₹2,399</p>
            </div>
            <p className='text-orange-500 font-bold'>Electro</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Market