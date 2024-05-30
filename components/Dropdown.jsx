'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import MegaMenu from './MegaMenu';

export default function DropDowns({ title, iscategory, lists,products }) {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    return (
        <>
            <div className={`flex justify-center items-center  ${iscategory ? 'relative z-[3]' : 'z-[3] '}`}>
                <div onMouseEnter={() => setIsDropDownOpen(true)} onMouseLeave={() => setIsDropDownOpen(false)}>
                    <button className={`${iscategory ? 'bg-[#28AE5F] text-white rounded-full px-8 py-2.5' : 'hover:text-white focus:bg-[#28AE5F] focus:text-white hover:bg-[#28AE5F] py-2  px-3 bg-transparent rounded-3xl'} flex flex-row items-center w-full mt-2 text-sm font-semibold text-left  md:w-auto md:inline md:mt-0 md:ml-4  `}>
                        <div className="flex gap-2 items-center justify-center">
                            {iscategory && <span><CiMenuFries size={15} /></span>}
                            <span>{title}</span>
                            <span className={`${isDropDownOpen ? 'rotate-180' : 'rotate-0'}`}> <IoIosArrowDown /></span>
                        </div>
                    </button>
                    {isDropDownOpen ?
                        (iscategory ? (
                            <div className={`${iscategory && "sm:ml-5"}  absolute -pb-10  h-full origin-top-right rounded-md shadow-xl w-52`}>
                                <div onClick={() => setIsDropDownOpen(false)} className="px-2 py-2 bg-white rounded-md shadow ">
                                    {lists?.data?.map((item) => (
                                        <Link href={`/products?category=${item?.attributes?.name}&brand=all&color=all&feature=all&condition=all&sort_by=desc`} className={`px-4 py-2 mt-2  bg-transparent rounded-sm md:mt-0 text-black ${iscategory ? 'text-base' : 'text-sm'} hover:text-white flex gap-1.5 items-center hover:bg-[#28AE5F]`} key={item?.id} >
                                            <img src={item?.attributes?.image?.data?.attributes?.url} alt={item?.attributes?.name} className='w-6 h-7 rounded-full imgObject' />
                                            <span className='capitalize'>{item?.attributes?.name}</span>
                                            <span className={`${iscategory ? "pl-2" : "text-xs"}  `}>({item?.attributes?.products?.data?.length})</span>
                                        </Link>
                                    ))
                                    }

                                </div>
                            </div>
                        ) : (
                            <div className="">
                                <MegaMenu products={products}/>
                            </div>
                        )) : ''
                    }
                </div>
            </div>
        </>
    )
}


