'use client'
import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { FaHamburger } from 'react-icons/fa'
import WatchListIcon from './WatchListIcon';
import ShoppingCartIcon from './ShoppingCartIcon';
import Link from 'next/link';

export default function MobileHamburger() {
    const [openHamburger, setOpenHamburger] = useState(false);
    return (
        <div>
            <button onClick={() => setOpenHamburger((prv) => !prv)} className='p-3 rounded-full bg-gray-100 hover:bg-gray-200 transitions'>
                <span><FaHamburger size={23} /></span>
            </button>
            {
                openHamburger && (
                    <>
                        <div className="fixed w-full top-0 inset-0 z-10 bg-black/[0.4]" onClick={() => setOpenHamburger(false)}></div>
                        <div className={`w-60 h-screen fixed top-0 z-[200] bg-white transition-all duration-200 ease-in-out text-black p-3 ${openHamburger ? 'right-[0px] opacity-1' : 'right-[-350px]'}`}>
                            <div className="relative flex h-full w-full max-w-xs flex-col  py-4 pb-8">
                                <div className="flex flex-col px-4">
                                    <div className="w-full bg-white flex justify-between items-center cursor-pointer" onClick={() => setOpenHamburger(false)}>
                                        <h2 className="text-lg font-medium text-gray-900">Menu</h2>
                                        <p className='p-2 rounded-full bg-white hover:bg-slate-200 transition-all duration-200 ease-in-out'><IoClose size={20} /></p>
                                    </div>
                                    <div className="md:w-full flex mt-10">
                                        <div className="flex flex-col  text-gray-400 gap-5 w-full" >
                                            <Link href='/watchlists' onClick={() => setOpenHamburger(false)} className='hover:text-white p-3 rounded-sm hover:bg-green-500 flex gap-2 items-center'>
                                                <WatchListIcon />
                                                <p className='text-sm'>Watchlist</p>
                                            </Link>
                                            <Link href='/cart' onClick={() => setOpenHamburger(false)} className='flex items-center hover:text-white justify-start p-3 rounded-sm hover:bg-green-500 gap-2'>
                                                <ShoppingCartIcon />
                                                <p className='text-sm'>Cart</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}
