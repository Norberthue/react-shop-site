import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


export default function Checkout(props) {
    const {switchPages} = props
    const carts = useSelector(store => store.cart.items);//get data about items in shopping cart
  return (
    <div className='bg-[#F2F2F2] flex flex-col h-screen gap-2'>
        <div className='bg-gray-600' >
            <Header switchPages={switchPages}></Header>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-center  items-center gap-10'>
            <div>
                <h2 className='text-xl mb-2'>Shipping</h2>
                <div className='bg-gray-700 p-10 grid sm:grid-cols-2 gap-5 '>
                    <div>
                        <h3 className='text-white'>First Name</h3>
                        <input className='max-w-[200px]  py-2 rounded-sm pl-5  border-2 focus:outline-none focus:border-lime-500 focus:bg-slate-100 text-black duration-200'></input>
                    </div>
                    <div>
                        <h3 className='text-white'>Last Name</h3>
                         <input className='max-w-[200px]  py-2 rounded-sm pl-5  border-2 focus:outline-none focus:border-lime-500 focus:bg-slate-100 text-black duration-200'></input>
                    </div>
                    <div>
                        <h3 className='text-white'>E-mail</h3>
                         <input className='max-w-[200px]  py-2 rounded-sm pl-5  border-2 focus:outline-none focus:border-lime-500 focus:bg-slate-100 text-black duration-200'></input>
                    </div>
                    <div>
                        <h3 className='text-white'>Phone Number</h3>
                         <input className='max-w-[200px]  py-2 rounded-sm pl-5  border-2 focus:outline-none focus:border-lime-500 focus:bg-slate-100 text-black duration-200'></input>
                    </div>
                    <div>
                        <h3 className='text-white'>Country</h3>
                         <input className='max-w-[200px]  py-2 rounded-sm pl-5  border-2 focus:outline-none focus:border-lime-500 focus:bg-slate-100 text-black duration-200'></input>
                    </div>
                    <div>
                        <h3 className='text-white'>Adress</h3>
                         <input className='max-w-[200px]  py-2 rounded-sm pl-5  border-2 focus:outline-none focus:border-lime-500 focus:bg-slate-100 text-black duration-200'></input>
                    </div>
                    <div>
                        <h3 className='text-white'>City</h3>
                         <input className='max-w-[200px]  py-2 rounded-sm pl-5  border-2 focus:outline-none focus:border-lime-500 focus:bg-slate-100 text-black duration-200'></input>
                    </div>
                    <div>
                        <h3 className='text-white'>ZIP Code</h3>
                         <input className='max-w-[200px]  py-2 rounded-sm pl-5  border-2 focus:outline-none focus:border-lime-500 focus:bg-slate-100 text-black duration-200'></input>
                    </div>
                    
                </div>
            </div>
            
            <div className=' bg-gray-700 shadow-2xl w-96 h-full grid item grid-rows-[60px-1fr]'>
                <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
                <div className='p-5'>
                    {carts.map((item, key) => 
                        <CartItem key={key} data={item}/>
                    )}
                </div>
            </div>
        </div>
        
        
        
    </div>
  )
}
