'use client'
import React, { useState } from 'react'
import { FaBagShopping } from "react-icons/fa6";
import 'react-medium-image-zoom/dist/styles.css'
import { IoClose } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Link from 'next/link';
import QuntityCounter from './QuntityCounter';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { Tooltip } from 'react-tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, addProductToWatchLst, removeCartItem, removeWatchListItem } from '@/features/cartSlice';
import Image from 'next/image';
import { getDiscountedPricePersentage } from '@/utils/helper';

export default function ProductCard({ item, isOffer, isWatchList }) {
    const [quantity, setQuantity] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);
    const [showColorError, setshowColorError] = useState(false);
    const [showStockoutError, setshowStockoutError] = useState(false);
    const [showQuantityError, setShowQuantityError] = useState(false);
    const { watchList } = useSelector((state) => state.cart);
    const p = item?.attributes || {};
    const dispatch = useDispatch()
    const currenItem = watchList?.some((it) => it?.id === item?.id);

    return (

        <>
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='md:h-[22rem] h-[23rem] flex justify-start items-start  w-full md:w-64 transform border border-gray-200 overflow-hidden rounded-xl relative z-[1]'>
                <div className="flex justify-center items-center flex-col p-3">
                    <div className="relative w-full h-48 z-[1]">
                        <InnerImageZoom src={p?.images?.data?.[0]?.attributes?.url} className='object-cover h-full w-full z-0 object-center' zoomType='hover' fullscreenOnMobile={true} zoomScale={1.5} hasSpacer={true} hideHint={true} />

                        {isOffer && <span className='absolute -top-8 -right-3 '><span><Image height={50} width={50} src="/offericon2.png" alt="" /></span></span>}
                        {isWatchList && <button onClick={() => dispatch(removeWatchListItem(item))} className='absolute -top-0 left-3 p-2 rounded-full bg-red-600 text-white'><span><IoClose size={20} /></span></button>}

                        <div className={`absolute top-2 ${isHovered ? 'right-2 opacity-1' : '-right-14 opacity-40'} transition-all duration-500 ease-in-out flex flex-col gap-2`}>
                            {/* Add Products to Watch List */}
                            <button onClick={() => dispatch(addProductToWatchLst({ ...item, watchListItemExist: true }))} disabled={currenItem} data-tooltip-id="fav-tooltip" data-tooltip-content="Add to Favorite" className={`p-1.5 hover:bg-green-500 hover:text-white rounded-full ${currenItem ? 'cursor-not-allowed  bg-green-500 text-white' : 'text-black bg-white '}`}><span><CiHeart size={18} /></span></button>
                            {/* Add Products to Watch List */}

                            {/* Colors Selection */}
                            <div className="flex flex-col gap-3">
                                {p?.colors?.colors?.map((color, index) => (
                                    <button
                                        key={index}
                                        onClick={() => { setSelectedColor(color); setshowColorError(false) }}
                                        data-tooltip-id="color-tooltip"
                                        data-tooltip-content={color.charAt(0).toUpperCase() + color.slice(1)}
                                        className={`h-6 w-6 rounded-full border ${selectedColor === color ? 'ring-gray-800 ring-4' : 'ring-2'} ring-offset-2 transition duration-100`}
                                        style={{ backgroundColor: color }}
                                    ></button>
                                ))
                                }
                            </div>
                            {/* Colors Selection */}

                            {isHovered && <Tooltip
                                id="fav-tooltip"
                                place="left"
                                content="Add the Items in your Favorite"
                            />}
                            {isHovered && <Tooltip
                                id="color-tooltip"
                                place="left"
                                content="Add the Items in your Favorite"
                            />}
                        </div>

                    </div>
                    <div className="flex justify-center items-start h-full w-full flex-col">
                        <div className="flex justify-center items-center relative h-full w-full">
                            {/*  Add Products to Cart */}
                            <button
                                onClick={() => {
                                    if (!selectedColor) {
                                        setshowColorError(true)
                                    }
                                    else if (p?.stocks >= 1) {
                                        if (quantity === p?.stocks) {
                                            setShowQuantityError(true)
                                        } else {
                                            setShowQuantityError(false)
                                            if (quantity === 0) {
                                                dispatch(addProductToCart({ ...item, selectedColor, quantity: (quantity + 1) }))
                                            } else {
                                                dispatch(addProductToCart({ ...item, selectedColor, quantity }))
                                            }
                                        }
                                        setshowStockoutError(false)
                                    }
                                    else {
                                        setshowStockoutError(true);
                                        setshowColorError(false)
                                    }
                                }}
                                data-tooltip-id="shopping-cart-tooltip" data-tooltip-content="Add to Cart" className='p-2 rounded-full relative z-50 bg-white -mt-5'><FaBagShopping size={18} color='#22e305' /></button>
                            {/*  Add Products to Cart */}

                            {isHovered && <Tooltip
                                id="shopping-cart-tooltip"
                                place="bottom"
                                content="Add the Items in your Cart"
                            />}
                        </div>

                        {/*  Error Message */}
                        {showColorError && <div className="text-red-600">*Color selection is required*</div>}
                        {showStockoutError && <div className="text-red-600">*Sorry, the stocks are out.*</div>}
                        {showQuantityError && <div className="text-red-600">*Sorry, you can&apos;t add more of this porduct.*</div>}
                        {/*  Error Message */}

                        {/* Card Detail */}
                        <Link href={`/products?category=${p?.category}&brand=all&color=all&feature=all&condition=all&sort_by=desc`} className='text-sm title-font font-extralight capitalize text-gray-700 pl-1.5'>{p?.category}</Link>
                        <Link href={`/products/${p?.slug}`}>
                            <h1 className='font-medium pl-1.5 hover:text-green-500 capitalize'>{p?.title.length > 30 ? p?.title.slice(0, 30) + '...' : p?.title}</h1>
                            <div className="flex gap-1.5 pt-1.5 pl-1.5 justify-between">
                                <span className='flex gap-1'>
                                    <p className='font-bold pl-1.5'>${p?.price}</p>
                                    <p className='line-through text-sm text-gray-400 pl-1.5'>${p?.original_price}</p>
                                </span>
                                {isOffer && <p className='text-green-500'>{getDiscountedPricePersentage(p?.price, p?.original_price).toFixed(2)}%</p>}
                            </div>
                        </Link>
                        {/* Card Detail */}

                        {/* Quantity Counter */}
                        <div className={`w-full ${isHovered ? 'bottom-2 opacity-1' : '-bottom-12 opacity-40'} left-0 transition-all duration-500 ease-in-out absolute `}>
                            <QuntityCounter setQuantity={setQuantity} quantity={quantity} stocks={p?.stocks} />
                        </div>
                        {/* Quantity Counter */}

                    </div>
                </div>
            </div>
        </>
    )
}
