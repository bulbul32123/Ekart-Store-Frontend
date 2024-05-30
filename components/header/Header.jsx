import React from 'react';
import Link from 'next/link';
import { FaHamburger } from "react-icons/fa";
import SearchBar from '../SearchBar';
import ShoppingCartIcon from './ShoppingCartIcon';
import WatchListIcon from './WatchListIcon';
import { apiFetcher } from '@/utils/api';
import MobileHamburger from './MobileHamburger';


export default async function Header() {
  const { data } = await apiFetcher('/api/products?populate=*&pagination[page]=1&pagination[pageSize]=40')

  return (
    <header className='w-full h-16 py-5'>
      <div className="flexBetween h-w-full">
        <div className="flex items-end md:w-full max-md:pr-9 gap-1 ">
          <Link href='/' className='font-extrabold text-lg sm:text-xl text-gray-500'><span className='px-1.5 py-[2px] bg-green-500 text-white rounded-full'>E</span>Kart</Link>
        </div>
        <div className="w-full">
          <SearchBar data={data} />
        </div>
        <div className="md:w-full md:inline hidden">
          <div className="flex items-center text-gray-400 justify-end gap-5">
            <Link href='/watchlists'>
              <WatchListIcon />
            </Link>

            <Link href='/cart'>
              <ShoppingCartIcon />
            </Link>
          </div>
        </div>
        <div className="md:hidden inline text-gray-400 hover:text-gray-500 transitions">
          <MobileHamburger />
        </div>
      </div>
    </header>
  )
}
