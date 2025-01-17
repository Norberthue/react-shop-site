import React from 'react'
import {Link} from "react-router-dom"
import SmallHeader from '../SmallHeader'
import { motion } from 'framer-motion'

export default function PlaceOrder() {
  return (
    <motion.div className='bg-[#F2F2F2] h-screen flex flex-col justify-between'
    initial={{opacity: 0, y: 20 }}
    animate={{opacity: 1, y:0 }}
    exit={{opacity: 0, y: -20}}
    transition={{duration: 0.5 ,ease: "easeInOut"}}
    >
        <div className='bg-slate-600'>
            <SmallHeader></SmallHeader>
        </div>
        <div className='flex justify-center items-center '>
            <div>
                <h1 className=' sm:text-4xl '>Thank you for your purchase</h1>
            </div>
        </div>
    </motion.div>
  )
}
