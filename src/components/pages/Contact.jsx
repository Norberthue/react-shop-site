import React from 'react'
import Header from '../Header'
export default function Contact(props) {
    const {page, setPage, switchPages} = props
  return (
    <div className='text-white duration-200 ease-linear'>
        <Header page={page} setPage={setPage} switchPages={switchPages}>
        </Header>

        <div className='flex flex-col justify-center items-center sm:gap-2 lg:ml-12 h-[484px] '>
          <div>
            <h1 className='font-semibold text-4xl sm:text-6xl '><span className='text-lime-500'>Contact</span> <span className='underline underline-offset-8 decoration-lime-500'>Us</span></h1>
          </div>

          <div className='flex flex-col sm:flex-row justify-center gap-2 xl:gap-56 mt-2 sm:mt-8 ml-20'>
              <div className='flex flex-col basis-1/4 sm:gap-10  sm:pl-5 sm:pr-5 '>
                  <h1 className='sm:text-3xl text-lime-500 mt-2 uppercase font-semibold mb-2'>Get in touch anytime</h1>
                  <div className='flex gap-5 items-center'>
                    <i className="fa-solid fa-phone text-lime-500"></i> <p>+86 913855699</p>
                  </div>
                  <div className='flex gap-5 items-center'> 
                    <i className="fa-solid fa-envelope text-lime-500"></i> <p>simplewood@gmail.com</p>
                  </div>
                  <div className='flex gap-5 items-center'>
                    <i className="fa-solid fa-map-location-dot text-lime-500"></i> <p>8 /5-7 Tallebudgera Creek Road Burlogh Queensland</p>
                  </div>   
              </div>

              <div className='flex flex-col  gap-6  sm:pl-5 pr-5 '>
                  <h1 className='sm:text-3xl  mt-2 uppercase font-semibold text-lime-500'>Send us message</h1>
                  <div className='flex flex-col lg:flex-row  gap-4'>
                    <div className='flex gap-5 items-center'>
                    <input className='focus:outline-none placeholder-white pl-2 border-lime-500 border-b-2 bg-transparent' placeholder='Name'></input>
                  </div>
                  <div className='flex gap-5 items-center'>       
                    <input className='focus:outline-none placeholder-white pl-2 border-lime-500 border-b-2 bg-transparent' placeholder='Email'></input>
                  </div>
                  </div>
                  
                  <div className='flex lg:flex-col gap-5 '>
                    <input placeholder='Message' className='md:pb-10 lg:pb-36  pb-10  pl-2 placeholder-white border-lime-500 border-b-2 focus:outline-none bg-transparent'></input>
                  </div>

                  <button className=' text-left  group/arrow pt-2 pb-2 pl-5 pr-5 w-28 font-semibold  text-white transition duration-150 ease-in-out  bg-lime-500 hover:bg-lime-600 active:bg-lime-500' >
                    SEND <i className="group-hover/arrow:ml-1 delay-100 duration-200 fa-solid fa-arrow-right pl-1 "></i>
                  </button>
              </div>
              
          </div>
        </div>
    </div>
  )
}
