import React from 'react'

export default function Footer() {
  return (
    <footer className=' bg-gray-700 h-40 p-5 sm:p-[50px] flex flex-col sm:flex-row justify-between items-center font-medium  text-white'>
        <div className='flex  md:flex-col lg:flex-row  gap-4  lg:gap-10'>
            <h3 className='cursor-pointer'>Policy</h3>
            <h3 className='cursor-pointer hidden sm:block'>Terms & Conditions</h3>
            <h3 className='cursor-pointer'>Help</h3>
        </div>
        <div className=''>
            <img className='w-32 xl:w-52' src='/assets/images/title.png'></img>
          
        </div>
        <div className='flex  gap-6 '>
            <h3 className='hidden lg:block'>Follow Us on Social</h3>
            <i className="fa-brands fa-facebook hover: cursor-pointer"></i>
            <i className="fa-brands fa-instagram hover: cursor-pointer"></i>
            <i className="fa-brands fa-google hover: cursor-pointer"></i>
            <i className="fa-brands fa-youtube hover: cursor-pointer"></i>
        </div>
    </footer>
  )
}
