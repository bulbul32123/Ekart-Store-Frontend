import React from 'react';
import Link from 'next/link';

import DropDowns from '../Dropdown';
import { shopList } from '@/constants/contant';
import { apiFetcher } from '@/utils/api';

export default async function Navbar() {
  const categoryList = await apiFetcher('/api/categories?populate=*')
  const { data } = await apiFetcher('/api/products?populate=*&pagination[page]=1&pagination[pageSize]=40')
  const newProducts = data?.filter((item) => (item?.attributes?.condition === 'new'))
  return (
    <nav className="bg-white pb-4 md:pb-0 max-md:gap-4 w-full md:h-14 h-full flex max-md:flex-wrap justify-around  items-center">
      <div className="">
        <DropDowns title={'All Categories'} iscategory={true} lists={categoryList} />
      </div>
      <div className="flex  items-center bg-white">
        <DropDowns title='Shop' lists={shopList} products={newProducts}/>

        <ul className="flex items-center pl-3 pr-10 relative z-[2]">
          <Link href={`/products?category=headphone&brand=all&color=all&feature=all&condition=all&sort_by=desc`}><li className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-full md:mt-0 text-black hover:text-white hover:bg-[#28AE5F] focus:bg-[#28AE5F] focus:text-white">HeadPhones</li></Link>
          <Link href={`/products?category=earbud&brand=all&color=all&feature=all&condition=all&sort_by=desc`}><li className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-full md:mt-0 text-black hover:text-white hover:bg-[#28AE5F] focus:bg-[#28AE5F] focus:text-white">Earbuds</li></Link>
        </ul>
      </div>
      <div className="bg-white">
        <Link href='/offer' className='py-3 px-4 text-sm text-orange-700 '>% Special Offer</Link>
      </div>
    </nav>
  )
}
