import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaStar } from "react-icons/fa";

export default function SearchCard({ item }) {
    const p = item?.attributes
    return (
        <>
            <Link href={`/products/${p?.slug}`} className="w-full flex gap-2 h-20 bg-gray-50 rounded-md hover:bg-gray-100 p-[2px]">
                <div className="w-16 sm:w-28">
                    <Image src={p?.thumbnail?.data?.attributes?.url} className='h-full w-16 sm:w-28 object-cover object-center rounded-sm' alt={p?.title} height={100} width={100} />
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className='text-[10px]  sm:text-lg text-nowrap overflow-hidden'>{p?.title.length > 27 ? (p?.title)?.slice(0, 27) + '...' : p?.title}</h1>
                    <p className='text-[8px] sm:text-sm font-light text-gray-500'>${p?.price}</p>
                    <p className='flex text-[10px] text-gray-400 gap-1 items-center'><span className='flex'> <FaStar size={10} color='orange' /></span>
                   { p?.ratings_num} </p>
                </div>
            </Link>
        </>
    )
}
