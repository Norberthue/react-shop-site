import React from 'react'
import Footer from '../Footer'
import {Link} from "react-router-dom"
import { PRODUCTS } from '../../data/products'


export default function Sortiment() {
    
    return (
        <div id={'sortiment'} className='bg-[#F2F2F2] flex flex-col items-center justify-center '>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-y-20 gap-x-16 pt-10 max-w-[1200px] mb-10'>
                
                <div className='flex flex-col justify-center gap-4 cursor-pointer'>
                    <Link  to={PRODUCTS[0].slug}>
                        <div className='bg-white group border border-lime-500 hover:border-8 ease-linear duration-200  flex flex-col items-center justify-center  w-auto h-auto  sm:w-[606px] sm:h-[396px]'> 
                            <img className='object-contain  group-hover:animate-pulse' src='/assets/images/fur7.jpg'></img>
                        </div>
                    </Link>
                    <div className='ml-1'>
                        <p className='font-light'><i className="text-lime-500 fa-solid fa-plus"></i>  Sofas</p>
                    </div>
                </div>
                
                <div className='flex flex-col justify-center gap-4 cursor-pointer'>
                    <Link  to={PRODUCTS[1].slug}>
                        <div className='bg-white group border border-lime-500 hover:border-8 ease-linear duration-200 flex items-center justify-center w-auto h-auto  sm:w-[606px] sm:h-[680px]  '>
                            <img className='object-contain group-hover:animate-pulse' src='/assets/images/fur2.jpg'></img>
                        </div> 
                    </Link>
                    <div className='ml-1'>
                        <p className='font-light'><i className="text-lime-500 fa-solid fa-plus"></i>  Cupboards</p>
                    </div>
                </div>
                
                <div className='flex flex-col justify-center gap-4 cursor-pointer'>
                    <Link  to={PRODUCTS[2].slug}>
                        <div className=' bg-white  group border border-lime-500 hover:border-8 ease-linear duration-200 flex items-center justify-center   w-auto h-auto  sm:w-[606px] sm:h-[396px]'>
                            <img className='object-contain group-hover:animate-pulse' src='/assets/images/fur3.jpg'></img>
                        </div>
                    </Link>
                    <div className='ml-1'>
                        <p className='font-light'><i className="text-lime-500 fa-solid fa-plus"></i>  Tables</p>
                    </div>
                </div>
                
                <div className='flex flex-col justify-center gap-4 cursor-pointer'>
                    <Link  to={PRODUCTS[3].slug}>
                        <div className=' bg-white  group border border-lime-500 hover:border-8 ease-linear duration-200 flex items-center justify-center w-auto h-auto  sm:w-[606px] sm:h-[472px] '>
                            <img className='object-contain group-hover:animate-pulse' src='/assets/images/fur4.jpg'></img>
                        </div>
                    </Link>
                    <div className='ml-1'>
                        <p className='font-light'><i className="text-lime-500 fa-solid fa-plus"></i>  Beds & Mattresses</p>
                    </div>
                </div>
                
                <div className='flex flex-col justify-center gap-4 cursor-pointer'>
                    <Link  to={PRODUCTS[4].slug}>
                        <div className=' bg-white  group border border-lime-500 hover:border-8 ease-linear duration-200 flex items-center justify-center m-auto w-auto h-auto  sm:w-[606px] sm:h-[842px] '>
                            <img className='object-contain group-hover:animate-pulse' src='/assets/images/fur5.jpg'></img>
                        </div>
                    </Link>
                    <div className='ml-1'>
                        <p className='font-light'><i className="text-lime-500 fa-solid fa-plus"></i>  Floor lamps & Fixtures</p>
                    </div>
                </div>
                
                <div className=' bg-white py-2  group border border-lime-500 hover:border-8 ease-linear duration-200 flex items-center justify-center m-auto w-auto h-auto  sm:w-[606px] sm:h-[380px]  '>
                    <div className='flex flex-col gap-5 pl-5'>
                        <h1 className='text-4xl'>Get <span className='text-lime-500 font-semibold'>10%</span> Discount</h1>
                        <p className='text-sm text-gray-500'>Get 10% discount with notified about the latest news and updates no span , we promise.</p>
                        <div className='relative'>
                            <input className='border-2 pl-5 pr-20 text-sm py-3 rounded-3xl focus:outline-none focus:border-lime-500 placeholder-text' placeholder='Enter your email address'></input>
                            <i className="absolute left-[250px] top-4  text-lime-500 group-hover/arrow:ml-1 delay-100 duration-200  fa-solid fa-arrow-right pl-1"></i>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center gap-4 cursor-pointer'>
                    <Link  to={PRODUCTS[5].slug}>
                        <div className=' bg-white  group border border-lime-500 hover:border-8 ease-linear duration-200 flex items-center justify-center w-auto h-auto  sm:w-[606px] sm:h-[396px]'>
                            <img className='object-contain group-hover:animate-pulse' src='/assets/images/fur1.jpg'></img>
                        </div>
                    </Link>
                    <div className='ml-1'>
                        <p className='font-light'><i className="text-lime-500 fa-solid fa-plus"></i>  Commode</p>
                    </div>
                </div>
                
                <div className='flex flex-col justify-center gap-4 cursor-pointer'>
                    <Link  to={PRODUCTS[6].slug}>
                        <div className=' bg-white  group border border-lime-500 hover:border-8 ease-linear duration-200 flex items-center justify-center w-auto h-auto  sm:w-[606px] sm:h-[680px]  '>
                            <img className='object-contain group-hover:animate-pulse' src='/assets/images/fur8.jpg'></img>
                        </div>
                    </Link >
                    <div className='ml-1'>
                        <p className='font-light'><i className="text-lime-500 fa-solid fa-plus"></i>  Shelving</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row px-10 gap-3  xl:gap-96 items-center justify-center 2xl:ml-10  bg-[#EBEFE5] h-[200px] max-w-[1200px] w-[330px] md:w-[600px] xl:w-max mb-12'>
                <div className='flex flex-col gap-4 w-[330px] p-2 lg:w-[400px] '>
                    <h2 className='text-lg font-bold text-center lg:text-left'>Join Our newsletter for 10€ off</h2>
                    <p className='text-[12px] text-center lg:text-left'>We'll email you a voucher worth 10€ off your first order over 50€. By subscribing you agree to our Terms & Conditions 
                        and Privacy & Cookies Policy.
                    </p>
                </div>
                <div className='relative'>
                    <input className='border-2 pl-5 pr-20 text-sm py-3 rounded-3xl focus:outline-none focus:border-lime-500 placeholder-text' placeholder='Enter your email address'></input>
                    <i className="absolute left-[250px] top-4  text-lime-500 group-hover/arrow:ml-1 delay-100 duration-200  fa-solid fa-arrow-right pl-1"></i>
                </div>
            </div>
            
            <Footer></Footer>
        
        </div>
    
    )
}
