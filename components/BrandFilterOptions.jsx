import Link from 'next/link'
import React from 'react'

export default function BrandFilterOptions({ data, searchParams }) {
    const { category, color, brand, sort_by, feature, condition } = searchParams
    return (
        <>
            <h3 className="-my-3 flow-root">Brands</h3>
            <div className="pt-6" id="filter-section-0">
                <div className="space-y-4">
                    {data?.map((item) => (
                        <Link scroll={false} href={`/products?category=${category}&brand=${item}&color=${color}&feature=${feature}&condition=${condition}&sort_by=${sort_by}`} 
                        className="flex items-center" key={item}>

                            <input value={item} type="radio" id={`filter-brand-${item}`} readOnly checked={item === brand} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor={`filter-brand-${item}`} className="ml-3 text-sm capitalize text-gray-600">{item}</label>
                            
                        </Link>
                    ))
                    }
                </div>
            </div>
        </>
    )
}
