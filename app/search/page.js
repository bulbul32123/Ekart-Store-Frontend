import React from 'react'
import CardCarousel from '@/components/CardCarousel'
import OfferCard from '@/components/OfferCard'
import SeachResultCard from '@/components/SeachResultCard'
import { apiFetcher } from '@/utils/api'
import ProductCard from '@/components/ProductCard'

export async function generateMetadata({ searchParams }) {
    const { query } = searchParams
    return {
        title: `EKart: ${query}`,
    }
}


export default async function SearchResult({ searchParams }) {
    const { query } = searchParams
    const { data } = await apiFetcher('/api/products?populate=*&pagination[page]=1&pagination[pageSize]=40')
    const newProducts = data?.filter((item) => (item?.attributes?.condition === 'new'))
    const popularProducts = data?.filter((item) => (item?.attributes?.condition === 'popular'))
    return (
        <div className="my-5">
            <div className="flex flex-col lg:flex-row gap-2 ">
                <div className="w-full">
                    <h1 className='font-bold mb-5'>Results Base on <span className='capitalize font-light text-green-500'>{query}</span></h1>
                    <SeachResultCard query={query} data={data} />
                </div>
                <div className="flex max-lg:flex-wrap max-lg:justify-center max-sm:mt-4 max-lg:flex-row flex-col gap-7">
                    {popularProducts?.slice(0, 9)?.map((item) => (
                        <ProductCard item={item} key={item?.id} isOffer={true} />
                    ))

                    }
                </div>
            </div>
            <div className="my-20">
                <CardCarousel title='New Products' data={newProducts} />
            </div>
        </div>
    )
}
