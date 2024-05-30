import Link from "next/link";
import FilterNavFilter from "./FilterNavFilter";
import { FaFilter } from "react-icons/fa";
export default function FilterNav({ searchParams }) {
    const conditionList = [
        {
            id: 0,
            name: 'All',
            link: 'all'
        },
        {
            id: 1,
            name: 'New',
            link: 'new'
        },
        {
            id: 2,
            name: 'Popular',
            link: 'popular'
        },
        {
            id: 3,
            name: 'Tredding',
            link: 'tredding'
        },
    ]
    const sortList = [
        {
            id: 1,
            name: 'Accending Order',
            link: 'asc'
        },
        {
            id: 2,
            name: 'Descending Order',
            link: 'desc'
        },
        {
            id: 3,
            name: 'Price: High to Low',
            link: 'p-htl'
        },
        {
            id: 4,
            name: 'Price: Low to High',
            link: 'p-lth'
        },
    ]
    const featureList = [
        {
            id: 0,
            name: 'All',
            link: 'all'
        },
        {
            id: 1,
            name: 'Wireless',
            link: 'wireless'
        },
        {
            id: 2,
            name: 'Bluetooth',
            link: 'bluetooth'
        },
        {
            id: 3,
            name: 'Wired',
            link: 'wired'
        },
        {
            id: 4,
            name: 'Multifeatures',
            link: 'multifeatures'
        },
    ]
    const { category, brand, color, feature, condition, sort_by, } = searchParams

    return (
        <>
            <div className="flex items-center gap-3 flex-wrap">
                <FilterNavFilter searchParams={searchParams} label='Sort' lists={sortList} />
                <FilterNavFilter searchParams={searchParams} label='Condition' lists={conditionList} />
                <FilterNavFilter searchParams={searchParams} label='Feature' lists={featureList} />


                {/* Mobile Filter Bar */}
                <Link href={`/products?category=${category}&brand=${brand}&color=${color}&feature=${feature}&condition=${condition}&sort_by=${sort_by}&open_filter_bar=true`} className="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                    <span className="sr-only">Filters</span>
                    <span><FaFilter size={20} /></span>
                </Link>
                {/* Mobile Filter Bar */}
                
            </div>
        </>
    )
}
