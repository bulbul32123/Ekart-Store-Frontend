import Products from '@/components/productpage/Products'
import { apiFetcher } from '@/utils/api'
import React from 'react'

export default async function ProductPage({ searchParams }) {
  const { data } = await apiFetcher('/api/products?populate=*&pagination[page]=1&pagination[pageSize]=40')
  const { data: categoryLists } = await apiFetcher('/api/categories')
  const { data: brandLists } = await apiFetcher('/api/brands')
  const { data: earbudList } = await apiFetcher('/api/categories?populate=*&filters[name][$eq]=earbud')
  const { data: headphoneList } = await apiFetcher('/api/categories?populate=*&filters[name][$eq]=headphone')
  const { data: watchList } = await apiFetcher('/api/categories?populate=*&filters[name][$eq]=watch')

  const filterItemList = (datas, category) => {
    const newval = (datas?.[0]?.attributes?.products?.data?.map((item) => item?.attributes[category]))
    if (category === 'colors') {
      const ites = (datas?.[0]?.attributes?.products?.data?.map((item) => item?.attributes?.colors[category]))
      return ['all', ...new Set([].concat(...ites))]
    }
    return ['all', ...new Set(newval)]
  }
  // earbuds
  const earbuds = filterItemList(earbudList, 'brand')
  const earbudsColor = filterItemList(earbudList, 'colors')


  // headphone
  const headphones = filterItemList(headphoneList, 'brand')
  const headphonesColor = filterItemList(headphoneList, 'colors')

  // watch
  const watches = filterItemList(watchList, 'brand')
  const watchesColor = filterItemList(watchList, 'colors')

  // 
  const filterList = (datas, category) => {
    const newval = (datas?.map((item) => item?.attributes[category]))
    return ['all', ...new Set(newval)]
  }

  const categoryList = filterList(categoryLists, 'name')
  const brandList = filterList(brandLists, 'name')

  const allFilterCatgories = {
    earbuds: {
      earbuds,
      earbudsColor
    },
    headphones: {
      headphones,
      headphonesColor
    },

    watches: {
      watches,
      watchesColor
    },
    allColors: {
      allColors: [...new Set([...earbudsColor, ...headphonesColor, ...watchesColor])]
    }
  }



  return (
    <div>
      <Products searchParams={searchParams} data={data} categoryList={categoryList} allBrandList={brandList} allFilterList={allFilterCatgories} />
    </div>
  )
}
