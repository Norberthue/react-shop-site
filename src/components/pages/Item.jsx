import React, { useState, useEffect } from 'react'
import { PRODUCTS } from '../../data/products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../../stores/cart';

export default function CartItem(props) {
    const {productId, quantity} = props.data; 
    const [detail, setDetail] = useState([])
    const dispatch = useDispatch();
    
    //when value of productId change it will update
    useEffect(() => {
        const findDetail = PRODUCTS.filter(product => product.id === productId);
        setDetail(findDetail[0])
    }, [productId])

    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }))
      }

    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }))
    }
    return (
        <div className='flex justify-between items-center bg-slate-400 text-white p-2 border-b-2 border-slate-500 gap-5 rounded-md'>
            <img src={detail.image} className='w-12'></img>
            <h3>{detail.name}</h3>
            <p>${detail.price * quantity}</p>
            <div className='flex gap-2 justify-between w-20'>
                <button className='bg-gray-300 w-6 h-6 text-lime-500 rounded-full' onClick={handleMinusQuantity}>-</button>
                <span className=''>{quantity}</span>
                <button className='bg-gray-300 w-6 h-6 text-lime-500 rounded-full' onClick={handlePlusQuantity}>+</button>
              </div>
        </div>
    )
}