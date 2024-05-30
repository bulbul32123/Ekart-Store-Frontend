'use client'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux';

export default function ShoppingCartIcon() {
    const { cart } = useSelector((state) => state.cart);
    return (
        <>
            <div className='relative'><FaShoppingCart size={23} />
                {cart?.length > 0 && (
                    <span className='text-[10px]  imgSelectNone absolute -top-3 -right-3 rounded-full py-[2px] px-[4px] bg-orange-400 text-white'>{cart.length}</span>
                )
                }
            </div>
        </>
    )
}
