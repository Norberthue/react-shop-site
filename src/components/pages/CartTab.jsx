import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import { useDispatch } from 'react-redux'
import { toggleStatusTab } from '../../stores/cart';



export default function CartTab() {
    const carts = useSelector(store => store.cart.items);//get data about items in shopping cart
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch()
    const handleOpenTabCart = () => { //handling cart tab to close or open
        dispatch(toggleStatusTab())
      }
    return (
        <div className={`fixed top-0 right-0  bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px-1fr-260px]
        transform transition-transform duration-200
        ${statusTab === false ? 'translate-x-full':''}`}>
            <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
            <div className='p-5'>
                {carts.map((item, key) => 
                    <CartItem key={key} data={item}/>
                )}
            </div>
            <div className='grid items-end grid-cols-2'>
                <button className='bg-black text-white h-20 transition duration-150 ease-in-out  hover:bg-gray-500 active:bg-black' onClick={handleOpenTabCart}>CLOSE</button>
                <button className='text-white h-20 transition duration-150 ease-in-out  bg-lime-500 hover:bg-lime-600 active:bg-lime-500'>CHECKOUT</button>
            </div>
        </div>
    )
}
