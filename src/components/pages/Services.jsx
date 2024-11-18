import React from 'react'
import Header from '../Header'
import Sortiment from './Sortiment'
import { motion } from 'framer-motion'


export default function Services(props) {
  const {page, setPage, switchPages} = props
  return (
    <motion.div
      
    >
        <Header page={page} setPage={setPage} switchPages={switchPages}>
        </Header>

        <motion.div 
        className='flex flex-col justify-center items-center gap-10 sm:ml-12  h-[484px] text-white'
        initial={{width: 0}}
        animate={{width:'100%'}}
        exit={{x: window.innerWidth, transition: {duration: 0.2}}}
        >
            <div className=''>
              <h1 className='font-semibold text-5xl  sm:text-6xl '><span className='underline underline-offset-8 decoration-lime-500'>Our</span> <span className='text-lime-500'>Services</span> </h1>
            </div>
            
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-5 text-center p-4'>
    
                <div className='border-t-4 border-lime-500 pt-2'>
                  <h1 className='text-2xl sm:text-3xl underline underline-offset-8 decoration-lime-500'>Custom-Made Furniture</h1>
                  <p className='font-medium text-sm mt-5 mb-5 '>We offer a wide selection of <i className='text-lime-500 '>wooden chairs</i> crafted with 
                  a <i className='text-lime-500 '>focus on quality and attention</i> to detail. Whether you're looking for a chair for your dining room, office, or living space, 
                    we can <i className='text-lime-500 '>customize</i> the design to suit your needs.
                  </p>
                </div>

                <div className='border-t-4 border-lime-500 pt-2'>
                  <h1 className='text-2xl sm:text-3xl underline underline-offset-8 decoration-lime-500'>Personalized Design</h1>
                  <p className='font-medium text-sm mt-5 mb-5 '>Each piece of furniture can be tailored to <i className='text-lime-500 '>fit your interior</i>.
                     Our selection includes <i className='text-lime-500 '>various types of wood</i>, finishes, and styles that seamlessly blend with your space.
                  </p>
                </div>

                <div className='hidden sm:flex flex-col border-t-4 border-lime-500 pt-2'>
                  <h1 className='text-3xl underline underline-offset-8 decoration-lime-500'>Expert Consultation</h1>
                  <p className='font-medium text-sm mt-5 mb-5 '>Not sure which type of chair is best for you?
                     Our <i className='text-lime-500 '>experts</i> are here to help you choose the right option that meets both your <i className='text-lime-500 '>functional</i> and <i className='text-lime-500 '>aesthetic </i>requirements.
                  </p>
                </div>

                <div className='hidden xl:flex flex-col border-t-4 border-lime-500 pt-2'>
                  <h1 className='text-3xl underline underline-offset-8 decoration-lime-500'>Delivery and Assembly</h1>
                  <p className='font-medium text-sm mt-5 mb-5 '>We provide
                     a complete service from <i className='text-lime-500 '>ordering to delivery</i> and assembly right at your home. Your <i className='text-lime-500 '>satisfaction</i> is our top priority.
                  </p>
                </div>

                <div className='hidden xl:flex flex-col border-t-4 border-lime-500 pt-2'>
                  <h1 className='text-3xl underline underline-offset-8 decoration-lime-500'>Maintenance and Support</h1>
                  <p className='font-medium text-sm mt-5 mb-5 '>With our wooden chairs, you also receive <i className='text-lime-500 '>professional maintenance and support</i>. 
                    We’ll help you keep your chairs in <i text-lime-500 >excellent condition</i> so they last for years to come.
                  </p>
                </div>

              </div>
        </motion.div>
        <Sortiment></Sortiment>
    </motion.div>
  )
}
