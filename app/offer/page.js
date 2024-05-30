import CardCarousel from '@/components/CardCarousel'
import ProductCard from '@/components/ProductCard'
import { apiFetcher } from '@/utils/api'
import React from 'react'

export default async function Offer() {
  const { data } = await apiFetcher('/api/products?populate=*&pagination[page]=1&pagination[pageSize]=40')
  const popularProducts = data?.filter((item) => (item?.attributes?.condition === 'popular'))
  const trenddingProducts = data?.filter((item) => (item?.attributes?.condition === 'tredding'))
  return (
    <>
      <div className="my-10">
      <h1 className='text-center text-xl font-light'>Special Product Discount </h1>
      </div>

      <div className='flex flex-wrap gap-3 justify-center my-10 h-full w-full'>
        {popularProducts?.map((item) => (
          <ProductCard key={item?.id} item={item} isOffer={true} />
        ))
        }
      </div>
      <div className="my-6">
        <CardCarousel title='Trendding Products' data={trenddingProducts} />
      </div>
    </>
  )
}
