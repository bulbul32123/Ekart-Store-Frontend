'use client'
import { removeCartItem } from "@/features/cartSlice"
import { useDispatch } from "react-redux"

export default function QuantityCounter({ quantity, item }) {
    const dispatch = useDispatch()
    return (
        <>
            <div className="flex flex-col items-start gap-2">
                <div className="flex h-12 w-20 overflow-hidden rounded border">
                    <input type="number" value={quantity} readOnly className="w-full px-2 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring" />
                </div>

                <button onClick={() => dispatch(removeCartItem(item))} className="select-none text-sm font-semibold text-red-500 transition duration-100 hover:text-red-600 active:text-green-700">Delete</button>
            </div>
        </>
    )
}
