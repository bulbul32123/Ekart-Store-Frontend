'use client';
import { RiSubtractFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";

const Counter = ({ stocks, setQuantity, quantity }) => {
    return (
        <div className="flex items-center justify-start gap-2 sm:pl-8">
            <input className="px-2 bg-gray-100 text-gray-800 text-2xl outline-none border-none font-bold py-2 w-12 rounded-sm" value={quantity} readOnly />
            <div className="flex gap-1 flex-col">
                <button onClick={() => {
                    if (quantity > 1) {
                        setQuantity(quantity - 1);
                    }
                }} className="bg-gray-200 text-gray-600 rounded-sm mt-1 p-1">
                    <RiSubtractFill size={15} />
                </button>
                <button onClick={() => {
                    if (quantity < stocks) {
                        setQuantity(quantity + 1);
                    }
                }} className="bg-gray-200 text-gray-600  p-1 rounded-sm">
                    <FaPlus size={15} />
                </button>
            </div>
        </div>
    );
};

export default Counter;
