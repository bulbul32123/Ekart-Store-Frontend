'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings'

export default function SeachResultCard({ query, data }) {
    const [items, setItem] = useState([]);
    const getFilterItem = () => {
        let temp = data?.filter((item) => item?.attributes?.title?.toLowerCase()?.includes(query?.toLowerCase()))
        setItem(temp)
    }
    useEffect(() => {
        getFilterItem()
    }, [query])
    return (
        <>
            {items?.length > 0 ? (
                <div div className='flex flex-col w-full h-full gap-2' >
                    {items?.map((item) => {
                        const p = item?.attributes
                        return (
                            <Link href={`/products/${p?.slug}`
                            } className="w-full flex gap-2 h-64 sm:h-40 bg-gray-50 rounded-md hover:bg-gray-100 p-[2px]" >
                                <div className="max-sm:w-full">
                                    <Image src={p?.thumbnail?.data?.attributes?.url} className='h-full w-full object-cover object-center rounded-sm' alt={p?.title} height={100} width={100} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h1 className='text-lg text-nowrap max-sm:text-wrap overflow-hidden'>{p?.title.length > 40 ? (p?.title)?.slice(0, 40) + '...' : p?.title}</h1>
                                    <p className='text-sm mb-1 title-font text-gray-500 tracking-widest capitalize'>{p?.category}</p>
                                    <div className="flex gap-1">
                                        <p className='text-base font-light text-gray-800'>${p?.price}</p>
                                        <p className='text-xs font-light line-through text-gray-500'>${p?.original_price}</p>
                                    </div>
                                    <div className="flex gap-2 sm:items-center flex-wrap">
                                        <span>
                                            <StarRatings
                                                rating={p?.ratings_num}
                                                numberOfStars={10}
                                                starRatedColor="#818cf8"
                                                starDimension="15px"
                                                starSpacing="0px"
                                                svgIconPath="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                svgIconViewBox="0 0 24 24"
                                            />
                                            ({p.ratings_num})
                                        </span>
                                        <span className="sm:ml-3 text-gray-700">{p.num_reviews} Reviews</span>
                                    </div>
                                    <div className="flex gap-3 items-center mt-2">
                                        {p?.colors?.colors?.map((color) => (
                                            <div className="h-6 w-6 border ring-gray-800 ring-2 ring-offset-2 transition duration-100 rounded-full" style={{ backgroundColor: color }}></div>
                                        ))
                                        }
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                    }
                </div>
            ) : (
                <div className="h-full w-full bg-white flex justify-center text-2xl font-bold my-8">
                    No Products Found.
                </div>
            )
            }
        </>
    )
}
