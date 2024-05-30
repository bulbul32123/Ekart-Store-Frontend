'use client';
import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import { Tooltip } from 'react-tooltip';
import { IoMdHeartEmpty } from "react-icons/io";
import StarRatings from "react-star-ratings";
import SingleProductCarousel from "@/components/SingleProductCarousel";
import CardCarousel from "@/components/CardCarousel";
import { useSelector, useDispatch } from 'react-redux';
import Markdown from "react-markdown";
import Counter from "@/components/Counter";
import { addProductToCart, addProductToWatchLst } from "@/features/cartSlice";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProductPage = ({ products, product,relatedBrandProducts }) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showError, setShowError] = useState(false);
    const [stocksOut, setStockOutError] = useState(false);
    const dispatch = useDispatch();
    const { cart,watchList } = useSelector((state) => state.cart);
    
    const notify = () => {
        toast.success('Success. Check your cart!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Bounce,
        });
    };
    
    const p = product.attributes || {};
    const isQuantityOverStocksForColor = cart.some(item => item.id === product.id && item.selectedColor === selectedColor && item.quantity >= p.stocks);
    const isExistWatchList = watchList?.some((item) => item?.id === product?.id ? item?.watchListItemExist : false);
    return (
        <div className="w-full md:py-20">
            <ToastContainer />
            <Wrapper>
                <>
                    <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[60px]">
                        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full lg:mx-0">
                            <SingleProductCarousel images={p.images?.data} />
                        </div>
                        <div className="flex-[1] h-full w-full pb-3">
                            <div>
                                <p className="text-base mb-1 title-font text-gray-500 tracking-widest capitalize">{p.category}</p>
                                <h1 className="text-black text-xl sm:text-3xl title-font font-medium mb-1">{p.title}</h1>
                                <div className="flex gap-1 mt-1.5">
                                    <p className="text-black text-xl font-bold">${p.price}</p>
                                    <p className="text-gray-500 text-base line-through">${p.original_price}</p>
                                </div>
                                <div className="flex mb-4">
                                    <span className="flex items-center flex-wrap">
                                        <StarRatings
                                            rating={p?.ratings_num}
                                            numberOfStars={10}
                                            starRatedColor="#818cf8"
                                            starDimension="20px"
                                            starSpacing="0px"
                                            svgIconPath="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                            svgIconViewBox="0 0 24 24"
                                        />
                                        ({p.ratings_num})
                                        <span className="ml-3 text-gray-700">{p.num_reviews} Reviews</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p>Stocks: {p.stocks > 0 ? <span className="text-green-500 font-semibold">Available</span> : <span className="text-red-500 font-semibold">Out of Stock</span>}</p>
                                {p.stocks > 0 && <p className="text-gray-700">Available: <span className={p.stocks > 10 ? '' : 'text-orange-700'}>{p.stocks}</span></p>}
                                <p className="text-gray-700">Condition: <span className="text-green-500 capitalize font-semibold">{p.condition}</span></p>
                                <p className="text-gray-700">Feature: <span className="capitalize text-black">{p.feature}</span></p>
                                <p className="text-gray-700">Brand: <span className="capitalize text-black">{p.brand}</span></p>
                                <p className="text-gray-700">Technology: <span className="capitalize text-black">{p.techology}</span></p>
                            </div>
                            <div className="mt-3 flex max-sm:flex-col gap-3 w-full sm:items-center" id="colorGrid">
                                <div className="flex gap-3">
                                    {p?.colors?.colors?.map((color, index) => (
                                        <button
                                            key={index}
                                            onClick={() => { setSelectedColor(color); setShowError(false); }}
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content={color.charAt(0).toUpperCase() + color.slice(1)}
                                            className={`h-8 w-8 rounded-full border ${selectedColor === color ? 'ring-gray-800 ring-4' : 'ring-2'} ring-offset-2 transition duration-100`}
                                            style={{ backgroundColor: color }}
                                        ></button>
                                    ))}
                                    <Tooltip id="my-tooltip" place="top" />
                                </div>
                                <Counter stocks={p.stocks} quantity={quantity} setQuantity={setQuantity} />
                            </div>
                            <div className="mb-5 mt-2">
                                {showError && <div className="text-red-600">Color selection is required</div>}
                                {stocksOut && <div className="text-red-600">Sorry, the stocks are out.</div>}
                                {isQuantityOverStocksForColor && <div className="text-red-600">Sorry, you can't add more of this item.</div>}
                            </div>
                            <button
                                className={`w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 ${isQuantityOverStocksForColor && 'cursor-not-allowed bg-black/25'}`}
                                onClick={() => {
                                    if (!selectedColor) {
                                        setShowError(true);
                                        document.getElementById('colorGrid').scrollIntoView({
                                            block: 'center',
                                            behavior: 'smooth'
                                        })
                                    } else if (p.stocks >= 1) {
                                        if (isQuantityOverStocksForColor) {
                                            setShowError(false);
                                        } else {
                                            notify();
                                            setShowError(false);
                                            dispatch(addProductToCart({ ...product, selectedColor, quantity }));
                                        }
                                    } else {
                                        setStockOutError(true);
                                        document.getElementById('colorGrid').scrollIntoView({
                                            block: 'center',
                                            behavior: 'smooth'
                                        })
                                    }
                                }}
                            >
                                Add to Cart
                            </button>
                            <button onClick={() => dispatch(addProductToWatchLst({ ...product, watchListItemExist: true }))} disabled={isExistWatchList}  className={`w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10 ${isExistWatchList && 'cursor-not-allowed opacity-20'}`}>
                                Wishlist
                                <IoMdHeartEmpty size={20} />
                            </button>
                            <div>
                                <div className="text-lg font-bold mb-5">Product Details</div>
                                <div className="markdown text-md mb-5">
                                    <Markdown>{p.description}</Markdown>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 mb-10">
                        <CardCarousel title='Related Products' data={products} />
                    </div>
                    <div className="mb-16">
                        <CardCarousel title='Related Brand Products' data={relatedBrandProducts?.data} />
                    </div>
                </>

            </Wrapper>
        </div>
    );
};

export default SingleProductPage;
