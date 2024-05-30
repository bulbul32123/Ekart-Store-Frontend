'use client'
import React, { useEffect, useRef, useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import SearchCard from './SearchCard';
import { useRouter } from 'next/navigation';

export default function SearchBar({ data }) {
    const router = useRouter()
    const [iSearchResultOpen, setIsSearchResultOpen] = useState(false);
    const [SearchResultValue, setSearchResultValue] = useState('');
    const [datas, setDatas] = useState([]);
    const searchRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchResultOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [data])
    const navigateToSearchPage = (e) => {
        if (e.key === 'Enter' && SearchResultValue.length > 0) {
            router.push(`/search?query=${SearchResultValue}`)
            setIsSearchResultOpen(false)
        }
    }
    const SendToSearchPage = () => {
        if (SearchResultValue.length > 0) {
            router.push(`/search?query=${SearchResultValue}`)
            setIsSearchResultOpen(false)
        }
    }
    const getFilterData = () => {
        if (SearchResultValue.length > 0) {
            let temp = data?.filter((item) => item?.attributes?.title?.toLowerCase()?.includes(SearchResultValue.toLowerCase()))
            setDatas(temp)
        }
        else {
            setDatas([])
        }
    }
    useEffect(() => {
        getFilterData()
    }, [SearchResultValue])

    return (
        <>
            <div className={`relative ${SearchResultValue.length && iSearchResultOpen > 0 ? 'z-[6]' : 'z-[0]'}`} ref={searchRef}>
                <input type="text" placeholder='Search here....' onFocus={() => setIsSearchResultOpen(true)} onChange={(e) => setSearchResultValue(e.target.value)} value={SearchResultValue} onKeyUp={(e) => navigateToSearchPage(e)} className='w-full border border-gray-300 outline-none focus-within:border-[#28AE5F] transition-all duration-200 focus-within:border py-2 rounded-3xl pl-11' />
                <button onClick={SendToSearchPage} className='absolute rounded-3xl py-1.5 text-gray-500 text-sm font-light transitions hover:bg-[#28AE5F] hover:text-white bg-gray-100 px-4 md:px-6 top-[5px] right-2'>Search</button>
                <span className='absolute rounded-full p-2 text-gray-500  transitions hover:bg-[#28AE5F] hover:text-white bg-gray-100  top-[4px] left-1.5'><IoSearchSharp size={18} /></span>
                <div className={`absolute left-0 sm:left-2 w-full  border rounded-md ${SearchResultValue.length && iSearchResultOpen > 0 ? 'top-12 opacity-1 z-[10] h-80 bg-white ' : 'top-16 h-0 border-none '} transition-all duration-300 ease-in-out overflow-x-hidden`}>
                    {datas?.length > 0 ? <div className="flex flex-col gap-2 h-full w-full p-1">
                        {datas?.map((data, index) => (
                            <SearchCard searchQuery={SearchResultValue} key={index} item={data} />
                        ))
                        }
                    </div> : (
                        <div className="h-full w-full bg-white flex justify-center items-center">
                            No Products Found.
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    )
}
