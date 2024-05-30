import Link from 'next/link';
import React from 'react';

export default function FilterNavDropDwonList({ searchParams, label, lists }) {
    const { category, brand, color, feature, condition, sort_by } = searchParams;
    return (
        <div className={`absolute z-[1] ${label === 'Sort' ? 'w-40' : 'w-28'} origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out focus:outline-none`}>
            {lists.map((list) => {
                const isActive = (label === 'Sort' && sort_by === list.link) ||
                    (label === 'Condition' && condition === list.link) ||
                    (label === 'Feature' && feature === list.link);

                {/* Links Urls */ }
                const sortUrl = `/products?category=${category}&brand=${brand}&color=${color}&feature=${feature}&condition=${condition}&sort_by=${list.link}`;
                const conditionUrl = `/products?category=${category}&brand=${brand}&color=${color}&feature=${feature}&condition=${list.link}&sort_by=${sort_by}`;
                const featureUrl = `/products?category=${category}&brand=${brand}&color=${color}&feature=${list.link}&condition=${condition}&sort_by=${sort_by}`;
                {/* Links Urls */ }


                return (
                    <div key={list.id} className={`active:bg-slate-300`}>
                        <Link href={label === 'Sort' ? sortUrl : label === 'Condition' ? conditionUrl : featureUrl} className={`font-medium hover:bg-green-600 hover:text-white active:bg-green-700 block px-4 py-2 text-sm ${isActive ? 'bg-green-500 text-white' : ''}`}>
                            {list.name}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}