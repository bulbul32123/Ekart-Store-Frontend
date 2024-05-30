'use client'
import React from 'react'
import { useSelector } from 'react-redux';

export default function WatchListProducts() {
    const { watchList } = useSelector((state) => state.cart);
    return (
        <>
            <div class="mb-6 flex flex-wrap justify-center gap-4 sm:mb-8 md:gap-6">
                {/* <!-- product - start --> */}
                {watchList?.map((data) => (
                     <ProductCard item={data} key={data?.id}/> 
                ))
                }
                {/* <!-- product - end --> */}
            </div>
        </>
    )
}
