'use client'
import Link from 'next/link'
import React from 'react'
import { Tooltip } from 'react-tooltip'

export default function ColorFilterOptions({ colors, searchParams }) {
    const { category, brand, color, feature, condition, sort_by } = searchParams
    return (
        <>
            <div className="flex gap-1.5 flex-wrap justify-start">
                {colors?.map((col, index) => (
                    <Link scroll={false} href={`/products?category=${category}&brand=${brand}&color=${col}&feature=${feature}&condition=${condition}&sort_by=${sort_by}`} className="flex" key={index}>
                        {col === 'all' ? (
                            <div data-tooltip-id="colors-tooltip" data-tooltip-content={'All'} className={`pr-1 capitalize transition duration-100 h-6 w-6 rounded-full text-center ${col === color && 'ring-2 ring-green-500 ring-offset-2'} active:ring-gray-800`}>
                                {col}
                                <Tooltip
                                    id="colors-tooltip"
                                    place="top"
                                    content="Select Colors For Filter"
                                />
                            </div>
                        ) : (
                            <div style={{ backgroundColor: col }} data-tooltip-id="colors-tooltip" data-tooltip-content={col.slice(0, 1).toUpperCase() + col.slice(1)} className={`h-6 w-6 rounded-full ${col === color && 'ring-2 ring-green-500 ring-offset-2'} border  transition duration-100 active:ring-gray-800`}>
                                <Tooltip
                                    id="colors-tooltip"
                                    place="top"
                                    content="Select Colors For Filter"
                                />
                            </div>
                        )
                        }
                    </Link>
                ))
                }
            </div>
        </>
    )
}
