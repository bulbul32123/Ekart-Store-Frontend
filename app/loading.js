import Image from 'next/image'
import React from 'react'

export default function Loading() {
    return (
        <>
            <div className="h-[50vh] w-full bg-white flex justify-center items-center">
                <Image src="/loading.gif" alt="Loading"  className="h-20 w-20" height={20} width={20} />
            </div>
        </>
    )
}
