import React, { Children } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Header from '../Header'
import Sortiment from './Sortiment'
import { motion } from 'framer-motion'

const data = [
  {
    image:'/assets/images/chair1.jpg',
  },
  {
    image:'/assets/images/chair2.jpg',
  },
  {
    image:'/assets/images/chair3.jpg',
  },
  
]

export default function Home(props) {
  const {page, setPage, switchPages, setCurrency, currency} = props
 
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500, 
  };

  return (
    <motion.div
      
    >
        <Header page={page} setCurrency={setCurrency} currency={currency} setPage={setPage} switchPages={switchPages}>
        </Header>
        
        <motion.div
          className='text-white flex flex-col sm:flex-row justify-center  gap-10 lg:gap-60 mt-0 pt-0  items-center h-[484px] '
          initial={{opacity: 0, y: 20 }}
          animate={{opacity: 1, y:0 }}
          exit={{opacity: 0, y: -20}}
          transition={{duration: 0.5 ,ease: "easeInOut"}}
         >
          <div className='flex flex-col sm:flex-row gap-4 lg:gap-28 text-center sm:text-left items-center sm:ml-10'>
            <div className='flex sm:flex-col gap-4 sm:gap-4'>
              <i className="fa-brands fa-facebook hover: cursor-pointer"></i>
              <i className="fa-brands fa-instagram hover: cursor-pointer"></i>
              <i className="fa-brands fa-google hover: cursor-pointer"></i>
              <i className="fa-brands fa-youtube hover: cursor-pointer"></i>
            </div>
            <div className='flex flex-col  sm:items-start max-w-[240px] sm:max-w-[480px] w-full '>
              <h1 className='font-semibold text-3xl md:text-3xl xl:text-6xl '><span className='text-lime-500'>Simple</span>
              <span className='underline underline-offset-4 decoration-lime-500'>Wood </span><span className='underline underline-offset-4 decoration-lime-500'>Chair</span> <span className='text-lime-500'>Collecion</span></h1>
              <p className='font-light text-xs sm:text-sm mt-5 mb-5 max-w-[250px] text-gray-300'>Find hand-curated collections that fit your style, space, and budget</p>
              <a href='#sortiment'>
                <button   className=' group/arrow pt-2 pb-2 pl-5 pr-5 font-semibold text-[13px] bg-lime-500' >
                  Shop Now <i className="group-hover/arrow:ml-1 delay-100 duration-200  fa-solid fa-arrow-right pl-1"></i>
                </button>
              </a>
            </div>
          </div>
          
          <div className='h-[200px] w-[200px] sm:w-[400px] sm:h-[400px] mb-10'>
            <div >
              <Slider {...settings}>
                  {data.map((item, itemIndex)=> {
                    return (
                      <div key={itemIndex}>
                        <img src={item.image} className='w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] object-contain'/>
                      </div>
                    )
                  })}
              </Slider>
            </div>
          </div>
        </motion.div>
        <Sortiment></Sortiment>
        
        
        
    </motion.div>
  )
}
