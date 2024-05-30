'use client'
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';

export default function WatchLists() {
  const { watchList } = useSelector((state) => state.cart);
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        {watchList.length > 0 ? (
          <div className="mx-auto max-w-screen-lg px-4 md:px-8">
            <div className="mb-6 sm:mb-10 lg:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Your Watch Lists</h2>
            </div>
            <div class="mb-6 flex flex-wrap justify-center gap-4 sm:mb-8 md:gap-6">
              {/* <!-- product - start --> */}
              {watchList?.map((data) => (
                <ProductCard item={data} key={data?.id} isWatchList={true} />
              ))
              }
              {/* <!-- product - end --> */}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-screen-lg px-4 md:px-8">
            <div className="mb-6 sm:mb-10 lg:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 lg:text-3xl">Your Watch List is Empty</h2>
              <p className='text-gray-700 text-sm text-center mb-4'>Please try to add some products</p>
            </div>
            <div className="flex h-full w-full justify-center items-center mt-4">
              <Image src='/watch-list .png' height={100} width={100} className='w-60 h-60 imgSelectNone' />
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}
