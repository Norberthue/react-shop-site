import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleStatusTab } from '../stores/cart';
import {Link} from "react-router-dom"

export default function Header(props) {
    const {page, setPage, switchPages , currency, setCurrency} = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch()
    let style1 = 'underline underline-offset-4 decoration-lime-500 duration-200'
    let style2 = 'hover:text-lime-500 duration-200'
    //total count of items
    useEffect(() => {
      let total = 0;
      carts.forEach(item => total += item.quantity);
      
      setTotalQuantity(total)
    }, [carts])
    
    const handleOpenTabCart = () => {
      dispatch(toggleStatusTab())
    }

    const handleOpenCurrency = () => {
      setIsCurrencyOpen(!isCurrencyOpen)
    }

    const handleSetCurrency = (curr) => {
      setIsCurrencyOpen(!isCurrencyOpen)
      setCurrency(curr)
    }
    return (
      <div className='flex justify-between items-center text-white py-6 px-8 md:px-44 '>
        <div className='relative hidden lg:flex items-center justify-center gap-3 '>
            <input className='rounded-3xl pl-5 py-2 border-2 focus:outline-none focus:border-lime-500 focus:bg-slate-100 text-black duration-200' placeholder='Search'>
            </input>
            <img className='text-2xl absolute top-4 right-4'  src='/assets/images/search-button.png'></img>
        </div>

        <div className='flex flex-col  justify-center items-center gap-6 mb-4'>
          <div className='flex justify-center items-center '>
            <Link  to={'/'}>
            <img className='w-52 hover:scale-105 transition-all' src='/assets/images/title.png'></img>
            </Link>
          </div>

          <ul style={{transition: "transform 1s ease"}} className='hidden xl:flex justify-between gap-2 md:gap-7 text-base xl:text-xl transform transition-transform'>
          <Link to={'/'}><li onClick={switchPages('home')} className={`p-3 cursor-pointer transition-all duration-200  ${page === 'home' ? style1 : style2} `}>Home</li></Link>
          <Link to={'/services'}><li onClick={switchPages('services')} className={`p-3 cursor-pointer transition-all ${page === 'services' ? style1: style2}`}>Services</li></Link>
          <Link to={'/contact'}><li onClick={switchPages('contact')} className={`p-3 cursor-pointer transition-all ${page === 'contact' ? style1: style2}`}>Contact</li></Link>
          <Link to={'/about'}><li onClick={switchPages('about')} className={`p-3 cursor-pointer transition-all ${page === 'about' ? style1 : style2}`}>About</li></Link>
          </ul>
        </div>
        
        <div className='hidden xl:flex gap-4 items-center '>
            <h3 className='text-lg sm:text-xl'>English</h3>
            <div className='text-lg sm:text-xl relative'>
              <h1 className='cursor-pointer w-10' onClick={handleOpenCurrency}>{currency === 'USD' ? 'USD': 'EUR'}</h1>
              <div className={`absolute -left-1 border border-lime-500 ${isCurrencyOpen ? 'opacity-100 top-8 pointer-events-auto': ' opacity-0 top-2 pointer-events-none'} duration-500  text-white bg-white rounded-lg p-1`}>
                <ul className=' text-black '>
                  <li className='cursor-pointer' onClick={() => handleSetCurrency('USD')}>USD</li>
                  <li className='cursor-pointer' onClick={() => handleSetCurrency('EUR')}>EUR</li>
                </ul>
              </div>
            </div>
            <div onClick={handleOpenTabCart} className='relative w-10 h-10 transition duration-150 ease-in-out  bg-lime-500 hover:bg-lime-600 active:bg-lime-500 rounded-full flex justify-center items-center'>
              <i className="fa-solid fa-cart-shopping text-white"></i>
              <span className='absolute top-2/3 right-1/2 w-5 h-5 bg-white text-lime-500 text-sm rounded-full flex justify-center items-center'>{totalQuantity}</span>
            </div>
        </div>

        <i onClick={() => setIsMenuOpen(!isMenuOpen)} className='bx bx-menu xl:hidden block text-5xl cursor-pointer'></i>
        <div className={`absolute z-10  xl:hidden top-24 left-0 w-full
          bg-white flex flex-col items-center
            gap-6 text-lg transform transition-transform 
            ${isMenuOpen ? 'opacity-100 pointer-events-auto': 'opacity-0 pointer-events-none'}`}
            
            style={{transition: "transform 0.3s ease, opacity 0.3 ease"}}
            >
            <Link to={'/'}><li onClick={switchPages('home')} className={`p-3 text-black cursor-pointer transition-all duration-200  ${page === 'home' ? 'underline underline-offset-4 decoration-lime-500 duration-200' : 'hover:text-lime-500 duration-200'} `}>Home</li></Link>
            <Link to={'/services'}><li onClick={switchPages('services')} className={`p-3 text-black cursor-pointer transition-all ${page === 'services' ? 'underline underline-offset-4 decoration-lime-500 duration-200': 'hover:text-lime-500 duration-200'}`}>Services</li></Link>
            <Link to={'/contact'}><li onClick={switchPages('contact')} className={`p-3 text-black cursor-pointer transition-all ${page === 'contact' ? 'underline underline-offset-4 decoration-lime-500 duration-200': 'hover:text-lime-500 duration-200'}`}>Contact</li></Link>
            <Link to={'/about'}><li onClick={switchPages('about')} className={`p-3 text-black cursor-pointer transition-all ${page === 'about' ? 'underline underline-offset-4 decoration-lime-500 duration-200' : 'hover:text-lime-500 duration-200'}`}>About</li></Link>
        </div>

        <div onClick={handleOpenTabCart} className='xl:hidden relative w-10 h-10 bg-lime-500 rounded-full flex justify-center items-center'>
              <i className="fa-solid fa-cart-shopping text-white"></i>
              <span className='absolute top-2/3 right-1/2 w-5 h-5 bg-white text-lime-500 text-sm rounded-full flex justify-center items-center'>{totalQuantity}</span>
        </div>
    </div>
  )
}
