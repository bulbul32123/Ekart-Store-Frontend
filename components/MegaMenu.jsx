import { brandLists, shopList } from '@/constants/contant'
import Link from 'next/link'
import React from 'react'

export default function MegaMenu({ products }) {
    return (
        <div>
            <div className="bg-white ">
                <header className="absolute bg-white w-full left-0 ">
                    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="border-b border-gray-200">
                            <div className="flex pt-2 items-center">
                                <div className="lg:ml-8  lg:self-stretch">
                                    <div className="flex h-full space-x-8">
                                        <div className="flex">
                                            <div className=" absolute inset-x-0 top-full text-sm text-gray-500">
                                                <div className="absolute inset-0 top-1/2 bg-white shadow" >
                                                </div>

                                                <div className="relative bg-white">
                                                    <div className="mx-auto max-w-7xl px-8">

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                            {/* Offer Images Start*/}

                                                            <div className="col-start-1 sm:col-start-2  grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 gap-y-5">
                                                                {products?.slice(0, 2)?.map((item) => (
                                                                    <Link href={`/products/${item?.attributes?.slug}`} className="group relative text-base sm:text-sm max-sm:mt-3" key={item?.id}>
                                                                        <div
                                                                            className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                            <img src={item?.attributes?.thumbnail?.data?.attributes?.url}
                                                                                alt={item?.attributes?.title}
                                                                                className="object-cover object-center h-96 w-full" />
                                                                        </div>
                                                                        <h2 className="mt-2 block font-medium text-gray-900">{item?.attributes?.title}</h2>
                                                                        <div 
                                                                            className="mt-2 block font-base text-gray-900">
                                                                            <span className="absolute inset-0 z-10"
                                                                            ></span>
                                                                            New Arrivals
                                                                        </div>
                                                                        <button className="mt-1 py-1 px-2 border border-black rounded-sm">Shop now</button>
                                                                    </Link>
                                                                ))
                                                                }
                                                            </div>
                                                            {/* Offer Images End */}

                                                            <div className="row-start-1 grid grid-cols-2 gap-x-8 gap-y-10 text-sm">
                                                                <div>
                                                                    <p
                                                                        className="font-medium text-gray-900">Shop By </p>
                                                                    <ul
                                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4 ">
                                                                        {shopList.map((item, index) => (
                                                                            <li className="flex" key={index}>
                                                                                <Link href={`/products?category=${item?.category}&brand=${item?.brand}&color=all&feature=all&condition=all&sort_by=desc`}
                                                                                    className="hover:text-gray-800">{item.name} </Link>
                                                                            </li>
                                                                        ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                                <div>
                                                                    <p
                                                                        className="font-medium text-gray-900">Shop By Brands</p>
                                                                    <ul
                                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4 ">
                                                                        {brandLists.map((item, index) => (
                                                                            <li className="flex" key={index}>
                                                                                <Link href={`/products?category=${item?.category}&brand=${item?.brand}&color=all&feature=all&condition=all&sort_by=desc`}
                                                                                    className="hover:text-gray-800 flex gap-1.5">{item.name}

                                                                                </Link>
                                                                            </li>
                                                                        ))
                                                                        }
                                                                    </ul>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    )
}
