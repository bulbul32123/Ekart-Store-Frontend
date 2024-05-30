import Link from 'next/link'
import React from 'react'
import QuantityCounter from './QuantityCounter';
import Image from 'next/image';
export default function CartCard({ item }) {
    const p = item.attributes
    return (
        <>
        
            <div className="flex flex-wrap gap-x-4 max-sm:flex-col overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6">
                <div className="group relative block h-40 w-full  bg-gray-100 sm:h-60 sm:w-52 object-cover">
                    <Image src={p?.all_colors?.all_colors[item?.selectedColor]}  alt={p?.title} className="h-full scale-90 w-full imgObject transition duration-200 imgSelectNone group-hover:scale-100" height={100} width={100} />
                </div>

                <div className="flex flex-1 flex-col justify-between py-4 max-sm:px-3">
                    <div className='mb-2'>
                        <Link href={`/products?category=${p?.category}&brand=${p?.brand}&color=all&feature=all&condition=all&sort_by=desc`} className="text-gray-500 text-sm uppercase mb-1 block">{p?.category}</Link>
                        <h1 className="inline-block text-sm sm:text-lg font-light text-gray-800 lg:text-xl"> {p?.title} </h1>
                        <span className="mb-2 mt-2 block font-extralight text-gray-800 md:text-lg">${p?.price}</span>
                        <div className="flex gap-2 ">
                            <div className={`h-8 w-8 rounded-full border ring-gray-800 ring-2 ring-offset-2 transition duration-100`}
                                style={{ backgroundColor: item?.selectedColor }}></div>
                        </div>
                    </div>
                    <div>

                        {/* <span className="flex items-center gap-1 text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            In stock
                        </span> */}
                    </div>
                </div>


                <div className="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                    <QuantityCounter quantity={item?.quantity} item={item} />
                </div>
            </div>

        </>
    )
}
