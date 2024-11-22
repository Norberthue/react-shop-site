import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import SmallHeader from '../SmallHeader';
import Item from './Item';
import CartTab from './CartTab';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { PRODUCTS } from '../../data/products';



export default function Checkout(props) {
    const {switchPages} = props
    const [detail, setDetail] = useState([])
    const carts = useSelector(store => store.cart.items);//get data about items in shopping cart
    let total = 0;
    
    function getTotalPrice() {
      {carts.map((item) => {
        let productId = item.productId
        let quantity = item.quantity
        let matchingProduct;
        let findDetail = PRODUCTS.filter(product => product.id === productId);
        matchingProduct = findDetail
        total += matchingProduct[0].price * quantity
       
      })}
    };
    let ttl = getTotalPrice()
    console.log(total)

    return (
    <motion.div className='bg-[#F2F2F2] text-black flex flex-col  gap-10'
    initial={{opacity: 0, y: 20 }}
    animate={{opacity: 1, y:0 }}
    exit={{opacity: 0, y: -20}}
    transition={{duration: 0.5 ,ease: "easeInOut"}}
    >
        <div className='bg-gray-700'>
            <SmallHeader></SmallHeader>
        </div>
        
        <div className='flex  flex-col justify-center  items-center gap-10 '>
            <div className='shadow-2xl rounded-xl '>
                <div className='flex flex-col justify-center sm:w-screen max-w-[800px]'>
                    <h2 className='text-4xl mt-5 ml-5 underline underline-offset-4 decoration-lime-500'>Billing Details</h2>
                    <div className='p-10 flex flex-col gap-10 '>
                        <div className='flex gap-5 items-center '>
                          <input type='text' className='focus:outline-none  sm:w-screen max-w-[800px] pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='Name'></input>
                        </div>
                        <div className='flex gap-5 items-center'>
                          <input type='text' className='focus:outline-none sm:w-screen max-w-[800px]  pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='Last Name'></input>
                        </div>
                        <div className='flex gap-5 items-center'>
                          <input type='text' className='focus:outline-none sm:w-screen max-w-[800px]  pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='E-mail'></input>
                        </div>
                        <div className='flex gap-5 items-center'>
                          <input type='text' className='focus:outline-none sm:w-screen max-w-[800px]  pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='Phone Number'></input>
                        </div>
                        <div className='flex gap-5 items-center'>
                          <input type='text' className='focus:outline-none sm:w-screen max-w-[800px]  pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='Country'></input>
                        </div>
                        <div className='flex gap-5 items-center'>
                          <input type='text' className='focus:outline-none sm:w-screen max-w-[800px]  pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='Adress'></input>
                        </div>
                        <div className='flex gap-5 items-center'>
                          <input type='text' className='focus:outline-none sm:w-screen max-w-[800px]  pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='City'></input>
                        </div>
                        <div className='flex gap-5 items-center'>
                          <input type='text' className='focus:outline-none  sm:w-screen max-w-[800px] pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='ZIP Code'></input>
                        </div>
                        
                    </div>
                </div>
            </div>

            
            <div className='shadow-2xl rounded-xl sm:w-screen max-w-[800px] '>
                <h2 className='p-5  text-4xl underline underline-offset-4 decoration-lime-500'>Shopping Cart</h2>
                <div className={`p-5 grid gap-2 `  }>
                    {carts.map((item, key) => 
                        <Item key={key} data={item}/>
                    )}
                </div>
                <div>
                    <h2 className='p-5 text-2xl'>Total Amout: ${total}</h2>
                </div>
            </div>
            
            <Link to={'/checkout/place-order'} className='sm:w-screen max-w-[800px] mb-5'>
                <button className='group/arrow pt-2 sm:w-screen max-w-[800px] pb-2 pl-5 pr-5 font-semibold text-[13px] rounded-xl transition duration-150 ease-in-out  bg-lime-500 hover:bg-lime-600 active:bg-lime-500' >
                    Place Order<i className="group-hover/arrow:ml-1 delay-100 duration-200  fa-solid fa-arrow-right pl-1 "></i>
                </button>
            </Link>
        </div>
        
        
        
          
    </motion.div>
  )
}
