'use client'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import FilterNavDropDwonList from './FilterNavDropDwonList'

export default function FilterNavFilter({ searchParams, label, lists }) {
    const [onMouseHovered, setOnMouseHovered] = useState(false);
    return (
        <>
            <div className="relative inline-block text-left z-[2]" >
                <div onMouseEnter={() => setOnMouseHovered(true)} onMouseLeave={() => setOnMouseHovered(false)}>
                    <button className="group inline-flex justify-center items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        {label}
                        {<IoIosArrowDown size={17} className={`${onMouseHovered ? 'rotate-180' : 'rotate-0'}`} />}
                    </button>
                    {onMouseHovered && <FilterNavDropDwonList searchParams={searchParams} label={label} lists={lists} onMouseHovered={onMouseHovered} />
                    }
                </div>
            </div>
        </>
    )
}
