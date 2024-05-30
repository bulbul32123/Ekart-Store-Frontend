'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi'
import Link from 'next/link';

const SildeData = [
  {
    id: 1,
    imgUrl: '/Earbuds.jpeg',
    name: 'earbud'
  },
  {
    id: 2,
    imgUrl: '/headphone.jpeg',
    name: 'headphone'
  },
  {
    id: 3,
    imgUrl: '/watch.webp',
    name: 'watch'
  },
]

export default function HeroBanner() {
  return (
    <div className='relative text-white  rounded-2xl text-[20px] w-full max-w-[1360px] mx-auto'>
      <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      className='rounded-2xl'
      renderArrowPrev={(clickHandler,hasPev)=>(
        <div className='absolute right-[31px]   md:right-[51px] bottom-0 w-[30px] md:w-[50px] md:h-[50px] text-black bg-green-400 z-[1] sm:flex hidden items-center justify-center cursor-pointer hover:opacity-90' onClick={clickHandler}
        >
        <BiArrowBack className='text-sm md:text-lg'/>
        </div>
      )}
      renderArrowNext={(clickHandler,hasPev)=>(
        <div className='absolute right-0 hidden bottom-0 w-[30px] md:w-[50px] md:h-[50px] bg-green-400 z-[1] text-black sm:flex items-center justify-center cursor-pointer hover:opacity-90' onClick={clickHandler}
        >
        <BiArrowBack className='text-sm md:text-lg rotate-180'/>
        </div>
      )}
      >
        {SildeData.map((item)=>(
          <div key={item.id} className='relative'>
          <img src={item.imgUrl}  className='h-[400px] imgSelectNone object-center object-cover rounded-2xl'/>
          <div className="absolute top-28 left-8">
            <h1 className='capitalize font-extralight text-[30px] md:text-[50px] leading-[40px] md:leading-[56px]'>Explore Our <br /> <span className='flex justify-end font-oswald items-end font-bold'> {item.name} </span></h1>
          </div>
          <div className=" font-oswald absolute bottom-[25px] md:bottom-[110px] left-8 ">
            <Link className='px-[15px] md:px-[20px] py-[10px] md:py-[15px] bg-white text-black/[0.9] text-[15px] md:text-[25px]  uppercase font-medium cursor-pointer hover:opacity-90' href={`/products?category=${item.name}&brand=all&color=all&feature=all&condition=all&sort_by=desc`}>Shop now</Link>
          </div>
        </div>
        ))
        }
      </Carousel>
    </div>
  )
}
