import React from 'react'
import BrandFilterOptions from './BrandFilterOptions'
import ColorFilterOptions from './ColorFilterOptions'
import Link from 'next/link'

export default function MobileFilter({ searchParams, categoryList, headphones, earbuds, watches, all, allFilterList }) {
    const { category, brand, color, feature, condition, sort_by, open_filter_bar } = searchParams
    return (
        <>
            <Link href={`/products?category=${category}&brand=${brand}&color=${color}&feature=${feature}&condition=${condition}&sort_by=${sort_by}`} className={`fixed inset-0 z-10  ${open_filter_bar ? 'visible' : 'hidden'} bg-black bg-opacity-25`}></Link>

            <div className={`fixed z-40 border-2 border-white h-full flex transition-all duration-300 ease-in-out top-0 ${open_filter_bar ? 'right-[0px] opacity-1' : 'right-[-350px]'}`}>
                <div className="relative ml-auto flex h-full bg-white w-full max-w-xs flex-col  py-4 pb-8  shadow-xl ">
                    <div className="flex items-center justify-between  px-4">
                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>

                        {/* Close Filter bar */}
                        <Link href={`/products?category=${category}&brand=${brand}&color=${color}&feature=${feature}&condition=${condition}&sort_by=${sort_by}`} type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Link>
                        {/* Close Filter bar */}
                    </div>

                    {/* <!-- Filters --> */}
                    <form className="mt-4 pl-3 border-t border-gray-200 overflow-x-hidden" id='categoryform'>
                        <h3 className="sr-only">Categories</h3>
                        {/* Category Filter */}

                        <div className="border-b border-gray-200 py-6">
                            <h3 className="-my-3 flow-root">Category </h3>
                            <div className="pt-6">
                                <div className="space-y-4">
                                    {categoryList?.map((cat) => {
                                        return (
                                            <Link scroll={false} href={`/products?category=${cat}&brand=${brand}&color=${color}&feature=${feature}&condition=${condition}&sort_by=${sort_by}`} className="flex items-center" key={cat}>
                                                <input value={cat} id={`category-${cat}`} type="radio" readOnly checked={cat === category} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor={`category-${cat}`} className="ml-3 capitalize text-sm text-gray-600">{cat}</label>
                                            </Link>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                        {/* Category Filter */}

                        {/* Category Brand */}
                        <div className="border-b border-gray-200 py-6">
                            {
                                category === 'headphone' ? (
                                    <BrandFilterOptions searchParams={searchParams} data={headphones} />
                                ) : category === 'earbud' ? (
                                    <BrandFilterOptions searchParams={searchParams} data={earbuds} />
                                ) : category === 'watch' ? (
                                    <BrandFilterOptions searchParams={searchParams} data={watches} />
                                ) : category === 'all' && (
                                    <BrandFilterOptions searchParams={searchParams} data={all} />
                                )
                            }
                        </div>
                        {/* Category Brand */}

                        {/* Category Colors */}
                        <div className="border-b border-gray-200 py-6">
                            <h3 className="-my-3 flow-root">Colors </h3>
                            <div className="pt-6" >
                                {
                                    category === 'headphone' ? (
                                        <ColorFilterOptions colors={allFilterList.headphones.headphonesColor} searchParams={searchParams} />
                                    ) : category === 'earbud' ? (
                                        <ColorFilterOptions colors={allFilterList.earbuds.earbudsColor} searchParams={searchParams} />
                                    ) : category === 'watch' ? (
                                        <ColorFilterOptions colors={allFilterList.watches.watchesColor} searchParams={searchParams} />
                                    ) : category === 'all' && (
                                        <ColorFilterOptions colors={allFilterList.allColors.allColors} searchParams={searchParams} />
                                    )
                                }
                            </div>
                        </div>
                        {/* Category Colors */}

                    </form>
                </div>
            </div>
        </>
    )
}
