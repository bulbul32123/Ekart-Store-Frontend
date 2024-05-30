import React from 'react'

export default function Title({ title }) {
    return (
        <>
            <div className="flex justify-between px-5 items-center h-full w-full mb-9">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="text-2xl  mb-2 text-black">{title}</h1>
                    <div className="h-1 w-28 bg-green-500 rounded" />
                </div>
            </div>
        </>
    )
}
