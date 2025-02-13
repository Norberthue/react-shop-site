import { useState, useEffect } from 'react'
import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../stores/cart'
import Header from '../Header';
import { motion } from 'framer-motion'


const Product = (props) => {
  const { slug } = useParams();  //get value of what user click
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1)
  const {page, setPage, switchPages , currency, setCurrency } = props
  
  //filtering what page to show when clicking on product
  useEffect(() => { //redone when value of slug changes
    const findDetail = PRODUCTS.filter(product => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0])
    }else {
      window.location.href= '/'
    }
  }, [slug])

  //handling quantity + and -
  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity -1)
  }
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1)
  }

  //adding items to cart
  const carts = useSelector(store => store.cart.items); //get data about items in shopping cart
  const dispatch = useDispatch(); //use dispatch when calling function from cart.js -redux
  const handleAddToCart = () => {
      dispatch(addToCart({
          productId: detail.id,
          quantity: quantity
      }))
  }
  return (
    <motion.div
    initial={{opacity: 0, y: 20 }}
    animate={{opacity: 1, y:0 }}
    exit={{opacity: 0, y: -20}}
    transition={{duration: 0.5 ,ease: "easeInOut"}}
    className='flex flex-col gap-8   bg-[#F2F2F2]'
    >
        <div className='h-screen bg-[#F2F2F2] flex flex-col gap-8 '>
            <div className='bg-gray-700'>
            <Header page={page} setPage={setPage} switchPages={switchPages}  currency={currency} setCurrency={setCurrency}>
            </Header>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center  gap-2 my-auto  sm:gap-10'>
              <div className=' bg-white border border-lime-500 '>
                <img className= 'object-contain w-auto h-[196px] sm:w-[606px] sm:h-[396px]' src={detail.image}></img>
              </div>
              <div className='flex flex-col gap-5 px-2'>
                <h1 className='text-4xl max-w-[400px] text-black'>{detail.name}</h1>
                <div className='flex justify-between '>
                  <div>
                    <p className='font-extralight'>As low as</p>
                    <p className='font-semibold'>{currency === 'USD' ? '$' + detail.price: '€' + detail.price}</p>
                  </div>
                  <div>
                    <p className='font-semibold'><i className="fa-solid fa-circle text-lime-500 text-sm"></i> In Stock</p>
                    <p className='font-extralight'>SKU#: 2{detail.id}-MB05</p>
                  </div>
                </div>
                <hr></hr>
                <div className='flex gap-5'>
                  <div className='flex gap-2 justify-center items-center'>
                    <button className='bg-gray-300 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
                    <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
                    <button className='bg-gray-300 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
                  </div>
                  <button onClick={handleAddToCart}  className='group/arrow pt-2 pb-2 pl-5 pr-5 font-semibold text-[13px] rounded-xl transition duration-150 ease-in-out  bg-lime-500 hover:bg-lime-600 active:bg-lime-500' >
                    Add to Cart <i className="group-hover/arrow:ml-1 delay-100 duration-200  fa-solid fa-arrow-right pl-1 "></i>
                  </button>
                </div>   
              </div>
            </div>
        </div>
        
    </motion.div>
    
  )
}

export default Product