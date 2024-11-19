import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col py-4 sm:py-0 sm:flex-row pl-10 pr-10  xl:px-60 bg-black 2xl:w-[1900px] xl:h-[210px] text-white items-center justify-between gap-4 md:gap-8'>
        <div className='flex gap-4  md:gap-10'>
            <h3 className='cursor-pointer'>Policy</h3>
            <h3 className='cursor-pointer'>Terms & Conditions</h3>
            <h3 className='cursor-pointer'>Help</h3>
        </div>
        <div className='flex flex-col '>
            <img className=' lg:mb-10 xl:mt-12' src='/assets/images/title.png'></img>
            <p className='text-gray-500'>Copyring ©. All right reserved</p>
        </div>
        <div className='flex gap-6'>
            <h3>Follow Us on Social</h3>
            <i className="fa-brands fa-facebook hover: cursor-pointer"></i>
            <i className="fa-brands fa-instagram hover: cursor-pointer"></i>
            <i className="fa-brands fa-google hover: cursor-pointer"></i>
            <i className="fa-brands fa-youtube hover: cursor-pointer"></i>
        </div>
    </footer>
  )
}
