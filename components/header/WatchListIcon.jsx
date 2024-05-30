'use client'
import React from 'react'
import { FaHeart } from 'react-icons/fa6'
import { useSelector } from 'react-redux';

export default function WatchListIcon() {
    const { watchList } = useSelector((state) => state.cart);
    return (
        <>
            <div className='relative'><FaHeart size={23} />
                {watchList?.length > 0 && (
                    <span className='text-[10px] absolute imgSelectNone -top-3 -right-3 rounded-full py-[2px] px-[4px] bg-orange-400 text-white'>{watchList?.length}</span>
                )}
            </div>
        </>
    )
}
