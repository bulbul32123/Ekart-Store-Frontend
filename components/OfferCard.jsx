import React from 'react'
import QuntityCounter from './QuntityCounter'
import { FaStar } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { FaBagShopping } from 'react-icons/fa6'

export default function OfferCard() {
    return (
        <>
            <div className="lg:w-[25rem] w-full sm:w-[17rem]
                ">
                <div className="w-full flex flex-col gap-2 h-full bg-gray-50 rounded-md p-[2px]">
                    <div className="relative ">
                        <Image src='/headphone.jpeg'  className='h-full w-full object-cover object-center rounded-md' alt='' height={100} width={100} />
                        <span className='absolute -top-4 -right-3 '><span><Image height={50} width={50} src="/offericon2.png" alt="" /></span></span>
                    </div>
                    <div className="flex justify-center items-center h-full w-full">
                        <button className='p-2 rounded-full relative z-[1] bg-white -mt-5'><FaBagShopping size={18} color='#22e305' /></button>
                    </div>
                    <div className="pl-2">
                        <Link href={`/products/234234`} className="flex flex-col gap-1">
                            <h1 className='text-xl text-nowrap overflow-hidden hover:text-green-500'>Title</h1>
                            <div className="flex gap-1">
                            <p className='text-sm font-light text-gray-500'>${20}</p>
                            <p className='text-xs font-light line-through text-gray-500'>${(20 - 8)}</p>
                        </div>
                            <p className='text-sm font-medium text-gray-500'>Brand: </p>
                            <p className='flex text-sm text-gray-400 gap-1 items-center'><span className='flex'> <FaStar size={10} color='orange' /> <FaStar size={10} color='orange' />  <FaStar size={10} color='orange' /> <FaStar size={10} color='orange' /> <FaStar size={10} color='orange' /></span>
                                4.8 </p>

                        </Link>
                    </div>
                    <QuntityCounter />
                </div>

            </div>
        </>
    )
}
