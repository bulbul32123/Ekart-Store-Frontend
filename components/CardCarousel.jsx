'use client'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';
import Title from './Title';


export default function CardCarousel({ title, data }) {
    
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };

    const ButtonGroup = ({ next, previous }) => {
        return (
            <div className="absolute -top-[16px] right-0 max-sm:hidden">
                <button className={`absolute rounded-full right-0 w-[45px] h-[45px] transition-all duration-200 hover:bg-green-500 text-black bg-slate-100 hover:text-white z-10 flex items-center justify-center cursor-pointer hover:opacity-90`}
                    onClick={() => next()}
                >
                    <IoIosArrowBack className='text-sm md:text-lg rotate-180' />
                </button>
                <button className={`absolute rounded-full right-[50px] w-[45px] h-[45px] transition-all duration-200 hover:bg-green-500 text-black bg-slate-100 hover:text-white z-10 flex items-center justify-center cursor-pointer hover:opacity-90`}
                    onClick={() => previous()}
                >
                    <IoIosArrowBack className='text-sm md:text-lg ' />
                </button>
            </div>
        );
    };


    return (
        <div className='relative w-full h-full'>
            <Title title={ title } />
            <Carousel responsive={responsive}
                 arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
                {data?.map((item,inde)=>(
                    <ProductCard item={item} key={inde} />
                ))
                }
            </Carousel>
        </div>
    )
}
