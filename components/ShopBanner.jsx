import Link from 'next/link'
import React from 'react'

export default function ShopBanner() {
    const shopbanner = [
        {
          id: 0,
          title: "Beats's  Products",
          desc: "Explore The Best Beats's Products in Ekart Store. Find you'r products.",
          link: '/products?category=all&brand=beats&color=all&feature=all&condition=all&sort_by=desc',
          img: '/bestproducts.webp'
        },
        {
          id: 2,
          title: "Sony's Products",
          desc: "Explore The Best Sony's Products in Ekart Store.",
          link: '/products?category=all&brand=sony&color=all&feature=all&condition=all&sort_by=desc',
          img: '/sonyproducts.webp'
        },
      ]
    
    return (
        <>
            <div className="w-full">
                <div className="flex max-lg:flex-wrap gap-4 pt-14 w-full h-full justify-center items-center">
                    {shopbanner.map((item) => (
                        <div className="relative w-full rounded-md">
                            <img src={item.img} alt={item.title} className="w-full h-96  object-cover rounded-3xl   object-center select-none pointer-events-none" />
                            <div className="absolute top-32 left-8 xl:left-14 w-60 md:w-96">
                                <h1 className="text-5xl font-bold text-white">{item.title}</h1>
                                <p className="text-gray-200 text-sm pt-2 pb-3 pl-1"><span className="text-white bg-black">{item.desc}</span></p>
                                <Link href={item.link} className="py-2 px-4 rounded-3xl bg-green-500 text-white font-extralight ">Shop Now</Link>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}
